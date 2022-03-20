sap.ui.define([
  "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
"use strict";

new ComponentContainer({
  name: "sap.ui.demo.sapfiori",
  settings : {
    id: "sapfiori"
  },
  async: true
}).placeAt("content");

});