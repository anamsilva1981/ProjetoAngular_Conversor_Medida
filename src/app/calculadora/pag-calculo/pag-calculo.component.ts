import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalculosService } from 'src/app/calculos.service';
import { Medida } from 'src/app/model/medida';

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
  resultado1: Medida = {tipo: '', valor: 0};
  resultado2: Medida = {tipo: '', valor: 0};


  constructor(private route: ActivatedRoute, private calculoService: CalculosService) {
   }

  ngOnInit() {
    this.id1 = this.route.snapshot.paramMap.get('id1')
    this.id2 = this.route.snapshot.paramMap.get('id2')
    if(!!this.id1 && !!this.id2){
      this.resultado1.tipo = this.id1
      this.resultado2.tipo = this.id2
    }
  }

  ngOnChanges() {

  }
  valorConvertido(medidaDoInput: Medida){
    if(medidaDoInput.tipo == this.resultado1.tipo){
      const resposta = this.calculoService.converterValores(medidaDoInput.valor, this.resultado1.tipo, this.resultado2.tipo);
      if (resposta != null){
        this.resultado2 = {
          tipo:this.resultado2.tipo,
          valor: resposta
        };
      }
    }
    else if (medidaDoInput.tipo == this.resultado2.tipo){
      const resposta = this.calculoService.converterValores(medidaDoInput.valor, this.resultado2.tipo, this.resultado1.tipo);
      if (resposta != null){
        this.resultado1 = {
          tipo:this.resultado1.tipo,
          valor: resposta
        };
      }
    }
  }


}
