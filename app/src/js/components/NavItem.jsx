
import React from "react"

// pub sub para esuchar eventos de Component no hijos
import PubSub from "pubsub-js"


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


    // =========== Mensajes con PubSub precionando item de NavBar hacia Boxes en title_box ===========
    PubSub.publish('listener_box', this.props.name);
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
