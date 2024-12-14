import {useState} from "react";

const Calculatrice = () => {

    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);
    const [operator, setOperator] = useState("plus");
    const [result, setResult] = useState(0);
    const [error, setError] = useState('');

    const handleNb1 = (e) => {
        const nb = e.target.value;
        setNb1(+nb);
    }

    const handleNb2 = (e) => {
        const nb = e.target.value;
        setNb2(+nb);
    }

    const handleOperator = (e) => {
        const operator = e.target.value;
        setOperator(operator);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (operator) {
            case "plus":
                setResult(nb1 + nb2);
                break;
            case "moins":
                setResult(nb1 - nb2);
                break;
            case "fois":
                setResult(nb1 * nb2);
                break;
            case "divisé":
                if (nb2 === 0) {
                    setError("vous ne pouvez pas / par 0")
                } else {
                    setResult(nb1 / nb2);
                }

                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"nb1"} onChange={handleNb1}></input>

                <select name={"operator"} onChange={handleOperator}>
                    <option value={"plus"}>Plus</option>
                    <option value={"moins"}>Moins</option>
                    <option value={"fois"}>Fois</option>
                    <option value={"divisé"}>Divisé</option>
                </select>

                <input type={"text"} name={"nb2"} onChange={handleNb2}></input>

                <button type={"submit"}>Calculer</button>

                <input type={"text"} value={result} name={"result"} readOnly></input>
            </form>
            <p>{error}</p>
        </>
    );
};

export default Calculatrice;