import React from 'react'

function Numero({ id, children, addChar }) {
  return (
    <button className="boton-estandar" id={id} onClick={() => addChar(children)}>{children}</button>
  )
}

export default Numero
