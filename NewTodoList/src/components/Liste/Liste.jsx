import React from 'react';
import Item from "../Item/Item.jsx";
import style from './liste.module.css';
const Liste = () => {
    const testListe = () => {
        const items = []; // Crée un tableau pour stocker les éléments
        for (let i = 0; i < 20; i++) {
            items.push(
                <div className="col-4">
                    <Item key={i} />
                </div>

            ); // Ajoute chaque Item avec une clé unique
        }
        return items; // Retourne le tableau d'éléments
    };

    return (
        <div className={`row ${style.scroll}`}>
            {testListe()}
        </div>
    );
};

export default Liste;
