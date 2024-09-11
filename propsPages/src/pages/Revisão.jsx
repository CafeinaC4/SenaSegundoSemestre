import React, { useState } from 'react'

function Revisão() {

    function mudarAlgo(){
        variavel++
        console.log(variavel)
        setEstado(estado + 1)
    }
    // criação do useState
    let variavel = 0
    const [estado, setEstado] = useState(0)
    //Ex: let idadePessoa = "blank" / const [idade, setIdade] = useState

    // alterar:
    // let variavel = 0 / setEstado(variavel + 1)
    // Altera automaticamente na pagina
    // Alterar no java: "document.getElementById("elemento").innerHTML = variavel"

   
  return (
    <div>
      <p>Valor da variavel: {variavel}</p>
      <p>Valor do estado: {estado}</p>
      <button onClick = {mudarAlgo}>Alterar</button>
    </div>
  )
}

export default Revisão
