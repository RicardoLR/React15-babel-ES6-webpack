
/**  sin ES6
var React = require('react'),
    InputItem = require('../items/InputItem.jsx');
*/

import React from "react"

import NavItem from "./NavItem.jsx"

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
                             isFirstOne={index == 0 ? true: false}/>;
                  })}
                </ul>

                <form role="search" class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" placeholder="Search" class="form-control" />
                    </div>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
      </div>
    );

  }

}﻿
