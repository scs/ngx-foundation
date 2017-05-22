import { Component, ElementRef, Renderer } from '@angular/core';
import { ClassName } from './reveal-options.class';
var RevealBackdropOptions = (function () {
    function RevealBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return RevealBackdropOptions;
}());
export { RevealBackdropOptions };
/** This component will be added as background layout for modals if enabled */
var RevealBackdropComponent = (function () {
    function RevealBackdropComponent(element, renderer) {
        // protected _isAnimated:boolean;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(RevealBackdropComponent.prototype, "isShown", {
        // public get isAnimated():boolean {
        //   return this._isAnimated;
        // }
        // public set isAnimated(value:boolean) {
        //   this._isAnimated = value;
        //   this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        // }
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.IN}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RevealBackdropComponent.prototype, "modal", {
        set: function (m) {
            this._modal = m;
        },
        enumerable: true,
        configurable: true
    });
    RevealBackdropComponent.prototype.hideModal = function () {
        if (this._modal && this._modal.config.closeOnClick) {
            this._modal.hide();
        }
    };
    return RevealBackdropComponent;
}());
export { RevealBackdropComponent };
RevealBackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'zf-reveal-backdrop',
                template: '<div style="width: 100%; height: 100%" (click)="hideModal()"></div>',
                // tslint:disable-next-line
                host: { 'class': ClassName.BACKDROP }
            },] },
];
/** @nocollapse */
RevealBackdropComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
//# sourceMappingURL=reveal-backdrop.component.js.map