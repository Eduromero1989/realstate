import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      //ruta inmueble
      path: 'inmueble',
      loadChildren: () => import('./inmueble/inmueble.module')
      .then(m => m.InmuebleModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
    },
    {
      path: 'registro',
      loadChildren: () => import('./registro/registro.module')
        .then(m => m.RegistroModule)
    },
    {
      path: 'sucursal',
      loadChildren: () => import('./sucursal/sucursal.module')
        .then(m => m.SucursalModule)
    },

    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      //Ruta del modulo de inmueble
      path: 'inmuebles',
      loadChildren: () => import('./inmuebles/inmuebles.module')
      .then(m => m.InmueblesModule)
    },
    {
      //Visitas al inmueble
      path: 'visitas',
      loadChildren:() => import('./visitas/visitas.module')
      .then(m => m.VisitasModule)
    },
    {
      //Visitas al inmueble
      path: 'oferta',
      loadChildren:() => import('./oferta/oferta.module')
      .then(m => m.OfertaModule)
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'estate',
      loadChildren: () => import('./estate/estate.module')
        .then(m => m.EstateModule)
    },
    {
      path: 'branch-office',
      loadChildren: () => import('./branch-office/branch-office.module')
        .then(m => m.BranchOfficeModule)
    },
    {
      path: 'visitas',
      loadChildren: () => import('./visitas/visitas.module')
        .then(m => m.VisitasModule)
    },
    {
      path: 'solicitarvisita',
      loadChildren: () => import('./solicitarvisita/solicitarvisita.module')
        .then(m => m.SolicitarvisitaModule)
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
