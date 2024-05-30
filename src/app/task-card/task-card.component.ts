import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input, Output, EventEmitter } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { TaskService } from '../Services/task.service';
import { emit } from 'process';



@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule,NgFor,CommonModule,MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  providers: [TaskService]
})
export class TaskCardComponent {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<void> = new EventEmitter();

  constructor(private taskService:TaskService, private dialog: MatDialog) {}

  editTask(task: Task): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
       data: task,
     });
 
     dialogRef.afterClosed().subscribe((result) => {
      if(result) {
       this.taskService.editTask(task).subscribe(() => {
        this.taskService.getTasks();
       });
      }
     });
   }
 

   deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.taskDeleted.emit();
    });
  }
}

