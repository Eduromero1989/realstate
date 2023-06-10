import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicesVisitaService } from '../../../../services-visita.service';
import { ApiService } from '../../../api-service.service';
import { ActualVisitaComponent } from '../actual-visita.component';


@Component({
  selector: 'ngx-dialog-comment',
  templateUrl: 'dialog-comment.component.html',
  styleUrls: ['dialog-comment.component.scss'],
})
export class DialogCommentComponent {

  @Input() recibeDatos: any;
  @Input() title: any;

  // title: any;
  json_coment = {};
  comentario: string;
  id: any;
  idOferta: any;
  idPersona: any;
  fecha: any;
  realizada: any;
  datosRecibidos: any;



  constructor(
    protected ref: NbDialogRef<DialogCommentComponent>,
    private visitasService: ServicesVisitaService,
    private apiService: ApiService,
    

  ) { }

  // ngOnInit(): void {
    
  // }
  /**
* @description función que agrega el nuevo comentario
* @param
* @author Sebastian Rios
* @date 09/06/2023
* @returns
*/
  dismiss() {
    this.json_coment['comentario'] = this.comentario; // Cambiar el valor del comentario según tus necesidades

    this.json_coment = {
      "id": this.title.id,
      "idOferta": this.title.idOferta,
      "idPersona": this.title.idPersona,
      "fecha": this.title.fecha,
      "realizada": this.title.realizada,
      "comentario": this.comentario
    }

    this.apiService.callServices('http://localhost:5235/ServicioVisitas', 'put', this.json_coment).subscribe((response) => {
      console.log('reponse api service', response);
    }, (error) => {
      console.error('error api service', error);
    });
    this.ref.close(
    
    );
  }

}