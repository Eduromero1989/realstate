import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInmueblesComponent } from './create-inmuebles/create-inmuebles.component';

const routes: Routes = [

  {
    path:'create-inmuebles',
    component: CreateInmueblesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmueblesRoutingModule { }
