import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {CitiesApiActions} from './state/cities.actions';
import {City} from './models/city.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  private readonly store = inject(Store);
  protected readonly title = signal('peter-test');

  ngOnInit() {
    this.httpClient
      .get<City[]>('assets/cities.json')
      .subscribe(cities => {
        this.store.dispatch(CitiesApiActions.retrievedCitiesList({cities}))
      });
  }
}
