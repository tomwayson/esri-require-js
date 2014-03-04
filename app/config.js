require.config({
  // make components more sensible
  // add dojo paths
  // connect to Esri AMD build on CDN
  paths: {
    "components": "../bower_components",
    //  TODO: is a way to just alias these to components/dojo, etc???
    "dojo": "../bower_components/dojo",
    "dijit": "../bower_components/dijit",
    "dojox": "../bower_components/dojox",
    "esri": "http://js.arcgis.com/3.8amd/js/esri",
    // NOTE: loading Dojo modules from esri CDN fails
    // have to use local copy of Dojo... for now
    // "dojo": "http://js.arcgis.com/3.8amd/js/dojo/dojo",
    // "dijit": "http://js.arcgis.com/3.8amd/js/dojo/dijit/",
    // "dojox": "http://js.arcgis.com/3.8amd/js/dojo/dojox/"
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}





