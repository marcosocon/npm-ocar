var request = require("request");
module.exports = function (number){

  var TYPES = ["cartas", "paquetes", "dni", "partidas"];
  var q = "package-locator";
  var results = [];
  var array = [];
  TYPES.map(function(type){
  request.get({
    url:'https://www.oca.com.ar/?q='+q+'&type='+type+'&number='+number
  },
  function(err,response,body){
    if (response.body.indexOf('"success":true') != -1) {
      var res = JSON.parse(body)
      array.push(res.data)
      var results = array[0][0];
      console.log(results);
    }
    else{
      console.log("No se encontraron " + type);
    }
    });
  });
};
