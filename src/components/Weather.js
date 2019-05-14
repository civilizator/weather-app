import React from "react";


class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.country && this.props.city && <p>Location: {this.props.country}, {this.props.city}</p>}
                <p>Temperature: {this.props.temperature}</p>
                <p>Conditions: {this.props.description}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;
