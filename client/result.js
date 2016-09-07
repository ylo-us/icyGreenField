angular.module('housing.result', [])
.controller('ResultController', function($scope, $sce, Service, GoogleMap) {
	$scope.results = []; // array of result from server
	// craigslist is the mock data
	$scope.craigslist = craigslist;
	var resultInit = function() {
		for (var key in craigslist) {
			for (var i = 0; i < craigslist[key].length; i++) {
				var text = craigslist[key][i].title
				console.log(craigslist[key][i].title);
				$scope.craigslist[key][i].title = $sce.trustAsHtml($scope.craigslist[key][i].title);
			}
		}
		GoogleMap.googleMapsInitialize(craigslist, Object.keys(craigslist)[0]);
	};
	resultInit();
	$scope.selectNeighborhood = function(neighborhood) {
		GoogleMap.googleMapsInitialize(craigslist, neighborhood);
	};
	// var pageInit = function() {
	// 	// Service.getResult()
	// 	// .then(function(results) {
	// 	// 	for (var i = 0; i < results.length; i++) {
	// 	// 		$scope.results.push(results[i]);
				
	// 	// 	}
	// 	// });

	// 	for (var i = 0; i < results.length; i++) {
	// 		$scope.results.push(results[i]);
	// 	}
	// }
	// pageInit();
})

