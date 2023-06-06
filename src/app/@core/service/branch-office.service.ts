import { Injectable } from "@angular/core";
import { BranchOfficeData } from "../data/branch-office";
import { Observable } from "rxjs";
import { IBranchOffice } from "../../pages/branch-office/branch-office.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class BranchOfficeService extends BranchOfficeData {
  headers = new HttpHeaders({
    Authorization: "Basic " + btoa("angeyvelez@gmail.com:Test12345!"),
  });
  constructor(private httpClient: HttpClient) {
    super();
  }

  getBranchOffices(): Observable<IBranchOffice[]> {
    return this.httpClient.get<IBranchOffice[]>(
      "http://localhost:3000/ServicioSucursales",
      { headers: this.headers }
    );
  }
  createBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice> {
    return this.httpClient.post<IBranchOffice>(
      "http://localhost:3000/ServicioSucursales",
      branchOffice,
      { headers: this.headers }
    );
  }
  updateBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice> {
    return this.httpClient.put<IBranchOffice>(
      "http://localhost:3000/ServicioSucursales",
      branchOffice,
      { headers: this.headers }
    );
  }
  deleteBranchOffice(id: string): Observable<IBranchOffice> {
    return this.httpClient.delete<IBranchOffice>(
      `http://localhost:3000/ServicioSucursales?id=${id}`,
      { headers: this.headers }
    );
  }
}
