import React from 'react'

function Operation({ id, children }) {
  return (
    <button className="boton-operador" id={id}>{children}</button>
  )
}

export default Operation
