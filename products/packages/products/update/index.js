
/* Supports either full or partial updates. */

function main(params) {
    return {
        statusCode: 204,
        headers: {
            "Content-Type": "text/plain",
        },
        body: '',
    };
}

exports.main = main;
