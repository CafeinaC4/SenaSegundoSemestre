import './Cadastro.css'
import Titulo from '../components/Titulo'

function Cadastro() {
    function cadastrar(){
        alert("Dinossauro cadastrado")
    }
  return (
    <div className='cadastro-container'>
      <Titulo texto={"Faça o cadastro aqui"} emoji={"→"}/>
      <label>Nome</label>
      <input type="text" />
      <label>Altura</label>
      <input type="number" />
      <button onClick={cadastrar}>Cadastrar</button>

    </div>
  )
}

export default Cadastro
