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
import { QuibervilleComponent } from './components/quiberville/quiberville.component';
import { SottevilleComponent } from './components/sotteville/sotteville.component';
import { VarengevilleComponent } from './components/varengeville/varengeville.component';
import { CreditsComponent } from './components/credits/credits.component';
import { VeulesComponent } from './components/veules/veules.component';
import { PuysComponent } from './components/puys/puys.component';
import { CrielComponent } from './components/criel/criel.component';
import { MesnilValComponent } from './components/mesnil-val/mesnil-val.component';
import { SaintAubinComponent } from './components/saint-aubin/saint-aubin.component';
import { SaintValeryComponent } from './components/saint-valery/saint-valery.component';
import { MersComponent } from './components/mers/mers.component';
import { AultComponent } from './components/ault/ault.component';
import { YportComponent } from './components/yport/yport.component';

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
    LeTreportComponent,
    QuibervilleComponent,
    SottevilleComponent,
    VarengevilleComponent,
    CreditsComponent,
    VeulesComponent,
    PuysComponent,
    CrielComponent,
    MesnilValComponent,
    SaintAubinComponent,
    SaintValeryComponent,
    MersComponent,
    AultComponent,
    YportComponent
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
