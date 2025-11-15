import React from 'react'

function Ejecutador({children, currentOperation, setOperation}) {
  function exe() {
    const digitosDeInicio = /^\d(?:.*\d)?$/;
    const charAllowed = /^[\d÷+\-x.]+$/;
    const consecutiveOps = /[÷+\-x.]{2,}/;
    if (digitosDeInicio.test(currentOperation) && charAllowed.test(currentOperation) && !consecutiveOps.test(currentOperation)) {
      console.log("String válido.");
    } else {
      console.log("String no válido.");
      if (!digitosDeInicio.test(currentOperation)) console.log("Un digito debe estar al inicio al final del string");
      if (!charAllowed.test(currentOperation)) console.log("Hay caracteres invalidos");
      if (consecutiveOps.test(currentOperation)) console.log("No pueden haber simbolos especiales consecutivos.");
      setOperation("ERROR");
    }
  }

  return (
    <button className="botones-oscuros" id="equals" onClick={exe}>{children}</button>
  )
}

export default Ejecutador
