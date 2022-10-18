const mongoose = require('mongoose')
const Schema = mongoose.Schema

const changesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    username: String,
    userAvatar: String,
    howMany: {
        type: Number,
        min: 0,
    },
    details: String,
    hmmm: String,
    comment: String,
}, {
    timestamps: true,
})

const recyclableSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: String,
    userAvatar: String,
    title: {
        type: String,
    },
    mainCategory: {
        type: String,
        enum: ['SUV', 'Van', 'Sedan', 'Hatchback', 'Sports', 'Coupe']
    },
    howMany: {
        type: Number,
        min: 0,
    },
    details: [String],
    hmmm: [String],
    changes: [changesSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Recyclable', recyclableSchema)