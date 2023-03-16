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

      <div class="product-form-radios">
        <p class="product-form-radios-label">Promo:</p>
        <label class="">
          <input class="" type="radio" name="promo" [value]="undefined" ngModel/>
          <span>None</span>
        </label>
        <label class="">
          <input class="" type="radio" name="promo" value="new" ngModel/>
          <span>New</span>
        </label>
        <label class="">
          <input class="" type="radio" name="promo" value="limited" ngModel/>
          <span>Limited</span>
        </label>
      </div>

      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
  `
    .product-form {
      &-radios {
        display: flex;
        align-content: center;
        &-label {
          margin-right: 10px;
        }
        label {
          display: flex;
          align-items: center;
          span {
            color: #666;
            margin-bottom: 0;
          }
        }
      }
    }
  `
  ]
})
export class ProductFormComponent {

}
