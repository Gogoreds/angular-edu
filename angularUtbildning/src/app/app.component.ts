import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <div class="app">
    <h1>{{ message.length ? message : 'This isnt the message youre looking for!' }}</h1>
    
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
    this.message ='Hello Angular!';
  }
}
