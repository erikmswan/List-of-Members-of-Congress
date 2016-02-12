
app.controller('MainController', ['$scope', 'congressData', function($scope, congressData) {

  (function progressBar() {
    $('.bar').addClass('progress-anim');
  })();

  congressData.getAll().then(function(data) {
    $scope.congressData = data.data.objects;
    $scope.congressCount = data.data.meta.total_count;
  });

  $scope.$on('ngRepeatFinished', function(event) {
    $('.progress-bar-cover').addClass('progress-bar-cover-remove');
    $('.header h1, .header h2').addClass('reveal');
  });
}]);
