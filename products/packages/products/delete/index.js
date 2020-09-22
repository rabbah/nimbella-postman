
/* Delete an individual product. */

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
