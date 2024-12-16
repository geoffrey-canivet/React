import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import style from "./item.module.css";
const Item = () => {
    return (
        <div className={`card mb-3 ${style.carditem}`}>
            <div
                className={`card-header text-start d-flex align-items-center justify-content-between ${style.cardheader} `}>
                <div className="d-flex align-items-center">
                    <div className={style.importance}></div>
                    <p className="p-0 m-0 m-lg-2">Imortance</p>
                </div>
                <div>
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className={`btn btn-sm btn-success`}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        <button type="button" className={`btn btn-sm btn-danger`}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>

            </div>
            <div className={`card-body ${style.cardbody}`}>
                <p className="card-title">Acheter du fromage</p>
                <p className="card-text">Ne pas oublier d acheter du fromage</p>
            </div>
            <div className={`card-footer text-start ${style.cardfooter}`}>
                <div className="d-flex justify-content-between">
                    <div>Création: {}</div>
                    <div>18:32</div>
                </div>

            </div>
        </div>
    );
};

export default Item;