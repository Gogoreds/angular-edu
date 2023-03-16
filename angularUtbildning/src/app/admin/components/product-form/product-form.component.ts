import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  template: `
    <form class="product-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" ngModel/>
      </label>
      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" ngModel/>
      </label>
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
  ]
})
export class ProductFormComponent {

}
