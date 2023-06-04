import { Observable } from 'rxjs';
import { IBranchOffice } from '../../pages/branch-office/branch-office.interface';

export abstract class BranchOfficeData {
  abstract getBranchOffices(): Observable<IBranchOffice[]>;
  // abstract getBranchOfficeById(id: string): Observable<IBranchOffice>;
  abstract createBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice>;
  abstract updateBranchOffice(branchOffice: IBranchOffice): Observable<IBranchOffice>;
  abstract deleteBranchOffice(id: string): Observable<IBranchOffice>;
}
