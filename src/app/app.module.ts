import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentComponent } from './incident/incident.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import {IncidentDelComponent} from "./incident-del/incident-del.component";

const approutes: Routes = [
  {path: 'incident', component: IncidentListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'add', component: IncidentAddComponent},
  {path: 'incident/:id', component: IncidentDetailComponent},
  {path: 'del/:id', component: IncidentDelComponent},
  {path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    IncidentComponent,
    MenuComponent,
    HomeComponent,
    IncidentAddComponent,
    IncidentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
