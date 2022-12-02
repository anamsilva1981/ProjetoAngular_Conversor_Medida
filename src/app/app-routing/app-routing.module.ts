import { NgModule } from '@angular/core';
import { PagCalculoComponent } from '../calculadora/pag-calculo/pag-calculo.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



const appRoutes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
  path: 'calculadora/:id1/:id2', component: PagCalculoComponent
  },
  { 
    path: '**', component: HomeComponent 
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularMaterialModule

  ],

  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
