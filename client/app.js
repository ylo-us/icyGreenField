angular.module('main', ['housing.search', 'housing.result', 'ngRoute'])
.config(function($routeProvider, $httpProvider) {
	$routeProvider
	.when('/result', {
		templateUrl: 'result.html',
		controller: 'ResultController'
	})
	.when('/search', {
		templateUrl: 'search.html',
		controller: 'SearchController'
	})
	.otherwise({
		redirectTo: '/search'
	})
});