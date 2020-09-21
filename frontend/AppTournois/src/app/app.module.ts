import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournoisComponent } from './tournois/tournois.component';
import { ListTournoisComponent } from './tournois/list-tournois/list-tournois.component';
import { MatchsComponent } from './matchs/matchs.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AfficheDetailComponent } from './tournois/list-tournois/affiche-detail/affiche-detail.component';

import { VariablesGlobales } from './variableGlobal';
import { AjoutTournoisComponent } from './tournois/ajout-tournois/ajout-tournois.component';
import { ListJoueurComponent } from './joueurs/list-joueur/list-joueur.component';
import { AjoutJoueurComponent } from './joueurs/ajout-joueur/ajout-joueur.component';
import { AfficheDetailJoueurComponent } from './joueurs/list-joueur/affiche-detail-joueur/affiche-detail-joueur.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { AjoutEquipeComponent } from './equipe/ajout-equipe/ajout-equipe.component';
import { DetailEquipeComponent } from './equipe/list-equipe/detail-equipe/detail-equipe.component';
import { AjoutMatchsComponent } from './matchs/ajout-matchs/ajout-matchs.component';
import { ListMatchsComponent } from './matchs/list-matchs/list-matchs.component';
import { MatchDetailComponent } from './matchs/list-matchs/match-detail/match-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TournoisComponent,
    ListTournoisComponent,
    MatchsComponent,
    JoueursComponent,
    AfficheDetailComponent,
    AjoutTournoisComponent,
    ListJoueurComponent,
    AjoutJoueurComponent,
    AfficheDetailJoueurComponent,
    EquipeComponent,
    ListEquipeComponent,
    AjoutEquipeComponent,
    DetailEquipeComponent,
    AjoutMatchsComponent,
    ListMatchsComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'tournois', component:TournoisComponent },
      { path: 'joueurs', component:JoueursComponent },
      { path: 'matchs', component:MatchsComponent },
      { path: 'equipes', component:EquipeComponent },
      { path: 'details/:id', component:AfficheDetailComponent},
      { path: 'detail-joueur/:id', component:AfficheDetailJoueurComponent },
      { path: 'detail-equipe/:id', component:DetailEquipeComponent },
      { path: 'detailMatch/:id', component:MatchDetailComponent},
      { path: 'detailTournoi/:id', component:AfficheDetailComponent}
    ])
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
