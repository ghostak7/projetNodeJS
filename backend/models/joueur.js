const mongoose = require('mongoose');

const joueurSchema = mongoose.Schema ({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    sexe: {type: String, required: true},
    age: {type: String },
    id_tournoi: {type: String },
    id_equipe: {type: String }
});

module.exports = mongoose.model('Joueur', joueurSchema);