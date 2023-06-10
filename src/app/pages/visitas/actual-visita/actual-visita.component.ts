import { Component, OnInit, Output } from '@angular/core';
import { log } from 'console';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { NbDialogService } from '@nebular/theme';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { ApiService } from '../../api-service.service';
import { HttpHeaders } from '@angular/common/http';
import { ServicesVisitaService } from '../../../services-visita.service';


@Component({
  selector: 'ngx-actual-visita',
  templateUrl: './actual-visita.component.html',
  styleUrls: ['./actual-visita.component.scss']
})
export class ActualVisitaComponent implements OnInit {

  @Output() oferta: any;
  seleccionado: any;
  data: any;
  datos: any;
  json_convertido: any;
  listaInmuebles: [] = [];
  titulo: string;

  //json
  parentMessage: any;

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

  constructor(

    private dialogService: NbDialogService,
    private visitasService: ServicesVisitaService,

  ) { }


  ngOnInit(): void {
    this.refrescarTabla();
  }

  /**
* @description función que refresca la tabla de visitas
* @param
* @author Sebastian Rios
* @date 09/06/2023
* @returns
*/
  refrescarTabla(): void {
    this.visitasService
      .service('http://localhost:5235/ServicioVisitas', 'get')
      .subscribe(
        (response) => {
          // console.log('Respuesta:', response.datos[0].comentario);
          this.listaInmuebles = response.datos;
          // console.log('json convertido: ', this.listaInmuebles);
        },
        (error) => {
          console.error('Error ApiService:', error);
        }
      );
  }

  /**
* @description función que selecciona una visita
* @param {any} data -Variable que almacena la información de la visita
* @author Sebastian Rios
* @date 09/06/2023
* @returns
*/
  select(data: any): void {
    this.seleccionado = data;
    console.log(this.seleccionado);
  }

  /**
* @description función que agrega un comentario
* @param
* @author Sebastian Rios
* @date 09/06/2023
* @returns
*/
  insertComment(): void {
    this.visitasService
      .service('http://localhost:5235/ServicioVisitas', 'put',)
      .subscribe();
  }
  /**
 * @description función que abre modal para agregar un comentario
 * @param {any} model -Variable que almacena la información de la visita
 * @author Sebastian Rios
 * @date 09/06/2023
 * @returns
 */
  open(model?: any): void {

    this.dialogService.open(DialogCommentComponent, {
      context: {
        // title: 'Ingresa tus comentarios',
        title: model,
      },
    }).onClose.subscribe((item: any) => {
      this.refrescarTabla();
    });

  }

}
