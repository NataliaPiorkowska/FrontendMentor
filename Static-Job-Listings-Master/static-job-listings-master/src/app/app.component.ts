import { Component } from '@angular/core';
import { Card } from './domain/card';
import { JobsService } from './services/jobs.service';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter/filter.component';
import { ActivatedRoute, Router } from '@angular/router';

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
  dataBackup!: Card[];
  filterComponent: boolean = false;
  filterItems: string[] = [];

  constructor(
    private jobService: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobService.getData().subscribe((jobs) => {
      this.data = jobs;
      this.dataBackup = jobs;
    });

    this.route.queryParams.subscribe((params) => {
      const filters = params['filters'];
      if (filters) {
        this.filterItems = filters
          .split('&')
          .map((param: string) => param.split('=')[1]);
        this.findJob();
      }
    });
  }

  addFilter(newFilter: string) {
    this.filterComponent = true;
    const index = this.filterItems.indexOf(newFilter);
    if (index > -1) {
    } else {
      this.filterItems.push(newFilter);
      this.findJob();
      this.updateRoute();
    }
  }

  removeFilter(filterItem: string) {
    const index = this.filterItems.indexOf(filterItem);
    if (index > -1) {
      this.filterItems.splice(index, 1);
      this.findJob();
      this.updateRoute();
    }
    if (this.filterItems.length == 0) {
      this.filterComponent = false;
    }
  }

  findJob() {
    this.data = this.dataBackup.filter((job) => {
      return this.filterItems.every(
        (filterItem) =>
          job.tools.includes(filterItem) || job.languages.includes(filterItem)
      );
    });
  }
  updateRoute() {
    const queryParams = { filters: this.filterItems };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
