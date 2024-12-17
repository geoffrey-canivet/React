import React from 'react';
import Item from "../Item/Item.jsx";
import style from './liste.module.css';

const Liste = ({ liste, onDelete, onFinish}) => {
    const listeTache = liste.map((item) => (
        <div key={item.id} className="col-4">
            <Item
                id={item.id}
                nom={item.nom}
                description={item.description}
                date={item.date}
                heure={item.heure}
                finish={item.finish}
                priorit={item.priorit}
                onDelete={onDelete}
                onFinish={onFinish}
            />
        </div>
    ));

    return (
        <div className={`row ${style.scroll}`}>
            {listeTache.length > 0 ? (
                listeTache
            ) : (
                <div className={style.vide}>
                    <h4>Pas encore de tache</h4>
                </div>
            )}
        </div>
    );
};

export default Liste;
