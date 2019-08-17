import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "";

class App extends React.Component {

    state = {
        country: undefined,
        city: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        error: "Your API Key"
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        console.log(data);

        if (city && country && data.cod !== 404 && data.cod !== 401 ) {
            this.setState({
                country: data.sys.country,
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                error: ""
            });
        } else {
            this.setState({
                country: undefined,
                city: undefined,
                temperature: undefined,
                description: undefined,
                humidity: undefined,
                error: "Please enter Country and City"
            });
        }
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        country={this.state.country}
                                        city={this.state.city}
                                        temperature={this.state.temperature}
                                        description={this.state.description}
                                        humidity={this.state.humidity}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
