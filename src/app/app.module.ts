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
import { BellevilleComponent } from './components/belleville/belleville.component';
import { PourvilleComponent } from './components/pourville/pourville.component';
import { SainteMargueriteComponent } from './components/sainte-marguerite/sainte-marguerite.component';
import { LeTreportComponent } from './components/le-treport/le-treport.component';

@NgModule({
  declarations: [
    AppComponent,
    DieppeComponent,
    AccueilComponent,
    ErreurComponent,
    HeaderComponent,
    BernevalComponent,
    BellevilleComponent,
    PourvilleComponent,
    SainteMargueriteComponent,
    LeTreportComponent
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
