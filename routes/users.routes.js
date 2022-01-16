const express = require("express")
const router = express.Router()
const { getUser, save } = require('../services/user.services')
const { auth, profile } = require("../port/outh")
const { validateUsers } = require("../validations/validation")


router.post("/auth", async (req, res) => {
    let { authuser } = req.body
    try {
        let { data } = await auth(authuser)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send("There is a problem in the server")
    }
})

router.post("/profile", async (req, res) => {
    let { authorization } = req.headers
    let token = authorization.split(" ")[1]
    try {
        console.log(token)
        let { data } = await profile(token)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send("There is a problem in the server")
    }
})

router.get("/", async (req, resp) => {
    try {
        console.log("Entro al endpoint")
        let data = await getUser()
        resp.status(200).send({ msg: "lst users", data, status: 200 })
    } catch (error) {
        console.log(error)
        resp.status(500).send("There is a problem in the server")
    }
})

router.post("/", async (req, res) => {
    let { body } = req
    let msg = await validateUsers(body)
    if (msg.length === 0) {
        try {
            let obj = await save(body)
            res.status(201).send(obj)
        } catch (error) {
            console.log(error)
            res.status(500).send("There is a problem in the server")
        }
    } else {
        return res.status(400).send({ status: 400, msg })
    }

})

module.exports = router