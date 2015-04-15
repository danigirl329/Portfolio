

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
        .when('/tim',{
            templateUrl: './views/about.html',
          controller: 'timController'
        })
    .when('/dani',{
            templateUrl: './views/about.html',
          controller: 'daniController'
        })
        .when('/gh',{
            templateUrl: './views/work.html',
          controller: 'ghController'
        })
            .when('/dh',{
            templateUrl: './views/work.html',
          controller: 'dhController'
        })
})

myApp.controller('homeController', function($scope){
    $scope.greeting = 'Elephant!';
})
myApp.controller('daniController', function($scope){
    $scope.name = 'dani!';
    $scope.about = 'awesome elephant'
})
myApp.controller('timController', function($scope){
    $scope.name = 'tim!';
    $scope.about = 'awesome raccoon'
})
myApp.controller('ghController', function($scope){
    $scope.work = 'grindhouse!';
})
myApp.controller('dhController', function($scope){
    $scope.work = 'doghouse quilts!';
})
myApp.controller('workController', function($scope){
    $scope.work = 'Click the links to view my work!';
})
