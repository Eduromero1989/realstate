import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualVisitaComponent } from './actual-visita/actual-visita.component';

const routes: Routes = [{
    path: 'actual-visita',
    component: ActualVisitaComponent,
    children: []
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisitasRoutingModule { }