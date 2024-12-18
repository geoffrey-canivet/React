import {useState} from "react";

const Recherche = ({onRegionRecive}) => {

    const [region, setRegion] = useState('');

    const handleChange = (e) => {
        setRegion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegionRecive(region);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-2 mt-2">
                        <input name="region" onChange={handleChange} type="text" className="form-control" placeholder="Ex: Bruxelles"/>
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="submit">Button</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Recherche;