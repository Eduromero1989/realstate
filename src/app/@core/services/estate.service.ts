import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { IEstate } from "../../pages/estate/estate.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class EstateService {
    constructor(private http: HttpClient) { }

    getOffers(): Observable<IEstate[]> {
        const headers = { 'Authorization': 'Basic ' + btoa('angey@gmail.com:Test12345!'), 'Content-Type': 'application/json' };
        return this.http.get(`${environment.apiUrl}/ServicioOfertas/api/ServicioOfertas/Activas`, { headers }).pipe(
            map((response: any) => this.mapResponseToEstate(response))
        );
    }

    private mapResponseToEstate(response: any): IEstate[] {
        return response?.datos?.map((estate: any) => {
            const isToRent = estate.esAlquiler;
            return {
                title: estate.inmueble.referencia,
                type: isToRent ? 'Alquiler' : 'Venta',
                price: isToRent ? estate.montoalquiler : estate.montoVenta,
                photo: 'https://picsum.photos/200/100',
                sucursal: `${estate.inmueble.sucursal.nombre} - ${estate.inmueble.sucursal.direccion} - ${estate.inmueble.sucursal.telefono}`,
                bathroms: estate.inmueble.nroBanios,
                kitchens: estate.inmueble.nroCocinas,
                rooms: estate.inmueble.nroHabitaciones,
                hasParking: estate.inmueble.tieneParqueadero,
                area: estate.inmueble.superficie,
                address: estate.inmueble.direccion
            }
        });
    }
}