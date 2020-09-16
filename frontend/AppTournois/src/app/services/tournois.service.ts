import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tournois } from '../models/tournois.model'; 


@Injectable({ providedIn: 'root' })
export class TournoisService {

    // tournois:Tournois[] = [ 
    //     {
    //         nom:'aaa',
    //         lieu:'aze',
    //         date_debut: new Date('00/00/0000'),
    //         date_fin: new Date('00/00/0000')
    //     },
    //     {
    //         nom:'abc',
    //         lieu:'rty',
    //         date_debut: new Date('00/00/0000'),
    //         date_fin: new Date('00/00/0000')
    //     },
    //     {
    //         nom:'cde',
    //         lieu:'uio',
    //         date_debut: new Date('00/00/0000'),
    //         date_fin: new Date('00/00/0000')
    //     }
    // ] ;

    constructor(private http:HttpClient ){

    }

    GetlistTournois(){
       return this.http.get<Tournois[]>('http://localhost:3000/tournois');
    }

    // CreateTournois(){

    // }
}