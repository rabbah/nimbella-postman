const { main } = require('../../packages/products/delete/index');

test('returned response matches', () => {
  expect(main().body).toBe("");
});

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

