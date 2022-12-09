import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  @Input() medida = "";
  @Input() resultado = "";

  formularioMedida = new FormGroup({
    medidaInput: new FormControl('')
  })


  @Output() valorParaConverter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { }

  converter(medidaDoInput: string){
    this.valorParaConverter.emit(medidaDoInput);
    console.log()
  }

  valorConvertido(resultado: string){
    this.formularioMedida.patchValue({
      medidaInput: resultado
    })
    this.resultado = resultado;
    console.log(this.resultado)
  } 
}

