import React from 'react'

function Operation({ id, children, addChar }) {
  return (
    <button className="boton-operador" id={id} onClick={() =>addChar(children)} >{children}</button>
  )
}

export default Operation
