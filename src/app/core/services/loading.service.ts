import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromShared } from '../shared/shared.selectors';
import { sharedActions } from '../shared/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private store = inject(Store);

  get isLoading$() {
    return this.store.select(fromShared.selectActiveHttpRequest);
  }

  loading() {
    this.store.dispatch(sharedActions.httpRequestStarted());
  }

  loaded() {
    this.store.dispatch(sharedActions.httpRequestEnded());
  }
}
