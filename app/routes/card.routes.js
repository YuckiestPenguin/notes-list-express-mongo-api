module.exports = (app) => {
    const cards = require('../controllers/card.controller');

    // Retrieve all Notes
    app.get('/cards', cards.findAll);

    // Retrieve a single Note with noteId
    app.get('/cards/:multiverseId', cards.findOne);
}