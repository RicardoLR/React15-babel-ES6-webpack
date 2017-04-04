

import React from "react"


export default class InputItem extends React.Component {

  constructor(props) {
    super(props);

    /** Sustitucion del metodo getInitialState: function(){...} */
    this.state = ({
      valor: ""
    })
  }

  /** funcion que capta cada que se ingresa letra por letra al input */
  myOnChange(evento){
    console.log("class InputItem, myOnChange(evento), evento.target.value: ", evento.target.value);

    // setState por default
    this.setState({
      valor: evento.target.value
    });
    // es el mismo
    // console.log("final ",evento.target.value);
  }

  /** =====================================
  SETTER Y GETTER de estados

  Clases hijas pueda acceder al stado de input las clases padre
  ===================================== */
  getValue(){
    return this.state.valor
  }

  render(){
    return(
      <input type="text" onChange={this.myOnChange.bind(this)} value={this.state.valor} >
      </input>
    )
  }


}
