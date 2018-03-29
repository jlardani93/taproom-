import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg, Beer, Ipa, Imperial, Lager, Kolsch } from '../models/beer';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {

  @Output() sendEditRequest = new EventEmitter();
  @Output() sendAddRequest = new EventEmitter();
  @Input() myKegs: Keg[];

  adminMode: boolean = false;
  filterQuery: string = "all";


  getButtonClass() {
    if (!this.adminMode) return "hidden";
    return "";
  }

  toggleAdmin() {
    this.adminMode = (this.adminMode) ? false : true;
  }

  removeKeg(index) {
    this.myKegs.splice(index, 1);
  }

  consumeBeer(index, pints) {
    this.myKegs[index].pints -= pints;
  }

  editKeg(index) {
    this.sendEditRequest.emit(this.myKegs[index]);
  }

  onChange(filterQuery) {
    this.filterQuery = filterQuery;
  }

  addKeg(){
    this.sendAddRequest.emit(true); 
  }


}
