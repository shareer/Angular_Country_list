import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountryList } from './components/country-list/country-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CountryList,
        MatListModule,
        MatCardModule,
        HttpClientTestingModule,
        AppComponent, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the country-list component', () => {
    fixture.detectChanges(); // trigger change detection
    const countryListElement = fixture.nativeElement.querySelector('country-list');
    expect(countryListElement).toBeTruthy(); // Ensure the <country-list> element is present
  });
});
