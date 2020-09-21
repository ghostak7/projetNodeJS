import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from 'src/app/models/joueur.model';
import { JoueurService } from 'src/app/services/joueur.service';
import { VariablesGlobales } from 'src/app/variableGlobal';

@Component({
  selector: 'app-affiche-detail-joueur',
  templateUrl: './affiche-detail-joueur.component.html',
  styleUrls: ['./affiche-detail-joueur.component.css']
})
export class AfficheDetailJoueurComponent implements OnInit {

  public isModify = false;
  public joueur= new Joueur();
  public joueurModify = new Joueur();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private joueurService: JoueurService, 
    private varGlo: VariablesGlobales
    ) { }

  ngOnInit() {
    
    this.joueurService.GetPlayer(this.route.snapshot.paramMap.get('id')).then(
      (data) => {
        this.joueur = data[0];
      }
    );
  }
  onSubmit(form: NgForm){
    if (form.value['nom'] !== "") {
      this.joueurModify.nom = form.value['nom'];
    }else{
      this.joueurModify.nom = this.joueur.nom;
    }
    if (form.value['prenom'] !== "") {
      this.joueurModify.prenom = form.value['prenom'];
    }else{
      this.joueurModify.prenom = this.joueur.prenom;
    }
    if (form.value['sexe'] !== "") {
      this.joueurModify.sexe = form.value['sexe'];
    }else{
      this.joueurModify.sexe = this.joueur.sexe;
    }
    if (form.value['age'] !== "") {
      this.joueurModify.age = form.value['age'];
    }else{
      this.joueurModify.age = this.joueur.age;
    }
    if (form.value['nom_tournoi'] !== "") {
      this.joueurModify.id_tournoi = form.value['nom_tournoi'];
    }else{
      this.joueurModify.id_tournoi = this.joueur.id_tournoi;
    }
    if (form.value['nom_equipe'] !== "") {
      this.joueurModify.id_equipe = form.value['nom_equipe'];
    } else {
      this.joueurModify.id_equipe = this.joueur.id_equipe;
    }

    this.joueurService.UpdatePlayer(this.route.snapshot.paramMap.get('id'), this.joueurModify);
    this.router.navigate(['joueurs']);
  }

  onDelete(id: string){
    this.joueurService.DeletePlayer(this.route.snapshot.paramMap.get('id'));
  }
  onCancel(){
    this.router.navigate(['joueurs']);
  }

  onModifier(){
    this.isModify = true;    
  }

}
 