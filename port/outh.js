const axios = require('axios')


async function auth(apiKey) {
    let body = {
        "authuser": apiKey
    }
    console.log(body)
    return await axios.post("https://atlantia-dev-test.herokuapp.com/api/auth", body)
}

async function profile(token) {
    return await axios.post("https://atlantia-dev-test.herokuapp.com/api/profile",{} ,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


module.exports = {
    auth,
    profile
}