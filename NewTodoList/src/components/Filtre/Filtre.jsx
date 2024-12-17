import React from 'react';
import style from './filtre.module.css';
const Filtre = ({onFiltre}) => {






    return (
        <div className="col-12">
            <div className={style.containerFiltre}>
                <button type="button" onClick={() => onFiltre("all")} className={`btn btn-primary {}`}>Tout</button>
                <button type="button" onClick={() => onFiltre("bas")} className={`btn btn-primary {}`}>Bas</button>
                <button type="button" onClick={() => onFiltre("normal")} className={`btn btn-primary {}`}>Normal</button>
                <button type="button" onClick={() => onFiltre("haut")} className={`btn btn-primary {}`}>Haut</button>
                <button type="button" onClick={() => onFiltre("complet")} className={`btn btn-primary {}`}>Terminé</button>
            </div>
        </div>
    );
};

export default Filtre;