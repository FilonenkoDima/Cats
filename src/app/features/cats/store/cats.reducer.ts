import { createReducer, on } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';
import { loadedBreeds, loadedCats } from './cats.actions';

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
  on(loadedBreeds, (state, { breeds }) => ({ ...state, breeds })),
  on(loadedCats, (state, { cats }) => ({ ...state, cats })),
);
