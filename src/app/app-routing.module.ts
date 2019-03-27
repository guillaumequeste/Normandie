import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DieppeComponent } from './components/dieppe/dieppe.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { BernevalComponent } from './components/berneval/berneval.component';
import { BellevilleComponent } from './components/belleville/belleville.component';
import { PourvilleComponent } from './components/pourville/pourville.component';
import { SainteMargueriteComponent } from './components/sainte-marguerite/sainte-marguerite.component';
import { LeTreportComponent } from './components/le-treport/le-treport.component';
import { QuibervilleComponent } from './components/quiberville/quiberville.component';
import { SottevilleComponent } from './components/sotteville/sotteville.component';
import { VarengevilleComponent } from './components/varengeville/varengeville.component';
import { CreditsComponent } from './components/credits/credits.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'credits', component: CreditsComponent, data: { animation: 'isRight' } },
  { path: 'belleville', component: BellevilleComponent, data: { animation: 'isRight' } },
  { path: 'berneval', component: BernevalComponent, data: { animation: 'isRight' } },
  { path: 'dieppe', component: DieppeComponent, data: { animation: 'isRight' } },
  { path: 'le_treport', component: LeTreportComponent, data: { animation: 'isRight' } },
  { path: 'pourville', component: PourvilleComponent, data: { animation: 'isRight' } },
  { path: 'quiberville', component: QuibervilleComponent, data: { animation: 'isRight' } },
  { path: 'sainte_marguerite', component: SainteMargueriteComponent, data: { animation: 'isRight' } },
  { path: 'sotteville', component: SottevilleComponent, data: { animation: 'isRight' } },
  { path: 'varengeville', component: VarengevilleComponent, data: { animation: 'isRight' } },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
