import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

import { CatHttpService } from '../../../core/shared/services/cat-http.service';
import { Breed, Cat } from '../cats.model';
import { CatsActions } from './cats.actions';

@Injectable()
export class CatsEffect {
  private actions$ = inject(Actions);
  private httpCatService: CatHttpService = inject(CatHttpService);

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
      exhaustMap((action) =>
        this.httpCatService.getCats(action.breedsId, action.count).pipe(
          map((cats) =>
            CatsActions.catsDataSuccess({
              cats: cats.map(
                (cat): Cat => ({
                  url: cat.url,
                }),
              ),
            }),
          ),
        ),
      ),
    );
  });
}
