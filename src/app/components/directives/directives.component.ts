import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size = 25;
  font = 'monospace';
  color = 'red';

  classes = ['green-title', 'small-title'];

  constructor() { }

  ngOnInit(): void {
  }

}
