angular.module('cantonAPI.controllers',[])

//Login Controller (landing page)
.controller('HomeCtrl', function($scope, requests) {

  requests.canton('all').then(function(data){
    console.log('data', data);
    $scope.cantons = data;
  });

})

.controller('SearchCtrl', function($scope, requests) {
  $scope.max = 0;
  $scope.min = 0;
  $scope.type = '';

  $scope.search = function(){
    requests.canton('all').then(function(data){
      console.log('data', data);
      $scope.results = data;
    });
  };
});