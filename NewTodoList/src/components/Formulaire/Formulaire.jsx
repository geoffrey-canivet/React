import style from './formulaire.module.css';
import {useState} from "react";
const Formulaire = ({onAddTache}) => {

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    const [stateNom, setStateNom] = useState('');
    const [stateDescription, setStateDescription] = useState('');
    const [statePrior, setStatePrior] = useState('bas');

    const handleChangeNom = (e) => {
        setStateNom(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setStateDescription(e.target.value);
    }

    const handleChangePrior = (e) => {
        setStatePrior(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTache = {
            id: getRandomNumber(1, 9999),
            nom: stateNom,
            description: stateDescription,
            priorit: statePrior,
            date: new Date().toLocaleDateString(),
            heure: getCurrentTime()
        }
        onAddTache(newTache);

    }

    return (
        <>
            <div className={style.containerform}>
                <div className={`card ${style.cardform}`}>
                    <div className={`card-header ${style.cardheader}`}>Ajouter une tâche</div>
                    <div className={`card-body ${style.cardbody}`}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input onChange={handleChangeNom} type="text" className="form-control form-control-sm" id="nom" name="nom" placeholder="Nom de la tâche"/>
                            </div>
                            <div className="mb-3">
                                <textarea onChange={handleChangeDescription} className="form-control form-control-sm" id="description" name="description" rows="3" placeholder="Déscription"></textarea>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleChangePrior} className="form-select form-select-sm" name="prior" id="priorite">
                                    <option value="bas">Bas</option>
                                    <option value="normal">Normal</option>
                                    <option value="haut">Urgent</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </div>

                        </form>
                    </div>
                    <div className={`card-footer ${style.cardfooter}`}></div>
                </div>
            </div>


        </>
    );
};

export default Formulaire;