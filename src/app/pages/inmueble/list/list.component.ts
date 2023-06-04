import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  List: {
    id: {
      title: 'Numero de Referencia',
      type: 'number',
    },
    firstName: {
      title: 'Dirección',
      type: 'string',
    },
    lastName: {
      title: 'Fecha disponible',
      type: 'string',
    }
  }
  constructor() {}

  /*ngOnInit(): void {
  }*/

}
