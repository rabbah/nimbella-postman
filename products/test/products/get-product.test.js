const { main } = require('../../packages/products/get-product/index');


test('response is ok', function () {
     const response = main();
    expect(response.statusCode).toBe(200);
});

test('response json data should not have errors', function () {
    const response = main();
    expect(response).not.toHaveProperty('error');
});
test('Content-Type header is present', function () {
   const response = main();
   expect(response.headers).toHaveProperty('Content-Type');
});

test('Should have valid response', function () {
         const response = main();
         expect(response.body).toHaveProperty('identifier')
         expect(response.body).toHaveProperty('name')
         expect(response.body).toHaveProperty('description')
         expect(response.body).toHaveProperty('image')
         expect(response.body).toHaveProperty('url')
         expect(response.body).toHaveProperty('brand')
         expect(response.body).toHaveProperty('category')
         expect(response.body).toHaveProperty('color')
         expect(response.body).toHaveProperty('logo')
         expect(response.body).toHaveProperty('manufacturer')
         expect(response.body).toHaveProperty('material')
         expect(response.body).toHaveProperty('model')
         expect(response.body).toHaveProperty('releaseDate')
         expect(response.body).toHaveProperty('sku')
         expect(response.body).toHaveProperty('width')
         expect(response.body).toHaveProperty('weight')
         expect(response.body).toHaveProperty('depth')
         expect(response.body).toHaveProperty('height')
});

