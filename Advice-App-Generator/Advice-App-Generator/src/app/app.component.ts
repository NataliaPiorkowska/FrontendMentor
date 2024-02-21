import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdviceCardComponent } from './components/advice-card/advice-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HttpClientModule, CommonModule, AdviceCardComponent],
})
export class AppComponent {
  adviceElement = { slip: { id: 0, advice: '' } };
  constructor(private apiService: ApiService) {}
  onAdviceGenerated() {
    this.apiService.getAdvice().subscribe((data) => {
      this.adviceElement = data;
    });
  }
}
