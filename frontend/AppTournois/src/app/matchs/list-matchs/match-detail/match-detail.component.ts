import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match.model';
import { MatchService } from 'src/app/services/match.service';
import { VariablesGlobales } from '../../../variableGlobal';


@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

    //route : ActivatedRoute;
    matchModifiy = new Match();
    //toujours initialiser pour faire l'optimisation
    public isModify = false;
    match = new Match();
  
    //test
    matchDetail : Match;
    id:string;
    numero:string;
    id_joueur1:string[];
    id_joueur2:string[];
    sets:string[];
    gagnant:string[];
    perdant:string[]

    
  constructor(
    private route : ActivatedRoute,
    private matchService: MatchService,
    private varGlo: VariablesGlobales,
  ) { }

  ngOnInit(){
    this.matchService.GetMatchById(this.varGlo.matchid).then(
      (result) => {
        //this.matchs = result[0];
        console.log("---------");
        console.log(result);
      
        this.varGlo.match = JSON.parse(JSON.stringify(result));
        this.id = this.varGlo.match[0]._id;
        this.numero = this.varGlo.match[0].numero;
        this.id_joueur1 = this.varGlo.match[0].id_joueur1;
        this.id_joueur2 = this.varGlo.match[0].id_joueur2;
        this.sets = this.varGlo.match[0].sets;
        this.gagnant  = this.varGlo.match[0].gagnant;
        this.perdant = this.varGlo.match[0].perdant;
      }
    );
}


onSubmit(form: NgForm){
    
  if (form.value['numero'] !== "") {
    this.matchModifiy.numero = form.value['numero'];
  }else{
    this.matchModifiy.numero = this.numero
  }
  if (form.value['joueur1'] !== "") {
    this.matchModifiy.id_joueur1 = form.value['joueur1'];
  }else{
    this.matchModifiy.id_joueur1 = this.id_joueur1;
  }
  if (form.value['joueur2'] !== "") {
    this.matchModifiy.id_joueur2 = form.value['joueur2'];
  }else{
    this.matchModifiy.id_joueur2 = this.id_joueur2;
  }
  if (form.value['gagnant'] !== "") {
    this.matchModifiy.gagnant = form.value['gagnant'];
  }else{
    this.matchModifiy.gagnant = this.gagnant;
  }
  if (form.value['perdant'] !== "") {
    this.matchModifiy.perdant = form.value['perdant'];
  }else{
    this.matchModifiy.perdant = this.perdant;
  }
  
  //this.tournoisModifiy._id = this.varGlo.tournoisId;
  this.matchService.UpdateMatch(this.varGlo.matchid,this.matchModifiy);
}

onDelete(id: string){
  console.log("id to delete : "+this.varGlo.matchid);
  this.matchService.DeleteMatch(this.varGlo.matchid);
}

onModifier(){
  this.isModify = true;    
}

}
