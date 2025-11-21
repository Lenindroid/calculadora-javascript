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
    let tokens = currentOperation.match(tokenizerRegex);


    tokens.forEach((e, i) => {
      if (e == 'x' ) {
        tokens[i + 1] = parseFloat(tokens[i - 1]) * parseFloat(tokens[i + 1]);
        tokens[i - 1] = '_';
        tokens[i] = '_';
      } else if (e == '÷') {
        tokens[i + 1] = parseFloat(tokens[i - 1]) / parseFloat(tokens[i + 1]);
        tokens[i - 1] = '_';
        tokens[i] = '_';
      }
    });

    tokens = tokens = tokens.filter(e=> e != '_');

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i++) {
      if (tokens[i] == '-') result -= parseFloat(tokens[i + 1]);
      else if (tokens[i] == '+') result += parseFloat(tokens[i + 1]);
    }
    result = parseFloat(result.toFixed(10));

    setOperation(result.toString());
  }

  return (
    <button className="botones-oscuros" id="equals" onClick={exe}>{children}</button>
  )
}

export default Ejecutador
