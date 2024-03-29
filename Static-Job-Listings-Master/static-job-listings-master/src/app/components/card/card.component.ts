import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../domain/card';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardData!: Card;
  @Output() newFilterEvent = new EventEmitter<string>();
  ngOnInit() {

  }

  setFilter(item: string) {
    this.newFilterEvent.emit(item);
  }
}
