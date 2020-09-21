import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipe } from '../models/equipe.model';



@Injectable({ providedIn: 'root' })
export class equipeService{

    temp: any;

    constructor(private http:HttpClient ){}

    GetAllEquipe(){
        return this.http.get<Equipe[]>('http://localhost:3000/equipes/');
    }

    GetEquipeById(id: string){
        return new Promise( (resolve,reject) => {
            this.http.get<Equipe>('http://localhost:3000/equipes/'+id).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }

    CreateEquipe(equipe: Equipe){

        this.temp = JSON.parse(JSON.stringify(equipe));
        equipe.nom = this.temp.nom;
        equipe.id_joueurs = this.temp.id_joueurs;
        equipe.id_tournoi = this.temp.id_tournoi;

        return new Promise( (resolve,reject) => {
            this.http.post('http://localhost:3000/equipes/',this.temp).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }

    UpdateEquipe(id: string, equipe: Equipe){
        this.temp = JSON.parse(JSON.stringify(equipe));
        equipe.nom = this.temp.nom;
        equipe.id_joueurs = this.temp.id_joueurs;
        equipe.id_tournoi = this.temp.id_tournoi;

        return new Promise( (resolve,reject) => {
            this.http.put('http://localhost:3000/equipes/'+id,this.temp).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            );
        } );
    }

    DeleteEquipe(id: string){
        return new Promise( (resolve,reject) => {
            this.http.delete('http://localhost:3000/equipes/'+id).subscribe(
                (reponse) => {
                    resolve(reponse);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
}