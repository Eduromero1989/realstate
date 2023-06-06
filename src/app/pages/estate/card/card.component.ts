import { Component, OnInit, Input } from '@angular/core';
import { IEstate } from '../estate.interface';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() estate: IEstate

  constructor(iconsLibrary: NbIconLibraries) { 
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }



}
