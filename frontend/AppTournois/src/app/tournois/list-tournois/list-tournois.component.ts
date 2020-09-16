import { Component, OnInit } from '@angular/core';

import { TournoisService } from '../../services/tournois.service';
import { Tournois } from '../../models/tournois.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-tournois',
  templateUrl: './list-tournois.component.html',
  styleUrls: ['./list-tournois.component.css']
})
export class ListTournoisComponent implements OnInit {

  Tournois = [];
  

  constructor( private _tournoisService: TournoisService) { }

  ngOnInit() {
    this._tournoisService.GetlistTournois().subscribe(
      (value) => {
                    this.Tournois = value;
                    console.log(value)
                  }
    );
  }

}
