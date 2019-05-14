import React from "react";


class Weather extends React.Component {
    render() {
        return (
            <div>
                Location: {this.props.country}, {this.props.city} <br/>
                Temperature: {this.props.temperature} <br/>
                Conditions: {this.props.description} <br/>
                Humidity: {this.props.humidity} <br/>
                {this.props.error}
            </div>
        );
    }
}

export default Weather;
