sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "com/wakefern/zpictures/utils/formatter"
],
    function (Controller, MessageBox, formatter) {
        "use strict";
        return Controller.extend("com.wakefern.zpictures.controller.Main", {
            formatter: formatter,

            onInit: function () {
                var router = this.getOwnerComponent().getRouter();
                router.getRoute("RouteApp").attachPatternMatched(this.onRouteMatch, this);
            },
            onRoutMatch: function (oEvent) {
                //this.loadJsonModel();
            }
        });
});    