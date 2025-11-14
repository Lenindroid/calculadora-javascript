import React, { useState } from 'react'
import Operador from './Operador'
import Display from './Display'
import Numero from './Numero'
import Limpiar from './Limpiar'
import Ejecutador from './Ejecutador'

function Carcasa() {
  const [currentOperation, setOperation] = useState('');
  function addChar(character) {
    if (currentOperation.length >= 2 &&
      ( (character == '.') && currentOperation[currentOperation.length - 1] == '.' 
        || (character == '+') && currentOperation[currentOperation.length - 1] == '+'
        || (character == '-') && currentOperation[currentOperation.length - 1] == '-'
        || (character == '÷') && currentOperation[currentOperation.length - 1] == '÷'
        || (character == 'x') && currentOperation[currentOperation.length - 1] == 'x'
      )) return;
    setOperation(currentOperation.concat(character));
  }
  return (
    <div className="carcasa">
      <h1>Calculadoras<br/>LRS</h1>
      <Display currentOperation={currentOperation}></Display>
      <div className="grid-operadores">
        <Limpiar setOperation={setOperation}>AC</Limpiar>
        <Operador id="add" addChar={addChar}>+</Operador>
        <Operador id="subtract" addChar={addChar}>-</Operador>
        <Operador id="multiply" addChar={addChar}>x</Operador>
        <Operador id="divide" addChar={addChar}>÷</Operador>
      </div>
      <div className="grid-botones">
        <Numero id="one" addChar={addChar}>1</Numero>
        <Numero id="two" addChar={addChar}>2</Numero>
        <Numero id="three" addChar={addChar}>3</Numero>
        <Numero id="four" addChar={addChar}>4</Numero>
        <Numero id="five" addChar={addChar}>5</Numero>
        <Numero id="six" addChar={addChar}>6</Numero>
        <Numero id="seven" addChar={addChar}>7</Numero>
        <Numero id="eight" addChar={addChar}>8</Numero>
        <Numero id="nine" addChar={addChar}>9</Numero>
        <Numero id="zero" addChar={addChar}>0</Numero>
        <Numero id="decimal" addChar={addChar}>.</Numero>
        <Ejecutador>=</Ejecutador>
      </div>
    </div>
  )
}

export default Carcasa
