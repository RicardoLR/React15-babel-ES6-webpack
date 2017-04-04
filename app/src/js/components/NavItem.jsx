
import React from "react"


export default class NavItem extends React.Component {


  /** ===============================================
  Usando ES6

  agregar en contructor la variabla a
  =============================================== */

  constructor(props) {
    super(props);

    this.myOnClickChild = this.myOnClickChild.bind(this);
 }


  myOnClickChild(event){
    console.log('this.props.name', this.props.name);

    /** ===============================================
    LLamo al evento (funcion) de mi padre "NavBar"
    =============================================== */
    this.props.onClick(event);
  }

  render(){

    /** Atributo className de react agrega una clase active */
    return(
      <li className={this.props.isFirstOne == true ? "active" : ""}
        onClick={this.myOnClickChild}>

        <a>{this.props.name}</a>
      </li>
    );

  }

}﻿
