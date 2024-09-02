import React from 'react'
import {useState} from 'react'

function Atividades() {
    const [resultado1, setResultado1] = useState()
    const [resultado2, setResultado2] = useState()
    function abrir525(){
        let preco = Number(prompt("Qual o valor do produto?"))
        let moedas1 = Math.floor(Number(prompt("Quantas moedas de 1 real você possui?")))
        let moedas50C = Number(prompt("Quantas moedas de 50 centavos você possui?") * 50 * 0.01)
        let moedas25C = Number(prompt("Quantas moedas de 25 real centavos possui?") * 25 * 0.01)
        let moedas10C = Number(prompt("Quantas moedas de 10 real centavos possui?") * 10 * 0.01)
        let moedas5C =Number(prompt("Quantas moedas de 5 centavos você possui?") * 5 * 0.01)
        let quantidadeTotal
        let falta

        quantidadeTotal = moedas1 + moedas50C + moedas25C + moedas10C + moedas5C
        falta = preco - quantidadeTotal

        if(preco <= quantidadeTotal){
            setResultado1("Você tem dinheiro o suficient pra comprar, sendo: R$" + quantidadeTotal)
        }else{
            setResultado1("Junta mais um pouco de grana, falta R$" + falta.toFixed(2))
        }
    }
    function abrir526(){
        let nota1 = Number(prompt("Digite sua primeira nota"))
        let nota2 = Number(prompt("Digite sua segunda nota"))
        let nota3 = Number(prompt("Digite sua terceira nota"))
        let nota4 = Number(prompt("Digite sua quarta nota"))
        let notaTotal = nota1 + nota2 + nota3 + nota4
        let media = notaTotal / 4

        if(media >= 7){
            setResultado2("Aluno aprovado")
        }else{
            setResultado2("Aluno reprovado")
        }
    }
  return (
    <div>
        <div>
            <button onClick={abrir525}>Exercicio 5.25</button>
            {resultado1}
        </div>
        <div>
            <button onClick={abrir526}>Exercicio 5.26</button>
            {resultado2}
        </div>
    </div>
  )
}

export default Atividades