import React from "react";

export default class WeatherAPIDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            weather: null,
            loading: false,
            error: null,
        };
    }

    handleSearch = () => {
        if (!this.state.city.trim()) return;

        this.setState({ loading: true, error: null, weather: null });

      
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(this.state.city)}&count=1&language=en&format=json`)
            .then(res => res.json())
            .then(geoData => {
                if (!geoData.results || geoData.results.length === 0) {
                    throw new Error("City not found. Please try another name.");
                }
                const { latitude, longitude, name, country } = geoData.results[0];
                
                
                return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                    .then(res => res.json())
                    .then(weatherData => {
                        this.setState({
                            weather: {
                                name,
                                country,
                                temp: weatherData.current_weather.temperature,
                                windspeed: weatherData.current_weather.windspeed,
                                weathercode: weatherData.current_weather.weathercode,
                            },
                            loading: false
                        });
                    });
            })
            .catch(err => {
                this.setState({ error: err.message, loading: false });
            });
    }

    getWeatherDesc = (code) => {
        const codes = {
            0: "Clear sky",
            1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
            45: "Fog", 48: "Depositing rime fog",
            51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle",
            61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain",
            71: "Slight snow", 73: "Moderate snow", 75: "Heavy snow",
            95: "Thunderstorm"
        };
        return codes[code] || "Weather unknown";
    }

    render() {
        const { city, weather, loading, error } = this.state;

        return (
            <div>
                <h1>Weather Forecast</h1>
                
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter city name" 
                        value={city}
                        onChange={(e) => this.setState({ city: e.target.value })}
                        
                    />
                    <button onClick={this.handleSearch} >
                        Search
                    </button>
                </div>

                {loading && <div >Weather data is loading...</div>}
                
                {error && <div>{error}</div>}

                {weather && (
                    <div >
                        <h2>{weather.name}, {weather.country}</h2>
                        <div >{weather.temp}°C</div>
                        <div >{this.getWeatherDesc(weather.weathercode)}</div>
                        <div >
                            <span> Wind: {weather.windspeed} km/h</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
