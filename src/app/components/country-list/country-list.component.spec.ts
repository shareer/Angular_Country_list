import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryList } from './country-list.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from '../../services/country.service';
import { SelectedCountry } from '../selected-country/selected-country.component';
import { CountryItem } from '../country-item/country-item.component';

describe('CountryList', () => {
  let component: CountryList;
  let fixture: ComponentFixture<CountryList>;
  let httpTestingController: HttpTestingController;
  let countryService: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatListModule,
        MatSlideToggleModule,
        MatCardModule,
        HttpClientTestingModule,
        CountryItem,
        SelectedCountry,
        CountryList,
      ],
      providers: [CountryService],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryList);
    component = fixture.componentInstance;

    httpTestingController = TestBed.inject(HttpTestingController);
    countryService = TestBed.inject(CountryService);
  });

  it('should create the country list component', () => {
    expect(component).toBeTruthy();
  });

  it('should load countries from the service', () => {
    const mockCountries = [{ name: 'India' }, { name: 'USA' }];
    fixture.detectChanges();

    const req = httpTestingController.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries);

    fixture.detectChanges();

    expect(component.countries.length).toBeGreaterThan(0);
    expect(component.countries).toEqual(mockCountries as any);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
