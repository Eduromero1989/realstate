import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSucursalComponent } from './create-sucursal/create-sucursal.component';


const routes: Routes = [

  {
    path :'create-sucursal',
    component : CreateSucursalComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
