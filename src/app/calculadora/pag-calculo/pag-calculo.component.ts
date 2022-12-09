import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalculosService } from 'src/app/calculos.service';

@Component({
  selector: 'app-pag-calculo',
  templateUrl: './pag-calculo.component.html',
  styleUrls: ['./pag-calculo.component.scss']
})
export class PagCalculoComponent implements OnInit {

  medida1 = "";
  medida2 = "";
  id1!: string | null;
  id2!: string | null;
  resultado = "";
  
  @Output() resultadoConversao = new EventEmitter<string>;

  constructor(private route: ActivatedRoute, private calculoService: CalculosService) {

   }

  ngOnInit() {
    this.id1 = this.route.snapshot.paramMap.get('id1')
    this.id2 = this.route.snapshot.paramMap.get('id2')
    if(!!this.id1 && !!this.id2){
      this.medida1 = this.id1
      this.medida2 = this.id2
    }
  }

  valorConvertido(medidaDoInput: string){
    console.log(medidaDoInput);
    this.resultado = this.calculoService.celsiusToKelvin(medidaDoInput);
    this.resultado = this.resultado.toString();
    console.log(this.resultado);
    this.resultadoConversao.emit(this.resultado);
  }

}
