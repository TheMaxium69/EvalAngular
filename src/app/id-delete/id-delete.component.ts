import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IncidentHttpService} from "../incident-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-id-delete',
  templateUrl: './id-delete.component.html',
  styleUrls: ['./id-delete.component.css']
})
export class IdDeleteComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
    });
  }

  add(): void {
    if (this.form.value.id === '') {
      alert("erreur d'id")
    }else {
      this.router.navigate(['/del', this.form.value.id])
    }
  }

}
