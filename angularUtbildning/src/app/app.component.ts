import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <div class="app">
    <h1 (click)="handleClick()">{{ message.length ? message : 'This isnt the message youre looking for!' }}</h1>
    <input [value]="message" (input)="handleInput">

  </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})

export class AppComponent implements OnInit {
  message!: string;

  ngOnInit() {
    this.message ='Starting with Angular!';
  }

  handleClick() {
    console.log('Clicked');
  }

  handleInput(event: Event) {
    // We can use type assersion here to demosnstrate the type of event we want to show !!!
    const { value } = event.target as HTMLInputElement;
    console.log(event);
  }
}
