import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  callServices(url:string, method: string, body?:any): Observable<any> {

    //let url ="http://localhost:5006/materia/getOfici";
    if(method == 'get'){
      return this.httpClient.get(url);
    }if(method == 'post'){
      return this.httpClient.post(url, body);
    }if(method == 'delete'){
      return this.httpClient.delete(url, body);
    }if(method == 'patch'){
      return this.httpClient.patch(url, body);
    }if(method == 'put'){
      return this.httpClient.put(url, body);
    }
  }
  obtenerDatos(): Observable<any> {
    const username = 'edulds1989@gmail.com';  
    const password = '1234';
    const url = 'http://localhost:5235/ServicioSucursales';
  
  const headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa(username + ':' + password)
  });

  return this.httpClient.get(url, { headers, withCredentials: true})
    .pipe(
      catchError(error => {
        // Manejo de errores
        return throwError(error);
      })
    );
  }

}
