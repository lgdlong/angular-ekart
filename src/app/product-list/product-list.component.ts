import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  discountRate: number;
  inStock: number;
  imgPath?: string;
}

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'iPhone 13', price: 999, color: 'Matter Black', discountRate: 0.2, inStock: 10, imgPath: 'asset/iphone-13.png' },
    { id: 2, name: 'Samsung Galaxy S21', price: 799, color: 'Phantom Gray', discountRate: 0.3, inStock: 5, imgPath: '../asset/ss-s21.png' },
    { id: 3, name: 'Google Pixel 6', price: 599, color: 'Stormy Black', discountRate: 0.4, inStock: 3, imgPath: 'asset/gg-pixel-6.png' }
  ];

  getDiscountedPrice(pro: Product): number {
    return pro.price - (pro.price * pro.discountRate);
  }

  getInStockMessage(pro: Product): string {
    return pro.inStock > 0 ? `Only ${pro.inStock} in sotck` : 'Out of Stock';
  }
}
