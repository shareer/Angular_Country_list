import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [CountryService], // Provide the service
    });

    service = TestBed.inject(CountryService);
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch countries from the API', () => {
    const mockCountries = [{ name: 'India' }, { name: 'USA' }];

    // Call the service method to get countries
    service.getCountries().subscribe((countries) => {
      expect(countries.length).toBe(2);
      expect(countries).toEqual(mockCountries);
    });

    // Mock the API call
    const req = httpMock.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toBe('GET');
    req.flush(mockCountries); // Provide the mock response

    // Verify there are no outstanding requests
    httpMock.verify();
  });
});
