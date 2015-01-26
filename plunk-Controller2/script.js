// Code goes here

/*var MainController = function($scope) {
    $scope.message = "Hello Peter";

  };*/
  
var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
  
  $http.get("https://api.github.com/users/peterjbown").
  success(function(data, status, headers, config) {
    $scope.user = data;
  }).
  error(function(data, status, headers, config) {
    $scope.error = "Could not fetch the GitHub user";
  });
  
  $scope.message = "Hello Peter!";
  
}]);