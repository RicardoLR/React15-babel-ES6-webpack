

import React from "react"


export default class InputItem extends React.Component {

  constructor(){
    super()

    /** Sustitucion del metodo getInitialState: function(){...} */
    this.state = ({
      valor: ""
    })
  }

  myOnChange(evento){
    console.log("class InputItem, myOnChange(evento), evento.target.value: ", evento.target.value);
    this.setState({
      valor: evento.target.value
    });
    // es el mismo
    // console.log("final ",evento.target.value);
  }

  /** =====================================
  SETTER Y GETTER de estados

  Clases hijas pueda acceder al stado de input
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
