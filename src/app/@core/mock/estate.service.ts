import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EstateData } from '../data/estate';
import { IEstate } from '../../pages/estate/estate.interface';

@Injectable()
export class EstateService extends EstateData {

  private estate: IEstate[] = [
    {
      title: 'Casa amoblada',
      description: 'Casa en venta en la colonia San José de los Cedros',
      type: 'Venta',
      price: '$2,500,000.00',
      photo: 'https://picsum.photos/200/100',
      sucursal: 'Manizales'
    },
    {
      title: 'Apartamento Tulipanes',
      description: 'Casa en renta en la colonia San José de los Cedros',
      type: 'Renta',
      price: '$15,000.00',
      photo: 'https://picsum.photos/200/101',
      sucursal: 'Medellin'
    },
    {
      title: 'Finca Pinares',
      description: 'Departamento en venta en la colonia San José de los Cedros',
      type: 'Venta',
      price: '$1,500,000.00',
      photo: 'https://picsum.photos/200/102',
      sucursal: 'Anserma'
    },
    {
      title: 'Local Comercial',
      description: 'Departamento en renta en la colonia San José de los Cedros',
      type: 'Renta',
      price: '$10,000.00',
      photo: 'https://picsum.photos/200/103',
      sucursal: 'Manizales'
    },
  ]

  getOffers(): Observable<any> {
    return observableOf(this.estate);
  }
}
