import {useState} from "react";
import GrandParent from "../GrandParent/GrandParent.jsx";

const ArriereGrandParent = () => {

    const messagePourPetitEnfant = "Bonjour petit enfant"

    const [message, setMessage] = useState('Aucun message');

    const handleReceiveMessage = (msg) => {
        setMessage(msg);
    };

    return (
        <div>
            <h1>Arrière grand parent</h1>
            <p>Message Recus: {message}</p>
            <GrandParent messagePourPetitEnfant={messagePourPetitEnfant} onReceiveMessage={handleReceiveMessage} />
        </div>

    );
};

export default ArriereGrandParent;