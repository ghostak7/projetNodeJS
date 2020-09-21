import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.model';
import { VariablesGlobales } from '../../variableGlobal';
import { JoueurService } from 'src/app/services/joueur.service';
import { Joueur } from 'src/app/models/joueur.model';

@Component({
  selector: 'app-ajout-matchs',
  templateUrl: './ajout-matchs.component.html',
  styleUrls: ['./ajout-matchs.component.css']
})
export class AjoutMatchsComponent implements OnInit {

  public AjoutForm: FormGroup;
  public errorMessage: string;
  public joueurs: Joueur[] = [];

  constructor(
    private matchService: MatchService,
    private formBuilder: FormBuilder,
    private joueurService: JoueurService,
    private varGlo: VariablesGlobales 
  ) { 
    this.joueurService.GetAllPlayer().subscribe(
      (data) => {
        this.joueurs = data;
      }
    );
  }

  ngOnInit(): void {
    this.AjoutForm = this.formBuilder.group({
      numero: ['', Validators.required],
      id_joueur1: ['', Validators.required],
      id_joueur2: ['', Validators.required],
      // sets: ['', Validators.required],
      gagnant: ['', Validators.required],
      perdant: ['', Validators.required]

    });


  }

  get f () { return this.AjoutForm.controls; }

  onSubmit() {

    if (this.AjoutForm.invalid) {
      return;
    }

    const match = new Match();
    match.numero = this.AjoutForm.get('numero').value;
    match.id_joueur1 = this.AjoutForm.get('id_joueur1').value;
    match.id_joueur2 = this.AjoutForm.get('id_joueur2').value;
    // match.sets = this.AjoutForm.get('sets').value;
    match.gagnant = this.AjoutForm.get('gagnant').value;
    match.perdant = this.AjoutForm.get('perdant').value;

    this.matchService.CreateMatch(match).then(
      () => {
        this.AjoutForm.reset();
        console.log('numero match : '+ match.numero);
        console.log('Fin de la création');
      }
    );

  }

}
