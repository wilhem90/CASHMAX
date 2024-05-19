
function verify(req, res, next) {
    const login = true
    if (login === true) {
        console.log("Logado com sucesso!");
        next()
    }else {
        console.log("Login required!");
        res.status(400).send({
            error: 1,
            message: "Login required!"
        })
    }
}






module.exports = verify