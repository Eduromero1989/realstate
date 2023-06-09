import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent{
  registroForm: FormGroup;
  registroExitoso: boolean = false;
  nombre: string;
  apellido: string;
  identificacion: string;
  correo: string;
  telefono: string;
  direccion: string;
  password: string;
  list_persona: any[] = [];

  constructor(private apiServices: ApiService) {
  }

  validarCampos(): boolean {
    if (
      this.nombre &&
      this.apellido &&
      this.identificacion &&
      this.correo &&
      this.telefono &&
      this.direccion &&
      this.password
    ) {
      return true;
    }
  }
  limpiarDatosIngresados() {
    this.nombre = '';
    this.apellido = '';
    this.identificacion = '';
    this.correo = '';
    this.direccion = '';
    this.telefono = '';
    this.password = '';
    
  }
  Post_usuario(): void {
    if (this.validarCampos()) {
      let datos = {
        "identificacion": this.identificacion,
        "nombre": this.nombre,
        "apellido":this.apellido,
        "telefono": this.telefono,
        "direccion": this.direccion,
        "email": this.correo,
        "password": this.password
      }

      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        //Authorization: Basic <credenciales en base64>;

        this.apiServices.callServices('http://localhost:5235/ServicioPersonas', 'post', datos)
          .subscribe(
            (response) => {
              const confirmacion = window.confirm('Registro Exitoso ¡¡¡');
              console.log(confirmacion);
              console.log('Response ApiService:', response);
              // Hacer algo con la respuesta del servicio
            },
            (error) => {
              console.error('Error ApiService:', error);
              // Manejar el error de la solicitud
            }
          );
          
  }

  /*
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }*/
    }
    this.limpiarDatosIngresados();
  }
}
