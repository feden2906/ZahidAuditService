import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuditDuringReorganizationComponent} from './components/audit-during-reorganization/audit-during-reorganization.component';
import {NationalAuditOfFinancialStatementsComponent} from './components/national-audit-of-financial-statements/national-audit-of-financial-statements.component';
import {InitiativeAuditComponent} from './components/initiative-audit/initiative-audit.component';
import {TaxAuditComponent} from './components/tax-audit/tax-audit.component';
import {SpecialPurposeAuditComponent} from './components/special-purpose-audit/special-purpose-audit.component';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';
import {ComprehensiveOutsourcingComponent} from './components/comprehensive-outsourcing/comprehensive-outsourcing.component';
import {AccountingComponent} from './components/accounting/accounting.component';
import {OutsourcingOfIndividualSitesComponent} from './components/outsourcing-of-individual-sites/outsourcing-of-individual-sites.component';
import {TaxConsultingComponent} from './components/tax-consulting/tax-consulting.component';
import {ManagementReportingComponent} from './components/management-reporting/management-reporting.component';
import {RecruitmentComponent} from './components/recruitment/recruitment.component';
import {TaxPlanningComponent} from './components/tax-planning/tax-planning.component';

const routes: Routes = [
  {path: '', component: MaintenanceComponent},
  {path: 'AuditDuringReorganization', component: AuditDuringReorganizationComponent},
  {path: 'NationalAuditOfFinancialStatements', component: NationalAuditOfFinancialStatementsComponent},
  {path: 'InitiativeAudit', component: InitiativeAuditComponent},
  {path: 'TaxAudit', component: TaxAuditComponent},
  {path: 'SpecialPurposeAudit', component: SpecialPurposeAuditComponent},
  {path: 'ComprehensiveOutsourcing', component: ComprehensiveOutsourcingComponent},
  {path: 'AccountingWithTheDivisionOfPowers', component: AccountingComponent},
  {path: 'OutsourcingOfIndividualAreasOfAccounting', component: OutsourcingOfIndividualSitesComponent},
  {path: 'TaxConsulting', component: TaxConsultingComponent},
  {path: 'PreparationAndPreparationOfManagementReports', component: ManagementReportingComponent},
  {path: 'Recruitment', component: RecruitmentComponent},
  {path: 'TaxPlanning', component: TaxPlanningComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
