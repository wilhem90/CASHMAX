const express = require("express")
const { idade, nome, sobrenome, auth } = require("./middelleware")

const router = express.Router()

router.get('/user', (req, res) => {
    res.status(200).send({
        "error":0,
        "message": "Acesso concedido!",
        "dataUser": [{
            "nome": nome,
            "sobrenome": sobrenome,
            "idade": idade,
            "id": "10100",
            "outro": auth,
        }]
    })
})


router.get('/transaction', (req, res) => {
    res.status(200).send({
        "error":0,
        "message": "Acesso concedido!",
        "transactions": [{
            "tipo": "topup",
            "pais": "haiti",
            "operador": "natcom",
            "numberRecepient": "50948526320",
            "mountainSend": "30",
            "mountainRecepient": "505,32",
            "created_At": "07-05-2024 10:26:50",
            "id": "wemcxkm23kxc",
        }]
    })
})

module.exports = router
