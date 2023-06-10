import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarComponent } from './solicitar/solicitar.component';

const routes: Routes = [{ 
  path: 'solicitar', 
  component: SolicitarComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitarvisitaRoutingModule { }
