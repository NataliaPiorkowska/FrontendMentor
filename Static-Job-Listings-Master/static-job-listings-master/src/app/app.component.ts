import { Component } from '@angular/core';
import { Card } from './domain/card';
import { JobsService } from './services/jobs.service';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CardComponent, NgFor, FilterComponent, NgIf],
})
export class AppComponent {
  title = 'static-job-listings-master';
  data!: Card[];
  filterComponent: boolean = false;
  filterItems: string[] = [];

  constructor(private jobService: JobsService) {}

  ngOnInit() {
    this.jobService.getData().subscribe((jobs) => {
      this.data = jobs;
    });
  }

  addFilter(newFilter: string) {
    this.filterComponent = true;
    this.filterItems.push(newFilter);
  }

  removeFilter(filterItem: string) {
    const index = this.filterItems.indexOf(filterItem);
    if (index > -1) {
      this.filterItems.splice(index, 1);
    }
    if (this.filterItems.length == 0) {
      this.filterComponent = false;
    }
  }
}
