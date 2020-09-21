const Tournoi = require('../models/tournoi');
var ObjectId = require('mongodb').ObjectId; 
let router = require('express').Router();

router.route('/tournois')

//GET
.get( (req, res) => {
    //TODOO
    Tournoi.find({})
    .then( tournois => res.status(200).json(tournois))
    .catch( error => res.status(400).json({error}))

})



//POST
.post( (req, res) => {

    const tournoi = new Tournoi({
        ...req.body
    });

    tournoi.save()
    .then( () => {
        res.status(201).json({
            message: 'Un tournoi à été crée enregistré!'
        })
    })
    .catch( error => res.status(400).json({ error}));
})




router.get('/tournois/:id', (req, res) => {
    console.log(req.params._id)
    console.log(req.params.id)
    //{}, {name:1}
    //Tournoi.findById(ObjectId(req.params.id))
    Tournoi.find({_id:req.params.id})
    .then( tournoi => res.status(200).json(tournoi))
    .catch( error => res.status(400).json({error}))
    
    //res.render('hello', {name:req.params.name, title:"Fenetre de bienvenue!"})
    //res.send('coucou '+ req.params.name)
});

//UPDATE
router.put('/tournois/:id', (req, res) => {

    const tournoi = new Tournoi({
        ...req.body
    });

    Tournoi.updateOne({ _id: req.params.id}, { $set: {
         nom: tournoi.nom,
         lieu: tournoi.lieu,
         pays: tournoi.pays,
         surface: tournoi.surface,
         date_debut: tournoi.date_debut,
         date_fin: tournoi.date_fin}})
    .then( ( )=> res.status(200).json({ message : 'Tournoi modifié!'}))
    .catch( error => res.status(400).json({ error}));
})

//DELETE
router.delete('/tournois/:id', (req, res) => {

    Tournoi.deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({ message : 'Tournoi Supprimé!'}))
    .catch( error => res.status(400).json({error}))
})

module.exports = router