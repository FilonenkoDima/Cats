import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgSelectModule } from '@ng-select/ng-select';

import { Breed, Cat } from '../../core/models/cats.model';
import { CatsSelectors } from '../../core/store/cats.selectors';
import { CatsActions } from '../../core/store/cats.actions';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    NgbModule,
    MatPaginator,
    SlicePipe,
    MatButton,
    MatProgressSpinner,
    NgSelectModule,
  ],
})
export class CatsComponent implements OnInit {
  private store = inject(Store);
  private formBuilder: FormBuilder = inject(FormBuilder);

  breeds$: Observable<Breed[]> = this.store.select(CatsSelectors.selectBreeds);
  cats$: Observable<Cat[]> = this.store.select(CatsSelectors.selectCats);
  isLoading$: Observable<boolean> = this.store.select(
    CatsSelectors.selectLoading,
  );

  pageIndex: number = 0;
  pageSize: number = 4;
  pageSizeOptions: number[] = [4, 8, 12, 16, 20]; // Default values

  form = this.formBuilder.group({
    breedName: [''],
    count: [12],
  });

  ngOnInit() {
    this.cats$.pipe(takeUntilDestroyed()).subscribe((cats) => {
      this.pageSizeOptions = this.generatePageSizeOptions(cats.length);
    });
  }

  get startIndex(): number {
    return this.pageIndex * this.pageSize;
  }

  get endIndex(): number {
    return this.startIndex + this.pageSize;
  }

  onSubmit() {
    this.pageIndex = 0;
    this.store.dispatch(
      CatsActions.catsData({
        breedsId: this.form.value.breedName!,
        count: this.form.value.count!,
      }),
    );
  }

  getPaginatorData(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  private generatePageSizeOptions(length: number): number[] {
    const options = [4, 8, 12, 16, 20];
    return options.filter((option) => option <= length);
  }
}
