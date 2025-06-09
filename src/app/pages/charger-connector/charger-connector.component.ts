import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddChargerConectorComponent } from '../../layout/add-charger-conector/add-charger-conector.component';



export interface connector{
  id:number,
  connectorId: string,
  type: string,
  status: string
}



@Component({
  selector: 'app-connectors',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './charger-connector.component.html',
  styleUrls: ['./charger-connector.component.scss']
})
export class ConnectorsComponent {
  displayedColumns: string[] = ['connectorId', 'type', 'status', 'action'];
  dataSource: connector[] = [
    {id:0, connectorId: 'C001', type: 'Type2', status: 'Active' },
    { id: 1, connectorId: 'C002', type: 'CCS', status: 'Inactive' }
  ];


  constructor(private dialog: MatDialog){}




  onDelete(id:number){
    // delete query
  }

  onEdit(element: any){
    //edit code goes here
    const dialogRef= this.dialog.open(AddChargerConectorComponent,{
      width: '300px',
      height: '90vh',
     
  
      position: {
        right: '0',
       top: '62px', 
      },
      data: {
        mode: 'edit',
        connector: element,
      },
  
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        const updatedata = this.dataSource.map((connector: any)=>{
        return  connector.id === element.id ? { ...connector, ...result ,  type: result.type ?? 'Unknown', status: result.status ?? 'Inactive'}  :  connector;
         
      });
        this.dataSource = [...updatedata];
      }
    })
  }

  onView(id:number){
    // view code goes here
  }

  openAddConnectorDialog(){
    //add 
    const dialogRef = this.dialog.open(AddChargerConectorComponent,{
      width: '300px',
    height: '90vh',
   

    position: {
      right: '0',
     top: '62px', 
    },

    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        const lastId = Math.max(...this.dataSource.map((c:connector) => c.id), 0) ?? 0;
        const newconnector= {
          id: lastId+1,
          ...result,
        };
         const updatedata = this.dataSource;
        // updatedata.push(newconnector);
        //this.dataSource= [...updatedata];

        this.dataSource = [...this.dataSource, newconnector]
      }
    })
  }
}
