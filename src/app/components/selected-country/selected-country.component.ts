import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { CountryTableData, TransformedCountry } from '../../models/country.model';

@Component({
  selector: 'selected-country',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './selected-country.component.html',
  styleUrl: './selected-country.component.scss'
})

export class SelectedCountry implements OnChanges {
  @Input() country: TransformedCountry | null = null;  
  @Input() counter: number = 0;
  displayedColumns: string[] = ['field', 'value'];
  countryData: CountryTableData[] = [];
  dataSource = new MatTableDataSource(this.countryData);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['country'] && this.country) {
      this.countryData = [
        { field: 'Official Name', value: this.country.officialName },
        { field: 'Population', value: this.country.population },
        { field: 'Continents', value: this.country.continents.join(', ') },
        { field: 'Capital', value: this.country.capital },
        { field: 'Region', value: this.country.region },
        { field: 'Area', value: this.country.area },
      ];
      this.dataSource.data = this.countryData;
    }
  }
}
