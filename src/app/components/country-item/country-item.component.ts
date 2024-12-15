import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'country-item',
  standalone: true,
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatListModule]
})
export class CountryItem {
  @Input() country: any;
  @Output() itemClick = new EventEmitter<any>();


  

  onCountryClick(): void {
    console.log("country", this.country);
    this.itemClick.emit(this.country); 
  }
}
