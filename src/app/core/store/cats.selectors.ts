import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './cats.reducer';
import { CATS } from '../constants/selectors.constants';

export namespace CatsSelectors {
  export const selectCatsState = createFeatureSelector<State>(CATS);

  export const selectBreeds = createSelector(
    selectCatsState,
    (state) => state.breeds,
  );

  export const selectCats = createSelector(
    selectCatsState,
    (state) => state.cats,
  );

  export const selectLoading = createSelector(
    selectCatsState,
    (state) => state.isLoading,
  );
}
