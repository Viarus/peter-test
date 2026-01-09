import {City} from '../models/city.model';
import {createReducer, on} from '@ngrx/store';
import {CitiesApiActions} from './cities.actions';

export const initialState: ReadonlyArray<City> = [];
export const citiesReducer = createReducer(
  initialState,
  on(CitiesApiActions.retrievedCitiesList, (_state, { cities }) => cities),
)
