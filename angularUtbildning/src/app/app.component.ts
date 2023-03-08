import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <div class="app">
    <app-product-list></app-product-list>
  </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})

export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message ='Starting with Angular!';
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
