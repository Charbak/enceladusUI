/**
 * Angularjs file to load and process json data
 */
var app = angular.module('createTariffApp', []);

app.controller('loadCountry', function($scope, $http) {
  $http.get('data/port_data.json')
       .then(function(res){
          $scope.port_data = res.data;
          $scope.portselected = $scope.port_data[0];
        });
  //$scope.portselected = $scope.port_data[0];
});
