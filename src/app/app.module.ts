import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentComponent } from './incident/incident.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'incidents', component: IncidentListComponent},
  {path: 'menu', component: AppComponent}
  /*{path: 'products/:id', component: ProductDetailComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'suppliers', component: SupplierListComponent},
  {path: 'sadd', component: SupplierAddComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    IncidentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
