import { Injectable } from '@angular/core';
import { Joueur } from './models/joueur.model';
import { Tournois } from './models/tournois.model';

@Injectable()
export class VariablesGlobales {
  tournoisId: string ;
  tournoi: any;
  tournoiModify: Tournois;
  
  matchid: string;
  match: any;
  
  joueurId: string;
  joueur: any;
}