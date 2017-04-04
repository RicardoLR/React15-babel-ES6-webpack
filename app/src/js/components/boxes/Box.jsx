
import React from "react"

// pub sub para esuchar eventos de Component no hijos
import PubSub from "pubsub-js"


// OJO  salimos ..  luego entramos de nuevo a box, OJO
import InputBox from "../boxes/InputBox.jsx"
import ResultBox from "../boxes/ResultBox.jsx"

import ResultItem  from "../items/ResultItem.jsx"
import InputItem from "../items/InputItem.jsx"


export default class Box extends React.Component {

  constructor(props) {
    super(props);

    //como el nombre:  topic,   datos que envian: items
    this.pubsub_event = PubSub.subscribe( 'listener_box', function(topic, items){
      // al recibir el evento

      console.log("topic: ", topic, "   items:", items);

      this.setState({title_box: items});

    }.bind(this) );

    this.state = {
      title_box: ""
    };
  }

  myOnEvent(){
    console.log("class Box, myOnEvent():  recibo evento de otro componete (no hijo)");

  }

  //  Se ejecuta antes del render
  componentWillMount(){
    console.log("class Box, componentWillMount()");

    // Aqui activamos pubsub_event
  }


  // al desmmontar el component
  componentWillUnMount(){
    console.log("componentWillUnMount()");

    PubSub.unsubscribe( this.pubsub_event );
  }


  render() {
    return (

      <div class="container">
        <p class="bg-primary">Component Box, titutlo selecciado en NavBar: {this.state.title_box}</p>

        <InputBox />

      </div>

    );
  }
}
