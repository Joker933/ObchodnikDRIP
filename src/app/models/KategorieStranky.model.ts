import {ProduktModel} from './produkt.model';
import {KategorieModel} from './kategorie.model';

export class KategorieStrankyModel {
  constructor(public currentPage: number, public pagesCount, public products: ProduktModel[], public category: KategorieModel) {

  }
}
