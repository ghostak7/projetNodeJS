import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipe } from 'src/app/models/equipe.model';
import { Joueur } from 'src/app/models/joueur.model';
import { Tournois } from 'src/app/models/tournois.model';
import { equipeService } from 'src/app/services/equipe.service';
import { JoueurService } from 'src/app/services/joueur.service';
import { TournoisService } from 'src/app/services/tournois.service';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

  public tournois: Tournois[] = [];
  public joueurs: Joueur[] = [];
  public AjoutForm: FormGroup;

  constructor(
    private tournoiService: TournoisService,
    private equipeService: equipeService,
    private joueurService: JoueurService,
    private formBuilder: FormBuilder
  ) {
    this.joueurService.GetAllPlayer().subscribe(
      (data) => {
        this.joueurs = data;
      }
    );
    this.tournoiService.GetAllTournois().subscribe(
      (data) => {
        this.tournois = data;
      }
    );
   }

  ngOnInit() {
    this.AjoutForm = this.formBuilder.group({
      nom:['',Validators.required],
      joueurs:['',Validators.required],
      joueurs2:['',Validators.required],
      tournois:['',Validators.required]
    });
  }

  get f () { return this.AjoutForm.controls; }

  onSubmit(){
    if (this.AjoutForm.invalid) {
      return;
    }

    const equipe = new Equipe();
    equipe.id_joueurs = this.AjoutForm.get('joueurs').value;
    equipe.id_joueur2 = this.AjoutForm.get('joueur2').value;
    equipe.id_tournoi = this.AjoutForm.get('tournois').value;
    equipe.nom = this.AjoutForm.get('nom').value;

    this.equipeService.CreateEquipe(equipe).then(
      () => {
        this.AjoutForm.reset();
      }
    );

  }

}
