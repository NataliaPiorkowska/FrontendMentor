import { Component } from '@angular/core';
import { ApiService } from '../../../services/api-service.service';
import { Advice } from '../../domain/advice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advice-card',
  standalone: true,
  imports: [AdviceCardComponent,CommonModule],
  templateUrl: './advice-card.component.html',
  styleUrl: './advice-card.component.scss'
})
export class AdviceCardComponent {
  advice: Advice = { slip: { id: 0, advice: '' } };
  constructor(private apiService: ApiService) {}

  reloadAdvice(){
    this.advice.slip.advice="";
    this.apiService.getAdvice().subscribe((data) => {
      this.advice = data;
    });
  }

}
