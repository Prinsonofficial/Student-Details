const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    mark1: {
        type: Number
    },
    mark2: {
        type: Number
    },
    mark3: {
        type: Number
    },
    result: {
        type: String
    }
}, {timestamps: true})

const studentmodel = mongoose.model('studentmodel', studentSchema)
module.exports = studentmodel