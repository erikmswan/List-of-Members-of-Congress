
app.controller('MainController', ['$scope', 'data', function($scope, data) {

  data.then(function(data) {
    $scope.congressData = data.data.objects;
    $scope.congressCount = data.data.meta.total_count;
  });

}]);
