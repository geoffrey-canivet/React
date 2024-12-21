import {useEffect, useState} from "react";
import Formulaire from "./formulaire.jsx";
import axios from "axios";


const UiLeft = ({onQueryRecieve}) => {

    const [query, setQuery] = useState('');

    // Valeur component Formulaire
    const handleQuery = (query) => { // Renomme pour éviter la confusion
        setQuery(query);
        onQueryRecieve(query); // Appelle correctement la prop reçue
    };





    return (
        <>
            <div className=""> {/*CONTAINER*/}
                <Formulaire onQueryRecieve={onQueryRecieve}/>

                <div className=""> {/*CONTAINER VIDEO*/}
                    <div className="w-full h-96 bg-black"></div>
                </div>
                <div className=""> {/*CONTAINER INFO*/}
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes
                        Upside-Down</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
                        works in outer space.
                    </p>
                </div>
            </div>
        </>
    );
};

export default UiLeft;




