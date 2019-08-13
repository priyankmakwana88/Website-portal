/* var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
}); */

 $scope.login = function () {
   sessionStorage.setItem('username', $scope.username);
   $scope.user = sessionStorage.getItem('username');
 };