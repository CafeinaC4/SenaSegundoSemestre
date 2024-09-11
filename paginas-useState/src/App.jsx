import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import MinhaGaragem from "./Pages/MinhaGaragem"
import Contato from "./Pages/Contato"

function App() {
const [pagina, setPagina] = useState(Home)

  return (
    <>
    <nav>
      <button onClick={ () => setPagina(<Home/>)}>Home</button>
      <button onClick={ () => setPagina(<MinhaGaragem/>)}>Garagem</button>
      <button onClick={ () => setPagina(<Contato/>)}>Contato</button>
    </nav>
      {pagina }
    </>
  )
}

export default App
