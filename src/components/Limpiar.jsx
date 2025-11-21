import React from 'react'

function Limpiar({ children, setOperation}) {

  function clearOperation() {
    setOperation('0');
  }

  return (
    <button className="botones-oscuros" id="clear" onClick={clearOperation}>{children}</button>
  )
}

export default Limpiar