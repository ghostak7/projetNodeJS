let expect = require('must');

require('must/register');


const mongoose = require('mongoose');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

const server = require('../app');
const Tournoi = require('../models/tournoi')

chai.use(chaiHttp);

describe('Tournois', () => {
  beforeEach((done) => {
    Tournoi.remove({}, () => { // On vide la base de données avant chaque test
      done(); // Etant donné que la méthode remove est asynchrone, done est utilisé pour que mocha sache quand tout est terminé
    });
  });

  describe('/GET tournois', () => { // La suite de tests pour la route GET
    it('Doit récupérer tous les items quand il n\'y a pas d\'item dans la base de donnée', (done) => { // Test qui vérifie qu'il n'y a pas d'erreurs lorsque la base de données est vide
      chai.request(server).get('/tournois').end((err, res) => { // On requète la route GET
        res.should.have.status(200); // On vérifie le statu de la réponse
        // res.body.should.be.a('array'); // On vérifie que le résultat est un tableau
        res.body.length.should.be.eql(0); // On vérifie que la longueur du tableau est de 0
        done(); // On dit à mocha que l'on a fini nos assertions
      });
    });

    it('Doit récupérer tout les tournois lorsqu\'il y a 2 tournois dans la base de donnée', (done) => { // Test qui vérifie qu'on a le bon résultat lorsqu'il y a deux items dans la base de données
      const premierTournoi = new Tournoi({
        nom: 'Tournoi-1-Test',
        lieu: 'Paris',
        pays: 'France',
        surface: 'Dur',
        date_debut: '01/01/2021',
        date_fin: '02/02/2021'
      });
      const deuxiemeTournoi = new Tournoi({
        nom: 'Tournoi-2-Test',
        lieu: 'London',
        pays: 'Royaume-Uni',
        surface: 'Gazon',
        date_debut: '01/05/2021',
        date_fin: '02/07/2021'
      });
      premierTournoi.save(() => { // On sauvegarde le premier et le deuxieme dans la base de données
        deuxiemeTournoi.save(() => {
          chai.request(server).get('/tournois').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(2);
;

            // On vérifie que les éléments retournés par la route sont semblables à ceux que l'on a enregistré dans la base
            res.body[0].nom.should.be.eql(premierTournoi.nom); 
            res.body[0].lieu.should.be.eql(premierTournoi.lieu);
            res.body[0].pays.should.be.eql(premierTournoi.pays);
            res.body[0].surface.should.be.eql(premierTournoi.surface);
            res.body[0].date_debut.should.be.eql(premierTournoi.date_debut);
            res.body[0].date_fin.should.be.eql(premierTournoi.date_fin);

            res.body[1].nom.should.be.eql(deuxiemeTournoi.nom); 
            res.body[1].lieu.should.be.eql(deuxiemeTournoi.lieu);
            res.body[1].pays.should.be.eql(deuxiemeTournoi.pays);
            res.body[1].surface.should.be.eql(deuxiemeTournoi.surface);
            res.body[1].date_debut.should.be.eql(deuxiemeTournoi.date_debut);
            res.body[1].date_fin.should.be.eql(deuxiemeTournoi.date_fin);

            done();
          });
        });
      });
    });
  });

  describe('/POST Tournoi', () => {

    it('Post un objet avec certain champs manquant', (done) => {

      const troisiemeTournoi = new Tournoi({
        surface: 'Terre battue',
        date_debut: '01/12/2021',
        date_fin: '30/07/2021'
      });

      chai.request(server).post('/tournois').send(troisiemeTournoi).end( (err, res) => {
        res.should.have.status(400);
        done();
      })

    })

    it('Post un objet valide', (done) => {

      const troisiemeTournoi = new Tournoi({
        nom: 'Tournoi-3-Test',
        lieu: 'Monte-Carlo',
        pays: 'Monaco',
        surface: 'Terre battue',
        date_debut: '01/05/2021',
        date_fin: '02/07/2021'
      });

      chai.request(server).post('/tournois').send(troisiemeTournoi).end( (err, res) => {
        res.should.have.status(201);
        done();
      })

    })

  })

  //GetId 
  describe('GET/:id Tournoi', (done) => {

    it("Ne doit pas renvoyer un tournoi dont l\'id n\'existe pas ", (done) => {
      chai.request(server).get('/tournois/' + mongoose.Types.ObjectId()).end( (err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql([])
        done();
      })
    })

    it("Doit recevoir un tournoi dont l\'id existe ", (done) => {
      
      const quatriemeTournoi = new Tournoi({
        nom: 'Tournoi-4-Test',
        lieu: 'Miami Gardens',
        pays: 'États-Unis',
        surface: 'Dur',
        date_debut: '27/07/2021',
        date_fin: '31/09/2021'
      });

      quatriemeTournoi.save( (err, savedTournoi) => {
        chai.request(server).get('/tournois/' + savedTournoi._id).end( (err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body[0].nom.should.be.eql(savedTournoi.nom);
          res.body[0].lieu.should.be.eql(savedTournoi.lieu);
          res.body[0].pays.should.be.eql(savedTournoi.pays);
          res.body[0].surface.should.be.eql(savedTournoi.surface);
          res.body[0].date_debut.should.be.eql(savedTournoi.date_debut);
          res.body[0].date_fin.should.be.eql(savedTournoi.date_fin);
          done();
      })
      })
    })

  })



  //*****ERRROR WITH THIS TEST */
  describe('/PUT Tournoi', () => {

    it('Ne devrait pas mettre à jour un objet qui n\'existe pas', (done) => {

      chai.request(server).put('/tournois/' + 87879).end( (err, res) => {
      res.should.have.status(400);
      done();
      })

    })




    it('Dois update un tournoi avec de nouvelles valeurs', (done) => {

      const cinquiemeTournoi = new Tournoi({
        nom: 'Tournoi-5-Test',
        lieu: 'London',
        pays: 'Royaume-Uni',
        surface: 'Gazon',
        date_debut: '01/05/2021',
        date_fin: '02/07/2021'
      });
        
      const modiefTournoi = new Tournoi({
        nom: 'Tournoi-5-Test',
        lieu: 'Shanghai',
        pays: 'Chine',
        surface: 'Dur',
        date_debut: '01/10/2021',
        date_fin: '02/12/2021'
        });

        chai.request(server).post('/tournois').send(cinquiemeTournoi).end( (err, res) => {
          res.should.have.status(201);

          chai.request(server).get('/tournois:id' + cinquiemeTournoi._id).end((err, res2) => {
            res2.should.have.status(200);
          })


          

        chai.request(server).put('/tournois/:id' + modiefTournoi._id).send(modiefTournoi).end( (err, res) => {

          res.should.have.status(200);
          res.body.should.be('array');
          Tournoi.find({}, (err, tournoi) => {
            // console.log("------tournoi---")
            // console.log(res.body)
          })
        })

      })
    })



  })





  //--END
});