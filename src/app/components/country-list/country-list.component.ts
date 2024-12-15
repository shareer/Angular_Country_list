import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CountryService } from '../../services/country.service';
import { SelectedCountry } from '../selected-country/selected-country.component';
import { CountryItem } from '../country-item/country-item.component';
import { Country } from '../../models/country.model';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    CountryItem,
    SelectedCountry,
  ],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryList {
  countries: Country[] = [];
  clickedItem = null;
  counter: number = 0;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe({
      next: (data: any) => {
        this.countries = data || [];
      },
      error: (err) => {
        console.error('Error fetching countries:', err);
      },
    });
  }

  onItemClick(item: any) {
    this.counter++;
    this.clickedItem = item;
  }
}
