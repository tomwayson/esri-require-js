// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["dojo/dom", "dojo/dom-construct", "esri/lang"], function(dom, domConstruct, esriLang) {
  var msg = "<div>" + esriLang.substitute({state_name: "Arizona", state_capital: "Phoenix"},"The capital of ${state_name} is ${state_capital}.") + "</div>";
  domConstruct.place(msg, "message");
});
