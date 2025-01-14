import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

import { CatHttpService } from '../shared/services/cat-http.service';
import { Breed } from '../../features/cats/cats.model';

export const breedsResolve: ResolveFn<Observable<Breed[]>> = () => {
  return inject(CatHttpService).getCatBreeds();
};
