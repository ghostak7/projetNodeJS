const mongoose = require('mongoose');

const tournoiSchema = mongoose.Schema ({
    nom: {type: String, required: true},
    lieu: {type: String, required: true},
    pays: {type: String, required: true},
    surface: {type: String, required: true},
    date_debut: {type: String, required: true},
    date_fin: {type: String, required: true},
});

module.exports = mongoose.model('Tournoi', tournoiSchema);