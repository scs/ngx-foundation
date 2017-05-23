import { ElementRef, Renderer, AfterViewInit, OnDestroy, ViewContainerRef, EventEmitter } from '@angular/core';
import { RevealOptions } from './reveal-options.class';
import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';
export declare class RevealDirective implements AfterViewInit, OnDestroy {
    config: RevealOptions;
    shown: EventEmitter<RevealDirective>;
    hidden: EventEmitter<any>;
    private _element;
    private _renderer;
    private _config;
    private _isShown;
    private backdrop;
    private _backdropLoader;
    onEsc(): void;
    constructor(_element: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer, clf: ComponentLoaderFactory);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    protected showElement(): void;
    private findFocusable(element?);
    private updatePosition();
    hide(event?: Event): void;
    protected hideModal(event?: Event): void;
    protected getConfig(config?: RevealOptions): RevealOptions;
    protected showBackdrop(callback?: Function): void;
    protected removeBackdrop(): void;
}
