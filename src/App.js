import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6ad702c17f8ab90914ba6852623d7a86";

class App extends React.Component {

    state = {
        country: undefined,
        city: undefined,
        temperature: undefined,
        description: undefined,
        humidity: undefined,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            county: data.sys.country,
            temperature: data.main.temp,
            city: data.name,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            error: ""
        });
    };

    render() {
        return (
            <>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </>
        );
    }
}

export default App;
