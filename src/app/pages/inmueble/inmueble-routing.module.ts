import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListacompletaComponent } from './listacompleta/listacompleta.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'listacompleta',
    component: ListacompletaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
