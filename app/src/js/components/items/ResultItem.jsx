

import React from "react"


export default class ResultItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (

      <li>{this.props.name_result_item}</li>

    );
  }
}
