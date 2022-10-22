import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

const AUTH_MODULES = [MaterialModule, ReactiveFormsModule, AuthRoutingModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AUTH_MODULES],
})
export class AuthModule {}
