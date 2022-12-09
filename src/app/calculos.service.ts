import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {
  celsiusToKelvin(medidaDoInput: string) {
    let celsiusKelvin: number;
    let resultado: string;
    let converter: number;

    converter = +medidaDoInput;
    celsiusKelvin = converter + 273.15;
    resultado = `${celsiusKelvin}`
      return (resultado);
  }

  constructor() { }

   }





// Efetuar os calculos das conversoes 

// Estudar sobre service, envio e recebimento de informações 

// pagina calculo e Service de Calculo 
// Na tela da calculadora irá ler a medida da covnersao e enviar para o Pai (pagina de calculo)
// O pai ira verificar quem enviou e para onde (de celsiu para kenvin ) (verificar botao)
// Verificar as informaçoes que o service vai receber para converter (as duas medidas e o valor de uma delas )
// Fazer a alteração de string para number 
// Service vai calcular de acordo com o que ele recebeu (calculos)
// Receber o valor de calculo e e informar para o filho no campo vazio 
