angular.module('cantonAPI.services',[])

.factory('requests', function($http){

  var canton = function (name) {
    console.log('first search');
    return $http({
      method: 'GET',
      url: '/canton?name=' + name,
    }).then(function (resp) {
      return resp.data;
    });
  };

  var search = function (name) {

    return $http({
      method: 'GET',
      url: '/canton/search?data=' + name,
    }).then(function (resp) {
      return resp.data;
    });
  };

  return{
    canton:canton
  };
})

// sign out service; delete user JWT
.factory('signout', function($location, $window){

  var signout = function () {
    $window.localStorage.removeItem('com.quizzomusic');
    $location.path('/login');
  };

  return{
    signout:signout
  };
});