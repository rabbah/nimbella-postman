var request = require('request');
var options = {
   'method': 'DELETE',
   'url': 'https://rodricgm-h4nvfnjgdgg-apigcp.nimbella.io/api/products/delete/:productId',
   'headers': {
      'x-api-key': ''
   }
};
request(options, function (error, response) { 
   if (error) throw new Error(error);
   console.log(response.body);
});