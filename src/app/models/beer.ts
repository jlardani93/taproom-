export class Keg {
  constructor(public beer: Beer, public price: number, public pints: number = 124){};
}

export class Beer {
  constructor(public name: string, public brand: string, public type: string, public alcoholContent: number){};
}

export class Ipa extends Beer {
  constructor(name, brand){
    super(name, brand, "IPA", 6);
  }
}

export class Lager extends Beer {
  constructor(name, brand){
    super(name, brand, "Lager", 5);
  }
}

export class Kolsch extends Beer {
  constructor(name, brand){
    super(name, brand, "Kolsh", 4);
  }
}

export class Imperial extends Beer {
  constructor(name, brand){
    super(name, brand, "Imperial", 9)
  }
}
