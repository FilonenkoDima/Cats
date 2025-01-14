import { Routes } from '@angular/router';

import { catsResolve } from './app/core/resolvers/cats.resolve';
import { breedsResolve } from './app/core/resolvers/breeds.resolve';
import { CatsComponent } from './app/features/cats/cats.component';
import {
  CATS,
  INVALID_PATH,
} from './app/core/shared/constants/route.constants';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: CATS,
    pathMatch: 'full',
  },
  {
    path: CATS,
    component: CatsComponent,
    resolve: [catsResolve, breedsResolve],
  },
  {
    path: INVALID_PATH,
    redirectTo: 'cats',
  },
];
