
/**  sin ES6
var React = require('react'),
    InputItem = require('../items/InputItem.jsx');
*/

import React from "react"

import NavItem from "./NavItem.jsx"


/** Mensaje de seacr en NavBar a ImageGrid */
import PubSub from "pubsub-js"


export default class NavBar extends React.Component {


  constructor(props) {
    super(props);

    this.menu = [{
      "name": "Home",
      "code": "1234"
    }, {
      "name": "Google map",
      "code": "464"
    }, {
      "name": "Bootstrap",
      "code": "4654"
    }, {
      "name": "REST",
      "code": "546"
    }];


    this.state = {
      button_title: "Buscar",
      input_search: ""
    };
  }


  onAlertFather(event){
    console.log("class NavBar, onAlertFather(event), Click desde mi hijo");
  }


  mandaBuscarApi(event){

    if( this.state.input_search == "" ){

      // setState por default
      this.setState({button_title: "Incorrecto"});
    }else{

      this.setState({
        button_title: "Listo",
      });

      // Mandar mensaje a ImageGrid que no es hijo o padre
      console.log('NavBar   this.state.input_search', this.state.input_search);

      // =========== Mensajes con PubSub mandado a evento listener_imagen_grid ===========
      PubSub.publish('listener_imagen_grid', this.state.input_search);
    }

  }

  /** funcion que capta cada que se ingresa letra por letra al input */
  onChangeInputNavbar(evento){
    //console.log("class NavBar, onChangeInputNavbar(evento), evento.target.value: ", evento.target.value);

    // setState por default
    this.setState({
      input_search: evento.target.value
    });
  }

  /** Mapeamos el manu
        {this.menu.map(function(currentValue, index, array){

    y enviamos variable "isFirstOne" para activar "resaltar" el navbar
  */

  render(){

    return(

      <div class="container">
        <nav role="navigation" class="navbar navbar-inverse">

          <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">React 15</a>
          </div>

          <div id="navbarCollapse" class="collapse navbar-collapse">

              <ul className="nav navbar-nav">
                {this.menu.map(function(currentValue, index, array){
                    return <NavItem
                           key={currentValue.code}
                           name={currentValue.name}
                           onClick={this.onAlertFather}
                           isFirstOne={index == 0 ? true: false} />;
                }.bind(this))}
              </ul>

              <form role="search" class="navbar-form navbar-right">
                  <div class="form-group">

                      <input type="text" placeholder="Buscar en API... (ej: cats)" class="form-control"
                        onChange={this.onChangeInputNavbar.bind(this)}
                        value={this.state.input_search} />

                      <button type="button" id="btn" onClick={this.mandaBuscarApi.bind(this)} >
                        {this.state.button_title}
                      </button>

                  </div>
              </form>
          </div>

        </nav>
      </div>

    );

  }

}﻿
