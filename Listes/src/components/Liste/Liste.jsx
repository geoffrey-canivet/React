import ListeItem from "./ListeItem.jsx";

const Liste = ({liste}) => {

    const listeItem = liste.map(item => (
        <ListeItem key={item.id} id={item.id} prenom={item.prenom} isAvalable={item.isAvalable} nom={item.nom} />
    ))

    return (
        <ul>
            {listeItem}
        </ul>
    );
};

export default Liste;