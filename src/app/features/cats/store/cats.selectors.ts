import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './cats.reducer';
import { CATS } from '../../../core/shared/constants/selectors.constants';

export const selectCatsState = createFeatureSelector<State>(CATS);

export const selectBreeds = createSelector(
  selectCatsState,
  (state) => state.breeds,
);

export const selectCats = createSelector(
  selectCatsState,
  (state) => state.cats,
);
