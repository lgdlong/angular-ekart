import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SearchComponent } from './search/search.component';
import { ProductViewComponent } from "./product-view/product-view.component";
import { Product } from './product.model'; // Import Product interface
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, SearchComponent, ProductViewComponent, FormsModule], // Add CommonModule
})

export class ProductListComponent {
  constructor(private cdr: ChangeDetectorRef) { }
  addToCart: number = 0;

  @Input() filteredProducts?: Product[]; // Optional input for filtered products

  _products: Product[] = [
    { id: 1, name: 'iPhone 13', price: 999, color: 'Matter Black', discountRate: 0.2, inStock: 10, imgPath: 'assets/iphone-13.png' },
    { id: 2, name: 'Samsung Galaxy S21', price: 799, color: 'Phantom Gray', discountRate: 0.3, inStock: 5, imgPath: 'assets/ss-s21.png' },
    { id: 3, name: 'Google Pixel 6', price: 599, color: 'Stormy Black', discountRate: 0.4, inStock: 3, imgPath: 'assets/gg-pixel-6.png' }
  ];

  displayedProducts: Product[] = this._products;

  onSearch(searchText: string) {
    this.displayedProducts = this._products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  onChangeName(pro: Product, newName: string): void {
    console.log('Changing name to:', newName);
    pro.name = newName;
    this.cdr.detectChanges();
  }

  incrementCartValue(pro: Product): void {
    if (this.addToCart < pro.inStock) {
      this.addToCart++;
    }
  }

  decrementCartValue(): void {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
}