import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Pipes</h1>
  `
})
export class AppComponent implements OnInit {
  
  message = "Angular Pipes!";
  percentage = 0.259;
  birthday = new Date(1972,4,15); 
  price = 9.99;
  id = '15-AH-5678';
  
  ngOnInit() {

  }
  
}