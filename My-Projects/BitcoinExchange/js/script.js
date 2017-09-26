/*Get The Live Price*/
var app = angular.module('myApp', []);

app.run(function($rootScope, $http) {
    $http.get("https://api.coindesk.com/v1/bpi/currentprice/INR.json").then(function (response) {
    $rootScope.coinDeskData = response.data;
    console.log($rootScope.coinDeskData);
  });
});

app.controller('myCtrl', function($scope) {
});