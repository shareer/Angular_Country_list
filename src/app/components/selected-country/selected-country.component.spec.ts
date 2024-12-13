import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCountry } from './selected-country.component';

describe('SelectedCountry', () => {
  let component: SelectedCountry;
  let fixture: ComponentFixture<SelectedCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
