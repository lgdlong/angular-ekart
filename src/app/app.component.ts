import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeaderTagComponent } from "./header/header-tag.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeaderTagComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
