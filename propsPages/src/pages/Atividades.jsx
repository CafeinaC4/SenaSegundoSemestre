// 
// poppopopopopiiiiiiiiipooppopopopopi
// 
// -----------------------------------------------------------------------------------------------------------


import React from 'react'
import {useState} from 'react'

function Atividades() {
    // useStates
    const [resultado1, setResultado1] = useState()
    const [resultado2, setResultado2] = useState()
    const [resultado3, setResultado3] = useState()
    const [resultado4, setResultado4] = useState()
    const [resultado5, setResultado5] = useState()
    const [resultado6, setResultado6] = useState()
    const [resultado7, setResultado7] = useState()
    
    //Code: Atividade 5.25 (resultado 1)
    function abrir525(){
        let preco = Number(prompt("Qual o valor do produto?"))
        let moedas1 = Math.floor(Number(prompt("Quantas moedas de 1 real você possui?")))
        let moedas50C = Number(prompt("Quantas moedas de 50 centavos você possui?") * 50 * 0.01)
        let moedas25C = Number(prompt("Quantas moedas de 25 real centavos possui?") * 25 * 0.01)
        let moedas10C = Number(prompt("Quantas moedas de 10 real centavos possui?") * 10 * 0.01)
        let moedas5C = Number(prompt("Quantas moedas de 5 centavos você possui?") * 5 * 0.01)
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

    // Code: Atividade 5.26 (resultado 2)
    function abrir526(){
        let nota1 = Number(prompt("Digite sua primeira nota"))
        let nota2 = Number(prompt("Digite sua segunda nota"))
        let nota3 = Number(prompt("Digite sua terceira nota"))
        let nota4 = Number(prompt("Digite sua quarta nota"))
        let notaTotal = nota1 + nota2 + nota3 + nota4
        let media = notaTotal / 4

        if(media >= 7){
            setResultado2("Aluno aprovado, média: " + media)
        }else{
            setResultado2("Aluno reprovado, média: " + media)
        }
    }

    //Code: Atividade 5.27 (resultado 3)
    function abrir527(){
        let celcius
        let fahrenheit
        let conversao
        let escolha = Number(prompt("Escolha sua conversão: 1 para conversão de celcius para fahrenheit, 2 para conversão de fahrenheit para celcius"))

        if(escolha == 1){
            celcius = Number(prompt("Escolha a temperatura em Cº:"))
            conversao = celcius * 1.8 + 32
            setResultado3("A temperatura em fahrenheit é: " + conversao)
        }else if(escolha == 2){
            fahrenheit = Number(prompt("Escolha a temperatura em Fº"))
            conversao = (fahrenheit - 32) / 1.8
            setResultado3("A temperatura em graus é: " + conversao)
        }
    }

    //Code: Atividade 5.28 (resultado 4), incompleto
    function abrir528(){
        let nomeCandidatosPresidente = []
        let idadeCandidatosPresidente = []
        let nomeCandidatosVicePresidente = []
        let idadeCandidatosVicePresidente = []
        let adicionarCandidato = Number(prompt("Deseja adicionar candidato? (1 para 'sim' e 2 para 'não')"))
        let candidatosProvaveis
        

        if(adicionarCandidato == 1){
            nomeCandidatosPresidente.push(prompt("Digite o nome do candidato a presidência"))
            idadeCandidatosPresidente.push(Number(prompt("Digita o tempo (em anos) que o candidato a presidência tem de experiencia")))
            nomeCandidatosVicePresidente.push(prompt("Digite o nome do candidato a vice presidência"))
            idadeCandidatosVicePresidente.push(Number(prompt("Digita o tempo (em anos) que o candidato a vice presidência tem de experiencia")))
        }else{

            bwaocock

        }

    }

    //Code: Atividade 5.29 (resultado 5)
    function abrir529(){
        let numero = Number(prompt("Digite um numero"))
        if(numero > 0){
            setResultado5("O numero é positivo")
        }else if(numero = 0){
            setResultado5("O numero é nulo")
        }else{
            setResultado5("O numero é negativo")
        }


    }

    //Code: Atividade 5.30 (resultado 6)
    function abrir530(){
        let numero1 = Number(prompt("Digite um numero"))
        if(numero1%2 == 0 && numero1 > 0){
            setResultado6("Numero é positivo e par")
        }else if (numero1%2 != 0 && numero1 > 0){
            setResultado6("Numero é positivo e impar")
        }else if (numero1%2 == 0 && numero1 < 0){
            setResultado6("Numero é negativo e par")
        }else if (numero1%2 != 0 && numero1 < 0){
            setResultado6("Numero é negativo e impar")
        }else{
            setResultado6("Numero é nulo")
        }
    }


    //Code: Atividade 5.31 (resultado 7)
    function abrir531(){

    }


  //html para puxar as atividades
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
        <div>
            <button onClick={abrir527}>Exercicio 5.27</button>
            {resultado3}
        </div>
        <div>
            <button onClick={abrir528}>Exercicio 5.28</button>
            {resultado4}
        </div>
        <div>
            <button onClick={abrir529}>Exercicio 5.29</button>
            {resultado5}
        </div>
        <div>
            <button onClick={abrir530}>Exercicio 5.30</button>
            {resultado6}
        </div>
        <div>
            <button onClick={abrir531}>Exercicio 5.31</button>
            {resultado7}
        </div>
    </div>
  )
}

export default Atividades