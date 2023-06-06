import { Observable } from 'rxjs';
import { IEstate } from '../../pages/estate/estate.interface';

export abstract class EstateData {
  abstract getOffers(): Observable<IEstate[]>;
}
