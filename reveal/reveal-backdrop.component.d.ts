import { ElementRef, Renderer } from '@angular/core';
import { RevealDirective } from './reveal.component';
export declare class RevealBackdropOptions {
    animate: boolean;
    constructor(options: RevealBackdropOptions);
}
/** This component will be added as background layout for modals if enabled */
export declare class RevealBackdropComponent {
    isShown: boolean;
    element: ElementRef;
    renderer: Renderer;
    protected _isShown: boolean;
    private _modal;
    modal: RevealDirective;
    constructor(element: ElementRef, renderer: Renderer);
    hideModal(): void;
}
