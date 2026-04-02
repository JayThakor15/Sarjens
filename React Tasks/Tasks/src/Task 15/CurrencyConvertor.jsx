import React from 'react'

export default class CurrencyConvertor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 1,
            fromCurrency: 'USD',
            toCurrency: 'INR',
            result: null,
            error: null,
            loading: false,
        }
    }

    handleConvert = () => {
        const { amount, fromCurrency, toCurrency } = this.state;
        if (!amount || isNaN(amount)) {
            this.setState({ error: "Enter valid Amount" });
            return;
        }

        if (fromCurrency === toCurrency) {
            this.setState({ result: amount, loading: false, error: null });
            return;
        }

        this.setState({ loading: true, error: null, result: null });


        fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`)
            .then(res => {
                if (!res.ok) throw new Error("Failed");
                return res.json();
            })
            .then(data => {
                console.log(data);

                const rate = data.rates[toCurrency];
                if (rate) {
                    const convertedAmount = (amount * rate).toFixed(2);
                    this.setState({
                        result: convertedAmount,
                        loading: false
                    });
                } else {
                    throw new Error("Target currency rate not found");
                }
            })
            .catch(err => {
                this.setState({ error: err.message, loading: false });
            });
    }

    render() {
        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Currency Convertor</h1>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        value={this.state.amount}
                        onChange={(e) => this.setState({ amount: e.target.value })}
                        style={{ padding: '8px', marginRight: '10px' }}
                    />
                    <select
                        value={this.state.fromCurrency}
                        onChange={(e) => this.setState({ fromCurrency: e.target.value })}
                        style={{ padding: '8px', marginRight: '10px' }}
                    >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <span> to </span>
                    <select
                        value={this.state.toCurrency}
                        onChange={(e) => this.setState({ toCurrency: e.target.value })}
                        style={{ padding: '8px', marginRight: '10px', marginLeft: '10px' }}
                    >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <button
                        onClick={this.handleConvert}
                        style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
                    >
                        {this.state.loading ? 'Converting..' : 'Convert'}
                    </button>
                </div>

                {this.state.error
                }

                {this.state.result
                }
            </div>
        )
    }
}
