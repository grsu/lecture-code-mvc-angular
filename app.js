angular.module('для-старосты', [])
  .controller('StudentsListCtrl', function ($scope, $window, $location) {
    $scope.students = [
      { name: 'Вася' },
      { name: 'Дима' },
      { name: 'Вася 2' },
      { name: 'Вася 4' },
      { name: 'Катя' },
      { name: 'Федя' }
    ];

    $scope.addStudent = function () {
      if (!$scope.firstName) {
        return;
      }

      $scope.students.push({ name: $scope.firstName });
      $scope.firstName = '';
    };

    console.log($location, $window);
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