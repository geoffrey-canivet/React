import TodoList from "./components/TodoList/TodoList.jsx";
import './App.css'
import {useState} from "react";
import liste from "./data/Data";

function App() {

const [tacheState, setTacheState] = useState(liste);


    const handleFiltre = (filtre) => {
        switch (filtre) {
            case "bas":
                setTacheState((prevState) => prevState.filter((tache) => tache.priorit === "bas"));
                break;
            case "normal":
                setTacheState((prevState) => prevState.filter((tache) => tache.priorit === "normal"));
                break;
            case "haut":
                setTacheState((prevState) => prevState.filter((tache) => tache.priorit === "haut"));
                break;
            case "complet":
                setTacheState((prevState) => prevState.filter((tache) => tache.finish === true));
                break;
            default:

                break;
        }
    }

    const handleNewTache = (tache) => {
        console.log("TODO nouvelle tache :", tache);
        const nouvelleTache = {id: tache.id, nom: tache.nom, priorit: tache.priorit, description: tache.description, priorite: tache.priorite, date: tache.date, heure: tache.heure, finish: false};
        setTacheState(prevState => [...prevState, nouvelleTache])
    };

    const handleDeleteTache = (idTache) => {
        console.log(`TODO supprimer tache : ${idTache}`);
        setTacheState((prevState) => prevState.filter((tache) => tache.id !== idTache));
    };

    const handleFinishTache = (idTache) => {
        console.log(`TODO terminer tache : ${idTache}`);
        setTacheState((prevListe) => {
            const updatedListe = prevListe.map((task) =>
                task.id === idTache ? { ...task, finish: !task.finish } : task
            );
            return updatedListe;
        });
    };

  return (
    <>
        <TodoList onFiltre={handleFiltre} onAddTache={handleNewTache} onDelete={handleDeleteTache} liste={tacheState} onFinish={handleFinishTache}/>
    </>
  )
}

export default App
