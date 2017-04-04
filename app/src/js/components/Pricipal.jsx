
import React from "react"

// OJO  salimos ..  luego entramos de nuevo a box, OJO
import Box from "./boxes/Box.jsx"
import NavBar from "../Components/NavBar.jsx"



export default class Pricipal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div class="container">
        <NavBar />
        <Box />

      </div>

    );
  }
}
