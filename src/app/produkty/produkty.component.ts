import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KategoriesService} from '../services/kategories.service';
import {KategorieStrankyModel} from '../models/KategorieStranky.model';
import {ProduktModel} from '../models/produkt.model';

@Component({
  selector: 'app-produkty',
  templateUrl: './produkty.component.html',
  styleUrls: ['./produkty.component.scss']
})
export class ProduktyComponent implements OnInit {

  public jmena: string;
  public popisky: string;
  public produkty2: KategorieStrankyModel;
  public produkty3: ProduktModel;

  constructor(private activatedRoute: ActivatedRoute, private Kategori: KategoriesService, private router: Router) {

  }

  getProduktID(id) {
    this.router.navigate(['/produkt-info'], {queryParams: {id}});
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(promenna => {
      this.Kategori.getJednaKategorie(promenna.id).subscribe((promenna2: KategorieStrankyModel) => {
        this.produkty2 = promenna2;
        this.produkty3 = promenna2.products;
        console.log(this.produkty2);
      });
    });
  }

}
