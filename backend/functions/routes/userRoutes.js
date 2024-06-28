const express = require("express")
const router = express.Router()
const UserController = require("../controllers/UserController.js")


router.get("/users", UserController.getUsers)
router.get("/test", UserController.testUsers)
router.get("/users/:id", UserController.getUserById)
router.post("/users", UserController.createUser)
router.put("/users/:id", UserController.updateUser)
router.delete("/users/:id", UserController.deleteUser)
module.exports = router
