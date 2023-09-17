import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MairieComponent } from './mairie/mairie.component';
import { PoduitsComponent } from './poduits/poduits.component';
import { SouspoduitsComponent } from './souspoduits/souspoduits.component';
import { DetailsousproduitComponent } from './detailsousproduit/detailsousproduit.component';
import { ParametresComponent } from './parametres/parametres.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path:'mairie',
    component: MairieComponent
  },
  {
    path:'produit',
    component: PoduitsComponent
  },
  {
    path:'sousproduits',
    component: SouspoduitsComponent
  },
  {
    path:'detailproduit',
    component: DetailsousproduitComponent
  },
  {
    path:'parametre',
    component: ParametresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
