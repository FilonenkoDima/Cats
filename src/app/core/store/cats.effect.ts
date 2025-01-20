import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';

import { CatHttpService } from '../services/cat-http.service';
import { Breed, Cat } from '../models/cats.model';
import { CatsActions } from './cats.actions';

@Injectable()
export class CatsEffect {
  private actions$ = inject(Actions);
  private httpCatService: CatHttpService = inject(CatHttpService);
  private store: Store = inject(Store);

  public loadBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatsActions.breedsData),
      exhaustMap(() =>
        this.httpCatService.getCatBreeds().pipe(
          map((breeds) =>
            CatsActions.breedsDataSuccess({
              breeds: breeds.map(
                (breed): Breed => ({
                  id: breed.id,
                  name: breed.name,
                }),
              ),
            }),
          ),
        ),
      ),
    );
  });

  public loadCats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatsActions.catsData),
      exhaustMap((action) => {
        this.store.dispatch(CatsActions.setLoader({ isLoading: true }));
        return this.httpCatService.getCats(action.breedsId, action.count).pipe(
          switchMap((cats) => [
            CatsActions.catsDataSuccess({
              cats: cats.map((cat): Cat => ({ url: cat.url })),
            }),
            CatsActions.setLoader({ isLoading: false }),
          ]),
        );
      }),
    );
  });
}
