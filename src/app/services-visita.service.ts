import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesVisitaService {
  inmuebleseleccionado;
  constructor(
    private httpClient: HttpClient
  ) { }

  service(url: string, method: string, body?: any): Observable<any> {
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
    if (method == "get") {
      return this.httpClient.get(url, httpOptions);
    } else if (method = "post") {
      return this.httpClient.post(url, body, httpOptions);
    } else if (method = "patch") {
      return this.httpClient.patch(url, body, httpOptions);
    } else if (method = "put") {
      return this.httpClient.put(url, body, httpOptions);
    }

  }
}


