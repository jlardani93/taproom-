import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent {

  @Input() activeEditKeg;

  editKeg(name, brewery, type, alcoholContent, price, pints){
    this.activeEditKeg.beer.name = name;
    this.activeEditKeg.beer.brand = brewery;
    this.activeEditKeg.beer.type = type;
    this.activeEditKeg.beer.alcoholContent = alcoholContent;
    this.activeEditKeg.price = price;
    this.activeEditKeg.pints = pints;
    this.activeEditKeg = null;
  }
}
