import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DieppeComponent } from './components/dieppe/dieppe.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { HeaderComponent } from './components/header/header.component';
import { BernevalComponent } from './components/berneval/berneval.component';

@NgModule({
  declarations: [
    AppComponent,
    DieppeComponent,
    AccueilComponent,
    ErreurComponent,
    HeaderComponent,
    BernevalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
