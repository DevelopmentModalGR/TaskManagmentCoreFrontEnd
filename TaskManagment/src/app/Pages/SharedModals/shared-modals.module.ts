import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowChecklistJobsModal } from './Show-Checklist-Jobs-Modal/Show-Checklist-Jobs-Modal';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
  ],
  entryComponents: [
    ShowChecklistJobsModal
  ],
})
export class SharedModalsModule { }
