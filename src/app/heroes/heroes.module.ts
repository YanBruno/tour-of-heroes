import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

const HEROES_COMPONENTS = [HeroesComponent, HeroDetailComponent];
const HEROES_MODULES = [
  CommonModule,
  MaterialModule,
  HeroesRoutingModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  SharedModule,
];

@NgModule({
  declarations: [HEROES_COMPONENTS],
  imports: [HEROES_MODULES],
})
export class HeroesModule {}
