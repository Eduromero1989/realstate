import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateInmueblesComponent } from './create-inmuebles/create-inmuebles.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  
} from '@nebular/theme';
import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({

  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    //ngFormsModule,
    CommonModule,
    InmueblesRoutingModule

  ],
  declarations: [
    CreateInmueblesComponent
  ]
})
export class InmueblesModule { }
