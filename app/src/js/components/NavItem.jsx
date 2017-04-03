
import React from "react"


export default class NavItem extends React.Component {


  constructor(props) {
    super(props);

  }

  render(){

    return(
      <li className={this.props.isFirstOne == true ? "active" : ""}>
        <a>{this.props.name}</a>
      </li>
    );

  }

}﻿
