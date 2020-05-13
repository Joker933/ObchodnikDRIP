import {ProduktModel} from './produkt.model';

export class KategorieStrankyModel {
  constructor(public currentPage: number, public pagesCount, public products: ProduktModel) {

  }
}
