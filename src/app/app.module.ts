import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from './header/header.module';
import {MaintenanceModule} from './maintenance/maintenance.module';
import {AboutCompanyModule} from './about-company/about-company.module';
import {TeamModule} from './team/team.module';
import {QualityPolicyModule} from './quality-policy/quality-policy.module';
import {RouterModule, Routes} from '@angular/router';
import {AnimateModule} from './animate/animate.module';
import {FooterModule} from './footer/footer.module';
import {IntroComponent} from './intro/intro.component';
import {FieldOfWorkComponent} from './field-of-work/field-of-work.component';
import {MatIconModule} from '@angular/material/icon';
import {AboutCompanyComponent} from './about-company/components/about-company/about-company.component';

const routes: Routes = [
  {path: '',  redirectTo: 'intro', pathMatch: 'full'},
  {path: 'intro', component: IntroComponent},
  {path: 'AboutCompany', component: AboutCompanyComponent}];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FieldOfWorkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaintenanceModule,
    AboutCompanyModule,
    TeamModule,
    QualityPolicyModule,
    RouterModule.forRoot(routes),
    AnimateModule,
    FooterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
