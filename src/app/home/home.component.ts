import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperaturas = ["Celsius", "Fahrenheit", "Kelvin"];
  pesos = ["Grama", "Libra"];
  medidas = ["Metro","Polegadas"];

  conversorTempForm = new FormGroup({
    converterDeTemp: new FormControl('', Validators.required),
    converterParaTemp: new FormControl('', Validators.required),
  });

  conversorPeso = new FormGroup({
    converterDePeso: new FormControl('', Validators.required),
    converterParaPeso: new FormControl('', Validators.required),
  })

  conversorMedida = new FormGroup({
    converterDeMedida: new FormControl('', Validators.required),
    converterParaMedida: new FormControl('', Validators.required),
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
    this.conversorTempForm.value.converterDeTemp,
    this.conversorTempForm.value.converterParaTemp]
    );
  }
  convertePeso(){
       // Pega o valor da Peso selecionada e envia com um parametro para a rota
       this.router.navigate(['/calculadora',
       this.conversorPeso.value.converterDePeso,
       this.conversorPeso.value.converterParaPeso]
       );
  }
  converteMedida(){
       // Pega o valor da Medida selecionada e envia com um parametro para a rota
       this.router.navigate(['/calculadora',
       this.conversorMedida.value.converterDeMedida,
       this.conversorMedida.value.converterParaMedida]
       );
  }
}
