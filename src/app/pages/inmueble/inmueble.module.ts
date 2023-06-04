import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { ListComponent } from './list/list.component';
import { ListacompletaComponent } from './listacompleta/listacompleta.component';

@NgModule({
  declarations: [
    ListComponent,
    ListacompletaComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule
  ]
})
export class InmuebleModule { }
