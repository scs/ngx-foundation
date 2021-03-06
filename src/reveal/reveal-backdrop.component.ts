import { Component, ElementRef, Renderer } from '@angular/core';

import { ClassName } from './reveal-options.class';
import { RevealDirective } from './reveal.component';

export class RevealBackdropOptions {
  public animate:boolean = true;

  public constructor(options:RevealBackdropOptions) {
    Object.assign(this, options);
  }
}

/** This component will be added as background layout for modals if enabled */
@Component({
  selector: 'zf-reveal-backdrop',
  template: '<div style="width: 100%; height: 100%" (click)="hideModal()"></div>',
  // tslint:disable-next-line
  host: {'class': ClassName.BACKDROP}
})
export class RevealBackdropComponent {
  // public get isAnimated():boolean {
  //   return this._isAnimated;
  // }

  // public set isAnimated(value:boolean) {
  //   this._isAnimated = value;
  //   this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
  // }

  public get isShown():boolean {
    return this._isShown;
  }

  public set isShown(value:boolean) {
    this._isShown = value;
    // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.IN}`, value);
  }

  public element:ElementRef;
  public renderer:Renderer;

  // protected _isAnimated:boolean;
  protected _isShown:boolean = false;
  private _modal: RevealDirective;

  public set modal(m : RevealDirective) {
    this._modal = m;
  }

  public constructor(element:ElementRef, renderer:Renderer) {
    this.element = element;
    this.renderer = renderer;
  }

  hideModal() {
    if (this._modal && this._modal.config.closeOnClick) {
      this._modal.hide();
    }
  }
}
