import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() product!: Product;
  @Output() cartUpdated = new EventEmitter<number>();

  cartQuantity: number = 0;
  newName: string = '';

  // getDiscountedPrice(product: Product): number {
  //   return product.price - (product.price * product.discountRate);
  // }

  // getInStockMessage(product: Product): string {
  //   return product.inStock > 0 ? `Only ${product.inStock} in stock` : 'Out of Stock';
  // }

  // incrementCartValue(): void {
  //   if (this.product && this.cartQuantity < this.product.inStock) {
  //     this.cartQuantity++;
  //     this.cartUpdated.emit(this.cartQuantity);
  //   }
  // }

  // decrementCartValue(): void {
  //   if (this.cartQuantity > 0) {
  //     this.cartQuantity--;
  //     this.cartUpdated.emit(this.cartQuantity);
  //   }
  // }

  changeName(newName: string): void {
    if (newName.trim()) {
      if (this.product) {
        this.product.name = newName;
      }
      this.newName = '';
    }
  }
}