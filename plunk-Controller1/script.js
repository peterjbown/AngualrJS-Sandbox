// Code goes here


/*var MainController = function($scope) {
    $scope.message = "Hello Peter";

  };*/
  
var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', function($scope) {
  
  var person = {
    firstName: "Peter",
    lastName: "Bown"
  };
  
  $scope.message = "Hello Peter!";
  $scope.person = person;
}]);