import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryItem } from './country-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('CountryItem', () => {
  let component: CountryItem;
  let fixture: ComponentFixture<CountryItem>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCardModule, MatListModule, CountryItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryItem);
    component = fixture.componentInstance;

    component.country = { name: 'India' };
    fixture.detectChanges(); 
  });

  it('should create the country item component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the country on click', () => {
    spyOn(component.itemClick, 'emit');
    component.onCountryClick();
    expect(component.itemClick.emit).toHaveBeenCalledWith({ name: 'India' });
  });
});
