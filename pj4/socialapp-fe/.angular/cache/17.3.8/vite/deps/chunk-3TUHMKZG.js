import {
  BarsOutline,
  CalendarOutline,
  CaretDownFill,
  CaretDownOutline,
  CaretUpFill,
  CaretUpOutline,
  CheckCircleFill,
  CheckCircleOutline,
  CheckOutline,
  ClockCircleOutline,
  CloseCircleFill,
  CloseCircleOutline,
  CloseOutline,
  CopyOutline,
  DeleteOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
  DownOutline,
  EditOutline,
  EllipsisOutline,
  ExclamationCircleFill,
  ExclamationCircleOutline,
  EyeOutline,
  FileFill,
  FileOutline,
  FilterFill,
  InfoCircleFill,
  InfoCircleOutline,
  LeftOutline,
  LoadingOutline,
  PaperClipOutline,
  QuestionCircleOutline,
  RightOutline,
  RotateLeftOutline,
  RotateRightOutline,
  SearchOutline,
  StarFill,
  SwapOutline,
  SwapRightOutline,
  UpOutline,
  UploadOutline,
  VerticalAlignTopOutline,
  ZoomInOutline,
  ZoomOutOutline
} from "./chunk-3JSU54FM.js";
import {
  IconDirective,
  IconService
} from "./chunk-IDCCK3LW.js";
import {
  Platform
} from "./chunk-E5TUG3TZ.js";
import {
  NzConfigService
} from "./chunk-7ZIF5OVP.js";
import {
  warn
} from "./chunk-444SWNZ7.js";
import {
  DomSanitizer
} from "./chunk-SHIUUSE2.js";
import {
  HttpBackend
} from "./chunk-C4KMBTLC.js";
import {
  DOCUMENT
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Renderer2,
  RendererFactory2,
  booleanAttribute,
  inject,
  makeEnvironmentProviders,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-RGUNTEJD.js";
import {
  Subject,
  from,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-icon.mjs
var NZ_ICONS_USED_BY_ZORRO = [BarsOutline, CalendarOutline, CaretUpFill, CaretUpOutline, CaretDownFill, CaretDownOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleOutline, CloseCircleFill, CloseOutline, CopyOutline, DeleteOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, RotateRightOutline, RotateLeftOutline, StarFill, SearchOutline, StarFill, UploadOutline, VerticalAlignTopOutline, UpOutline, SwapOutline, SwapRightOutline, ZoomInOutline, ZoomOutOutline];
var NZ_ICONS = new InjectionToken("nz_icons");
var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken("nz_icon_default_twotone_color");
var DEFAULT_TWOTONE_COLOR = "#1890ff";
var _NzIconService = class _NzIconService extends IconService {
  get _disableDynamicLoading() {
    return !this.platform.isBrowser;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  normalizeSvgElement(svg) {
    if (!svg.getAttribute("viewBox")) {
      this._renderer.setAttribute(svg, "viewBox", "0 0 1024 1024");
    }
    if (!svg.getAttribute("width") || !svg.getAttribute("height")) {
      this._renderer.setAttribute(svg, "width", "1em");
      this._renderer.setAttribute(svg, "height", "1em");
    }
    if (!svg.getAttribute("fill")) {
      this._renderer.setAttribute(svg, "fill", "currentColor");
    }
  }
  fetchFromIconfont(opt) {
    const {
      scriptUrl
    } = opt;
    if (this._document && !this.iconfontCache.has(scriptUrl)) {
      const script = this._renderer.createElement("script");
      this._renderer.setAttribute(script, "src", scriptUrl);
      this._renderer.setAttribute(script, "data-namespace", scriptUrl.replace(/^(https?|http):/g, ""));
      this._renderer.appendChild(this._document.body, script);
      this.iconfontCache.add(scriptUrl);
    }
  }
  createIconfontIcon(type) {
    return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
  }
  constructor(rendererFactory, sanitizer, nzConfigService, platform) {
    super(
      rendererFactory,
      inject(HttpBackend, {
        optional: true
      }),
      // TODO: fix the type
      inject(DOCUMENT),
      sanitizer,
      [...NZ_ICONS_USED_BY_ZORRO, ...inject(NZ_ICONS, {
        optional: true
      }) || []]
    );
    this.nzConfigService = nzConfigService;
    this.platform = platform;
    this.configUpdated$ = new Subject();
    this.iconfontCache = /* @__PURE__ */ new Set();
    this.subscription = null;
    this.onConfigChange();
    this.configDefaultTwotoneColor();
    this.configDefaultTheme();
  }
  onConfigChange() {
    this.subscription = this.nzConfigService.getConfigChangeEventForComponent("icon").subscribe(() => {
      this.configDefaultTwotoneColor();
      this.configDefaultTheme();
      this.configUpdated$.next();
    });
  }
  configDefaultTheme() {
    const iconConfig = this.getConfig();
    this.defaultTheme = iconConfig.nzTheme || "outline";
  }
  configDefaultTwotoneColor() {
    const iconConfig = this.getConfig();
    const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
    let primaryColor = DEFAULT_TWOTONE_COLOR;
    if (defaultTwotoneColor) {
      if (defaultTwotoneColor.startsWith("#")) {
        primaryColor = defaultTwotoneColor;
      } else {
        warn("Twotone color must be a hex color!");
      }
    }
    this.twoToneColor = {
      primaryColor
    };
  }
  getConfig() {
    return this.nzConfigService.getConfigForComponent("icon") || {};
  }
};
_NzIconService.ɵfac = function NzIconService_Factory(t) {
  return new (t || _NzIconService)(ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer), ɵɵinject(NzConfigService), ɵɵinject(Platform));
};
_NzIconService.ɵprov = ɵɵdefineInjectable({
  token: _NzIconService,
  factory: _NzIconService.ɵfac,
  providedIn: "root"
});
var NzIconService = _NzIconService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: DomSanitizer
  }, {
    type: NzConfigService
  }, {
    type: Platform
  }], null);
})();
var NZ_ICONS_PATCH = new InjectionToken("nz_icons_patch");
var _NzIconPatchService = class _NzIconPatchService {
  constructor(rootIconService) {
    this.rootIconService = rootIconService;
    this.patched = false;
    this.extraIcons = inject(NZ_ICONS_PATCH, {
      self: true
    });
  }
  doPatch() {
    if (this.patched) {
      return;
    }
    this.extraIcons.forEach((iconDefinition) => this.rootIconService.addIcon(iconDefinition));
    this.patched = true;
  }
};
_NzIconPatchService.ɵfac = function NzIconPatchService_Factory(t) {
  return new (t || _NzIconPatchService)(ɵɵinject(NzIconService));
};
_NzIconPatchService.ɵprov = ɵɵdefineInjectable({
  token: _NzIconPatchService,
  factory: _NzIconPatchService.ɵfac
});
var NzIconPatchService = _NzIconPatchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconPatchService, [{
    type: Injectable
  }], () => [{
    type: NzIconService
  }], null);
})();
var _NzIconDirective = class _NzIconDirective extends IconDirective {
  set nzSpin(value) {
    this.spin = value;
  }
  set nzType(value) {
    this.type = value;
  }
  set nzTheme(value) {
    this.theme = value;
  }
  set nzTwotoneColor(value) {
    this.twoToneColor = value;
  }
  set nzIconfont(value) {
    this.iconfont = value;
  }
  constructor(ngZone, changeDetectorRef, elementRef, iconService, renderer) {
    super(iconService, elementRef, renderer);
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.iconService = iconService;
    this.renderer = renderer;
    this.cacheClassName = null;
    this.nzRotate = 0;
    this.spin = false;
    this.destroy$ = new Subject();
    const iconPatch = inject(NzIconPatchService, {
      optional: true
    });
    if (iconPatch) {
      iconPatch.doPatch();
    }
    this.el = elementRef.nativeElement;
  }
  ngOnChanges(changes) {
    const {
      nzType,
      nzTwotoneColor,
      nzSpin,
      nzTheme,
      nzRotate
    } = changes;
    if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
      this.changeIcon2();
    } else if (nzRotate) {
      this.handleRotate(this.el.firstChild);
    } else {
      this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
    }
  }
  ngOnInit() {
    this.renderer.setAttribute(this.el, "class", `anticon ${this.el.className}`.trim());
  }
  /**
   * If custom content is provided, try to normalize SVG elements.
   */
  ngAfterContentChecked() {
    if (!this.type) {
      const children = this.el.children;
      let length = children.length;
      if (!this.type && children.length) {
        while (length--) {
          const child = children[length];
          if (child.tagName.toLowerCase() === "svg") {
            this.iconService.normalizeSvgElement(child);
          }
        }
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  /**
   * Replacement of `changeIcon` for more modifications.
   */
  changeIcon2() {
    this.setClassName();
    this.ngZone.runOutsideAngular(() => {
      from(this._changeIcon()).pipe(takeUntil(this.destroy$)).subscribe({
        next: (svgOrRemove) => {
          this.ngZone.run(() => {
            this.changeDetectorRef.detectChanges();
            if (svgOrRemove) {
              this.setSVGData(svgOrRemove);
              this.handleSpin(svgOrRemove);
              this.handleRotate(svgOrRemove);
            }
          });
        },
        error: warn
      });
    });
  }
  handleSpin(svg) {
    if (this.spin || this.type === "loading") {
      this.renderer.addClass(svg, "anticon-spin");
    } else {
      this.renderer.removeClass(svg, "anticon-spin");
    }
  }
  handleRotate(svg) {
    if (this.nzRotate) {
      this.renderer.setAttribute(svg, "style", `transform: rotate(${this.nzRotate}deg)`);
    } else {
      this.renderer.removeAttribute(svg, "style");
    }
  }
  setClassName() {
    if (this.cacheClassName) {
      this.renderer.removeClass(this.el, this.cacheClassName);
    }
    this.cacheClassName = `anticon-${this.type}`;
    this.renderer.addClass(this.el, this.cacheClassName);
  }
  setSVGData(svg) {
    this.renderer.setAttribute(svg, "data-icon", this.type);
    this.renderer.setAttribute(svg, "aria-hidden", "true");
  }
};
_NzIconDirective.ɵfac = function NzIconDirective_Factory(t) {
  return new (t || _NzIconDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzIconService), ɵɵdirectiveInject(Renderer2));
};
_NzIconDirective.ɵdir = ɵɵdefineDirective({
  type: _NzIconDirective,
  selectors: [["", "nz-icon", ""]],
  hostVars: 2,
  hostBindings: function NzIconDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("anticon", true);
    }
  },
  inputs: {
    nzSpin: [InputFlags.HasDecoratorInputTransform, "nzSpin", "nzSpin", booleanAttribute],
    nzRotate: [InputFlags.HasDecoratorInputTransform, "nzRotate", "nzRotate", numberAttribute],
    nzType: "nzType",
    nzTheme: "nzTheme",
    nzTwotoneColor: "nzTwotoneColor",
    nzIconfont: "nzIconfont"
  },
  exportAs: ["nzIcon"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var NzIconDirective = _NzIconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon]",
      exportAs: "nzIcon",
      host: {
        "[class.anticon]": "true"
      },
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NzIconService
  }, {
    type: Renderer2
  }], {
    nzSpin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRotate: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzTwotoneColor: [{
      type: Input
    }],
    nzIconfont: [{
      type: Input
    }]
  });
})();
var provideNzIcons = (icons) => {
  return makeEnvironmentProviders([{
    provide: NZ_ICONS,
    useValue: icons
  }]);
};
var provideNzIconsPatch = (icons) => {
  return [NzIconPatchService, {
    provide: NZ_ICONS_PATCH,
    useValue: icons
  }];
};
var _NzIconModule = class _NzIconModule {
  static forRoot(icons) {
    return {
      ngModule: _NzIconModule,
      providers: [provideNzIcons(icons)]
    };
  }
  static forChild(icons) {
    return {
      ngModule: _NzIconModule,
      providers: [provideNzIconsPatch(icons)]
    };
  }
};
_NzIconModule.ɵfac = function NzIconModule_Factory(t) {
  return new (t || _NzIconModule)();
};
_NzIconModule.ɵmod = ɵɵdefineNgModule({
  type: _NzIconModule,
  imports: [NzIconDirective],
  exports: [NzIconDirective]
});
_NzIconModule.ɵinj = ɵɵdefineInjector({});
var NzIconModule = _NzIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconModule, [{
    type: NgModule,
    args: [{
      imports: [NzIconDirective],
      exports: [NzIconDirective]
    }]
  }], null, null);
})();

export {
  NZ_ICONS_USED_BY_ZORRO,
  NZ_ICONS,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  DEFAULT_TWOTONE_COLOR,
  NzIconService,
  NZ_ICONS_PATCH,
  NzIconPatchService,
  NzIconDirective,
  provideNzIcons,
  provideNzIconsPatch,
  NzIconModule
};
//# sourceMappingURL=chunk-3TUHMKZG.js.map
