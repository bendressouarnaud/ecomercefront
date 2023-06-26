import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from '../superviseur/accueil/accueil.component';
import { ClientComponent } from '../superviseur/client/client.component';
import { LocationComponent } from './location/location.component';
import { MagasinComponent } from './magasin/magasin.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { CarteComponent } from './carte/carte.component';

const routes: Routes = [
  {
    path: 'accueilman',
    component: AccueilComponent
  },
  {
    path:'clientman',
    component: ClientComponent
  },
  {
    path:'magasin',
    component: MagasinComponent
  },
  {
    path:'location',
    component: LocationComponent
  },
  {
    path:'stats',
    component: StatistiquesComponent
  },
  {
    path:'carte/:idmag',
    component: CarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperviseurRoutingModule { }
