
import React from "react"

// OJO  salimos ..  luego entramos de nuevo a box, OJO
import InputBox from "../boxes/InputBox.jsx"
import ResultBox from "../boxes/ResultBox.jsx"

import ResultItem  from "../items/ResultItem.jsx"
import InputItem from "../items/InputItem.jsx"

import Toggle from "../examples/Toggle.jsx"


export default class Box extends React.Component {

  render() {
    return (

      <div class="container">
        <p class="bg-primary">Component Box</p>

        <InputBox />

        <Toggle nombre="clase Toggle"/>
      </div>

    );
  }
}
