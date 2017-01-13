import { Component, OnInit} from '@angular/core';

@Component({ 
  selector: 'app-container',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
}