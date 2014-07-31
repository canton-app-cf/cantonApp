angular.module('cantonAPI.controllers',[])

//Login Controller (landing page)
.controller('HomeCtrl', function($scope, requests) {

  requests.canton('all').then(function(data){
    console.log('data', data);
    $scope.cantons = data;
  });

})

.controller('SearchCtrl', function($scope, requests) {
  $scope.max = '';
  $scope.min = '';
  $scope.answer = '';

  $scope.search = function(){
    requests.canton('all').then(function(data){
      var min = $scope.min || 0;
      var max = $scope.max || Infinity;
      var answer = $scope.answer;
      console.log(min, max, answer);
      console.log('data', data);
      $scope.results = data.filter(function(x){
        if (max === Infinity && min === 0) {
          return x;
        } else {
          return ((x[answer] < max) && (x[answer] > min));
        }
      });
    });
  };
});