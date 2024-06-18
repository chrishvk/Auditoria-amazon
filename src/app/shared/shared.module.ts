import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterLink
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    RouterLink
  ]
})
export class SharedModule { }
