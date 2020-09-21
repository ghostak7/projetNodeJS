const Joueur = require('../models/joueur');
let router = require('express').Router();

router.route('/joueurs')

//GET
.get( (req, res) => {
    //TODOO
    Joueur.find({})
    .then( joueurs => res.status(200).json(joueurs))
    .catch( error => res.status(400).json({error}))

})



//POST
.post( (req, res) => {

    const joueur = new Joueur({
        ...req.body
    });
    console.log(joueur)

    joueur.save()
    .then( () => {
        res.status(201).json({
            message: 'Un joueur à été crée enregistré!'
        })
    })
    .catch( error => res.status(400).json({ error}));
})




router.get('/joueurs/:id', (req, res) => {

    Joueur.find({_id:req.params.id})
    .then( joueur => res.status(200).json(joueur))
    .catch( error => res.status(400).json({error}))
    
});

//UPDATE
router.put('/joueurs/:id', (req, res) => {

    const joueur = new Joueur({
        ...req.body
    });

    Joueur.updateOne({ _id: req.params.id}, { $set: {
         nom: joueur.nom,
         prenom: joueur.prenom,
         sexe: joueur.sexe,
         age: joueur.age,
         id_tournoi: joueur.id_tournoi,
         id_equipe: joueur.id_equipe}})
    .then( ( )=> res.status(200).json({ message : 'Joueur modifié!'}))
    .catch( error => res.status(400).json({ error}));
})

//DELETE
router.delete('/joueurs/:id', (req, res) => {

    Joueur.deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({ message : 'Joueur Supprimé!'}))
    .catch( error => res.status(400).json({error}))
})

module.exports = router