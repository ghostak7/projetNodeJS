import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})

export class MatchService {

  tempo : any;

  constructor(private http:HttpClient) { }

  GetAllMatchs(){
    return this.http.get<Match[]>('http://localhost:3000/matchs');
  }

  GetMatchById(id: string){
    return new Promise( (resolve,reject) => { 
      this.http.get<Match>('http://localhost:3000/matchs/'+id).subscribe(
          (reponse) => {
              resolve(reponse);
          },
          (error) => {
              reject(error);
          }
      )
   });
  }

  CreateMatch(match: Match){
        
    this.tempo = JSON.parse(JSON.stringify(match));
    console.log("tempo : ");
    console.log(this.tempo);
    match.numero = this.tempo.numero;
    match.id_joueur1 = this.tempo.id_joueur1;
    match.id_joueur2 = this.tempo.id_joueur2;
    match.sets = this.tempo.sets;
    match.gagnant = this.tempo.gagnant;
    match.perdant = this.tempo.perdant;
    console.log("match : ");
    console.log(this.tempo);
    
    return new Promise( (resolve,reject) => {
        this.http.post('http://localhost:3000/matchs',this.tempo).subscribe(
            (response) => {
                resolve(response);
            },
            (error) => {
                reject(error);
            }
        );
    } );
}

DeleteMatch(id: string){
  console.log("delete id : "+id);
  return new Promise( (resolve,reject) => {
      this.http.delete('http://localhost:3000/matchs/'+id).subscribe(
          (response) => {
              resolve(response);
          },
          (error) => {
              reject(error);
          }
      );
  } );
}


UpdateMatch(id :string, match: Match){
  this.tempo = JSON.parse(JSON.stringify(match));
  match.numero = this.tempo.numero;
  match.id_joueur1 = this.tempo.id_joueur1;
  match.id_joueur2 = this.tempo.id_joueur2;
  match.sets = this.tempo.sets;
  match.gagnant = this.tempo.gagnant;
  match.perdant = this.tempo.perdant;

  return new Promise( (resolve,reject) => {
      this.http.put('http://localhost:3000/matchs/'+id,match).subscribe(
          (response) => {
              resolve(response);
          },
          (error) => {
              reject(error);
          }
      );
  });
}




}
