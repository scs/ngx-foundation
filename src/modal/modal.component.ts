import {
  Directive,
  ElementRef,
  Renderer,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  ComponentRef,
  HostListener,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import { document } from '../utils/facade/browser';

import { Utils } from '../utils/utils.class';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ClassName, modalConfigDefaults, ModalOptions, Selector } from './modal-options.class';

import { window } from '../utils/facade/browser';
import { ComponentLoader } from '../component-loader/component-loader.class';
import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';

const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;

@Directive({
  selector: '[zfReveal]',
  exportAs: 'zf-reveal'
})
export class ModalDirective implements AfterViewInit, OnDestroy {

  @Input()
  public set config(conf: ModalOptions) {
    this._config = this.getConfig(conf);
  }

  public get config(): ModalOptions {
    return this._config;
  }

  @Output() public shown = new EventEmitter<ModalDirective>();
  @Output() public hidden = new EventEmitter<any>();

  //   public isAnimated: boolean = true;
  // protected timerHideModal: number = 0;
  // protected timerRmBackDrop: number = 0;
  // protected originalBodyPadding: number = 0;

  private _element: ElementRef;
  private _renderer: Renderer;
  private _config: ModalOptions;
  private _isShown = false;

  private backdrop: ComponentRef<ModalBackdropComponent>;
  private _backdropLoader: ComponentLoader<ModalBackdropComponent>;

  @HostListener('keydown.esc')
  public onEsc(): void {
      this.hide();
  }

  constructor(_element: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer, clf: ComponentLoaderFactory) {
    this._element = _element;
    this._renderer = _renderer;
    this._backdropLoader = clf.createLoader<ModalBackdropComponent>(_element, _viewContainerRef, _renderer);
  }

  public ngAfterViewInit() {
    this._config = this._config || this.getConfig();
    this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
  }

  public ngOnDestroy() {

  }

  public show(): void {
    if (this._isShown) {
      return;
    }
    this._isShown = true;

    if (document && document.body) {
      this._renderer.setElementClass(document.body, ClassName.OPEN, true);
    }

    this.showBackdrop(() => {
      this.showElement();
    });

  }

  protected showElement(): void {
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

    const transitionComplete = () => {
      //   if (this._config.focus) {
          this._element.nativeElement.focus();
      //   }
      this.shown.emit(this);
    };

    // if (this.isAnimated) {
    //   setTimeout(transitionComplete, TRANSITION_DURATION);
    // } else {
    transitionComplete();
    // }
  }

  private updatePosition() {
    let width: number = this._element.nativeElement.clientWidth;
    let outerWidth: number = document.body.clientWidth;
    let height: number = this._element.nativeElement.clientHeight;
    let outerHeight: number = document.body.clientHeight;
    let left = (outerWidth - width) / 2;
    let top = Math.max(50, (outerHeight - height) / 3);
    this._renderer.setElementStyle(this._element.nativeElement, 'top', top.toString() + 'px');
    this._renderer.setElementStyle(this._element.nativeElement, 'left', left.toString() + 'px');
  }

  public hide(event?: Event): void {
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
  }

  protected hideModal(event?: Event): void {
    // this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
    this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
    this.showBackdrop(() => {
      if (document && document.body) {
        this._renderer.setElementClass(document.body, ClassName.OPEN, false);
      }
      // this.resetAdjustments();
      // this.resetScrollbar();
      this.hidden.emit(event);
    });
  }

  // protected resetAdjustments(): void {
  //   this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
  //   this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
  // }

  // protected resetScrollbar(): void {
  //   document.body.style.paddingRight = this.originalBodyPadding;
  // }

  protected getConfig(config?: ModalOptions): ModalOptions {
    return Object.assign({}, modalConfigDefaults, config);
  }

  protected showBackdrop(callback?: Function): void {
    if (this._isShown && this.config.overlay && (!this.backdrop || !this.backdrop.instance.isShown)) {
      this.removeBackdrop();
      this._backdropLoader
        .attach(ModalBackdropComponent)
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
    } else if (!this._isShown && this.backdrop) {
      this.backdrop.instance.isShown = false;

      let callbackRemove = () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };

      //   if (this.backdrop.instance.isAnimated) {
      //     this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
      //   } else {
      callbackRemove();
      //   }
    } else if (callback) {
      callback();
    }
  }

  protected removeBackdrop(): void {
    this._backdropLoader.hide();
  }

}
