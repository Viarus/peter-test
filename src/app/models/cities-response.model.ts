interface CityResponse {
  CityName: string;
  CityImage: string;
  Nation: string;
  NationFlag: string;
  Population: number;
  Description: string;
}

export interface CitiesResponse {
  cities: CityResponse[];
}
