let express = require('express')
let bodyParser = require('body-parser')
const Tournoi = require('../backend/models/tournoi');


let app = express();



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

//---------------------------
app.get('/', (req, res) => {
    res.send('Bonjour, pour voir un tournoi aller à cette adresse url : <b>http://localhost:3000/tournois<b>')
})

//GET
app.get( '/tournois',(req, res) => {
    
    const tournoi = new Tournoi()
    tournoi.nom = "US Open";
    tournoi.lieu = "New York";
    tournoi.surface = "Dur";
    tournoi.date_debut ="10/08/2021";
    tournoi.date_fin = "25/09/2021";

    res.render("tournois", { nom: tournoi.nom, lieu: tournoi.lieu, surface: tournoi.surface, date_debut: tournoi.date_debut, date_fin: tournoi.date_fin });

    console.log("-------------")
    console.log(tournoi)
})



app.listen(3000, () => {
    console.log("Serveur Lancé : en écoute sur le port 3000")
})