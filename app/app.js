

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/',{
        templateUrl: './views/home.html',
        controller: 'homeController'
    })
        .when('/about',{
        templateUrl: './views/about.html',
        controller: 'aboutController'
    })
        .when('/contact',{
        templateUrl: './views/contact.html',
        controller: 'contactController'
    })
        .when('/work',{
        templateUrl: './views/work.html',
        controller: 'workController'
    })
        .when('/gh',{
        templateUrl: './views/grindhouse.html',
        controller: 'ghController'
    })
        .when('/dh',{
        templateUrl: './views/doghouse.html',
        controller: 'dhController'
    })
})

myApp.controller('homeController', function($scope, $timeout){
    $scope.fade = false;
    $scope.toggle = function(){
        $timeout(function(){
            $scope.fade = !$scope.fade;
        },1000);
    }
});



