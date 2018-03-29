import {Pipe, PipeTransform} from '@angular/core';
import { Keg, Beer, Ipa, Imperial, Kolsch, Lager } from './models/beer';

@Pipe({
  name: "filterKegs",
  pure: false
})

export class filterKegsPipe implements PipeTransform {
  transform(input: Keg[], searchQuery){
    var output: Keg[] = [];
    switch (searchQuery){
      case "all":
        return input;
      case "highAlcohol":
        input.forEach(function(myKeg){
          if (myKeg.beer.alcoholContent >= 8) output.push(myKeg);
        });
        break;
      case "lowAlcohol":
        input.forEach(function(myKeg){
          if (myKeg.beer.alcoholContent < 8) output.push(myKeg);
        });
        break;
      case "ipa":
        input.forEach(function(myKeg){
          if (myKeg.beer.type === "IPA") output.push(myKeg);
        });
        break;
      case "lager":
        input.forEach(function(myKeg){
          if (myKeg.beer.type === "Lager") output.push(myKeg);
        });
        break;
      case "imperial":
        input.forEach(function(myKeg){
          if (myKeg.beer.type === "Imperial") output.push(myKeg);
        });
      case "kolsch":
        input.forEach(function(myKeg){
          if (myKeg.beer.type === "Kolsch") output.push(myKeg);
        });
    }
    return output;
  }
}
