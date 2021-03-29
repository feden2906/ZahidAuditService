import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityPolicyRoutingModule } from './quality-policy-routing.module';
import { QualityPolicyComponent } from './components/quality-policy/quality-policy.component';


@NgModule({
    declarations: [QualityPolicyComponent],
    exports: [
        QualityPolicyComponent
    ],
    imports: [
        CommonModule,
        QualityPolicyRoutingModule
    ]
})
export class QualityPolicyModule { }
