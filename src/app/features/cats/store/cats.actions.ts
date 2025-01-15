import { createAction, props } from '@ngrx/store';

import { Breed, Cat } from '../cats.model';

export namespace CatsActions {
  export const breedsData = createAction('[API Cats] load breeds');
  export const breedsDataSuccess = createAction(
    '[API Cats] loaded breeds',
    props<{ breeds: Breed[] }>(),
  );
  export const catsData = createAction(
    '[API Cats] load cats',
    props<{ breedsId: string; count: number }>(),
  );
  export const catsDataSuccess = createAction(
    '[API Cats] loaded cats',
    props<{ cats: Cat[] }>(),
  );
}
