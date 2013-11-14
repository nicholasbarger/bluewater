bluewater.controller('ItemController', function ($scope, $route) {

    console.log($route.current.activePage);
    switch($route.current.activePage) {
        case "item.page.browse.html":
            $('#browse-tab a').tab('show');
            break;
        case "item.page.detail.html":
            $('#item1-tab a').tab('show');
            break;
        case "item.modal.addManufacturer.html":
            $('#item1-tab a').tab('show');
            $('#addManufacturerModal').modal('show');
            break;
        case "item.page.overview.html":
        default:
            $('#overview-tab a').tab('show');
            break;
    }

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
    };
});