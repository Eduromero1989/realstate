import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  headers: string[] = ['ID REGISTRO','ID INMUEBLE','FECHA DISPONIBILIDAD','ACCIONES'];

  lista_inumeble_activo: any[] = [];

  constructor(private apiServices: ApiService, private router : Router) {}
  ngOnInit(): void {

    this.apiServices.callServices('http://localhost:5235/ServicioOfertas', 'get').subscribe(
      (response) => {
        console.log('Response ApiService: ', response);
        this.lista_inumeble_activo = response.datos;
      }
    );

  }

  editar(item){
    this.apiServices.inmuebleseleccionado = JSON.parse(JSON.stringify(item));
    this.router.navigate(['/pages/inmueble/listacompleta']);
  }

}
