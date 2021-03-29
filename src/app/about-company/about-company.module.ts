import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [AboutCompanyComponent],
    exports: [
        AboutCompanyComponent
    ],
    imports: [
        CommonModule,
        AboutCompanyRoutingModule,
      MatCardModule
    ]
})
export class AboutCompanyModule { }
