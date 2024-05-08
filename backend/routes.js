const express = require("express")
const router = express.Router()
const { allUsers } = require('./middleware')

router.get("/users", (req, res) => {
    res.status(200).send(
        allUsers
    )
})


module.exports = router