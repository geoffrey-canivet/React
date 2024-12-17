import React from 'react';
import style from './filtre.module.css';
const Filtre = ({onFiltre}) => {






    return (
        <div className="col-12">
            <div className={style.containerFiltre}>
                <div onClick={() => onFiltre("bas")} className={style.filtreBas}></div>
                <div onClick={() => onFiltre("normal")} className={style.filtreNormal}></div>
                <div onClick={() => onFiltre("haut")} className={style.filtreHaut}></div>
                <div onClick={() => onFiltre("complet")} className={style.filtreComplet}></div>
            </div>
        </div>
    );
};

export default Filtre;