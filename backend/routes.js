const express = require("express")
const router = express.Router()
const { allUsers, getUser} = require("./connectDb")

router.get("/users", async(req, res) => {
    res.status(200).send(await allUsers())
})


router.get("/users/:id", async(req, res) => {
    const idUser = req.params.id
    const user = await getUser(idUser)

    if (user) {
        // Se o usuário for encontrado, retorne o usuário como resposta
        res.status(200).send({
            "error": 0,
            "user": user
        });
    } else {
        // Se o usuário não for encontrado, retorne um status 404 (Not Found)
        res.status(404).send({ 
            "error": 1,
            message: "Usuário não encontrado",
        });
    }

})

module.exports = router