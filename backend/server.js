const express = require('express')
const dotenv = require("dotenv")
const colors = require('colors')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
dotenv.config()

connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send("Api is run")
})

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Start on PORT ${PORT} `.yellow.bold))