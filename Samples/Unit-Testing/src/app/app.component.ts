import { Component, OnInit} from '@angular/core';

@Component({ 
  selector: 'co-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
}