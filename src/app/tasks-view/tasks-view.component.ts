import { Component } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Status } from '../status';
import { Task } from '../task';
import { TaskListComponent } from '../task-list/task-list.component';
import {MatIconModule} from '@angular/material/icon';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent,TaskListComponent,MatIconModule,NgFor,NgIf],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent {
    isList;
    tasks: Task[] = [];
}
