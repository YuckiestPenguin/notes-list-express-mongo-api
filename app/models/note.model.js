const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
