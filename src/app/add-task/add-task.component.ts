import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../Services/task.service';
import { Status } from '../status';
import { Task } from '../task';
import { NotificationService } from '../notification.service';

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
  

  constructor(private router: Router, private taskService:TaskService,private notificationService:NotificationService) {}

  onSubmit() {
    // Asigură-te că taskName și taskDescription nu sunt goale
    if (this.taskName && this.taskDescription) {
      const newTask = <Task>{
        // Verifică dacă aceste proprietăți se potrivesc cu interfața Task din serviciul tău
        name: this.taskName, // Presupunând că Task are o proprietate 'title' în loc de 'name'
        description: this.taskDescription,
        assignedTo: 'Me',
        status: Status.ToDo
      };
      this.taskService.addTask(newTask)
      .subscribe(task => {
        this.notificationService.sendMessage("BroadcastMessage", [task])
        
        this.router.navigate(['/']);
      });

    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
  
}
