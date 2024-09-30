import { useState } from 'react'
import './App.css'

function App() {
  const [fila, setFila] = useState([])

  function gerarSenha(){
    let senha ={
      numero: Date.now(),
      tipo: "normal",
    }
    setFila([...fila, senha])

  }

  function gerarSenhaPrioritaria() {
    let senha ={
      numero: Date.now(),
      tipo: "prioritaria",
    }
    setFila([...fila, senha])

  }

  function atender() {
    let senhaPrioritaria = fila.filter((senha) => senha.tipo == "prioritaria")
    let senhaNormal = fila.filter((senha) => senha.tipo == "normal")

    if (senhaPrioritaria.length != 0) {
      alert("Senha prioritária " + senhaPrioritaria[0].numero)
      // setFila(senhaPrioritaria.slice(1))
    }else if(senhaNormal.length != 0 && senhaPrioritaria.length == 0){
      alert("Senha: " + senhaNormal[0].numero)
      // setFila(senhaNormal.slice(1))
    }else{
      alert("Sem clientes para atender")
    }

    setFila([...senhaPrioritaria, ...senhaNormal])
  }

  return (
    <>

      <button onClick={atender}>Atender</button>
      <button onClick={gerarSenha}>Senha Padrão</button>
      <button onClick={gerarSenhaPrioritaria}>Senha Prioritaria</button>
        {fila.map( (senha) => (
          <div key={senha.numero}>
            <p>{senha.numero}</p>
            <p>{senha.tipo}</p>
          </div>
        ))}
    </>
  )
}

export default App
