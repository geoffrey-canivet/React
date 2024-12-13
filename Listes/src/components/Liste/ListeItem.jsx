const ListeItem = ({id, nom, prenom, isAvalable}) => {
    return (
        <li>
            {id} - {nom} - {prenom} - {String(isAvalable)}
        </li>
    );
};

export default ListeItem;