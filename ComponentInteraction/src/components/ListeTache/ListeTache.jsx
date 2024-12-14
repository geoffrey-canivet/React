import Tache from "../Tache/Tache.jsx";
import style from "../ListeTache/listeTache.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faHome, faTrash} from "@fortawesome/free-solid-svg-icons";

const ListeTache = ({nom, description, priorite, date}) => {
    return (
        <>
            <div className="col-8">
                <div className="row">
                    <div className="col-4">
                        <Tache nom={nom} description={description} priorite={priorite} date={date} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListeTache;