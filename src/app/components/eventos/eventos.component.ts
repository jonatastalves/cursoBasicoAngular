import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = true;

  btnStyle = 'btn-default';

  btnStyle2 = 'btn-default';

 

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    if(this.btnStyle2 == 'btn-change'){
      this.btnStyle2 = 'btn-default';
    }else{
      this.btnStyle2 = 'btn-change'
    }
    this.show = !this.show // toogle, estudar depois
  }

  submit():void{
    if(this.btnStyle == 'btn-change'){
      this.btnStyle = 'btn-default';
    }else{
      this.btnStyle = 'btn-change'
    }
    
  }

}
