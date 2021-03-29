import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AuditDuringReorganizationComponent } from './components/audit-during-reorganization/audit-during-reorganization.component';
import { InitiativeAuditComponent } from './components/initiative-audit/initiative-audit.component';
import { TaxAuditComponent } from './components/tax-audit/tax-audit.component';
import { SpecialPurposeAuditComponent } from './components/special-purpose-audit/special-purpose-audit.component';
import { NationalAuditOfFinancialStatementsComponent } from './components/national-audit-of-financial-statements/national-audit-of-financial-statements.component';
import { MainComponent } from './components/main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { ComprehensiveOutsourcingComponent } from './components/comprehensive-outsourcing/comprehensive-outsourcing.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { OutsourcingOfIndividualSitesComponent } from './components/outsourcing-of-individual-sites/outsourcing-of-individual-sites.component';
import { TaxConsultingComponent } from './components/tax-consulting/tax-consulting.component';
import { ManagementReportingComponent } from './components/management-reporting/management-reporting.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { TaxPlanningComponent } from './components/tax-planning/tax-planning.component';


@NgModule({
  declarations: [MaintenanceComponent, AuditDuringReorganizationComponent, InitiativeAuditComponent, TaxAuditComponent, SpecialPurposeAuditComponent, NationalAuditOfFinancialStatementsComponent, MainComponent, ComprehensiveOutsourcingComponent, AccountingComponent, OutsourcingOfIndividualSitesComponent, TaxConsultingComponent, ManagementReportingComponent, RecruitmentComponent, TaxPlanningComponent],
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
    MatButtonModule
  ]
})
export class MaintenanceModule { }
