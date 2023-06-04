import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-comment',
  templateUrl: 'dialog-comment.component.html',
  styleUrls: ['dialog-comment.component.scss'],
})
export class DialogCommentComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<DialogCommentComponent>) {}

  dismiss() {
    this.ref.close();
  }
}