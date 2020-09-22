/* Retrieves a single product. */
const nimbella = require('nim')
const kv = nimbella.redis()

async function main(params) {
    const productid = params.__ow_path

    return kv
        .getAsync(productid)
        .then(product => {
            if (product) {
                return {
                    statusCode: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.parse(product)
                }
            } else {
                return {
                    statusCode: 404,
                    body: {
                        status: "Product not found"
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
            return {
                statusCode: 400,
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    status: "Oops!"
                }
            }
        })
}

exports.main = main
