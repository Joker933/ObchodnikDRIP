import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import KlickyOdWebu from '../KlickyOdWebu';
import {KategorieModel} from '../models/kategorie.model';
import {KategorieStrankyModel} from '../models/KategorieStranky.model';
import {ProduktModel} from '../models/produkt.model';

@Injectable({
  providedIn: 'root'
})
export class KategoriesService {

  constructor(private http: HttpClient) { }

  getKategorie() {
    const headers = new HttpHeaders().set('access-token', KlickyOdWebu.token);
    return this.http.get<KategorieModel[]>('/api/categories', {headers});
  }
  getJednaKategorie(id: number) {
    const headers = new HttpHeaders().set('access-token', KlickyOdWebu.token);
    return this.http.get<KategorieStrankyModel>('/api/categories/' + id, {headers});
  }
  getCategoryPage( id: number, page: number) {
    const headers = new HttpHeaders().set('access-token', KlickyOdWebu.token);
    return this.http.get<KategorieStrankyModel>('/api/categories/' + id + '/?page=' + page, {headers});
  }
  getProduktInfo(id: number) {
    const headers = new HttpHeaders().set('access-token', KlickyOdWebu.token);
    return this.http.get<ProduktModel>('/api/products/' + id, {headers});
  }

}
