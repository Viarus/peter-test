import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {CitiesApiActions} from './state/cities.actions';
import {City} from './models/city.model';
import {CityCard} from './city-grid/city-card/city-card';
import {selectCities} from './state/cities.selectors';
import {first, map, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {CitiesResponse} from './models/cities-response.model';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [
    CityCard,
    AsyncPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private httpClient: HttpClient = inject(HttpClient);
  private readonly store = inject(Store);
  protected cities$: Observable<readonly City[]> = this.store.select(selectCities);

  constructor() {
    this.httpClient
      .get<CitiesResponse>('assets/cities.json')
      .pipe(
        first(),
        takeUntilDestroyed(),
        map(r => r.cities.map<City>(c => ({
          name: c.CityName,
          nation: c.Nation,
          nationFlag: c.NationFlag,
          description: c.Description,
          population: c.Population,
          cityImage: c.CityImage
        }))))
      .subscribe(cities => {
        this.store.dispatch(CitiesApiActions.retrievedCitiesList({cities}))
      });
  }
}
