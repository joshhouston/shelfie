const express = require('express')
const massive = require('massive')
const controller = require('./controller')
require('dotenv').config()

const app = express()

app.use(express.json())

const {CONNECTION_STRING} = process.env
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})

app.get('/api/inventory', controller.getProducts)








const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})



// app.listen(CONNECTION_STRING, () => console.log(`Listening on Port ${CONNECTION_STRING}`))