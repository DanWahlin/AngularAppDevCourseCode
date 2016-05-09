import { Component, OnInit, Pipe } from '@angular/core';

@Pipe({ name: 'dashreplacer'})
export class DashReplacerPipe {
  transform(value: any): string {
    if (!value) return value;
    return value.replace(/-/g, '');
  }
}

@Component({
  selector: 'app-container',
  template: `
    <h1>Using Angular Pipes</h1>
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
  `,
  pipes: [ DashReplacerPipe ]
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