import React from 'react'
import Logo from '../assets/farmarcia.png'
import Camisa from '../assets/farmarcia-camisetas.png'
import Cartoes from '../assets/farmarcia-cartoes.png'

function HomePage() {

  return (
    <div>
        <header>
            <div className="banner">
                <img src={Logo}/>
            </div>
        </header>
        <body>
            <div className="background">
                <div className="content">
                    <h1>Bem vindo a Farmarcia!</h1>
                    <p>Após alguns contratempos nosso site estava fora do ar, mas agora, nossa farmarcia está aberta novamente!</p>
                </div>
                <div className="product-banner">
                    <h3>Conheça algum de nossos produtos para ajudar:</h3>
                    <img src={Camisa}/>
                    <img src={Cartoes}/>
                </div>
            </div>
        </body>
    </div>
  )
}

export default HomePage
