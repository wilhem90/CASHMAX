const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const userRouter = require("./routes/userRoutes")
const userMiddleware = require("./middlleware/userMiddlleware")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(userMiddleware)
app.use(bodyparser.json())
app.use(userRouter)

const PORT = process.env.PORT || 9098
app.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta:\nhttp://localhost:${PORT}`);
})