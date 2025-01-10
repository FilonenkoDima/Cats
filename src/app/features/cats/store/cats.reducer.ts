import { Breed, Cat } from '../cats.model';
import { createReducer, on } from '@ngrx/store';
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
  on(loadedBreeds, (state, action) => ({
    ...state,
    breeds: [...action.breeds],
  })),
  on(loadedCats, (state, action) => ({
    ...state,
    cats: [...action.cats],
  })),
);
