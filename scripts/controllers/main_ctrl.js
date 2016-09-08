myApp.controller('mainCtrl', ['$scope', '$log', 'todoService', function ($scope, $log, todoService) {

  $log.info("Loaded");

  $scope.new_todo = "";
  $scope.todos = [];
  $scope.edits = [];

  $scope.load_todos = function () {
    todoService.get_todos().success(function (data) {
      $scope.todos = data;
      $log.info("Get todos");
    }).error(function (errors) {
      $log.error(errors);
    });
  };

  $scope.load_todos();

  $scope.check_new_todo = function (event) {
    if (event.keyCode === 13 && $scope.new_todo != "") {
      todoService.post_todo({name: $scope.new_todo}).success(function (data) {
        $log.info("posted!");
        $scope.load_todos();
      }).error(function (errors) {
        $log.error(errors);
      });
      $scope.new_todo = "";
      $log.info($scope.todos);
    }
  };

  $scope.updateTodo = function (id, todo) {
    todoService.put_todo(id, todo).success(function (data) {
      $log.info("updated!");
      $scope.load_todos();
    }).error(function (errors) {
      $log.error(errors);
    });
  };

  $scope.update_todo_name = function (event, todo) {
    if (event.keyCode === 13 && todo.name != "") {
      var index = $scope.edits.indexOf(todo.id);
      if (index > -1) {
        $scope.edits.splice(index, 1);
      }
      todoService.put_todo(todo.id, todo).success(function (data) {
        $log.info("updated!");
        $scope.load_todos();
      }).error(function (errors) {
        $log.error(errors);
      });
    }
  };

  $scope.delete_todo = function (id) {
    todoService.delete_todo(id).success(function (data) {
      $log.info("deleted!");
      $scope.load_todos();
    }).error(function (errors) {
      $log.error(errors);
    });
  };

  $scope.addToEdits = function (todo) {
    if (todo.done == false) {
      $scope.edits.push(todo.id);
    }
  };

}]);