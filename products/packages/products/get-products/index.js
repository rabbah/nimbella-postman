/* Pulls a list of all products. */
const nimbella = require('nim')
const kv = nimbella.redis()

async function main(params) {
    const products = await kv
        .keysAsync('/*')
        .then(ids => ids.map(async id => kv.getAsync(id).then(JSON.parse)))

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: await Promise.all(products)
    }
}

exports.main = main
