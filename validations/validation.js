async function validateUsers(body) {
    return validate(body)
   
}

function validate(body) {
    let msg = []
    if (!body.hasOwnProperty("name")) {
        msg.push("Its requiere a name")
    } else {
        if (body.name === "") {
            msg.push("Name it doesnt empty")
        }
    }
    if (!body.hasOwnProperty("age")) {
        msg.push("Its require an age")
    } else {
        if (body.age === "") {
            msg.push("age it doesnt empty")
        }
    }
    if (!body.hasOwnProperty("city")) {
        msg.push("Its require a city")
    } else {
        if (body.city === "") {
            msg.push("City it doesnt empty")
        }
    }
    return msg
}

module.exports = {
    validateUsers
}