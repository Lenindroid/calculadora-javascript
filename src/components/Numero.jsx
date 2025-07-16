import React from 'react'

function Numero({ id, children }) {
  return (
    <button className="boton-estandar" id={id}>{children}</button>
  )
}

export default Numero
