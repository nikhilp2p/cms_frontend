import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../services/user-management.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public user: User,
  public dialgref : MatDialogRef<ViewUserComponent>

              ) {}

              close(){
                this.dialgref.close();
              }
}
