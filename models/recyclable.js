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
    address: String,
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
    material: {
        type: String,
        enum: ['None', 'Wood', 'Paper', 'Glass', 'Plastic', 'Metal', 'Food', 'Styrofoam', 'Electronic', 'Construction', 'Plastics', 'Carrier']
    },
    howMany: {
        type: Number,
        min: 0,
    },
    details: [String],
    address: [String],
    changes: [changesSchema],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Recyclable', recyclableSchema)