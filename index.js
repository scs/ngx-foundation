/* tslint:disable: max-classes-per-file */
import { NgModule } from '@angular/core';
// import { AccordionModule } from './accordion/accordion.module';
// import { AlertModule } from './alert/alert.module';
// import { ButtonsModule } from './buttons/buttons.module';
// import { CarouselModule } from './carousel/carousel.module';
// import { CollapseModule } from './collapse/collapse.module';
// import { DatepickerModule } from './datepicker/datepicker.module';
// import { BsDropdownModule } from './dropdown/bs-dropdown.module';
import { RevealModule } from './reveal/reveal.module';
// import { PaginationModule } from './pagination/pagination.module';
// import { ProgressbarModule } from './progressbar/progressbar.module';
// import { RatingModule } from './rating/rating.module';
// import { SortableModule } from './sortable';
// import { TabsModule } from './tabs/tabs.module';
// import { TimepickerModule } from './timepicker/timepicker.module';
// import { TooltipModule } from './tooltip/tooltip.module';
// import { TypeaheadModule } from './typeahead/typeahead.module';
// import { PopoverModule } from './popover/popover.module';
// export {
//   AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent
// } from './accordion';
// export { AlertComponent, AlertConfig, AlertModule } from './alert';
// export {
//   ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule
// } from './buttons';
// export {
//   CarouselComponent, CarouselConfig, CarouselModule, SlideComponent
// } from './carousel';
// export { CollapseDirective, CollapseModule } from './collapse';
// export {
//   DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule,
//   DayPickerComponent, MonthPickerComponent, YearPickerComponent
// } from './datepicker';
export { RevealDirective, RevealBackdropOptions, RevealBackdropComponent, RevealModule } from './reveal';
// export {
//   BsDropdownModule, BsDropdownConfig, BsDropdownState,
//   BsDropdownContainerComponent, BsDropdownDirective,
//   BsDropdownMenuDirective, BsDropdownToggleDirective
// } from './dropdown';
// export {
//   PagerComponent, PaginationComponent, PaginationConfig, PaginationModule
// } from './pagination';
// export {
//   BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule,
//   ProgressDirective
// } from './progressbar';
// export { RatingComponent, RatingModule } from './rating';
// export {
//   DraggableItem, DraggableItemService, SortableItem, SortableComponent,
//   SortableModule
// } from './sortable';
// export {
//   NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent,
//   TabsetConfig, TabsModule
// } from './tabs';
// export {
//   TimepickerComponent, TimepickerConfig, TimepickerModule
// } from './timepicker';
// export {
//   TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule
// } from './tooltip';
// export {
//   TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective,
//   TypeaheadMatch, TypeaheadModule
// } from './typeahead';
// export {
//   PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule
// } from './popover';
// export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils';
// export {
//   ComponentLoader, ComponentLoaderFactory, ContentRef
// } from './component-loader';
// export {
//   Positioning, PositioningOptions, PositioningService, positionElements
// } from './positioning';
var MODULES = [
    // AccordionModule, AlertModule, ButtonsModule,
    // CarouselModule, CollapseModule, DatepickerModule,
    // BsDropdownModule, 
    RevealModule,
];
var ZfRootModule = (function () {
    function ZfRootModule() {
    }
    return ZfRootModule;
}());
export { ZfRootModule };
ZfRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    // AccordionModule.forRoot(), AlertModule.forRoot(), ButtonsModule.forRoot(),
                    // CarouselModule.forRoot(), CollapseModule.forRoot(),
                    // DatepickerModule.forRoot(),
                    // BsDropdownModule.forRoot(), 
                    RevealModule.forRoot(),
                ],
                exports: MODULES
            },] },
];
/** @nocollapse */
ZfRootModule.ctorParameters = function () { return []; };
var NgXFoundationModule = (function () {
    function NgXFoundationModule() {
    }
    NgXFoundationModule.forRoot = function () {
        return { ngModule: ZfRootModule };
    };
    return NgXFoundationModule;
}());
export { NgXFoundationModule };
NgXFoundationModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] },
];
/** @nocollapse */
NgXFoundationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map