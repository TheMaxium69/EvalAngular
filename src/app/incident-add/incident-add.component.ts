import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {IncidentHttpService} from "../incident-http.service";

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private incidentService: IncidentHttpService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      email: ['', Validators.required],
      level: ['ERROR', Validators.required],
      open: ['true', Validators.required],
      progress: ['', Validators.required],
      titre: ['', Validators.required],
      type: ['BUG', Validators.required],
    });
  }

  add(): void {
    this.formSubmitted = true;
    if (this.form.value.progress < 101 && this.form.value.progress > -1) {
      if (this.form.valid) {
        this.incidentService.add(this.form.value)
          .subscribe(v => this.router.navigate(['/incident']));
        this.form.reset();
        this.formSubmitted = false;
      }
    }else{
      alert("Progress doit être entre 0 et 100");
    }
  }
}

