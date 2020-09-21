const mongoose = require('mongoose');

const matchSchema = mongoose.Schema ({
    numero: {type: String, required: true },
    id_joueur1: [{type: String}, {type: String}],
    id_joueur2: [{type: String}, {type: String}],
    sets: [{ type: String}],
    gagnant: [{ type: String, type: String }],
    perdant: [{ type: String, type: String }]
});

module.exports = mongoose.model('Match', matchSchema);