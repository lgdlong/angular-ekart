import { Component } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-container',
  imports: [ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
