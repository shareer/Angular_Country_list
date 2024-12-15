export type CountryFromApi = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  continents: string[];
  capital: string;
  flag?: string;
  region: string;
  area: number;
  flags?: FlagData;
};

export type TransformedCountry = {
  name: string;
  officialName: string;   
  population: number;
  continents: string[];
  capital: string;
  region: string;
  area: number;
  flagIcon?: string;   
  flagImage?: string;     
};

export type FlagData = {
  svg?: string;
  alt?: string;
  png?: string;
};

export type CountryTableData = {
  field: string;
  value: string | number | undefined;
};