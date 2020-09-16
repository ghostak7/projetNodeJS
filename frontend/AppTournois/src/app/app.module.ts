import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournoisComponent } from './tournois/tournois.component';
import { ListTournoisComponent } from './tournois/list-tournois/list-tournois.component';
import { OptionsTournoisComponent } from './tournois/options-tournois/options-tournois.component';
import { MatchsComponent } from './matchs/matchs.component';
import { JoueursComponent } from './joueurs/joueurs.component';

@NgModule({
  declarations: [
    AppComponent,
    TournoisComponent,
    ListTournoisComponent,
    OptionsTournoisComponent,
    MatchsComponent,
    JoueursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'tournois', component:TournoisComponent },
      { path: 'joueurs', component:JoueursComponent },
      { path: 'matchs', component:MatchsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
