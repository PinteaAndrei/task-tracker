import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './notification.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, TasksViewComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'task-tracker';

  constructor(private notificationService: NotificationService)
  {
    
  }


  ngOnInit(): void {
    this.notificationService.initWebSocket();
  }
}
