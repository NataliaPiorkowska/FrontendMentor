import { Component } from '@angular/core';
import { CardComponent } from './card/card/card.component';
import { Card } from './domain/card';
import { JobsService } from './services/jobs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CardComponent,NgFor],
})
export class AppComponent {
  title = 'static-job-listings-master';
  data!: Card[];

  constructor(private jobService: JobsService) {}

  ngOnInit() {
    this.jobService.getData().subscribe((jobs) => {
      this.data = jobs;
      console.log(this.data)
    });
  }
}
