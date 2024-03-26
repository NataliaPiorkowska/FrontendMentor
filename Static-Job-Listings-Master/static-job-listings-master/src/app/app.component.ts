import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card/card.component';
import { Card } from './domain/card';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CardComponent],
})
export class AppComponent {
  title = 'static-job-listings-master';
  data!: Card[];

  constructor(private jobService: JobsService) {}

  ngOnInit() {
    this.jobService.getData().subscribe((jobs) => {
      this.data = jobs;
    });
  }
}
