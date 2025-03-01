import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TopHeaderComponent, ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
