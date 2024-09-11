import './App.css'
import OlaUsuario from './components/OlaUsuario'
import { useState } from 'react'
import SessaoAdultos from './components/SessaoAdultos'
import Login from './components/Login'

function App() {
  const [logado, setLogado] = useState(false)
  const [idade, setIdade] =  useState(0)
 
  return (
    <>
    <div className="render-container">

      <button onClick={ () => setLogado(true) }>Logar</button>
      <button onClick={ () => setLogado(false) }>Deslogar</button>
      <button onClick={ () => setLogado(!logado) }>Alternar</button>
      { logado && <OlaUsuario/> }

    </div>
    <div className="render-container">

      <button onClick={ () => setIdade(idade - 1)}>-</button>
       { idade }
      <button onClick={ () => setIdade(idade + 1)}>+</button>
       { idade >= 18 && <SessaoAdultos/> }

    </div>

    <div className="render-container">
      { logado == true ? <OlaUsuario/> : <Login/>}
    </div>
    </>
  )
}

export default App
