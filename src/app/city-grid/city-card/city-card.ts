import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../models/city.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

type CardViewModel = {
  city: City;
  avatarCssUrl: string;
  altText: string;
}

@Component({
  selector: 'app-city-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './city-card.html',
  styleUrl: './city-card.scss',
})
export class CityCard implements OnInit {
  @Input({required: true}) city!: City;
  protected cardViewModel: CardViewModel | undefined;

  ngOnInit() {
    this.cardViewModel = {
      city: this.city,
      avatarCssUrl: `url(${this.city.nationFlag})`,
      altText: `Photo of a ${this.city.name}`
    }
  }
}
