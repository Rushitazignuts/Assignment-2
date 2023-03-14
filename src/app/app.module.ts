import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TableModule } from 'angular-bootstrap-md';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { SearchPipe } from './search.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    
    SearchPipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule,
    TableModule,
    NoopAnimationsModule,
    MatTableModule,
    MatAutocompleteModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
