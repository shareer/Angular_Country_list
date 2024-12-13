import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'selected-country',
  imports: [MatCardModule, MatListModule],
  templateUrl: './selected-country.component.html',
  styleUrl: './selected-country.component.scss'
})
export class SelectedCountry {
  @Input() country: any;
}
