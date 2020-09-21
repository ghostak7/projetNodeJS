import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournois } from 'src/app/models/tournois.model';

import { TournoisService } from '../../../services/tournois.service';
import { VariablesGlobales } from '../../../variableGlobal';

@Component({
  selector: 'app-affiche-detail',
  templateUrl: './affiche-detail.component.html',
  styleUrls: ['./affiche-detail.component.css']
})
export class AfficheDetailComponent implements OnInit {

  public tournoisModifiy = new Tournois();
  public isModify = false;
  public tournois = new Tournois();

  constructor(
    private route : ActivatedRoute,
    private tournoisService: TournoisService,
    private router: Router
    ) {

    }
    
    ngOnInit(){
          this.tournoisService.GetTournoiById(this.route.snapshot.paramMap.get('id')).then(
            (result) => {
              this.tournois = result[0];
            }
          );
  }

  onSubmit(form: NgForm){
    
    if (form.value['nom'] !== "") {
      this.tournoisModifiy.nom = form.value['nom'];
    }else{
      this.tournoisModifiy.nom = this.tournois.nom;
    }
    if (form.value['lieu'] !== "") {
      this.tournoisModifiy.lieu = form.value['lieu'];
    }else{
      this.tournoisModifiy.lieu = this.tournois.lieu;
    }
    if (form.value['pays'] !== "") {
      this.tournoisModifiy.pays = form.value['pays'];
    }else{
      this.tournoisModifiy.pays = this.tournois.pays;
    }
    if (form.value['surface'] !== "") {
      this.tournoisModifiy.surface = form.value['surface'];
    }else{
      this.tournoisModifiy.surface = this.tournois.surface;
    }
    if (form.value['date_debut'] !== "") {
      this.tournoisModifiy.date_debut = form.value['date_debut'];
    }else{
      this.tournoisModifiy.date_debut = this.tournois.date_debut;
    }
    if (form.value['date_fin'] !== "") {
      this.tournoisModifiy.date_fin = form.value['date_fin'];
    }else{
      this.tournoisModifiy.date_fin = this.tournois.date_fin;
    }
    
    this.tournoisService.UpdateTournois(this.route.snapshot.paramMap.get('id'),this.tournoisModifiy);
    this.router.navigate(['tournois']);
  }
  onDelete(){
    this.tournoisService.DeleteTournois(this.route.snapshot.paramMap.get('id'));
  }

  onCancel(){
    this.router.navigate(['tournois']);
  }

  onModifier(){
    this.isModify = true;    
  }
}
