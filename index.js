var request = require("request");
module.exports = function(number, type){
	if (!number || !type) {
		console.log("Por favor ingresa ambos valores, track id y tipo");
		return false;
	}
	if (type !== 'dni' && type !== 'cartas' && type !== 'partidas' && type !== 'paquetes') {
		console.log("Tipo de envio invalido");
		return false;
	}
	request.get({
		url:'https://www.oca.com.ar/?q=package-locator&type='+type+'&number='+number
	},
	function(req, response, err){
		if (response.body) {
			var body = JSON.parse(response.body);
			if (body.success) {
				var array = body.data[0];
				var result = {
					"Tipo": array.tipo,
					"Numero de pieza" : array.numeroPieza,
					"Nombre del titular" : array.titular,
					"Descripcion": array.descripcion,
					"Fecha": array.fecha,
					"Sucursal": array.sucursal
				};
				console.log(result);
				return result;
			} else {
				console.log("No se encontraron", type);
			}
		} else {
			console.log("Ha ocurrido un error");
		}
	});
};
