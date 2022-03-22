sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment" 
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.sapfiori.controller.App", {
      onInit: function () {
        // set data model on view
        var oData = {
          recipient: {
            name: "World",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.sapfiori.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
      },
      onOpenDialog : function () {

        // create dialog lazily
        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "sap.ui.demo.sapfiori.view.HelloDialog"
          });
        } 
        this.pDialog.then(function(oDialog) {
          oDialog.open();
        });
      }
    });
  }
);
