import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaintenanceRoutingModule} from './maintenance-routing.module';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MainComponent} from './components/main/main.component';
import {MatButtonModule} from '@angular/material/button';
import {AnimateModule} from '../animate/animate.module';
import {DescriptionComponent} from './components/description/description.component';


@NgModule({
  declarations: [MaintenanceComponent, MainComponent,  DescriptionComponent],
  exports: [
    MaintenanceComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    AnimateModule
  ]
})
export class MaintenanceModule { }
