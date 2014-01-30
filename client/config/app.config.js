// app init
var bluewater = angular.module('bluewater', ['ngRoute', 'ui.bootstrap']);

// routes
bluewater.config(function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/items', {
                templateUrl: 'modules/items/index.html',
                controller: 'ItemController'
            }).
            when('/items/browse', {
                templateUrl: 'modules/items/index.html',
                controller: 'ItemController',
                activePage: 'item.page.browse.html'
            }).
            when('/items/detail/:itemId', {
                templateUrl: 'modules/items/index.html',
                controller: 'ItemController',
                activePage: 'item.page.detail.html'
            }).
            when('/items/detail/:itemId/addManufacturer', {
                templateUrl: 'modules/items/index.html',
                controller: 'ItemController',
                activePage: 'item.modal.addManufacturer.html'
            });
//        $locationProvider.html5Mode(true);
    });