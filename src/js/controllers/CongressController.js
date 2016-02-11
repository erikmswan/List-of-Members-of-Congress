
app.controller('MainController', ['$scope', 'congressData', function($scope, congressData) {

  congressData.getAll().then(function(data) {
    $scope.congressData = data.data.objects;
    $scope.congressCount = data.data.meta.total_count;
  });

}]);
