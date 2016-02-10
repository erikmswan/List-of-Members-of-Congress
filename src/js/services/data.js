app.factory('CongressData', ['$http', function ($http){
  return {
    $http.get('https://www.govtrack.us/api/v2/role?current=true').then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
  }
}]);
