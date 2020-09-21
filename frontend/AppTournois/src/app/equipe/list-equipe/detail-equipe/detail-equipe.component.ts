import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Equipe } from 'src/app/models/equipe.model';
import { Joueur } from 'src/app/models/joueur.model';
import { Tournois } from 'src/app/models/tournois.model';
import { equipeService } from 'src/app/services/equipe.service';
import { JoueurService } from 'src/app/services/joueur.service';
import { TournoisService } from 'src/app/services/tournois.service';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {

  public isModify = false;
  public equipe = new Equipe();
  public equipeModify = new Equipe();
  public joueurs: Joueur[];
  public tournois: Tournois[];

  constructor(
    private equipeService: equipeService,
    private joueurService: JoueurService,
    private tournoisService: TournoisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.equipeService.GetEquipeById(this.route.snapshot.paramMap.get('id')).then(
      (result) => {
        this.equipe = result[0];
      }
    );
  }

  onSubmit(form: NgForm){
    
    if (form.value['nom'] !== "") {
      this.equipeModify.nom = form.value['nom'];
    }else{
      this.equipeModify.nom = this.equipe.nom;
    }
    if (form.value['joueurs'] !== "") {
      this.equipeModify.id_joueurs = form.value['joueurs'];
    }else{
      this.equipeModify.id_joueurs = this.equipe.id_joueurs;
    }
    if (form.value['joueurs2'] !== "") {
      this.equipeModify.id_joueur2 = form.value['joueurs2'];
    } else {
      this.equipeModify.id_joueur2 = this.equipe.id_joueur2;
    }
    if (form.value['tournoi'] !== "") {
      this.equipeModify.id_tournoi = form.value['tournoi'];
    }else{
      this.equipeModify.id_tournoi = this.equipe.id_tournoi;
    }
    
    this.equipeService.UpdateEquipe(this.route.snapshot.paramMap.get('id'),this.equipeModify);
    this.router.navigate(['equipes']);
  }
  onDelete(){
    this.equipeService.DeleteEquipe(this.route.snapshot.paramMap.get('id'));
  }
  onCancel(){
    this.router.navigate(['equipes']);
  }

  onModifier(){
    this.isModify = true;   
    this.joueurService.GetAllPlayer().subscribe(
      (data) => {
        this.joueurs = data;
      }
    );
    this.tournoisService.GetAllTournois().subscribe(
      (data) => {
        this.tournois = data;
      }
    ); 
  }

}
