import React from "react";


// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.country && this.props.city && <p>Location: {this.props.country}, {this.props.city}</p>}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//                 {this.props.description && <p>Conditions: {this.props.description}</p>}
//                 {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// }

const Weather = props => (
    <>
        {props.country && props.city && <p>Location: {props.country}, {props.city}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.error && <p>{props.error}</p>}
    </>
);


export default Weather;
