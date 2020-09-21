import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariablesGlobales } from 'src/app/variableGlobal';

import { Joueur } from '../../models/joueur.model';
import { JoueurService } from '../../services/joueur.service';

@Component({
  selector: 'app-list-joueur',
  templateUrl: './list-joueur.component.html',
  styleUrls: ['./list-joueur.component.css']
})
export class ListJoueurComponent implements OnInit {

  joueurList = []

  constructor( 
    private router: Router,
    private route: ActivatedRoute , 
    private joueurService: JoueurService, 
     ) { }

  ngOnInit() {
    this.joueurService.GetAllPlayer().subscribe(
      (data) => {
        this.joueurList = data;
      }
    );
  }
 
  onDetail(joueur: Joueur){
    this.router.navigate(['detail-joueur',joueur._id]);
  }

}
