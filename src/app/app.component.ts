import { Component } from '@angular/core';
import { ComponentDialogResult } from './dialog.component';
import { ModalDirective } from '../components/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngx foundation playground';

  dialogResult: ComponentDialogResult;

  modalCompHidden(result: ComponentDialogResult) {
    console.log('modalCompHidden: ' + JSON.stringify(result));
    this.dialogResult = result;
  }

  modalCompShown() {
    this.dialogResult = null;
  }
}
