import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faTemperatureHalf, faWater} from "@fortawesome/free-solid-svg-icons";

const Meteo = ({ region, info }) => {
    return (
        <>
            <div className="meteo-container p-3">
                {info && info.main && info.clouds && info.weather ? (
                    <>
                        <h4 className="m-0">{region}</h4>
                        <img src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`} alt={`Ico ${info.weather[0].description}`}/>
                        <h5 className="mb-4">{info.weather[0].description}</h5>
                        <div className="row">
                            <div className="col-6">
                                <p><span><FontAwesomeIcon icon={faTemperatureHalf} /> </span>{info.main.temp_max} °C</p>
                                <p><span><FontAwesomeIcon icon={faTemperatureHalf} /> </span>{info.main.temp_min} °C</p>
                            </div>
                            <div className="col-6">
                                <p><span><FontAwesomeIcon icon={faCloud} /> </span>{info.clouds.all} %</p>
                                <p><span><FontAwesomeIcon icon={faWater} /> </span>{info.main.humidity} %</p>
                            </div>
                        </div>
                    </>
                ) : info && info.message ? (
                    <p className="text-danger m-0">{info.message}</p>
                ) : (
                    <p className="m-0">Entre le nom d'une ville pour connaitre sa météo</p>
                )}
            </div>
        </>
    );
};

export default Meteo;
