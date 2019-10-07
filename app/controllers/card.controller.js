const Card = require('../models/card.model.js');
const mtg = require('mtgsdk');


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    return
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    mtg.card.find(req.params.multiverseId)
        .then(result => {
            res.send(result.card)
        }).catch(err => {
            return res.status(404).send({
                message: `${err.error.status} - ${err.error.error}`
            })
        })

};


