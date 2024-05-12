const express = require("express")
const app = express()
require("dotenv").config()

const router = require("./routes/userRoutes.js")
const PORT = process.env.PORT || 9090

app.use(router)

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta:\n http://localhost:${PORT}`);
})