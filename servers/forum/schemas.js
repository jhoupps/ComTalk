const Schema = require('mongoose').Schema;

const forumSchema = new Schema({
    id: { type: Schema.Types.ObjectId, required: true, unique: true, auto: true },
    name: { type: String, required: true, unique: true },
    description: String,
    members: {type: [{id: Number, username: String, email: String }]},
    createdAt: { type: Date, required: true },
    creator: {type:{id: Number, username: String, email: String }},
    editedAt: Date
})

module.exports = { forumSchema }