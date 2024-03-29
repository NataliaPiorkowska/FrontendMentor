import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() filterItems!: string[];
  @Output() removeFilterEvent = new EventEmitter<string>();

  removeFilter(filterItem: string) {
    this.removeFilterEvent.emit(filterItem)
  }
}
