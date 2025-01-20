import { Routes } from '@angular/router';

import { catsResolve } from './app/core/api/resolvers/cats.resolve';
import { breedsResolve } from './app/core/api/resolvers/breeds.resolve';
import { CatsComponent } from './app/views/cats/cats.component';
import { CATS, INVALID_PATH } from './app/core/constants/route.constants';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: CATS,
    pathMatch: 'full',
    resolve: [catsResolve, breedsResolve],
  },
  {
    path: CATS,
    component: CatsComponent,
    resolve: [catsResolve, breedsResolve],
  },
  {
    path: INVALID_PATH,
    redirectTo: CATS,
  },
];
