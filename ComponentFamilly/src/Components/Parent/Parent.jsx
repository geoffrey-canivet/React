import Enfant from "../Enfant/Enfant.jsx";

const Parent = ({ onReceiveMessage, messagePourPetitEnfant }) => {
    return (
        <div>
            <h3>Parent</h3>
            <Enfant messagePourPetitEnfant={messagePourPetitEnfant} onSendMessage={onReceiveMessage}/>
        </div>
    );
};

export default Parent;