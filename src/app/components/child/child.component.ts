import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatListModule, CardComponent]
})
export class ChildComponent {
  @Input() country: any;
  @Output() itemClick = new EventEmitter<any>();

  onCountryClick(): void {
    this.itemClick.emit(this.country);
  }
}