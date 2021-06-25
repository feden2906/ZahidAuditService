import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';
import {DescriptionComponent} from './components/description/description.component';

const routes: Routes = [
  {path: '', component: MaintenanceComponent},
  {path: 'AuditDuringReorganization', component: DescriptionComponent},
  {path: 'NationalAuditOfFinancialStatements', component: DescriptionComponent},
  {path: 'InitiativeAudit', component: DescriptionComponent},
  {path: 'TaxAudit', component: DescriptionComponent},
  {path: 'SpecialPurposeAudit', component: DescriptionComponent},
  {path: 'ComprehensiveOutsourcing', component: DescriptionComponent},
  {path: 'AccountingWithTheDivisionOfPowers', component: DescriptionComponent},
  {path: 'OutsourcingOfIndividualAreasOfAccounting', component: DescriptionComponent},
  {path: 'TaxConsulting', component: DescriptionComponent},
  {path: 'PreparationAndPreparationOfManagementReports', component: DescriptionComponent},
  {path: 'Recruitment', component: DescriptionComponent},
  {path: 'TaxPlanning', component: DescriptionComponent}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
