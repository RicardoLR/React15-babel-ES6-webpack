
var React = require('react');


/** Ejemplo de modulo exportado sin ES6 */ 

var List = React.createClass({

  render: function(){
    return(
      <div>Hola</div>
    );
  }

});

module.exports = List;
