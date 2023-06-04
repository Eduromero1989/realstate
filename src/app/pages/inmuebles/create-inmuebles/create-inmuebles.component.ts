import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-create-inmuebles',
  templateUrl: './create-inmuebles.component.html',
  styleUrls: ['./create-inmuebles.component.scss']
})
export class CreateInmueblesComponent{
  inmuebleForm: FormGroup;

  constructor(private apiServices: ApiService) { }

  sucursal: number;
  referencia: string;
  direccion: string;
  superficie: number;
  Venta: number;
  estado: number;
  tipo: number;
  habitaciones: number;
  banos: number;
  cocina: number;
  alquiler: boolean;
  gas: boolean;
  parqueadero: boolean;
  ventaI: boolean;
  alquilerI: boolean;
  fechaI: Date;
  fechaF: Date;
  opciones_sucursal: any[] = [];
  seleccion: any;

  /////
  seleccion_sucursal: string;
  
 /* ngOnInit(): void {

    this.obtenerDatos();
  }*/

  /**
   * The function "obtenerDatos" retrieves data from an API service and assigns it to the
   * "opciones_sucursal" variable.
   */
  /*obtenerDatos() {
    this.apiServices.obtenerDatos().subscribe((data: any[]) => {
      this.opciones_sucursal = data;
    });
  }*/


  validarCampos(): boolean {
    if (
      this.direccion &&
      this.superficie &&
      this.Venta &&
      this.estado &&
      this.tipo &&
      this.habitaciones &&
      this.banos &&
      this.cocina &&
      this.alquiler &&
      this.gas &&
      this.parqueadero &&
      this.ventaI &&
      this.alquilerI &&
      this.sucursal &&
      this.referencia
    ) {
      return new Date(this.fechaF) >= new Date(this.fechaI);
    }
    return false;
  }

  GetSucursal():void{
    let datos = {
      "nombre": this.seleccion_sucursal,
    }
    this.apiServices
    .callServices('http://localhost:5235/ServicioSucursales', 'get',datos)
    .subscribe(
      (response) => {
        console.log('Response ApiService:', response);
        // Hacer algo con la respuesta del servicio
      },
      (error) => {
        console.error('Error ApiService:', error);
        // Manejar el error de la solicitud
      }
    );

  }

  Post(): void {
    if (this.validarCampos()) {
      let datos = {
        "id": 1,
        "idSucursal": 1,
        "idTipoInmueble": 1,
        "idPersona": 1,
        "idEstado": 1,
        "referencia": this.referencia,
        "direccion": this.direccion,
        "superficie": this.superficie,
        "nroHabitaciones": this.habitaciones,
        "nroBanios": this.banos,
        "nroCocinas":this.cocina,
        "tieneGas": true,
        "tieneParqueadero": true,
      }
      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        //Authorization: Basic <credenciales en base64>;
        
        this.apiServices
          .callServices('http://localhost:5235/ServicioInmuebles', 'post',datos)
          .subscribe(
            (response) => {
              console.log('Response ApiService:', response);
              // Hacer algo con la respuesta del servicio
            },
            (error) => {
              console.error('Error ApiService:', error);
              // Manejar el error de la solicitud
            }
          );
      } else {
        window.alert('¡Registro Incompleto!');
      }
    }
  }
}