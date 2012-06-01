/*
 * File that holds bindings for APIs
 */

var config = {
  fields: [],
};



var apiController = {
	
	addApiCalls: function() {
		var neededApis = document.body.getElementsByClassName('$fh');
		debugger;
		for (var i = 0; i < neededApis.length; i++) {
			var classes = neededApis[i].className;
			for (var j = 0; j < bindings.length; j++) {
				if (classes.indexOf(bindings[j].name)); {
					var element = neededApis[i].getElementsByTagName('input')[0];
					element.click = apiController.fhGeo;
				}
			}
		}
	},


	// Returns Lat and Long as sting
	fhGeo: function() {
		$fh.geoip(function(res) {
			var str = '';
			str += 'Longitude: ' + res.longitude + ', ';
			str += 'Latitude: ' + res.latitude;
			return str;
		}, function(msg, err) {
			return 'location could not be determined';
		});
	},
}

var bindings = {
	fhGeo: {
		name: 'fhgeo',
		fn: apiController.fhGeo
	},
	fhCam: {
		name: 'fhcam',
		fn: apiController.fhGeo
	},
};
