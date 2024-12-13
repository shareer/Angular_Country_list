import { Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { HttpInterceptorService } from '../../interceptors/http-error.interceptor';
import { SelectedCountry } from '../selected-country/selected-country.component';
import { CountryItem } from '../country-item/country-item.component';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    CountryItem,
    HttpClientModule,
    SelectedCountry
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryList {
  countries: any[] = [];
  clickedItem: any = null;
  counter: number = 0;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe((data: any) => {
      this.countries = data || [];
    });
  }

  onItemClick(item: any) {
    this.counter++;
    this.clickedItem = item;
  }
}
