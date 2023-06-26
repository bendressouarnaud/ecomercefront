import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperviseurRoutingModule } from './superviseur-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientComponent } from './client/client.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOptionModule, NativeDateModule } from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MagasinComponent } from './magasin/magasin.component';
import { LocationComponent } from './location/location.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { CarteComponent } from './carte/carte.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AccueilComponent, ClientComponent, MagasinComponent, LocationComponent, StatistiquesComponent, CarteComponent],
  imports: [
    CommonModule,
    SuperviseurRoutingModule,

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
    AgmCoreModule.forRoot({
      apiKey: `${environment.GoogleApiKey}`
    }),
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class SuperviseurModule { }
