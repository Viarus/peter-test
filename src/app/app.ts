import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CitiesResponse} from './models/cities-request.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  protected cities: CitiesResponse | undefined;
  protected readonly title = signal('peter-test');

  ngOnInit() {
    this.httpClient
      .get<CitiesResponse>('assets/cities.json')
      .subscribe(result => {
        this.cities = result;
      });
  }
}
