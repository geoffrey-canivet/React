const Button = ({onClick, isDarkMode}) => {
    return (
        <div>
            <button onClick={onClick}>{(isDarkMode) ? `☀️ Mode clair` : `🌙 Mode sombre`}</button>
        </div>
    );
};

export default Button;