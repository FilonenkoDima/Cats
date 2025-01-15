import { createReducer, on } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';
import { CatsActions } from './cats.actions';

export namespace CatsReducer {
  export interface State {
    breeds: Breed[];
    cats: Cat[];
    isLoadingBreeds: boolean;
    isLoadingCats: boolean;
  }

  export const initialState: State = {
    breeds: [],
    cats: [],
    isLoadingBreeds: true,
    isLoadingCats: true,
  };

  export const catsReducer = createReducer(
    initialState,
    on(CatsActions.breedsData, (state) => ({
      ...state,
      isLoadingBreeds: true,
    })),
    on(CatsActions.breedsDataSuccess, (state, { breeds }) => ({
      ...state,
      breeds,
      isLoadingBreeds: false,
    })),
    on(CatsActions.catsData, (state) => ({
      ...state,
      isLoadingCats: true,
    })),
    on(CatsActions.catsDataSuccess, (state, { cats }) => ({
      ...state,
      cats,
      isLoadingCats: false,
    })),
  );
}
