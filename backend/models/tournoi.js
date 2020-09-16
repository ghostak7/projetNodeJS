const mongoose = require('mongoose');

const tournoiSchema = mongoose.Schema ({
    nom: {type: String, required: true},
    lieu: {type: String, required: true},
    date_debut: {type: Date, required: true},
    date_fin: {type: Date, required: true},
});

module.exports = mongoose.model('Tournoi', tournoiSchema);