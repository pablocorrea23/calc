import React from 'react'
import '../hojas-de-estilos/botonClear.css'

export const BotonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.manejarLimpiar}>
      {props.children}
    </div>
  );
}
