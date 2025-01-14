import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';

import { Cat } from '../../features/cats/cats.model';
import { CatHttpService } from '../shared/services/cat-http.service';

export const catsResolve: ResolveFn<Observable<Cat[]>> = () => {
  return inject(CatHttpService).getCats();
};
