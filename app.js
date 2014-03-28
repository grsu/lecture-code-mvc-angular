angular.module('для-старосты', [])
  .controller('StudentsListCtrl', function ($scope, $window, $location, $http) {
    $scope.students = [];

    var studentsUrl = 'http://localhost:3000/students';

    $http.get(studentsUrl)
      .success(function (data) {
        $scope.students = data;
      });

    $scope.addStudent = function () {
      if (!$scope.firstName) {
        return;
      }

      var data = { name: $scope.firstName, active: true };

      $scope.students.push(data);
      $scope.firstName = '';

      $http.post(studentsUrl, data)
        .success(function () {
          console.log('saved to database');
        })
    };

    console.log($location, $window);
  })
  .directive('studentsList', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/students-list.html',
      scope: {
        data: '=',
        title: '@'
      },
      controller: function ($scope) {
        $scope.reportStudent = function (student) {
          student.active = false;
          student.removed = true;
          student.reasonForRemoval = 'жалоба от старосты';
        }
      }
    };
  });

angular.module('для-деканата', [])
  .controller('StudentsListCtrl', function ($scope, $window, $location) {
    $scope.students = [
      { name: 'Вася' },
      { name: 'Дима' },
      { name: 'Вася 2' },
      { name: 'Вася 4' },
      { name: 'Катя' },
      { name: 'Федя' }
    ];

    $scope.dropStudent = function (index) {
      console.log('dropStudent', index);
      $scope.students.splice(index, 1);
    };

    console.log($location, $window);
  });

angular.module('солянка', ['для-деканата', 'для-старосты']);