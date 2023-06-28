import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list-oferta',
  templateUrl: './list-oferta.component.html',
  styleUrls: ['./list-oferta.component.scss']
})
export class ListOfertaComponent implements OnInit {

  headers: string[] = ['ID', 'ID Inmueble', 'Estado', 'Feche Incio', 'Fecha Fin', 'Valor Oferta', 'OfertaVenta'];

  lista: any[] = [];
  constructor(private apiServices: ApiService,private router : Router) { }

  ngOnInit(): void {
    this.apiServices.callServices('http://localhost:5235/ServicioOfertas', 'get').subscribe(
      (response) => {
        console.log('Response ApiService: ', response);
        const confirmacion = window.confirm('Datos Obtenidos ¡¡¡');
        console.log(confirmacion);
        this.lista = response.datos;

      }
    );
  }

  visita(item){
    this.apiServices.inmuebleseleccionado = JSON.parse(JSON.stringify(item));
    this.router.navigate(['/pages/solicitarvisita/solicitar']);
  }

}
