import React from 'react'
import { useState } from 'react'
import ResultadosMostrados from '../Components/ResultadosMostrados'

function PopulacaoHomemEMulher() {

    let generoPopulacao = []
    let alturaPopulacao = []

    const [resultados, setResultados] = useState(false)
    const [genero, setGenero] = useState("");
    const [altura, setAltura] = useState("")
      
    const handleChange = (event) => {
        setGenero(event.target.value);
        setAltura(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        generoPopulacao.push
        alturaPopulacao.push
    };

      
    function RemoverUltimoCadastro(){

        generoPopulacao.pop
        alturaPopulacao.pop

    }
    function LimparLista(){



    }
    function ResultadoDasPerguntas(){

        setResultados(true)


    }


  return (
    <div>

        <h1>População 7.10</h1>
        <p>Foi feita um a pesquisa entre os habitantes de um a região e 
coletados os dados de altura e gênero "(0=masc , 1=fem)" das pessoas. Faça 
um programa que leia os dados de 10 pessoas e informe: 
* a maior e a menor altura encontrada; 
* a média de altura das mulheres; 
* a média de altura da população;
* o percentual de homens na população.</p>

        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    type="radio"
                    value="Masculino"
                    checked={genero === "Masculino"}
                    onChange={handleChange}
                     />
                Masculino
                </label>

                <label>
                    <input
                    type="radio"
                    value="Feminino"
                    checked={genero === "Feminino"}
                    onChange={handleChange}
                    />
                Feminino
                </label>

                <label>
                <input
                    type="number"
                    value="Altura"
                    checked={altura === "Altura"}
                    onChange={handleChange}
                    />
                </label>
                
                <button type="submit">Enviar</button>
            </form>
            <button onClick={RemoverUltimoCadastro}>Remover o ultimo cadastro</button>
            <button onClick={LimparLista}>Remover todos os cadastros</button>
            <button onClick={ResultadoDasPerguntas}>Mostrar resultados das perguntas</button>
            {resultados && <ResultadosMostrados/>}


        </div>


    </div>
  )
}

export default PopulacaoHomemEMulher
