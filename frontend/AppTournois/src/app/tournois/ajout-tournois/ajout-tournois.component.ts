import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournoisService } from '../../services/tournois.service';
import { Tournois } from '../../models/tournois.model';

@Component({
  selector: 'app-ajout-tournois',
  templateUrl: './ajout-tournois.component.html',
  styleUrls: ['./ajout-tournois.component.css']
})
export class AjoutTournoisComponent implements OnInit {

  public AjoutForm: FormGroup;

  constructor( 
    private tournoisService: TournoisService,
    private formBuilder: FormBuilder
   ) { }

  ngOnInit() {
    this.AjoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      pays: ['', Validators.required],
      surface: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required]
    });
  }

  get f () { return this.AjoutForm.controls; }
  onSubmit() {

    if (this.AjoutForm.invalid) {
      return;
    }
    
    const tournoi = new Tournois();
    tournoi.nom = this.AjoutForm.get('nom').value;
    tournoi.lieu = this.AjoutForm.get('lieu').value;
    tournoi.date_debut = this.AjoutForm.get('date_debut').value;
    tournoi.date_fin = this.AjoutForm.get('date_fin').value;
    tournoi.pays = this.AjoutForm.get('pays').value;
    tournoi.surface = this.AjoutForm.get('surface').value;

    this.tournoisService.CreateTournois(tournoi).then(
      () => {
        this.AjoutForm.reset();
      }
    );

   }

}
