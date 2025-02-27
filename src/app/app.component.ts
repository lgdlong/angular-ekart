import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
