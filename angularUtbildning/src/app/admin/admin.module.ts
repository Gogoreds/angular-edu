import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Containers
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductSingleComponent } from './containers/product-single/product-single.component';

// Components
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

// Services
import { ProductService } from './services/product.service';

// Guards

// Directives

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSingleComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ProductService],
  exports: [ProductListComponent, ProductSingleComponent],
})
export class AdminModule {}
