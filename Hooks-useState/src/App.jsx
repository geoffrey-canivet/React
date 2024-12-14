import './App.css'
import Compteur from "./components/Compteur/Compteur.jsx";

function App() {

    const nbIncrement = 1
    const nbDecrement = 1


  return (
    <>
        <Compteur nbIncrement={nbIncrement} nbDecrement={nbDecrement} />
    </>
  )
}

export default App
