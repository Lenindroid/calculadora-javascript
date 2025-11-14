import React from 'react'

function Ejecutador({children, currentOperation}) {
  function exe() {
    if(currentOperation[currentOperation.length - 1] == '÷' 
      || currentOperation[currentOperation.length - 1] == '+'
      || currentOperation[currentOperation.length - 1] == '-'
      || currentOperation[currentOperation.length - 1] == 'x'
      || currentOperation[currentOperation.length - 1] == '.') currentOperation.slice(0, -1);
  }

  return (
    <button className="botones-oscuros" id="equals" onClick={exe}>{children}</button>
  )
}

export default Ejecutador
