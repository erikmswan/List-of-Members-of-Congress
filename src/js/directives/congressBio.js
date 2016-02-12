app.directive('congressBio', function() {
  return {
      restrict: 'E',
      scope: {
        info: '='
      },
      controller: ['$scope', function($scope) {

        $scope.formatAddress = function(address, office) {
          try {
            var split = office.split(' '),
                lastWord = split[split.length - 1],
                regex = new RegExp(lastWord),
                indexOfWord = address.search(regex),
                endOfAddress = address.slice(indexOfWord + lastWord.length + 1);
            return endOfAddress = endOfAddress;
          } catch(e) {}
        };

        $scope.nicknamePresent = function(nickname) {
          return nickname.length > 0 ? '"' + nickname + '"' : '';
        }

      }],
      templateUrl: 'js/templates/congressBio.html'
  };
})
