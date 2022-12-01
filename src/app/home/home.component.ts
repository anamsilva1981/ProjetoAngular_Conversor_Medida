import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperaturas = ["Celsius", "Fahrenheit", "Kelvin"];
  pesos = ["Grama", "Libra", "Onça", "Kilo "];
  medidas = ["Metro ","Polegadas","Pé","Jardas","Cm"];


  constructor() { }

  ngOnInit(): void {
    this.temperaturas.sort();
    this.pesos.sort();
    this.medidas.sort();
  }

}
