app.factory('congressData', ['$http', function ($http){

  function getAll() {
    return $http({
      url: 'https://www.govtrack.us/api/v2/role?current=true&limit=542',
      dataType: 'json',
      method: 'GET',
      data: '',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function getPhoto(id) {
    return 'http://govtrack.us/data/photos/' + id + '-200px.jpeg'
  }

  return {
    getAll: getAll,
    getPhoto: getPhoto
  }
}]);
