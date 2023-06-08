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

export class CreateInmueblesComponent {
  
  constructor() { }
  
  /*
  implements OnInit 
  ngOnInit(): void {

  }
  constructor(private apiServices: ApiService) { }
  ////quemados
  id: number = 1;
  idSucursal: number;
  idTipoInmueble: number = 1;
  idPersona: number = 1;
  idEstado: number = 1;
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
  alquiler: number;
  gas: boolean;
  parqueadero: boolean;
  ventaI: boolean;
  alquilerI: boolean;
  fechaI: Date;
  fechaF: Date;

  ///listas 
  lista_sucursal: any []=[];
  lista_inmueble: any []=[];
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
      this.idSucursal &&
      this.referencia
    ) {
      return new Date(this.fechaF) >= new Date(this.fechaI);
    }
    return false;
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
        "tieneGas": true,
        "tieneParqueadero": true,
      }
      let datos_2={
        "idInmueblle": this.id,
        "idEstado": this.estado,
        "fechaInicio":this.fechaI,
        "fechafin":this.fechaF,
        "montoVenta": this.Venta,
        "montoalquiler": this.alquiler,
        "esAlquiler": true,
        "esVenta": true,
      }
      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        //Authorization: Basic <credenciales en base64>;
        
        this.apiServices.callServices('http://localhost:5235/ServicioInmuebles','post',datos)
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
          this.apiServices.callServices('http://localhost:5235/ServicioOfertas','post',datos_2)
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

  

  
  validarCampos(): boolean {
      if(
      this.direccion &&
      this.superficie &&
      this.Venta &&
      this.habitaciones &&
      this.banos &&
      this.cocina &&
      this.alquiler &&
      this.gas &&
      this.parqueadero &&
      this.ventaI &&
      this.alquilerI
      ){
        return new Date(this.fechaF) >= new Date(this.fechaI);
      }
      return false;
  }
  
  capturarDatos(): void {
    if(this.validarCampos()){
    const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
    if(confirmacion){
    console.log('Direccion:', this.direccion);
    console.log('Superficie:', this.superficie);
    console.log('Valor Venta:', this.Venta);
    console.log('estado:', this.estado);
    console.log('Habitaciones:', this.habitaciones);
    console.log('Baños:', this.banos);
    console.log('Cocinas:', this.cocina);
    console.log('En alquiler:', this.alquiler);
    console.log('gas:', this.gas);
    console.log('Parqueadero:', this.parqueadero);
    console.log('En venta:', this.ventaI);
    console.log('En alquiler:', this.alquilerI);
    console.log('fecha Inicio:', this.fechaI);
    console.log('fecha Fi :', this.fechaF);
    window.alert('¡Registro exitoso!');
    }else{

      window.alert('¡Registro Imcompleto!');
    }
  }
  }
  


  }
  
}