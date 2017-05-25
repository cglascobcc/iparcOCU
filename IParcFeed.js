(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
    tableau.log("Hello WDC!");
};
    
    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
})();

$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "iParc Feed";
        tableau.submit();
    });
});
