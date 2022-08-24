import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Jonatas';
  age: number = 28;
  job: string = 'Dev front jr';
  hobbies: string[] = ['jogar', 'ler', 'ver filme'];
  car = {
    name: 'Grand Siena',
    ano: 2016,
    cor: 'prata'
  }



  constructor() { }

  ngOnInit(): void {
  }

}
