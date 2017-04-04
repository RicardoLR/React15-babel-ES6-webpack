


import Reflux from "reflux";

import fetch from "whatwg-fetch";

import { ImageActions } from './ImageActions.jsx';

import { HTTP } from './HttpServices.jsx';

export let DataStore = Reflux.createStore({

  listenables: [ImageActions],

  // Guardare los el objetos de peticon http
  imageList: [],

  init(){
    this.fetchListImage();
  },


  fetchListImage(thing_search){

    console.log("thing_search", thing_search);

    let tags = ['animals', 'nature', 'travel', 'food', 'sport', 'nude'];
    let randomTag = tags[Math.floor(Math.random()*tags.length)];

    HTTP.get("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", thing_search)
      .then((data) => {
        //console.log("fetchListImage, data:");
        //console.log(data);

        this.imageList = data.items; // items tiene los objetos que nos interesan

        //console.log("this.imageList:");
        //console.log(this.imageList);

        // trigger del ImageStore que hace que se dispare la actualización de las vistas
        this.trigger('onResult', this.imageList);
      });
  }


});
