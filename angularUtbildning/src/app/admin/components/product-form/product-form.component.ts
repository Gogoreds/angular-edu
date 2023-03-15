import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  template: `
    <form class="product-form" #form="ngForm">
      <pre>
        {{ form.value | json }}
      </pre>
    </form>
  `,
  styles: [
  ]
})
export class ProductFormComponent {

}
