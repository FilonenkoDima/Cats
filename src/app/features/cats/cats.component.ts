import { Component, inject, OnInit } from '@angular/core';
import { CatHttpServiceService } from '../../core/services/cat-http-service.service';

@Component({
  selector: 'app-cats',
  imports: [],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
  standalone: true,
})
export class CatsComponent implements OnInit {
  private catsHttpService = inject(CatHttpServiceService);
  ngOnInit() {
    this.catsHttpService.getBengCats().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log('Error fetching data:', error),
    });
  }
}
