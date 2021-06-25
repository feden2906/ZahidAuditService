import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import {MatCardModule} from '@angular/material/card';
import {AnimateModule} from '../animate/animate.module';

@NgModule({
    declarations: [AboutCompanyComponent],
    exports: [
        AboutCompanyComponent
    ],
    imports: [
        CommonModule,
        AboutCompanyRoutingModule,
        MatCardModule,
        AnimateModule
    ]
})
export class AboutCompanyModule { }
