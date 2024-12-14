import Formulaire from "../Formulaire/Formulaire.jsx";
import ListeTache from "../ListeTache/ListeTache.jsx";

const TodoList = () => {
    return (
        <>
            <div className="row">
                <Formulaire/>
                <ListeTache/>
            </div>
        </>
    );
};

export default TodoList;