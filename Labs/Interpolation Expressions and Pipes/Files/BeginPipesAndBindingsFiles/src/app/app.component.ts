import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <h1>Angular Pipes</h1>
  `
})
export class AppComponent implements OnInit {
  
  message: string = "Angular Pipes!";
  percentage: number = 0.259;
  birthday = new Date(1972,4,15); 
  price: number = 9.99;
  id: string = '15-AH-5678';
  
  ngOnInit() {

  }
  
}