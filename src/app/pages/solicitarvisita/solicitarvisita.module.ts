import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';

import { SolicitarvisitaRoutingModule } from './solicitarvisita-routing.module';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SolicitarComponent
  ],
  imports: [
    CommonModule,
    SolicitarvisitaRoutingModule,
    ngFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SolicitarvisitaModule { 

}
