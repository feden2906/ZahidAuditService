import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityPolicyRoutingModule } from './quality-policy-routing.module';
import { QualityPolicyComponent } from './components/quality-policy/quality-policy.component';
import {AnimateModule} from '../animate/animate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [QualityPolicyComponent],
    exports: [
        QualityPolicyComponent
    ],
    imports: [
        CommonModule,
        QualityPolicyRoutingModule,
      AnimateModule,
      BrowserAnimationsModule
    ]
})
export class QualityPolicyModule { }
