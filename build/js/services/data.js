app.factory('data', ['$http', function ($http){
  return $http({
    url: 'https://www.govtrack.us/api/v2/role?current=true&limit=542',
    dataType: 'json',
    method: 'GET',
    data: '',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(data) {
      return data;
    }, function(err) {
      return err;
    });
}]);
