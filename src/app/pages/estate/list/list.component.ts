import { Component, OnInit } from '@angular/core';
import { IEstate } from '../estate.interface';
import { EstateData } from '../../../@core/data/estate';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  searchValue: string = '';

  estates: IEstate[] = []

  constructor(private estateService: EstateData) { }

  ngOnInit(): void {
    this.estateService.getOffers().subscribe((estates: IEstate[]) => {
      this.estates = estates;
    });
  }

}
