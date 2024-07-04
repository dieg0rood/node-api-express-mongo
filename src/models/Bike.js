const mongoose = require('mongoose')

const { Schema } = mongoose

const bikeSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    modelName:{
        type: String,
        required: true
    },
    cc:{
        type: Number,
        required: true
    },
    hp:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const Bike = mongoose.model('Bike', bikeSchema)

module.exports = {
    Bike,
    bikeSchema
};