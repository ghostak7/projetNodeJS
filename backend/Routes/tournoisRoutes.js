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
.post( (request, response) => {

})

//UPDATE
.put( (request, response) => {

})

//DELETE
.delete( (request, response) => {

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

module.exports = router