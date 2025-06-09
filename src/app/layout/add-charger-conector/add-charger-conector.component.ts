import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-charger-conector',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-charger-conector.component.html',
  styleUrl: './add-charger-conector.component.scss'
})
export class AddChargerConectorComponent {
  connectorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddChargerConectorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.chargerForm = this.fb.group({
    //   model: ['', Validators.required],
    //   description: [''],
    //   status: ['Active', Validators.required]
    // });

    this.connectorForm = this.fb.group({
      connectorId: [data?.connectorId || '', Validators.required],
      type: [data?.type || ''],
      status: [data?.status || 'Active', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    // if (this.chargerForm.valid) {
      // this.dialogRef.close(this.connectorForm.value);
    // }
    if (this.data?.mode === 'edit' && this.connectorForm.valid) {
      // Call update API
      this.dialogRef.close(this.connectorForm.value);
    } else if(this.connectorForm.valid) {
      // Call add API
      this.dialogRef.close(this.connectorForm.value);
    }
  }

  ngOnInit(): void {
    if (this.data?.mode === 'edit' && this.data.connector) {
      this.connectorForm.patchValue(this.data.connector);
    }
  }


}
