import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import  { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-charger-variant',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIcon, MatIconModule, MatButtonModule],
 templateUrl: './charger-variant.component.html',
  styleUrls: ['./charger-variant.component.scss']
})
export class ChargerVariantComponent {
  displayedColumns: string[] = ['variant', 'description', 'status', 'action'];
  dataSource = [
    { variant: '8 Channel', description: 'Bulk variant', status: 'Active' },
    { variant: '16 Channel', description: 'Advanced variant', status: 'Inactive' }
  ];
}
