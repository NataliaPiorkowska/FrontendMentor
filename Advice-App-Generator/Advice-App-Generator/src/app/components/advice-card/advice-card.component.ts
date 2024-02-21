import { Component, Input } from '@angular/core';
import { Advice } from '../../domain/advice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advice-card',
  standalone: true,
  imports: [AdviceCardComponent, CommonModule],
  templateUrl: './advice-card.component.html',
  styleUrl: './advice-card.component.scss',
})
export class AdviceCardComponent {
  @Input() element!: Advice;
}
