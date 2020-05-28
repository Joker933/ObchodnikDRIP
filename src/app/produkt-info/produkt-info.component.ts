import { Component, OnInit } from '@angular/core';
import {ProduktModel} from '../models/produkt.model';
import {HttpClient} from '@angular/common/http';
import {KategoriesService} from '../services/kategories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RatingsModel} from '../models/Ratings.model';

@Component({
  selector: 'app-produkt-info',
  templateUrl: './produkt-info.component.html',
  styleUrls: ['./produkt-info.component.scss']
})
export class ProduktInfoComponent implements OnInit {

  public produktik: ProduktModel;
  public prodRating: RatingsModel[];
  public averageProdRating: number[];
  public sum: number;
  public averageFinalNumber: number;

  constructor(private http: HttpClient, private produkt5: KategoriesService, private route: ActivatedRoute) { }


  ngOnInit() {
     this.route.queryParams
      .subscribe(params => {
        this.produkt5.getProduktInfo(params.id)
          .subscribe((products: ProduktModel) => {
            this.produktik = products;
            this.prodRating = products.ratings;
            this.averageProdRating = this.prodRating.map(i => i.percent);
            this.sum = this.averageProdRating.reduce((a, b) => a + b, 0);
            this.averageFinalNumber = this.sum / this.prodRating.length;
            console.log(this.produktik);
          });
      });
  }


}
