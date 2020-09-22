
/* Pulls a list of all product */

function main(params) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: [
            {
                "identifier": "product-three",
                "name": "Product Three",
                "description": "This is a description of product three, providing the details of this product.",
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
            {
                "identifier": "product-two",
                "name": "Product Two",
                "description": "This is a description of product two-two-two, providing the details of this product.",
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
            {
                "identifier": "product-one",
                "name": "Product One",
                "description": "This is a description of product one, providing the details of this product.",
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
            {
                "identifier": "product-four",
                "name": "Product Four",
                "description": "This is a description of product four, providing the details of this product.",
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
            }
        ],
    };
}

exports.main = main;
