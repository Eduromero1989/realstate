import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'ngx-listacompleta',
  templateUrl: './listacompleta.component.html',
  styleUrls: ['./listacompleta.component.scss']
})
export class ListacompletaComponent {
  headers: string[] = ['ID', 'Sucursal', 'Tipo', 'Estado', 'Referencia', 'Dirección', 'Superficie', 'Habitaciones', 'Baños', 'Cocina', 'Tiene Gas', 'Tiene Parqueadero'];

  lista: any[] = [];


  constructor(private apiServices: ApiService) { }
  
  ngOnInit(): void {

    this.apiServices.callServices('http://localhost:5235/ServicioInmuebles', 'get').subscribe(
      (response) => {
        console.log('Response ApiService: ', response);
        this.lista = response.datos;
      }
    );

  }

}
