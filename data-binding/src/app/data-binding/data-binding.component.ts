import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  Booleana = true;
  url: string = "http://www.mvasconcelos.com";
  urlImg: string = "http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/MinorCatImages/052622AM.png.ashx?width=64&height=64";
  valorAtual: string = "";

  constructor() { }
  
  
  
  getValor(){
    return 1;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }

  //vou tipar o parametro que captura o evento do input
  //assim posso usar o intelisense na variavel event
  //declarando como tipo KeyBoardEvent
  onKeyUp(evento: KeyboardEvent){
    //console.log(evento);
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  
  retornaBool(){
  return true;
  }

  ngOnInit() {
  }

}
