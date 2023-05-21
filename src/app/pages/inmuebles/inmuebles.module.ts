import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { CreateInmueblesComponent } from './create-inmuebles/create-inmuebles.component';


@NgModule({
  declarations: [
    CreateInmueblesComponent
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule
  ]
})
export class InmueblesModule { }
