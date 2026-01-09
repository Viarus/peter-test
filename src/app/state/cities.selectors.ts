import {createFeatureSelector} from '@ngrx/store';
import {City} from '../models/city.model';

export const selectCities = createFeatureSelector<ReadonlyArray<City>>('cities');
