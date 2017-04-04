

import React from "react"

import Reflux from "reflux";

import  {DataStore}  from "./DataStore.jsx";


export let ImageGrid = React.createClass({

  mixins: [Reflux.listenTo(DataStore, "onResult")],

  getInitialState: function() {
    return{
      infoDeApi:''
    };
  },

  componentWillMount: function(){
    DataStore.fetchListImage('animals');
  },

  onResult: function(event, items){

    console.log("let ImageGrid,   onResult: function(event, items): event: ", event,"    items:", items );

    this.setState({
      infoDeApi: items
    })
  },

//  mixins: [Reflux.listenTo(DataStore, "DataStore")],
//  mixins: [Reflux.connnect(DataStore, "DataStore")],

  render: function() {

      console.log("this.state.infoDeApi");
      console.log(this.state.infoDeApi);

       if (this.state.infoDeApi) {
           return(
             <div>
               {
                 this.state.infoDeApi.map( (image, index) => {
                   return(
                     <div key={index} className="image">
                         <a target="_blank" href={image.link}>
                           <img src={image.media.m} class="img-rounded img-responsive" alt="Imagen responsive" />
                         </a>
                     </div>
                   );
                 })
               }
             </div>
           );
       } else {
           return(<p>Sin imágenes</p>);
       }
   }

});
