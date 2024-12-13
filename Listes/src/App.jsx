import './App.css'
import Liste from "./components/Liste/Liste.jsx";
import Titre from "./components/Titre/Titre.jsx";

function App() {

    const nom = 'Geoffrey'
    const liste = [
        {id: 1, nom: 'Canivet', prenom: 'Geoffrey', isAvalable: true },
        {id: 2, nom: 'Lenisa', prenom: 'Amory', isAvalable: false },
        {id: 3, nom: 'Vihtelie', prenom: 'Martine', isAvalable: true },
        {id: 4, nom: 'Thibaut', prenom: 'Laurent', isAvalable: false },
    ]

  return (
    <>
        <Titre nom={nom}/>
        <Liste liste={liste}/>
    </>
  )
}

export default App
