import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  template: `
    <div
      class="product-card"
      [ngClass]="{
        'product-card-promo': product.promo
      }"
    >
      <img
        src="/assets/img/{{ product.icon }}.svg"
        [alt]="product.name"
        class="product-card-icon"
      />
      <div>
        <p class="product-card-name">{{ product.name }}
        <ng-container [ngSwitch]="product.promo"]>
         <span *ngSwitchCase=" 'new'" class="product-card-lable">NEW</span>
         <span *ngSwitchCase=" 'limited'" class="product-card-lable">LIMITED</span>
        </ng-container>
        </p>

        <p class="product-card-price">
          {{ product.price + '.00' | currency : 'SEK ' }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .product-card {
        display: flex;
        align-items: center;
        background-color: #eeefec;
        border-radius: 4px;
        padding: 4px 12px;
        margin-bottom: 4px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-name {
          font-size: 16px;
        }
        &-lable {
          border: #c14583 1px solid;
          border-radius: 4px;
          padding: 0px 4px;
          margin-left: 4px;
          font-size: 12px;
          color: #c14583;
        }
        &-description {
          font-size: 12px;
          color: #a7a7a7;
          decoration: italic;
        }
      
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 40px;
          margin-right: 10px;
        }
        &-promo {
          border: #cfccaf 2px solid;
        }
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor() {}
}
