const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({

}, {
    timestamps: true
});

module.exports = mongoose.model('Card', CardSchema);
