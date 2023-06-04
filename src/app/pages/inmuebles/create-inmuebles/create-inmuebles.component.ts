import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-create-inmuebles',
  templateUrl: './create-inmuebles.component.html',
  styleUrls: ['./create-inmuebles.component.scss']
})
export class CreateInmueblesComponent implements OnInit {
  inmuebleForm: FormGroup;

  constructor(
    private apiServices: ApiService
  ) { }

  sucursal : string;
  referencia: string;
  direccion: string;
  superficie: number;
  Venta: number;
  estado: string;
  tipo: string;
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


  ngOnInit(): void {
    
  }

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
    return false;
  }

  Post(): void {
    if (this.validarCampos()) {
      const confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');
      if (confirmacion) {
        const username = 'edulds1989@gmail.com';
        const password = '1234';

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(username + ':' + password)
        });

        const httpOptions = {
          headers: headers
        };


        this.apiServices
          .callServices(
            'http://localhost:5235/ServicioInmuebles',
            'post',
            httpOptions
          )
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