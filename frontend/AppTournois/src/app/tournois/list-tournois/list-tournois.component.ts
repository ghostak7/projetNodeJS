import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TournoisService } from '../../services/tournois.service';
import { Tournois } from '../../models/tournois.model';
import { VariablesGlobales } from '../../variableGlobal';

@Component({
  selector: 'app-list-tournois',
  templateUrl: './list-tournois.component.html',
  styleUrls: ['./list-tournois.component.css']
})
export class ListTournoisComponent implements OnInit {

  Tournois = [];
  constructor(
    private router: Router, 
    private tournoisService: TournoisService,
    private varGlo: VariablesGlobales
     ) { }

  ngOnInit() {
    this.tournoisService.GetAllTournois().subscribe(
      (value) => {
                    this.Tournois = value;
                  }
    );
  }

  onDetail(tournois:Tournois){
    
    this.varGlo.tournoisId = tournois._id;
    this.varGlo.tournoi = tournois;
    this.router.navigate(['detailTournoi',tournois._id]);
  }

}
