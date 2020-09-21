const Match = require('../models/match');
let router = require('express').Router();

router.route('/matchs')

//GET
.get( (req, res) => {
    //TODOO

    Match.find({})
    .then( (matchs )=> {
        //console.log(matchs)
        res.status(200).json(matchs)
    })
    .catch( error => res.status(400).json({error}))

})



//POST
.post( (req, res) => {

    const match = new Match({
        ...req.body
    });

    match.save()
    .then( () => {
        res.status(201).json({
            message: 'Un match à été crée enregistré!'
        })
    })
    .catch( error => res.status(400).json({ error}));
})




//UPDATE
router.put('/matchs/:id', (req, res) => {

    console.log("Je suis dans le route pour PUT")

    const match = new Match({
        ...req.body
    });

    console.log("------reqmatch-----");
    console.log(match);

    Match.updateOne({ _id: req.params.id}, {  $set: {
         numero: match.numero,
         id_joueur1: match.id_joueur1,
         id_joueur2: match.id_joueur2,
         sets: match.sets,
         gagnant: match.gagnant,
         perdant: match.perdant}})
    .then( ( )=> res.status(200).json({ message : 'match modifié!'}))
    .catch( error => res.status(400).json({ error}));
})

//DELETE
router.delete('/matchs/:id', (req, res) => {
    Match.deleteOne({_id:req.params.id})
    .then( () => res.status(200).json({ message : 'match Supprimé!'}))
    .catch( error => res.status(400).json({error}))
})

router.get('/matchs/:id', (req, res) => {
    console.log("Je suis dans le route pour GetId")
    console.log(req.params._id)
    console.log(req.params.id)
    //{}, {name:1}
    //Tournoi.findById(ObjectId(req.params.id))
    Match.find({_id:req.params.id})
    .then( match => res.status(200).json(match))
    .catch( error => res.status(400).json({error}))
    
    //res.render('hello', {name:req.params.name, title:"Fenetre de bienvenue!"})
    //res.send('coucou '+ req.params.name)
});


module.exports = router