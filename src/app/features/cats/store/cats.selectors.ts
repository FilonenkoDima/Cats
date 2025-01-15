import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CatsReducer } from './cats.reducer';
import { CATS } from '../../../core/shared/constants/selectors.constants';

export namespace CatsSelectors {
  export const selectCatsState = createFeatureSelector<CatsReducer.State>(CATS);

  export const selectBreeds = createSelector(
    selectCatsState,
    (state) => state.breeds,
  );

  export const selectCats = createSelector(
    selectCatsState,
    (state) => state.cats,
  );
}
