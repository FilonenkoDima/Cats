import { createReducer, on } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';
import { breedsDataSuccess, catsDataSuccess } from './cats.actions';

export interface State {
  breeds: Breed[];
  cats: Cat[];
}

export const initialState: State = {
  breeds: [],
  cats: [],
};

export const catsReducer = createReducer(
  initialState,
  on(breedsDataSuccess, (state, { breeds }) => ({ ...state, breeds })),
  on(catsDataSuccess, (state, { cats }) => ({ ...state, cats })),
);
