import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { 
  MAT_DIALOG_DATA, 
  MatDialogActions, 
  MatDialogClose, 
  MatDialogContent, 
  MatDialogRef, 
  MatDialogTitle 
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { Task } from '../task';
import { Status } from '../status';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatOption, MatSelectModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  statuses: string[] = ['To do', 'In Progress', 'Done'];

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {}

  save(): void {
    if (this.data.name && this.data.description && this.data.assignedTo && this.data.status == Status.ToDo || this.data.status == Status.InProgress || this.data.status == Status.Done) {
      this.dialogRef.close(this.data);
  }
}

  cancel(): void {
    this.dialogRef.close();
  }
}
