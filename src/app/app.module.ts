import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegEditComponent } from './keg-edit/keg-edit.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegListEditComponent } from './keg-list-edit/keg-list-edit.component';

import { filterKegsPipe } from './filterKegs.pipe';
import { KegCreateComponent } from './keg-create/keg-create.component'


@NgModule({
  declarations: [
    AppComponent,
    KegEditComponent,
    KegListComponent,
    KegListEditComponent,
    filterKegsPipe,
    KegCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Keg List
//Edit Keg List
//Edit Individual Keg
//Happy Hour Prices
//Filter Keg List
