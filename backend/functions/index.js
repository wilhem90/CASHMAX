const express = require("express")
const app = express()
const routerUser = require("./routes/userRoutes.js")
verifyAuth = require("./middlleware/userMiddlleware.js")
const cors = require("cors")
const { onRequest } = require('firebase-functions/v2/https')

app.use(cors())
app.use(express.json())
app.use(routerUser)

exports.cashmax = onRequest(app)