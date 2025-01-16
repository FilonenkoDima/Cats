import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

import { catsApiInterceptor } from './app/core/api/interceptors/cats-api.interceptor';
import { catsReducer } from './app/core/store/cats.reducer';
import { CatsEffect } from './app/core/store/cats.effect';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([catsApiInterceptor])),
    provideAnimationsAsync(),
    provideStore({ cats: catsReducer }),
    provideEffects(CatsEffect),
    provideRouter(appRoutes),
  ],
};
