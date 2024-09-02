import { useState } from 'react'
import './Sorteio.css'
import Titulo from '../components/Titulo'

function Sorteio() {
  const [numero, setNumero] = useState (0)
  // const []

    function sortear(){
        let n = Math.floor(Math.random() * 100) + 1
        // alert(numero)
        setNumero(n)
    }
    function aumentar(){
      setNumero(numero + 1)
    }
    function diminuir(){
      setNumero(numero - 1)
    }

  return (
    <div className= 'sorteio-container'>
      <Titulo texto={"Sorteio!"} emoji={"🎰"}/>
      <div className="numero">{numero}</div>
      <button className='button' onClick={sortear}>Clique para sortear</button>
      <button className="aumentar" onClick={aumentar}>+</button>
      <button className="diminuir" onClick={diminuir}>-</button>
    </div>
  )
}

export default Sorteio
