const express = require('express')
const http = require('http')
const path = require('path')
const app = express()

const server = http.createServer(app)
const io = require('socket.io').listen(server)

server.listen(5000)

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html')
})