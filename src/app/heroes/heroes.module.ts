import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [HeroesComponent, HeroDetailComponent];
const MODULES = [
  CommonModule,
  MaterialModule,
  HeroesRoutingModule,
  FlexLayoutModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
})
export class HeroesModule {}
