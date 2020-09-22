
/* Retrieves a single product. */

function main(params) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            "identifier": "product-three",
            "name": "Product Three",
            "description": "This is a description of product three.",
            "image": "http://example.com/image.jpg",
            "url": "http://example.com",
            "brand": "Union Fashion",
            "category": "Test",
            "color": "Blue",
            "logo": "http://example.com/image.jpg",
            "manufacturer": "Unon Fashion",
            "material": "Cotton",
            "model": "Test",
            "releaseDate": "01/01/2020",
            "sku": "test-1",
            "width": "0",
            "weight": "0",
            "depth": "0",
            "height": "0"
        },
    };
}

exports.main = main;
