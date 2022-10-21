import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [MaterialModule, ReactiveFormsModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MODULES],
})
export class AuthModule {}
