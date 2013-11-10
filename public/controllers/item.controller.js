bluewater.controller('ItemController', function ($scope) {

    // close a tab (because we allow multiple tabs opening when selecting items)
    $scope.closeTab = function(tabId, paneId) {

        var tab = document.getElementById(tabId);
        var pane = document.getElementById(paneId);
        var remainingTab = tab.previousElementSibling;

        // remove the tab
        tab.parentNode.removeChild(tab);

        // remove the tab pane
        pane.parentNode.removeChild(pane);

        // switch active tab to one to the left (if available)
        $(remainingTab).children('a').tab('show');
    }
});