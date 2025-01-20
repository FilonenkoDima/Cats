import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';

import { CatsActions } from '../../store/cats.actions';

export const breedsResolve: ResolveFn<void> = () => {
  return inject(Store).dispatch(CatsActions.breedsData());
};
