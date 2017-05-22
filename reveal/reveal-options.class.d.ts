export interface RevealOptions {
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     */
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     */
    /**
     * Time, in ms, to delay the opening of a modal after a click if no animation used.
     */
    /**
     * Time, in ms, to delay the closing of a modal after a click if no animation used.
     */
    /**
     * Allows a click on the body/overlay to close the modal.
     */
    closeOnClick: boolean;
    /**
     * Allows the modal to close if the user presses the `ESCAPE` key.
     */
    closeOnEsc: boolean;
    /**
     * If true, allows multiple modals to be displayed at once.
     */
    /**
     * Distance, in pixels, the modal should push down from the top of the screen.
     */
    vOffset: number | string;
    /**
     * Distance, in pixels, the modal should push in from the side of the screen.
     */
    hOffset: number | string;
    /**
     * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
     */
    fullScreen: boolean;
    /**
     * Percentage of screen height the modal should push up from the bottom of the view.
     */
    btmOffsetPct: number;
    /**
     * Allows the modal to generate an overlay div, which will cover the view when modal opens.
     */
    overlay: boolean;
    /**
     * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
     */
    /**
     * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
     */
    /**
   * Allows the modal to append to custom div.
   */
    /**
     * Allows adding additional class names to the reveal overlay.
     */
    additionalOverlayClasses: string;
}
export declare const modalConfigDefaults: RevealOptions;
export declare const ClassName: any;
export declare const Selector: any;
