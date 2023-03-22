import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  template: `
    <form class="product-form" (ngSubmit)="handleSubmit(form)" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" required minlength="5" ngModel #name="ngModel"/>
        <!-- {{ name.control | json }} -->
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="product-form-error" *ngIf="name.errors?.required">Name is required.</div>
          <div class="product-form-error" *ngIf="name.errors?.minlength">Name should be at least 5 characters.</div>
        </ng-container>
      </label>

      <label>
        <span>Icon</span>
        <select name="icon" class="input input--select" required ngModel>
          <option *ngFor="let icon of icons" [ngValue]="icon">{{ icon }}</option>
        </select>
      </label>

      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" required ngModel/>
      </label>

      <div class="product-form-radios">

        <p class="product-form-radios-label">Promo:</p>
        <label class="">
          <input class="" type="radio" name="promo" required [value]="undefined" ngModel/>
          <span>None</span>
        </label>

        <label class="">
          <input class="" type="radio" name="promo" required value="new" ngModel/>
          <span>New</span>
        </label>

        <label class="">
          <input class="" type="radio" name="promo" required value="limited" ngModel/>
          <span>Limited</span>
        </label>

      </div>

      <label class="">
          <span>Description</span>
          <textarea class="input input--textarea" name="description" required ngModel>
          </textarea>
        </label>

      <pre>{{ form.form.status | json }}</pre>
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
      &-error {
        font-size: 11px;
        color: #e66262;
      }
    }
  `
  ]
})
export class ProductFormComponent {

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleSubmit(form: NgForm) {}

}
