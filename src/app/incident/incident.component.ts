import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Incident} from "../incident";

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  @Input() incident!: Incident;
  @Output() evt = new EventEmitter<Incident>();
  color: string = "";
  colorname: string = "";

  // @HostListener('click')
  productClick(): void {
    this.evt.emit(this.incident);
  }

  constructor() { }

  ngOnInit(): void {
    this.color = " ";
    if(this.incident.open === false){
      this.color = "#FAFAFA";
      this.colorname = "black";
    }else {
      if (this.incident.level === "FATAL") {
        this.color = "#FFB2B2";
        this.colorname = this.color
      } else if (this.incident.level === "ERROR") {
        this.color = "#F5C6C6";
        this.colorname = this.color
      } else if (this.incident.level === "MEDIUM") {
        this.color = "#FFD3B2";
        this.colorname = this.color
      } else if (this.incident.level === "MINOR") {
        this.color = "#FFECB2";
        this.colorname = this.color
      }
    }
  }
}
