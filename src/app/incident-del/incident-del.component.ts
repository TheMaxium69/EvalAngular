import { Component, OnInit } from '@angular/core';
import {Incident} from "../incident";
import {ActivatedRoute, Router} from "@angular/router";
import {IncidentHttpService} from "../incident-http.service";

@Component({
  selector: 'app-incident-del',
  templateUrl: './incident-del.component.html',
  styleUrls: ['./incident-del.component.css']
})
export class IncidentDelComponent implements OnInit {

  incident!: Incident;

  constructor(private route: ActivatedRoute,
              private iService: IncidentHttpService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.iService.findOne(+id)
      .subscribe(v => this.incident = v);
  }

  deleteProduct(): void{
    this.iService.delete(this.incident.id).subscribe(v => this.router.navigate(['/incident']));
  }

}
