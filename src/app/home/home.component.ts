import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperaturas = ["Celsius", "Fahrenheit", "Kelvin"];
  pesos = ["Grama", "Libra", "Onça", "Kilo"];
  medidas = ["Metro","Polegadas","Pé","Jardas","Cm"];

  valorConverterDeTemp = '';
  valorConverterParaTemp = '';

  valorConverterDePeso = '';
  valorConverterParaPeso = '';

  valorConverterDeMedida = '';
  valorConverterParaMedida = '';

  conversorTemperatura = new FormGroup({
    converterDeTemp: new FormControl(''),
    converterParaTemp: new FormControl(''),
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
    private router: Router
      ) { }

  ngOnInit(): void {
    this.temperaturas.sort();
    this.pesos.sort();
    this.medidas.sort();
  }

  converteTemperatura(){
    // Pega o valor da temperatura selecionada e envia com um parametro para a rota
    this.router.navigate(['/calculadora', 
    this.valorConverterDeTemp, 
    this.valorConverterParaTemp]
    )
  }
  convertePeso(){
       // Pega o valor da Peso selecionada e envia com um parametro para a rota
       this.router.navigate(['/calculadora', 
       this.valorConverterDePeso, 
       this.valorConverterParaPeso]
       )
  }
  converteMedida(){
       // Pega o valor da Medida selecionada e envia com um parametro para a rota
       this.router.navigate(['/calculadora', 
       this.valorConverterDeMedida, 
       this.valorConverterParaMedida]
       )
  }
}
