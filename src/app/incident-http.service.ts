import { Injectable } from '@angular/core';
//import {Product} from './model/Product';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Incident} from "./incident";
@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {

  private apiUrl = 'http://localhost:8080/learn/api/incidents';

  constructor(private http: HttpClient) { }

  /*add(product: Incident): Observable<Incident>{
    return this.http.post<Incident>(this.apiUrl, product);
  }

  delete(productId: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' + productId);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }*/

  findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiUrl);
  }
  /*
  findOne(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id);
  }*/
}
