import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import style from "./item.module.css";
const Item = ({id, finish, priorit, nom, description, date, heure, onDelete, onFinish}) => {
    return (
        <div className={`card mb-3 ${finish ? style.carditemfinish : style.carditem} ${style.carditem}`}>
            <div
                className={`card-header text-start d-flex align-items-center justify-content-between ${style.cardheader} `}>
                <div className="d-flex align-items-center">
                    <div className={
                        priorit === "bas" ? style.importance : priorit === "normal" ? style.importance2 : style.importance3
                    }></div>
                    <p className="p-0 m-0 m-lg-2">{priorit}</p>
                </div>
                <div>
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button onClick={() => onFinish(id)} type="button" className={`btn btn-sm btn-success`}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        <button onClick={() => onDelete(id)} type="button" className={`btn btn-sm btn-danger`}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>

            </div>
            <div className={`card-body ${style.cardbody}`}>
            <p className="card-title">{nom}</p>
                <p className="card-text">{description}</p>
            </div>
            <div className={`card-footer text-start ${style.cardfooter}`}>
                <div className="d-flex justify-content-between">
                    <div>Création: {date}</div>
                    <div>{heure}</div>
                </div>

            </div>
        </div>
    );
};

export default Item;