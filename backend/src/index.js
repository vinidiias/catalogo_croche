const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const dbUri = process.env.DB_URI
const app = express()
const router = require('./Routes/Router')


mongoose.connect(dbUri, {dbName:'arte-croche'})
.then((res) => {
    console.log('Connected to database')
}) .catch((err) => console.log(err))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333, () => {
    console.log('Serven running on port 3333')
})