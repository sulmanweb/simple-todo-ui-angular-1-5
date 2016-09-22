myApp.directive('navbarDir', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'authCtrl'
  }
}]);