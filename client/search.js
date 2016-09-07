angular.module('housing.search', [])
.controller('SearchController', function($scope, $location, Service) {
	$scope.search = function() {
		// Service.sendSearch($scope.location, $scope.term, $scope.budget).then(function() {
		// 	$location.path('/result')
		// });
		$location.path('/result')
	}

})