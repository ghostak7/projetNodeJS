import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';
import { equipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  public equipe: Equipe[];

  constructor(
    private equipeService: equipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.equipeService.GetAllEquipe().subscribe(
      (data) => {
        this.equipe = data;
      }
    );
  }

  onDetail(equipe:Equipe){
    this.router.navigate(['detail-equipe',equipe._id]); 
  }

}
 