
import style from './card.module.css';
const Card = ({isDarkMode}) => {
    return (
        <div className={`${style.card} ${isDarkMode ? style["dark-mode"] : style["light-mode"]}`}>
            <h2>{isDarkMode ? 'Mode Sombre' : 'Mode Clair'}</h2>
            <p>
                {isDarkMode
                    ? "Vous êtes en mode sombre 🌙"
                    : "Vous êtes en mode clair ☀️"}
            </p>
        </div>
    );
};

export default Card;