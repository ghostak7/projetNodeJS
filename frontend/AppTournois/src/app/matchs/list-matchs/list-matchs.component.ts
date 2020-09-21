import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/models/match.model';
import { MatchService } from 'src/app/services/match.service';
import { VariablesGlobales } from '../../variableGlobal';

@Component({
  selector: 'app-list-matchs',
  templateUrl: './list-matchs.component.html',
  styleUrls: ['./list-matchs.component.css']
})
export class ListMatchsComponent implements OnInit {

  Matchs = [];

  constructor(private router: Router, private matchService: MatchService, private varGlo: VariablesGlobales) { }

  ngOnInit() {
    this.matchService.GetAllMatchs().subscribe(
      (value) => {
        this.Matchs = value;
      }
    )
  }

  onDetail(match: Match){
    this.varGlo.matchid = match._id;
    this.varGlo.match = match;
    this.router.navigate(['detailMatch',match._id]);
  }

}
