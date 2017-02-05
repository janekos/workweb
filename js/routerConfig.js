(function() {
    'use strict';

    angular.module('jovfinance', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
            .when("/", {
                templateUrl : "./views/main.html"
            })
            .when("/us", {
                templateUrl : "./views/us.html"
            })
            .when("/services", {
                templateUrl : "./views/services.html"
            })
            .when("/price", {
                templateUrl : "./views/price.html"
            })
            .when("/contact", {
                templateUrl : "./views/contact.html"
            });
        });
}());