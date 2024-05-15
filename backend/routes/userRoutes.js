const express = require("express")
const userRouter = express.Router()
const Usercontroller = require("../controllers/UserController")

userRouter.get("/users", (req, res) => {
    res.status(200).send({
        error: 0,
        message: "Hello World!",
    })
})

module.exports = userRouter