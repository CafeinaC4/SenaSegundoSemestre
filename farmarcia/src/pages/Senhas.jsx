import React from 'react'
import './Senhas.css'
import { useState } from 'react'

function Senhas() {
    const [filaNormal, setFilaNormal] = useState([])
    const [filaPrioritaria, setFilaPrioritaria] = useState([])
    const [nSenha, setNSenha] = useState(1)
    const [nSenhaPrio, setNSenhaPrio] = useState(1)
  
    function gerarSenha() {
      const senha = {
        numero: nSenha,
        tipo: "normal",
      }
      setFilaNormal((prevFila) => [...prevFila, senha])
      setNSenha(nSenha + 1)
    }
  
    function gerarSenhaPrioritaria() {
      const senha = {
        numero: nSenhaPrio,
        tipo: "prioritaria",
      }
      setFilaPrioritaria((prevFila) => [...prevFila, senha])
      setNSenhaPrio(nSenhaPrio + 1)
    }
  
    function atender() {
      if (filaPrioritaria.length > 0) {
        const senhaAtendida = filaPrioritaria[0]
        alert("Senha prioritária: " + senhaAtendida.numero)
        setFilaPrioritaria((prevFila) => prevFila.slice(1))
      } else if (filaNormal.length > 0) {
        const senhaAtendida = filaNormal[0]
        alert("Senha: " + senhaAtendida.numero)
        setFilaNormal((prevFila) => prevFila.slice(1))
      } else {
        alert("Sem clientes para atender")
      }
    }
  
    return (
      <>
        <button onClick={atender} disabled={filaNormal.length == 0 && filaPrioritaria.length == 0}>
          Atender
        </button>
        <button onClick={gerarSenha}>Senha Padrão</button>
        <button onClick={gerarSenhaPrioritaria}>Senha Prioritária</button>
  
        <h3>Fila Normal ({filaNormal.length})</h3>
        {filaNormal.map((senha) => (
          <div key={senha.numero}>
            <p>{senha.numero} - {senha.tipo}</p>
          </div>
        ))}
  
        <h3>Fila Prioritária ({filaPrioritaria.length})</h3>
        {filaPrioritaria.map((senha) => (
          <div key={senha.numero}>
            <p>{senha.numero} - {senha.tipo}</p>
          </div>
        ))}
      </>
    )
  }  

export default Senhas
