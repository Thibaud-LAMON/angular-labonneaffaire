import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';

const routes: Routes = [
  { path: '', component: ListeComponent },
  { path: 'liste', redirectTo: '' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'ajouter', component: AjouterComponent }, // ** : URLs non-prises en charge pour le routeur
  { path: '**', component: PageNotFoundComponent }, // ** : URLs non-prises en charge pour le routeur
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
