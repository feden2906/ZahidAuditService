import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SendRequestRoutingModule} from './send-request-routing.module';
import {SendRequestComponent} from './components/send-request/send-request.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [SendRequestComponent],
  exports: [
    SendRequestComponent
  ],
  imports: [
    CommonModule,
    SendRequestRoutingModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class SendRequestModule { }
