
/**  sin ES6
var React = require('react'),
    InputItem = require('../items/InputItem.jsx');
*/

import React from "react"
import InputItem from "../items/InputItem.jsx"


export default class InputBox extends React.Component {

  constructor(){
    super()

    this.state = {
      textButton: "Agregar"
    }

  }

  // @evento inyectada por default
  ejecutar(evento){
    if(this.state.textButton == "Agregar"){
      this.setState({
        textButton: "No Agregar"
      })
    }
    else{
      this.setState({
        textButton: "Agregar"
      })
    }
    console.log("class InputBox, ejecutar(evento), evento.target.id: ", evento.target.id);
  }

  render(){

    return(
      <div className="row">
        <InputItem />

        <button type="button" id="btn" onClick={this.ejecutar.bind(this)} >
          {this.state.textButton}
        </button>
      </div>
    );

  }

}﻿
