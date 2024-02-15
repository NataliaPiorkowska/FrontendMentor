import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  advice: any = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAdvice().subscribe((data) => {
      this.advice = data;
    });
  }
}
