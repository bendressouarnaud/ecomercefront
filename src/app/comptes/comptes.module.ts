import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { GestioncompteComponent } from './gestioncompte/gestioncompte.component';
import { MaterialModule } from '../app.module';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOptionModule, NativeDateModule } from '@angular/material/core';
import { GestioncommerceComponent } from './gestioncommerce/gestioncommerce.component';
import { GestionrapportComponent } from './gestionrapport/gestionrapport.component';
import { AccueilsupComponent } from './accueilsup/accueilsup.component';
import { ConfigactiviteComponent } from './configactivite/configactivite.component';
import { RdvsupComponent } from './rdvsup/rdvsup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AgendasupComponent } from './agendasup/agendasup.component';
import { ReunionComponent } from './reunion/reunion.component';
import { PerformanceComponent } from './performance/performance.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AddresseComponent } from './addresse/addresse.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ConfigequipeComponent } from './configequipe/configequipe.component';
import { ConfigmotifComponent } from './configmotif/configmotif.component';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';
import { DetailnomenclatureComponent } from './detailnomenclature/detailnomenclature.component';
import { ParametresComponent } from './parametres/parametres.component';
import { DevisComponent } from './devis/devis.component';
import { StatdevisequipeComponent } from './statdevisequipe/statdevisequipe.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { StatdevisattenteComponent } from './statdevisattente/statdevisattente.component';
import { ActivitecommercialeComponent } from './activitecommerciale/activitecommerciale.component';
import { ClientsComponent } from './clients/clients.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SantefamilleComponent } from './santefamille/santefamille.component';
import { SanteavantageComponent } from './santeavantage/santeavantage.component';
import { EmplacementComponent } from './emplacement/emplacement.component';
import { PeriodeComponent } from './periode/periode.component';
import { GestionmairieComponent } from './gestionmairie/gestionmairie.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';
import { RetourarticleComponent } from './retourarticle/retourarticle.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CommandeComponent } from './commande/commande.component';
import { LiengrossisteComponent } from './liengrossiste/liengrossiste.component';


@NgModule({
  declarations: [GestioncompteComponent, GestioncommerceComponent, GestionrapportComponent, AccueilsupComponent, ConfigactiviteComponent, RdvsupComponent, AgendasupComponent, ReunionComponent, PerformanceComponent, HistoriqueComponent, AddresseComponent, ConfigequipeComponent, ConfigmotifComponent, NomenclatureComponent, DetailnomenclatureComponent, ParametresComponent, DevisComponent, StatdevisequipeComponent, StatdevisattenteComponent, ActivitecommercialeComponent, ClientsComponent, UserdetailsComponent, SantefamilleComponent, SanteavantageComponent, EmplacementComponent, PeriodeComponent, GestionmairieComponent, ArticleComponent, DetailComponent, RetourarticleComponent, PromotionComponent, CommandeComponent, LiengrossisteComponent],
  imports: [
    CommonModule,
    ComptesRoutingModule,

    MatRadioModule,
    MatCheckboxModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatDatepickerModule,   
    NativeDateModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class ComptesModule { }
