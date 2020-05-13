import { Component, OnInit } from '@angular/core';
import {ProduktModel} from '../models/produkt.model';
import {HttpClient} from '@angular/common/http';
import {KategoriesService} from '../services/kategories.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-produkt-info',
  templateUrl: './produkt-info.component.html',
  styleUrls: ['./produkt-info.component.scss']
})
export class ProduktInfoComponent implements OnInit {

  public produktik: ProduktModel
  constructor(private http: HttpClient, private produkt5: KategoriesService, private route: ActivatedRoute) { }


  ngOnInit() {
     this.route.queryParams
      .subscribe(params => {
        this.produkt5.getProduktInfo(params.id)
          .subscribe((products: ProduktModel) => {
            this.produktik = products;
          });
      });
  }

}
