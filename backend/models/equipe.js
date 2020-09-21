const mongoose = require('mongoose');

const equipeSchema = mongoose.Schema ({
    nom: {type: String, required: true},
    id_tournoi: {type: String},
    id_joueurs: {type: String}
});

module.exports = mongoose.model('Equipe', equipeSchema);