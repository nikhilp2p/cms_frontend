import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AddchargermodelComponent } from '../../layout/addchargermodel/addchargermodel.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


export interface Charger {
  id: number;
  chargerId: string;
  model: string;
  location: string;
  status: string;
}
let idCounter = 0; // or fetch last ID from backend


@Component({
  selector: 'app-manage-chargers',
  standalone: true,
  imports: [CommonModule, MatTableModule, AddchargermodelComponent,MatIconModule, MatButtonModule],
  templateUrl: './manage-charger.component.html',
  styleUrls: ['./manage-charger.component.scss']
})
export class ManageChargersComponent {
  displayedColumns: string[] = ['chargerId', 'model', 'location', 'status', 'action'];
  dataSource = [
    { chargerId: 'CH001', model: 'Bulk Charger', location: 'Mumbai', status: 'Active' },
    { chargerId: 'CH002', model: 'Swapping Station', location: 'Delhi', status: 'Inactive' }
  ];






  // my code , what i changed
  constructor(private dialog: MatDialog){}
  onView(id:number){

  };

   // my code 
    onEdit(element: any) {
      const dialogRef = this.dialog.open(AddchargermodelComponent, {
        width: '300px',
        height: '90vh',
       
    
        position: {
          right: '0',
         top: '62px', 
        },
        
        //data: element // pass existing data
        data: {
          mode: 'edit',     // or 'add'
          charger: element // only for edit mode
        }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const updatedData = this.dataSource.map((charger:any) =>
            charger.id === element.id ? { ...charger, ...result } : charger
          );
          this.dataSource = [...updatedData];
        }
      });
    }
    
  
    onDelete(id: string) {
      // if (confirm('Are you sure you want to delete this model?')) {
      //   this.chargerModelService.delete(id).subscribe(() => {
      //     this.loadData(); // Reload list after delete
      //   });
      // }
    }
  
    // my code 
  
    
  
  
  
  
  addNewCharger() {
    const newCharger: Charger = {
      id: idCounter++,
 
  model: 'New Model',
  location: 'New Description',
  status: 'Active',
  chargerId: 'Default Location'
    };
  
    const updatedData = this.dataSource;
    updatedData.push(newCharger);
    this.dataSource = [...updatedData]; // trigger table update
  }
  
  
  // add charger
  
  
  
  openAddChargerDialog() {
    const dialogRef = this.dialog.open(AddchargermodelComponent, {
      width: '300px',
      height: '90vh',
     
  
      position: {
        right: '0',
       top: '62px', 
      },
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCharger = {
          id: idCounter++,
          ...result
        };
        const updatedData = this.dataSource;
        updatedData.push(newCharger);
        this.dataSource = [...updatedData];
      }
    });
  }
  
}
