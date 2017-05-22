export interface ModalOptions {
  /** 
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   */
  // animationIn: string;
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   */
  // animationOut: string;
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   */
  // showDelay: number;
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   */
  // hideDelay: number;
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
  // multipleOpened: boolean;
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
  // resetOnClose: boolean;
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   */
  // deepLink: boolean;
    /**
   * Allows the modal to append to custom div.
   */
  // appendTo: string;
  /**
   * Allows adding additional class names to the reveal overlay.
   */
  additionalOverlayClasses: string;
}

export const modalConfigDefaults: ModalOptions = {
  /* Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  // animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  // animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  // showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  // hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  // multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,
  /**
   * Percentage of screen height the modal should push up from the bottom of the view.
   * @option
   * @type {number}
   * @default 10
   */
  btmOffsetPct: 10,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  // resetOnClose: false,
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   * @option
   * @type {boolean}
   * @default false
   */
  // deepLink: false,
    /**
   * Allows the modal to append to custom div.
   * @option
   * @type {string}
   * @default "body"
   */
  // appendTo: "body",
  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};

export const ClassName:any = {
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'reveal-overlay',
  OPEN: 'is-reveal-open',
  FADE: 'fade',
  SHOW: 'show',  // bs4
  IN: 'reveal'
};

export const Selector:any = {
  DIALOG: '.modal-dialog',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
