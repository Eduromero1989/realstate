import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-create-inmuebles',
  templateUrl: './create-inmuebles.component.html',
  styleUrls: ['./create-inmuebles.component.scss']
})

export class CreateInmueblesComponent implements OnInit{
  inmuebleForm: FormGroup;
  ngOnInit() {
    this.get_sucursal();
    this.get_inmueble();
    this.get_persona();
  }  
  constructor(private apiServices: ApiService) { }
  ////quemados
  //id: number = 1;
  idSucursal: number;
  idTipoInmueble: number;
  idPersona: number;
  idEstado: number = 1;
  referencia: string;
  direccion: string;
  superficie: number;
  Venta: number;
  estado: number;
  habitaciones: number;
  banos: number;
  cocina: number;
  alquiler: number;
  gas: boolean ;
  parqueadero: boolean ;
  ventaI: boolean;
  alquilerI: boolean;
  fechaI: Date;
  fechaF: Date;

  ///listas 
  lista_sucursal: any []=[];
  lista_inmueble: any []=[];
  lista_personas: any []=[];

  validarCampos(): boolean {
    if (
      this.direccion &&
      this.superficie &&
      this.Venta &&
      this.estado &&
      this.habitaciones &&
      this.banos &&
      this.cocina &&
      this.alquiler &&
      this.gas &&
      this.parqueadero &&
      this.ventaI &&
      this.alquilerI &&
      this.idSucursal &&
      this.referencia 
    ) {
      return new Date(this.fechaF) >= new Date(this.fechaI);
    }
    return false;
  }

  limpiarDatosIngresados() {
    this.idSucursal = null;
    this.direccion = '';
    this.superficie = null;
    this.Venta = null;
    this.estado = 1;
    this.habitaciones = null;
    this.banos = null;
    this.cocina = null;
    this.alquiler = null;
    this.idTipoInmueble = null;
    this.fechaI = null;
    this.fechaF = null;
    this.idPersona = null;
    this.referencia = '';
  }
  
  Post(): void {
    if (this.validarCampos()) {
      let datos = {
        "idSucursal": this.idSucursal,
        "idTipoInmueble": this.idTipoInmueble,
        "idPersona": this.idPersona,
        "idEstado": this.idEstado,
        "referencia": this.referencia,
        "direccion": this.direccion,
        "superficie": this.superficie,
        "nroHabitaciones": this.habitaciones,
        "nroBanios": this.banos,
        "nroCocinas":this.cocina,
        "tieneGas": this.gas,
        "tieneParqueadero": this.parqueadero,
      }
      let datos_2={
        "idInmueblle": this.idPersona,
        "idEstado": this.estado,
        "fechaInicio":this.fechaI,
        "fechafin":this.fechaF,
        "montoVenta": this.Venta,
        "montoalquiler": this.alquiler,
        "esAlquiler": this.alquilerI,
        "esVenta": this.ventaI,
      }
      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        //Authorization: Basic <credenciales en base64>;
        
        this.apiServices.callServices('http://localhost:5235/ServicioInmuebles','post',datos)
          .subscribe(
            (response) => {
              const confirmacion = window.confirm('Registro Inmueble Exitoso ¡¡¡');
              console.log(confirmacion);
              console.log('Response ApiService:', response);
              // Hacer algo con la respuesta del servicio
            },
            (error) => {
              console.error('Error ApiService:', error);
              // Manejar el error de la solicitud
            }
          );
          this.apiServices.callServices('http://localhost:5235/ServicioOfertas','post',datos_2)
          .subscribe(
            (response) => {
              const confirmacion = window.confirm('Registro Oferta Exitoso ¡¡¡');
              console.log(confirmacion);
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
    this.limpiarDatosIngresados();
  }

  get_sucursal():void{

    this.apiServices.callServices('http://localhost:5235/ServicioSucursales', 'get').subscribe(
      (response) => {
        console.log('Response ApiService: ', response);
        this.lista_sucursal = response.datos;
        console.log(response);
      }
    );

  }
  get_inmueble():void{

    this.apiServices.callServices('http://localhost:5235/ServicioTipoInmuebles', 'get').subscribe(
      (response) => {
        console.log('Response ApiService: ', response);
        this.lista_inmueble = response.datos;
        console.log(response);
      }
    );
    }
    get_persona():void{

      this.apiServices.callServices('http://localhost:5235/ServicioPersonas', 'get').subscribe(
        (response) => {
          console.log('Response ApiService: ', response);
          this.lista_personas = response.datos;
          console.log(response);
        }
      );
  
    }
    
  
}