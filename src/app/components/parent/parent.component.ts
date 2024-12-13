import { Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { CountryService } from '../../services/country.service';
import { HttpInterceptorService } from '../../interceptors/http-error.interceptor';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    ChildComponent,
    HttpClientModule,
    CardComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
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
