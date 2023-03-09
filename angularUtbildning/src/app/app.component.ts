import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="header">
        <img src="/asets/img/logo.svg" alt="Ultimate Donuts" />
      </header>
      <app-product-list></app-product-list>
    </div>
  `,
  styles: [
    `
      .app {
        background-color: #f5f5f5;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = 'Starting with Angular!';
  }

  handleClick(event: Event) {
    console.log('Clicked');
  }

  handleInput(event: Event) {
    // We can use type assersion here to demosnstrate the type of event we want to show !!!
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;
  }
}
