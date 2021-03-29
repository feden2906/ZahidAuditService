import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  articleForm: FormGroup;

  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  onSend(): void {
    if (this.articleForm.status === 'INVALID') {
      console.log('form is invalid');
    } else {
      // console.log(this.data);
      console.log(this.articleForm.value);
    }
  }
}
