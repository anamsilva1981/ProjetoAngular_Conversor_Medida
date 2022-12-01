import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-calculo',
  templateUrl: './pag-calculo.component.html',
  styleUrls: ['./pag-calculo.component.scss']
})
export class PagCalculoComponent implements OnInit {

  medida1 = "Kelvin";
  medida2 = "Celsius";

  constructor() { }

  ngOnInit(): void {
  }

  valorConvertido(medidaDoInput: string){
    console.log(medidaDoInput);
  }

}
