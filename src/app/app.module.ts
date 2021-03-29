import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './header/header.module';
import {MaintenanceModule} from './maintenance/maintenance.module';
import {AboutCompanyModule} from './about-company/about-company.module';
import {TeamModule} from './team/team.module';
import {QualityPolicyModule} from './quality-policy/quality-policy.module';
import {RouterModule} from '@angular/router';
import {SendRequestModule} from './send-request/send-request.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaintenanceModule,
    AboutCompanyModule,
    TeamModule,
    QualityPolicyModule,
    SendRequestModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
