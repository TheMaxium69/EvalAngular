import { Component, OnInit } from '@angular/core';
import {Incident} from "../incident";
import {ActivatedRoute, Router} from "@angular/router";
import {IncidentHttpService} from "../incident-http.service";

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {

  incident!: Incident;

  constructor(private route: ActivatedRoute,
              private iService: IncidentHttpService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.iService.findOne(+id)
      .subscribe(v => this.incident = v);
  }

}
