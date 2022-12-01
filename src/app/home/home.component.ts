import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperaturas = ["Celsius vs Kelvin", "Celsius vs Fahrenheit", "Kelvin vs Fahrenheit"]

  pesos = ["Grama x Kilo", "Grama x Libra", "Grama x Onça", "Kilo x Libra", "Kilo x Onça", "Libra x Onça"]

  medidas = ["Metro x Cm","Metro x Polegadas","Metro x Pé","Metro x Jardas","Cm x Pé","Cm x Polegadas","Cm x Jardas","Polegadas x Pé", "Polegadas x Jardas", "Pé x Jardas"]

  constructor() { }

  ngOnInit(): void {
  }

}
