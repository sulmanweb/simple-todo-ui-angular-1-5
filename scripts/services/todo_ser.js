myApp.factory('todoService', ['$http', 'baseUrl', function ($http, baseUrl) {
  return {
    get_todos: function () {
      return $http({
        method: 'GET',
        dataType: "JSONP",
        url: baseUrl.url + '/todos',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    },
    get_todo: function (id) {
      return $http({
        method: 'GET',
        dataType: "JSONP",
        url: baseUrl.url + '/todos/' + id,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    },
    post_todo: function (todo) {
      return $http({
        method: 'POST',
        dataType: "JSONP",
        url: baseUrl.url + '/todos',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param(todo)
      });
    },
    put_todo: function (id, todo) {
      return $http({
        method: 'PATCH',
        dataType: "JSONP",
        url: baseUrl.url + '/todos/' + id,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $.param(todo)
      });
    },
    delete_todo: function (id) {
      return $http({
        method: 'DELETE',
        dataType: "JSONP",
        url: baseUrl.url + '/todos/' + id,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }
  };
}]);