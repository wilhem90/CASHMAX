const authMidlleware = (req, res, next) => {
    const maxi = true
    if (maxi === true) {
        next()
    }else{
        console.log("Precisa logar para ter acesso!");
        res.status(500).json({ 
            error: 1,
            message: 'Server Error' });
    }
}

module.exports = authMidlleware