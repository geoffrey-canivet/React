import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculatrice from "./components/Calculatrice/Calculatrice.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Calculatrice/>
    </>
  )
}

export default App
