
/**  sin ES6
var React = require('react'),
    InputItem = require('../items/InputItem.jsx');
*/

import React from "react"
import ResultBox from "../boxes/ResultBox.jsx"

import InputItem from "../items/InputItem.jsx"


export default class InputBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      button_title: "Agregar",
      output: "",

      // lista de tareas para ResultBox
      items: []
    }

  }

  //  Se ejecuta antes del render
  componentWillMount(){


  }


  //  Se ejecuta al termino del render
  componentDidMount(){

  }


  // @evento inyectada por default
  ejecutar(evento){
    /**
    if(this.state.textButton == "Agregar"){
      this.setState({
        textButton: "No Agregar"
      })
    }
    else{
      this.setState({
        button_title: "Agregar"
      })
    }
    console.log("class InputBox, ejecutar(evento), evento.target.id: ", evento.target.id);
    */
    console.log("class InputBox, ejecutar(evento), this.refs.input_task.getValue(): ", this.refs.input_task.getValue() );

    if( this.refs.input_task.getValue() == "" ){

      // setState por default
      this.setState({output: "Introduce una tarea"});
    }else{

      this.setState({
        output: "Listo",

        // concat agrega al arreglo inplicitamente, no como a string
        items: this.state.items.concat( this.refs.input_task.getValue() )
      });
    }

  }

  render(){

    return(
      <div className="row">
        <InputItem ref="input_task"/>

        <button type="button" id="btn" onClick={this.ejecutar.bind(this)} >
          {this.state.button_title}
        </button>
        <br />

        <label>{this.state.output}</label>


        <ResultBox items={this.state.items} />
      </div>
    );

  }

}﻿
