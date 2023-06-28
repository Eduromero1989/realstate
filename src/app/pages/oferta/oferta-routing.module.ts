import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfertaComponent } from './list-oferta/list-oferta.component';

const routes: Routes = [

  {
    path:'list-oferta',
    component: ListOfertaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaRoutingModule { }
