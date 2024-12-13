import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryList } from './components/country-list/country-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, CountryList],
})
export class AppComponent {}
