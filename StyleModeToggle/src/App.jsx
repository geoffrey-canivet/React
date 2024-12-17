
import './App.css'
import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";

function App() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleChangeMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

  return (
    <>
      <Card isDarkMode={isDarkMode}/>
      <Button isDarkMode={isDarkMode} onClick={handleChangeMode}/>
    </>
  )
}

export default App
