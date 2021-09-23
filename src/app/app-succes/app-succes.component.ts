import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes',
  templateUrl: './app-succes.component.html',
  styles: [`
  p {
      padding: 20px;
      color: green;
      border: 1px solid blue;
      width: 30%;
      background: lightgreen;
      text-align: center;
  }
  `]
})
export class AppSuccesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
