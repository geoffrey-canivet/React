import Formulaire from "../Formulaire/Formulaire.jsx";
import Item from "../Item/Item.jsx";
import Liste from "../Liste/Liste.jsx";


const TodoList = () => {
    return (
        <div className="row">
            <div className="col-4"><Formulaire/></div>
            <div className="col-8"><Liste/></div>
        </div>
    );
};

export default TodoList;