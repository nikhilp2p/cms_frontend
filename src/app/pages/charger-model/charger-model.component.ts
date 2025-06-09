import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChargerModelService } from '../../services/charger-model.service';
import { MatTableDataSource } from '@angular/material/table'; 
import { MatDialog } from '@angular/material/dialog';
import { AddchargermodelComponent } from '../../layout/addchargermodel/addchargermodel.component';

export interface Charger {
  id: number;
  model: string;
  description: string;
  status: string;
}
let idCounter = 0; // or fetch last ID from backend

@Component({
  selector: 'app-charger-model',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './charger-model.component.html',
  styleUrls: ['./charger-model.component.scss']
})
export class ChargerModelComponent implements OnInit {
  displayedColumns: string[] = ['model', 'description', 'status', 'action'];
   dataSource:any = new MatTableDataSource<Charger>([
    {
      id: 1,
      model: 'SuperCharge X100',
      description: 'High-speed charger with dual port support',
      status: 'Active'
    },
    {
      id: 2,
      model: 'EcoCharge Mini',
      description: 'Compact and energy-efficient charger',
      status: 'Inactive'
    },
    {
      id: 3,
      model: 'UltraPower Pro',
      description: 'Industrial charger for EV fleets',
      status: 'Active'
    },
    {id: 4, model: 'dummy', description:" dummy description", status: 'inactive'}
   ]);
 
  //displayedColumns: string[] = ['model', 'description', 'status', 'action'];
  //dataSource: any[] = [
   // {model: 'amit', description: 'name of charger', status:'active'}
    // {  Amit , 028 , alice@example.com },
    // { name: 'Bipin', age: 34, email: 'bob@example.com' },
    // { name: 'Chaman', age: 45, email: 'carol@example.com' },
    // { name: 'Dharmendra', age: 23, email: 'david@example.com' },
    // { name: 'Evrest', age: 31, email: 'eve@example.com' },
    // { name: 'Faran', age: 29, email: 'frank@example.com' },
    // { name: 'Ghandhi', age: 27, email: 'grace@example.com' },
    // { name: 'Himanshi', age: 38, email: 'hank@example.com' },
    // { name: 'Istree', age: 22, email: 'ivy@example.com' },
    // { name: 'Ankush', age: 28, email: 'alice@example.com' },
    // { name: 'Bhupendra', age: 34, email: 'bob@example.com' },
    // { name: 'Caran', age: 45, email: 'carol@example.com' },
    // { name: 'Dhanush', age: 23, email: 'david@example.com' },
    // { name: 'Ekbal', age: 31, email: 'eve@example.com' },
    // { name: 'Farah', age: 29, email: 'frank@example.com' },
    // { name: 'Gopal', age: 27, email: 'grace@example.com' },
    // { name: 'Himesh', age: 38, email: 'hank@example.com' },
    // { name: 'Inder', age: 22, email: 'ivy@example.com' },
    // { name: 'Ankur', age: 28, email: 'alice@example.com' },
  //];

  constructor(
    private chargerModelService: ChargerModelService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.chargerModelService.getAll().subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }

  onView(id: string) {
    this.router.navigate(['/home/charger-model/view', id]);
  }

  // onEdit(id: string) {
  //   this.router.navigate(['/home/charger-model/edit', id]);
    
  // }

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
        const updatedData = this.dataSource.data.map((charger:any) =>
          charger.id === element.id ? { ...charger, ...result } : charger
        );
        this.dataSource.data = [...updatedData];
      }
    });
  }
  

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this model?')) {
      this.chargerModelService.delete(id).subscribe(() => {
        this.loadData(); // Reload list after delete
      });
    }
  }

  // my code 

  




// addNewCharger() {
//   const newCharger: Charger = {
//     id: idCounter++, // increment ID
//     model: 'New Model',
//     description: 'Default Description',
//     status: 'Active'
//   };

//   const updatedData = this.dataSource.data;
//   updatedData.push(newCharger);
//   this.dataSource.data = [...updatedData]; // trigger table update
// }


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
       const lastId = Math.max(...this.dataSource.map((c:Charger) => c.id), 0) ?? 0;
      const newCharger = {
        id: lastId+1,
        ...result
      };
      const updatedData = this.dataSource.data;
      updatedData.push(newCharger);
      this.dataSource.data = [...updatedData];
    }
  });
}


}
