const mongoose = require('mongoose')

const crochetSchema = new mongoose.Schema({
    img1:{
        type: String,
        require: true
    },
    img2:{
        type: String,
        require: true
    },
    img3:{
        type: String,
        require: true
    },
    img4:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    metrics: {
        type: String,
        require: true
    },
    value: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Crochet', crochetSchema)