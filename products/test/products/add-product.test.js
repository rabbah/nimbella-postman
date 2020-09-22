const { main } = require('../../packages/products/add-product/index');

test('returned response matches', () => {
  expect(main().body).toBe("{\n \"status\": \"success\"\n}");
});

test('Successful POST request', function () {
    const response = main();
    expect([200,201,202]).toContain(response.statusCode) 
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
         expect(response.body).toHaveProperty('status')
});

