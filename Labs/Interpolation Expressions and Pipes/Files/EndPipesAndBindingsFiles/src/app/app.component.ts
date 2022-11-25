import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
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
    Currency: {{ price | currency:'USD':'symbol' }}
    <br />
    Custom Pipe (DashReplacerPipe): {{ id | dashreplacer }}
  `
})
export class AppComponent implements OnInit {
  
  message = "Hello Pipes!";
  percentage = 0.259;
  birthday = new Date(1972,4,15); 
  price = 9.99;
  id = '15-AH-5678';
  
  ngOnInit() {

  }
  
}