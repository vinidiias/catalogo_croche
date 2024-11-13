const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()
const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3')

const s3 = new S3Client({
    region: 'us-east-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'myphotoscroche',
        key(req, file, callback) {
            callback(null,  uuidv4() + path.extname(file.originalname))
        }
    })
})

const dbUri = process.env.DB_URI
const app = express()
const router = require('./Routes/Router')


mongoose.connect(dbUri, {dbName:'arte-croche'})
.then((res) => {
    console.log('Connected to database')
}) .catch((err) => console.log(err))

app.use(cors())
app.use(express.json({limit: '10mb'}))

app.post('/file', upload.array('imagem', 4), (req, res) => {
    const urls = req.files.map(file => {
        return `https://myphotoscroche.s3.us-east-2.amazonaws.com/${file.key}`;
    });

    res.json({urls})
})

app.use(router)

app.listen(3333, () => {
    console.log('Serven running on port 3333')
})