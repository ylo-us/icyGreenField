angular.module('main', ['housing.search', 'housing.result', 'housing.service', 'ngRoute'])
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
})
.factory('GoogleMap', function() {
	var googleMapsInitialize = function(listings, neighbourhood) {
    markerArr = [];
    var lonsum = 0;
    var latsum = 0;
    var counter = 0;
    var i=0;

    while(counter < 5 && i < listings[neighbourhood].length) {
        if (listings[neighbourhood][i].lat !== undefined) {
            var lat1 = parseFloat(listings[neighbourhood][i].lat);
            var lon1 = parseFloat(listings[neighbourhood][i].lon);
            lonsum+=lon1;
            latsum+=lat1;

         var marker = new google.maps.Marker({
             position: new google.maps.LatLng(lat1, lon1)
         });

         markerArr.push(marker);
         counter+=1;
     }
     i+=1;
    }
    var total = Math.min(counter, 5);
    var myCenter = new google.maps.LatLng(latsum/total, lonsum/total);
		var mapProp = {
		  center: myCenter,
		  zoom:15,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	    console.log('debugguer 1');

		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		console.log(markerArr);

	  markerArr.forEach(function(marker) {
	    marker.setMap(map);
	  });
	};
	return {
		googleMapsInitialize: googleMapsInitialize
	}
});
