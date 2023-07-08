import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, NativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MairieComponent } from './mairie/mairie.component';
import { PoduitsComponent } from './poduits/poduits.component';
import { SouspoduitsComponent } from './souspoduits/souspoduits.component';
import { DetailsousproduitComponent } from './detailsousproduit/detailsousproduit.component';


@NgModule({
  declarations: [AccueilComponent, MairieComponent, PoduitsComponent, SouspoduitsComponent, DetailsousproduitComponent],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
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
export class SuperadminModule { }
