import React from "react";

export default class ApiDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch data");
                return response.json();
            })
            .then((data) => this.setState({ data, loading: false }))
            .catch((error) => this.setState({ error: error.message, loading: false }));
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) return <div> Loading data...</div >;
        if (error) return <div style={{ color: "#ff4d4d" }}>Error: {error}</div>;

        return (
            <div >
                <h1 >User Data</h1>

                <div >
                    <table >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.id}>
                                    <td><span >{user.id}</span></td>
                                    <td style={{ fontWeight: "600" }}>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address?.city}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.company?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

