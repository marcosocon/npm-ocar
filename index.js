var request = require("request");
exports.ocarequest = function(number){

  var TYPES = ["cartas", "paquetes", "dni", "partidas"];
  var q = "package-locator";
  var results = [];
  TYPES.map(function(type){
  request.get({
    url:'https://www.oca.com.ar/?q='+q+'&type='+type+'&number='+number
  },
  function(err,response,body){
    if (response.body.indexOf('"success":false') != -1) {
      console.log("nil");
    }
    else{
      var res = JSON.parse(body)
      results.push(res.data)
      console.log(results);
    }
  });
})

}
