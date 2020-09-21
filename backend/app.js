const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Tournoi = require('./models/tournoi');

const app = express();

//Connexion Bdd mongodb (cloud)
mongoose.connect('mongodb+srv://abel1234:1234abel@cluster0.8q6qe.mongodb.net/projet_bi?retryWrites=true&w=majority',
{
    userNewUrlParser:true,
    userUnifiedTopology:true})
.then( () => console.log('Conexion à MongoDB réussi!'))
.catch( () => console.log('Connexion échouée à MongoDB !'));

app.use( (req, res, next) => {
    //console.log('Nouvelle Requête, recu!')
    next();
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use(require('./Routes/tournoisRoutes'))
app.use(require('./Routes/joueursRoutes'))
app.use(require('./Routes/equipesRoutes'))
app.use(require('./Routes/matchsRoutes'))

// app.get('/tournois', (req, res, next) => {

//     Tournoi.find()
//     .then( tournois => res.status(200).json(tournois))
//     .catch( error => res.status(400).json({error}))
// })




//Export
module.exports = app;