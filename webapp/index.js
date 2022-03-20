sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.sapfiori.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});