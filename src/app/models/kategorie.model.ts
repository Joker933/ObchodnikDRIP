import {ProduktModel} from './produkt.model';

export class KategorieModel {
  constructor(public id: number, public name: string, public description: string, public products: ProduktModel){

  }
}
