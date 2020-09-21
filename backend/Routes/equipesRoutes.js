const Equipe = require('../models/equipe');
let router = require('express').Router();

router.route('/equipes')

//GET
.get( (req, res) => {
    //TODOO
    Equipe.find({})
    .then( equipes => res.status(200).json(equipes))
    .catch( error => res.status(400).json({error}))

})



//POST
.post( (req, res) => {

    const equipe = new Equipe({
        ...req.body
    });

    equipe.save()
    .then( () => {
        res.status(201).json({
            message: 'Un equipe à été crée enregistré!'
        })
    })
    .catch( error => res.status(400).json({ error}));
})




router.get('/equipes/:id', (req, res) => {

    Equipe.find({_id:req.params.id})
    .then( equipes => res.status(200).json(equipes))
    .catch( error => res.status(400).json({error}))
    
});

//UPDATE
router.put('/equipes/:id', (req, res) => {

    const joueur = new Equipe({
        ...req.body
    });

    Equipe.updateOne({ _id: req.params.id}, { $set: {
         nom: joueur.nom,
         id_tournoi: joueur.id_tournoi,
         id_equipe: joueur.id_equipe}})
    .then( ( )=> res.status(200).json({ message : 'Equipe modifié!'}))
    .catch( error => res.status(400).json({ error}));
})

//DELETE
router.delete('/equipes/:id', (req, res) => {

    Equipe.deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({ message : 'Equipe Supprimé!'}))
    .catch( error => res.status(400).json({error}))
})

module.exports = router