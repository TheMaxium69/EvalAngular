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

  // @HostListener('click')
  productClick(): void {
    this.evt.emit(this.incident);
  }

  constructor() { }

  ngOnInit(): void {
    if(this.incident.level === "FATAL"){
      this.color = "#FFB2B2";
    }else if(this.incident.level === "ERROR"){
      this.color = "#F5C6C6";
    }
    else if(this.incident.level === "MEDIUM"){
      this.color = "#FFD3B2";
    }
    else if(this.incident.level === "MINOR"){
      this.color = "#FFECB2";
    }
  }
}
