import { useState } from 'react'
import './App.css'
import ArCondicionado from './Pages/ArCondicionado'
import Porquinho from './Pages/Porquinho'

function App() {
  const[pagina, setPagina] = useState()

  return (
    <>
    <nav>
      <button onClick={() => setPagina (<Porquinho/>)}>5.25</button>
      <button onClick={() => setPagina (<ArCondicionado/>)}>5.27</button>
    </nav>
      {pagina}
    </>
  )
}

export default App
