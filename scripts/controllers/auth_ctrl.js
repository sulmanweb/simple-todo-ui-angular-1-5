myApp.controller('authCtrl', ['$scope', '$log', '$auth', '$location', '$rootScope', function($scope, $log, $auth, $location, $rootScope) {
  // Login Form Submit
  $scope.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.loginForm)
      .then(function(resp) {
        $log.info("User Login");
        $location.path('/todos');
      })
      .catch(function(resp) {
        $log.error("Some error");
      });
  };

  // Register form submit
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        $log.info("User created");
        $location.path('/login');
      })
      .catch(function(resp) {
        $log.error("Some error");
      });
  };

  // Logout User
  $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          $log.info("User Logout");
          $location.path('/login');
        })
        .catch(function(resp) {
          $log.error("Some error");
        });
    };

}]);