import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Store } from '@ngrx/store';
import { CatsActions } from '../../features/cats/store/cats.actions';

export const catsResolve: ResolveFn<void> = () => {
  return inject(Store).dispatch(
    CatsActions.catsData({ breedsId: '', count: 12 }),
  );
};
