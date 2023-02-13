/*global QUnit*/

sap.ui.define([
	"cicdtest/controller/MyTest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyTest Controller");

	QUnit.test("I should test the MyTest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
