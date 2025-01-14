import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

import { CatHttpService } from '../../../core/services/cat-http.service';
import { loadBreeds, loadCats, loadedBreeds, loadedCats } from './cats.actions';
import { Breed, Cat } from '../cats.model';

@Injectable()
export class CatsEffect {
  private actions$ = inject(Actions);
  private httpCatService: CatHttpService = inject(CatHttpService);

  public loadBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBreeds),
      exhaustMap(() =>
        this.httpCatService.getCatBreeds().pipe(
          map((breeds) =>
            loadedBreeds({
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
      ofType(loadCats),
      exhaustMap((action) =>
        this.httpCatService.getCats(action.breedsId, action.count).pipe(
          map((cats) =>
            loadedCats({
              cats: cats.map(
                (cat): Cat => ({
                  imageUrl: cat.url,
                }),
              ),
            }),
          ),
        ),
      ),
    );
  });
}
