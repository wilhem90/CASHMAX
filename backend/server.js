const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes")

app.use(cors())
app.use(router)

const port = 9090

app.listen(port, () => {
    console.log(`O servidor foi iniciado com sucesso!\nhttp://localhost:${port}`);
})