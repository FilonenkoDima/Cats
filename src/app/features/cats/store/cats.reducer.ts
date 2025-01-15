import { createReducer, on } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';
import { CatsActions } from './cats.actions';

export namespace CatsReducer {
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
    on(CatsActions.breedsDataSuccess, (state, { breeds }) => ({
      ...state,
      breeds,
    })),
    on(CatsActions.catsDataSuccess, (state, { cats }) => ({ ...state, cats })),
  );
}
