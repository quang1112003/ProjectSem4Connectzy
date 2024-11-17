import {
  CdkDrag,
  CdkDragHandle
} from "./chunk-5YYYVCRJ.js";
import {
  Overlay,
  OverlayConfig,
  OverlayRef
} from "./chunk-Z7PSAAGN.js";
import "./chunk-OX22V73U.js";
import "./chunk-PXNY5WLW.js";
import {
  ComponentPortal
} from "./chunk-DEGCIOYJ.js";
import "./chunk-VZ7HWWOA.js";
import {
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  hasModifierKey
} from "./chunk-USKC76VO.js";
import {
  fadeMotion
} from "./chunk-XZIVNFZQ.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3TUHMKZG.js";
import "./chunk-3JSU54FM.js";
import "./chunk-IDCCK3LW.js";
import {
  NzDestroyService
} from "./chunk-P3OKEVSS.js";
import "./chunk-J3OF5AMK.js";
import "./chunk-IGQ5H5G3.js";
import {
  Directionality
} from "./chunk-XNKJYMG5.js";
import "./chunk-E5TUG3TZ.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7ZIF5OVP.js";
import {
  isNotNil
} from "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import "./chunk-RDJJSLCP.js";
import {
  DomSanitizer
} from "./chunk-SHIUUSE2.js";
import "./chunk-C4KMBTLC.js";
import {
  DOCUMENT
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RGUNTEJD.js";
import {
  Subject,
  __decorate,
  filter,
  fromEvent,
  switchMap,
  take,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-image.mjs
var _c0 = ["*"];
var _c1 = ["imgRef"];
var _c2 = ["imagePreviewWrapper"];
function NzImagePreviewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function NzImagePreviewComponent_Conditional_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSwitchLeft($event));
    });
    ɵɵelement(1, "span", 14);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 15);
    ɵɵlistener("click", function NzImagePreviewComponent_Conditional_2_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSwitchRight($event));
    });
    ɵɵelement(3, "span", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ant-image-preview-switch-left-disabled", ctx_r2.index <= 0);
    ɵɵadvance(2);
    ɵɵclassProp("ant-image-preview-switch-right-disabled", ctx_r2.index >= ctx_r2.images.length - 1);
  }
}
function NzImagePreviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate2("", ctx_r2.index + 1, " / ", ctx_r2.images.length, "");
  }
}
function NzImagePreviewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 17);
    ɵɵlistener("click", function NzImagePreviewComponent_For_6_Template_li_click_0_listener() {
      const option_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(option_r5.onClick());
    });
    ɵɵelement(1, "span", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const option_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ant-image-preview-operations-operation-disabled", ctx_r2.zoomOutDisabled && option_r5.type === "zoomOut");
    ɵɵadvance();
    ɵɵproperty("nzType", option_r5.icon)("nzRotate", (tmp_13_0 = option_r5.rotate) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0);
  }
}
function NzImagePreviewComponent_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 20, 1);
  }
  if (rf & 2) {
    const image_r6 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("width", image_r6.width)("height", image_r6.height)("transform", ctx_r2.previewImageTransform);
    ɵɵattribute("src", ctx_r2.sanitizerResourceUrl(image_r6.src), ɵɵsanitizeUrl)("srcset", image_r6.srcset)("alt", image_r6.alt);
  }
}
function NzImagePreviewComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzImagePreviewComponent_For_15_Conditional_0_Template, 2, 9, "img", 19);
  }
  if (rf & 2) {
    const imageIndex_r7 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, imageIndex_r7 === ctx_r2.index ? 0 : -1);
  }
}
var _NzImageGroupComponent = class _NzImageGroupComponent {
  constructor() {
    this.nzScaleStep = null;
    this.images = [];
  }
  addImage(image) {
    this.images.push(image);
  }
};
_NzImageGroupComponent.ɵfac = function NzImageGroupComponent_Factory(t) {
  return new (t || _NzImageGroupComponent)();
};
_NzImageGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzImageGroupComponent,
  selectors: [["nz-image-group"]],
  inputs: {
    nzScaleStep: "nzScaleStep"
  },
  exportAs: ["nzImageGroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzImageGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzImageGroupComponent = _NzImageGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-group",
      exportAs: "nzImageGroup",
      template: "<ng-content></ng-content>",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true
    }]
  }], null, {
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var FADE_CLASS_NAME_MAP = {
  enter: "ant-fade-enter",
  enterActive: "ant-fade-enter-active",
  leave: "ant-fade-leave",
  leaveActive: "ant-fade-leave-active"
};
var IMAGE_PREVIEW_MASK_CLASS_NAME = "ant-image-preview-mask";
var NZ_CONFIG_MODULE_NAME$1 = "image";
function getFitContentPosition(params) {
  let fixPos = {};
  if (params.width <= params.clientWidth && params.height <= params.clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  }
  if (params.width > params.clientWidth || params.height > params.clientHeight) {
    fixPos = {
      x: fitPoint(params.left, params.width, params.clientWidth),
      y: fitPoint(params.top, params.height, params.clientHeight)
    };
  }
  return fixPos;
}
function getOffset(node) {
  const box = node.getBoundingClientRect();
  const docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height
  };
}
function fitPoint(start, size, clientSize) {
  const startAddSize = start + size;
  const offsetStart = (size - clientSize) / 2;
  let distance = null;
  if (size > clientSize) {
    if (start > 0) {
      distance = offsetStart;
    }
    if (start < 0 && startAddSize < clientSize) {
      distance = -offsetStart;
    }
  } else {
    if (start < 0 || startAddSize > clientSize) {
      distance = start < 0 ? offsetStart : -offsetStart;
    }
  }
  return distance;
}
var NzImagePreviewOptions = class {
  constructor() {
    this.nzKeyboard = true;
    this.nzNoAnimation = false;
    this.nzMaskClosable = true;
    this.nzCloseOnNavigation = true;
  }
};
var initialPosition = {
  x: 0,
  y: 0
};
var NZ_DEFAULT_SCALE_STEP = 0.5;
var NZ_DEFAULT_ZOOM = 1;
var NZ_DEFAULT_ROTATE = 0;
var _NzImagePreviewComponent = class _NzImagePreviewComponent {
  get animationDisabled() {
    return this.config.nzNoAnimation ?? false;
  }
  get maskClosable() {
    const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    return this.config.nzMaskClosable ?? defaultConfig.nzMaskClosable ?? true;
  }
  constructor(ngZone, cdr, nzConfigService, config, destroy$, sanitizer) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.config = config;
    this.destroy$ = destroy$;
    this.sanitizer = sanitizer;
    this._defaultNzZoom = NZ_DEFAULT_ZOOM;
    this._defaultNzScaleStep = NZ_DEFAULT_SCALE_STEP;
    this._defaultNzRotate = NZ_DEFAULT_ROTATE;
    this.images = [];
    this.index = 0;
    this.isDragging = false;
    this.visible = true;
    this.animationStateChanged = new EventEmitter();
    this.scaleStepMap = /* @__PURE__ */ new Map();
    this.previewImageTransform = "";
    this.previewImageWrapperTransform = "";
    this.operations = [{
      icon: "close",
      onClick: () => {
        this.onClose();
      },
      type: "close"
    }, {
      icon: "zoom-in",
      onClick: () => {
        this.onZoomIn();
      },
      type: "zoomIn"
    }, {
      icon: "zoom-out",
      onClick: () => {
        this.onZoomOut();
      },
      type: "zoomOut"
    }, {
      icon: "rotate-right",
      onClick: () => {
        this.onRotateRight();
      },
      type: "rotateRight"
    }, {
      icon: "rotate-left",
      onClick: () => {
        this.onRotateLeft();
      },
      type: "rotateLeft"
    }, {
      icon: "swap",
      onClick: () => {
        this.onHorizontalFlip();
      },
      type: "flipHorizontally"
    }, {
      icon: "swap",
      onClick: () => {
        this.onVerticalFlip();
      },
      type: "flipVertically",
      rotate: 90
    }];
    this.zoomOutDisabled = false;
    this.position = __spreadValues({}, initialPosition);
    this.closeClick = new EventEmitter();
    this.zoom = this.config.nzZoom ?? this._defaultNzZoom;
    this.scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
    this.rotate = this.config.nzRotate ?? this._defaultNzRotate;
    this.flipHorizontally = this.config.nzFlipHorizontally ?? false;
    this.flipVertically = this.config.nzFlipVertically ?? false;
    this.updateZoomOutDisabled();
    this.updatePreviewImageTransform();
    this.updatePreviewImageWrapperTransform();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.imagePreviewWrapper.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.isDragging = true;
      });
      fromEvent(this.imagePreviewWrapper.nativeElement, "wheel").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.ngZone.run(() => this.wheelZoomEventHandler(event));
      });
    });
  }
  setImages(images, scaleStepMap) {
    if (scaleStepMap)
      this.scaleStepMap = scaleStepMap;
    this.images = images;
    this.markForCheck();
  }
  switchTo(index) {
    this.index = index;
    this.markForCheck();
  }
  next() {
    if (this.index < this.images.length - 1) {
      this.reset();
      this.index++;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.markForCheck();
    }
  }
  prev() {
    if (this.index > 0) {
      this.reset();
      this.index--;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.markForCheck();
    }
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  onClose() {
    this.visible = false;
    this.closeClick.emit();
  }
  onZoomIn() {
    const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
    this.zoom += zoomStep;
    this.updatePreviewImageTransform();
    this.updateZoomOutDisabled();
  }
  onZoomOut() {
    if (this.zoom > 1) {
      const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
      this.zoom -= zoomStep;
      this.updatePreviewImageTransform();
      this.updateZoomOutDisabled();
      if (this.zoom <= 1) {
        this.reCenterImage();
      }
    }
  }
  onRotateRight() {
    this.rotate += 90;
    this.updatePreviewImageTransform();
  }
  onRotateLeft() {
    this.rotate -= 90;
    this.updatePreviewImageTransform();
  }
  onSwitchLeft(event) {
    event.preventDefault();
    event.stopPropagation();
    this.prev();
  }
  onSwitchRight(event) {
    event.preventDefault();
    event.stopPropagation();
    this.next();
  }
  onHorizontalFlip() {
    this.flipHorizontally = !this.flipHorizontally;
    this.updatePreviewImageTransform();
  }
  onVerticalFlip() {
    this.flipVertically = !this.flipVertically;
    this.updatePreviewImageTransform();
  }
  wheelZoomEventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.handlerImageTransformationWhileZoomingWithMouse(event, event.deltaY);
    this.handleImageScaleWhileZoomingWithMouse(event.deltaY);
    this.updatePreviewImageWrapperTransform();
    this.updatePreviewImageTransform();
    this.markForCheck();
  }
  onAnimationStart(event) {
    this.animationStateChanged.emit(event);
  }
  onAnimationDone(event) {
    this.animationStateChanged.emit(event);
  }
  onDragEnd(event) {
    this.isDragging = false;
    const width = this.imageRef.nativeElement.offsetWidth * this.zoom;
    const height = this.imageRef.nativeElement.offsetHeight * this.zoom;
    const {
      left,
      top
    } = getOffset(this.imageRef.nativeElement);
    const {
      width: clientWidth,
      height: clientHeight
    } = getClientSize();
    const isRotate = this.rotate % 180 !== 0;
    const fitContentParams = {
      width: isRotate ? height : width,
      height: isRotate ? width : height,
      left,
      top,
      clientWidth,
      clientHeight
    };
    const fitContentPos = getFitContentPosition(fitContentParams);
    if (isNotNil(fitContentPos.x) || isNotNil(fitContentPos.y)) {
      this.position = __spreadValues(__spreadValues({}, this.position), fitContentPos);
    } else if (!isNotNil(fitContentPos.x) && !isNotNil(fitContentPos.y)) {
      this.position = {
        x: event.source.getFreeDragPosition().x,
        y: event.source.getFreeDragPosition().y
      };
    }
  }
  sanitizerResourceUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  updatePreviewImageTransform() {
    this.previewImageTransform = `scale3d(${this.zoom * (this.flipHorizontally ? -1 : 1)}, ${this.zoom * (this.flipVertically ? -1 : 1)}, 1) rotate(${this.rotate}deg)`;
  }
  updatePreviewImageWrapperTransform() {
    this.previewImageWrapperTransform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
  }
  updateZoomOutDisabled() {
    this.zoomOutDisabled = this.zoom <= 1;
  }
  handlerImageTransformationWhileZoomingWithMouse(event, deltaY) {
    let scaleValue;
    const imageElement = this.imageRef.nativeElement;
    const elementTransform = getComputedStyle(imageElement).transform;
    const matrixValue = elementTransform.match(/matrix.*\((.+)\)/);
    if (matrixValue) {
      scaleValue = +matrixValue[1].split(", ")[0];
    } else {
      scaleValue = this.zoom;
    }
    const x = (event.clientX - imageElement.getBoundingClientRect().x) / scaleValue;
    const y = (event.clientY - imageElement.getBoundingClientRect().y) / scaleValue;
    const halfOfScaleStepValue = deltaY < 0 ? this.scaleStep / 2 : -this.scaleStep / 2;
    this.position.x += -x * halfOfScaleStepValue * 2 + imageElement.offsetWidth * halfOfScaleStepValue;
    this.position.y += -y * halfOfScaleStepValue * 2 + imageElement.offsetHeight * halfOfScaleStepValue;
  }
  handleImageScaleWhileZoomingWithMouse(deltaY) {
    if (this.isZoomedInWithMouseWheel(deltaY)) {
      this.onZoomIn();
    } else {
      this.onZoomOut();
    }
    if (this.zoom <= 1) {
      this.reCenterImage();
    }
  }
  isZoomedInWithMouseWheel(delta) {
    return delta < 0;
  }
  reset() {
    this.zoom = this.config.nzZoom ?? this._defaultNzZoom;
    this.scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
    this.rotate = this.config.nzRotate ?? this._defaultNzRotate;
    this.flipHorizontally = false;
    this.flipVertically = false;
    this.reCenterImage();
  }
  reCenterImage() {
    this.position = __spreadValues({}, initialPosition);
  }
};
_NzImagePreviewComponent.ɵfac = function NzImagePreviewComponent_Factory(t) {
  return new (t || _NzImagePreviewComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzImagePreviewOptions), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(DomSanitizer));
};
_NzImagePreviewComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzImagePreviewComponent,
  selectors: [["nz-image-preview"]],
  viewQuery: function NzImagePreviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imagePreviewWrapper = _t.first);
    }
  },
  hostAttrs: [1, "ant-image-preview-root"],
  hostVars: 6,
  hostBindings: function NzImagePreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@fadeMotion.start", function NzImagePreviewComponent_animation_fadeMotion_start_HostBindingHandler($event) {
        return ctx.onAnimationStart($event);
      })("@fadeMotion.done", function NzImagePreviewComponent_animation_fadeMotion_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@fadeMotion", ctx.visible ? "enter" : "leave");
      ɵɵstyleProp("z-index", ctx.config.nzZIndex);
      ɵɵclassProp("ant-image-preview-moving", ctx.isDragging);
    }
  },
  exportAs: ["nzImagePreview"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 17,
  vars: 5,
  consts: [["imagePreviewWrapper", ""], ["imgRef", ""], [1, "ant-image-preview-mask"], [1, "ant-image-preview-operations-wrapper"], [1, "ant-image-preview-operations"], [1, "ant-image-preview-operations-progress"], [1, "ant-image-preview-operations-operation", 3, "ant-image-preview-operations-operation-disabled"], ["tabindex", "-1", 1, "ant-image-preview-wrap", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "ant-image-preview"], ["tabindex", "0", "aria-hidden", "true", 2, "width", "0", "height", "0", "overflow", "hidden", "outline", "none"], [1, "ant-image-preview-content"], [1, "ant-image-preview-body"], ["cdkDrag", "", 1, "ant-image-preview-img-wrapper", 3, "cdkDragEnded", "cdkDragFreeDragPosition"], [1, "ant-image-preview-switch-left", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "ant-image-preview-switch-right", 3, "click"], ["nz-icon", "", "nzType", "right", "nzTheme", "outline"], [1, "ant-image-preview-operations-operation", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 1, "ant-image-preview-operations-icon", 3, "nzType", "nzRotate"], ["cdkDragHandle", "", 1, "ant-image-preview-img", 3, "width", "height", "transform"], ["cdkDragHandle", "", 1, "ant-image-preview-img"]],
  template: function NzImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelement(0, "div", 2);
      ɵɵelementStart(1, "div", 3);
      ɵɵtemplate(2, NzImagePreviewComponent_Conditional_2_Template, 4, 4);
      ɵɵelementStart(3, "ul", 4);
      ɵɵtemplate(4, NzImagePreviewComponent_Conditional_4_Template, 2, 2, "li", 5);
      ɵɵrepeaterCreate(5, NzImagePreviewComponent_For_6_Template, 2, 4, "li", 6, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 7);
      ɵɵlistener("click", function NzImagePreviewComponent_Template_div_click_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.maskClosable && $event.target === $event.currentTarget && ctx.onClose());
      });
      ɵɵelementStart(8, "div", 8);
      ɵɵelement(9, "div", 9);
      ɵɵelementStart(10, "div", 10)(11, "div", 11)(12, "div", 12, 0);
      ɵɵlistener("cdkDragEnded", function NzImagePreviewComponent_Template_div_cdkDragEnded_12_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onDragEnd($event));
      });
      ɵɵrepeaterCreate(14, NzImagePreviewComponent_For_15_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd()()();
      ɵɵelement(16, "div", 9);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.images.length > 1 ? 2 : -1);
      ɵɵadvance(2);
      ɵɵconditional(4, ctx.images.length > 1 ? 4 : -1);
      ɵɵadvance();
      ɵɵrepeater(ctx.operations);
      ɵɵadvance(7);
      ɵɵstyleProp("transform", ctx.previewImageWrapperTransform);
      ɵɵproperty("cdkDragFreeDragPosition", ctx.position);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.images);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, CdkDragHandle, CdkDrag],
  encapsulation: 2,
  data: {
    animation: [fadeMotion]
  },
  changeDetection: 0
});
var NzImagePreviewComponent = _NzImagePreviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImagePreviewComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-preview",
      exportAs: "nzImagePreview",
      animations: [fadeMotion],
      standalone: true,
      template: `
    <div class="ant-image-preview-mask"></div>

    <div class="ant-image-preview-operations-wrapper">
      @if (images.length > 1) {
        <div
          class="ant-image-preview-switch-left"
          [class.ant-image-preview-switch-left-disabled]="index <= 0"
          (click)="onSwitchLeft($event)"
        >
          <span nz-icon nzType="left" nzTheme="outline"></span>
        </div>
        <div
          class="ant-image-preview-switch-right"
          [class.ant-image-preview-switch-right-disabled]="index >= images.length - 1"
          (click)="onSwitchRight($event)"
        >
          <span nz-icon nzType="right" nzTheme="outline"></span>
        </div>
      }

      <ul class="ant-image-preview-operations">
        @if (images.length > 1) {
          <li class="ant-image-preview-operations-progress">{{ index + 1 }} / {{ images.length }}</li>
        }

        @for (option of operations; track option) {
          <li
            class="ant-image-preview-operations-operation"
            [class.ant-image-preview-operations-operation-disabled]="zoomOutDisabled && option.type === 'zoomOut'"
            (click)="option.onClick()"
          >
            <span
              class="ant-image-preview-operations-icon"
              nz-icon
              [nzType]="option.icon"
              [nzRotate]="option.rotate ?? 0"
              nzTheme="outline"
            ></span>
          </li>
        }
      </ul>
    </div>

    <div
      class="ant-image-preview-wrap"
      tabindex="-1"
      (click)="maskClosable && $event.target === $event.currentTarget && onClose()"
    >
      <div class="ant-image-preview" role="dialog" aria-modal="true">
        <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
        <div class="ant-image-preview-content">
          <div class="ant-image-preview-body">
            <div
              class="ant-image-preview-img-wrapper"
              #imagePreviewWrapper
              cdkDrag
              [style.transform]="previewImageWrapperTransform"
              [cdkDragFreeDragPosition]="position"
              (cdkDragEnded)="onDragEnd($event)"
            >
              @for (image of images; track image; let imageIndex = $index) {
                @if (imageIndex === index) {
                  <img
                    cdkDragHandle
                    class="ant-image-preview-img"
                    #imgRef
                    [attr.src]="sanitizerResourceUrl(image.src)"
                    [attr.srcset]="image.srcset"
                    [attr.alt]="image.alt"
                    [style.width]="image.width"
                    [style.height]="image.height"
                    [style.transform]="previewImageTransform"
                  />
                }
              }
            </div>
          </div>
        </div>
        <div tabindex="0" aria-hidden="true" style="width: 0; height: 0; overflow: hidden; outline: none;"></div>
      </div>
    </div>
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-image-preview-root",
        "[class.ant-image-preview-moving]": "isDragging",
        "[style.zIndex]": "config.nzZIndex",
        "[@.disabled]": "config.nzNoAnimation",
        "[@fadeMotion]": `visible ? 'enter' : 'leave'`,
        "(@fadeMotion.start)": "onAnimationStart($event)",
        "(@fadeMotion.done)": "onAnimationDone($event)"
      },
      imports: [NzIconModule, CdkDragHandle, CdkDrag],
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: NzImagePreviewOptions
  }, {
    type: NzDestroyService
  }, {
    type: DomSanitizer
  }], {
    imageRef: [{
      type: ViewChild,
      args: ["imgRef"]
    }],
    imagePreviewWrapper: [{
      type: ViewChild,
      args: ["imagePreviewWrapper", {
        static: true
      }]
    }]
  });
})();
var NzImagePreviewRef = class {
  constructor(previewInstance, config, overlayRef) {
    this.previewInstance = previewInstance;
    this.config = config;
    this.overlayRef = overlayRef;
    this.destroy$ = new Subject();
    overlayRef.keydownEvents().pipe(filter((event) => this.config.nzKeyboard && (event.keyCode === ESCAPE || event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW) && !hasModifierKey(event))).subscribe((event) => {
      event.preventDefault();
      if (event.keyCode === ESCAPE) {
        previewInstance.onClose();
      }
      if (event.keyCode === LEFT_ARROW) {
        this.prev();
      }
      if (event.keyCode === RIGHT_ARROW) {
        this.next();
      }
    });
    overlayRef.detachments().subscribe(() => {
      this.overlayRef.dispose();
    });
    previewInstance.closeClick.pipe(take(1), switchMap(() => previewInstance.animationStateChanged), filter((event) => event.phaseName === "done"), takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
  }
  switchTo(index) {
    this.previewInstance.switchTo(index);
  }
  next() {
    this.previewInstance.next();
  }
  prev() {
    this.previewInstance.prev();
  }
  close() {
    this.destroy$.next();
    this.overlayRef.dispose();
  }
};
var _NzImageService = class _NzImageService {
  constructor(overlay, injector, nzConfigService, directionality) {
    this.overlay = overlay;
    this.injector = injector;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
  }
  preview(images, options, zoomMap) {
    return this.display(images, options, zoomMap);
  }
  display(images, config, scaleStepMap) {
    const configMerged = __spreadValues(__spreadValues({}, new NzImagePreviewOptions()), config ?? {});
    const overlayRef = this.createOverlay(configMerged);
    const previewComponent = this.attachPreviewComponent(overlayRef, configMerged);
    previewComponent.setImages(images, scaleStepMap);
    const previewRef = new NzImagePreviewRef(previewComponent, configMerged, overlayRef);
    previewComponent.previewRef = previewRef;
    return previewRef;
  }
  attachPreviewComponent(overlayRef, config) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{
        provide: OverlayRef,
        useValue: overlayRef
      }, {
        provide: NzImagePreviewOptions,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(NzImagePreviewComponent, null, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
  createOverlay(config) {
    const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    const overLayConfig = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      disposeOnNavigation: config.nzCloseOnNavigation ?? globalConfig.nzCloseOnNavigation ?? true,
      direction: config.nzDirection || globalConfig.nzDirection || this.directionality.value
    });
    return this.overlay.create(overLayConfig);
  }
};
_NzImageService.ɵfac = function NzImageService_Factory(t) {
  return new (t || _NzImageService)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(NzConfigService), ɵɵinject(Directionality));
};
_NzImageService.ɵprov = ɵɵdefineInjectable({
  token: _NzImageService,
  factory: _NzImageService.ɵfac
});
var NzImageService = _NzImageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], null);
})();
var NZ_CONFIG_MODULE_NAME = "image";
var _NzImageDirective = class _NzImageDirective {
  get previewable() {
    return !this.nzDisablePreview && this.status !== "error";
  }
  constructor(nzConfigService, elementRef, nzImageService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.nzImageService = nzImageService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzSrc = "";
    this.nzSrcset = "";
    this.nzDisablePreview = false;
    this.nzFallback = null;
    this.nzPlaceholder = null;
    this.nzScaleStep = null;
    this.status = "normal";
    this.backLoadDestroy$ = new Subject();
    this.destroy$ = new Subject();
    this.document = inject(DOCUMENT);
    this.parentGroup = inject(NzImageGroupComponent, {
      optional: true
    });
  }
  ngOnInit() {
    this.backLoad();
    if (this.parentGroup) {
      this.parentGroup.addImage(this);
    }
    if (this.directionality) {
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPreview() {
    if (!this.previewable) {
      return;
    }
    if (this.parentGroup) {
      const previewAbleImages = this.parentGroup.images.filter((e) => e.previewable);
      const previewImages = previewAbleImages.map((e) => ({
        src: e.nzSrc,
        srcset: e.nzSrcset
      }));
      const previewIndex = previewAbleImages.findIndex((el) => this === el);
      const scaleStepMap = /* @__PURE__ */ new Map();
      previewAbleImages.forEach((imageDirective) => {
        scaleStepMap.set(imageDirective.nzSrc ?? imageDirective.nzSrcset, imageDirective.nzScaleStep ?? this.parentGroup.nzScaleStep ?? this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP);
      });
      const previewRef = this.nzImageService.preview(previewImages, {
        nzDirection: this.dir
      }, scaleStepMap);
      previewRef.switchTo(previewIndex);
    } else {
      const previewImages = [{
        src: this.nzSrc,
        srcset: this.nzSrcset
      }];
      this.nzImageService.preview(previewImages, {
        nzDirection: this.dir,
        nzScaleStep: this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP
      });
    }
  }
  getElement() {
    return this.elementRef;
  }
  ngOnChanges(changes) {
    const {
      nzSrc
    } = changes;
    if (nzSrc) {
      this.getElement().nativeElement.src = nzSrc.currentValue;
      this.backLoad();
    }
  }
  /**
   * use internal Image object handle fallback & placeholder
   *
   * @private
   */
  backLoad() {
    this.backLoadImage = this.document.createElement("img");
    this.backLoadImage.src = this.nzSrc;
    this.backLoadImage.srcset = this.nzSrcset;
    this.status = "loading";
    this.backLoadDestroy$.next();
    this.backLoadDestroy$.complete();
    this.backLoadDestroy$ = new Subject();
    if (this.backLoadImage.complete) {
      this.status = "normal";
      this.getElement().nativeElement.src = this.nzSrc;
      this.getElement().nativeElement.srcset = this.nzSrcset;
    } else {
      if (this.nzPlaceholder) {
        this.getElement().nativeElement.src = this.nzPlaceholder;
        this.getElement().nativeElement.srcset = "";
      } else {
        this.getElement().nativeElement.src = this.nzSrc;
        this.getElement().nativeElement.srcset = this.nzSrcset;
      }
      fromEvent(this.backLoadImage, "load").pipe(takeUntil(this.backLoadDestroy$), takeUntil(this.destroy$)).subscribe(() => {
        this.status = "normal";
        this.getElement().nativeElement.src = this.nzSrc;
        this.getElement().nativeElement.srcset = this.nzSrcset;
      });
      fromEvent(this.backLoadImage, "error").pipe(takeUntil(this.backLoadDestroy$), takeUntil(this.destroy$)).subscribe(() => {
        this.status = "error";
        if (this.nzFallback) {
          this.getElement().nativeElement.src = this.nzFallback;
          this.getElement().nativeElement.srcset = "";
        }
      });
    }
  }
};
_NzImageDirective.ɵfac = function NzImageDirective_Factory(t) {
  return new (t || _NzImageDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzImageService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
};
_NzImageDirective.ɵdir = ɵɵdefineDirective({
  type: _NzImageDirective,
  selectors: [["img", "nz-image", ""]],
  hostBindings: function NzImageDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzImageDirective_click_HostBindingHandler() {
        return ctx.onPreview();
      });
    }
  },
  inputs: {
    nzSrc: "nzSrc",
    nzSrcset: "nzSrcset",
    nzDisablePreview: [InputFlags.HasDecoratorInputTransform, "nzDisablePreview", "nzDisablePreview", booleanAttribute],
    nzFallback: "nzFallback",
    nzPlaceholder: "nzPlaceholder",
    nzScaleStep: "nzScaleStep"
  },
  exportAs: ["nzImage"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzImageDirective = _NzImageDirective;
__decorate([WithConfig()], NzImageDirective.prototype, "nzDisablePreview", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzFallback", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzPlaceholder", void 0);
__decorate([WithConfig()], NzImageDirective.prototype, "nzScaleStep", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[nz-image]",
      exportAs: "nzImage",
      host: {
        "(click)": "onPreview()"
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzImageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzSrc: [{
      type: Input
    }],
    nzSrcset: [{
      type: Input
    }],
    nzDisablePreview: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzFallback: [{
      type: Input
    }],
    nzPlaceholder: [{
      type: Input
    }],
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var _NzImageModule = class _NzImageModule {
};
_NzImageModule.ɵfac = function NzImageModule_Factory(t) {
  return new (t || _NzImageModule)();
};
_NzImageModule.ɵmod = ɵɵdefineNgModule({
  type: _NzImageModule,
  imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
  exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]
});
_NzImageModule.ɵinj = ɵɵdefineInjector({
  providers: [NzImageService],
  imports: [NzImagePreviewComponent]
});
var NzImageModule = _NzImageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageModule, [{
    type: NgModule,
    args: [{
      imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      providers: [NzImageService]
    }]
  }], null, null);
})();
export {
  FADE_CLASS_NAME_MAP,
  IMAGE_PREVIEW_MASK_CLASS_NAME,
  NZ_CONFIG_MODULE_NAME$1 as NZ_CONFIG_MODULE_NAME,
  NZ_DEFAULT_SCALE_STEP,
  NzImageDirective,
  NzImageGroupComponent,
  NzImageModule,
  NzImagePreviewComponent,
  NzImagePreviewOptions,
  NzImagePreviewRef,
  NzImageService,
  getClientSize,
  getFitContentPosition,
  getOffset
};
//# sourceMappingURL=ng-zorro-antd_image.js.map
