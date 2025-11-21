import React from 'react'

function Limpiar({ children, setOperation, currentOperation }) {

  function clearOperation() {
    setOperation(currentOperation.slice(0, -1));
  }

  return (
    <button className="botones-oscuros" id="clear" onClick={clearOperation}>{children}</button>
  )
}

export default Limpiar