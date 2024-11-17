import {
  DOCUMENT
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  InputFlags,
  NgModule,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-RGUNTEJD.js";
import "./chunk-Q6ZVTVW4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-water-mark.mjs
var _c0 = ["*"];
function getPixelRatio() {
  return window.devicePixelRatio || 1;
}
function toLowercaseSeparator(key) {
  return key.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function getStyleStr(style) {
  const keys = Object.keys(style);
  const styleCss = keys.map((key) => `${toLowercaseSeparator(key)}: ${style[key]};`);
  return styleCss.join(" ");
}
function reRendering(mutation, watermarkElement) {
  let flag = false;
  if (mutation.removedNodes.length) {
    flag = Array.from(mutation.removedNodes).some((node) => node === watermarkElement);
  }
  if (mutation.type === "attributes" && mutation.target === watermarkElement) {
    flag = true;
  }
  return flag;
}
function rotateWatermark(ctx, rotateX, rotateY, rotate) {
  ctx.translate(rotateX, rotateY);
  ctx.rotate(Math.PI / 180 * Number(rotate));
  ctx.translate(-rotateX, -rotateY);
}
var BaseSize = 2;
var FontGap = 3;
var _NzWaterMarkComponent = class _NzWaterMarkComponent {
  constructor(el, cdr) {
    this.el = el;
    this.cdr = cdr;
    this.nzWidth = 120;
    this.nzHeight = 64;
    this.nzRotate = -22;
    this.nzZIndex = 9;
    this.nzImage = "";
    this.nzContent = "";
    this.nzFont = {};
    this.nzGap = [100, 100];
    this.nzOffset = [this.nzGap[0] / 2, this.nzGap[1] / 2];
    this.document = inject(DOCUMENT);
    this.waterMarkElement = this.document.createElement("div");
    this.stopObservation = false;
    this.observer = new MutationObserver((mutations) => {
      if (this.stopObservation) {
        return;
      }
      mutations.forEach((mutation) => {
        if (reRendering(mutation, this.waterMarkElement)) {
          this.destroyWatermark();
          this.renderWatermark();
        }
      });
    });
  }
  ngOnInit() {
    this.observer.observe(this.el.nativeElement, {
      subtree: true,
      childList: true,
      attributeFilter: ["style", "class"]
    });
  }
  ngAfterViewInit() {
    this.renderWatermark();
  }
  ngOnChanges(changes) {
    const {
      nzRotate,
      nzZIndex,
      nzWidth,
      nzHeight,
      nzImage,
      nzContent,
      nzFont,
      gapX,
      gapY,
      offsetLeft,
      offsetTop
    } = changes;
    if (nzRotate || nzZIndex || nzWidth || nzHeight || nzImage || nzContent || nzFont || gapX || gapY || offsetLeft || offsetTop) {
      this.renderWatermark();
    }
  }
  getFont() {
    const font = {
      color: "rgba(0,0,0,.15)",
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: "sans-serif",
      fontStyle: "normal"
    };
    this.nzFont = __spreadValues(__spreadValues({}, font), this.nzFont);
    this.cdr.markForCheck();
  }
  getMarkStyle() {
    const markStyle = {
      zIndex: this.nzZIndex,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      backgroundRepeat: "repeat",
      visibility: "visible"
    };
    let positionLeft = (this.nzOffset?.[0] ?? this.nzGap[0] / 2) - this.nzGap[0] / 2;
    let positionTop = (this.nzOffset?.[1] ?? this.nzGap[1] / 2) - this.nzGap[1] / 2;
    if (positionLeft > 0) {
      markStyle.left = `${positionLeft}px`;
      markStyle.width = `calc(100% - ${positionLeft}px)`;
      positionLeft = 0;
    }
    if (positionTop > 0) {
      markStyle.top = `${positionTop}px`;
      markStyle.height = `calc(100% - ${positionTop}px)`;
      positionTop = 0;
    }
    markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;
    return markStyle;
  }
  destroyWatermark() {
    if (this.waterMarkElement) {
      this.waterMarkElement.remove();
    }
  }
  appendWatermark(base64Url, markWidth) {
    this.stopObservation = true;
    this.waterMarkElement.setAttribute("style", getStyleStr(__spreadProps(__spreadValues({}, this.getMarkStyle()), {
      backgroundImage: `url('${base64Url}')`,
      backgroundSize: `${(this.nzGap[0] + markWidth) * BaseSize}px`
    })));
    this.el.nativeElement.append(this.waterMarkElement);
    this.cdr.markForCheck();
    setTimeout(() => {
      this.stopObservation = false;
      this.cdr.markForCheck();
    });
  }
  getMarkSize(ctx) {
    let defaultWidth = 120;
    let defaultHeight = 64;
    if (!this.nzImage && ctx.measureText) {
      ctx.font = `${Number(this.nzFont.fontSize)}px ${this.nzFont.fontFamily}`;
      const contents = Array.isArray(this.nzContent) ? this.nzContent : [this.nzContent];
      const widths = contents.map((item) => ctx.measureText(item).width);
      defaultWidth = Math.ceil(Math.max(...widths));
      defaultHeight = Number(this.nzFont.fontSize) * contents.length + (contents.length - 1) * FontGap;
    }
    return [this.nzWidth ?? defaultWidth, this.nzHeight ?? defaultHeight];
  }
  fillTexts(ctx, drawX, drawY, drawWidth, drawHeight) {
    const ratio = getPixelRatio();
    const mergedFontSize = Number(this.nzFont.fontSize) * ratio;
    ctx.font = `${this.nzFont.fontStyle} normal ${this.nzFont.fontWeight} ${mergedFontSize}px/${drawHeight}px ${this.nzFont.fontFamily}`;
    if (this.nzFont.color)
      ctx.fillStyle = this.nzFont.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.translate(drawWidth / 2, 0);
    const contents = Array.isArray(this.nzContent) ? this.nzContent : [this.nzContent];
    contents?.forEach((item, index) => {
      ctx.fillText(item ?? "", drawX, drawY + index * (mergedFontSize + FontGap * ratio));
    });
  }
  drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth) {
    this.fillTexts(ctx, drawX, drawY, drawWidth, drawHeight);
    ctx.restore();
    rotateWatermark(ctx, alternateRotateX, alternateRotateY, this.nzRotate);
    this.fillTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
    this.appendWatermark(canvas.toDataURL(), markWidth);
  }
  renderWatermark() {
    if (!this.nzContent && !this.nzImage) {
      return;
    }
    const canvas = this.document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      if (!this.waterMarkElement) {
        this.waterMarkElement = this.document.createElement("div");
      }
      this.getFont();
      const ratio = getPixelRatio();
      const [markWidth, markHeight] = this.getMarkSize(ctx);
      const canvasWidth = (this.nzGap[0] + markWidth) * ratio;
      const canvasHeight = (this.nzGap[1] + markHeight) * ratio;
      canvas.setAttribute("width", `${canvasWidth * BaseSize}px`);
      canvas.setAttribute("height", `${canvasHeight * BaseSize}px`);
      const drawX = this.nzGap[0] * ratio / 2;
      const drawY = this.nzGap[1] * ratio / 2;
      const drawWidth = markWidth * ratio;
      const drawHeight = markHeight * ratio;
      const rotateX = (drawWidth + this.nzGap[0] * ratio) / 2;
      const rotateY = (drawHeight + this.nzGap[1] * ratio) / 2;
      const alternateDrawX = drawX + canvasWidth;
      const alternateDrawY = drawY + canvasHeight;
      const alternateRotateX = rotateX + canvasWidth;
      const alternateRotateY = rotateY + canvasHeight;
      ctx.save();
      rotateWatermark(ctx, rotateX, rotateY, this.nzRotate);
      if (this.nzImage) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          ctx.restore();
          rotateWatermark(ctx, alternateRotateX, alternateRotateY, this.nzRotate);
          ctx.drawImage(img, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
          this.appendWatermark(canvas.toDataURL(), markWidth);
        };
        img.onerror = () => this.drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth);
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = this.nzImage;
      } else {
        this.drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth);
      }
    }
  }
  ngOnDestroy() {
    this.observer.disconnect();
  }
};
_NzWaterMarkComponent.ɵfac = function NzWaterMarkComponent_Factory(t) {
  return new (t || _NzWaterMarkComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzWaterMarkComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzWaterMarkComponent,
  selectors: [["nz-water-mark"]],
  hostAttrs: [1, "ant-water-mark"],
  inputs: {
    nzWidth: [InputFlags.HasDecoratorInputTransform, "nzWidth", "nzWidth", numberAttribute],
    nzHeight: [InputFlags.HasDecoratorInputTransform, "nzHeight", "nzHeight", numberAttribute],
    nzRotate: [InputFlags.HasDecoratorInputTransform, "nzRotate", "nzRotate", numberAttribute],
    nzZIndex: [InputFlags.HasDecoratorInputTransform, "nzZIndex", "nzZIndex", numberAttribute],
    nzImage: "nzImage",
    nzContent: "nzContent",
    nzFont: "nzFont",
    nzGap: "nzGap",
    nzOffset: "nzOffset"
  },
  exportAs: ["NzWaterMark"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzWaterMarkComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzWaterMarkComponent = _NzWaterMarkComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaterMarkComponent, [{
    type: Component,
    args: [{
      selector: "nz-water-mark",
      standalone: true,
      exportAs: "NzWaterMark",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-water-mark"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    nzWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzRotate: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzImage: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzFont: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }]
  });
})();
var _NzWaterMarkModule = class _NzWaterMarkModule {
};
_NzWaterMarkModule.ɵfac = function NzWaterMarkModule_Factory(t) {
  return new (t || _NzWaterMarkModule)();
};
_NzWaterMarkModule.ɵmod = ɵɵdefineNgModule({
  type: _NzWaterMarkModule,
  imports: [NzWaterMarkComponent],
  exports: [NzWaterMarkComponent]
});
_NzWaterMarkModule.ɵinj = ɵɵdefineInjector({});
var NzWaterMarkModule = _NzWaterMarkModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaterMarkModule, [{
    type: NgModule,
    args: [{
      exports: [NzWaterMarkComponent],
      imports: [NzWaterMarkComponent]
    }]
  }], null, null);
})();
export {
  NzWaterMarkComponent,
  NzWaterMarkModule
};
//# sourceMappingURL=ng-zorro-antd_water-mark.js.map
