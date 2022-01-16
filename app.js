require('dotenv').config()
const bodyParser = require('body-parser')

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const user = require('./routes/users.routes')
const {validateUsers} = require("./validations/validation")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/users", user)

mongoose.connect(process.env.DB_URL).then(msg=>{
    console.log("Mongo conected")
    app.listen(process.env.PORT, () => {
        console.log(`Server its runnign ${process.env.PORT}`)
    })
}).catch(err=>{
    console.log(err)
})
