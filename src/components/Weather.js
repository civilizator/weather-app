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
        <div className="weather__info">
            {props.country && props.city &&
            <p className="weather__key">Location:
                <span className="weather__value"> {props.country}, {props.city}
                </span>
            </p>
            }
            {props.temperature &&
            <p className="weather__key">Temperature:
                <span className="weather__value"> {props.temperature}
                </span>
            </p>
            }
            {props.description &&
            <p className="weather__key">Conditions:
                <span className="weather__value"> {props.description}
                </span>
            </p>
            }
            {props.humidity &&
            <p className="weather__key">Humidity:
                <span className="weather__value"> {props.humidity}
                </span>
            </p>
            }
            {props.error && <p className="weather__error">{props.error}</p>}
        </div>
    </>
);


export default Weather;
