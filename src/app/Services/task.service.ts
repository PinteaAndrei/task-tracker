import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Status } from '../status';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  

  //private baseURL = "https://tasksapi20240226164535.azurewebsites.net/api/Tasks";
  private baseURL = "http://localhost:5189/Task"

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseURL, this.httpOptions);
  }

  addTask(newTask: Task) {
    return this.httpClient.post<Task>(this.baseURL, newTask, { headers: this.httpOptions.headers, responseType: 'text' as 'json' });
  }


  editTask(task: Task) {
    return this.httpClient.put<Task>(`${this.baseURL}/${task.id}`, task);
  }
    

  deleteTask(taskId: string) {
    return this.httpClient.delete<void>(`${this.baseURL}/${taskId}`,{ headers: this.httpOptions.headers, responseType: 'text' as 'json' });
  }

}
