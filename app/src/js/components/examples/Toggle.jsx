
import React from "react"


export default class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>Clase {this.props.nombre} </h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

      </div>
    );
  }

  /* usando funciones fecha
  <button onClick={(e) => this.handleClick(e)}>
    Click me
  </button>
  */

}
