import './Sorteio.css'
import Titulo from '../components/Titulo'

function Sorteio() {
    function sortear(){
        let numero = Math.floor(Math.random() * 100) + 1
        alert(numero)
    }
  return (
    <div className= 'sorteio-container'>
      <Titulo texto={"Sorteio!"} emoji={"🎰"}/>
      <button className='button' onClick={sortear}>Clique para sortear</button>
    </div>
  )
}

export default Sorteio
