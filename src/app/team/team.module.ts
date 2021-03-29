import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './components/team/team.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TeamComponent],
  exports: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatCarouselModule.forRoot(),
    MatCardModule
  ]
})
export class TeamModule { }
