import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Status } from '../status';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  providers: [TaskService]
})
export class AddTaskComponent {
  taskName: string = '';
  taskDescription: string = '';
  

  constructor(private router: Router, private taskService:TaskService) {}

  onSubmit() {
    console.log('Task Title:', this.taskName);
    console.log('Description:', this.taskDescription);
  }

  cancel() {
    this.router.navigate(['/']); 
  }

  addTask() {
    const newTask = <Task>{
      name: this.taskName,
      description: this.taskDescription,
      status: Status.ToDo
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        console.log('Task added successfully:', task);
        this.router.navigate(['/']);
      });

    this.router.navigate(['/']);
  }
}
