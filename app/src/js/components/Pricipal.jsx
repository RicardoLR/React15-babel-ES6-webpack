
import React from "react"

// OJO  salimos ..  luego entramos de nuevo a box, OJO
import Box from "./boxes/Box.jsx"
import NavBar from "../Components/NavBar.jsx"

import Reflux from "reflux";
import DataStore from "./reflux/DataStore.jsx";


import {ImageGrid} from "./reflux/ImageGrid.jsx"


export default class Pricipal extends React.Component {

  constructor(props) {
    super(props);

  }

  onResult(event, items){

  }

  render() {
    return (

      <div class="container">
        <NavBar />
        <Box />

        <br />

        <ImageGrid />

      </div>

    );
  }
}
