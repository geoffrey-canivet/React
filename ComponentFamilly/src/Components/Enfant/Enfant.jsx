const Enfant = ({onSendMessage, messagePourPetitEnfant}) => {

    const MessagePourArriereGrandParent = () => {
        const message = "j'ai bien recu ton message, Bonjour arriere grand parent"
        onSendMessage(message)
    }
    return (
        <div>
            <p>Enfant</p>
            <p>Message Recus: {messagePourPetitEnfant}</p>
            <button onClick={MessagePourArriereGrandParent}>Enfant</button>
        </div>
    );
};

export default Enfant;