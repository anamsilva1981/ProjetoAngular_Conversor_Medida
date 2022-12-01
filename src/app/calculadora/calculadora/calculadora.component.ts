import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  @Input() medida = "";
  formularioMedida = new FormGroup({
    medidaInput: new FormControl('')
  })

  @Output() valorParaConverter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  converter(medidaDoInput: string){
    this.valorParaConverter.emit(medidaDoInput);
  }

}
