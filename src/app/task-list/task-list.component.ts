import { Component, OnInit } from '@angular/core'; // Correctly import OnInit
import { Task } from '../task';
import { NgFor, CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../Services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Status } from '../status';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, CommonModule, FilterComponent, MatIconModule, EditTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'], 
  providers: [TaskService]
})
export class TaskListComponent implements OnInit { 
  tasks: Task[] = [];d
  filteredTasks: Task[] = []; 

  constructor(
    private taskService: TaskService, private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = tasks; 
    });
  }

  handleStatusSelected(status: Status) {
    this.filteredTasks = this.tasks.filter((task) => task.status === status);
  }

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
       data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
       console.log('The dialog was closed');
    });
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getTasks();
    });
  }
}
