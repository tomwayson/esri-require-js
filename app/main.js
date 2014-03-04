// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["esri/map", "dojo/domReady!"],
function(Map) {
  var map = new Map("map",{
    basemap: "topo",
    center: [-122.45,37.75],
    zoom: 13,
    sliderStyle: "small"
  });
});
