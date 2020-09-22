var request = require('request');
var options = {
   'method': 'GET',
   'url': 'https://rodricgm-h4nvfnjgdgg-apigcp.nimbella.io/api/products/get-products',
   'headers': {
   }
};
request(options, function (error, response) { 
   if (error) throw new Error(error);
   console.log(response.body);
});
