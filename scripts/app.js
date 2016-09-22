var myApp = angular.module('todoApp', [
  'ngRoute',
  'ipCookie',
  'ng-token-auth'
]);

// My Constants
myApp.constant("baseUrl", {
  "url": "http://todo.sulmanbaig.com/api"
});

// Auth Routes settings
myApp.config(['$authProvider', 'baseUrl', function($authProvider, baseUrl) {
  $authProvider.configure({
    apiUrl: baseUrl.url
  });
}]);

// Other auths
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/todos', {
      templateUrl: 'views/todo.html',
      controller: 'mainCtrl',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'authCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'authCtrl'
    })
    .when('/logout',{
      templateUrl: 'views/logout.html',
      controller: 'authCtrl',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .otherwise({redirectTo:'/register'});
}]);
