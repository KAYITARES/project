import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <h1>RECIT</h1>
  <p>gweiugeksaais{{quote}}</p>
  ` 
})
export class AppComponent {
  quote = 'byose bihira abakunda Imana';
}
