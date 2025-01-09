import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './cats.reducer';

export const selectCatsState = createFeatureSelector<State>('cats');

export const selectBreeds = createSelector(
  selectCatsState,
  (state) => state.breeds,
);

export const selectCats = createSelector(
  selectCatsState,
  (state) => state.cats,
);
