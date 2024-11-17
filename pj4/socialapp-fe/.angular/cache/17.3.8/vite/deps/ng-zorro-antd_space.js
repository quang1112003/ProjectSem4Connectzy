import {
  NzConfigService,
  WithConfig
} from "./chunk-7ZIF5OVP.js";
import "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import {
  NgTemplateOutlet
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  Input,
  InputFlags,
  NgModule,
  TemplateRef,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-RGUNTEJD.js";
import {
  Subject,
  __decorate,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";
import "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs
var _c0 = ["*"];
var _c1 = (a0) => ({
  $implicit: a0
});
function NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NzSpaceComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const index_r2 = ctx_r0.$index;
    const ɵindex_2_r3 = ctx_r0.$index;
    const ɵ$count_2_r4 = ctx_r0.$count;
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("margin-bottom", ctx_r4.nzDirection === "vertical" ? ɵindex_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r4.spaceSize : null, "px")("margin-right", ctx_r4.nzDirection === "horizontal" ? ɵindex_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r4.spaceSize : null, "px");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.nzSplit)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c1, index_r2));
  }
}
function NzSpaceComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelementContainer(1, 1);
    ɵɵelementEnd();
    ɵɵtemplate(2, NzSpaceComponent_For_2_Conditional_2_Template, 2, 8, "span", 2);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ɵindex_2_r3 = ctx.$index;
    const ɵ$count_2_r4 = ctx.$count;
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("margin-bottom", ctx_r4.nzDirection === "vertical" ? ɵindex_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r4.spaceSize : null, "px")("margin-right", ctx_r4.nzDirection === "horizontal" ? ɵindex_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r4.spaceSize : null, "px");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r6);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r4.nzSplit && !(ɵindex_2_r3 === ɵ$count_2_r4 - 1) ? 2 : -1);
  }
}
var _NzSpaceItemDirective = class _NzSpaceItemDirective {
  constructor() {
  }
};
_NzSpaceItemDirective.ɵfac = function NzSpaceItemDirective_Factory(t) {
  return new (t || _NzSpaceItemDirective)();
};
_NzSpaceItemDirective.ɵdir = ɵɵdefineDirective({
  type: _NzSpaceItemDirective,
  selectors: [["", "nzSpaceItem", ""]],
  standalone: true
});
var NzSpaceItemDirective = _NzSpaceItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceItemDirective, [{
    type: Directive,
    args: [{
      selector: "[nzSpaceItem]",
      standalone: true
    }]
  }], () => [], null);
})();
var NZ_CONFIG_MODULE_NAME = "space";
var SPACE_SIZE = {
  small: 8,
  middle: 16,
  large: 24
};
var _NzSpaceComponent = class _NzSpaceComponent {
  constructor(nzConfigService, cdr) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzDirection = "horizontal";
    this.nzSplit = null;
    this.nzWrap = false;
    this.nzSize = "small";
    this.spaceSize = SPACE_SIZE.small;
    this.destroy$ = new Subject();
  }
  updateSpaceItems() {
    const numberSize = typeof this.nzSize === "string" ? SPACE_SIZE[this.nzSize] : this.nzSize;
    this.spaceSize = numberSize / (this.nzSplit ? 2 : 1);
    this.cdr.markForCheck();
  }
  ngOnChanges() {
    this.updateSpaceItems();
    this.mergedAlign = this.nzAlign === void 0 && this.nzDirection === "horizontal" ? "center" : this.nzAlign;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngAfterContentInit() {
    this.updateSpaceItems();
    this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
};
_NzSpaceComponent.ɵfac = function NzSpaceComponent_Factory(t) {
  return new (t || _NzSpaceComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzSpaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSpaceComponent,
  selectors: [["nz-space"], ["", "nz-space", ""]],
  contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzSpaceItemDirective, 4, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  hostAttrs: [1, "ant-space"],
  hostVars: 14,
  hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("flex-wrap", ctx.nzWrap ? "wrap" : null);
      ɵɵclassProp("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
    }
  },
  inputs: {
    nzDirection: "nzDirection",
    nzAlign: "nzAlign",
    nzSplit: "nzSplit",
    nzWrap: [InputFlags.HasDecoratorInputTransform, "nzWrap", "nzWrap", booleanAttribute],
    nzSize: "nzSize"
  },
  exportAs: ["NzSpace"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "ant-space-item"], [3, "ngTemplateOutlet"], [1, "ant-space-split", 3, "margin-bottom", "margin-right"], [1, "ant-space-split"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NzSpaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵrepeaterCreate(1, NzSpaceComponent_For_2_Template, 3, 6, null, null, ɵɵrepeaterTrackByIdentity);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵrepeater(ctx.items);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzSpaceComponent = _NzSpaceComponent;
__decorate([WithConfig()], NzSpaceComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceComponent, [{
    type: Component,
    args: [{
      selector: "nz-space, [nz-space]",
      exportAs: "NzSpace",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-content></ng-content>
    @for (item of items; track item; let last = $last; let index = $index) {
      <div
        class="ant-space-item"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      @if (nzSplit && !last) {
        <span
          class="ant-space-split"
          [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
          [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
        >
          <ng-template [ngTemplateOutlet]="nzSplit" [ngTemplateOutletContext]="{ $implicit: index }"></ng-template>
        </span>
      }
    }
  `,
      host: {
        class: "ant-space",
        "[class.ant-space-horizontal]": 'nzDirection === "horizontal"',
        "[class.ant-space-vertical]": 'nzDirection === "vertical"',
        "[class.ant-space-align-start]": 'mergedAlign === "start"',
        "[class.ant-space-align-end]": 'mergedAlign === "end"',
        "[class.ant-space-align-center]": 'mergedAlign === "center"',
        "[class.ant-space-align-baseline]": 'mergedAlign === "baseline"',
        "[style.flex-wrap]": 'nzWrap ? "wrap" : null'
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }], {
    nzDirection: [{
      type: Input
    }],
    nzAlign: [{
      type: Input
    }],
    nzSplit: [{
      type: Input
    }],
    nzWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    items: [{
      type: ContentChildren,
      args: [NzSpaceItemDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
var _NzSpaceModule = class _NzSpaceModule {
};
_NzSpaceModule.ɵfac = function NzSpaceModule_Factory(t) {
  return new (t || _NzSpaceModule)();
};
_NzSpaceModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSpaceModule,
  imports: [NzSpaceComponent, NzSpaceItemDirective],
  exports: [NzSpaceComponent, NzSpaceItemDirective]
});
_NzSpaceModule.ɵinj = ɵɵdefineInjector({});
var NzSpaceModule = _NzSpaceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpaceComponent, NzSpaceItemDirective],
      exports: [NzSpaceComponent, NzSpaceItemDirective]
    }]
  }], null, null);
})();
export {
  NzSpaceComponent,
  NzSpaceItemDirective,
  NzSpaceModule
};
//# sourceMappingURL=ng-zorro-antd_space.js.map
