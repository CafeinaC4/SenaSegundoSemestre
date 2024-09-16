import React, { useState } from 'react'
import './ArCondicionado.css'
import { FaExchangeAlt } from "react-icons/fa"

function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState ('')
    const [inputFahrenheit, setInputFahrenheit] = useState ('')

    function mudouCelsius(event){
        setInputCelsius(event.target.value)
        let f = event.target.value * 1.8 +32
        setInputFahrenheit(f.toFixed(1))
    }
    function mudouFahrenheit(event){
        setInputFahrenheit(event.target.value)
        let c = ((event.target.value - 32) / 1.8).toFixed(1)
        setInputCelsius(c)
    }
    
  return (
    <div>
        <h1>Exerciício 5.27</h1>
        <p>5.27 Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>

        <div className="form-container">
            <div className='input-container'>
                <label htmlFor='inpC'>Celcius</label>
                <input type='number' id='inpC'
                    value={inputCelsius}
                    onChange={mudouCelsius}
                />
            </div>
                <FaExchangeAlt/>
            <div className='input-container'>
                <label htmlFor='inpF'>Fahrenheit</label>
                <input type='number' id='inpF'
                    value={inputFahrenheit}
                    onChange={mudouFahrenheit}
                />
            </div>
        </div>

    </div>
  )
}

export default ArCondicionado
