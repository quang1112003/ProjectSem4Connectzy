import {
  NzSpinComponent
} from "./chunk-CMU25QMD.js";
import "./chunk-XNKJYMG5.js";
import {
  Platform
} from "./chunk-E5TUG3TZ.js";
import {
  NzConfigService
} from "./chunk-7ZIF5OVP.js";
import {
  PREFIX,
  inNextTick,
  warn
} from "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-KRHF3YPG.js";
import {
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-RGUNTEJD.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  of,
  takeUntil,
  tap
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-code-editor.mjs
function NzCodeEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelement(1, "nz-spin");
    ɵɵelementEnd();
  }
}
function NzCodeEditorComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzCodeEditorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzCodeEditorComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzToolkit);
  }
}
var NZ_CONFIG_MODULE_NAME = "codeEditor";
function tryTriggerFunc(fn) {
  return (...args) => {
    if (fn) {
      fn(...args);
    }
  };
}
var loaded$ = new ReplaySubject(1);
var loadingStatus = "unload";
var _NzCodeEditorService = class _NzCodeEditorService {
  constructor(nzConfigService) {
    this.nzConfigService = nzConfigService;
    this.document = inject(DOCUMENT);
    this.firstEditorInitialized = false;
    this.option = {};
    this.option$ = new BehaviorSubject(this.option);
    const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
    this.config = __spreadValues({}, globalConfig);
    if (this.config.monacoEnvironment) {
      window.MonacoEnvironment = __spreadValues({}, this.config.monacoEnvironment);
    }
    this.option = this.config.defaultEditorOption || {};
    this.subscription = this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).subscribe(() => {
      const newGlobalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
      if (newGlobalConfig) {
        this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
  _updateDefaultOption(option) {
    this.option = __spreadValues(__spreadValues({}, this.option), option);
    this.option$.next(this.option);
    if ("theme" in option && option.theme) {
      monaco.editor.setTheme(option.theme);
    }
  }
  requestToInit() {
    if (loadingStatus === "LOADED") {
      this.onInit();
      return of(this.getLatestOption());
    }
    if (loadingStatus === "unload") {
      if (this.config.useStaticLoading && typeof monaco === "undefined") {
        warn("You choose to use static loading but it seems that you forget to config webpack plugin correctly. Please refer to our official websitefor more details about static loading.");
      } else {
        this.loadMonacoScript();
      }
    }
    return loaded$.pipe(tap(() => this.onInit()), map(() => this.getLatestOption()));
  }
  loadMonacoScript() {
    if (this.config.useStaticLoading) {
      Promise.resolve().then(() => this.onLoad());
      return;
    }
    if (loadingStatus === "loading") {
      return;
    }
    loadingStatus = "loading";
    const assetsRoot = this.config.assetsRoot;
    const vs = assetsRoot ? `${assetsRoot}/vs` : "assets/vs";
    const windowAsAny = window;
    const loadScript = this.document.createElement("script");
    loadScript.type = "text/javascript";
    loadScript.src = `${vs}/loader.js`;
    const onLoad = () => {
      cleanup();
      windowAsAny.require.config(__spreadValues({
        paths: {
          vs
        }
      }, this.config.extraConfig));
      windowAsAny.require(["vs/editor/editor.main"], () => {
        this.onLoad();
      });
    };
    const onError = () => {
      cleanup();
      throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
    };
    const cleanup = () => {
      loadScript.removeEventListener("load", onLoad);
      loadScript.removeEventListener("error", onError);
      this.document.documentElement.removeChild(loadScript);
    };
    loadScript.addEventListener("load", onLoad);
    loadScript.addEventListener("error", onError);
    this.document.documentElement.appendChild(loadScript);
  }
  onLoad() {
    loadingStatus = "LOADED";
    loaded$.next(true);
    loaded$.complete();
    tryTriggerFunc(this.config.onLoad)();
  }
  onInit() {
    if (!this.firstEditorInitialized) {
      this.firstEditorInitialized = true;
      tryTriggerFunc(this.config.onFirstEditorInit)();
    }
    tryTriggerFunc(this.config.onInit)();
  }
  getLatestOption() {
    return __spreadValues({}, this.option);
  }
};
_NzCodeEditorService.ɵfac = function NzCodeEditorService_Factory(t) {
  return new (t || _NzCodeEditorService)(ɵɵinject(NzConfigService));
};
_NzCodeEditorService.ɵprov = ɵɵdefineInjectable({
  token: _NzCodeEditorService,
  factory: _NzCodeEditorService.ɵfac,
  providedIn: "root"
});
var NzCodeEditorService = _NzCodeEditorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCodeEditorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzConfigService
  }], null);
})();
var _NzCodeEditorComponent = class _NzCodeEditorComponent {
  set nzEditorOption(value) {
    this.editorOption$.next(value);
  }
  constructor(nzCodeEditorService, ngZone, elementRef, platform) {
    this.nzCodeEditorService = nzCodeEditorService;
    this.ngZone = ngZone;
    this.platform = platform;
    this.nzEditorMode = "normal";
    this.nzOriginalText = "";
    this.nzLoading = false;
    this.nzFullControl = false;
    this.nzEditorInitialized = new EventEmitter();
    this.editorOptionCached = {};
    this.destroy$ = new Subject();
    this.resize$ = new Subject();
    this.editorOption$ = new BehaviorSubject({});
    this.editorInstance = null;
    this.value = "";
    this.modelSet = false;
    this.onDidChangeContentDisposable = null;
    this.onChange = (_value) => {
    };
    this.onTouch = () => {
    };
    this.el = elementRef.nativeElement;
    this.el.classList.add("ant-code-editor");
  }
  /**
   * Initialize a monaco editor instance.
   */
  ngAfterViewInit() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.nzCodeEditorService.requestToInit().pipe(takeUntil(this.destroy$)).subscribe((option) => this.setup(option));
  }
  ngOnDestroy() {
    if (this.onDidChangeContentDisposable) {
      this.onDidChangeContentDisposable.dispose();
      this.onDidChangeContentDisposable = null;
    }
    if (this.editorInstance) {
      this.editorInstance.dispose();
      this.editorInstance = null;
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value) {
    this.value = value;
    this.setValue();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  layout() {
    this.resize$.next();
  }
  setup(option) {
    this.ngZone.runOutsideAngular(() => inNextTick().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.editorOptionCached = option;
      this.registerOptionChanges();
      this.initMonacoEditorInstance();
      this.registerResizeChange();
      this.setValue();
      if (!this.nzFullControl) {
        this.setValueEmitter();
      }
      if (this.nzEditorInitialized.observers.length) {
        this.ngZone.run(() => this.nzEditorInitialized.emit(this.editorInstance));
      }
    }));
  }
  registerOptionChanges() {
    combineLatest([this.editorOption$, this.nzCodeEditorService.option$]).pipe(takeUntil(this.destroy$)).subscribe(([selfOpt, defaultOpt]) => {
      this.editorOptionCached = __spreadValues(__spreadValues(__spreadValues({}, this.editorOptionCached), defaultOpt), selfOpt);
      this.updateOptionToMonaco();
    });
  }
  initMonacoEditorInstance() {
    this.ngZone.runOutsideAngular(() => {
      this.editorInstance = this.nzEditorMode === "normal" ? monaco.editor.create(this.el, __spreadValues({}, this.editorOptionCached)) : monaco.editor.createDiffEditor(this.el, __spreadValues({}, this.editorOptionCached));
    });
  }
  registerResizeChange() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, "resize").pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe(() => {
        this.layout();
      });
      this.resize$.pipe(takeUntil(this.destroy$), filter(() => !!this.editorInstance), map(() => ({
        width: this.el.clientWidth,
        height: this.el.clientHeight
      })), distinctUntilChanged((a, b) => a.width === b.width && a.height === b.height), debounceTime(50)).subscribe(() => {
        this.editorInstance.layout();
      });
    });
  }
  setValue() {
    if (!this.editorInstance) {
      return;
    }
    if (this.nzFullControl && this.value) {
      warn(`should not set value when you are using full control mode! It would result in ambiguous data flow!`);
      return;
    }
    if (this.nzEditorMode === "normal") {
      if (this.modelSet) {
        const model = this.editorInstance.getModel();
        this.preservePositionAndSelections(() => model.setValue(this.value));
      } else {
        this.editorInstance.setModel(monaco.editor.createModel(this.value, this.editorOptionCached.language));
        this.modelSet = true;
      }
    } else {
      if (this.modelSet) {
        const model = this.editorInstance.getModel();
        this.preservePositionAndSelections(() => {
          model.modified.setValue(this.value);
          model.original.setValue(this.nzOriginalText);
        });
      } else {
        const language = this.editorOptionCached.language;
        this.editorInstance.setModel({
          original: monaco.editor.createModel(this.nzOriginalText, language),
          modified: monaco.editor.createModel(this.value, language)
        });
        this.modelSet = true;
      }
    }
  }
  /**
   * {@link editor.ICodeEditor}#setValue resets the cursor position to the start of the document.
   * This helper memorizes the cursor position and selections and restores them after the given
   * function has been called.
   */
  preservePositionAndSelections(fn) {
    if (!this.editorInstance) {
      fn();
      return;
    }
    const position = this.editorInstance.getPosition();
    const selections = this.editorInstance.getSelections();
    fn();
    if (position) {
      this.editorInstance.setPosition(position);
    }
    if (selections) {
      this.editorInstance.setSelections(selections);
    }
  }
  setValueEmitter() {
    const model = this.nzEditorMode === "normal" ? this.editorInstance.getModel() : this.editorInstance.getModel().modified;
    this.onDidChangeContentDisposable = model.onDidChangeContent(() => {
      this.emitValue(model.getValue());
    });
  }
  emitValue(value) {
    if (this.value === value) {
      return;
    }
    this.value = value;
    this.ngZone.run(() => {
      this.onChange(value);
    });
  }
  updateOptionToMonaco() {
    if (this.editorInstance) {
      this.editorInstance.updateOptions(__spreadValues({}, this.editorOptionCached));
    }
  }
};
_NzCodeEditorComponent.ɵfac = function NzCodeEditorComponent_Factory(t) {
  return new (t || _NzCodeEditorComponent)(ɵɵdirectiveInject(NzCodeEditorService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Platform));
};
_NzCodeEditorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCodeEditorComponent,
  selectors: [["nz-code-editor"]],
  inputs: {
    nzEditorMode: "nzEditorMode",
    nzOriginalText: "nzOriginalText",
    nzLoading: [InputFlags.HasDecoratorInputTransform, "nzLoading", "nzLoading", booleanAttribute],
    nzFullControl: [InputFlags.HasDecoratorInputTransform, "nzFullControl", "nzFullControl", booleanAttribute],
    nzToolkit: "nzToolkit",
    nzEditorOption: "nzEditorOption"
  },
  outputs: {
    nzEditorInitialized: "nzEditorInitialized"
  },
  exportAs: ["nzCodeEditor"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCodeEditorComponent),
    multi: true
  }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [[1, "ant-code-editor-loading"], [1, "ant-code-editor-toolkit"], [3, "ngTemplateOutlet"]],
  template: function NzCodeEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzCodeEditorComponent_Conditional_0_Template, 2, 0, "div", 0)(1, NzCodeEditorComponent_Conditional_1_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzLoading ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(1, ctx.nzToolkit ? 1 : -1);
    }
  },
  dependencies: [NzSpinComponent, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzCodeEditorComponent = _NzCodeEditorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCodeEditorComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-code-editor",
      exportAs: "nzCodeEditor",
      template: `
    @if (nzLoading) {
      <div class="ant-code-editor-loading">
        <nz-spin />
      </div>
    }
    @if (nzToolkit) {
      <div class="ant-code-editor-toolkit">
        <ng-template [ngTemplateOutlet]="nzToolkit" />
      </div>
    }
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCodeEditorComponent),
        multi: true
      }],
      imports: [NgIf, NzSpinComponent, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzCodeEditorService
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Platform
  }], {
    nzEditorMode: [{
      type: Input
    }],
    nzOriginalText: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzFullControl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzToolkit: [{
      type: Input
    }],
    nzEditorOption: [{
      type: Input
    }],
    nzEditorInitialized: [{
      type: Output
    }]
  });
})();
var _NzCodeEditorModule = class _NzCodeEditorModule {
};
_NzCodeEditorModule.ɵfac = function NzCodeEditorModule_Factory(t) {
  return new (t || _NzCodeEditorModule)();
};
_NzCodeEditorModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCodeEditorModule,
  imports: [NzCodeEditorComponent],
  exports: [NzCodeEditorComponent]
});
_NzCodeEditorModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCodeEditorComponent]
});
var NzCodeEditorModule = _NzCodeEditorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCodeEditorModule, [{
    type: NgModule,
    args: [{
      imports: [NzCodeEditorComponent],
      exports: [NzCodeEditorComponent]
    }]
  }], null, null);
})();
export {
  NzCodeEditorComponent,
  NzCodeEditorModule,
  NzCodeEditorService
};
//# sourceMappingURL=ng-zorro-antd_code-editor.js.map
