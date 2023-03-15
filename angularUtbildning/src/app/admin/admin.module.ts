import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Containers
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductSingleComponent } from './containers/product-single/product-single.component';

// Components
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

// Services

// Guards

// Directives

@NgModule({
  declarations: [ProductListComponent, ProductSingleComponent, ProductCardComponent, ProductFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductListComponent, ProductSingleComponent],
})
export class AdminModule {}
