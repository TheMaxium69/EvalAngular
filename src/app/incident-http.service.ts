import { Injectable } from '@angular/core';
//import {Product} from './model/Product';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Incident} from "./incident";
@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {

  private Url = 'http://localhost:8080/learn/api/incidents';

  constructor(private http: HttpClient) { }

  add(incident: Incident): Observable<Incident>{
    return this.http.post<Incident>(this.Url, incident);
  }

  delete(incidentId: number): Observable<any>{
    return this.http.delete(this.Url + '/' + incidentId);
  }

  findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.Url);
  }

  findOne(incidentId: number): Observable<Incident> {
    return this.http.get<Incident>(this.Url + '/' + incidentId);
  }
}
