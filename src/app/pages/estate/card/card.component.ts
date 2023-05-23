import { Component, OnInit, Input } from '@angular/core';
import { IEstate } from '../estate.interface';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() estate: IEstate

  constructor() { }

  ngOnInit(): void {
  }

}
