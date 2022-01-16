
const mongoose = require('mongoose')
const user = require("../schemas/user.schema")


async function getUser() {
    return await user.find()
}

async function save(body){
    let objUser = new user(body);
    return await objUser.save()
}

module.exports = {
    getUser,
    save
}