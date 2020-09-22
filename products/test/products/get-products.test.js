const { main } = require('../../packages/products/get-products/index');


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
         expect(response.body).toHaveProperty('0')
         expect(response.body).toHaveProperty('1')
         expect(response.body).toHaveProperty('2')
         expect(response.body).toHaveProperty('3')
});

