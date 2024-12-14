
import TodoList from "./components/TodoList/TodoList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des styles CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importation des scripts JS
import style from './app.module.css';


function App() {


    const taches = [
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"},
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"},
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"},
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"},
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"},
        {id: 1, nom: "Acheter du café", description: "Ne pas oublier d'acheter du café", priorite: "bas", date: "date"}
    ]





  return (
    <>

            <h1>TODO LIST</h1>
            <TodoList/>


    </>
  )
}

export default App
