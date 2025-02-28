import { Component } from '@angular/core';

@Component({
  selector: 'top-header',
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  saleOff: string = '60%';

  a: number = 10;
  b: number = 20;
}
