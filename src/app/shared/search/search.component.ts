import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],

  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  onSearch(searchText: string) {
    this.dataServices.searchText$.next(this.searchText);
    console.log(searchText);
  }
  constructor(private dataServices: DataService) {}
  ngOnInit(): void {
    this.dataServices.searchText$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchText) => {
        this.onSearch(searchText);
      });
  }
}
