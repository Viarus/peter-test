import {createActionGroup, props} from '@ngrx/store';
import {City} from '../models/city.model';

export const CitiesApiActions = createActionGroup({
  source: 'Cities API',
  events: {
    'Retrieved Cities List': props<{cities: ReadonlyArray<City>}>(),
  }
})
