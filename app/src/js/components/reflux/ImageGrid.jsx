

import React from "react"

import Reflux from "reflux";

import  {DataStore}  from "./DataStore.jsx";

/** Mensaje de seacr en NavBar a ImageGrid */
import PubSub from "pubsub-js"


export let ImageGrid = React.createClass({

  mixins: [Reflux.listenTo(DataStore, "onResult")],

  getInitialState: function() {
    return{
      infoDeApi:'',
      buscar_mandado_por_navbar: ''
    };
  },

  componentWillMount: function(){

    /** ========================================
      Mandar informacion pedida a funcion de DataStore
    ======================================== */
    DataStore.fetchListImage('animals');

    // =========================== al recibir el evento PubSub de NavBar ===========================
    //como el nombre:  topic,   datos que envian: items
    this.pubsub_event_image = PubSub.subscribe( 'listener_imagen_grid', function(topic, items){
      console.log("ImageGrid   pubsub_event_image   topic: ", topic, "   items:", items);

      this.setState({buscar_mandado_por_navbar: items});

      /** ========================================
       Pedimos al recibir input de NavBar, a la API
      ======================================== */
      DataStore.fetchListImage(this.state.buscar_mandado_por_navbar);

    }.bind(this) );

  },

  // al desmmontar el component
  componentWillUnMount(){
    console.log("componentWillUnMount()");

    PubSub.unsubscribe( this.pubsub_event_image );
  },


  /**
  *
  * Metodo para conexion a DataStore, funcion que recibe la informacion de DataStore
  */
  onResult: function(event, items){
    console.log("let ImageGrid,   onResult: function(event, items): event: ", event,"    items:", items );

    this.setState({
      infoDeApi: items
    })
  },

  render: function() {

      //console.log("this.state.infoDeApi");
      //console.log(this.state.infoDeApi);

       if (this.state.infoDeApi) {
          return(
            <div class="panel panel-success">
              <div class="panel-heading"> Imagenes de API </div>
              <div class="panel-body">
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
           </div>
          );
       } else {
           return(<p>Sin imágenes</p>);
       }
   }

});
