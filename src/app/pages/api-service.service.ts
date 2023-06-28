import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  inmuebleseleccionado;
  constructor(private httpClient: HttpClient) { }

  callServices(url:string, method:string, body?:any): Observable<any> {
    const username = 'edulds1989@gmail.com';
    const password = '1234';
    const credentials = btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + credentials
    });

    const httpOptions = {
      headers: headers
    };
    //let url ="http://localhost:5006/materia/getOfici";
    if(method == 'get'){
      return this.httpClient.get(url, httpOptions);
    }if(method == 'post'){
      return this.httpClient.post(url, body, httpOptions);
    }if(method == 'delete'){
      return this.httpClient.delete(url,httpOptions);
    }if(method == 'put'){
      return this.httpClient.put(url, body,httpOptions);
    }
  }

  // callServices(url: string, method: string, body?: any): Observable<any> {

  //   if (method == 'get') {
  //     return this.httpClient.get(url);
  //   } if (method == 'post') {
  //     return this.httpClient.post(url, body);
  //   } if (method == 'delete') {
  //     return this.httpClient.delete(url);
  //   } if (method == 'patch') {
  //     return this.httpClient.patch(url, body);
  //   } if (method == 'put') {
  //     return this.httpClient.put(url, body);
  //   } 

    
  // }
}