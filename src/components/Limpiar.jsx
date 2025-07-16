import React from 'react'

function Limpiar({ children }) {
  return (
    <button className="botones-oscuros" id="clear" >{children}</button>
  )
}

export default Limpiar