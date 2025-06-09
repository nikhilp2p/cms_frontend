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
  selector: 'app-addchargermodel',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
,
  templateUrl: './addchargermodel.component.html',
  styleUrl: './addchargermodel.component.scss'
})
export class AddchargermodelComponent {
  chargerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddchargermodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.chargerForm = this.fb.group({
    //   model: ['', Validators.required],
    //   description: [''],
    //   status: ['Active', Validators.required]
    // });

    this.chargerForm = this.fb.group({
      model: [data?.model || '', Validators.required],
      description: [data?.description || ''],
      status: [data?.status || 'Active', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    // if (this.chargerForm.valid) {
    //   this.dialogRef.close(this.chargerForm.value);
    // }
    if (this.data?.mode === 'edit' && this.chargerForm.valid) {
      // Call update API
      this.dialogRef.close(this.chargerForm.value);
    } else if(this.chargerForm.valid) {
      // Call add API
      this.dialogRef.close(this.chargerForm.value);
    }
  }

  ngOnInit(): void {
    if (this.data?.mode === 'edit') {
      this.chargerForm.patchValue(this.data.charger);
    }
  }

}
