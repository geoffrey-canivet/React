import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Meteo from "./Components/Meteo/Meteo.jsx";
import Recherche from "./Components/Recherche/Recherche.jsx";

import { useEffect, useState } from "react";

function App() {
    const [region, setRegion] = useState('');
    const [info, setInfo] = useState(null);
    const [archives, setArchives] = useState([]);

    const onRegionRecive = (region) => {
        setRegion(region);
    }

    const [fetchingMeteo, setFetchingMeteo] = useState({
        loading: false,
        data: null,
        error: null,
    });

    useEffect(() => {
        if (!region) return;

        setFetchingMeteo({ loading: true, data: null, error: null });

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${region}&lang=fr&units=metric&appid=7c496e7036b960f7dd86504e79c7855d`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setFetchingMeteo({ loading: false, data, error: null });
                setInfo(data)
                setArchives(prevState => [...prevState, data]);
            })
            .catch((error) => {
                setFetchingMeteo({ loading: false, data: null, error });
            });
    }, [region]);

    console.log("archives:", archives);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>App météo</h3>
                </div>
                <div className="card-body">
                    <Meteo region={region} info={info}/>
                </div>
                <div className="card-footer">
                    <Recherche onRegionRecive={onRegionRecive} />
                </div>
            </div>


        </>
    );
}

export default App;
