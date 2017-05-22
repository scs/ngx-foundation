import { NgModule, ModuleWithProviders } from '@angular/core';

import { RevealBackdropComponent } from './reveal-backdrop.component';
import { RevealDirective } from './reveal.component';
import { PositioningService } from '../positioning';
import { ComponentLoaderFactory } from '../component-loader';

@NgModule({
  declarations: [RevealBackdropComponent, RevealDirective],
  exports: [RevealBackdropComponent, RevealDirective],
  entryComponents: [RevealBackdropComponent]
})
export class RevealModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: RevealModule, providers: [ComponentLoaderFactory, PositioningService]};
  }
}
