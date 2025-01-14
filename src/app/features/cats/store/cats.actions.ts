import { createAction, props } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';

export const loadBreeds = createAction('[API Cats] load breeds');
export const loadedBreeds = createAction(
  '[API Cats] loaded breeds',
  props<{ breeds: Breed[] }>(),
);
export const loadCats = createAction(
  '[API Cats] load cats',
  props<{ breedsId: string; count: number }>(),
);
export const loadedCats = createAction(
  '[API Cats] loaded cats',
  props<{ cats: Cat[] }>(),
);
