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
      return;
    }
    const tokenizerRegex = /\d+(?:\.\d+)?|[÷+\-x]/g;
    const tokens = currentOperation.match(tokenizerRegex);

    const operators = [];
    const numbers = [];
    let result = 0;

    tokens.forEach(e => {
      if (e == '+' || e == '-' ) {
        operators.push(e);
      } else if (e == 'x'|| e == '÷') {
        if (operators[operators.length - 1] == 'x' || operators[operators.length - 1] == '÷') operators.push(e);
        else {
          while (operators.length >= 1 && !(operators[operators.length - 1] == 'x' || operators[operators.length - 1] == '÷')) {
            const a = numbers[numbers.length - 1];
            const op = operators[operators.length - 1];
            const b = numbers[numbers.length - 2];
            if (op == '+') {
              console.log("hello",a,b);
            } else if (op == '-') {
              console.log("hello", result);
            }
          }
        }
      } else numbers.push(e);
    });
    
  }

  return (
    <button className="botones-oscuros" id="equals" onClick={exe}>{children}</button>
  )
}

export default Ejecutador
