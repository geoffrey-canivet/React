import Formulaire from "../Formulaire/Formulaire.jsx";
import Item from "../Item/Item.jsx";
import Liste from "../Liste/Liste.jsx";
import Filtre from "../Filtre/Filtre.jsx";
import React from "react";


const TodoList = ({liste, onAddTache, onDelete, onFinish, onFiltre}) => {
    return (
        <div className="row">
            <div className="col-4"><Formulaire onAddTache={onAddTache}/></div>
            <div className="col-8">
                <Filtre onFiltre={onFiltre}/>
                <Liste liste={liste} onDelete={onDelete} onFinish={onFinish} />
            </div>
        </div>
    );
};

export default TodoList;