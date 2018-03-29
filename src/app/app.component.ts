import { Component, Input } from '@angular/core';
import { Keg, Beer, Ipa, Lager, Imperial, Kolsch } from './models/beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() activeEditKeg: Keg = null;

  masterKegList: Keg[] = [];
  ifAdding: boolean = false;

  constructor(){
    this.masterKegList.push(new Keg(new Ipa("Summer Lovin'", "Victory Brewery"), 7));
    this.masterKegList.push(new Keg(new Lager("The Original", "Yuengling"), 5));
    this.masterKegList.push(new Keg(new Imperial("Dirty Bastard", "Founders"), 10));
    this.masterKegList.push(new Keg(new Kolsch("Cherry Sunshine", "Victory"), 6));
  }

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
    this.ifAdding = false; 
  }

  addingKeg(flag: boolean){
    this.ifAdding = flag;
  }
}
