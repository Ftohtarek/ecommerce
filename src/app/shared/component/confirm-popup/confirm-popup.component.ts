import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  deletedElement: string;
}
@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {
  constructor(public dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: DialogData) { }
}
