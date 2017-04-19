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

  constructor() { }
  
  
  
  getValor(){
    return 1;
  }
  
  retornaBool(){
  return true;
  }

  ngOnInit() {
  }

}
