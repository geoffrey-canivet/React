import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from "react";


const Calculatrice = () => {

    const [stateNb1, setStateNb1] = useState(0);
    const [stateNb2, setStateNb2] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault()
    }



    return (
        <>
            <h1>Calculatrice</h1>
            <div className="card">

                <h5 className="card-header">Result</h5>

                <div className="card-body">
                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-sm" id="nb1" name="nb1" placeholder="0"/>
                        </div>

                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-sm" id="nb2" placeholder="0"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Calculer</button>

                    </form>
                </div>
            </div>

        </>
    );
};

export default Calculatrice;