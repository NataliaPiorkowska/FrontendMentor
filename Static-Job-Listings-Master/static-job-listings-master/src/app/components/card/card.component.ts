import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../domain/card';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardData!: Card;
  @Output() newFilterEvent = new EventEmitter<string>();
  isHovered: boolean = false;

  setFilter(item: string) {
    this.newFilterEvent.emit(item);
  }
}
