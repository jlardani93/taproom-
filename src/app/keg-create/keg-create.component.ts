import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg, Beer } from '../models/beer';

@Component({
  selector: 'app-keg-create',
  templateUrl: './keg-create.component.html',
  styleUrls: ['./keg-create.component.css']
})

export class KegCreateComponent {

  @Output() sendKeg = new EventEmitter();
  @Input() ifAdding: boolean;

  createKeg(name, brewery, type, alcoholContent, price, pints){
    let myBeer = new Beer(name, brewery, type, alcoholContent);
    let myKeg = new Keg(myBeer, price, pints);
    this.sendKeg.emit(myKeg);
  }
}
