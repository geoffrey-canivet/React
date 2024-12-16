import style from './formulaire.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

const Formulaire = () => {
    return (
        <>
            <div className="col-4">
                <div className={`card ${style.card}`}>
                    <div
                        className={`card-header`}>
                        <div className="d-flex align-items-center">
                            <div className={style.prio}></div>
                            <p className="p-0 m-0 m-lg-2">Ajouter une tâche</p>
                        </div>
                    </div>
                    <div className={`card-body pb-0 text-start ${style.cardbody}`}>
                        <div className="row">
                            <form className={style.test}>
                                <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" id="nom"
                                           placeholder="Nom de la tâche"/>
                                </div>
                                <div className="mb-3">
                                <textarea className="form-control form-control-sm" id="description" rows="3"
                                          placeholder="Déscription"></textarea>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-sm" id="priorite" name="priorite">
                                        <option>Bas</option>
                                        <option>Normal</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                                <div className="mb-3">

                                </div>
                            </form>
                        </div>

                    </div>
                    <div className={`card-footer text-start p-3`}>
                        <button className="btn btn-sm btn-success w-100" id="submit" type="submit">Ajouter</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Formulaire;
