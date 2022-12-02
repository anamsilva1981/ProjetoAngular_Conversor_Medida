import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { PagCalculoComponent } from './calculadora/pag-calculo/pag-calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HomeComponent,
    PagCalculoComponent
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularMaterialModule,

    
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
