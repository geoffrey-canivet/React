import {useState} from "react";

const Compteur = ({nbIncrement, nbDecrement}) => {

    const [value, setIncrement] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleIncrement = () => {
        setIncrement(prevState =>{
            const newState = prevState + nbIncrement;
            if (newState > 0) setIsVisible(true);
            return newState;
        })
    }

    const handleDecrement = () => {
        setIncrement(prevState =>{
            const newState = prevState - nbIncrement;

            return newState;
        })
    }

    const handleReset = () => {
        setIncrement(0);
        setIsVisible(false)
    }

    return (
        <>
            <p>Le compteur est à {value}</p>
            <button onClick={handleIncrement}>+{nbIncrement}</button>
            <button onClick={handleDecrement}>-{nbDecrement}</button>
            {isVisible ? <button onClick={handleReset}>Reset</button> : null}

        </>
    );
};

export default Compteur;