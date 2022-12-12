import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {
  converterValores(medidaDoInput: number, medidaRecebida: string, medidaConvertida: string):number|null {
   
    //Temperatura
    if(medidaRecebida == 'Celsius' && medidaConvertida == 'Kelvin'){
      let resultado: number;  
      resultado = medidaDoInput + 273.15;
      return (resultado);
    }

    if(medidaRecebida == 'Kelvin' && medidaConvertida == 'Celsius'){
      let resultado: number;  
      resultado = medidaDoInput - 273.15;
      return (resultado);
    }
  
    if(medidaRecebida == 'Celsius' && medidaConvertida == 'Fahrenheit'){
      let resultado: number;  
      resultado = (medidaDoInput * 9/5)+32;
      return (resultado);
    }
    if(medidaRecebida == 'Fahrenheit' && medidaConvertida == 'Celsius'){
      let resultado: number;  
      resultado = (medidaDoInput -32) * 5/9;
      return (resultado);
    }
    if(medidaRecebida == 'Fahrenheit' && medidaConvertida == 'Kelvin'){
      let resultado: number;  
      resultado = ((medidaDoInput - 32) * 5/9) + 273.15;
      return (resultado);
    }
    if(medidaRecebida == 'Kelvin' && medidaConvertida == 'Fahrenheit'){
      let resultado: number;  
      resultado = ((medidaDoInput - 273.15) * 9/5 ) + 32;
      return (resultado);
    }

    //Peso
    if(medidaRecebida == 'Grama' && medidaConvertida == 'Libra'){
      let resultado: number;  
      resultado = medidaDoInput / 453.60;
      return (resultado);
    }
    if(medidaRecebida == 'Libra' && medidaConvertida == 'Grama'){
      let resultado: number;  
      resultado = medidaDoInput * 453,60;
      return (resultado);
    }

    //Medida
    if(medidaRecebida == 'Metro' && medidaConvertida == 'Polegadas'){
      let resultado: number;  
      resultado = medidaDoInput * 39.37;
      return (resultado);
    }
    if(medidaRecebida == 'Polegadas' && medidaConvertida == 'Metro'){
      let resultado: number;  
      resultado = medidaDoInput / 39.37;
      return (resultado);
    }

    return (null);
  }



  constructor() { }

   }

