import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilsupComponent } from './accueilsup/accueilsup.component';
import { ActivitecommercialeComponent } from './activitecommerciale/activitecommerciale.component';
import { AddresseComponent } from './addresse/addresse.component';
import { AgendasupComponent } from './agendasup/agendasup.component';
import { ClientsComponent } from './clients/clients.component';
import { ConfigactiviteComponent } from './configactivite/configactivite.component';
import { ConfigequipeComponent } from './configequipe/configequipe.component';
import { ConfigmotifComponent } from './configmotif/configmotif.component';
import { DetailnomenclatureComponent } from './detailnomenclature/detailnomenclature.component';
import { DevisComponent } from './devis/devis.component';
import { EmplacementComponent } from './emplacement/emplacement.component';
import { GestioncommerceComponent } from './gestioncommerce/gestioncommerce.component';
import { GestioncompteComponent } from './gestioncompte/gestioncompte.component';
import { GestionrapportComponent } from './gestionrapport/gestionrapport.component';
import { HistoriqueComponent } from './historique/historique.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PerformanceComponent } from './performance/performance.component';
import { PeriodeComponent } from './periode/periode.component';
import { RdvsupComponent } from './rdvsup/rdvsup.component';
import { ReunionComponent } from './reunion/reunion.component';
import { SanteavantageComponent } from './santeavantage/santeavantage.component';
import { SantefamilleComponent } from './santefamille/santefamille.component';
import { StatdevisattenteComponent } from './statdevisattente/statdevisattente.component';
import { StatdevisequipeComponent } from './statdevisequipe/statdevisequipe.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { GestionmairieComponent } from './gestionmairie/gestionmairie.component';
import { ArticleComponent } from './article/article.component';
import { RetourarticleComponent } from './retourarticle/retourarticle.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CommandeComponent } from './commande/commande.component';
import { LiengrossisteComponent } from './liengrossiste/liengrossiste.component';

const routes: Routes = [
  {
    path: 'comptes',
    component: GestioncompteComponent
  },
  {
    path:'portefeuille',
    component: GestioncommerceComponent
  }
  ,
  {
    path:'rapportcom',
    component: GestionrapportComponent
  } 
  ,
  {
    path:'accueilsup',
    component: AccueilsupComponent
  } ,
  {
    path:'activite',
    component: ConfigactiviteComponent
  },
  {
    path:'rdv',
    component: RdvsupComponent
  },
  {
    path:'agenda',
    component: AgendasupComponent
  },
  {
    path:'reunion',
    component: ReunionComponent
  },
  {
    path:'performance',
    component: PerformanceComponent
  },
  {
    path:'historique',
    component: HistoriqueComponent
  },
  {
    path:'addressmac',
    component: AddresseComponent
  },
  {
    path:'detailequipe',
    component: ConfigequipeComponent
  },
  {
    path:'article',
    component: ArticleComponent
  },
  {
    path:'nomenclature',
    component: NomenclatureComponent
  },
  {
    path:'detailnomenclature',
    component: DetailnomenclatureComponent
  },
  {
    path:'parametre',
    component: ParametresComponent
  },
  {
    path:'devis',
    component: DevisComponent
  },
  {
    path:'devisequipe',
    component: StatdevisequipeComponent
  },
  {
    path:'statsdevisequipe',
    component: StatdevisattenteComponent
  },
  {
    path:'actcommerciale',
    component: ActivitecommercialeComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  { path: 'userdetails/:contact', component: UserdetailsComponent },
  {
    path: 'santefamille/:idsan',
    component: SantefamilleComponent
  },
  {
    path: 'santeavantage/:idsan',
    component: SanteavantageComponent
  },
  {
    path:'emplacement',
    component: EmplacementComponent
  },
  {
    path:'periode',
    component: PeriodeComponent
  },
  {
    path:'gestionmairie',
    component: GestionmairieComponent
  },
  {
    path:'delairetour',
    component: RetourarticleComponent
  },
  {
    path:'promotion',
    component: PromotionComponent
  },
  {
    path:'commande',
    component: CommandeComponent
  },
  {
    path:'liengrossiste',
    component: LiengrossisteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule { }
