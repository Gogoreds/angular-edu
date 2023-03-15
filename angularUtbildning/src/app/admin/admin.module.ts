import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductSingleComponent } from './containers/product-single/product-single.component';

// Components
import { ProductCardComponent } from './components/product-card/product-card.component';

// Services

// Guards

// Directives

@NgModule({
  declarations: [ProductListComponent, ProductSingleComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductListComponent, ProductSingleComponent],
})
export class AdminModule {}
