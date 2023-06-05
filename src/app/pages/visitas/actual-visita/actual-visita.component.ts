import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { NbDialogService } from '@nebular/theme';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { ApiService } from '../../api-service.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'ngx-actual-visita',
  templateUrl: './actual-visita.component.html',
  styleUrls: ['./actual-visita.component.scss']
})
export class ActualVisitaComponent implements OnInit {

  data: any;


  username = 'calosegc11@gmail.com';
  password = '12345';
  credentials = btoa(this.username + ':' + this.password);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + this.credentials
  });

  httpOptions = {
    headers: this.headers
  }



  listaInmuebles = [
    {
      "fechaSolicitud": "15/05/2023",
      "fechaVisita": "22/05/2023",
      "Hora": "05:23 pm",
      "Referencia": "0000",
      "comentario": "Gran lugar"
    },
    {
      "fechaSolicitud": "16/05/2023",
      "fechaVisita": "23/05/2023",
      "Hora": "04:23 pm",
      "Referencia": "1111",
      "comentario": "Magnífico"
    },
    {
      "fechaSolicitud": "17/05/2023",
      "fechaVisita": "24/05/2023",
      "Hora": "02:23 pm",
      "Referencia": "2222",
      "comentario": "Estupenda vista"
    },
    {
      "fechaSolicitud": "18/05/2023",
      "fechaVisita": "25/05/2023",
      "Hora": "03:23 pm",
      "Referencia": "3333",
      "comentario": "Mala ubicación"
    },
  ];

  constructor(

    private dialogService: NbDialogService,
    private apiService: ApiService,

  ) { }


  ngOnInit(): void {
    this.showInfo();
    this.apiService
      .callServices('http://localhost/ServicioInmuebles', 'get', this.httpOptions)
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


  /**
   * @description función que muestra por consola los datos del arreglo
   * @param
   * @author Sebastian Rios
   * @date 22/mayo/2023
   * @returns
   */
  showInfo(): void {
    // console.log(this.listaInmuebles);
  }

  /**
 * @description función que abre modal para agregar un comentario
 * @param
 * @author Sebastian Rios
 * @date 22/mayo/2023
 * @returns
 */
  open(): void {
    this.dialogService.open(DialogCommentComponent, {
      context: {
        title: 'Ingresa tus comentarios',
      },
    });
  }



}
