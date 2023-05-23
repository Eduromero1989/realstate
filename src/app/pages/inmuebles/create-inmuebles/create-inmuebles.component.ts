import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create-inmuebles',
  templateUrl: './create-inmuebles.component.html',
  styleUrls: ['./create-inmuebles.component.scss']
})
export class CreateInmueblesComponent {

  constructor() { }
  /*
  implements OnInit 
  ngOnInit(): void {
  }
  */
  direccion: string;
  superficie: number;
  Venta: number;
  estado: string;
  habitaciones: number;
  banos: number;
  cocina: number;
  alquiler: boolean;
  gas: boolean;
  parqueadero: boolean;
  ventaI:boolean;
  alquilerI: boolean;
  fechaI: Date;
  fechaF: Date;

  capturarDatos() {
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
    
  }

}
