import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TopHeaderComponent } from './top-header/top-header.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TopHeaderComponent, ContainerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}