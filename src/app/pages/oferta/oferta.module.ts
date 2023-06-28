import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { ListOfertaComponent } from './list-oferta/list-oferta.component';


@NgModule({
  declarations: [
    ListOfertaComponent
  ],
  imports: [
    CommonModule,
    OfertaRoutingModule
  ]
})
export class OfertaModule { }
