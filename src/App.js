import './App.css';
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla';
import { BotonClear } from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const resultado = () => {
    if(input){
      setInput(evaluate(input))
    }else{
      alert('Por favor ingrese valores para realizar los cálculos')
    }

  };



  return (
    <div className='App'>
      <div className='titulo'>
        <h1>Calculadora</h1>
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={resultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarLimpiar={() => setInput('')}>
            Limpiar
          </BotonClear>
        </div>

      </div>


    </div>

  );
}

export default App;
