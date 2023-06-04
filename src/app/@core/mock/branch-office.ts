import { of as observableOf, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IBranchOffice } from "../../pages/branch-office/branch-office.interface";
import { BranchOfficeData } from "../data/branch-office";

@Injectable()
export class BranchOfficeService extends BranchOfficeData {
  private estate: IBranchOffice[] = [
    {
      id: "1",
      nombre: "Sucursal 1",
      direccion: "Calle 1",
      telefono: "1234567890",
      estado: {
        id: "1",
        nombre: "Activo",
      },
    },
    {
      id: "2",
      nombre: "Sucursal 2",
      direccion: "Calle 2",
      telefono: "1234567890",
      estado: {
        id: "1",
        nombre: "Activo",
      },
    },
  ];

  getBranchOffices(): Observable<IBranchOffice[]> {
    return observableOf(this.estate);
  }
  createBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice> {
    this.estate.push(branchOffice);
    return observableOf(branchOffice);
  }
  updateBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice> {
    const index = this.estate.findIndex((e) => e.id === branchOffice.id);
    this.estate[index] = { ...this.estate[index], ...branchOffice };
    return observableOf(branchOffice);
  }
  deleteBranchOffice(id: string): Observable<IBranchOffice> {
    const index = this.estate.findIndex((e) => e.id === id);
    const branchOffice = this.estate[index];
    this.estate.splice(index, 1);
    return observableOf(branchOffice);
  }
}
