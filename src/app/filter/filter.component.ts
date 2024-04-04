import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Status } from '../status';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  statuses = Object.values(Status);

  @Output() statusSelected: EventEmitter<Status> = new EventEmitter();

  ngOnInit(): void {
  }

  selectStatus(status: Status): void {
    this.statusSelected.emit(status);
    console.log(status);
  }
}
