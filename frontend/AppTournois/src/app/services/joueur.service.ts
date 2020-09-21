import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Joueur } from '../models/joueur.model';

@Injectable({ providedIn: 'root' })
export class JoueurService{
    temp : any;
    constructor(private http: HttpClient){

    }

    GetAllPlayer(){
        return this.http.get<Joueur[]>('http://localhost:3000/joueurs/');
    }

    GetPlayer(id: string){
        return new Promise( (resolve,reject) => { 
            this.http.get('http://localhost:3000/joueurs/'+id).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            )
         });
    }

    AddPlayer(joueur: Joueur){
        this.temp = JSON.parse(JSON.stringify(joueur));
        console.log("temp : ");
        console.log(this.temp);
        joueur.nom = this.temp.nom;
        joueur.prenom = this.temp.prenom;
        joueur.age = this.temp.age;
        joueur.id_equipe = this.temp.id_equipe;
        joueur.id_tournoi = this.temp.id_tournoi;

        return new Promise( (resolve,reject) => {
            this.http.post('http://localhost:3000/joueurs/',this.temp).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }

    UpdatePlayer(id: string, joueur: Joueur){
        this.temp = JSON.parse(JSON.stringify(joueur));
        console.log("temp : ");
        console.log(this.temp);
        joueur.nom = this.temp.nom;
        joueur.prenom = this.temp.prenom;
        joueur.age = this.temp.age;
        joueur.id_equipe = this.temp.id_equipe;
        joueur.id_tournoi = this.temp.id_tournoi;

        return new Promise( (resolve,reject) => {
            this.http.put('http://localhost:3000/joueurs/'+id,joueur).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    DeletePlayer(id: string){
        return new Promise( (resolve,reject) => {
            this.http.delete('http://localhost:3000/joueurs/'+id).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }
}