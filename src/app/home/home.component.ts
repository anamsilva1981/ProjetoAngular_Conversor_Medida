import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperaturas = ["Celsius", "Fahrenheit", "Kelvin"];
  pesos = ["Grama", "Libra", "Onça", "Kilo "];
  medidas = ["Metro ","Polegadas","Pé","Jardas","Cm"];

  conversorTemperatura = new FormGroup({
    converterDeTemp: new FormControl([]),
    converterParaTemp: new FormControl([]),
  })
  
  conversorPeso = new FormGroup({
    converterDePeso: new FormControl([]),
    converterParaPeso: new FormControl([]),
  })

  conversorMedida = new FormGroup({
    converterDeMedida: new FormControl([]),
    converterParaMedida: new FormControl([]),
  })


  constructor(
    private calculosService: CalculosService
  ) { }

  ngOnInit(): void {
    this.temperaturas.sort();
    this.pesos.sort();
    this.medidas.sort();
  }

  converteTemperatura(){
    // Verificar os valores dos select e enviar via parametro para a rota 
  }
  convertePeso(){

  }
  converteMedida(){

  }
}
