
function verify(req, res, next) {
    const login = false
    if (login === true) {
        console.log("Logado com sucesso!");
        next()
    }else {
        console.log("Login required!");
        res.status(401).send({
            error: 1,
            message: "Login required!"
        })
    }
}



module.exports = verify