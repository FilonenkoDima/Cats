import { createReducer, on } from '@ngrx/store';

import { Breed, Cat } from '../models/cats.model';
import { CatsActions } from './cats.actions';

export interface State {
  breeds: Breed[];
  cats: Cat[];
  isLoading: boolean;
}

export const initialState: State = {
  breeds: [],
  cats: [],
  isLoading: false,
};

export const catsReducer = createReducer(
  initialState,
  on(CatsActions.breedsDataSuccess, (state, { breeds }) => ({
    ...state,
    breeds,
  })),
  on(CatsActions.catsDataSuccess, (state, { cats }) => ({
    ...state,
    cats,
  })),
  on(CatsActions.setLoader, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
);
