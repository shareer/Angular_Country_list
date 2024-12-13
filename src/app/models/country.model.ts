export type Country = {
    name: {
      common: string;
      official: string;
    };
    population: number;
    continents: string[];
    capital: string;
    flag: string;
    region: string;
    area: number;
    flags?: FlagData;
  };
  
  export type CountryData = {
    field: string;
    value: string | number | undefined;
  };

  export type FlagData = {
    svg?: string;
    alt?: string;
    png?: string;
  }
  