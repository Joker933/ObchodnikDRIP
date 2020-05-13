import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KategoriesService} from './services/kategories.service';
import {KategorieModel} from './models/kategorie.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ObchodnikDrip';

  private Kategories: KategorieModel[];

  constructor(
    private httpClient: HttpClient,
    private Kategori: KategoriesService,
    private router: Router,
  ) {
      this.Kategori.getKategorie()
      .subscribe((c: KategorieModel[]) => {
        console.log(c);
        this.Kategories = c;
      });
  }
  getKategori(id: number){
    this.router.navigate(['/produkty'], {queryParams: {id}});
  }
}
