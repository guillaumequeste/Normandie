import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DieppeComponent } from './components/dieppe/dieppe.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { BernevalComponent } from './components/berneval/berneval.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'dieppe', component: DieppeComponent },
  { path: 'berneval', component: BernevalComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
