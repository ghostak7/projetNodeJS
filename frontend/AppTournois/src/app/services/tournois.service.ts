import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tournois } from '../models/tournois.model'; 

@Injectable({ providedIn: 'root' })
export class TournoisService {

    tempo : any;

    constructor(private http:HttpClient ){}

    GetAllTournois(){
       return this.http.get<Tournois[]>('http://localhost:3000/tournois');
    }

    GetTournoiById(id: string){
        return new Promise( (resolve,reject) => { 
            this.http.get<Tournois>('http://localhost:3000/tournois/'+id).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            )
         });
    }

    CreateTournois(tournois: Tournois){
        
        this.tempo = JSON.parse(JSON.stringify(tournois));
        tournois.nom = this.tempo.nom;
        tournois.lieu = this.tempo.lieu;
        tournois.pays = this.tempo.pays;
        tournois.surface = this.tempo.surface;
        tournois.date_debut = this.tempo.date_debut;
        tournois.date_fin = this.tempo.date_fin;
        
        return new Promise( (resolve,reject) => {
            this.http.post('http://localhost:3000/tournois',this.tempo).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    DeleteTournois(id: string){
        return new Promise( (resolve,reject) => {
            this.http.delete('http://localhost:3000/tournois/'+id).subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }

    UpdateTournois(id :string, tournois: Tournois){
        this.tempo = JSON.parse(JSON.stringify(tournois));
        tournois.nom = this.tempo.nom;
        tournois.lieu = this.tempo.lieu;
        tournois.pays = this.tempo.pays;
        tournois.surface = this.tempo.surface;
        tournois.date_debut = this.tempo.date_debut;
        tournois.date_fin = this.tempo.date_fin;

        return new Promise( (resolve,reject) => {
            this.http.put('http://localhost:3000/tournois/'+id,tournois).subscribe(
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