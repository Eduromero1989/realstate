import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { RegistroRoutingModule } from './registro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
