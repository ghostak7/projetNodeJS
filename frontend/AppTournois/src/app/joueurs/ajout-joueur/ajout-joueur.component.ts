import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joueur } from 'src/app/models/joueur.model';
import { JoueurService } from 'src/app/services/joueur.service';
import { VariablesGlobales } from 'src/app/variableGlobal';

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent implements OnInit {

  public ajoutForm: FormGroup;

  constructor(
    private joueurService: JoueurService,
    private formBuilder: FormBuilder,
    private varGlo: VariablesGlobales
  ){

   }

  ngOnInit() {
    this.ajoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      nom_tournoi: [''],
      nom_equipe: [''],
      age: ['']
    });
  }

  get f () { return this.ajoutForm.controls; }
  onSubmit(){

    if (this.ajoutForm.invalid) {
      return;
    }

    console.log('Validation entamé');

    const joueur = new Joueur();
    joueur.nom = this.ajoutForm.get('nom').value;
    joueur.prenom = this.ajoutForm.get('prenom').value;
    joueur.sexe = this.ajoutForm.get('sexe').value;
    joueur.age = this.ajoutForm.get('age').value;
    joueur.id_equipe = this.ajoutForm.get('nom_equipe').value;
    joueur.id_tournoi = this.ajoutForm.get('nom_tournoi').value;
    this.joueurService.AddPlayer(joueur).then(
      () => {
        this.ajoutForm.reset();
      }
    );

  }

}
