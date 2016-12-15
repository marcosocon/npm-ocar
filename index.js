var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");

function Ocarequest (number, type){
	var requestEmmiter = new EventEmitter();
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
	var request = http.get(url, function(res){
		var body = "";

		if (res.statusCode !== 200) {
			request.abort();
			//Status Code Error
			console.log("error");
			requestEmmiter.emit("error", new Error("There was an error getting the data "+ "(" + http.STATUS_CODES[res.statusCode] + ")"));
		}

		//Read the data
		res.on('data', function (chunk) {
			body += chunk;
			requestEmmiter.emit("data", chunk);
		});

		res.on('end', function(){
			body = JSON.parse(body)
			if(res.statusCode === 200 && body.success) {
				try {
					//Parse the data
					var results = body.data[0];
					requestEmmiter.emit("end", results);
				} catch (error) {
					requestEmmiter.emit("error", error);
				}
			}
		}).on('error', function(){
			requestEmmiter.emit("error", error);
		})
	});
};

util.inherits( Ocarequest, EventEmitter );

module.exports = Ocarequest;