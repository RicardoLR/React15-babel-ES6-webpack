

import React from "react"

import ResultItem  from '../items/ResultItem.jsx'


export default class ResultBox extends React.Component {

  constructor(props) {
    super(props);
  }


  /**El currentValue debe tener un key (llave) unica */
  render() {
    return (

      <div className="row">
        <ul>
          {this.props.items.map(function(currentValue, index, array){
            return <ResultItem name_result_item={currentValue} key={index} />;
          })}
        </ul>
      </div>

    );
  }
}
