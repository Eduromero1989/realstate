import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent{

  constructor(private apiServices: ApiService) { }
  idSucursal : number;
  idEstado: number = 1;
  nombre:string;
  direccion :string;
  telefono:string;
  limpiarDatosIngresados() {
    this.nombre = '';
    this.direccion = '';
    this.telefono = '';
    this.idEstado = 1;
  
    
  }

  validarCampos(): boolean {
    if (
      this.idSucursal &&
      this.nombre &&
      this.telefono &&
      this.direccion &&
      this.idEstado
    ) {
      return true;
    }
  }
  Post_sucursal(): void {
    if (this.validarCampos()) {
      let datos = {
        "id":this.idSucursal,
        "idEstado": this.idEstado,
        "nombre": this.nombre,
        "direccion": this.direccion,
        "telefono": this.telefono,
      }

      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        //Authorization: Basic <credenciales en base64>;

        this.apiServices.callServices('http://localhost:5235/ServicioSucursales','post', datos)
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
      }
      this.limpiarDatosIngresados();
    }

}
