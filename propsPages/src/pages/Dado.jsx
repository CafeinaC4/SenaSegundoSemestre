import { useState } from 'react'
import React from 'react'
import './Dado.css'
import { GiRollingDiceCup } from "react-icons/gi";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6} from "react-icons/bs";

function Dado() {
    const dados = [<BsDice1/>, <BsDice2/>, <BsDice3/>, <BsDice4/>, <BsDice5/>, <BsDice6/>]
    const [dado, setDado] = useState ()
    function jogarDado(){
        let d = Math.floor(Math.random() * 6) + 1
        setDado(dados[d-1])

    }
        return (
            <div className = 'dadoContainer'>
                <div className="dado">{dado}</div>
                <button className="jogarDado" onClick={jogarDado}><GiRollingDiceCup /></button>
            
            </div>
  )
}

export default Dado
