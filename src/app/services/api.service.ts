import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
