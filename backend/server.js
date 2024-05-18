const express = require("express")
const app = express()
const routerUser = require("./routes/userRoutes")
verifyAuth = require("./middlleware/userMiddlleware")
const cors = require("cors")
require("dotenv").config()


app.use(cors())
app.use(verifyAuth)
app.use(express.json())
app.use(routerUser)
const PORT = process.env.PORT || 9094
app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta:\nhttp://localhost:${PORT}`);
})