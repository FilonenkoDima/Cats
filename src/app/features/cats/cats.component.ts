import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';

import { Breed, Cat } from './cats.model';
import { CatsSelectors } from './store/cats.selectors';
import { CatsActions } from './store/cats.actions';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    NgbModule,
    MatPaginator,
    SlicePipe,
    MatButton,
  ],
})
export class CatsComponent {
  private store = inject(Store);
  private formBuilder: FormBuilder = inject(FormBuilder);

  breeds$: Observable<Breed[]>;
  cats$: Observable<Cat[]>;

  pageIndex: number = 0;
  pageSize: number = 4;

  form = this.formBuilder.group({
    breedName: [''],
    count: [12],
  });

  constructor() {
    this.breeds$ = this.store
      .select(CatsSelectors.selectBreeds)
      .pipe(takeUntilDestroyed());
    this.cats$ = this.store
      .select(CatsSelectors.selectCats)
      .pipe(takeUntilDestroyed());
  }

  get startIndex(): number {
    return this.pageIndex * this.pageSize;
  }

  get endIndex(): number {
    return this.startIndex + this.pageSize;
  }

  onSubmit() {
    this.pageIndex = 0;
    const name = this.form.value.breedName ?? '';
    const count = this.form.value.count!;

    this.breeds$
      .pipe(
        map((breeds) => {
          const id = this.getBreedsIdByName(breeds, name);
          this.store.dispatch(
            CatsActions.catsData({ breedsId: id, count: count }),
          );
        }),
      )
      .subscribe();
  }

  getPaginatorData(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  private getBreedsIdByName(breeds: Breed[], name: string) {
    if (!name) {
      return '';
    }
    const breed = breeds.find((b) => b.name === name);
    if (!breed) {
      alert(`${name} not found, try again!`);
    }
    return breed!.id;
  }
}
