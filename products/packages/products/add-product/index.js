/* Creates a new products. */
const nimbella = require('nim')
const kv = nimbella.redis()
const uuid = require('uuid')

function main(params) {
    const product = {
        id: `/${uuid.v4()}`,
        category: params.category,
        brand: params.brand,
        color: params.color,
        image: params.image,
        unitPrice: params.unitPrice
    }
    
    return kv
        .setAsync(product.id, JSON.stringify(product))
        .then(_ => ({
            statusCode: 201,
            headers: {
                "Content-Type":"application/json",
            },
            body: {
                status: "success"
            }
        }))
        .catch(error => {
            console.log(error)
            return {
                statusCode: 400,
                headers: {
                    "Content-Type":"application/json",
                },
                body: {
                    status: "Oops!"
                }
            }
        })
}

exports.main = main
