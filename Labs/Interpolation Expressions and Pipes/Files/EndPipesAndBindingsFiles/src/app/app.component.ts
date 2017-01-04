import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <h1>Angular Pipes</h1>
    <br />
    Uppercase: {{ message | uppercase }}
    <br />
    Lowercase: {{ message | lowercase }}
    <br />
    Date: {{ birthday | date:'longDate' }}
    <br />
    Percentage: {{ percentage | percent:'2.2' }}
    <br />
    Currency: {{ price | currency:'USD':true }}
    <br />
    Custom Pipe (DashReplacerPipe): {{ id | dashreplacer }}
  `
})
export class AppComponent implements OnInit {
  
  message: string = "Hello Pipes!";
  percentage: number = 0.259;
  birthday = new Date(1972,4,15); 
  price: number = 9.99;
  id: string = '15-AH-5678';
  
  ngOnInit() {

  }
  
}