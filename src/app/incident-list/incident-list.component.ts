import { Component, OnInit } from '@angular/core';
import {Incident} from "../incident";
import {IncidentHttpService} from "../incident-http.service";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  incidents: Incident[] = [];
  selectedProduct?: Incident;
  filterStr: string = "";

  constructor(private IncidentService: IncidentHttpService) { }

  ngOnInit(): void {
    this.IncidentService.findAll().subscribe( r => this.incidents = r);
  }

  receiveChildrenEvt(incident: Incident): void {
    this.selectedProduct = incident;
  }

  close(): void {
    this.selectedProduct = undefined;
  }

  filterList(): Incident[] {
    return this.filterStr
      ? this.incidents.filter( s => s.titre.toLowerCase().search(this.filterStr.toLowerCase()) !== -1)
      : this.incidents;
  }

  setFilter(event: Event): void {
    this.filterStr = (event.target as HTMLInputElement).value;
  }
}
