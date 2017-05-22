import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'comp-dialog',
    templateUrl: './dialog.component.html'
})
export class ComponentDialog {

    @Output() public done: EventEmitter<ComponentDialogResult> = new EventEmitter<ComponentDialogResult>();

    @Input() name: string;
    @Input() age: number;

    cancel() {
        this.done.emit({ canceled: true, name: null, age: null});
    }

    ok() {
        this.done.emit({ canceled: false, name: this.name, age: this.age});
    }
}

export interface ComponentDialogResult {
    canceled: boolean;
    name: string;
    age: number;
}
