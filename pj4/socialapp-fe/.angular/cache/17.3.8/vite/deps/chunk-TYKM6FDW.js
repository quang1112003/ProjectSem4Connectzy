import {
  isNil,
  isNumberFinite,
  sum,
  toDecimal
} from "./chunk-444SWNZ7.js";
import {
  DomSanitizer
} from "./chunk-SHIUUSE2.js";
import {
  NgModule,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-RGUNTEJD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pipes.mjs
var _NzAggregatePipe = class _NzAggregatePipe {
  transform(value, method) {
    if (!Array.isArray(value)) {
      return value;
    }
    if (value.length === 0) {
      return void 0;
    }
    switch (method) {
      case "sum":
        return sum(value);
      case "avg":
        return sum(value) / value.length;
      case "max":
        return Math.max(...value);
      case "min":
        return Math.min(...value);
      default:
        throw Error(`Invalid Pipe Arguments: Aggregate pipe doesn't support this type`);
    }
  }
};
_NzAggregatePipe.ɵfac = function NzAggregatePipe_Factory(t) {
  return new (t || _NzAggregatePipe)();
};
_NzAggregatePipe.ɵpipe = ɵɵdefinePipe({
  name: "nzAggregate",
  type: _NzAggregatePipe,
  pure: true,
  standalone: true
});
var NzAggregatePipe = _NzAggregatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAggregatePipe, [{
    type: Pipe,
    args: [{
      name: "nzAggregate",
      standalone: true
    }]
  }], null, null);
})();
var _NzBytesPipe = class _NzBytesPipe {
  transform(input, decimal = 0, from = "B", to) {
    if (!(isNumberFinite(input) && isNumberFinite(decimal) && decimal % 1 === 0 && decimal >= 0)) {
      return input;
    }
    let bytes = input;
    let unit = from;
    while (unit !== "B") {
      bytes *= 1024;
      unit = _NzBytesPipe.formats[unit].prev;
    }
    if (to) {
      const format = _NzBytesPipe.formats[to];
      const result = toDecimal(_NzBytesPipe.calculateResult(format, bytes), decimal);
      return _NzBytesPipe.formatResult(result, to);
    }
    for (const key in _NzBytesPipe.formats) {
      if (_NzBytesPipe.formats.hasOwnProperty(key)) {
        const format = _NzBytesPipe.formats[key];
        if (bytes < format.max) {
          const result = toDecimal(_NzBytesPipe.calculateResult(format, bytes), decimal);
          return _NzBytesPipe.formatResult(result, key);
        }
      }
    }
  }
  static formatResult(result, unit) {
    return `${result} ${unit}`;
  }
  static calculateResult(format, bytes) {
    const prev = format.prev ? _NzBytesPipe.formats[format.prev] : void 0;
    return prev ? bytes / prev.max : bytes;
  }
};
_NzBytesPipe.formats = {
  B: {
    max: 1024
  },
  kB: {
    max: Math.pow(1024, 2),
    prev: "B"
  },
  KB: {
    max: Math.pow(1024, 2),
    prev: "B"
  },
  MB: {
    max: Math.pow(1024, 3),
    prev: "kB"
  },
  GB: {
    max: Math.pow(1024, 4),
    prev: "MB"
  },
  TB: {
    max: Number.MAX_SAFE_INTEGER,
    prev: "GB"
  }
};
_NzBytesPipe.ɵfac = function NzBytesPipe_Factory(t) {
  return new (t || _NzBytesPipe)();
};
_NzBytesPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzBytes",
  type: _NzBytesPipe,
  pure: true,
  standalone: true
});
var NzBytesPipe = _NzBytesPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBytesPipe, [{
    type: Pipe,
    args: [{
      name: "nzBytes",
      standalone: true
    }]
  }], null, null);
})();
var _NzToCssUnitPipe = class _NzToCssUnitPipe {
  transform(value, defaultUnit = "px") {
    return typeof value === "number" ? `${value}${defaultUnit}` : value;
  }
};
_NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) {
  return new (t || _NzToCssUnitPipe)();
};
_NzToCssUnitPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzToCssUnit",
  type: _NzToCssUnitPipe,
  pure: true,
  standalone: true
});
var NzToCssUnitPipe = _NzToCssUnitPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToCssUnitPipe, [{
    type: Pipe,
    args: [{
      name: "nzToCssUnit",
      standalone: true
    }]
  }], null, null);
})();
var _NzEllipsisPipe = class _NzEllipsisPipe {
  transform(value, length, suffix = "") {
    if (typeof value !== "string") {
      return value;
    }
    const len = typeof length === "undefined" ? value.length : length;
    if (value.length <= len) {
      return value;
    }
    return value.substring(0, len) + suffix;
  }
};
_NzEllipsisPipe.ɵfac = function NzEllipsisPipe_Factory(t) {
  return new (t || _NzEllipsisPipe)();
};
_NzEllipsisPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzEllipsis",
  type: _NzEllipsisPipe,
  pure: true,
  standalone: true
});
var NzEllipsisPipe = _NzEllipsisPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEllipsisPipe, [{
    type: Pipe,
    args: [{
      name: "nzEllipsis",
      standalone: true
    }]
  }], null, null);
})();
var _NzSafeNullPipe = class _NzSafeNullPipe {
  transform(value, replace = "") {
    if (isNil(value)) {
      return replace;
    }
    return value;
  }
};
_NzSafeNullPipe.ɵfac = function NzSafeNullPipe_Factory(t) {
  return new (t || _NzSafeNullPipe)();
};
_NzSafeNullPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzSafeNull",
  type: _NzSafeNullPipe,
  pure: true,
  standalone: true
});
var NzSafeNullPipe = _NzSafeNullPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSafeNullPipe, [{
    type: Pipe,
    args: [{
      name: "nzSafeNull",
      standalone: true
    }]
  }], null, null);
})();
var _NzSanitizerPipe = class _NzSanitizerPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type = "html") {
    switch (type) {
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "resourceUrl":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified`);
    }
  }
};
_NzSanitizerPipe.ɵfac = function NzSanitizerPipe_Factory(t) {
  return new (t || _NzSanitizerPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
_NzSanitizerPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzSanitizer",
  type: _NzSanitizerPipe,
  pure: true,
  standalone: true
});
var NzSanitizerPipe = _NzSanitizerPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSanitizerPipe, [{
    type: Pipe,
    args: [{
      name: "nzSanitizer",
      standalone: true
    }]
  }], () => [{
    type: DomSanitizer
  }], null);
})();
var _NzTrimPipe = class _NzTrimPipe {
  // TODO(chensimeng) trimEnd, trimStart
  transform(text) {
    return text.trim();
  }
};
_NzTrimPipe.ɵfac = function NzTrimPipe_Factory(t) {
  return new (t || _NzTrimPipe)();
};
_NzTrimPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzTrim",
  type: _NzTrimPipe,
  pure: true,
  standalone: true
});
var NzTrimPipe = _NzTrimPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrimPipe, [{
    type: Pipe,
    args: [{
      name: "nzTrim",
      standalone: true
    }]
  }], null, null);
})();
var pipes = [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe];
var _NzPipesModule = class _NzPipesModule {
};
_NzPipesModule.ɵfac = function NzPipesModule_Factory(t) {
  return new (t || _NzPipesModule)();
};
_NzPipesModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPipesModule,
  imports: [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe],
  exports: [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe]
});
_NzPipesModule.ɵinj = ɵɵdefineInjector({});
var NzPipesModule = _NzPipesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPipesModule, [{
    type: NgModule,
    args: [{
      imports: [pipes],
      exports: [pipes]
    }]
  }], null, null);
})();

export {
  NzAggregatePipe,
  NzBytesPipe,
  NzToCssUnitPipe,
  NzEllipsisPipe,
  NzSafeNullPipe,
  NzSanitizerPipe,
  NzTrimPipe,
  NzPipesModule
};
//# sourceMappingURL=chunk-TYKM6FDW.js.map
