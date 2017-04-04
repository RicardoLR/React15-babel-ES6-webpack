

/** petciones http
> npm install whatwg-fetch --save


Reflux es la arquitectura como MVC en Back End pero en Front End
Redux se utiliza para tus formularios..
*/

import fetch from "whatwg-fetch";

import $ from 'jquery';


export let HTTP = {

  get(mi_url, randomTag){

    /*
    return fetch(mi_url).then((response) => {
      return response.json();
    });
    */

    // Set the tag display options
    let options = {
      tags: randomTag,
      format: "json"
    };

    // Get json format data using $.getJSON()
    return $.getJSON(mi_url, options).done(function(response){
      return response;
    });

  }

};
