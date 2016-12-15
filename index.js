var request = require("request");
module.exports = function (number, type){
	var validTypes = ['dni', 'cartas', 'partidas', 'paquetes'];
	if (!number || !type) {
		console.log("Please enter 2 values, track id and type.");
		return false;
	}
	if (validTypes.indexOf(type) === -1) {
		console.log("Invalid Type");
		return false;
	}
	var url = 'http://www.oca.com.ar/?q=package-locator&type='+type+'&number='+number;
	request.get({
		url: url
	},function(req, response, err){
		if (response.body) {
			var body = JSON.parse(response.body);
			if (body.success) {
				var result = body.data[0];
				return result;
			} else {
				console.log("There's no ", type);
			}
		} else {
			console.log("An error has occurred");
			return false;
		}
	});
};
