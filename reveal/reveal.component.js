import { Directive, ElementRef, Renderer, ViewContainerRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { document } from '../utils/facade/browser';
import { RevealBackdropComponent } from './reveal-backdrop.component';
import { ClassName, modalConfigDefaults } from './reveal-options.class';
import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
var RevealDirective = (function () {
    function RevealDirective(_element, _viewContainerRef, _renderer, clf) {
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this._isShown = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdropLoader = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(RevealDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    RevealDirective.prototype.onEsc = function () {
        this.hide();
    };
    RevealDirective.prototype.ngAfterViewInit = function () {
        this._config = this._config || this.getConfig();
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
    };
    RevealDirective.prototype.ngOnDestroy = function () {
    };
    RevealDirective.prototype.show = function () {
        var _this = this;
        if (this._isShown) {
            return;
        }
        this._isShown = true;
        if (document && document.body) {
            this._renderer.setElementClass(document.body, ClassName.OPEN, true);
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    RevealDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document && document.body) {
                document.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'position', 'fixed');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        // this._renderer.setElementProperty(this._element.nativeElement, 'scrollTop', 0);
        // if (this.isAnimated) {
        //   Utils.reflow(this._element.nativeElement);
        // }
        this._renderer.setElementClass(this._element.nativeElement, ClassName.IN, true);
        this.updatePosition();
        var transitionComplete = function () {
            //   if (this._config.focus) {
            _this._element.nativeElement.focus();
            //   }
            _this.shown.emit(_this);
        };
        // if (this.isAnimated) {
        //   setTimeout(transitionComplete, TRANSITION_DURATION);
        // } else {
        transitionComplete();
        // }
    };
    RevealDirective.prototype.updatePosition = function () {
        var width = this._element.nativeElement.clientWidth;
        var outerWidth = document.body.clientWidth;
        var height = this._element.nativeElement.clientHeight;
        var outerHeight = document.body.clientHeight;
        var left = (outerWidth - width) / 2;
        var top = Math.max(50, (outerHeight - height) / 3);
        this._renderer.setElementStyle(this._element.nativeElement, 'top', top.toString() + 'px');
        this._renderer.setElementStyle(this._element.nativeElement, 'left', left.toString() + 'px');
    };
    RevealDirective.prototype.hide = function (event) {
        // this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        // clearTimeout(this.timerHideModal);
        // clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.setElementClass(this._element.nativeElement, ClassName.IN, false);
        // this._addClassIn = false;
        // if (this.isAnimated) {
        //   this.timerHideModal = setTimeout(() => this.hideModal(), TRANSITION_DURATION);
        // } else {
        this.hideModal(event);
        // }
    };
    RevealDirective.prototype.hideModal = function (event) {
        var _this = this;
        // this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (document && document.body) {
                _this._renderer.setElementClass(document.body, ClassName.OPEN, false);
            }
            // this.resetAdjustments();
            // this.resetScrollbar();
            _this.hidden.emit(event);
        });
    };
    // protected resetAdjustments(): void {
    //   this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
    //   this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
    // }
    // protected resetScrollbar(): void {
    //   document.body.style.paddingRight = this.originalBodyPadding;
    // }
    RevealDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    RevealDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.overlay && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdropLoader
                .attach(RevealBackdropComponent)
                .to('body')
                .show();
            this.backdrop = this._backdropLoader._componentRef;
            this._renderer.setElementStyle(this.backdrop.instance.element.nativeElement, 'display', 'block');
            //   if (this.isAnimated) {
            //     this.backdrop.instance.isAnimated = this.isAnimated;
            //     Utils.reflow(this.backdrop.instance.element.nativeElement);
            //   }
            this.backdrop.instance.isShown = true;
            this.backdrop.instance.modal = this;
            if (!callback) {
                return;
            }
            //   if (!this.isAnimated) {
            callback();
            return;
            //   }
            //   setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            //   if (this.backdrop.instance.isAnimated) {
            //     this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            //   } else {
            callbackRemove();
            //   }
        }
        else if (callback) {
            callback();
        }
    };
    RevealDirective.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
    };
    return RevealDirective;
}());
export { RevealDirective };
RevealDirective.decorators = [
    { type: Directive, args: [{
                selector: '[zfReveal]',
                exportAs: 'zf-reveal'
            },] },
];
/** @nocollapse */
RevealDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer, },
    { type: ComponentLoaderFactory, },
]; };
RevealDirective.propDecorators = {
    'config': [{ type: Input },],
    'shown': [{ type: Output },],
    'hidden': [{ type: Output },],
    'onEsc': [{ type: HostListener, args: ['keydown.esc',] },],
};
//# sourceMappingURL=reveal.component.js.map