import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,MatIconModule,MatButtonModule
  ],
  exports:[ MatButtonModule,MatFormFieldModule,MatInputModule,MatNativeDateModule,MatDatepickerModule,
  
    MatIconModule,]
})
export class MaterialModule { }
