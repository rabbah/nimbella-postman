
/* Creates a new productz. */

function main(params) {
    return {
        statusCode: 201,
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            "status": "success"
        },
    };
}

exports.main = main;
