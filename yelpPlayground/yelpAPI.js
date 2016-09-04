var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var OAuth   = require('oauth-1.0a');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	var oauth = OAuth({
	  consumer: {
	      public: 'xi_i5XExqHs6OjTO-t5tAw',
	      secret: 'ArUGFro8GvcGmPng5gwQLDbvij0'
	  },
	  signature_method: 'HMAC-SHA1',
	});

	var token = {
	    public: 'BSDWvSVKJgfV59TWApT3PCso8EgFJmi7',
	    secret: '9PlXhgqOqdpOmo5ti_NbbJUF4GM'
	};

	var request_data = {
	    url: 'https://api.yelp.com/v2/search?location=sf&term=puff&limit=2',
	    method: 'GET',
	};
	var data;
	request({
	    url: request_data.url,
	    method: request_data.method,
	    form: request_data.data,
	    headers: oauth.toHeader(oauth.authorize(request_data, token)),
	    form: oauth.authorize(request_data, token)
	}, function(error, response, body) {
			var data = [];
			console.log(body);
			resData = JSON.parse(body);
			for (var i = 0; i < resData.businesses.length; i++) {
				data.push({
					name: resData.businesses[i].name,
					rating: resData.businesses[i].rating,
					url: resData.businesses[i].url,
					phone: resData.businesses[i].display_phone,
					address: resData.businesses[i].location.display_address,
					neighborhoods: resData.businesses[i].location.neighborhoods
				});
			}
	    res.send(data);
	});
});


console.log('server is running on 8080');
app.listen(8080);