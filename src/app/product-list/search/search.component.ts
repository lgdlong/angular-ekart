import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule, FormsModule] // Add FormsModule
})
export class SearchComponent {
  searchText: string = ''; // Align with template (not searchName)

  showResult: boolean = false;

  searching(name: string): void {
    this.showResult = true;
    console.log(`Searching for: ${name}`);
  }

  showSearchingText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
    this.searching(this.searchText);
  }
}