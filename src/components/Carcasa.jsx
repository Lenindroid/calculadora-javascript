import React from 'react'
import Operador from './Operador'
import Display from './Display'
import Numero from './Numero'
import Limpiar from './Limpiar'

function Carcasa() {
  return (
    <div className="carcasa">
      <h1>Calculadoras<br/>LRS</h1>
      <Display></Display>
      <div className="grid-botones">
        <Operador id="add">+</Operador>
        <Operador id="subtract">-</Operador>
        <Operador id="multiply">×</Operador>
        <Operador id="divide">÷</Operador>
        <Numero id="one">1</Numero>
        <Numero id="two">2</Numero>
        <Numero id="three">3</Numero>
        <Numero id="four">4</Numero>
        <Numero id="five">5</Numero>
        <Numero id="six">6</Numero>
        <Numero id="seven">7</Numero>
        <Numero id="eight">8</Numero>
        <Numero id="nine">9</Numero>
        <Numero id="zero">0</Numero>
        <Numero id="decimal">.</Numero>
        <Limpiar>=</Limpiar>
      </div>
    </div>
  )
}

export default Carcasa
