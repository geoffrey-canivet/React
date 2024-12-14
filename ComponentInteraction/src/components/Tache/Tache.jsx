import style from "../ListeTache/listeTache.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

const Tache = ({nom, description, date, priorite}) => {
    return (
        <div className={`card m-3 ${style.card}`}>
            <div
                className={`card-header text-start d-flex align-items-center justify-content-between ${style.cardheader}`}>
                <div className="d-flex align-items-center">
                    <div className={style.prio}></div>
                    <p className="p-0 m-0 m-lg-2">{priorite}</p>
                </div>
                <div>
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className={`btn btn-success ${style.btnxs}`}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        <button type="button" className={`btn btn-danger ${style.btnxs}`}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>

            </div>
            <div className={`card-body text-start ${style.cardbody}`}>
                <div className="row">
                    <div className="col-10">
                        <p className={style.nom}>{nom}</p>
                        <p className={style.description}>{description}</p>
                    </div>
                </div>

            </div>
            <div className={`card-footer text-start ${style.cardfooter}`}>
                <div className="d-flex justify-content-between">
                    <div>Création: {date}</div>
                    <div>18:32</div>
                </div>

            </div>
        </div>
    );
};

export default Tache;