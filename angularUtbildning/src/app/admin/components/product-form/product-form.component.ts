import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'app/admin/models/product.model';

@Component({
  selector: 'app-product-form',
  template: `
    <form class="product-form" #form="ngForm" *ngIf="product; else loading">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="product.name"
          [ngModelOptions]="{ updateOn: 'blur' }"
          #name="ngModel"
        />
        <!-- {{ name.control | json }} -->
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="product-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
          <div class="product-form-error" *ngIf="name.errors?.minlength">
            Name should be at least 5 characters.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="product.icon"
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="product-form-error" *ngIf="icon.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Price</span>
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="product.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="product-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>

      <div class="product-form-radios">
        <p class="product-form-radios-label">Promo:</p>
        <label class="">
          <input
            class=""
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="product.promo"
          />
          <span>None</span>
        </label>

        <label class="">
          <input class="" type="radio" name="promo" value="new" ngModel />
          <span>New</span>
        </label>

        <label class="">
          <input class="" type="radio" name="promo" value="limited" ngModel />
          <span>Limited</span>
        </label>
      </div>

      <label class="">
        <span>Description</span>
        <textarea
          class="input input--textarea"
          name="description"
          required
          ngModel
          #description="ngModel"
        >
        </textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="product-form-error" *ngIf="description.errors?.required">
            Description is required.
          </div>
        </ng-container>
      </label>

      <button type="button" class="btn btn--green" (click)="handleCreate(form)">
        Create
      </button>
      <button type="button" class="btn btn--green" (click)="handleUpdate(form)">
        Update
      </button>
      <button type="button" class="btn btn--green" (click)="handleDelete()">
        Delete
      </button>
      <button type="button" class="btn btn--grey" (click)="form.resetForm()">
        Reset Form
      </button>

      <div class="product-form-working" *ngIf="form.valid && form.submitted">
        Working...
      </div>
    </form>

    <ng-template #loading>
      <div class="product-form-working">Loading...</div>
    </ng-template>
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
        &-working {
          font-style: italic;
          font-size: 11px;
          margin: 10px;
        }
        &-error {
          font-size: 11px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class ProductFormComponent {
  @Input() product!: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.product.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm('Are you sure you want to delete ${this.product.name}?')) {
      this.delete.emit({ ...this.product });
    }
  }
}
