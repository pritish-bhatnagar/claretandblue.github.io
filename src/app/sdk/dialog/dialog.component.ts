import { Component } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['dialog.css']
})
export class DialogComponent {
  constructor(public dialog: Dialog) {}

  openDialog(): void {
    this.dialog.open<string>(CdkDialogStylingExampleDialog);
  }
}
@Component({
  selector: 'cdk-dialog-styling-example-dialog',
  templateUrl: 'cdk-dialog-styling-example-dialog.html',
  styleUrls: ['cdk-dialog-styling-example-dialog.css'],
})
export class CdkDialogStylingExampleDialog {
  constructor(public dialogRef: DialogRef) {}
}