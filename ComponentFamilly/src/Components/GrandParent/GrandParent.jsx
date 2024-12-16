import Parent from "../Parent/Parent.jsx";

const GrandParent = ({onReceiveMessage, messagePourPetitEnfant}) => {
    return (
        <div>
            <h2>GrandParent</h2>
            <Parent messagePourPetitEnfant={messagePourPetitEnfant} onReceiveMessage={onReceiveMessage}/>
        </div>
    );
};

export default GrandParent;