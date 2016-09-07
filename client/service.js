angular.module('housing.service', [])
.factory('Service', function($http) {
	var sendSearch = function(location, term, budget) {
		// term and budget are optional
		var searchLocation = location || 'sf';
		var searchTerm = term || '';
		var searchBudget = budget || '';
		return $http({
			method: 'POST',
			url: 'to be updated', // send to server where takes care of API request
			data: {
				location: searchLocation,
				term: searchTerm,
				budget: searchBudget
			}
		});
	};
	var getResult = function() {
		return $http({
			method: 'GET',
			url: 'to be updated'
		}).then(function(res) {
			return res.data;
		});
	};
	return {
		sendSearch: sendSearch,
		getResult: getResult
	};
})