import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const DASH_MODULES = [
  MaterialModule,
  DashBoardRoutingModule,
  FlexLayoutModule,
  SharedModule,
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DASH_MODULES],
})
export class DashboardModule {}
