import { NgModule } from '@angular/core';
import { RevealBackdropComponent } from './reveal-backdrop.component';
import { RevealDirective } from './reveal.component';
import { PositioningService } from '../positioning';
import { ComponentLoaderFactory } from '../component-loader';
var RevealModule = (function () {
    function RevealModule() {
    }
    RevealModule.forRoot = function () {
        return { ngModule: RevealModule, providers: [ComponentLoaderFactory, PositioningService] };
    };
    return RevealModule;
}());
export { RevealModule };
RevealModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RevealBackdropComponent, RevealDirective],
                exports: [RevealBackdropComponent, RevealDirective],
                entryComponents: [RevealBackdropComponent]
            },] },
];
/** @nocollapse */
RevealModule.ctorParameters = function () { return []; };
//# sourceMappingURL=reveal.module.js.map