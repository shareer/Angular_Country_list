import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryItem } from './country-item.component';

describe('CountryItem', () => {
  let component: CountryItem;
  let fixture: ComponentFixture<CountryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
