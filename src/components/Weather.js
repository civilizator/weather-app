import React from "react";


class Weather extends React.Component {
    render() {
        return (
            <div>
                Location: {this.props.country}, {this.props.city}
                Temperature: {this.props.temperature}
                Conditions: {this.props.description}
                Humidity: {this.props.humidity}
                {this.props.error}
            </div>
        );
    }
}

export default Weather;
