import { useState } from 'react'
import './App.css'
import Senhas from "./pages/Senhas.jsx"
import HomePage from './pages/HomePage.jsx'

function App() {
  const[pagina, setPagina] = useState()

  return (
    <>
      <nav>
        <button onClick={() => setPagina (<HomePage/>)}>Pagina inicial</button>
        <button onClick={() => setPagina (<Senhas/>)}>Pagina de senhas</button>
      </nav>
      {pagina}
    </>

  )
}

export default App;