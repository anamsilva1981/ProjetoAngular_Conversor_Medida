import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Medida } from 'src/app/model/medida';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  medida = "";
  @Input() resultadoConv!: Medida;

  formularioMedida = new FormGroup({
    medidaInput: new FormControl('')
  })


  @Output() resultadoConvChange = new EventEmitter<Medida>();
  constructor() { }

  ngOnInit(): void { 
    this.medida = this.resultadoConv.tipo
  }

  resultadoConversao(medidaDoInput: number){
    this.resultadoConv = {tipo: this.medida, valor: medidaDoInput};
    this.resultadoConvChange.emit(this.resultadoConv);
  }


}

