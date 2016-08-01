var app = angular.module('myApp', ["ngRoute"]);
app.controller('validateCtrl', function ($scope) {
    
});

app.config(function ($routeProvider) {
    $routeProvider
    .when("/page2", {
    templateUrl: "HtmlPage2.html"
})
    .when("/page3", {
    templateUrl: "HtmlPage3.html"
})
    .when("/page1", {
    templateUrl: "HtmlPage1.html"
});
});