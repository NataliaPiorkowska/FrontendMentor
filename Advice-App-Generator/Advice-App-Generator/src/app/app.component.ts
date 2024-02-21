import { Component, Output } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Advice } from './domain/advice';
import { CommonModule } from '@angular/common';
import { AdviceCardComponent } from './components/advice-card/advice-card.component';
import { EventEmitter } from 'stream';

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
    this.adviceElement.slip.advice = '';
    this.apiService.getAdvice().subscribe((data) => {
      this.adviceElement = data;
    });
  }
}
