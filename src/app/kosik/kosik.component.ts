import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KategoriesService} from '../services/kategories.service';
import {ProduktModel} from '../models/produkt.model';

@Component({
  selector: 'app-kosik',
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.scss']
})
export class KosikComponent implements OnInit {

  public poleKosiku = [];
  public zaplatMore: number;

  constructor(private activatedRoute: ActivatedRoute, private products: KategoriesService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProduktInfo(i.id).subscribe((data: ProduktModel) => {
        this.poleKosiku.push(data);
        console.log(this.poleKosiku);
        localStorage.setItem('produktoskysmypenisos', JSON.stringify(this.poleKosiku));
        const jsonProduktoskysmypenisos = localStorage.getItem(('produktoskysmypenisos'));
        this.poleKosiku = JSON.parse(jsonProduktoskysmypenisos);


      });
    });
    const jsonProduktoskysmypenisos2 = localStorage.getItem(('produktoskysmypenisos'));
    this.poleKosiku = JSON.parse(jsonProduktoskysmypenisos2);
    const finalCena = this.poleKosiku.map(kkt => kkt.price).reduce((a, b) => a + b, 0);
    this.zaplatMore = finalCena;
  }
  getProduktID(id: number) {
    this.router.navigate(['/produkt-info'], {queryParams: {id}});
  }
}
