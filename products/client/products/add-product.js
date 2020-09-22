var request = require('request');
var options = {
   'method': 'POST',
   'url': 'https://rodricgm-h4nvfnjgdgg-apigcp.nimbella.io/api/products/add-product',
   'headers': {
      'x-api-key': '',
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({"identifier":"product-nine","name":"Product Nine","description":"This is a description of product nine, providing all the details of this product.","image":"http://example.com/image.jpg","url":"http://example.com","brand":"Union Fashion","category":"Test","color":"Red","logo":"http://example.com/image.jpg","manufacturer":"Unon Fashion","material":"Cotton","model":"Test","releaseDate":"01/01/2020","sku":"test-1","width":"0","weight":"0","depth":"0","height":"0"})

};
request(options, function (error, response) { 
   if (error) throw new Error(error);
   console.log(response.body);
});
