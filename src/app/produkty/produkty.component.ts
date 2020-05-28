import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KategoriesService} from '../services/kategories.service';
import {KategorieStrankyModel} from '../models/KategorieStranky.model';
import {ProduktModel} from '../models/produkt.model';
import {KategorieModel} from '../models/kategorie.model';

@Component({
  selector: 'app-produkty',
  templateUrl: './produkty.component.html',
  styleUrls: ['./produkty.component.scss']
})
export class ProduktyComponent implements OnInit {

  public jmena: string;
  public popisky: string;
  public produkty2: ProduktModel[];
  public produkty3: ProduktModel[];
  public pagesCount: number;
  public catId: number;
  public name: string;
  public description: string;
  constructor(private activatedRoute: ActivatedRoute, private kategori: KategoriesService, private router: Router) {

  }

  getProduktID(id) {
    this.router.navigate(['/produkt-info'], {queryParams: {id}});
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(promenna => {
      this.kategori.getJednaKategorie(promenna.id).subscribe((promenna2: KategorieStrankyModel) => {
        this.produkty3 = promenna2.products;
        this.pagesCount = promenna2.pagesCount + 1;
        this.catId = promenna2.category.id;
        this.name = promenna2.category.name;
        this.description = promenna2.category.description;
        console.log(this.produkty2);
      });
    });
  }

  get pageCount(): IterableIterator<number> {
    return new Array(this.pagesCount).keys();
  }

  getCislo(id: number, page: number) {
    this.kategori.getCategoryPage(id, page).subscribe(
      (data: KategorieStrankyModel) => {
          this.produkty3 = data.products;
      }
    );

  }

}
