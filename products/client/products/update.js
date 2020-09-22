var request = require('request');
var options = {
   'method': 'PUT',
   'url': 'https://rodricgm-h4nvfnjgdgg-apigcp.nimbella.io/api/products/update/:productId',
   'headers': {
      'x-api-key': '',
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({"identifier":"<string>","name":"<string>","description":"<string>","image":"<string>","url":"<string>","brand":"<string>","category":"<string>","color":"<string>","logo":"<string>","manufacturer":"<string>","material":"<string>","model":"<string>","releaseDate":"<string>","sku":"<string>","width":"<string>","weight":"<string>","depth":"<string>","height":"<string>"})

};
request(options, function (error, response) { 
   if (error) throw new Error(error);
   console.log(response.body);
});
