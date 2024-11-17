import {
  SelectionModel
} from "./chunk-PXNY5WLW.js";
import {
  NzNoAnimationDirective
} from "./chunk-I3C6U56M.js";
import {
  cancelRequestAnimationFrame,
  reqAnimFrame
} from "./chunk-J3OF5AMK.js";
import {
  numberAttributeWithOneFallback
} from "./chunk-444SWNZ7.js";
import "./chunk-XUXDTRYK.js";
import {
  AnimationBuilder,
  animate,
  group,
  query,
  style
} from "./chunk-RDJJSLCP.js";
import "./chunk-SHIUUSE2.js";
import "./chunk-C4KMBTLC.js";
import {
  NgTemplateOutlet
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChildren,
  ViewEncapsulation$1,
  afterNextRender,
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
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RGUNTEJD.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  filter,
  finalize,
  forkJoin,
  fromEvent,
  map,
  merge,
  take,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/d3-shape/src/constant.js
function constant_default(x3) {
  return function constant() {
    return x3;
  };
}

// node_modules/d3-shape/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

// node_modules/d3-path/src/path.js
var pi2 = Math.PI;
var tau2 = 2 * pi2;
var epsilon2 = 1e-6;
var tauEpsilon = tau2 - epsilon2;
function append(strings) {
  this._ += strings[0];
  for (let i2 = 1, n2 = strings.length; i2 < n2; ++i2) {
    this._ += arguments[i2] + strings[i2];
  }
}
function appendRound(digits) {
  let d2 = Math.floor(digits);
  if (!(d2 >= 0))
    throw new Error(`invalid digits: ${digits}`);
  if (d2 > 15)
    return append;
  const k3 = 10 ** d2;
  return function(strings) {
    this._ += strings[0];
    for (let i2 = 1, n2 = strings.length; i2 < n2; ++i2) {
      this._ += Math.round(arguments[i2] * k3) / k3 + strings[i2];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x3, y3) {
    this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x3, y3) {
    this._append`L${this._x1 = +x3},${this._y1 = +y3}`;
  }
  quadraticCurveTo(x1, y1, x3, y3) {
    this._append`Q${+x1},${+y1},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  bezierCurveTo(x1, y1, x22, y22, x3, y3) {
    this._append`C${+x1},${+y1},${+x22},${+y22},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x22, y22, r2) {
    x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r2 = +r2;
    if (r2 < 0)
      throw new Error(`negative radius: ${r2}`);
    let x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon2))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon2) || !r2) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l2 = r2 * Math.tan((pi2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l2 / l01, t21 = l2 / l21;
      if (Math.abs(t01 - 1) > epsilon2) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r2},${r2},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x3, y3, r2, a0, a1, ccw) {
    x3 = +x3, y3 = +y3, r2 = +r2, ccw = !!ccw;
    if (r2 < 0)
      throw new Error(`negative radius: ${r2}`);
    let dx = r2 * Math.cos(a0), dy = r2 * Math.sin(a0), x0 = x3 + dx, y0 = y3 + dy, cw = 1 ^ ccw, da2 = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) {
      this._append`L${x0},${y0}`;
    }
    if (!r2)
      return;
    if (da2 < 0)
      da2 = da2 % tau2 + tau2;
    if (da2 > tauEpsilon) {
      this._append`A${r2},${r2},0,1,${cw},${x3 - dx},${y3 - dy}A${r2},${r2},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da2 > epsilon2) {
      this._append`A${r2},${r2},0,${+(da2 >= pi2)},${cw},${this._x1 = x3 + r2 * Math.cos(a1)},${this._y1 = y3 + r2 * Math.sin(a1)}`;
    }
  }
  rect(x3, y3, w2, h2) {
    this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}h${w2 = +w2}v${+h2}h${-w2}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_2) {
    if (!arguments.length)
      return digits;
    if (_2 == null) {
      digits = null;
    } else {
      const d2 = Math.floor(_2);
      if (!(d2 >= 0))
        throw new RangeError(`invalid digits: ${_2}`);
      digits = d2;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x3) {
  return typeof x3 === "object" && "length" in x3 ? x3 : Array.from(x3);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x3, y3);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p2) {
  return p2[0];
}
function y(p2) {
  return p2[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x3, y3) {
  var defined = constant_default(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x3 = typeof x3 === "function" ? x3 : x3 === void 0 ? x : constant_default(x3);
  y3 = typeof y3 === "function" ? y3 : y3 === void 0 ? y : constant_default(y3);
  function line(data) {
    var i2, n2 = (data = array_default(data)).length, d2, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path2());
    for (i2 = 0; i2 <= n2; ++i2) {
      if (!(i2 < n2 && defined(d2 = data[i2], i2, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x3(d2, i2, data), +y3(d2, i2, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_2) {
    return arguments.length ? (x3 = typeof _2 === "function" ? _2 : constant_default(+_2), line) : x3;
  };
  line.y = function(_2) {
    return arguments.length ? (y3 = typeof _2 === "function" ? _2 : constant_default(+_2), line) : y3;
  };
  line.defined = function(_2) {
    return arguments.length ? (defined = typeof _2 === "function" ? _2 : constant_default(!!_2), line) : defined;
  };
  line.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a3, r2) {
    this._curve.point(r2 * Math.sin(a3), r2 * -Math.cos(a3));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}

// node_modules/d3-shape/src/symbol/asterisk.js
var sqrt3 = sqrt(3);

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-shape/src/symbol/star.js
var kr = sin(pi / 10) / sin(7 * pi / 10);
var kx = sin(tau / 10) * kr;
var ky = -cos(tau / 10) * kr;

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = sqrt(3);

// node_modules/d3-shape/src/symbol/triangle2.js
var sqrt33 = sqrt(3);

// node_modules/d3-shape/src/symbol/wye.js
var s = sqrt(3) / 2;
var k = 1 / sqrt(12);
var a = (k / 2 + 1) * 3;

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point(that, x3, y3) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x3) / 6,
    (that._y0 + 4 * that._y1 + y3) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};
function basis_default(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x3, this._y2 = y3;
        break;
      case 1:
        this._point = 2;
        this._x3 = x3, this._y3 = y3;
        break;
      case 2:
        this._point = 3;
        this._x4 = x3, this._y4 = y3;
        this._context.moveTo((this._x0 + 4 * this._x1 + x3) / 6, (this._y0 + 4 * this._y1 + y3) / 6);
        break;
      default:
        point(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x3) / 6, y0 = (this._y0 + 4 * this._y1 + y3) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
  }
};

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, j2 = x3.length - 1;
    if (j2 > 0) {
      var x0 = x3[0], y0 = y3[0], dx = x3[j2] - x0, dy = y3[j2] - y0, i2 = -1, t4;
      while (++i2 <= j2) {
        t4 = i2 / j2;
        this._basis.point(
          this._beta * x3[i2] + (1 - this._beta) * (x0 + t4 * dx),
          this._beta * y3[i2] + (1 - this._beta) * (y0 + t4 * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point2(that, x3, y3) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x3),
    that._y2 + that._k * (that._y1 - y3),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point2(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        this._x1 = x3, this._y1 = y3;
        break;
      case 2:
        this._point = 3;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x3, y3);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point3(that, x3, y3) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon) {
    var a3 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n2 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a3 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n2;
    y1 = (y1 * a3 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n2;
  }
  if (that._l23_a > epsilon) {
    var b10 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m2 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b10 + that._x1 * that._l23_2a - x3 * that._l12_2a) / m2;
    y22 = (y22 * b10 + that._y1 * that._l23_2a - y3 * that._l12_2a) / m2;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x3, this._y3 = y3;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x3, this._y4 = y3);
        break;
      case 2:
        this._point = 3;
        this._x5 = x3, this._y5 = y3;
        break;
      default:
        point3(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point) {
      var x23 = this._x2 - x3, y23 = this._y2 - y3;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x3, y3);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x3;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y3;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    if (this._point)
      this._context.lineTo(x3, y3);
    else
      this._point = 1, this._context.moveTo(x3, y3);
  }
};

// node_modules/d3-shape/src/curve/monotone.js
function sign(x3) {
  return x3 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p2 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p2)) || 0;
}
function slope2(that, t4) {
  var h2 = that._x1 - that._x0;
  return h2 ? (3 * (that._y1 - that._y0) / h2 - t4) / 2 : t4;
}
function point4(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point4(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    var t12 = NaN;
    x3 = +x3, y3 = +y3;
    if (x3 === this._x1 && y3 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point4(this, slope2(this, t12 = slope3(this, x3, y3)), t12);
        break;
      default:
        point4(this, this._t0, t12 = slope3(this, x3, y3));
        break;
    }
    this._x0 = this._x1, this._x1 = x3;
    this._y0 = this._y1, this._y1 = y3;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x3, y3) {
  MonotoneX.prototype.point.call(this, y3, x3);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x3, y3) {
    this._context.moveTo(y3, x3);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x3, y3) {
    this._context.lineTo(y3, x3);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y22, x22, y3, x3);
  }
};

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x3 = this._x, y3 = this._y, n2 = x3.length;
    if (n2) {
      this._line ? this._context.lineTo(x3[0], y3[0]) : this._context.moveTo(x3[0], y3[0]);
      if (n2 === 2) {
        this._context.lineTo(x3[1], y3[1]);
      } else {
        var px = controlPoints(x3), py = controlPoints(y3);
        for (var i0 = 0, i1 = 1; i1 < n2; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x3[i1], y3[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n2 === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x3, y3) {
    this._x.push(+x3);
    this._y.push(+y3);
  }
};
function controlPoints(x3) {
  var i2, n2 = x3.length - 1, m2, a3 = new Array(n2), b10 = new Array(n2), r2 = new Array(n2);
  a3[0] = 0, b10[0] = 2, r2[0] = x3[0] + 2 * x3[1];
  for (i2 = 1; i2 < n2 - 1; ++i2)
    a3[i2] = 1, b10[i2] = 4, r2[i2] = 4 * x3[i2] + 2 * x3[i2 + 1];
  a3[n2 - 1] = 2, b10[n2 - 1] = 7, r2[n2 - 1] = 8 * x3[n2 - 1] + x3[n2];
  for (i2 = 1; i2 < n2; ++i2)
    m2 = a3[i2] / b10[i2 - 1], b10[i2] -= m2, r2[i2] -= m2 * r2[i2 - 1];
  a3[n2 - 1] = r2[n2 - 1] / b10[n2 - 1];
  for (i2 = n2 - 2; i2 >= 0; --i2)
    a3[i2] = (r2[i2] - a3[i2 + 1]) / b10[i2];
  b10[n2 - 1] = (x3[n2] + a3[n2 - 1]) / 2;
  for (i2 = 0; i2 < n2 - 1; ++i2)
    b10[i2] = 2 * x3[i2 + 1] - a3[i2 + 1];
  return [a3, b10];
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t4) {
  this._context = context;
  this._t = t4;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x3, y3) {
    x3 = +x3, y3 = +y3;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y3);
          this._context.lineTo(x3, y3);
        } else {
          var x1 = this._x * (1 - this._t) + x3 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y3);
        }
        break;
      }
    }
    this._x = x3, this._y = y3;
  }
};

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i2 = 0, n2 = arguments.length, _2 = {}, t4; i2 < n2; ++i2) {
    if (!(t4 = arguments[i2] + "") || t4 in _2 || /[\s.]/.test(t4))
      throw new Error("illegal type: " + t4);
    _2[t4] = [];
  }
  return new Dispatch(_2);
}
function Dispatch(_2) {
  this._ = _2;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t4) {
    var name = "", i2 = t4.indexOf(".");
    if (i2 >= 0)
      name = t4.slice(i2 + 1), t4 = t4.slice(0, i2);
    if (t4 && !types.hasOwnProperty(t4))
      throw new Error("unknown type: " + t4);
    return { type: t4, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _2 = this._, T2 = parseTypenames(typename + "", _2), t4, i2 = -1, n2 = T2.length;
    if (arguments.length < 2) {
      while (++i2 < n2)
        if ((t4 = (typename = T2[i2]).type) && (t4 = get(_2[t4], typename.name)))
          return t4;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i2 < n2) {
      if (t4 = (typename = T2[i2]).type)
        _2[t4] = set(_2[t4], typename.name, callback);
      else if (callback == null)
        for (t4 in _2)
          _2[t4] = set(_2[t4], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _2 = this._;
    for (var t4 in _2)
      copy[t4] = _2[t4].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n2 = arguments.length - 2) > 0)
      for (var args = new Array(n2), i2 = 0, n2, t4; i2 < n2; ++i2)
        args[i2] = arguments[i2 + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t4 = this._[type], i2 = 0, n2 = t4.length; i2 < n2; ++i2)
      t4[i2].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t4 = this._[type], i2 = 0, n2 = t4.length; i2 < n2; ++i2)
      t4[i2].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i2 = 0, n2 = type.length, c2; i2 < n2; ++i2) {
    if ((c2 = type[i2]).name === name) {
      return c2.value;
    }
  }
}
function set(type, name, callback) {
  for (var i2 = 0, n2 = type.length; i2 < n2; ++i2) {
    if (type[i2].name === name) {
      type[i2] = noop, type = type.slice(0, i2).concat(type.slice(i2 + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i2 = prefix.indexOf(":");
  if (i2 >= 0 && (prefix = name.slice(0, i2)) !== "xmlns")
    name = name.slice(i2 + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && (subnode = select.call(node, node.__data__, i2, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i2] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        subgroups.push(select.call(node, node.__data__, i2, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter2 = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter2.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && match.call(node, node.__data__, i2, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default2(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group2, enter, update, exit, data) {
  var i2 = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i2 < dataLength; ++i2) {
    if (node = group2[i2]) {
      node.__data__ = data[i2];
      update[i2] = node;
    } else {
      enter[i2] = new EnterNode(parent, data[i2]);
    }
  }
  for (; i2 < groupLength; ++i2) {
    if (node = group2[i2]) {
      exit[i2] = node;
    }
  }
}
function bindKey(parent, group2, enter, update, exit, data, key) {
  var i2, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i2 = 0; i2 < groupLength; ++i2) {
    if (node = group2[i2]) {
      keyValues[i2] = keyValue = key.call(node, node.__data__, i2, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i2] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i2 = 0; i2 < dataLength; ++i2) {
    keyValue = key.call(parent, data[i2], i2, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i2] = node;
      node.__data__ = data[i2];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i2] = new EnterNode(parent, data[i2]);
    }
  }
  for (i2 = 0; i2 < groupLength; ++i2) {
    if ((node = group2[i2]) && nodeByKeyValue.get(keyValues[i2]) === node) {
      exit[i2] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant_default2(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    var parent = parents[j2], group2 = groups[j2], groupLength = group2.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
    bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge2 = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group0[i2] || group1[i2]) {
        merge2[i2] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
    for (var group2 = groups[j2], i2 = group2.length - 1, next = group2[i2], node; --i2 >= 0; ) {
      if (node = group2[i2]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a3, b10) {
    return a3 && b10 ? compare(a3.__data__, b10.__data__) : !a3 - !b10;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, sortgroup = sortgroups[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        sortgroup[i2] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a3, b10) {
  return a3 < b10 ? -1 : a3 > b10 ? 1 : a3 >= b10 ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group2 = groups[j2], i2 = 0, n2 = group2.length; i2 < n2; ++i2) {
      var node = group2[i2];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group2 = groups[j2], i2 = 0, n2 = group2.length, node; i2 < n2; ++i2) {
      if (node = group2[i2])
        callback.call(node, node.__data__, i2, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v2);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v2, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null)
      delete this[name];
    else
      this[name] = v2;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 >= 0) {
      this._names.splice(i2, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i2 = -1, n2 = names.length;
  while (++i2 < n2)
    list.add(names[i2]);
}
function classedRemove(node, names) {
  var list = classList(node), i2 = -1, n2 = names.length;
  while (++i2 < n2)
    list.remove(names[i2]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i2 = -1, n2 = names.length;
    while (++i2 < n2)
      if (!list.contains(names[i2]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t4) {
    var name = "", i2 = t4.indexOf(".");
    if (i2 >= 0)
      name = t4.slice(i2 + 1), t4 = t4.slice(0, i2);
    return { type: t4, name };
  });
}
function onRemove(typename) {
  return function() {
    var on2 = this.__on;
    if (!on2)
      return;
    for (var j2 = 0, i2 = -1, m2 = on2.length, o2; j2 < m2; ++j2) {
      if (o2 = on2[j2], (!typename.type || o2.type === typename.type) && o2.name === typename.name) {
        this.removeEventListener(o2.type, o2.listener, o2.options);
      } else {
        on2[++i2] = o2;
      }
    }
    if (++i2)
      on2.length = i2;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on2 = this.__on, o2, listener = contextListener(value);
    if (on2)
      for (var j2 = 0, m2 = on2.length; j2 < m2; ++j2) {
        if ((o2 = on2[j2]).type === typename.type && o2.name === typename.name) {
          this.removeEventListener(o2.type, o2.listener, o2.options);
          this.addEventListener(o2.type, o2.listener = listener, o2.options = options);
          o2.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o2 = { type: typename.type, name: typename.name, value, listener, options };
    if (!on2)
      this.__on = [o2];
    else
      on2.push(o2);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i2, n2 = typenames.length, t4;
  if (arguments.length < 2) {
    var on2 = this.node().__on;
    if (on2)
      for (var j2 = 0, m2 = on2.length, o2; j2 < m2; ++j2) {
        for (i2 = 0, o2 = on2[j2]; i2 < n2; ++i2) {
          if ((t4 = typenames[i2]).type === o2.type && t4.name === o2.name) {
            return o2.value;
          }
        }
      }
    return;
  }
  on2 = value ? onAdd : onRemove;
  for (i2 = 0; i2 < n2; ++i2)
    this.each(on2(typenames[i2], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
    for (var group2 = groups[j2], i2 = 0, n2 = group2.length, node; i2 < n2; ++i2) {
      if (node = group2[i2])
        yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id2 = this._;
    while (!(id2 in node))
      if (!(node = node.parentNode))
        return;
    return node[id2];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent)
    event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point5 = svg.createSVGPoint();
      point5.x = event.clientX, point5.y = event.clientY;
      point5 = point5.matrixTransform(node.getScreenCTM().inverse());
      return [point5.x, point5.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default3 = (x3) => () => x3;

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d2) {
  return d2 == null ? { x: event.x, y: event.y } : d2;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter3 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d2) {
    if (touchending || !filter3.call(this, event, d2))
      return;
    var gesture = beforestart(this, container.call(this, event, d2), event, d2, "mouse");
    if (!gesture)
      return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d2) {
    if (!filter3.call(this, event, d2))
      return;
    var touches = event.changedTouches, c2 = container.call(this, event, d2), n2 = touches.length, i2, gesture;
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = beforestart(this, c2, event, d2, touches[i2].identifier, touches[i2])) {
        nopropagation(event);
        gesture("start", event, touches[i2]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n2 = touches.length, i2, gesture;
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = gestures[touches[i2].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i2]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n2 = touches.length, i2, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = gestures[touches[i2].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i2]);
      }
    }
  }
  function beforestart(that, container2, event, d2, identifier, touch) {
    var dispatch2 = listeners.copy(), p2 = pointer_default(touch || event, container2), dx, dy, s3;
    if ((s3 = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p2[0],
      y: p2[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d2)) == null)
      return;
    dx = s3.x - p2[0] || 0;
    dy = s3.y - p2[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p2, n2;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n2 = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p2 = pointer_default(touch2 || event2, container2), n2 = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s3,
          target: drag,
          identifier,
          active: n2,
          x: p2[0] + dx,
          y: p2[1] + dy,
          dx: p2[0] - p0[0],
          dy: p2[1] - p0[1],
          dispatch: dispatch2
        }),
        d2
      );
    };
  }
  drag.filter = function(_2) {
    return arguments.length ? (filter3 = typeof _2 === "function" ? _2 : constant_default3(!!_2), drag) : filter3;
  };
  drag.container = function(_2) {
    return arguments.length ? (container = typeof _2 === "function" ? _2 : constant_default3(_2), drag) : container;
  };
  drag.subject = function(_2) {
    return arguments.length ? (subject = typeof _2 === "function" ? _2 : constant_default3(_2), drag) : subject;
  };
  drag.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default3(!!_2), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m2, l2;
  format = (format + "").trim().toLowerCase();
  return (m2 = reHex.exec(format)) ? (l2 = m2[1].length, m2 = parseInt(m2[1], 16), l2 === 6 ? rgbn(m2) : l2 === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l2 === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l2 === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n2) {
  return new Rgb(n2 >> 16 & 255, n2 >> 8 & 255, n2 & 255, 1);
}
function rgba(r2, g2, b10, a3) {
  if (a3 <= 0)
    r2 = g2 = b10 = NaN;
  return new Rgb(r2, g2, b10, a3);
}
function rgbConvert(o2) {
  if (!(o2 instanceof Color))
    o2 = color(o2);
  if (!o2)
    return new Rgb();
  o2 = o2.rgb();
  return new Rgb(o2.r, o2.g, o2.b, o2.opacity);
}
function rgb(r2, g2, b10, opacity) {
  return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g2, b10, opacity == null ? 1 : opacity);
}
function Rgb(r2, g2, b10, opacity) {
  this.r = +r2;
  this.g = +g2;
  this.b = +b10;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a3 = clampa(this.opacity);
  return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s3, l2, a3) {
  if (a3 <= 0)
    h2 = s3 = l2 = NaN;
  else if (l2 <= 0 || l2 >= 1)
    h2 = s3 = NaN;
  else if (s3 <= 0)
    h2 = NaN;
  return new Hsl(h2, s3, l2, a3);
}
function hslConvert(o2) {
  if (o2 instanceof Hsl)
    return new Hsl(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Color))
    o2 = color(o2);
  if (!o2)
    return new Hsl();
  if (o2 instanceof Hsl)
    return o2;
  o2 = o2.rgb();
  var r2 = o2.r / 255, g2 = o2.g / 255, b10 = o2.b / 255, min2 = Math.min(r2, g2, b10), max2 = Math.max(r2, g2, b10), h2 = NaN, s3 = max2 - min2, l2 = (max2 + min2) / 2;
  if (s3) {
    if (r2 === max2)
      h2 = (g2 - b10) / s3 + (g2 < b10) * 6;
    else if (g2 === max2)
      h2 = (b10 - r2) / s3 + 2;
    else
      h2 = (r2 - g2) / s3 + 4;
    s3 /= l2 < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h2 *= 60;
  } else {
    s3 = l2 > 0 && l2 < 1 ? 0 : h2;
  }
  return new Hsl(h2, s3, l2, o2.opacity);
}
function hsl(h2, s3, l2, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s3, l2, opacity == null ? 1 : opacity);
}
function Hsl(h2, s3, l2, opacity) {
  this.h = +h2;
  this.s = +s3;
  this.l = +l2;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m2 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s3, m1 = 2 * l2 - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o2) {
  if (o2 instanceof Lab)
    return new Lab(o2.l, o2.a, o2.b, o2.opacity);
  if (o2 instanceof Hcl)
    return hcl2lab(o2);
  if (!(o2 instanceof Rgb))
    o2 = rgbConvert(o2);
  var r2 = rgb2lrgb(o2.r), g2 = rgb2lrgb(o2.g), b10 = rgb2lrgb(o2.b), y3 = xyz2lab((0.2225045 * r2 + 0.7168786 * g2 + 0.0606169 * b10) / Yn), x3, z2;
  if (r2 === g2 && g2 === b10)
    x3 = z2 = y3;
  else {
    x3 = xyz2lab((0.4360747 * r2 + 0.3850649 * g2 + 0.1430804 * b10) / Xn);
    z2 = xyz2lab((0.0139322 * r2 + 0.0971045 * g2 + 0.7141733 * b10) / Zn);
  }
  return new Lab(116 * y3 - 16, 500 * (x3 - y3), 200 * (y3 - z2), o2.opacity);
}
function lab(l2, a3, b10, opacity) {
  return arguments.length === 1 ? labConvert(l2) : new Lab(l2, a3, b10, opacity == null ? 1 : opacity);
}
function Lab(l2, a3, b10, opacity) {
  this.l = +l2;
  this.a = +a3;
  this.b = +b10;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k3) {
    return new Lab(this.l + K * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  darker(k3) {
    return new Lab(this.l - K * (k3 == null ? 1 : k3), this.a, this.b, this.opacity);
  },
  rgb() {
    var y3 = (this.l + 16) / 116, x3 = isNaN(this.a) ? y3 : y3 + this.a / 500, z2 = isNaN(this.b) ? y3 : y3 - this.b / 200;
    x3 = Xn * lab2xyz(x3);
    y3 = Yn * lab2xyz(y3);
    z2 = Zn * lab2xyz(z2);
    return new Rgb(
      lrgb2rgb(3.1338561 * x3 - 1.6168667 * y3 - 0.4906146 * z2),
      lrgb2rgb(-0.9787684 * x3 + 1.9161415 * y3 + 0.033454 * z2),
      lrgb2rgb(0.0719453 * x3 - 0.2289914 * y3 + 1.4052427 * z2),
      this.opacity
    );
  }
}));
function xyz2lab(t4) {
  return t4 > t3 ? Math.pow(t4, 1 / 3) : t4 / t2 + t0;
}
function lab2xyz(t4) {
  return t4 > t1 ? t4 * t4 * t4 : t2 * (t4 - t0);
}
function lrgb2rgb(x3) {
  return 255 * (x3 <= 31308e-7 ? 12.92 * x3 : 1.055 * Math.pow(x3, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x3) {
  return (x3 /= 255) <= 0.04045 ? x3 / 12.92 : Math.pow((x3 + 0.055) / 1.055, 2.4);
}
function hclConvert(o2) {
  if (o2 instanceof Hcl)
    return new Hcl(o2.h, o2.c, o2.l, o2.opacity);
  if (!(o2 instanceof Lab))
    o2 = labConvert(o2);
  if (o2.a === 0 && o2.b === 0)
    return new Hcl(NaN, 0 < o2.l && o2.l < 100 ? 0 : NaN, o2.l, o2.opacity);
  var h2 = Math.atan2(o2.b, o2.a) * degrees;
  return new Hcl(h2 < 0 ? h2 + 360 : h2, Math.sqrt(o2.a * o2.a + o2.b * o2.b), o2.l, o2.opacity);
}
function hcl(h2, c2, l2, opacity) {
  return arguments.length === 1 ? hclConvert(h2) : new Hcl(h2, c2, l2, opacity == null ? 1 : opacity);
}
function Hcl(h2, c2, l2, opacity) {
  this.h = +h2;
  this.c = +c2;
  this.l = +l2;
  this.opacity = +opacity;
}
function hcl2lab(o2) {
  if (isNaN(o2.h))
    return new Lab(o2.l, 0, 0, o2.opacity);
  var h2 = o2.h * radians;
  return new Lab(o2.l, Math.cos(h2) * o2.c, Math.sin(h2) * o2.c, o2.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k3) {
    return new Hcl(this.h, this.c, this.l + K * (k3 == null ? 1 : k3), this.opacity);
  },
  darker(k3) {
    return new Hcl(this.h, this.c, this.l - K * (k3 == null ? 1 : k3), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o2) {
  if (o2 instanceof Cubehelix)
    return new Cubehelix(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Rgb))
    o2 = rgbConvert(o2);
  var r2 = o2.r / 255, g2 = o2.g / 255, b10 = o2.b / 255, l2 = (BC_DA * b10 + ED * r2 - EB * g2) / (BC_DA + ED - EB), bl = b10 - l2, k3 = (E * (g2 - l2) - C * bl) / D, s3 = Math.sqrt(k3 * k3 + bl * bl) / (E * l2 * (1 - l2)), h2 = s3 ? Math.atan2(k3, bl) * degrees - 120 : NaN;
  return new Cubehelix(h2 < 0 ? h2 + 360 : h2, s3, l2, o2.opacity);
}
function cubehelix(h2, s3, l2, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h2) : new Cubehelix(h2, s3, l2, opacity == null ? 1 : opacity);
}
function Cubehelix(h2, s3, l2, opacity) {
  this.h = +h2;
  this.s = +s3;
  this.l = +l2;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Cubehelix(this.h, this.s, this.l * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Cubehelix(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb() {
    var h2 = isNaN(this.h) ? 0 : (this.h + 120) * radians, l2 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l2 * (1 - l2), cosh2 = Math.cos(h2), sinh2 = Math.sin(h2);
    return new Rgb(
      255 * (l2 + a3 * (A * cosh2 + B * sinh2)),
      255 * (l2 + a3 * (C * cosh2 + D * sinh2)),
      255 * (l2 + a3 * (E * cosh2)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t22 = t12 * t12, t32 = t22 * t12;
  return ((1 - 3 * t12 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t12 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default2(values) {
  var n2 = values.length - 1;
  return function(t4) {
    var i2 = t4 <= 0 ? t4 = 0 : t4 >= 1 ? (t4 = 1, n2 - 1) : Math.floor(t4 * n2), v1 = values[i2], v2 = values[i2 + 1], v0 = i2 > 0 ? values[i2 - 1] : 2 * v1 - v2, v3 = i2 < n2 - 1 ? values[i2 + 2] : 2 * v2 - v1;
    return basis((t4 - i2 / n2) * n2, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default2(values) {
  var n2 = values.length;
  return function(t4) {
    var i2 = Math.floor(((t4 %= 1) < 0 ? ++t4 : t4) * n2), v0 = values[(i2 + n2 - 1) % n2], v1 = values[i2 % n2], v2 = values[(i2 + 1) % n2], v3 = values[(i2 + 2) % n2];
    return basis((t4 - i2 / n2) * n2, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default4 = (x3) => () => x3;

// node_modules/d3-interpolate/src/color.js
function linear(a3, d2) {
  return function(t4) {
    return a3 + t4 * d2;
  };
}
function exponential(a3, b10, y3) {
  return a3 = Math.pow(a3, y3), b10 = Math.pow(b10, y3) - a3, y3 = 1 / y3, function(t4) {
    return Math.pow(a3 + t4 * b10, y3);
  };
}
function hue(a3, b10) {
  var d2 = b10 - a3;
  return d2 ? linear(a3, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant_default4(isNaN(a3) ? b10 : a3);
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a3, b10) {
    return b10 - a3 ? exponential(a3, b10, y3) : constant_default4(isNaN(a3) ? b10 : a3);
  };
}
function nogamma(a3, b10) {
  var d2 = b10 - a3;
  return d2 ? linear(a3, d2) : constant_default4(isNaN(a3) ? b10 : a3);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb2(start2, end) {
    var r2 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g2 = color2(start2.g, end.g), b10 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.r = r2(t4);
      start2.g = g2(t4);
      start2.b = b10(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n2 = colors.length, r2 = new Array(n2), g2 = new Array(n2), b10 = new Array(n2), i2, color2;
    for (i2 = 0; i2 < n2; ++i2) {
      color2 = rgb(colors[i2]);
      r2[i2] = color2.r || 0;
      g2[i2] = color2.g || 0;
      b10[i2] = color2.b || 0;
    }
    r2 = spline(r2);
    g2 = spline(g2);
    b10 = spline(b10);
    color2.opacity = 1;
    return function(t4) {
      color2.r = r2(t4);
      color2.g = g2(t4);
      color2.b = b10(t4);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default2);
var rgbBasisClosed = rgbSpline(basisClosed_default2);

// node_modules/d3-interpolate/src/number.js
function number_default(a3, b10) {
  return a3 = +a3, b10 = +b10, function(t4) {
    return a3 * (1 - t4) + b10 * t4;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b10) {
  return function() {
    return b10;
  };
}
function one(b10) {
  return function(t4) {
    return b10(t4) + "";
  };
}
function string_default(a3, b10) {
  var bi2 = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i2 = -1, s3 = [], q2 = [];
  a3 = a3 + "", b10 = b10 + "";
  while ((am = reA.exec(a3)) && (bm = reB.exec(b10))) {
    if ((bs = bm.index) > bi2) {
      bs = b10.slice(bi2, bs);
      if (s3[i2])
        s3[i2] += bs;
      else
        s3[++i2] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s3[i2])
        s3[i2] += bm;
      else
        s3[++i2] = bm;
    } else {
      s3[++i2] = null;
      q2.push({ i: i2, x: number_default(am, bm) });
    }
    bi2 = reB.lastIndex;
  }
  if (bi2 < b10.length) {
    bs = b10.slice(bi2);
    if (s3[i2])
      s3[i2] += bs;
    else
      s3[++i2] = bs;
  }
  return s3.length < 2 ? q2[0] ? one(q2[0].x) : zero(b10) : (b10 = q2.length, function(t4) {
    for (var i3 = 0, o2; i3 < b10; ++i3)
      s3[(o2 = q2[i3]).i] = o2.x(t4);
    return s3.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a3, b10, c2, d2, e8, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b10 * b10))
    a3 /= scaleX, b10 /= scaleX;
  if (skewX = a3 * c2 + b10 * d2)
    c2 -= a3 * skewX, d2 -= b10 * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d2 * d2))
    c2 /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a3 * d2 < b10 * c2)
    a3 = -a3, b10 = -b10, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e8,
    translateY: f2,
    rotate: Math.atan2(b10, a3) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity : decompose_default(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s3) {
    return s3.length ? s3.pop() + " " : "";
  }
  function translate(xa2, ya2, xb, yb, s3, q2) {
    if (xa2 !== xb || ya2 !== yb) {
      var i2 = s3.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i2 - 4, x: number_default(xa2, xb) }, { i: i2 - 2, x: number_default(ya2, yb) });
    } else if (xb || yb) {
      s3.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b10, s3, q2) {
    if (a3 !== b10) {
      if (a3 - b10 > 180)
        b10 += 360;
      else if (b10 - a3 > 180)
        a3 += 360;
      q2.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a3, b10) });
    } else if (b10) {
      s3.push(pop(s3) + "rotate(" + b10 + degParen);
    }
  }
  function skewX(a3, b10, s3, q2) {
    if (a3 !== b10) {
      q2.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a3, b10) });
    } else if (b10) {
      s3.push(pop(s3) + "skewX(" + b10 + degParen);
    }
  }
  function scale(xa2, ya2, xb, yb, s3, q2) {
    if (xa2 !== xb || ya2 !== yb) {
      var i2 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
      q2.push({ i: i2 - 4, x: number_default(xa2, xb) }, { i: i2 - 2, x: number_default(ya2, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b10) {
    var s3 = [], q2 = [];
    a3 = parse(a3), b10 = parse(b10);
    translate(a3.translateX, a3.translateY, b10.translateX, b10.translateY, s3, q2);
    rotate(a3.rotate, b10.rotate, s3, q2);
    skewX(a3.skewX, b10.skewX, s3, q2);
    scale(a3.scaleX, a3.scaleY, b10.scaleX, b10.scaleY, s3, q2);
    a3 = b10 = null;
    return function(t4) {
      var i2 = -1, n2 = q2.length, o2;
      while (++i2 < n2)
        s3[(o2 = q2[i2]).i] = o2.x(t4);
      return s3.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon22 = 1e-12;
function cosh(x3) {
  return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
}
function sinh(x3) {
  return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
}
function tanh(x3) {
  return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i2, S2;
    if (d2 < epsilon22) {
      S2 = Math.log(w1 / w0) / rho;
      i2 = function(t4) {
        return [
          ux0 + t4 * dx,
          uy0 + t4 * dy,
          w0 * Math.exp(rho * t4 * S2)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S2 = (r1 - r0) / rho;
      i2 = function(t4) {
        var s3 = t4 * S2, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s3 + r0) - sinh(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh(rho * s3 + r0)
        ];
      };
    }
    i2.duration = S2 * 1e3 * rho / Math.SQRT2;
    return i2;
  }
  zoom.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho(_1, _22, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s3 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.h = h2(t4);
      start2.s = s3(t4);
      start2.l = l2(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c2 = nogamma(start2.c, end.c), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t4) {
      start2.h = h2(t4);
      start2.c = c2(t4);
      start2.l = l2(t4);
      start2.opacity = opacity(t4);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y3) {
    y3 = +y3;
    function cubehelix3(start2, end) {
      var h2 = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s3 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t4) {
        start2.h = h2(t4);
        start2.s = s3(t4);
        start2.l = l2(Math.pow(t4, y3));
        start2.opacity = opacity(t4);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
  setTimeout(f2, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t4 = new Timer();
  t4.restart(callback, delay, time);
  return t4;
}
function timerFlush() {
  now();
  ++frame;
  var t4 = taskHead, e8;
  while (t4) {
    if ((e8 = clockNow - t4._time) >= 0)
      t4._call.call(void 0, e8);
    t4 = t4._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t02, t12 = taskHead, t22, time = Infinity;
  while (t12) {
    if (t12._call) {
      if (time > t12._time)
        time = t12._time;
      t02 = t12, t12 = t12._next;
    } else {
      t22 = t12._next, t12._next = null;
      t12 = t02 ? t02._next = t22 : taskHead = t22;
    }
  }
  taskTail = t02;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t4 = new Timer();
  delay = delay == null ? 0 : +delay;
  t4.restart((elapsed) => {
    t4.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t4;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group2, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule, 0, self2.time);
  function schedule(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i2, j2, n2, o2;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i2 in schedules) {
      o2 = schedules[i2];
      if (o2.name !== self2.name)
        continue;
      if (o2.state === STARTED)
        return timeout_default(start2);
      if (o2.state === RUNNING) {
        o2.state = ENDED;
        o2.timer.stop();
        o2.on.call("interrupt", node, node.__data__, o2.index, o2.group);
        delete schedules[i2];
      } else if (+i2 < id2) {
        o2.state = ENDED;
        o2.timer.stop();
        o2.on.call("cancel", node, node.__data__, o2.index, o2.group);
        delete schedules[i2];
      }
    }
    timeout_default(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n2 = self2.tween.length);
    for (i2 = 0, j2 = -1; i2 < n2; ++i2) {
      if (o2 = self2.tween[i2].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j2] = o2;
      }
    }
    tween.length = j2 + 1;
  }
  function tick(elapsed) {
    var t4 = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i2 = -1, n2 = tween.length;
    while (++i2 < n2) {
      tween[i2].call(node, t4);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i2 in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i2;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i2 in schedules) {
    if ((schedule = schedules[i2]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i2];
  }
  if (empty2)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
        if (tween1[i2].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i2, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t4 = { name, value }, i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
        if (tween1[i2].name === name) {
          tween1[i2] = t4;
          break;
        }
      }
      if (i2 === n2)
        tween1.push(t4);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i2 = 0, n2 = tween.length, t4; i2 < n2; ++i2) {
      if ((t4 = tween[i2]).name === name) {
        return t4.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a3, b10) {
  var c2;
  return (typeof b10 === "number" ? number_default : b10 instanceof color ? rgb_default : (c2 = color(b10)) ? (b10 = c2, rgb_default) : string_default)(a3, b10);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i2 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i2, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i2, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i2) {
  return function(t4) {
    this.setAttribute(name, i2.call(this, t4));
  };
}
function attrInterpolateNS(fullname, i2) {
  return function(t4) {
    this.setAttributeNS(fullname.space, fullname.local, i2.call(this, t4));
  };
}
function attrTweenNS(fullname, value) {
  var t02, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0)
      t02 = (i0 = i2) && attrInterpolateNS(fullname, i2);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t02, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0)
      t02 = (i0 = i2) && attrInterpolate(name, i2);
    return t02;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function")
      throw new Error();
    set2(this, id2).ease = v2;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && match.call(node, node.__data__, i2, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge2 = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group0[i2] || group1[i2]) {
        merge2[i2] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t4) {
    var i2 = t4.indexOf(".");
    if (i2 >= 0)
      t4 = t4.slice(0, i2);
    return !t4 || t4 === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on2 = schedule.on;
    if (on2 !== on0)
      (on1 = (on0 = on2).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i2 in this.__transition)
      if (+i2 !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && (subnode = select.call(node, node.__data__, i2, group2))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i2] = subnode;
        schedule_default(subgroup[i2], name, id2, i2, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        for (var children2 = select.call(node, node.__data__, i2, group2), child, inherit2 = get2(node, id2), k3 = 0, l2 = children2.length; k3 < l2; ++k3) {
          if (child = children2[k3]) {
            schedule_default(child, name, id2, k3, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on2 = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on2 !== on0 || listener0 !== listener)
      (on1 = (on0 = on2).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i2 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i2)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i2, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i2, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i2, priority) {
  return function(t4) {
    this.style.setProperty(name, i2.call(this, t4), priority);
  };
}
function styleTween(name, value, priority) {
  var t4, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0)
      t4 = (i0 = i2) && styleInterpolate(name, i2, priority);
    return t4;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i2) {
  return function(t4) {
    this.textContent = i2.call(this, t4);
  };
}
function textTween(value) {
  var t02, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0)
      t02 = (i0 = i2) && textInterpolate(i2);
    return t02;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i2, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on2 = schedule.on;
      if (on2 !== on0) {
        on1 = (on0 = on2).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t4) {
  return ((t4 *= 2) <= 1 ? t4 * t4 * t4 : (t4 -= 2) * t4 * t4 + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = function custom8(e8) {
  e8 = +e8;
  function polyIn2(t4) {
    return Math.pow(t4, e8);
  }
  polyIn2.exponent = custom8;
  return polyIn2;
}(exponent);
var polyOut = function custom9(e8) {
  e8 = +e8;
  function polyOut2(t4) {
    return 1 - Math.pow(1 - t4, e8);
  }
  polyOut2.exponent = custom9;
  return polyOut2;
}(exponent);
var polyInOut = function custom10(e8) {
  e8 = +e8;
  function polyInOut2(t4) {
    return ((t4 *= 2) <= 1 ? Math.pow(t4, e8) : 2 - Math.pow(2 - t4, e8)) / 2;
  }
  polyInOut2.exponent = custom10;
  return polyInOut2;
}(exponent);

// node_modules/d3-ease/src/sin.js
var pi3 = Math.PI;
var halfPi2 = pi3 / 2;

// node_modules/d3-ease/src/math.js
function tpmt(x3) {
  return (Math.pow(2, -10 * x3) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = function custom11(s3) {
  s3 = +s3;
  function backIn2(t4) {
    return (t4 = +t4) * t4 * (s3 * (t4 - 1) + t4);
  }
  backIn2.overshoot = custom11;
  return backIn2;
}(overshoot);
var backOut = function custom12(s3) {
  s3 = +s3;
  function backOut2(t4) {
    return --t4 * t4 * ((t4 + 1) * s3 + t4) + 1;
  }
  backOut2.overshoot = custom12;
  return backOut2;
}(overshoot);
var backInOut = function custom13(s3) {
  s3 = +s3;
  function backInOut2(t4) {
    return ((t4 *= 2) < 1 ? t4 * t4 * ((s3 + 1) * t4 - s3) : (t4 -= 2) * t4 * ((s3 + 1) * t4 + s3) + 2) / 2;
  }
  backInOut2.overshoot = custom13;
  return backInOut2;
}(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau3 = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = function custom14(a3, p2) {
  var s3 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau3);
  function elasticIn2(t4) {
    return a3 * tpmt(- --t4) * Math.sin((s3 - t4) / p2);
  }
  elasticIn2.amplitude = function(a4) {
    return custom14(a4, p2 * tau3);
  };
  elasticIn2.period = function(p3) {
    return custom14(a3, p3);
  };
  return elasticIn2;
}(amplitude, period);
var elasticOut = function custom15(a3, p2) {
  var s3 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau3);
  function elasticOut2(t4) {
    return 1 - a3 * tpmt(t4 = +t4) * Math.sin((t4 + s3) / p2);
  }
  elasticOut2.amplitude = function(a4) {
    return custom15(a4, p2 * tau3);
  };
  elasticOut2.period = function(p3) {
    return custom15(a3, p3);
  };
  return elasticOut2;
}(amplitude, period);
var elasticInOut = function custom16(a3, p2) {
  var s3 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau3);
  function elasticInOut2(t4) {
    return ((t4 = t4 * 2 - 1) < 0 ? a3 * tpmt(-t4) * Math.sin((s3 - t4) / p2) : 2 - a3 * tpmt(t4) * Math.sin((s3 + t4) / p2)) / 2;
  }
  elasticInOut2.amplitude = function(a4) {
    return custom16(a4, p2 * tau3);
  };
  elasticInOut2.period = function(p3) {
    return custom16(a3, p3);
  };
  return elasticInOut2;
}(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
    for (var group2 = groups[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        schedule_default(node, name, id2, i2, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default5 = (x3) => () => x3;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k3, x3, y3) {
  this.k = k3;
  this.x = x3;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k3) {
    return k3 === 1 ? this : new Transform(this.k * k3, this.x, this.y);
  },
  translate: function(x3, y3) {
    return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
  },
  apply: function(point5) {
    return [point5[0] * this.k + this.x, point5[1] * this.k + this.y];
  },
  applyX: function(x3) {
    return x3 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x3) {
    return (x3 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x3) {
    return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e8 = this;
  if (e8 instanceof SVGElement) {
    e8 = e8.ownerSVGElement || e8;
    if (e8.hasAttribute("viewBox")) {
      e8 = e8.viewBox.baseVal;
      return [[e8.x, e8.y], [e8.x + e8.width, e8.y + e8.height]];
    }
    return [[0, 0], [e8.width.baseVal.value, e8.height.baseVal.value]];
  }
  return [[0, 0], [e8.clientWidth, e8.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter3 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point5, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point5, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k3, p2, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k3 === "function" ? k3.apply(this, arguments) : k3;
      return k0 * k1;
    }, p2, event);
  };
  zoom.scaleTo = function(selection2, k3, p2, event) {
    zoom.transform(selection2, function() {
      var e8 = extent.apply(this, arguments), t02 = this.__zoom, p0 = p2 == null ? centroid(e8) : typeof p2 === "function" ? p2.apply(this, arguments) : p2, p1 = t02.invert(p0), k1 = typeof k3 === "function" ? k3.apply(this, arguments) : k3;
      return constrain(translate(scale(t02, k1), p0, p1), e8, translateExtent);
    }, p2, event);
  };
  zoom.translateBy = function(selection2, x3, y3, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x3 === "function" ? x3.apply(this, arguments) : x3,
        typeof y3 === "function" ? y3.apply(this, arguments) : y3
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x3, y3, p2, event) {
    zoom.transform(selection2, function() {
      var e8 = extent.apply(this, arguments), t4 = this.__zoom, p0 = p2 == null ? centroid(e8) : typeof p2 === "function" ? p2.apply(this, arguments) : p2;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t4.k).translate(
        typeof x3 === "function" ? -x3.apply(this, arguments) : -x3,
        typeof y3 === "function" ? -y3.apply(this, arguments) : -y3
      ), e8, translateExtent);
    }, p2, event);
  };
  function scale(transform2, k3) {
    k3 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k3));
    return k3 === transform2.k ? transform2 : new Transform(k3, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x3 = p0[0] - p1[0] * transform2.k, y3 = p0[1] - p1[1] * transform2.k;
    return x3 === transform2.x && y3 === transform2.y ? transform2 : new Transform(transform2.k, x3, y3);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point5, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g2 = gesture(that, args).event(event), e8 = extent.apply(that, args), p2 = point5 == null ? centroid(e8) : typeof point5 === "function" ? point5.apply(that, args) : point5, w2 = Math.max(e8[1][0] - e8[0][0], e8[1][1] - e8[0][1]), a3 = that.__zoom, b10 = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i2 = interpolate(a3.invert(p2).concat(w2 / a3.k), b10.invert(p2).concat(w2 / b10.k));
      return function(t4) {
        if (t4 === 1)
          t4 = b10;
        else {
          var l2 = i2(t4), k3 = w2 / l2[2];
          t4 = new Transform(k3, p2[0] - l2[0] * k3, p2[1] - l2[1] * k3);
        }
        g2.zoom(null, t4);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d2 = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d2
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var g2 = gesture(this, args).event(event), t4 = this.__zoom, k3 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t4.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p2 = pointer_default(event);
    if (g2.wheel) {
      if (g2.mouse[0][0] !== p2[0] || g2.mouse[0][1] !== p2[1]) {
        g2.mouse[1] = t4.invert(g2.mouse[0] = p2);
      }
      clearTimeout(g2.wheel);
    } else if (t4.k === k3)
      return;
    else {
      g2.mouse = [p2, t4.invert(p2)];
      interrupt_default(this);
      g2.start();
    }
    noevent_default2(event);
    g2.wheel = setTimeout(wheelidled, wheelDelay);
    g2.zoom("mouse", constrain(translate(scale(t4, k3), g2.mouse[0], g2.mouse[1]), g2.extent, translateExtent));
    function wheelidled() {
      g2.wheel = null;
      g2.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter3.apply(this, arguments))
      return;
    var currentTarget = event.currentTarget, g2 = gesture(this, args, true).event(event), v2 = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p2 = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g2.mouse = [p2, this.__zoom.invert(p2)];
    interrupt_default(this);
    g2.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g2.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g2.moved = dx * dx + dy * dy > clickDistance2;
      }
      g2.event(event2).zoom("mouse", constrain(translate(g2.that.__zoom, g2.mouse[0] = pointer_default(event2, currentTarget), g2.mouse[1]), g2.extent, translateExtent));
    }
    function mouseupped(event2) {
      v2.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g2.moved);
      noevent_default2(event2);
      g2.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var t02 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t02.invert(p0), k1 = t02.k * (event.shiftKey ? 0.5 : 2), t12 = constrain(translate(scale(t02, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0)
      select_default2(this).transition().duration(duration).call(schedule, t12, p0, event);
    else
      select_default2(this).call(zoom.transform, t12, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter3.apply(this, arguments))
      return;
    var touches = event.touches, n2 = touches.length, g2 = gesture(this, args, event.changedTouches.length === n2).event(event), started, i2, t4, p2;
    nopropagation2(event);
    for (i2 = 0; i2 < n2; ++i2) {
      t4 = touches[i2], p2 = pointer_default(t4, this);
      p2 = [p2, this.__zoom.invert(p2), t4.identifier];
      if (!g2.touch0)
        g2.touch0 = p2, started = true, g2.taps = 1 + !!touchstarting;
      else if (!g2.touch1 && g2.touch0[2] !== p2[2])
        g2.touch1 = p2, g2.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g2.taps < 2)
        touchfirst = p2[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt_default(this);
      g2.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t4, p2, l2;
    noevent_default2(event);
    for (i2 = 0; i2 < n2; ++i2) {
      t4 = touches[i2], p2 = pointer_default(t4, this);
      if (g2.touch0 && g2.touch0[2] === t4.identifier)
        g2.touch0[0] = p2;
      else if (g2.touch1 && g2.touch1[2] === t4.identifier)
        g2.touch1[0] = p2;
    }
    t4 = g2.that.__zoom;
    if (g2.touch1) {
      var p0 = g2.touch0[0], l0 = g2.touch0[1], p1 = g2.touch1[0], l1 = g2.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t4 = scale(t4, Math.sqrt(dp / dl));
      p2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g2.touch0)
      p2 = g2.touch0[0], l2 = g2.touch0[1];
    else
      return;
    g2.zoom("touch", constrain(translate(t4, p2, l2), g2.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t4;
    nopropagation2(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i2 = 0; i2 < n2; ++i2) {
      t4 = touches[i2];
      if (g2.touch0 && g2.touch0[2] === t4.identifier)
        delete g2.touch0;
      else if (g2.touch1 && g2.touch1[2] === t4.identifier)
        delete g2.touch1;
    }
    if (g2.touch1 && !g2.touch0)
      g2.touch0 = g2.touch1, delete g2.touch1;
    if (g2.touch0)
      g2.touch0[1] = this.__zoom.invert(g2.touch0[0]);
    else {
      g2.end();
      if (g2.taps === 2) {
        t4 = pointer_default(t4, this);
        if (Math.hypot(touchfirst[0] - t4[0], touchfirst[1] - t4[1]) < tapDistance) {
          var p2 = select_default2(this).on("dblclick.zoom");
          if (p2)
            p2.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_2) {
    return arguments.length ? (wheelDelta = typeof _2 === "function" ? _2 : constant_default5(+_2), zoom) : wheelDelta;
  };
  zoom.filter = function(_2) {
    return arguments.length ? (filter3 = typeof _2 === "function" ? _2 : constant_default5(!!_2), zoom) : filter3;
  };
  zoom.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default5(!!_2), zoom) : touchable;
  };
  zoom.extent = function(_2) {
    return arguments.length ? (extent = typeof _2 === "function" ? _2 : constant_default5([[+_2[0][0], +_2[0][1]], [+_2[1][0], +_2[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_2) {
    return arguments.length ? (scaleExtent[0] = +_2[0], scaleExtent[1] = +_2[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_2) {
    return arguments.length ? (translateExtent[0][0] = +_2[0][0], translateExtent[1][0] = +_2[1][0], translateExtent[0][1] = +_2[0][1], translateExtent[1][1] = +_2[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_2) {
    return arguments.length ? (constrain = _2, zoom) : constrain;
  };
  zoom.duration = function(_2) {
    return arguments.length ? (duration = +_2, zoom) : duration;
  };
  zoom.interpolate = function(_2) {
    return arguments.length ? (interpolate = _2, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_2) {
    return arguments.length ? (tapDistance = +_2, zoom) : tapDistance;
  };
  return zoom;
}

// node_modules/dagre-compound/dist/dagre-compound.es5.js
var e = { graph: { meta: { rankDir: "TB", nodeSep: 50, rankSep: 50, edgeSep: 5, align: void 0 } }, subScene: { meta: { paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, labelHeight: 20 } }, nodeSize: { meta: { width: 100, maxLabelWidth: 0, height: 20 }, node: { width: 80, height: 20, labelOffset: 10, maxLabelWidth: 40 }, bridge: { width: 5, height: 5, radius: 2, labelOffset: 0 } } };
function n(n2 = {}, t4 = e) {
  var r2, o2, i2, a3;
  const u2 = JSON.parse(JSON.stringify(t4)), c2 = (null === (r2 = null == n2 ? void 0 : n2.graph) || void 0 === r2 ? void 0 : r2.meta) || {}, s3 = (null === (o2 = null == n2 ? void 0 : n2.subScene) || void 0 === o2 ? void 0 : o2.meta) || {}, d2 = (null === (i2 = null == n2 ? void 0 : n2.nodeSize) || void 0 === i2 ? void 0 : i2.meta) || {}, f2 = (null === (a3 = null == n2 ? void 0 : n2.nodeSize) || void 0 === a3 ? void 0 : a3.node) || {}, h2 = u2.nodeSize.bridge;
  return { graph: { meta: Object.assign(u2.graph.meta, c2) }, subScene: { meta: Object.assign(u2.subScene.meta, s3) }, nodeSize: { meta: Object.assign(u2.nodeSize.meta, d2), node: Object.assign(u2.nodeSize.node, f2), bridge: h2 } };
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function r(e8, n2) {
  return e8(n2 = { exports: {} }, n2.exports), n2.exports;
}
var o = function() {
  this.__data__ = [], this.size = 0;
};
var i = function(e8, n2) {
  return e8 === n2 || e8 != e8 && n2 != n2;
};
var a2 = function(e8, n2) {
  for (var t4 = e8.length; t4--; )
    if (i(e8[t4][0], n2))
      return t4;
  return -1;
};
var u = Array.prototype.splice;
var c = function(e8) {
  var n2 = this.__data__, t4 = a2(n2, e8);
  return !(t4 < 0) && (t4 == n2.length - 1 ? n2.pop() : u.call(n2, t4, 1), --this.size, true);
};
var s2 = function(e8) {
  var n2 = this.__data__, t4 = a2(n2, e8);
  return t4 < 0 ? void 0 : n2[t4][1];
};
var d = function(e8) {
  return a2(this.__data__, e8) > -1;
};
var f = function(e8, n2) {
  var t4 = this.__data__, r2 = a2(t4, e8);
  return r2 < 0 ? (++this.size, t4.push([e8, n2])) : t4[r2][1] = n2, this;
};
function h(e8) {
  var n2 = -1, t4 = null == e8 ? 0 : e8.length;
  for (this.clear(); ++n2 < t4; ) {
    var r2 = e8[n2];
    this.set(r2[0], r2[1]);
  }
}
h.prototype.clear = o, h.prototype.delete = c, h.prototype.get = s2, h.prototype.has = d, h.prototype.set = f;
var l = h;
var v = function() {
  this.__data__ = new l(), this.size = 0;
};
var p = function(e8) {
  var n2 = this.__data__, t4 = n2.delete(e8);
  return this.size = n2.size, t4;
};
var g = function(e8) {
  return this.__data__.get(e8);
};
var y2 = function(e8) {
  return this.__data__.has(e8);
};
var b = "object" == typeof t && t && t.Object === Object && t;
var m = "object" == typeof self && self && self.Object === Object && self;
var w = b || m || Function("return this")();
var E2 = w.Symbol;
var _ = Object.prototype;
var j = _.hasOwnProperty;
var x2 = _.toString;
var N = E2 ? E2.toStringTag : void 0;
var O = function(e8) {
  var n2 = j.call(e8, N), t4 = e8[N];
  try {
    e8[N] = void 0;
    var r2 = true;
  } catch (e9) {
  }
  var o2 = x2.call(e8);
  return r2 && (n2 ? e8[N] = t4 : delete e8[N]), o2;
};
var k2 = Object.prototype.toString;
var I = function(e8) {
  return k2.call(e8);
};
var S = E2 ? E2.toStringTag : void 0;
var M = function(e8) {
  return null == e8 ? void 0 === e8 ? "[object Undefined]" : "[object Null]" : S && S in Object(e8) ? O(e8) : I(e8);
};
var C2 = function(e8) {
  var n2 = typeof e8;
  return null != e8 && ("object" == n2 || "function" == n2);
};
var G;
var A2 = function(e8) {
  if (!C2(e8))
    return false;
  var n2 = M(e8);
  return "[object Function]" == n2 || "[object GeneratorFunction]" == n2 || "[object AsyncFunction]" == n2 || "[object Proxy]" == n2;
};
var B2 = w["__core-js_shared__"];
var L = (G = /[^.]+$/.exec(B2 && B2.keys && B2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "";
var R = function(e8) {
  return !!L && L in e8;
};
var T = Function.prototype.toString;
var D2 = function(e8) {
  if (null != e8) {
    try {
      return T.call(e8);
    } catch (e9) {
    }
    try {
      return e8 + "";
    } catch (e9) {
    }
  }
  return "";
};
var P = /^\[object .+?Constructor\]$/;
var z = Function.prototype;
var F = Object.prototype;
var U = z.toString;
var V = F.hasOwnProperty;
var $ = RegExp("^" + U.call(V).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var H = function(e8) {
  return !(!C2(e8) || R(e8)) && (A2(e8) ? $ : P).test(D2(e8));
};
var W = function(e8, n2) {
  return null == e8 ? void 0 : e8[n2];
};
var q = function(e8, n2) {
  var t4 = W(e8, n2);
  return H(t4) ? t4 : void 0;
};
var Y = q(w, "Map");
var J = q(Object, "create");
var X = function() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
};
var K2 = function(e8) {
  var n2 = this.has(e8) && delete this.__data__[e8];
  return this.size -= n2 ? 1 : 0, n2;
};
var Q = Object.prototype.hasOwnProperty;
var Z = function(e8) {
  var n2 = this.__data__;
  if (J) {
    var t4 = n2[e8];
    return "__lodash_hash_undefined__" === t4 ? void 0 : t4;
  }
  return Q.call(n2, e8) ? n2[e8] : void 0;
};
var ee = Object.prototype.hasOwnProperty;
var ne = function(e8) {
  var n2 = this.__data__;
  return J ? void 0 !== n2[e8] : ee.call(n2, e8);
};
var te = function(e8, n2) {
  var t4 = this.__data__;
  return this.size += this.has(e8) ? 0 : 1, t4[e8] = J && void 0 === n2 ? "__lodash_hash_undefined__" : n2, this;
};
function re(e8) {
  var n2 = -1, t4 = null == e8 ? 0 : e8.length;
  for (this.clear(); ++n2 < t4; ) {
    var r2 = e8[n2];
    this.set(r2[0], r2[1]);
  }
}
re.prototype.clear = X, re.prototype.delete = K2, re.prototype.get = Z, re.prototype.has = ne, re.prototype.set = te;
var oe = re;
var ie = function() {
  this.size = 0, this.__data__ = { hash: new oe(), map: new (Y || l)(), string: new oe() };
};
var ae = function(e8) {
  var n2 = typeof e8;
  return "string" == n2 || "number" == n2 || "symbol" == n2 || "boolean" == n2 ? "__proto__" !== e8 : null === e8;
};
var ue = function(e8, n2) {
  var t4 = e8.__data__;
  return ae(n2) ? t4["string" == typeof n2 ? "string" : "hash"] : t4.map;
};
var ce = function(e8) {
  var n2 = ue(this, e8).delete(e8);
  return this.size -= n2 ? 1 : 0, n2;
};
var se = function(e8) {
  return ue(this, e8).get(e8);
};
var de = function(e8) {
  return ue(this, e8).has(e8);
};
var fe = function(e8, n2) {
  var t4 = ue(this, e8), r2 = t4.size;
  return t4.set(e8, n2), this.size += t4.size == r2 ? 0 : 1, this;
};
function he(e8) {
  var n2 = -1, t4 = null == e8 ? 0 : e8.length;
  for (this.clear(); ++n2 < t4; ) {
    var r2 = e8[n2];
    this.set(r2[0], r2[1]);
  }
}
he.prototype.clear = ie, he.prototype.delete = ce, he.prototype.get = se, he.prototype.has = de, he.prototype.set = fe;
var le = he;
var ve = function(e8, n2) {
  var t4 = this.__data__;
  if (t4 instanceof l) {
    var r2 = t4.__data__;
    if (!Y || r2.length < 199)
      return r2.push([e8, n2]), this.size = ++t4.size, this;
    t4 = this.__data__ = new le(r2);
  }
  return t4.set(e8, n2), this.size = t4.size, this;
};
function pe(e8) {
  var n2 = this.__data__ = new l(e8);
  this.size = n2.size;
}
pe.prototype.clear = v, pe.prototype.delete = p, pe.prototype.get = g, pe.prototype.has = y2, pe.prototype.set = ve;
var ge = pe;
var ye = function(e8, n2) {
  for (var t4 = -1, r2 = null == e8 ? 0 : e8.length; ++t4 < r2 && false !== n2(e8[t4], t4, e8); )
    ;
  return e8;
};
var be = function() {
  try {
    var e8 = q(Object, "defineProperty");
    return e8({}, "", {}), e8;
  } catch (e9) {
  }
}();
var me = function(e8, n2, t4) {
  "__proto__" == n2 && be ? be(e8, n2, { configurable: true, enumerable: true, value: t4, writable: true }) : e8[n2] = t4;
};
var we = Object.prototype.hasOwnProperty;
var Ee = function(e8, n2, t4) {
  var r2 = e8[n2];
  we.call(e8, n2) && i(r2, t4) && (void 0 !== t4 || n2 in e8) || me(e8, n2, t4);
};
var _e = function(e8, n2, t4, r2) {
  var o2 = !t4;
  t4 || (t4 = {});
  for (var i2 = -1, a3 = n2.length; ++i2 < a3; ) {
    var u2 = n2[i2], c2 = r2 ? r2(t4[u2], e8[u2], u2, t4, e8) : void 0;
    void 0 === c2 && (c2 = e8[u2]), o2 ? me(t4, u2, c2) : Ee(t4, u2, c2);
  }
  return t4;
};
var je = function(e8, n2) {
  for (var t4 = -1, r2 = Array(e8); ++t4 < e8; )
    r2[t4] = n2(t4);
  return r2;
};
var xe = function(e8) {
  return null != e8 && "object" == typeof e8;
};
var Ne = function(e8) {
  return xe(e8) && "[object Arguments]" == M(e8);
};
var Oe = Object.prototype;
var ke = Oe.hasOwnProperty;
var Ie = Oe.propertyIsEnumerable;
var Se = Ne(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ne : function(e8) {
  return xe(e8) && ke.call(e8, "callee") && !Ie.call(e8, "callee");
};
var Me = Array.isArray;
var Ce = function() {
  return false;
};
var Ge = r(function(e8, n2) {
  var t4 = n2 && !n2.nodeType && n2, r2 = t4 && e8 && !e8.nodeType && e8, o2 = r2 && r2.exports === t4 ? w.Buffer : void 0, i2 = (o2 ? o2.isBuffer : void 0) || Ce;
  e8.exports = i2;
});
var Ae = /^(?:0|[1-9]\d*)$/;
var Be = function(e8, n2) {
  var t4 = typeof e8;
  return !!(n2 = null == n2 ? 9007199254740991 : n2) && ("number" == t4 || "symbol" != t4 && Ae.test(e8)) && e8 > -1 && e8 % 1 == 0 && e8 < n2;
};
var Le = function(e8) {
  return "number" == typeof e8 && e8 > -1 && e8 % 1 == 0 && e8 <= 9007199254740991;
};
var Re = {};
Re["[object Float32Array]"] = Re["[object Float64Array]"] = Re["[object Int8Array]"] = Re["[object Int16Array]"] = Re["[object Int32Array]"] = Re["[object Uint8Array]"] = Re["[object Uint8ClampedArray]"] = Re["[object Uint16Array]"] = Re["[object Uint32Array]"] = true, Re["[object Arguments]"] = Re["[object Array]"] = Re["[object ArrayBuffer]"] = Re["[object Boolean]"] = Re["[object DataView]"] = Re["[object Date]"] = Re["[object Error]"] = Re["[object Function]"] = Re["[object Map]"] = Re["[object Number]"] = Re["[object Object]"] = Re["[object RegExp]"] = Re["[object Set]"] = Re["[object String]"] = Re["[object WeakMap]"] = false;
var Te = function(e8) {
  return xe(e8) && Le(e8.length) && !!Re[M(e8)];
};
var De = function(e8) {
  return function(n2) {
    return e8(n2);
  };
};
var Pe = r(function(e8, n2) {
  var t4 = n2 && !n2.nodeType && n2, r2 = t4 && e8 && !e8.nodeType && e8, o2 = r2 && r2.exports === t4 && b.process, i2 = function() {
    try {
      var e9 = r2 && r2.require && r2.require("util").types;
      return e9 || o2 && o2.binding && o2.binding("util");
    } catch (e10) {
    }
  }();
  e8.exports = i2;
});
var ze = Pe && Pe.isTypedArray;
var Fe = ze ? De(ze) : Te;
var Ue = Object.prototype.hasOwnProperty;
var Ve = function(e8, n2) {
  var t4 = Me(e8), r2 = !t4 && Se(e8), o2 = !t4 && !r2 && Ge(e8), i2 = !t4 && !r2 && !o2 && Fe(e8), a3 = t4 || r2 || o2 || i2, u2 = a3 ? je(e8.length, String) : [], c2 = u2.length;
  for (var s3 in e8)
    !n2 && !Ue.call(e8, s3) || a3 && ("length" == s3 || o2 && ("offset" == s3 || "parent" == s3) || i2 && ("buffer" == s3 || "byteLength" == s3 || "byteOffset" == s3) || Be(s3, c2)) || u2.push(s3);
  return u2;
};
var $e = Object.prototype;
var He = function(e8) {
  var n2 = e8 && e8.constructor;
  return e8 === ("function" == typeof n2 && n2.prototype || $e);
};
var We = function(e8, n2) {
  return function(t4) {
    return e8(n2(t4));
  };
};
var qe = We(Object.keys, Object);
var Ye = Object.prototype.hasOwnProperty;
var Je = function(e8) {
  if (!He(e8))
    return qe(e8);
  var n2 = [];
  for (var t4 in Object(e8))
    Ye.call(e8, t4) && "constructor" != t4 && n2.push(t4);
  return n2;
};
var Xe = function(e8) {
  return null != e8 && Le(e8.length) && !A2(e8);
};
var Ke = function(e8) {
  return Xe(e8) ? Ve(e8) : Je(e8);
};
var Qe = function(e8, n2) {
  return e8 && _e(n2, Ke(n2), e8);
};
var Ze = function(e8) {
  var n2 = [];
  if (null != e8)
    for (var t4 in Object(e8))
      n2.push(t4);
  return n2;
};
var en = Object.prototype.hasOwnProperty;
var nn = function(e8) {
  if (!C2(e8))
    return Ze(e8);
  var n2 = He(e8), t4 = [];
  for (var r2 in e8)
    ("constructor" != r2 || !n2 && en.call(e8, r2)) && t4.push(r2);
  return t4;
};
var tn = function(e8) {
  return Xe(e8) ? Ve(e8, true) : nn(e8);
};
var rn = function(e8, n2) {
  return e8 && _e(n2, tn(n2), e8);
};
var on = r(function(e8, n2) {
  var t4 = n2 && !n2.nodeType && n2, r2 = t4 && e8 && !e8.nodeType && e8, o2 = r2 && r2.exports === t4 ? w.Buffer : void 0, i2 = o2 ? o2.allocUnsafe : void 0;
  e8.exports = function(e9, n3) {
    if (n3)
      return e9.slice();
    var t5 = e9.length, r3 = i2 ? i2(t5) : new e9.constructor(t5);
    return e9.copy(r3), r3;
  };
});
var an = function(e8, n2) {
  var t4 = -1, r2 = e8.length;
  for (n2 || (n2 = Array(r2)); ++t4 < r2; )
    n2[t4] = e8[t4];
  return n2;
};
var un = function(e8, n2) {
  for (var t4 = -1, r2 = null == e8 ? 0 : e8.length, o2 = 0, i2 = []; ++t4 < r2; ) {
    var a3 = e8[t4];
    n2(a3, t4, e8) && (i2[o2++] = a3);
  }
  return i2;
};
var cn = function() {
  return [];
};
var sn = Object.prototype.propertyIsEnumerable;
var dn = Object.getOwnPropertySymbols;
var fn = dn ? function(e8) {
  return null == e8 ? [] : (e8 = Object(e8), un(dn(e8), function(n2) {
    return sn.call(e8, n2);
  }));
} : cn;
var hn = function(e8, n2) {
  return _e(e8, fn(e8), n2);
};
var ln = function(e8, n2) {
  for (var t4 = -1, r2 = n2.length, o2 = e8.length; ++t4 < r2; )
    e8[o2 + t4] = n2[t4];
  return e8;
};
var vn = We(Object.getPrototypeOf, Object);
var pn = Object.getOwnPropertySymbols ? function(e8) {
  for (var n2 = []; e8; )
    ln(n2, fn(e8)), e8 = vn(e8);
  return n2;
} : cn;
var gn = function(e8, n2) {
  return _e(e8, pn(e8), n2);
};
var yn = function(e8, n2, t4) {
  var r2 = n2(e8);
  return Me(e8) ? r2 : ln(r2, t4(e8));
};
var bn = function(e8) {
  return yn(e8, Ke, fn);
};
var mn = function(e8) {
  return yn(e8, tn, pn);
};
var wn = q(w, "DataView");
var En = q(w, "Promise");
var _n = q(w, "Set");
var jn = q(w, "WeakMap");
var xn = D2(wn);
var Nn = D2(Y);
var On = D2(En);
var kn = D2(_n);
var In = D2(jn);
var Sn = M;
(wn && "[object DataView]" != Sn(new wn(new ArrayBuffer(1))) || Y && "[object Map]" != Sn(new Y()) || En && "[object Promise]" != Sn(En.resolve()) || _n && "[object Set]" != Sn(new _n()) || jn && "[object WeakMap]" != Sn(new jn())) && (Sn = function(e8) {
  var n2 = M(e8), t4 = "[object Object]" == n2 ? e8.constructor : void 0, r2 = t4 ? D2(t4) : "";
  if (r2)
    switch (r2) {
      case xn:
        return "[object DataView]";
      case Nn:
        return "[object Map]";
      case On:
        return "[object Promise]";
      case kn:
        return "[object Set]";
      case In:
        return "[object WeakMap]";
    }
  return n2;
});
var Mn = Sn;
var Cn = Object.prototype.hasOwnProperty;
var Gn = function(e8) {
  var n2 = e8.length, t4 = new e8.constructor(n2);
  return n2 && "string" == typeof e8[0] && Cn.call(e8, "index") && (t4.index = e8.index, t4.input = e8.input), t4;
};
var An = w.Uint8Array;
var Bn = function(e8) {
  var n2 = new e8.constructor(e8.byteLength);
  return new An(n2).set(new An(e8)), n2;
};
var Ln = function(e8, n2) {
  var t4 = n2 ? Bn(e8.buffer) : e8.buffer;
  return new e8.constructor(t4, e8.byteOffset, e8.byteLength);
};
var Rn = /\w*$/;
var Tn = function(e8) {
  var n2 = new e8.constructor(e8.source, Rn.exec(e8));
  return n2.lastIndex = e8.lastIndex, n2;
};
var Dn = E2 ? E2.prototype : void 0;
var Pn = Dn ? Dn.valueOf : void 0;
var zn = function(e8) {
  return Pn ? Object(Pn.call(e8)) : {};
};
var Fn = function(e8, n2) {
  var t4 = n2 ? Bn(e8.buffer) : e8.buffer;
  return new e8.constructor(t4, e8.byteOffset, e8.length);
};
var Un = function(e8, n2, t4) {
  var r2 = e8.constructor;
  switch (n2) {
    case "[object ArrayBuffer]":
      return Bn(e8);
    case "[object Boolean]":
    case "[object Date]":
      return new r2(+e8);
    case "[object DataView]":
      return Ln(e8, t4);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return Fn(e8, t4);
    case "[object Map]":
    case "[object Set]":
      return new r2();
    case "[object Number]":
    case "[object String]":
      return new r2(e8);
    case "[object RegExp]":
      return Tn(e8);
    case "[object Symbol]":
      return zn(e8);
  }
};
var Vn = Object.create;
var $n = /* @__PURE__ */ function() {
  function e8() {
  }
  return function(n2) {
    if (!C2(n2))
      return {};
    if (Vn)
      return Vn(n2);
    e8.prototype = n2;
    var t4 = new e8();
    return e8.prototype = void 0, t4;
  };
}();
var Hn = function(e8) {
  return "function" != typeof e8.constructor || He(e8) ? {} : $n(vn(e8));
};
var Wn = function(e8) {
  return xe(e8) && "[object Map]" == Mn(e8);
};
var qn = Pe && Pe.isMap;
var Yn2 = qn ? De(qn) : Wn;
var Jn = function(e8) {
  return xe(e8) && "[object Set]" == Mn(e8);
};
var Xn2 = Pe && Pe.isSet;
var Kn = Xn2 ? De(Xn2) : Jn;
var Qn = {};
Qn["[object Arguments]"] = Qn["[object Array]"] = Qn["[object ArrayBuffer]"] = Qn["[object DataView]"] = Qn["[object Boolean]"] = Qn["[object Date]"] = Qn["[object Float32Array]"] = Qn["[object Float64Array]"] = Qn["[object Int8Array]"] = Qn["[object Int16Array]"] = Qn["[object Int32Array]"] = Qn["[object Map]"] = Qn["[object Number]"] = Qn["[object Object]"] = Qn["[object RegExp]"] = Qn["[object Set]"] = Qn["[object String]"] = Qn["[object Symbol]"] = Qn["[object Uint8Array]"] = Qn["[object Uint8ClampedArray]"] = Qn["[object Uint16Array]"] = Qn["[object Uint32Array]"] = true, Qn["[object Error]"] = Qn["[object Function]"] = Qn["[object WeakMap]"] = false;
var Zn2 = function e2(n2, t4, r2, o2, i2, a3) {
  var u2, c2 = 1 & t4, s3 = 2 & t4, d2 = 4 & t4;
  if (r2 && (u2 = i2 ? r2(n2, o2, i2, a3) : r2(n2)), void 0 !== u2)
    return u2;
  if (!C2(n2))
    return n2;
  var f2 = Me(n2);
  if (f2) {
    if (u2 = Gn(n2), !c2)
      return an(n2, u2);
  } else {
    var h2 = Mn(n2), l2 = "[object Function]" == h2 || "[object GeneratorFunction]" == h2;
    if (Ge(n2))
      return on(n2, c2);
    if ("[object Object]" == h2 || "[object Arguments]" == h2 || l2 && !i2) {
      if (u2 = s3 || l2 ? {} : Hn(n2), !c2)
        return s3 ? gn(n2, rn(u2, n2)) : hn(n2, Qe(u2, n2));
    } else {
      if (!Qn[h2])
        return i2 ? n2 : {};
      u2 = Un(n2, h2, c2);
    }
  }
  a3 || (a3 = new ge());
  var v2 = a3.get(n2);
  if (v2)
    return v2;
  a3.set(n2, u2), Kn(n2) ? n2.forEach(function(o3) {
    u2.add(e2(o3, t4, r2, o3, n2, a3));
  }) : Yn2(n2) && n2.forEach(function(o3, i3) {
    u2.set(i3, e2(o3, t4, r2, i3, n2, a3));
  });
  var p2 = f2 ? void 0 : (d2 ? s3 ? mn : bn : s3 ? tn : Ke)(n2);
  return ye(p2 || n2, function(o3, i3) {
    p2 && (o3 = n2[i3 = o3]), Ee(u2, i3, e2(o3, t4, r2, i3, n2, a3));
  }), u2;
};
var et = function(e8) {
  return Zn2(e8, 4);
};
var nt = function(e8) {
  return function() {
    return e8;
  };
};
var tt = /* @__PURE__ */ function(e8) {
  return function(n2, t4, r2) {
    for (var o2 = -1, i2 = Object(n2), a3 = r2(n2), u2 = a3.length; u2--; ) {
      var c2 = a3[e8 ? u2 : ++o2];
      if (false === t4(i2[c2], c2, i2))
        break;
    }
    return n2;
  };
}();
var rt = function(e8, n2) {
  return e8 && tt(e8, n2, Ke);
};
var ot = /* @__PURE__ */ function(e8, n2) {
  return function(t4, r2) {
    if (null == t4)
      return t4;
    if (!Xe(t4))
      return e8(t4, r2);
    for (var o2 = t4.length, i2 = n2 ? o2 : -1, a3 = Object(t4); (n2 ? i2-- : ++i2 < o2) && false !== r2(a3[i2], i2, a3); )
      ;
    return t4;
  };
}(rt);
var it = function(e8) {
  return e8;
};
var at = function(e8) {
  return "function" == typeof e8 ? e8 : it;
};
var ut = function(e8, n2) {
  return (Me(e8) ? ye : ot)(e8, at(n2));
};
var ct = ut;
var st = function(e8, n2) {
  var t4 = [];
  return ot(e8, function(e9, r2, o2) {
    n2(e9, r2, o2) && t4.push(e9);
  }), t4;
};
var dt = function(e8) {
  return this.__data__.set(e8, "__lodash_hash_undefined__"), this;
};
var ft = function(e8) {
  return this.__data__.has(e8);
};
function ht(e8) {
  var n2 = -1, t4 = null == e8 ? 0 : e8.length;
  for (this.__data__ = new le(); ++n2 < t4; )
    this.add(e8[n2]);
}
ht.prototype.add = ht.prototype.push = dt, ht.prototype.has = ft;
var lt = ht;
var vt = function(e8, n2) {
  for (var t4 = -1, r2 = null == e8 ? 0 : e8.length; ++t4 < r2; )
    if (n2(e8[t4], t4, e8))
      return true;
  return false;
};
var pt = function(e8, n2) {
  return e8.has(n2);
};
var gt = function(e8, n2, t4, r2, o2, i2) {
  var a3 = 1 & t4, u2 = e8.length, c2 = n2.length;
  if (u2 != c2 && !(a3 && c2 > u2))
    return false;
  var s3 = i2.get(e8), d2 = i2.get(n2);
  if (s3 && d2)
    return s3 == n2 && d2 == e8;
  var f2 = -1, h2 = true, l2 = 2 & t4 ? new lt() : void 0;
  for (i2.set(e8, n2), i2.set(n2, e8); ++f2 < u2; ) {
    var v2 = e8[f2], p2 = n2[f2];
    if (r2)
      var g2 = a3 ? r2(p2, v2, f2, n2, e8, i2) : r2(v2, p2, f2, e8, n2, i2);
    if (void 0 !== g2) {
      if (g2)
        continue;
      h2 = false;
      break;
    }
    if (l2) {
      if (!vt(n2, function(e9, n3) {
        if (!pt(l2, n3) && (v2 === e9 || o2(v2, e9, t4, r2, i2)))
          return l2.push(n3);
      })) {
        h2 = false;
        break;
      }
    } else if (v2 !== p2 && !o2(v2, p2, t4, r2, i2)) {
      h2 = false;
      break;
    }
  }
  return i2.delete(e8), i2.delete(n2), h2;
};
var yt = function(e8) {
  var n2 = -1, t4 = Array(e8.size);
  return e8.forEach(function(e9, r2) {
    t4[++n2] = [r2, e9];
  }), t4;
};
var bt = function(e8) {
  var n2 = -1, t4 = Array(e8.size);
  return e8.forEach(function(e9) {
    t4[++n2] = e9;
  }), t4;
};
var mt = E2 ? E2.prototype : void 0;
var wt = mt ? mt.valueOf : void 0;
var Et = function(e8, n2, t4, r2, o2, a3, u2) {
  switch (t4) {
    case "[object DataView]":
      if (e8.byteLength != n2.byteLength || e8.byteOffset != n2.byteOffset)
        return false;
      e8 = e8.buffer, n2 = n2.buffer;
    case "[object ArrayBuffer]":
      return !(e8.byteLength != n2.byteLength || !a3(new An(e8), new An(n2)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return i(+e8, +n2);
    case "[object Error]":
      return e8.name == n2.name && e8.message == n2.message;
    case "[object RegExp]":
    case "[object String]":
      return e8 == n2 + "";
    case "[object Map]":
      var c2 = yt;
    case "[object Set]":
      var s3 = 1 & r2;
      if (c2 || (c2 = bt), e8.size != n2.size && !s3)
        return false;
      var d2 = u2.get(e8);
      if (d2)
        return d2 == n2;
      r2 |= 2, u2.set(e8, n2);
      var f2 = gt(c2(e8), c2(n2), r2, o2, a3, u2);
      return u2.delete(e8), f2;
    case "[object Symbol]":
      if (wt)
        return wt.call(e8) == wt.call(n2);
  }
  return false;
};
var _t = Object.prototype.hasOwnProperty;
var jt = function(e8, n2, t4, r2, o2, i2) {
  var a3 = 1 & t4, u2 = bn(e8), c2 = u2.length;
  if (c2 != bn(n2).length && !a3)
    return false;
  for (var s3 = c2; s3--; ) {
    var d2 = u2[s3];
    if (!(a3 ? d2 in n2 : _t.call(n2, d2)))
      return false;
  }
  var f2 = i2.get(e8), h2 = i2.get(n2);
  if (f2 && h2)
    return f2 == n2 && h2 == e8;
  var l2 = true;
  i2.set(e8, n2), i2.set(n2, e8);
  for (var v2 = a3; ++s3 < c2; ) {
    var p2 = e8[d2 = u2[s3]], g2 = n2[d2];
    if (r2)
      var y3 = a3 ? r2(g2, p2, d2, n2, e8, i2) : r2(p2, g2, d2, e8, n2, i2);
    if (!(void 0 === y3 ? p2 === g2 || o2(p2, g2, t4, r2, i2) : y3)) {
      l2 = false;
      break;
    }
    v2 || (v2 = "constructor" == d2);
  }
  if (l2 && !v2) {
    var b10 = e8.constructor, m2 = n2.constructor;
    b10 == m2 || !("constructor" in e8) || !("constructor" in n2) || "function" == typeof b10 && b10 instanceof b10 && "function" == typeof m2 && m2 instanceof m2 || (l2 = false);
  }
  return i2.delete(e8), i2.delete(n2), l2;
};
var xt = Object.prototype.hasOwnProperty;
var Nt = function(e8, n2, t4, r2, o2, i2) {
  var a3 = Me(e8), u2 = Me(n2), c2 = a3 ? "[object Array]" : Mn(e8), s3 = u2 ? "[object Array]" : Mn(n2), d2 = "[object Object]" == (c2 = "[object Arguments]" == c2 ? "[object Object]" : c2), f2 = "[object Object]" == (s3 = "[object Arguments]" == s3 ? "[object Object]" : s3), h2 = c2 == s3;
  if (h2 && Ge(e8)) {
    if (!Ge(n2))
      return false;
    a3 = true, d2 = false;
  }
  if (h2 && !d2)
    return i2 || (i2 = new ge()), a3 || Fe(e8) ? gt(e8, n2, t4, r2, o2, i2) : Et(e8, n2, c2, t4, r2, o2, i2);
  if (!(1 & t4)) {
    var l2 = d2 && xt.call(e8, "__wrapped__"), v2 = f2 && xt.call(n2, "__wrapped__");
    if (l2 || v2) {
      var p2 = l2 ? e8.value() : e8, g2 = v2 ? n2.value() : n2;
      return i2 || (i2 = new ge()), o2(p2, g2, t4, r2, i2);
    }
  }
  return !!h2 && (i2 || (i2 = new ge()), jt(e8, n2, t4, r2, o2, i2));
};
var Ot = function e3(n2, t4, r2, o2, i2) {
  return n2 === t4 || (null == n2 || null == t4 || !xe(n2) && !xe(t4) ? n2 != n2 && t4 != t4 : Nt(n2, t4, r2, o2, e3, i2));
};
var kt = function(e8, n2, t4, r2) {
  var o2 = t4.length, i2 = o2, a3 = !r2;
  if (null == e8)
    return !i2;
  for (e8 = Object(e8); o2--; ) {
    var u2 = t4[o2];
    if (a3 && u2[2] ? u2[1] !== e8[u2[0]] : !(u2[0] in e8))
      return false;
  }
  for (; ++o2 < i2; ) {
    var c2 = (u2 = t4[o2])[0], s3 = e8[c2], d2 = u2[1];
    if (a3 && u2[2]) {
      if (void 0 === s3 && !(c2 in e8))
        return false;
    } else {
      var f2 = new ge();
      if (r2)
        var h2 = r2(s3, d2, c2, e8, n2, f2);
      if (!(void 0 === h2 ? Ot(d2, s3, 3, r2, f2) : h2))
        return false;
    }
  }
  return true;
};
var It = function(e8) {
  return e8 == e8 && !C2(e8);
};
var St = function(e8) {
  for (var n2 = Ke(e8), t4 = n2.length; t4--; ) {
    var r2 = n2[t4], o2 = e8[r2];
    n2[t4] = [r2, o2, It(o2)];
  }
  return n2;
};
var Mt = function(e8, n2) {
  return function(t4) {
    return null != t4 && (t4[e8] === n2 && (void 0 !== n2 || e8 in Object(t4)));
  };
};
var Ct = function(e8) {
  var n2 = St(e8);
  return 1 == n2.length && n2[0][2] ? Mt(n2[0][0], n2[0][1]) : function(t4) {
    return t4 === e8 || kt(t4, e8, n2);
  };
};
var Gt = function(e8) {
  return "symbol" == typeof e8 || xe(e8) && "[object Symbol]" == M(e8);
};
var At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Bt = /^\w*$/;
var Lt = function(e8, n2) {
  if (Me(e8))
    return false;
  var t4 = typeof e8;
  return !("number" != t4 && "symbol" != t4 && "boolean" != t4 && null != e8 && !Gt(e8)) || (Bt.test(e8) || !At.test(e8) || null != n2 && e8 in Object(n2));
};
function Rt(e8, n2) {
  if ("function" != typeof e8 || null != n2 && "function" != typeof n2)
    throw new TypeError("Expected a function");
  var t4 = function() {
    var r2 = arguments, o2 = n2 ? n2.apply(this, r2) : r2[0], i2 = t4.cache;
    if (i2.has(o2))
      return i2.get(o2);
    var a3 = e8.apply(this, r2);
    return t4.cache = i2.set(o2, a3) || i2, a3;
  };
  return t4.cache = new (Rt.Cache || le)(), t4;
}
Rt.Cache = le;
var Tt = Rt;
var Dt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Pt = /\\(\\)?/g;
var zt = function(e8) {
  var n2 = Tt(e8, function(e9) {
    return 500 === t4.size && t4.clear(), e9;
  }), t4 = n2.cache;
  return n2;
}(function(e8) {
  var n2 = [];
  return 46 === e8.charCodeAt(0) && n2.push(""), e8.replace(Dt, function(e9, t4, r2, o2) {
    n2.push(r2 ? o2.replace(Pt, "$1") : t4 || e9);
  }), n2;
});
var Ft = function(e8, n2) {
  for (var t4 = -1, r2 = null == e8 ? 0 : e8.length, o2 = Array(r2); ++t4 < r2; )
    o2[t4] = n2(e8[t4], t4, e8);
  return o2;
};
var Ut = E2 ? E2.prototype : void 0;
var Vt = Ut ? Ut.toString : void 0;
var $t = function e4(n2) {
  if ("string" == typeof n2)
    return n2;
  if (Me(n2))
    return Ft(n2, e4) + "";
  if (Gt(n2))
    return Vt ? Vt.call(n2) : "";
  var t4 = n2 + "";
  return "0" == t4 && 1 / n2 == -Infinity ? "-0" : t4;
};
var Ht = function(e8) {
  return null == e8 ? "" : $t(e8);
};
var Wt = function(e8, n2) {
  return Me(e8) ? e8 : Lt(e8, n2) ? [e8] : zt(Ht(e8));
};
var qt = function(e8) {
  if ("string" == typeof e8 || Gt(e8))
    return e8;
  var n2 = e8 + "";
  return "0" == n2 && 1 / e8 == -Infinity ? "-0" : n2;
};
var Yt = function(e8, n2) {
  for (var t4 = 0, r2 = (n2 = Wt(n2, e8)).length; null != e8 && t4 < r2; )
    e8 = e8[qt(n2[t4++])];
  return t4 && t4 == r2 ? e8 : void 0;
};
var Jt = function(e8, n2, t4) {
  var r2 = null == e8 ? void 0 : Yt(e8, n2);
  return void 0 === r2 ? t4 : r2;
};
var Xt = function(e8, n2) {
  return null != e8 && n2 in Object(e8);
};
var Kt = function(e8, n2, t4) {
  for (var r2 = -1, o2 = (n2 = Wt(n2, e8)).length, i2 = false; ++r2 < o2; ) {
    var a3 = qt(n2[r2]);
    if (!(i2 = null != e8 && t4(e8, a3)))
      break;
    e8 = e8[a3];
  }
  return i2 || ++r2 != o2 ? i2 : !!(o2 = null == e8 ? 0 : e8.length) && Le(o2) && Be(a3, o2) && (Me(e8) || Se(e8));
};
var Qt = function(e8, n2) {
  return null != e8 && Kt(e8, n2, Xt);
};
var Zt = function(e8, n2) {
  return Lt(e8) && It(n2) ? Mt(qt(e8), n2) : function(t4) {
    var r2 = Jt(t4, e8);
    return void 0 === r2 && r2 === n2 ? Qt(t4, e8) : Ot(n2, r2, 3);
  };
};
var er = function(e8) {
  return function(n2) {
    return null == n2 ? void 0 : n2[e8];
  };
};
var nr = function(e8) {
  return function(n2) {
    return Yt(n2, e8);
  };
};
var tr = function(e8) {
  return Lt(e8) ? er(qt(e8)) : nr(e8);
};
var rr = function(e8) {
  return "function" == typeof e8 ? e8 : null == e8 ? it : "object" == typeof e8 ? Me(e8) ? Zt(e8[0], e8[1]) : Ct(e8) : tr(e8);
};
var or = function(e8, n2) {
  return (Me(e8) ? un : st)(e8, rr(n2));
};
var ir = Object.prototype.hasOwnProperty;
var ar = function(e8, n2) {
  return null != e8 && ir.call(e8, n2);
};
var ur = function(e8, n2) {
  return null != e8 && Kt(e8, n2, ar);
};
var cr = Object.prototype.hasOwnProperty;
var sr = function(e8) {
  if (null == e8)
    return true;
  if (Xe(e8) && (Me(e8) || "string" == typeof e8 || "function" == typeof e8.splice || Ge(e8) || Fe(e8) || Se(e8)))
    return !e8.length;
  var n2 = Mn(e8);
  if ("[object Map]" == n2 || "[object Set]" == n2)
    return !e8.size;
  if (He(e8))
    return !Je(e8).length;
  for (var t4 in e8)
    if (cr.call(e8, t4))
      return false;
  return true;
};
var dr = function(e8) {
  return void 0 === e8;
};
var fr = function(e8, n2) {
  var t4 = -1, r2 = Xe(e8) ? Array(e8.length) : [];
  return ot(e8, function(e9, o2, i2) {
    r2[++t4] = n2(e9, o2, i2);
  }), r2;
};
var hr = function(e8, n2) {
  return (Me(e8) ? Ft : fr)(e8, rr(n2));
};
var lr = function(e8, n2, t4, r2) {
  var o2 = -1, i2 = null == e8 ? 0 : e8.length;
  for (r2 && i2 && (t4 = e8[++o2]); ++o2 < i2; )
    t4 = n2(t4, e8[o2], o2, e8);
  return t4;
};
var vr = function(e8, n2, t4, r2, o2) {
  return o2(e8, function(e9, o3, i2) {
    t4 = r2 ? (r2 = false, e9) : n2(t4, e9, o3, i2);
  }), t4;
};
var pr = function(e8, n2, t4) {
  var r2 = Me(e8) ? lr : vr, o2 = arguments.length < 3;
  return r2(e8, rr(n2), t4, o2, ot);
};
var gr = function(e8) {
  return "string" == typeof e8 || !Me(e8) && xe(e8) && "[object String]" == M(e8);
};
var yr = er("length");
var br = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
var mr = function(e8) {
  return br.test(e8);
};
var wr = "[\\ud800-\\udfff]";
var Er = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
var _r = "\\ud83c[\\udffb-\\udfff]";
var jr = "[^\\ud800-\\udfff]";
var xr = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var Nr = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var Or = "(?:" + Er + "|" + _r + ")?";
var kr2 = "[\\ufe0e\\ufe0f]?" + Or + ("(?:\\u200d(?:" + [jr, xr, Nr].join("|") + ")[\\ufe0e\\ufe0f]?" + Or + ")*");
var Ir = "(?:" + [jr + Er + "?", Er, xr, Nr, wr].join("|") + ")";
var Sr = RegExp(_r + "(?=" + _r + ")|" + Ir + kr2, "g");
var Mr = function(e8) {
  for (var n2 = Sr.lastIndex = 0; Sr.test(e8); )
    ++n2;
  return n2;
};
var Cr = function(e8) {
  return mr(e8) ? Mr(e8) : yr(e8);
};
var Gr = function(e8) {
  if (null == e8)
    return 0;
  if (Xe(e8))
    return gr(e8) ? Cr(e8) : e8.length;
  var n2 = Mn(e8);
  return "[object Map]" == n2 || "[object Set]" == n2 ? e8.size : Je(e8).length;
};
var Ar = function(e8, n2, t4) {
  var r2 = Me(e8), o2 = r2 || Ge(e8) || Fe(e8);
  if (n2 = rr(n2), null == t4) {
    var i2 = e8 && e8.constructor;
    t4 = o2 ? r2 ? new i2() : [] : C2(e8) && A2(i2) ? $n(vn(e8)) : {};
  }
  return (o2 ? ye : rt)(e8, function(e9, r3, o3) {
    return n2(t4, e9, r3, o3);
  }), t4;
};
var Br = E2 ? E2.isConcatSpreadable : void 0;
var Lr = function(e8) {
  return Me(e8) || Se(e8) || !!(Br && e8 && e8[Br]);
};
var Rr = function e5(n2, t4, r2, o2, i2) {
  var a3 = -1, u2 = n2.length;
  for (r2 || (r2 = Lr), i2 || (i2 = []); ++a3 < u2; ) {
    var c2 = n2[a3];
    t4 > 0 && r2(c2) ? t4 > 1 ? e5(c2, t4 - 1, r2, o2, i2) : ln(i2, c2) : o2 || (i2[i2.length] = c2);
  }
  return i2;
};
var Tr = function(e8, n2, t4) {
  switch (t4.length) {
    case 0:
      return e8.call(n2);
    case 1:
      return e8.call(n2, t4[0]);
    case 2:
      return e8.call(n2, t4[0], t4[1]);
    case 3:
      return e8.call(n2, t4[0], t4[1], t4[2]);
  }
  return e8.apply(n2, t4);
};
var Dr = Math.max;
var Pr = function(e8, n2, t4) {
  return n2 = Dr(void 0 === n2 ? e8.length - 1 : n2, 0), function() {
    for (var r2 = arguments, o2 = -1, i2 = Dr(r2.length - n2, 0), a3 = Array(i2); ++o2 < i2; )
      a3[o2] = r2[n2 + o2];
    o2 = -1;
    for (var u2 = Array(n2 + 1); ++o2 < n2; )
      u2[o2] = r2[o2];
    return u2[n2] = t4(a3), Tr(e8, this, u2);
  };
};
var zr = be ? function(e8, n2) {
  return be(e8, "toString", { configurable: true, enumerable: false, value: nt(n2), writable: true });
} : it;
var Fr = Date.now;
var Ur = /* @__PURE__ */ function(e8) {
  var n2 = 0, t4 = 0;
  return function() {
    var r2 = Fr(), o2 = 16 - (r2 - t4);
    if (t4 = r2, o2 > 0) {
      if (++n2 >= 800)
        return arguments[0];
    } else
      n2 = 0;
    return e8.apply(void 0, arguments);
  };
}(zr);
var Vr = function(e8, n2) {
  return Ur(Pr(e8, n2, it), e8 + "");
};
var $r = function(e8, n2, t4, r2) {
  for (var o2 = e8.length, i2 = t4 + (r2 ? 1 : -1); r2 ? i2-- : ++i2 < o2; )
    if (n2(e8[i2], i2, e8))
      return i2;
  return -1;
};
var Hr = function(e8) {
  return e8 != e8;
};
var Wr = function(e8, n2, t4) {
  for (var r2 = t4 - 1, o2 = e8.length; ++r2 < o2; )
    if (e8[r2] === n2)
      return r2;
  return -1;
};
var qr = function(e8, n2, t4) {
  return n2 == n2 ? Wr(e8, n2, t4) : $r(e8, Hr, t4);
};
var Yr = function(e8, n2) {
  return !!(null == e8 ? 0 : e8.length) && qr(e8, n2, 0) > -1;
};
var Jr = function(e8, n2, t4) {
  for (var r2 = -1, o2 = null == e8 ? 0 : e8.length; ++r2 < o2; )
    if (t4(n2, e8[r2]))
      return true;
  return false;
};
var Xr = function() {
};
var Kr = _n && 1 / bt(new _n([, -0]))[1] == 1 / 0 ? function(e8) {
  return new _n(e8);
} : Xr;
var Qr = Kr;
var Zr = function(e8, n2, t4) {
  var r2 = -1, o2 = Yr, i2 = e8.length, a3 = true, u2 = [], c2 = u2;
  if (t4)
    a3 = false, o2 = Jr;
  else if (i2 >= 200) {
    var s3 = n2 ? null : Qr(e8);
    if (s3)
      return bt(s3);
    a3 = false, o2 = pt, c2 = new lt();
  } else
    c2 = n2 ? [] : u2;
  e:
    for (; ++r2 < i2; ) {
      var d2 = e8[r2], f2 = n2 ? n2(d2) : d2;
      if (d2 = t4 || 0 !== d2 ? d2 : 0, a3 && f2 == f2) {
        for (var h2 = c2.length; h2--; )
          if (c2[h2] === f2)
            continue e;
        n2 && c2.push(f2), u2.push(d2);
      } else
        o2(c2, f2, t4) || (c2 !== u2 && c2.push(f2), u2.push(d2));
    }
  return u2;
};
var eo = function(e8) {
  return xe(e8) && Xe(e8);
};
var no = Vr(function(e8) {
  return Zr(Rr(e8, 1, eo, true));
});
var to = function(e8, n2) {
  return Ft(n2, function(n3) {
    return e8[n3];
  });
};
var ro;
var oo = function(e8) {
  return null == e8 ? [] : to(e8, Ke(e8));
};
try {
  ro = { clone: et, constant: nt, each: ct, filter: or, has: ur, isArray: Me, isEmpty: sr, isFunction: A2, isUndefined: dr, keys: Ke, map: hr, reduce: pr, size: Gr, transform: Ar, union: no, values: oo };
} catch (e8) {
}
ro || (ro = window._);
var io = ro;
var ao = uo;
function uo(e8) {
  this._isDirected = !io.has(e8, "directed") || e8.directed, this._isMultigraph = !!io.has(e8, "multigraph") && e8.multigraph, this._isCompound = !!io.has(e8, "compound") && e8.compound, this._label = void 0, this._defaultNodeLabelFn = io.constant(void 0), this._defaultEdgeLabelFn = io.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
}
function co(e8, n2) {
  e8[n2] ? e8[n2]++ : e8[n2] = 1;
}
function so(e8, n2) {
  --e8[n2] || delete e8[n2];
}
function fo(e8, n2, t4, r2) {
  var o2 = "" + n2, i2 = "" + t4;
  if (!e8 && o2 > i2) {
    var a3 = o2;
    o2 = i2, i2 = a3;
  }
  return o2 + "" + i2 + "" + (io.isUndefined(r2) ? "\0" : r2);
}
function ho(e8, n2, t4, r2) {
  var o2 = "" + n2, i2 = "" + t4;
  if (!e8 && o2 > i2) {
    var a3 = o2;
    o2 = i2, i2 = a3;
  }
  var u2 = { v: o2, w: i2 };
  return r2 && (u2.name = r2), u2;
}
function lo(e8, n2) {
  return fo(e8, n2.v, n2.w, n2.name);
}
uo.prototype._nodeCount = 0, uo.prototype._edgeCount = 0, uo.prototype.isDirected = function() {
  return this._isDirected;
}, uo.prototype.isMultigraph = function() {
  return this._isMultigraph;
}, uo.prototype.isCompound = function() {
  return this._isCompound;
}, uo.prototype.setGraph = function(e8) {
  return this._label = e8, this;
}, uo.prototype.graph = function() {
  return this._label;
}, uo.prototype.setDefaultNodeLabel = function(e8) {
  return io.isFunction(e8) || (e8 = io.constant(e8)), this._defaultNodeLabelFn = e8, this;
}, uo.prototype.nodeCount = function() {
  return this._nodeCount;
}, uo.prototype.nodes = function() {
  return io.keys(this._nodes);
}, uo.prototype.sources = function() {
  var e8 = this;
  return io.filter(this.nodes(), function(n2) {
    return io.isEmpty(e8._in[n2]);
  });
}, uo.prototype.sinks = function() {
  var e8 = this;
  return io.filter(this.nodes(), function(n2) {
    return io.isEmpty(e8._out[n2]);
  });
}, uo.prototype.setNodes = function(e8, n2) {
  var t4 = arguments, r2 = this;
  return io.each(e8, function(e9) {
    t4.length > 1 ? r2.setNode(e9, n2) : r2.setNode(e9);
  }), this;
}, uo.prototype.setNode = function(e8, n2) {
  return io.has(this._nodes, e8) ? (arguments.length > 1 && (this._nodes[e8] = n2), this) : (this._nodes[e8] = arguments.length > 1 ? n2 : this._defaultNodeLabelFn(e8), this._isCompound && (this._parent[e8] = "\0", this._children[e8] = {}, this._children["\0"][e8] = true), this._in[e8] = {}, this._preds[e8] = {}, this._out[e8] = {}, this._sucs[e8] = {}, ++this._nodeCount, this);
}, uo.prototype.node = function(e8) {
  return this._nodes[e8];
}, uo.prototype.hasNode = function(e8) {
  return io.has(this._nodes, e8);
}, uo.prototype.removeNode = function(e8) {
  var n2 = this;
  if (io.has(this._nodes, e8)) {
    var t4 = function(e9) {
      n2.removeEdge(n2._edgeObjs[e9]);
    };
    delete this._nodes[e8], this._isCompound && (this._removeFromParentsChildList(e8), delete this._parent[e8], io.each(this.children(e8), function(e9) {
      n2.setParent(e9);
    }), delete this._children[e8]), io.each(io.keys(this._in[e8]), t4), delete this._in[e8], delete this._preds[e8], io.each(io.keys(this._out[e8]), t4), delete this._out[e8], delete this._sucs[e8], --this._nodeCount;
  }
  return this;
}, uo.prototype.setParent = function(e8, n2) {
  if (!this._isCompound)
    throw new Error("Cannot set parent in a non-compound graph");
  if (io.isUndefined(n2))
    n2 = "\0";
  else {
    for (var t4 = n2 += ""; !io.isUndefined(t4); t4 = this.parent(t4))
      if (t4 === e8)
        throw new Error("Setting " + n2 + " as parent of " + e8 + " would create a cycle");
    this.setNode(n2);
  }
  return this.setNode(e8), this._removeFromParentsChildList(e8), this._parent[e8] = n2, this._children[n2][e8] = true, this;
}, uo.prototype._removeFromParentsChildList = function(e8) {
  delete this._children[this._parent[e8]][e8];
}, uo.prototype.parent = function(e8) {
  if (this._isCompound) {
    var n2 = this._parent[e8];
    if ("\0" !== n2)
      return n2;
  }
}, uo.prototype.children = function(e8) {
  if (io.isUndefined(e8) && (e8 = "\0"), this._isCompound) {
    var n2 = this._children[e8];
    if (n2)
      return io.keys(n2);
  } else {
    if ("\0" === e8)
      return this.nodes();
    if (this.hasNode(e8))
      return [];
  }
}, uo.prototype.predecessors = function(e8) {
  var n2 = this._preds[e8];
  if (n2)
    return io.keys(n2);
}, uo.prototype.successors = function(e8) {
  var n2 = this._sucs[e8];
  if (n2)
    return io.keys(n2);
}, uo.prototype.neighbors = function(e8) {
  var n2 = this.predecessors(e8);
  if (n2)
    return io.union(n2, this.successors(e8));
}, uo.prototype.isLeaf = function(e8) {
  return 0 === (this.isDirected() ? this.successors(e8) : this.neighbors(e8)).length;
}, uo.prototype.filterNodes = function(e8) {
  var n2 = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
  n2.setGraph(this.graph());
  var t4 = this;
  io.each(this._nodes, function(t5, r3) {
    e8(r3) && n2.setNode(r3, t5);
  }), io.each(this._edgeObjs, function(e9) {
    n2.hasNode(e9.v) && n2.hasNode(e9.w) && n2.setEdge(e9, t4.edge(e9));
  });
  var r2 = {};
  function o2(e9) {
    var i2 = t4.parent(e9);
    return void 0 === i2 || n2.hasNode(i2) ? (r2[e9] = i2, i2) : i2 in r2 ? r2[i2] : o2(i2);
  }
  return this._isCompound && io.each(n2.nodes(), function(e9) {
    n2.setParent(e9, o2(e9));
  }), n2;
}, uo.prototype.setDefaultEdgeLabel = function(e8) {
  return io.isFunction(e8) || (e8 = io.constant(e8)), this._defaultEdgeLabelFn = e8, this;
}, uo.prototype.edgeCount = function() {
  return this._edgeCount;
}, uo.prototype.edges = function() {
  return io.values(this._edgeObjs);
}, uo.prototype.setPath = function(e8, n2) {
  var t4 = this, r2 = arguments;
  return io.reduce(e8, function(e9, o2) {
    return r2.length > 1 ? t4.setEdge(e9, o2, n2) : t4.setEdge(e9, o2), o2;
  }), this;
}, uo.prototype.setEdge = function() {
  var e8, n2, t4, r2, o2 = false, i2 = arguments[0];
  "object" == typeof i2 && null !== i2 && "v" in i2 ? (e8 = i2.v, n2 = i2.w, t4 = i2.name, 2 === arguments.length && (r2 = arguments[1], o2 = true)) : (e8 = i2, n2 = arguments[1], t4 = arguments[3], arguments.length > 2 && (r2 = arguments[2], o2 = true)), e8 = "" + e8, n2 = "" + n2, io.isUndefined(t4) || (t4 = "" + t4);
  var a3 = fo(this._isDirected, e8, n2, t4);
  if (io.has(this._edgeLabels, a3))
    return o2 && (this._edgeLabels[a3] = r2), this;
  if (!io.isUndefined(t4) && !this._isMultigraph)
    throw new Error("Cannot set a named edge when isMultigraph = false");
  this.setNode(e8), this.setNode(n2), this._edgeLabels[a3] = o2 ? r2 : this._defaultEdgeLabelFn(e8, n2, t4);
  var u2 = ho(this._isDirected, e8, n2, t4);
  return e8 = u2.v, n2 = u2.w, Object.freeze(u2), this._edgeObjs[a3] = u2, co(this._preds[n2], e8), co(this._sucs[e8], n2), this._in[n2][a3] = u2, this._out[e8][a3] = u2, this._edgeCount++, this;
}, uo.prototype.edge = function(e8, n2, t4) {
  var r2 = 1 === arguments.length ? lo(this._isDirected, arguments[0]) : fo(this._isDirected, e8, n2, t4);
  return this._edgeLabels[r2];
}, uo.prototype.hasEdge = function(e8, n2, t4) {
  var r2 = 1 === arguments.length ? lo(this._isDirected, arguments[0]) : fo(this._isDirected, e8, n2, t4);
  return io.has(this._edgeLabels, r2);
}, uo.prototype.removeEdge = function(e8, n2, t4) {
  var r2 = 1 === arguments.length ? lo(this._isDirected, arguments[0]) : fo(this._isDirected, e8, n2, t4), o2 = this._edgeObjs[r2];
  return o2 && (e8 = o2.v, n2 = o2.w, delete this._edgeLabels[r2], delete this._edgeObjs[r2], so(this._preds[n2], e8), so(this._sucs[e8], n2), delete this._in[n2][r2], delete this._out[e8][r2], this._edgeCount--), this;
}, uo.prototype.inEdges = function(e8, n2) {
  var t4 = this._in[e8];
  if (t4) {
    var r2 = io.values(t4);
    return n2 ? io.filter(r2, function(e9) {
      return e9.v === n2;
    }) : r2;
  }
}, uo.prototype.outEdges = function(e8, n2) {
  var t4 = this._out[e8];
  if (t4) {
    var r2 = io.values(t4);
    return n2 ? io.filter(r2, function(e9) {
      return e9.w === n2;
    }) : r2;
  }
}, uo.prototype.nodeEdges = function(e8, n2) {
  var t4 = this.inEdges(e8, n2);
  if (t4)
    return t4.concat(this.outEdges(e8, n2));
};
var vo = { Graph: ao, version: "2.1.8" };
var po = { write: function(e8) {
  var n2 = { options: { directed: e8.isDirected(), multigraph: e8.isMultigraph(), compound: e8.isCompound() }, nodes: go(e8), edges: yo(e8) };
  io.isUndefined(e8.graph()) || (n2.value = io.clone(e8.graph()));
  return n2;
}, read: function(e8) {
  var n2 = new ao(e8.options).setGraph(e8.value);
  return io.each(e8.nodes, function(e9) {
    n2.setNode(e9.v, e9.value), e9.parent && n2.setParent(e9.v, e9.parent);
  }), io.each(e8.edges, function(e9) {
    n2.setEdge({ v: e9.v, w: e9.w, name: e9.name }, e9.value);
  }), n2;
} };
function go(e8) {
  return io.map(e8.nodes(), function(n2) {
    var t4 = e8.node(n2), r2 = e8.parent(n2), o2 = { v: n2 };
    return io.isUndefined(t4) || (o2.value = t4), io.isUndefined(r2) || (o2.parent = r2), o2;
  });
}
function yo(e8) {
  return io.map(e8.edges(), function(n2) {
    var t4 = e8.edge(n2), r2 = { v: n2.v, w: n2.w };
    return io.isUndefined(n2.name) || (r2.name = n2.name), io.isUndefined(t4) || (r2.value = t4), r2;
  });
}
var bo = function(e8) {
  var n2, t4 = {}, r2 = [];
  function o2(r3) {
    io.has(t4, r3) || (t4[r3] = true, n2.push(r3), io.each(e8.successors(r3), o2), io.each(e8.predecessors(r3), o2));
  }
  return io.each(e8.nodes(), function(e9) {
    n2 = [], o2(e9), n2.length && r2.push(n2);
  }), r2;
};
var mo = wo;
function wo() {
  this._arr = [], this._keyIndices = {};
}
wo.prototype.size = function() {
  return this._arr.length;
}, wo.prototype.keys = function() {
  return this._arr.map(function(e8) {
    return e8.key;
  });
}, wo.prototype.has = function(e8) {
  return io.has(this._keyIndices, e8);
}, wo.prototype.priority = function(e8) {
  var n2 = this._keyIndices[e8];
  if (void 0 !== n2)
    return this._arr[n2].priority;
}, wo.prototype.min = function() {
  if (0 === this.size())
    throw new Error("Queue underflow");
  return this._arr[0].key;
}, wo.prototype.add = function(e8, n2) {
  var t4 = this._keyIndices;
  if (e8 = String(e8), !io.has(t4, e8)) {
    var r2 = this._arr, o2 = r2.length;
    return t4[e8] = o2, r2.push({ key: e8, priority: n2 }), this._decrease(o2), true;
  }
  return false;
}, wo.prototype.removeMin = function() {
  this._swap(0, this._arr.length - 1);
  var e8 = this._arr.pop();
  return delete this._keyIndices[e8.key], this._heapify(0), e8.key;
}, wo.prototype.decrease = function(e8, n2) {
  var t4 = this._keyIndices[e8];
  if (n2 > this._arr[t4].priority)
    throw new Error("New priority is greater than current priority. Key: " + e8 + " Old: " + this._arr[t4].priority + " New: " + n2);
  this._arr[t4].priority = n2, this._decrease(t4);
}, wo.prototype._heapify = function(e8) {
  var n2 = this._arr, t4 = 2 * e8, r2 = t4 + 1, o2 = e8;
  t4 < n2.length && (o2 = n2[t4].priority < n2[o2].priority ? t4 : o2, r2 < n2.length && (o2 = n2[r2].priority < n2[o2].priority ? r2 : o2), o2 !== e8 && (this._swap(e8, o2), this._heapify(o2)));
}, wo.prototype._decrease = function(e8) {
  for (var n2, t4 = this._arr, r2 = t4[e8].priority; 0 !== e8 && !(t4[n2 = e8 >> 1].priority < r2); )
    this._swap(e8, n2), e8 = n2;
}, wo.prototype._swap = function(e8, n2) {
  var t4 = this._arr, r2 = this._keyIndices, o2 = t4[e8], i2 = t4[n2];
  t4[e8] = i2, t4[n2] = o2, r2[i2.key] = e8, r2[o2.key] = n2;
};
var Eo = function(e8, n2, t4, r2) {
  return function(e9, n3, t5, r3) {
    var o2, i2, a3 = {}, u2 = new mo(), c2 = function(e10) {
      var n4 = e10.v !== o2 ? e10.v : e10.w, r4 = a3[n4], c3 = t5(e10), s3 = i2.distance + c3;
      if (c3 < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + e10 + " Weight: " + c3);
      s3 < r4.distance && (r4.distance = s3, r4.predecessor = o2, u2.decrease(n4, s3));
    };
    e9.nodes().forEach(function(e10) {
      var t6 = e10 === n3 ? 0 : Number.POSITIVE_INFINITY;
      a3[e10] = { distance: t6 }, u2.add(e10, t6);
    });
    for (; u2.size() > 0 && (o2 = u2.removeMin(), (i2 = a3[o2]).distance !== Number.POSITIVE_INFINITY); )
      r3(o2).forEach(c2);
    return a3;
  }(e8, String(n2), t4 || _o, r2 || function(n3) {
    return e8.outEdges(n3);
  });
};
var _o = io.constant(1);
var jo = function(e8, n2, t4) {
  return io.transform(e8.nodes(), function(r2, o2) {
    r2[o2] = Eo(e8, o2, n2, t4);
  }, {});
};
var xo = function(e8) {
  var n2 = 0, t4 = [], r2 = {}, o2 = [];
  function i2(a3) {
    var u2 = r2[a3] = { onStack: true, lowlink: n2, index: n2++ };
    if (t4.push(a3), e8.successors(a3).forEach(function(e9) {
      io.has(r2, e9) ? r2[e9].onStack && (u2.lowlink = Math.min(u2.lowlink, r2[e9].index)) : (i2(e9), u2.lowlink = Math.min(u2.lowlink, r2[e9].lowlink));
    }), u2.lowlink === u2.index) {
      var c2, s3 = [];
      do {
        c2 = t4.pop(), r2[c2].onStack = false, s3.push(c2);
      } while (a3 !== c2);
      o2.push(s3);
    }
  }
  return e8.nodes().forEach(function(e9) {
    io.has(r2, e9) || i2(e9);
  }), o2;
};
var No = function(e8) {
  return io.filter(xo(e8), function(n2) {
    return n2.length > 1 || 1 === n2.length && e8.hasEdge(n2[0], n2[0]);
  });
};
var Oo = function(e8, n2, t4) {
  return function(e9, n3, t5) {
    var r2 = {}, o2 = e9.nodes();
    return o2.forEach(function(e10) {
      r2[e10] = {}, r2[e10][e10] = { distance: 0 }, o2.forEach(function(n4) {
        e10 !== n4 && (r2[e10][n4] = { distance: Number.POSITIVE_INFINITY });
      }), t5(e10).forEach(function(t6) {
        var o3 = t6.v === e10 ? t6.w : t6.v, i2 = n3(t6);
        r2[e10][o3] = { distance: i2, predecessor: e10 };
      });
    }), o2.forEach(function(e10) {
      var n4 = r2[e10];
      o2.forEach(function(t6) {
        var i2 = r2[t6];
        o2.forEach(function(t7) {
          var r3 = i2[e10], o3 = n4[t7], a3 = i2[t7], u2 = r3.distance + o3.distance;
          u2 < a3.distance && (a3.distance = u2, a3.predecessor = o3.predecessor);
        });
      });
    }), r2;
  }(e8, n2 || ko, t4 || function(n3) {
    return e8.outEdges(n3);
  });
};
var ko = io.constant(1);
var Io = So;
function So(e8) {
  var n2 = {}, t4 = {}, r2 = [];
  if (io.each(e8.sinks(), function o2(i2) {
    if (io.has(t4, i2))
      throw new Mo();
    io.has(n2, i2) || (t4[i2] = true, n2[i2] = true, io.each(e8.predecessors(i2), o2), delete t4[i2], r2.push(i2));
  }), io.size(n2) !== e8.nodeCount())
    throw new Mo();
  return r2;
}
function Mo() {
}
So.CycleException = Mo, Mo.prototype = new Error();
var Co = function(e8, n2, t4) {
  io.isArray(n2) || (n2 = [n2]);
  var r2 = (e8.isDirected() ? e8.successors : e8.neighbors).bind(e8), o2 = [], i2 = {};
  return io.each(n2, function(n3) {
    if (!e8.hasNode(n3))
      throw new Error("Graph does not have node: " + n3);
    Go(e8, n3, "post" === t4, i2, r2, o2);
  }), o2;
};
function Go(e8, n2, t4, r2, o2, i2) {
  io.has(r2, n2) || (r2[n2] = true, t4 || i2.push(n2), io.each(o2(n2), function(n3) {
    Go(e8, n3, t4, r2, o2, i2);
  }), t4 && i2.push(n2));
}
var Ao;
var Bo = { components: bo, dijkstra: Eo, dijkstraAll: jo, findCycles: No, floydWarshall: Oo, isAcyclic: function(e8) {
  try {
    Io(e8);
  } catch (e9) {
    if (e9 instanceof Io.CycleException)
      return false;
    throw e9;
  }
  return true;
}, postorder: function(e8, n2) {
  return Co(e8, n2, "post");
}, preorder: function(e8, n2) {
  return Co(e8, n2, "pre");
}, prim: function(e8, n2) {
  var t4, r2 = new ao(), o2 = {}, i2 = new mo();
  function a3(e9) {
    var r3 = e9.v === t4 ? e9.w : e9.v, a4 = i2.priority(r3);
    if (void 0 !== a4) {
      var u3 = n2(e9);
      u3 < a4 && (o2[r3] = t4, i2.decrease(r3, u3));
    }
  }
  if (0 === e8.nodeCount())
    return r2;
  io.each(e8.nodes(), function(e9) {
    i2.add(e9, Number.POSITIVE_INFINITY), r2.setNode(e9);
  }), i2.decrease(e8.nodes()[0], 0);
  var u2 = false;
  for (; i2.size() > 0; ) {
    if (t4 = i2.removeMin(), io.has(o2, t4))
      r2.setEdge(t4, o2[t4]);
    else {
      if (u2)
        throw new Error("Input graph is not connected: " + e8);
      u2 = true;
    }
    e8.nodeEdges(t4).forEach(a3);
  }
  return r2;
}, tarjan: xo, topsort: Io };
var Lo = { Graph: vo.Graph, json: po, alg: Bo, version: vo.version };
try {
  Ao = Lo;
} catch (e8) {
}
Ao || (Ao = window.graphlib);
var Ro = Ao;
var To = function(e8) {
  return Zn2(e8, 5);
};
var Do = function(e8, n2, t4) {
  if (!C2(t4))
    return false;
  var r2 = typeof n2;
  return !!("number" == r2 ? Xe(t4) && Be(n2, t4.length) : "string" == r2 && n2 in t4) && i(t4[n2], e8);
};
var Po = Object.prototype;
var zo = Po.hasOwnProperty;
var Fo = Vr(function(e8, n2) {
  e8 = Object(e8);
  var t4 = -1, r2 = n2.length, o2 = r2 > 2 ? n2[2] : void 0;
  for (o2 && Do(n2[0], n2[1], o2) && (r2 = 1); ++t4 < r2; )
    for (var a3 = n2[t4], u2 = tn(a3), c2 = -1, s3 = u2.length; ++c2 < s3; ) {
      var d2 = u2[c2], f2 = e8[d2];
      (void 0 === f2 || i(f2, Po[d2]) && !zo.call(e8, d2)) && (e8[d2] = a3[d2]);
    }
  return e8;
});
var Uo = function(e8) {
  return function(n2, t4, r2) {
    var o2 = Object(n2);
    if (!Xe(n2)) {
      var i2 = rr(t4);
      n2 = Ke(n2), t4 = function(e9) {
        return i2(o2[e9], e9, o2);
      };
    }
    var a3 = e8(n2, t4, r2);
    return a3 > -1 ? o2[i2 ? n2[a3] : a3] : void 0;
  };
};
var Vo = /\s/;
var $o = function(e8) {
  for (var n2 = e8.length; n2-- && Vo.test(e8.charAt(n2)); )
    ;
  return n2;
};
var Ho = /^\s+/;
var Wo = function(e8) {
  return e8 ? e8.slice(0, $o(e8) + 1).replace(Ho, "") : e8;
};
var qo = /^[-+]0x[0-9a-f]+$/i;
var Yo = /^0b[01]+$/i;
var Jo = /^0o[0-7]+$/i;
var Xo = parseInt;
var Ko = function(e8) {
  if ("number" == typeof e8)
    return e8;
  if (Gt(e8))
    return NaN;
  if (C2(e8)) {
    var n2 = "function" == typeof e8.valueOf ? e8.valueOf() : e8;
    e8 = C2(n2) ? n2 + "" : n2;
  }
  if ("string" != typeof e8)
    return 0 === e8 ? e8 : +e8;
  e8 = Wo(e8);
  var t4 = Yo.test(e8);
  return t4 || Jo.test(e8) ? Xo(e8.slice(2), t4 ? 2 : 8) : qo.test(e8) ? NaN : +e8;
};
var Qo = function(e8) {
  return e8 ? Infinity === (e8 = Ko(e8)) || -Infinity === e8 ? 17976931348623157e292 * (e8 < 0 ? -1 : 1) : e8 == e8 ? e8 : 0 : 0 === e8 ? e8 : 0;
};
var Zo = function(e8) {
  var n2 = Qo(e8), t4 = n2 % 1;
  return n2 == n2 ? t4 ? n2 - t4 : n2 : 0;
};
var ei = Math.max;
var ni = Uo(function(e8, n2, t4) {
  var r2 = null == e8 ? 0 : e8.length;
  if (!r2)
    return -1;
  var o2 = null == t4 ? 0 : Zo(t4);
  return o2 < 0 && (o2 = ei(r2 + o2, 0)), $r(e8, rr(n2), o2);
});
var ti = function(e8) {
  return (null == e8 ? 0 : e8.length) ? Rr(e8, 1) : [];
};
var ri = function(e8, n2) {
  return null == e8 ? e8 : tt(e8, at(n2), tn);
};
var oi = function(e8) {
  var n2 = null == e8 ? 0 : e8.length;
  return n2 ? e8[n2 - 1] : void 0;
};
var ii = function(e8, n2) {
  var t4 = {};
  return n2 = rr(n2), rt(e8, function(e9, r2, o2) {
    me(t4, r2, n2(e9, r2, o2));
  }), t4;
};
var ai = function(e8, n2, t4) {
  for (var r2 = -1, o2 = e8.length; ++r2 < o2; ) {
    var i2 = e8[r2], a3 = n2(i2);
    if (null != a3 && (void 0 === u2 ? a3 == a3 && !Gt(a3) : t4(a3, u2)))
      var u2 = a3, c2 = i2;
  }
  return c2;
};
var ui = function(e8, n2) {
  return e8 > n2;
};
var ci = function(e8) {
  return e8 && e8.length ? ai(e8, it, ui) : void 0;
};
var si = function(e8, n2, t4) {
  (void 0 !== t4 && !i(e8[n2], t4) || void 0 === t4 && !(n2 in e8)) && me(e8, n2, t4);
};
var di = Function.prototype;
var fi = Object.prototype;
var hi = di.toString;
var li = fi.hasOwnProperty;
var vi = hi.call(Object);
var pi4 = function(e8) {
  if (!xe(e8) || "[object Object]" != M(e8))
    return false;
  var n2 = vn(e8);
  if (null === n2)
    return true;
  var t4 = li.call(n2, "constructor") && n2.constructor;
  return "function" == typeof t4 && t4 instanceof t4 && hi.call(t4) == vi;
};
var gi = function(e8, n2) {
  if (("constructor" !== n2 || "function" != typeof e8[n2]) && "__proto__" != n2)
    return e8[n2];
};
var yi = function(e8) {
  return _e(e8, tn(e8));
};
var bi = function(e8, n2, t4, r2, o2, i2, a3) {
  var u2 = gi(e8, t4), c2 = gi(n2, t4), s3 = a3.get(c2);
  if (s3)
    si(e8, t4, s3);
  else {
    var d2 = i2 ? i2(u2, c2, t4 + "", e8, n2, a3) : void 0, f2 = void 0 === d2;
    if (f2) {
      var h2 = Me(c2), l2 = !h2 && Ge(c2), v2 = !h2 && !l2 && Fe(c2);
      d2 = c2, h2 || l2 || v2 ? Me(u2) ? d2 = u2 : eo(u2) ? d2 = an(u2) : l2 ? (f2 = false, d2 = on(c2, true)) : v2 ? (f2 = false, d2 = Fn(c2, true)) : d2 = [] : pi4(c2) || Se(c2) ? (d2 = u2, Se(u2) ? d2 = yi(u2) : C2(u2) && !A2(u2) || (d2 = Hn(c2))) : f2 = false;
    }
    f2 && (a3.set(c2, d2), o2(d2, c2, r2, i2, a3), a3.delete(c2)), si(e8, t4, d2);
  }
};
var mi = function e6(n2, t4, r2, o2, i2) {
  n2 !== t4 && tt(t4, function(a3, u2) {
    if (i2 || (i2 = new ge()), C2(a3))
      bi(n2, t4, u2, r2, e6, o2, i2);
    else {
      var c2 = o2 ? o2(gi(n2, u2), a3, u2 + "", n2, t4, i2) : void 0;
      void 0 === c2 && (c2 = a3), si(n2, u2, c2);
    }
  }, tn);
};
var wi = function(e8) {
  return Vr(function(n2, t4) {
    var r2 = -1, o2 = t4.length, i2 = o2 > 1 ? t4[o2 - 1] : void 0, a3 = o2 > 2 ? t4[2] : void 0;
    for (i2 = e8.length > 3 && "function" == typeof i2 ? (o2--, i2) : void 0, a3 && Do(t4[0], t4[1], a3) && (i2 = o2 < 3 ? void 0 : i2, o2 = 1), n2 = Object(n2); ++r2 < o2; ) {
      var u2 = t4[r2];
      u2 && e8(n2, u2, r2, i2);
    }
    return n2;
  });
}(function(e8, n2, t4) {
  mi(e8, n2, t4);
});
var Ei = function(e8, n2) {
  return e8 < n2;
};
var _i = function(e8) {
  return e8 && e8.length ? ai(e8, it, Ei) : void 0;
};
var ji = function(e8, n2) {
  return e8 && e8.length ? ai(e8, rr(n2), Ei) : void 0;
};
var xi = function() {
  return w.Date.now();
};
var Ni = function(e8, n2, t4, r2) {
  if (!C2(e8))
    return e8;
  for (var o2 = -1, i2 = (n2 = Wt(n2, e8)).length, a3 = i2 - 1, u2 = e8; null != u2 && ++o2 < i2; ) {
    var c2 = qt(n2[o2]), s3 = t4;
    if ("__proto__" === c2 || "constructor" === c2 || "prototype" === c2)
      return e8;
    if (o2 != a3) {
      var d2 = u2[c2];
      void 0 === (s3 = r2 ? r2(d2, c2, u2) : void 0) && (s3 = C2(d2) ? d2 : Be(n2[o2 + 1]) ? [] : {});
    }
    Ee(u2, c2, s3), u2 = u2[c2];
  }
  return e8;
};
var Oi = function(e8, n2, t4) {
  for (var r2 = -1, o2 = n2.length, i2 = {}; ++r2 < o2; ) {
    var a3 = n2[r2], u2 = Yt(e8, a3);
    t4(u2, a3) && Ni(i2, Wt(a3, e8), u2);
  }
  return i2;
};
var ki = function(e8, n2) {
  return Oi(e8, n2, function(n3, t4) {
    return Qt(e8, t4);
  });
};
var Ii = function(e8) {
  return Ur(Pr(e8, void 0, ti), e8 + "");
}(function(e8, n2) {
  return null == e8 ? {} : ki(e8, n2);
});
var Si = Math.ceil;
var Mi = Math.max;
var Ci = function(e8, n2, t4, r2) {
  for (var o2 = -1, i2 = Mi(Si((n2 - e8) / (t4 || 1)), 0), a3 = Array(i2); i2--; )
    a3[r2 ? i2 : ++o2] = e8, e8 += t4;
  return a3;
};
var Gi = /* @__PURE__ */ function(e8) {
  return function(n2, t4, r2) {
    return r2 && "number" != typeof r2 && Do(n2, t4, r2) && (t4 = r2 = void 0), n2 = Qo(n2), void 0 === t4 ? (t4 = n2, n2 = 0) : t4 = Qo(t4), r2 = void 0 === r2 ? n2 < t4 ? 1 : -1 : Qo(r2), Ci(n2, t4, r2, e8);
  };
}();
var Ai = function(e8, n2) {
  var t4 = e8.length;
  for (e8.sort(n2); t4--; )
    e8[t4] = e8[t4].value;
  return e8;
};
var Bi = function(e8, n2) {
  if (e8 !== n2) {
    var t4 = void 0 !== e8, r2 = null === e8, o2 = e8 == e8, i2 = Gt(e8), a3 = void 0 !== n2, u2 = null === n2, c2 = n2 == n2, s3 = Gt(n2);
    if (!u2 && !s3 && !i2 && e8 > n2 || i2 && a3 && c2 && !u2 && !s3 || r2 && a3 && c2 || !t4 && c2 || !o2)
      return 1;
    if (!r2 && !i2 && !s3 && e8 < n2 || s3 && t4 && o2 && !r2 && !i2 || u2 && t4 && o2 || !a3 && o2 || !c2)
      return -1;
  }
  return 0;
};
var Li = function(e8, n2, t4) {
  for (var r2 = -1, o2 = e8.criteria, i2 = n2.criteria, a3 = o2.length, u2 = t4.length; ++r2 < a3; ) {
    var c2 = Bi(o2[r2], i2[r2]);
    if (c2)
      return r2 >= u2 ? c2 : c2 * ("desc" == t4[r2] ? -1 : 1);
  }
  return e8.index - n2.index;
};
var Ri = function(e8, n2, t4) {
  n2 = n2.length ? Ft(n2, function(e9) {
    return Me(e9) ? function(n3) {
      return Yt(n3, 1 === e9.length ? e9[0] : e9);
    } : e9;
  }) : [it];
  var r2 = -1;
  n2 = Ft(n2, De(rr));
  var o2 = fr(e8, function(e9, t5, o3) {
    return { criteria: Ft(n2, function(n3) {
      return n3(e9);
    }), index: ++r2, value: e9 };
  });
  return Ai(o2, function(e9, n3) {
    return Li(e9, n3, t4);
  });
};
var Ti = Vr(function(e8, n2) {
  if (null == e8)
    return [];
  var t4 = n2.length;
  return t4 > 1 && Do(e8, n2[0], n2[1]) ? n2 = [] : t4 > 2 && Do(n2[0], n2[1], n2[2]) && (n2 = [n2[0]]), Ri(e8, Rr(n2, 1), []);
});
var Di = 0;
var Pi = function(e8) {
  var n2 = ++Di;
  return Ht(e8) + n2;
};
var zi = function(e8, n2, t4) {
  for (var r2 = -1, o2 = e8.length, i2 = n2.length, a3 = {}; ++r2 < o2; ) {
    var u2 = r2 < i2 ? n2[r2] : void 0;
    t4(a3, e8[r2], u2);
  }
  return a3;
};
var Fi;
var Ui = function(e8, n2) {
  return zi(e8 || [], n2 || [], Ee);
};
try {
  Fi = { cloneDeep: To, constant: nt, defaults: Fo, each: ct, filter: or, find: ni, flatten: ti, forEach: ut, forIn: ri, has: ur, isUndefined: dr, last: oi, map: hr, mapValues: ii, max: ci, merge: wi, min: _i, minBy: ji, now: xi, pick: Ii, range: Gi, reduce: pr, sortBy: Ti, uniqueId: Pi, values: oo, zipObject: Ui };
} catch (e8) {
}
Fi || (Fi = window._);
var Vi = Fi;
var $i = Hi;
function Hi() {
  var e8 = {};
  e8._next = e8._prev = e8, this._sentinel = e8;
}
function Wi(e8) {
  e8._prev._next = e8._next, e8._next._prev = e8._prev, delete e8._next, delete e8._prev;
}
function qi(e8, n2) {
  if ("_next" !== e8 && "_prev" !== e8)
    return n2;
}
Hi.prototype.dequeue = function() {
  var e8 = this._sentinel, n2 = e8._prev;
  if (n2 !== e8)
    return Wi(n2), n2;
}, Hi.prototype.enqueue = function(e8) {
  var n2 = this._sentinel;
  e8._prev && e8._next && Wi(e8), e8._next = n2._next, n2._next._prev = e8, n2._next = e8, e8._prev = n2;
}, Hi.prototype.toString = function() {
  for (var e8 = [], n2 = this._sentinel, t4 = n2._prev; t4 !== n2; )
    e8.push(JSON.stringify(t4, qi)), t4 = t4._prev;
  return "[" + e8.join(", ") + "]";
};
var Yi = Ro.Graph;
var Ji = function(e8, n2) {
  if (e8.nodeCount() <= 1)
    return [];
  var t4 = function(e9, n3) {
    var t5 = new Yi(), r3 = 0, o2 = 0;
    Vi.forEach(e9.nodes(), function(e10) {
      t5.setNode(e10, { v: e10, in: 0, out: 0 });
    }), Vi.forEach(e9.edges(), function(e10) {
      var i3 = t5.edge(e10.v, e10.w) || 0, a4 = n3(e10), u2 = i3 + a4;
      t5.setEdge(e10.v, e10.w, u2), o2 = Math.max(o2, t5.node(e10.v).out += a4), r3 = Math.max(r3, t5.node(e10.w).in += a4);
    });
    var i2 = Vi.range(o2 + r3 + 3).map(function() {
      return new $i();
    }), a3 = r3 + 1;
    return Vi.forEach(t5.nodes(), function(e10) {
      Qi(i2, a3, t5.node(e10));
    }), { graph: t5, buckets: i2, zeroIdx: a3 };
  }(e8, n2 || Xi), r2 = function(e9, n3, t5) {
    var r3, o2 = [], i2 = n3[n3.length - 1], a3 = n3[0];
    for (; e9.nodeCount(); ) {
      for (; r3 = a3.dequeue(); )
        Ki(e9, n3, t5, r3);
      for (; r3 = i2.dequeue(); )
        Ki(e9, n3, t5, r3);
      if (e9.nodeCount()) {
        for (var u2 = n3.length - 2; u2 > 0; --u2)
          if (r3 = n3[u2].dequeue()) {
            o2 = o2.concat(Ki(e9, n3, t5, r3, true));
            break;
          }
      }
    }
    return o2;
  }(t4.graph, t4.buckets, t4.zeroIdx);
  return Vi.flatten(Vi.map(r2, function(n3) {
    return e8.outEdges(n3.v, n3.w);
  }), true);
};
var Xi = Vi.constant(1);
function Ki(e8, n2, t4, r2, o2) {
  var i2 = o2 ? [] : void 0;
  return Vi.forEach(e8.inEdges(r2.v), function(r3) {
    var a3 = e8.edge(r3), u2 = e8.node(r3.v);
    o2 && i2.push({ v: r3.v, w: r3.w }), u2.out -= a3, Qi(n2, t4, u2);
  }), Vi.forEach(e8.outEdges(r2.v), function(r3) {
    var o3 = e8.edge(r3), i3 = r3.w, a3 = e8.node(i3);
    a3.in -= o3, Qi(n2, t4, a3);
  }), e8.removeNode(r2.v), i2;
}
function Qi(e8, n2, t4) {
  t4.out ? t4.in ? e8[t4.out - t4.in + n2].enqueue(t4) : e8[e8.length - 1].enqueue(t4) : e8[0].enqueue(t4);
}
var Zi = { run: function(e8) {
  var n2 = "greedy" === e8.graph().acyclicer ? Ji(e8, /* @__PURE__ */ function(e9) {
    return function(n3) {
      return e9.edge(n3).weight;
    };
  }(e8)) : function(e9) {
    var n3 = [], t4 = {}, r2 = {};
    function o2(i2) {
      Vi.has(r2, i2) || (r2[i2] = true, t4[i2] = true, Vi.forEach(e9.outEdges(i2), function(e10) {
        Vi.has(t4, e10.w) ? n3.push(e10) : o2(e10.w);
      }), delete t4[i2]);
    }
    return Vi.forEach(e9.nodes(), o2), n3;
  }(e8);
  Vi.forEach(n2, function(n3) {
    var t4 = e8.edge(n3);
    e8.removeEdge(n3), t4.forwardName = n3.name, t4.reversed = true, e8.setEdge(n3.w, n3.v, t4, Vi.uniqueId("rev"));
  });
}, undo: function(e8) {
  Vi.forEach(e8.edges(), function(n2) {
    var t4 = e8.edge(n2);
    if (t4.reversed) {
      e8.removeEdge(n2);
      var r2 = t4.forwardName;
      delete t4.reversed, delete t4.forwardName, e8.setEdge(n2.w, n2.v, t4, r2);
    }
  });
} };
var ea = Ro.Graph;
var na = { addDummyNode: ta, simplify: function(e8) {
  var n2 = new ea().setGraph(e8.graph());
  return Vi.forEach(e8.nodes(), function(t4) {
    n2.setNode(t4, e8.node(t4));
  }), Vi.forEach(e8.edges(), function(t4) {
    var r2 = n2.edge(t4.v, t4.w) || { weight: 0, minlen: 1 }, o2 = e8.edge(t4);
    n2.setEdge(t4.v, t4.w, { weight: r2.weight + o2.weight, minlen: Math.max(r2.minlen, o2.minlen) });
  }), n2;
}, asNonCompoundGraph: function(e8) {
  var n2 = new ea({ multigraph: e8.isMultigraph() }).setGraph(e8.graph());
  return Vi.forEach(e8.nodes(), function(t4) {
    e8.children(t4).length || n2.setNode(t4, e8.node(t4));
  }), Vi.forEach(e8.edges(), function(t4) {
    n2.setEdge(t4, e8.edge(t4));
  }), n2;
}, successorWeights: function(e8) {
  var n2 = Vi.map(e8.nodes(), function(n3) {
    var t4 = {};
    return Vi.forEach(e8.outEdges(n3), function(n4) {
      t4[n4.w] = (t4[n4.w] || 0) + e8.edge(n4).weight;
    }), t4;
  });
  return Vi.zipObject(e8.nodes(), n2);
}, predecessorWeights: function(e8) {
  var n2 = Vi.map(e8.nodes(), function(n3) {
    var t4 = {};
    return Vi.forEach(e8.inEdges(n3), function(n4) {
      t4[n4.v] = (t4[n4.v] || 0) + e8.edge(n4).weight;
    }), t4;
  });
  return Vi.zipObject(e8.nodes(), n2);
}, intersectRect: function(e8, n2) {
  var t4, r2, o2 = e8.x, i2 = e8.y, a3 = n2.x - o2, u2 = n2.y - i2, c2 = e8.width / 2, s3 = e8.height / 2;
  if (!a3 && !u2)
    throw new Error("Not possible to find intersection inside of the rectangle");
  Math.abs(u2) * c2 > Math.abs(a3) * s3 ? (u2 < 0 && (s3 = -s3), t4 = s3 * a3 / u2, r2 = s3) : (a3 < 0 && (c2 = -c2), t4 = c2, r2 = c2 * u2 / a3);
  return { x: o2 + t4, y: i2 + r2 };
}, buildLayerMatrix: function(e8) {
  var n2 = Vi.map(Vi.range(ra(e8) + 1), function() {
    return [];
  });
  return Vi.forEach(e8.nodes(), function(t4) {
    var r2 = e8.node(t4), o2 = r2.rank;
    Vi.isUndefined(o2) || (n2[o2][r2.order] = t4);
  }), n2;
}, normalizeRanks: function(e8) {
  var n2 = Vi.min(Vi.map(e8.nodes(), function(n3) {
    return e8.node(n3).rank;
  }));
  Vi.forEach(e8.nodes(), function(t4) {
    var r2 = e8.node(t4);
    Vi.has(r2, "rank") && (r2.rank -= n2);
  });
}, removeEmptyRanks: function(e8) {
  var n2 = Vi.min(Vi.map(e8.nodes(), function(n3) {
    return e8.node(n3).rank;
  })), t4 = [];
  Vi.forEach(e8.nodes(), function(r3) {
    var o3 = e8.node(r3).rank - n2;
    t4[o3] || (t4[o3] = []), t4[o3].push(r3);
  });
  var r2 = 0, o2 = e8.graph().nodeRankFactor;
  Vi.forEach(t4, function(n3, t5) {
    Vi.isUndefined(n3) && t5 % o2 != 0 ? --r2 : r2 && Vi.forEach(n3, function(n4) {
      e8.node(n4).rank += r2;
    });
  });
}, addBorderNode: function(e8, n2, t4, r2) {
  var o2 = { width: 0, height: 0 };
  arguments.length >= 4 && (o2.rank = t4, o2.order = r2);
  return ta(e8, "border", o2, n2);
}, maxRank: ra, partition: function(e8, n2) {
  var t4 = { lhs: [], rhs: [] };
  return Vi.forEach(e8, function(e9) {
    n2(e9) ? t4.lhs.push(e9) : t4.rhs.push(e9);
  }), t4;
}, time: function(e8, n2) {
  var t4 = Vi.now();
  try {
    return n2();
  } finally {
    console.log(e8 + " time: " + (Vi.now() - t4) + "ms");
  }
}, notime: function(e8, n2) {
  return n2();
} };
function ta(e8, n2, t4, r2) {
  var o2;
  do {
    o2 = Vi.uniqueId(r2);
  } while (e8.hasNode(o2));
  return t4.dummy = n2, e8.setNode(o2, t4), o2;
}
function ra(e8) {
  return Vi.max(Vi.map(e8.nodes(), function(n2) {
    var t4 = e8.node(n2).rank;
    if (!Vi.isUndefined(t4))
      return t4;
  }));
}
var oa = { run: function(e8) {
  e8.graph().dummyChains = [], Vi.forEach(e8.edges(), function(n2) {
    !function(e9, n3) {
      var t4, r2, o2, i2 = n3.v, a3 = e9.node(i2).rank, u2 = n3.w, c2 = e9.node(u2).rank, s3 = n3.name, d2 = e9.edge(n3), f2 = d2.labelRank;
      if (c2 === a3 + 1)
        return;
      for (e9.removeEdge(n3), o2 = 0, ++a3; a3 < c2; ++o2, ++a3)
        d2.points = [], r2 = { width: 0, height: 0, edgeLabel: d2, edgeObj: n3, rank: a3 }, t4 = na.addDummyNode(e9, "edge", r2, "_d"), a3 === f2 && (r2.width = d2.width, r2.height = d2.height, r2.dummy = "edge-label", r2.labelpos = d2.labelpos), e9.setEdge(i2, t4, { weight: d2.weight }, s3), 0 === o2 && e9.graph().dummyChains.push(t4), i2 = t4;
      e9.setEdge(i2, u2, { weight: d2.weight }, s3);
    }(e8, n2);
  });
}, undo: function(e8) {
  Vi.forEach(e8.graph().dummyChains, function(n2) {
    var t4, r2 = e8.node(n2), o2 = r2.edgeLabel;
    for (e8.setEdge(r2.edgeObj, o2); r2.dummy; )
      t4 = e8.successors(n2)[0], e8.removeNode(n2), o2.points.push({ x: r2.x, y: r2.y }), "edge-label" === r2.dummy && (o2.x = r2.x, o2.y = r2.y, o2.width = r2.width, o2.height = r2.height), n2 = t4, r2 = e8.node(n2);
  });
} };
var ia = function(e8) {
  var n2 = {};
  Vi.forEach(e8.sources(), function t4(r2) {
    var o2 = e8.node(r2);
    if (Vi.has(n2, r2))
      return o2.rank;
    n2[r2] = true;
    var i2 = Vi.min(Vi.map(e8.outEdges(r2), function(n3) {
      return t4(n3.w) - e8.edge(n3).minlen;
    }));
    return i2 !== Number.POSITIVE_INFINITY && null != i2 || (i2 = 0), o2.rank = i2;
  });
};
var aa = function(e8, n2) {
  return e8.node(n2.w).rank - e8.node(n2.v).rank - e8.edge(n2).minlen;
};
var ua = Ro.Graph;
var ca = aa;
var sa = function(e8) {
  var n2, t4, r2 = new ua({ directed: false }), o2 = e8.nodes()[0], i2 = e8.nodeCount();
  r2.setNode(o2, {});
  for (; da(r2, e8) < i2; )
    n2 = fa(r2, e8), t4 = r2.hasNode(n2.v) ? ca(e8, n2) : -ca(e8, n2), ha(r2, e8, t4);
  return r2;
};
function da(e8, n2) {
  return Vi.forEach(e8.nodes(), function t4(r2) {
    Vi.forEach(n2.nodeEdges(r2), function(o2) {
      var i2 = o2.v, a3 = r2 === i2 ? o2.w : i2;
      e8.hasNode(a3) || ca(n2, o2) || (e8.setNode(a3, {}), e8.setEdge(r2, a3, {}), t4(a3));
    });
  }), e8.nodeCount();
}
function fa(e8, n2) {
  return Vi.minBy(n2.edges(), function(t4) {
    if (e8.hasNode(t4.v) !== e8.hasNode(t4.w))
      return ca(n2, t4);
  });
}
function ha(e8, n2, t4) {
  Vi.forEach(e8.nodes(), function(e9) {
    n2.node(e9).rank += t4;
  });
}
var la = aa;
var va = ia;
var pa = Ro.alg.preorder;
var ga = Ro.alg.postorder;
var ya = na.simplify;
var ba = ma;
function ma(e8) {
  e8 = ya(e8), va(e8);
  var n2, t4 = sa(e8);
  for (_a(t4), wa(t4, e8); n2 = xa(t4); )
    Oa(t4, e8, n2, Na(t4, e8, n2));
}
function wa(e8, n2) {
  var t4 = ga(e8, e8.nodes());
  t4 = t4.slice(0, t4.length - 1), Vi.forEach(t4, function(t5) {
    !function(e9, n3, t6) {
      var r2 = e9.node(t6).parent;
      e9.edge(t6, r2).cutvalue = Ea(e9, n3, t6);
    }(e8, n2, t5);
  });
}
function Ea(e8, n2, t4) {
  var r2 = e8.node(t4).parent, o2 = true, i2 = n2.edge(t4, r2), a3 = 0;
  return i2 || (o2 = false, i2 = n2.edge(r2, t4)), a3 = i2.weight, Vi.forEach(n2.nodeEdges(t4), function(i3) {
    var u2, c2, s3 = i3.v === t4, d2 = s3 ? i3.w : i3.v;
    if (d2 !== r2) {
      var f2 = s3 === o2, h2 = n2.edge(i3).weight;
      if (a3 += f2 ? h2 : -h2, u2 = t4, c2 = d2, e8.hasEdge(u2, c2)) {
        var l2 = e8.edge(t4, d2).cutvalue;
        a3 += f2 ? -l2 : l2;
      }
    }
  }), a3;
}
function _a(e8, n2) {
  arguments.length < 2 && (n2 = e8.nodes()[0]), ja(e8, {}, 1, n2);
}
function ja(e8, n2, t4, r2, o2) {
  var i2 = t4, a3 = e8.node(r2);
  return n2[r2] = true, Vi.forEach(e8.neighbors(r2), function(o3) {
    Vi.has(n2, o3) || (t4 = ja(e8, n2, t4, o3, r2));
  }), a3.low = i2, a3.lim = t4++, o2 ? a3.parent = o2 : delete a3.parent, t4;
}
function xa(e8) {
  return Vi.find(e8.edges(), function(n2) {
    return e8.edge(n2).cutvalue < 0;
  });
}
function Na(e8, n2, t4) {
  var r2 = t4.v, o2 = t4.w;
  n2.hasEdge(r2, o2) || (r2 = t4.w, o2 = t4.v);
  var i2 = e8.node(r2), a3 = e8.node(o2), u2 = i2, c2 = false;
  i2.lim > a3.lim && (u2 = a3, c2 = true);
  var s3 = Vi.filter(n2.edges(), function(n3) {
    return c2 === ka(e8, e8.node(n3.v), u2) && c2 !== ka(e8, e8.node(n3.w), u2);
  });
  return Vi.minBy(s3, function(e9) {
    return la(n2, e9);
  });
}
function Oa(e8, n2, t4, r2) {
  var o2 = t4.v, i2 = t4.w;
  e8.removeEdge(o2, i2), e8.setEdge(r2.v, r2.w, {}), _a(e8), wa(e8, n2), function(e9, n3) {
    var t5 = Vi.find(e9.nodes(), function(e10) {
      return !n3.node(e10).parent;
    }), r3 = pa(e9, t5);
    r3 = r3.slice(1), Vi.forEach(r3, function(t6) {
      var r4 = e9.node(t6).parent, o3 = n3.edge(t6, r4), i3 = false;
      o3 || (o3 = n3.edge(r4, t6), i3 = true), n3.node(t6).rank = n3.node(r4).rank + (i3 ? o3.minlen : -o3.minlen);
    });
  }(e8, n2);
}
function ka(e8, n2, t4) {
  return t4.low <= n2.lim && n2.lim <= t4.lim;
}
ma.initLowLimValues = _a, ma.initCutValues = wa, ma.calcCutValue = Ea, ma.leaveEdge = xa, ma.enterEdge = Na, ma.exchangeEdges = Oa;
var Ia = ia;
var Sa = function(e8) {
  switch (e8.graph().ranker) {
    case "network-simplex":
    default:
      Ca(e8);
      break;
    case "tight-tree":
      !function(e9) {
        Ia(e9), sa(e9);
      }(e8);
      break;
    case "longest-path":
      Ma(e8);
  }
};
var Ma = Ia;
function Ca(e8) {
  ba(e8);
}
var Ga = function(e8) {
  var n2 = function(e9) {
    var n3 = {}, t4 = 0;
    function r2(o2) {
      var i2 = t4;
      Vi.forEach(e9.children(o2), r2), n3[o2] = { low: i2, lim: t4++ };
    }
    return Vi.forEach(e9.children(), r2), n3;
  }(e8);
  Vi.forEach(e8.graph().dummyChains, function(t4) {
    for (var r2 = e8.node(t4), o2 = r2.edgeObj, i2 = function(e9, n3, t5, r3) {
      var o3, i3, a4 = [], u3 = [], c3 = Math.min(n3[t5].low, n3[r3].low), s4 = Math.max(n3[t5].lim, n3[r3].lim);
      o3 = t5;
      do {
        o3 = e9.parent(o3), a4.push(o3);
      } while (o3 && (n3[o3].low > c3 || s4 > n3[o3].lim));
      i3 = o3, o3 = r3;
      for (; (o3 = e9.parent(o3)) !== i3; )
        u3.push(o3);
      return { path: a4.concat(u3.reverse()), lca: i3 };
    }(e8, n2, o2.v, o2.w), a3 = i2.path, u2 = i2.lca, c2 = 0, s3 = a3[c2], d2 = true; t4 !== o2.w; ) {
      if (r2 = e8.node(t4), d2) {
        for (; (s3 = a3[c2]) !== u2 && e8.node(s3).maxRank < r2.rank; )
          c2++;
        s3 === u2 && (d2 = false);
      }
      if (!d2) {
        for (; c2 < a3.length - 1 && e8.node(s3 = a3[c2 + 1]).minRank <= r2.rank; )
          c2++;
        s3 = a3[c2];
      }
      e8.setParent(t4, s3), t4 = e8.successors(t4)[0];
    }
  });
};
var Aa = { run: function(e8) {
  var n2 = na.addDummyNode(e8, "root", {}, "_root"), t4 = function(e9) {
    var n3 = {};
    function t5(r3, o3) {
      var i3 = e9.children(r3);
      i3 && i3.length && Vi.forEach(i3, function(e10) {
        t5(e10, o3 + 1);
      }), n3[r3] = o3;
    }
    return Vi.forEach(e9.children(), function(e10) {
      t5(e10, 1);
    }), n3;
  }(e8), r2 = Vi.max(Vi.values(t4)) - 1, o2 = 2 * r2 + 1;
  e8.graph().nestingRoot = n2, Vi.forEach(e8.edges(), function(n3) {
    e8.edge(n3).minlen *= o2;
  });
  var i2 = function(e9) {
    return Vi.reduce(e9.edges(), function(n3, t5) {
      return n3 + e9.edge(t5).weight;
    }, 0);
  }(e8) + 1;
  Vi.forEach(e8.children(), function(a3) {
    Ba(e8, n2, o2, i2, r2, t4, a3);
  }), e8.graph().nodeRankFactor = o2;
}, cleanup: function(e8) {
  var n2 = e8.graph();
  e8.removeNode(n2.nestingRoot), delete n2.nestingRoot, Vi.forEach(e8.edges(), function(n3) {
    e8.edge(n3).nestingEdge && e8.removeEdge(n3);
  });
} };
function Ba(e8, n2, t4, r2, o2, i2, a3) {
  var u2 = e8.children(a3);
  if (u2.length) {
    var c2 = na.addBorderNode(e8, "_bt"), s3 = na.addBorderNode(e8, "_bb"), d2 = e8.node(a3);
    e8.setParent(c2, a3), d2.borderTop = c2, e8.setParent(s3, a3), d2.borderBottom = s3, Vi.forEach(u2, function(u3) {
      Ba(e8, n2, t4, r2, o2, i2, u3);
      var d3 = e8.node(u3), f2 = d3.borderTop ? d3.borderTop : u3, h2 = d3.borderBottom ? d3.borderBottom : u3, l2 = d3.borderTop ? r2 : 2 * r2, v2 = f2 !== h2 ? 1 : o2 - i2[a3] + 1;
      e8.setEdge(c2, f2, { weight: l2, minlen: v2, nestingEdge: true }), e8.setEdge(h2, s3, { weight: l2, minlen: v2, nestingEdge: true });
    }), e8.parent(a3) || e8.setEdge(n2, c2, { weight: 0, minlen: o2 + i2[a3] });
  } else
    a3 !== n2 && e8.setEdge(n2, a3, { weight: 0, minlen: t4 });
}
var La = function(e8) {
  Vi.forEach(e8.children(), function n2(t4) {
    var r2 = e8.children(t4), o2 = e8.node(t4);
    if (r2.length && Vi.forEach(r2, n2), Vi.has(o2, "minRank")) {
      o2.borderLeft = [], o2.borderRight = [];
      for (var i2 = o2.minRank, a3 = o2.maxRank + 1; i2 < a3; ++i2)
        Ra(e8, "borderLeft", "_bl", t4, o2, i2), Ra(e8, "borderRight", "_br", t4, o2, i2);
    }
  });
};
function Ra(e8, n2, t4, r2, o2, i2) {
  var a3 = { width: 0, height: 0, rank: i2, borderType: n2 }, u2 = o2[n2][i2 - 1], c2 = na.addDummyNode(e8, "border", a3, t4);
  o2[n2][i2] = c2, e8.setParent(c2, r2), u2 && e8.setEdge(u2, c2, { weight: 1 });
}
var Ta = { adjust: function(e8) {
  var n2 = e8.graph().rankdir.toLowerCase();
  "lr" !== n2 && "rl" !== n2 || Da(e8);
}, undo: function(e8) {
  var n2 = e8.graph().rankdir.toLowerCase();
  "bt" !== n2 && "rl" !== n2 || function(e9) {
    Vi.forEach(e9.nodes(), function(n3) {
      za(e9.node(n3));
    }), Vi.forEach(e9.edges(), function(n3) {
      var t4 = e9.edge(n3);
      Vi.forEach(t4.points, za), Vi.has(t4, "y") && za(t4);
    });
  }(e8);
  "lr" !== n2 && "rl" !== n2 || (!function(e9) {
    Vi.forEach(e9.nodes(), function(n3) {
      Fa(e9.node(n3));
    }), Vi.forEach(e9.edges(), function(n3) {
      var t4 = e9.edge(n3);
      Vi.forEach(t4.points, Fa), Vi.has(t4, "x") && Fa(t4);
    });
  }(e8), Da(e8));
} };
function Da(e8) {
  Vi.forEach(e8.nodes(), function(n2) {
    Pa(e8.node(n2));
  }), Vi.forEach(e8.edges(), function(n2) {
    Pa(e8.edge(n2));
  });
}
function Pa(e8) {
  var n2 = e8.width;
  e8.width = e8.height, e8.height = n2;
}
function za(e8) {
  e8.y = -e8.y;
}
function Fa(e8) {
  var n2 = e8.x;
  e8.x = e8.y, e8.y = n2;
}
var Ua = function(e8) {
  var n2 = {}, t4 = Vi.filter(e8.nodes(), function(n3) {
    return !e8.children(n3).length;
  }), r2 = Vi.max(Vi.map(t4, function(n3) {
    return e8.node(n3).rank;
  })), o2 = Vi.map(Vi.range(r2 + 1), function() {
    return [];
  });
  function i2(t5) {
    if (!Vi.has(n2, t5)) {
      n2[t5] = true;
      var r3 = e8.node(t5);
      o2[r3.rank].push(t5), Vi.forEach(e8.successors(t5), i2);
    }
  }
  var a3 = Vi.sortBy(t4, function(n3) {
    return e8.node(n3).rank;
  });
  return Vi.forEach(a3, i2), o2;
};
var Va = function(e8, n2) {
  for (var t4 = 0, r2 = 1; r2 < n2.length; ++r2)
    t4 += $a(e8, n2[r2 - 1], n2[r2]);
  return t4;
};
function $a(e8, n2, t4) {
  for (var r2 = Vi.zipObject(t4, Vi.map(t4, function(e9, n3) {
    return n3;
  })), o2 = Vi.flatten(Vi.map(n2, function(n3) {
    return Vi.sortBy(Vi.map(e8.outEdges(n3), function(n4) {
      return { pos: r2[n4.w], weight: e8.edge(n4).weight };
    }), "pos");
  }), true), i2 = 1; i2 < t4.length; )
    i2 <<= 1;
  var a3 = 2 * i2 - 1;
  i2 -= 1;
  var u2 = Vi.map(new Array(a3), function() {
    return 0;
  }), c2 = 0;
  return Vi.forEach(o2.forEach(function(e9) {
    var n3 = e9.pos + i2;
    u2[n3] += e9.weight;
    for (var t5 = 0; n3 > 0; )
      n3 % 2 && (t5 += u2[n3 + 1]), u2[n3 = n3 - 1 >> 1] += e9.weight;
    c2 += e9.weight * t5;
  })), c2;
}
var Ha = function(e8, n2) {
  return Vi.map(n2, function(n3) {
    var t4 = e8.inEdges(n3);
    if (t4.length) {
      var r2 = Vi.reduce(t4, function(n4, t5) {
        var r3 = e8.edge(t5), o2 = e8.node(t5.v);
        return { sum: n4.sum + r3.weight * o2.order, weight: n4.weight + r3.weight };
      }, { sum: 0, weight: 0 });
      return { v: n3, barycenter: r2.sum / r2.weight, weight: r2.weight };
    }
    return { v: n3 };
  });
};
var Wa = function(e8, n2) {
  var t4 = {};
  return Vi.forEach(e8, function(e9, n3) {
    var r2 = t4[e9.v] = { indegree: 0, in: [], out: [], vs: [e9.v], i: n3 };
    Vi.isUndefined(e9.barycenter) || (r2.barycenter = e9.barycenter, r2.weight = e9.weight);
  }), Vi.forEach(n2.edges(), function(e9) {
    var n3 = t4[e9.v], r2 = t4[e9.w];
    Vi.isUndefined(n3) || Vi.isUndefined(r2) || (r2.indegree++, n3.out.push(t4[e9.w]));
  }), function(e9) {
    var n3 = [];
    function t5(e10) {
      return function(n4) {
        n4.merged || (Vi.isUndefined(n4.barycenter) || Vi.isUndefined(e10.barycenter) || n4.barycenter >= e10.barycenter) && function(e11, n5) {
          var t6 = 0, r3 = 0;
          e11.weight && (t6 += e11.barycenter * e11.weight, r3 += e11.weight);
          n5.weight && (t6 += n5.barycenter * n5.weight, r3 += n5.weight);
          e11.vs = n5.vs.concat(e11.vs), e11.barycenter = t6 / r3, e11.weight = r3, e11.i = Math.min(n5.i, e11.i), n5.merged = true;
        }(e10, n4);
      };
    }
    function r2(n4) {
      return function(t6) {
        t6.in.push(n4), 0 == --t6.indegree && e9.push(t6);
      };
    }
    for (; e9.length; ) {
      var o2 = e9.pop();
      n3.push(o2), Vi.forEach(o2.in.reverse(), t5(o2)), Vi.forEach(o2.out, r2(o2));
    }
    return Vi.map(Vi.filter(n3, function(e10) {
      return !e10.merged;
    }), function(e10) {
      return Vi.pick(e10, ["vs", "i", "barycenter", "weight"]);
    });
  }(Vi.filter(t4, function(e9) {
    return !e9.indegree;
  }));
};
var qa = function(e8, n2) {
  var t4 = na.partition(e8, function(e9) {
    return Vi.has(e9, "barycenter");
  }), r2 = t4.lhs, o2 = Vi.sortBy(t4.rhs, function(e9) {
    return -e9.i;
  }), i2 = [], a3 = 0, u2 = 0, c2 = 0;
  r2.sort((s3 = !!n2, function(e9, n3) {
    return e9.barycenter < n3.barycenter ? -1 : e9.barycenter > n3.barycenter ? 1 : s3 ? n3.i - e9.i : e9.i - n3.i;
  })), c2 = Ya(i2, o2, c2), Vi.forEach(r2, function(e9) {
    c2 += e9.vs.length, i2.push(e9.vs), a3 += e9.barycenter * e9.weight, u2 += e9.weight, c2 = Ya(i2, o2, c2);
  });
  var s3;
  var d2 = { vs: Vi.flatten(i2, true) };
  u2 && (d2.barycenter = a3 / u2, d2.weight = u2);
  return d2;
};
function Ya(e8, n2, t4) {
  for (var r2; n2.length && (r2 = Vi.last(n2)).i <= t4; )
    n2.pop(), e8.push(r2.vs), t4++;
  return t4;
}
var Ja = function e7(n2, t4, r2, o2) {
  var i2 = n2.children(t4), a3 = n2.node(t4), u2 = a3 ? a3.borderLeft : void 0, c2 = a3 ? a3.borderRight : void 0, s3 = {};
  u2 && (i2 = Vi.filter(i2, function(e8) {
    return e8 !== u2 && e8 !== c2;
  }));
  var d2 = Ha(n2, i2);
  Vi.forEach(d2, function(t5) {
    if (n2.children(t5.v).length) {
      var i3 = e7(n2, t5.v, r2, o2);
      s3[t5.v] = i3, Vi.has(i3, "barycenter") && (a4 = t5, u3 = i3, Vi.isUndefined(a4.barycenter) ? (a4.barycenter = u3.barycenter, a4.weight = u3.weight) : (a4.barycenter = (a4.barycenter * a4.weight + u3.barycenter * u3.weight) / (a4.weight + u3.weight), a4.weight += u3.weight));
    }
    var a4, u3;
  });
  var f2 = Wa(d2, r2);
  !function(e8, n3) {
    Vi.forEach(e8, function(e9) {
      e9.vs = Vi.flatten(e9.vs.map(function(e10) {
        return n3[e10] ? n3[e10].vs : e10;
      }), true);
    });
  }(f2, s3);
  var h2 = qa(f2, o2);
  if (u2 && (h2.vs = Vi.flatten([u2, h2.vs, c2], true), n2.predecessors(u2).length)) {
    var l2 = n2.node(n2.predecessors(u2)[0]), v2 = n2.node(n2.predecessors(c2)[0]);
    Vi.has(h2, "barycenter") || (h2.barycenter = 0, h2.weight = 0), h2.barycenter = (h2.barycenter * h2.weight + l2.order + v2.order) / (h2.weight + 2), h2.weight += 2;
  }
  return h2;
};
var Xa = Ro.Graph;
var Ka = function(e8, n2, t4) {
  var r2 = function(e9) {
    var n3;
    for (; e9.hasNode(n3 = Vi.uniqueId("_root")); )
      ;
    return n3;
  }(e8), o2 = new Xa({ compound: true }).setGraph({ root: r2 }).setDefaultNodeLabel(function(n3) {
    return e8.node(n3);
  });
  return Vi.forEach(e8.nodes(), function(i2) {
    var a3 = e8.node(i2), u2 = e8.parent(i2);
    (a3.rank === n2 || a3.minRank <= n2 && n2 <= a3.maxRank) && (o2.setNode(i2), o2.setParent(i2, u2 || r2), Vi.forEach(e8[t4](i2), function(n3) {
      var t5 = n3.v === i2 ? n3.w : n3.v, r3 = o2.edge(t5, i2), a4 = Vi.isUndefined(r3) ? 0 : r3.weight;
      o2.setEdge(t5, i2, { weight: e8.edge(n3).weight + a4 });
    }), Vi.has(a3, "minRank") && o2.setNode(i2, { borderLeft: a3.borderLeft[n2], borderRight: a3.borderRight[n2] }));
  }), o2;
};
var Qa = function(e8, n2, t4) {
  var r2, o2 = {};
  Vi.forEach(t4, function(t5) {
    for (var i2, a3, u2 = e8.parent(t5); u2; ) {
      if ((i2 = e8.parent(u2)) ? (a3 = o2[i2], o2[i2] = u2) : (a3 = r2, r2 = u2), a3 && a3 !== u2)
        return void n2.setEdge(a3, u2);
      u2 = i2;
    }
  });
};
var Za = Ro.Graph;
var eu = function(e8) {
  var n2 = na.maxRank(e8), t4 = nu(e8, Vi.range(1, n2 + 1), "inEdges"), r2 = nu(e8, Vi.range(n2 - 1, -1, -1), "outEdges"), o2 = Ua(e8);
  ru(e8, o2);
  for (var i2, a3 = Number.POSITIVE_INFINITY, u2 = 0, c2 = 0; c2 < 4; ++u2, ++c2) {
    tu(u2 % 2 ? t4 : r2, u2 % 4 >= 2), o2 = na.buildLayerMatrix(e8);
    var s3 = Va(e8, o2);
    s3 < a3 && (c2 = 0, i2 = Vi.cloneDeep(o2), a3 = s3);
  }
  ru(e8, i2);
};
function nu(e8, n2, t4) {
  return Vi.map(n2, function(n3) {
    return Ka(e8, n3, t4);
  });
}
function tu(e8, n2) {
  var t4 = new Za();
  Vi.forEach(e8, function(e9) {
    var r2 = e9.graph().root, o2 = Ja(e9, r2, t4, n2);
    Vi.forEach(o2.vs, function(n3, t5) {
      e9.node(n3).order = t5;
    }), Qa(e9, t4, o2.vs);
  });
}
function ru(e8, n2) {
  Vi.forEach(n2, function(n3) {
    Vi.forEach(n3, function(n4, t4) {
      e8.node(n4).order = t4;
    });
  });
}
var ou = Ro.Graph;
var iu = function(e8) {
  var n2, t4 = na.buildLayerMatrix(e8), r2 = Vi.merge(au(e8, t4), uu(e8, t4)), o2 = {};
  Vi.forEach(["u", "d"], function(i3) {
    n2 = "u" === i3 ? t4 : Vi.values(t4).reverse(), Vi.forEach(["l", "r"], function(t5) {
      "r" === t5 && (n2 = Vi.map(n2, function(e9) {
        return Vi.values(e9).reverse();
      }));
      var a3 = ("u" === i3 ? e8.predecessors : e8.successors).bind(e8), u2 = du(e8, n2, r2, a3), c2 = fu(e8, n2, u2.root, u2.align, "r" === t5);
      "r" === t5 && (c2 = Vi.mapValues(c2, function(e9) {
        return -e9;
      })), o2[i3 + t5] = c2;
    });
  });
  var i2 = hu(e8, o2);
  return lu(o2, i2), vu(o2, e8.graph().align);
};
function au(e8, n2) {
  var t4 = {};
  return Vi.reduce(n2, function(n3, r2) {
    var o2 = 0, i2 = 0, a3 = n3.length, u2 = Vi.last(r2);
    return Vi.forEach(r2, function(n4, c2) {
      var s3 = function(e9, n5) {
        if (e9.node(n5).dummy)
          return Vi.find(e9.predecessors(n5), function(n6) {
            return e9.node(n6).dummy;
          });
      }(e8, n4), d2 = s3 ? e8.node(s3).order : a3;
      (s3 || n4 === u2) && (Vi.forEach(r2.slice(i2, c2 + 1), function(n5) {
        Vi.forEach(e8.predecessors(n5), function(r3) {
          var i3 = e8.node(r3), a4 = i3.order;
          !(a4 < o2 || d2 < a4) || i3.dummy && e8.node(n5).dummy || cu(t4, r3, n5);
        });
      }), i2 = c2 + 1, o2 = d2);
    }), r2;
  }), t4;
}
function uu(e8, n2) {
  var t4 = {};
  function r2(n3, r3, o2, i2, a3) {
    var u2;
    Vi.forEach(Vi.range(r3, o2), function(r4) {
      u2 = n3[r4], e8.node(u2).dummy && Vi.forEach(e8.predecessors(u2), function(n4) {
        var r5 = e8.node(n4);
        r5.dummy && (r5.order < i2 || r5.order > a3) && cu(t4, n4, u2);
      });
    });
  }
  return Vi.reduce(n2, function(n3, t5) {
    var o2, i2 = -1, a3 = 0;
    return Vi.forEach(t5, function(u2, c2) {
      if ("border" === e8.node(u2).dummy) {
        var s3 = e8.predecessors(u2);
        s3.length && (o2 = e8.node(s3[0]).order, r2(t5, a3, c2, i2, o2), a3 = c2, i2 = o2);
      }
      r2(t5, a3, t5.length, o2, n3.length);
    }), t5;
  }), t4;
}
function cu(e8, n2, t4) {
  if (n2 > t4) {
    var r2 = n2;
    n2 = t4, t4 = r2;
  }
  var o2 = e8[n2];
  o2 || (e8[n2] = o2 = {}), o2[t4] = true;
}
function su(e8, n2, t4) {
  if (n2 > t4) {
    var r2 = n2;
    n2 = t4, t4 = r2;
  }
  return Vi.has(e8[n2], t4);
}
function du(e8, n2, t4, r2) {
  var o2 = {}, i2 = {}, a3 = {};
  return Vi.forEach(n2, function(e9) {
    Vi.forEach(e9, function(e10, n3) {
      o2[e10] = e10, i2[e10] = e10, a3[e10] = n3;
    });
  }), Vi.forEach(n2, function(e9) {
    var n3 = -1;
    Vi.forEach(e9, function(e10) {
      var u2 = r2(e10);
      if (u2.length) {
        u2 = Vi.sortBy(u2, function(e11) {
          return a3[e11];
        });
        for (var c2 = (u2.length - 1) / 2, s3 = Math.floor(c2), d2 = Math.ceil(c2); s3 <= d2; ++s3) {
          var f2 = u2[s3];
          i2[e10] === e10 && n3 < a3[f2] && !su(t4, e10, f2) && (i2[f2] = e10, i2[e10] = o2[e10] = o2[f2], n3 = a3[f2]);
        }
      }
    });
  }), { root: o2, align: i2 };
}
function fu(e8, n2, t4, r2, o2) {
  var i2 = {}, a3 = function(e9, n3, t5, r3) {
    var o3 = new ou(), i3 = e9.graph(), a4 = /* @__PURE__ */ function(e10, n4, t6) {
      return function(r4, o4, i4) {
        var a5, u3 = r4.node(o4), c3 = r4.node(i4), s3 = 0;
        if (s3 += u3.width / 2, Vi.has(u3, "labelpos"))
          switch (u3.labelpos.toLowerCase()) {
            case "l":
              a5 = -u3.width / 2;
              break;
            case "r":
              a5 = u3.width / 2;
          }
        if (a5 && (s3 += t6 ? a5 : -a5), a5 = 0, s3 += (u3.dummy ? n4 : e10) / 2, s3 += (c3.dummy ? n4 : e10) / 2, s3 += c3.width / 2, Vi.has(c3, "labelpos"))
          switch (c3.labelpos.toLowerCase()) {
            case "l":
              a5 = c3.width / 2;
              break;
            case "r":
              a5 = -c3.width / 2;
          }
        return a5 && (s3 += t6 ? a5 : -a5), a5 = 0, s3;
      };
    }(i3.nodesep, i3.edgesep, r3);
    return Vi.forEach(n3, function(n4) {
      var r4;
      Vi.forEach(n4, function(n5) {
        var i4 = t5[n5];
        if (o3.setNode(i4), r4) {
          var u3 = t5[r4], c3 = o3.edge(u3, i4);
          o3.setEdge(u3, i4, Math.max(a4(e9, n5, r4), c3 || 0));
        }
        r4 = n5;
      });
    }), o3;
  }(e8, n2, t4, o2), u2 = o2 ? "borderLeft" : "borderRight";
  function c2(e9, n3) {
    for (var t5 = a3.nodes(), r3 = t5.pop(), o3 = {}; r3; )
      o3[r3] ? e9(r3) : (o3[r3] = true, t5.push(r3), t5 = t5.concat(n3(r3))), r3 = t5.pop();
  }
  return c2(function(e9) {
    i2[e9] = a3.inEdges(e9).reduce(function(e10, n3) {
      return Math.max(e10, i2[n3.v] + a3.edge(n3));
    }, 0);
  }, a3.predecessors.bind(a3)), c2(function(n3) {
    var t5 = a3.outEdges(n3).reduce(function(e9, n4) {
      return Math.min(e9, i2[n4.w] - a3.edge(n4));
    }, Number.POSITIVE_INFINITY), r3 = e8.node(n3);
    t5 !== Number.POSITIVE_INFINITY && r3.borderType !== u2 && (i2[n3] = Math.max(i2[n3], t5));
  }, a3.successors.bind(a3)), Vi.forEach(r2, function(e9) {
    i2[e9] = i2[t4[e9]];
  }), i2;
}
function hu(e8, n2) {
  return Vi.minBy(Vi.values(n2), function(n3) {
    var t4 = Number.NEGATIVE_INFINITY, r2 = Number.POSITIVE_INFINITY;
    return Vi.forIn(n3, function(n4, o2) {
      var i2 = function(e9, n5) {
        return e9.node(n5).width;
      }(e8, o2) / 2;
      t4 = Math.max(n4 + i2, t4), r2 = Math.min(n4 - i2, r2);
    }), t4 - r2;
  });
}
function lu(e8, n2) {
  var t4 = Vi.values(n2), r2 = Vi.min(t4), o2 = Vi.max(t4);
  Vi.forEach(["u", "d"], function(t5) {
    Vi.forEach(["l", "r"], function(i2) {
      var a3, u2 = t5 + i2, c2 = e8[u2];
      if (c2 !== n2) {
        var s3 = Vi.values(c2);
        (a3 = "l" === i2 ? r2 - Vi.min(s3) : o2 - Vi.max(s3)) && (e8[u2] = Vi.mapValues(c2, function(e9) {
          return e9 + a3;
        }));
      }
    });
  });
}
function vu(e8, n2) {
  return Vi.mapValues(e8.ul, function(t4, r2) {
    if (n2)
      return e8[n2.toLowerCase()][r2];
    var o2 = Vi.sortBy(Vi.map(e8, r2));
    return (o2[1] + o2[2]) / 2;
  });
}
var pu = iu;
var gu = function(e8) {
  (function(e9) {
    var n2 = na.buildLayerMatrix(e9), t4 = e9.graph().ranksep, r2 = 0;
    Vi.forEach(n2, function(n3) {
      var o2 = Vi.max(Vi.map(n3, function(n4) {
        return e9.node(n4).height;
      }));
      Vi.forEach(n3, function(n4) {
        e9.node(n4).y = r2 + o2 / 2;
      }), r2 += o2 + t4;
    });
  })(e8 = na.asNonCompoundGraph(e8)), Vi.forEach(pu(e8), function(n2, t4) {
    e8.node(t4).x = n2;
  });
};
var yu = na.normalizeRanks;
var bu = na.removeEmptyRanks;
var mu = na;
var wu = Ro.Graph;
var Eu = function(e8, n2) {
  var t4 = n2 && n2.debugTiming ? mu.time : mu.notime;
  t4("layout", function() {
    var n3 = t4("  buildLayoutGraph", function() {
      return function(e9) {
        var n4 = new wu({ multigraph: true, compound: true }), t5 = Cu(e9.graph());
        return n4.setGraph(Vi.merge({}, ju, Mu(t5, _u), Vi.pick(t5, xu))), Vi.forEach(e9.nodes(), function(t6) {
          var r2 = Cu(e9.node(t6));
          n4.setNode(t6, Vi.defaults(Mu(r2, Nu), Ou)), n4.setParent(t6, e9.parent(t6));
        }), Vi.forEach(e9.edges(), function(t6) {
          var r2 = Cu(e9.edge(t6));
          n4.setEdge(t6, Vi.merge({}, Iu, Mu(r2, ku), Vi.pick(r2, Su)));
        }), n4;
      }(e8);
    });
    t4("  runLayout", function() {
      !function(e9, n4) {
        n4("    makeSpaceForEdgeLabels", function() {
          !function(e10) {
            var n5 = e10.graph();
            n5.ranksep /= 2, Vi.forEach(e10.edges(), function(t5) {
              var r2 = e10.edge(t5);
              r2.minlen *= 2, "c" !== r2.labelpos.toLowerCase() && ("TB" === n5.rankdir || "BT" === n5.rankdir ? r2.width += r2.labeloffset : r2.height += r2.labeloffset);
            });
          }(e9);
        }), n4("    removeSelfEdges", function() {
          !function(e10) {
            Vi.forEach(e10.edges(), function(n5) {
              if (n5.v === n5.w) {
                var t5 = e10.node(n5.v);
                t5.selfEdges || (t5.selfEdges = []), t5.selfEdges.push({ e: n5, label: e10.edge(n5) }), e10.removeEdge(n5);
              }
            });
          }(e9);
        }), n4("    acyclic", function() {
          Zi.run(e9);
        }), n4("    nestingGraph.run", function() {
          Aa.run(e9);
        }), n4("    rank", function() {
          Sa(mu.asNonCompoundGraph(e9));
        }), n4("    injectEdgeLabelProxies", function() {
          !function(e10) {
            Vi.forEach(e10.edges(), function(n5) {
              var t5 = e10.edge(n5);
              if (t5.width && t5.height) {
                var r2 = e10.node(n5.v), o2 = { rank: (e10.node(n5.w).rank - r2.rank) / 2 + r2.rank, e: n5 };
                mu.addDummyNode(e10, "edge-proxy", o2, "_ep");
              }
            });
          }(e9);
        }), n4("    removeEmptyRanks", function() {
          bu(e9);
        }), n4("    nestingGraph.cleanup", function() {
          Aa.cleanup(e9);
        }), n4("    normalizeRanks", function() {
          yu(e9);
        }), n4("    assignRankMinMax", function() {
          !function(e10) {
            var n5 = 0;
            Vi.forEach(e10.nodes(), function(t5) {
              var r2 = e10.node(t5);
              r2.borderTop && (r2.minRank = e10.node(r2.borderTop).rank, r2.maxRank = e10.node(r2.borderBottom).rank, n5 = Vi.max(n5, r2.maxRank));
            }), e10.graph().maxRank = n5;
          }(e9);
        }), n4("    removeEdgeLabelProxies", function() {
          !function(e10) {
            Vi.forEach(e10.nodes(), function(n5) {
              var t5 = e10.node(n5);
              "edge-proxy" === t5.dummy && (e10.edge(t5.e).labelRank = t5.rank, e10.removeNode(n5));
            });
          }(e9);
        }), n4("    normalize.run", function() {
          oa.run(e9);
        }), n4("    parentDummyChains", function() {
          Ga(e9);
        }), n4("    addBorderSegments", function() {
          La(e9);
        }), n4("    order", function() {
          eu(e9);
        }), n4("    insertSelfEdges", function() {
          !function(e10) {
            var n5 = mu.buildLayerMatrix(e10);
            Vi.forEach(n5, function(n6) {
              var t5 = 0;
              Vi.forEach(n6, function(n7, r2) {
                var o2 = e10.node(n7);
                o2.order = r2 + t5, Vi.forEach(o2.selfEdges, function(n8) {
                  mu.addDummyNode(e10, "selfedge", { width: n8.label.width, height: n8.label.height, rank: o2.rank, order: r2 + ++t5, e: n8.e, label: n8.label }, "_se");
                }), delete o2.selfEdges;
              });
            });
          }(e9);
        }), n4("    adjustCoordinateSystem", function() {
          Ta.adjust(e9);
        }), n4("    position", function() {
          gu(e9);
        }), n4("    positionSelfEdges", function() {
          !function(e10) {
            Vi.forEach(e10.nodes(), function(n5) {
              var t5 = e10.node(n5);
              if ("selfedge" === t5.dummy) {
                var r2 = e10.node(t5.e.v), o2 = r2.x + r2.width / 2, i2 = r2.y, a3 = t5.x - o2, u2 = r2.height / 2;
                e10.setEdge(t5.e, t5.label), e10.removeNode(n5), t5.label.points = [{ x: o2 + 2 * a3 / 3, y: i2 - u2 }, { x: o2 + 5 * a3 / 6, y: i2 - u2 }, { x: o2 + a3, y: i2 }, { x: o2 + 5 * a3 / 6, y: i2 + u2 }, { x: o2 + 2 * a3 / 3, y: i2 + u2 }], t5.label.x = t5.x, t5.label.y = t5.y;
              }
            });
          }(e9);
        }), n4("    removeBorderNodes", function() {
          !function(e10) {
            Vi.forEach(e10.nodes(), function(n5) {
              if (e10.children(n5).length) {
                var t5 = e10.node(n5), r2 = e10.node(t5.borderTop), o2 = e10.node(t5.borderBottom), i2 = e10.node(Vi.last(t5.borderLeft)), a3 = e10.node(Vi.last(t5.borderRight));
                t5.width = Math.abs(a3.x - i2.x), t5.height = Math.abs(o2.y - r2.y), t5.x = i2.x + t5.width / 2, t5.y = r2.y + t5.height / 2;
              }
            }), Vi.forEach(e10.nodes(), function(n5) {
              "border" === e10.node(n5).dummy && e10.removeNode(n5);
            });
          }(e9);
        }), n4("    normalize.undo", function() {
          oa.undo(e9);
        }), n4("    fixupEdgeLabelCoords", function() {
          !function(e10) {
            Vi.forEach(e10.edges(), function(n5) {
              var t5 = e10.edge(n5);
              if (Vi.has(t5, "x"))
                switch ("l" !== t5.labelpos && "r" !== t5.labelpos || (t5.width -= t5.labeloffset), t5.labelpos) {
                  case "l":
                    t5.x -= t5.width / 2 + t5.labeloffset;
                    break;
                  case "r":
                    t5.x += t5.width / 2 + t5.labeloffset;
                }
            });
          }(e9);
        }), n4("    undoCoordinateSystem", function() {
          Ta.undo(e9);
        }), n4("    translateGraph", function() {
          !function(e10) {
            var n5 = Number.POSITIVE_INFINITY, t5 = 0, r2 = Number.POSITIVE_INFINITY, o2 = 0, i2 = e10.graph(), a3 = i2.marginx || 0, u2 = i2.marginy || 0;
            function c2(e11) {
              var i3 = e11.x, a4 = e11.y, u3 = e11.width, c3 = e11.height;
              n5 = Math.min(n5, i3 - u3 / 2), t5 = Math.max(t5, i3 + u3 / 2), r2 = Math.min(r2, a4 - c3 / 2), o2 = Math.max(o2, a4 + c3 / 2);
            }
            Vi.forEach(e10.nodes(), function(n6) {
              c2(e10.node(n6));
            }), Vi.forEach(e10.edges(), function(n6) {
              var t6 = e10.edge(n6);
              Vi.has(t6, "x") && c2(t6);
            }), n5 -= a3, r2 -= u2, Vi.forEach(e10.nodes(), function(t6) {
              var o3 = e10.node(t6);
              o3.x -= n5, o3.y -= r2;
            }), Vi.forEach(e10.edges(), function(t6) {
              var o3 = e10.edge(t6);
              Vi.forEach(o3.points, function(e11) {
                e11.x -= n5, e11.y -= r2;
              }), Vi.has(o3, "x") && (o3.x -= n5), Vi.has(o3, "y") && (o3.y -= r2);
            }), i2.width = t5 - n5 + a3, i2.height = o2 - r2 + u2;
          }(e9);
        }), n4("    assignNodeIntersects", function() {
          !function(e10) {
            Vi.forEach(e10.edges(), function(n5) {
              var t5, r2, o2 = e10.edge(n5), i2 = e10.node(n5.v), a3 = e10.node(n5.w);
              o2.points ? (t5 = o2.points[0], r2 = o2.points[o2.points.length - 1]) : (o2.points = [], t5 = a3, r2 = i2), o2.points.unshift(mu.intersectRect(i2, t5)), o2.points.push(mu.intersectRect(a3, r2));
            });
          }(e9);
        }), n4("    reversePoints", function() {
          !function(e10) {
            Vi.forEach(e10.edges(), function(n5) {
              var t5 = e10.edge(n5);
              t5.reversed && t5.points.reverse();
            });
          }(e9);
        }), n4("    acyclic.undo", function() {
          Zi.undo(e9);
        });
      }(n3, t4);
    }), t4("  updateInputGraph", function() {
      !function(e9, n4) {
        Vi.forEach(e9.nodes(), function(t5) {
          var r2 = e9.node(t5), o2 = n4.node(t5);
          r2 && (r2.x = o2.x, r2.y = o2.y, n4.children(t5).length && (r2.width = o2.width, r2.height = o2.height));
        }), Vi.forEach(e9.edges(), function(t5) {
          var r2 = e9.edge(t5), o2 = n4.edge(t5);
          r2.points = o2.points, Vi.has(o2, "x") && (r2.x = o2.x, r2.y = o2.y);
        }), e9.graph().width = n4.graph().width, e9.graph().height = n4.graph().height;
      }(e8, n3);
    });
  });
};
var _u = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
var ju = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
var xu = ["acyclicer", "ranker", "rankdir", "align"];
var Nu = ["width", "height"];
var Ou = { width: 0, height: 0 };
var ku = ["minlen", "weight", "width", "height", "labeloffset"];
var Iu = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: "r" };
var Su = ["labelpos"];
function Mu(e8, n2) {
  return Vi.mapValues(Vi.pick(e8, n2), Number);
}
function Cu(e8) {
  var n2 = {};
  return Vi.forEach(e8, function(e9, t4) {
    n2[t4.toLowerCase()] = e9;
  }), n2;
}
var Gu = Ro.Graph;
var Au;
var Bu;
var Lu;
var Ru = { graphlib: Ro, layout: Eu, debug: { debugOrdering: function(e8) {
  var n2 = na.buildLayerMatrix(e8), t4 = new Gu({ compound: true, multigraph: true }).setGraph({});
  return Vi.forEach(e8.nodes(), function(n3) {
    t4.setNode(n3, { label: n3 }), t4.setParent(n3, "layer" + e8.node(n3).rank);
  }), Vi.forEach(e8.edges(), function(e9) {
    t4.setEdge(e9.v, e9.w, {}, e9.name);
  }), Vi.forEach(n2, function(e9, n3) {
    var r2 = "layer" + n3;
    t4.setNode(r2, { rank: "same" }), Vi.reduce(e9, function(e10, n4) {
      return t4.setEdge(e10, n4, { style: "invis" }), n4;
    });
  }), t4;
} }, util: { time: na.time, notime: na.notime }, version: "0.8.5" };
var Tu = Ru.graphlib;
var Du = Ru.layout;
!function(e8) {
  e8[e8.META = 0] = "META", e8[e8.NODE = 1] = "NODE", e8[e8.BRIDGE = 2] = "BRIDGE";
}(Au || (Au = {})), function(e8) {
  e8[e8.INCLUDE = 0] = "INCLUDE", e8[e8.EXCLUDE = 1] = "EXCLUDE", e8[e8.UNSPECIFIED = 2] = "UNSPECIFIED";
}(Bu || (Bu = {})), function(e8) {
  e8[e8.META = 0] = "META", e8[e8.CORE = 1] = "CORE", e8[e8.BRIDGE = 2] = "BRIDGE";
}(Lu || (Lu = {}));
var Pu = class {
  constructor(e8) {
    this.cardinality = 1, this.include = Bu.UNSPECIFIED, this.isGroupNode = false, this.parentNode = null, this.type = Au.NODE, this.name = e8.name, this.attr = e8.attr || {}, this.inputs = e8.inputs, this.path = e8.path || [], this.width = e8.width, this.height = e8.height;
  }
};
var zu = class {
  constructor() {
    this.nodes = {}, this.edges = [], this.nodes = {}, this.edges = [];
  }
};
function Fu(e8) {
  const n2 = new zu();
  return e8.nodes.map((e9) => new Pu(e9)).forEach((e9) => {
    n2.nodes[e9.name] = e9, e9.inputs.forEach((t4) => {
      !function(e10, n3, t5) {
        t5.name !== n3.name && e10.edges.push(Object.assign(Object.assign({}, t5.attr), { v: t5.name, w: n3.name }));
      }(n2, e9, t4);
    });
  }), n2;
}
var Uu = class {
  constructor(e8, n2 = {}) {
    this.attr = null, this.bridgeGraph = null, this.cardinality = 0, this.depth = 1, this.include = Bu.UNSPECIFIED, this.isGroupNode = true, this.parentNode = null, this.type = Au.META, this.path = [], this.name = e8, this.metaGraph = Wu(e8, Lu.META, n2);
  }
  getFirstChild() {
    return this.metaGraph.node(this.metaGraph.nodes()[0]);
  }
  getChildren() {
    return this.metaGraph.nodes().map((e8) => this.metaGraph.node(e8));
  }
  leaves() {
    const e8 = [], n2 = [this];
    let t4;
    for (; n2.length; ) {
      const r2 = n2.shift();
      r2.isGroupNode ? (t4 = r2.metaGraph, t4.nodes().forEach((e9) => n2.push(t4.node(e9)))) : e8.push(r2.name);
    }
    return e8;
  }
};
var Vu = class {
  constructor(e8, n2) {
    this.v = e8, this.w = n2, this.baseEdgeList = [], this.points = [], this.inbound = null, this.name = null;
  }
  addBaseEdge(e8, n2) {
    this.baseEdgeList.push(e8);
  }
};
function $u(e8, n2 = {}) {
  return new Uu(e8, n2);
}
function Hu(e8, n2) {
  return new Vu(e8, n2);
}
function Wu(e8, n2, t4) {
  const r2 = t4 || {}, o2 = new Tu.Graph(r2);
  return o2.setGraph({ name: e8, rankdir: r2.rankdir, type: n2, align: r2.align }), o2;
}
function qu(e8) {
  return `◬${e8}◬`;
}
var Yu = qu("ROOT");
var Ju = qu("BRIDGE_GRAPH");
var Xu = class {
  constructor(e8 = {}) {
    this.graphOptions = e8, this.index = {}, this.graphOptions.compound = true, this.root = $u(Yu, this.graphOptions), this.index[Yu] = this.root;
  }
  getNodeMap() {
    return this.index;
  }
  node(e8) {
    return this.index[e8];
  }
  setNode(e8, n2) {
    this.index[e8] = n2;
  }
  getBridgeGraph(e8) {
    const n2 = this.index[e8];
    if (!n2)
      throw Error(`Could not find node in hierarchy: ${e8}`);
    if (!("metaGraph" in n2))
      return null;
    const t4 = n2;
    if (t4.bridgeGraph)
      return t4.bridgeGraph;
    const r2 = Wu(Ju, Lu.BRIDGE, this.graphOptions);
    if (t4.bridgeGraph = r2, !n2.parentNode || !("metaGraph" in n2.parentNode))
      return r2;
    const o2 = n2.parentNode;
    return [o2.metaGraph, this.getBridgeGraph(o2.name)].forEach((n3) => {
      n3.edges().filter((n4) => n4.v === e8 || n4.w === e8).forEach((t5) => {
        const o3 = t5.w === e8;
        n3.edge(t5).baseEdgeList.forEach((n4) => {
          const [i2, a3] = o3 ? [n4.w, t5.v] : [n4.v, t5.w], u2 = this.getChildName(e8, i2), c2 = { v: o3 ? a3 : u2, w: o3 ? u2 : a3 };
          let s3 = r2.edge(c2);
          s3 || (s3 = Hu(c2.v, c2.w), s3.inbound = o3, r2.setEdge(c2.v, c2.w, s3)), s3.addBaseEdge(n4, this);
        });
      });
    }), r2;
  }
  getChildName(e8, n2) {
    let t4 = this.index[n2];
    for (; t4; ) {
      if (t4.parentNode && t4.parentNode.name === e8)
        return t4.name;
      t4 = t4.parentNode;
    }
    throw Error(`Could not find immediate child for descendant: ${n2}`);
  }
  getPredecessors(e8) {
    const n2 = this.index[e8];
    if (!n2)
      throw Error(`Could not find node with name: ${e8}`);
    return this.getOneWayEdges(n2, true);
  }
  getSuccessors(e8) {
    const n2 = this.index[e8];
    if (!n2)
      throw Error(`Could not find node with name: ${e8}`);
    return this.getOneWayEdges(n2, false);
  }
  getOneWayEdges(e8, n2) {
    const t4 = [];
    if (!e8.parentNode || !e8.parentNode.isGroupNode)
      return t4;
    const r2 = e8.parentNode, o2 = r2.metaGraph, i2 = this.getBridgeGraph(r2.name);
    return Qu(o2, e8, n2, t4), Qu(i2, e8, n2, t4), t4;
  }
};
function Ku(e8, n2) {
  const { rankDirection: t4, align: r2 } = n2, o2 = new Xu({ rankdir: t4, align: r2 });
  return function(e9, n3) {
    Object.keys(n3.nodes).forEach((t5) => {
      const r3 = n3.nodes[t5], o3 = r3.path;
      let i2 = e9.root;
      i2.depth = Math.max(o3.length, i2.depth);
      for (let n4 = 0; n4 < o3.length && (i2.depth = Math.max(i2.depth, o3.length - n4), i2.cardinality += r3.cardinality, n4 !== o3.length - 1); n4++) {
        const t6 = o3[n4];
        let a3 = e9.node(t6);
        a3 || (a3 = $u(t6, e9.graphOptions), a3.path = r3.path.slice(0, n4 + 1), a3.parentNode = i2, e9.setNode(t6, a3), i2.metaGraph.setNode(t6, a3)), i2 = a3;
      }
      e9.setNode(r3.name, r3), r3.parentNode = i2, i2.metaGraph.setNode(r3.name, r3);
    });
  }(o2, e8), function(e9, n3) {
    const t5 = e9.getNodeMap();
    let r3 = [], o3 = [];
    const i2 = (e10, n4) => {
      let t6 = 0;
      for (; e10; )
        n4[t6++] = e10.name, e10 = e10.parentNode;
      return t6 - 1;
    };
    n3.edges.forEach((a3) => {
      r3 = [], o3 = [];
      let u2 = i2(n3.nodes[a3.v], r3), c2 = i2(n3.nodes[a3.w], o3);
      for (; r3[u2] === o3[c2]; )
        if (u2--, c2--, u2 < 0 || c2 < 0)
          throw Error("No difference found between ancestor paths.");
      const s3 = t5[r3[u2 + 1]], d2 = r3[u2], f2 = o3[c2];
      let h2 = s3.metaGraph.edge(d2, f2);
      h2 || (h2 = Hu(d2, f2), s3.metaGraph.setEdge(d2, f2, h2)), h2.addBaseEdge(a3, e9);
    });
  }(o2, e8), o2;
}
function Qu(e8, n2, t4, r2) {
  ((t4 ? e8.inEdges(n2.name) : e8.outEdges(n2.name)) || []).forEach((n3) => {
    const t5 = e8.edge(n3);
    r2.push(t5);
  });
}
function Zu(e8, t4) {
  e8.node.isGroupNode && function(e9, t5) {
    const r2 = n(t5);
    e9.coreGraph.nodes().map((n2) => e9.coreGraph.node(n2)).forEach((e10) => {
      var n2, o2, i2, a3, u2, c2;
      const { height: s3, width: d2 } = e10;
      switch (e10.node.type) {
        case Au.NODE:
          Object.assign(e10, r2.nodeSize.node), e10.height = s3 || r2.nodeSize.node.height, e10.width = d2 || r2.nodeSize.node.width;
          break;
        case Au.BRIDGE:
          Object.assign(e10, r2.nodeSize.bridge);
          break;
        case Au.META:
          if (e10.expanded) {
            Zu(e10, t5);
          } else
            Object.assign(e10, r2.nodeSize.meta), e10.height = r2.nodeSize.meta.height, e10.width = r2.nodeSize.meta.width;
          break;
        default:
          throw Error(`Unrecognized node type: ${e10.node.type}`);
      }
      if (!e10.expanded) {
        const r3 = e10.attr;
        !function(e11, n3 = false) {
          if (e11.coreBox.width = e11.width, e11.coreBox.height = e11.height, !n3) {
            const n4 = `${e11.displayName}`.length, t6 = 3;
            e11.width = Math.max(e11.coreBox.width, n4 * t6);
          }
        }(e10, t5 && (0 === e10.node.type && !!(null === (o2 = null === (n2 = null == t5 ? void 0 : t5.nodeSize) || void 0 === n2 ? void 0 : n2.meta) || void 0 === o2 ? void 0 : o2.width) || 1 === e10.node.type && (!!(null === (a3 = null === (i2 = null == t5 ? void 0 : t5.nodeSize) || void 0 === i2 ? void 0 : i2.node) || void 0 === a3 ? void 0 : a3.width) || !!r3.width) || 2 === e10.node.type && !!(null === (c2 = null === (u2 = null == t5 ? void 0 : t5.nodeSize) || void 0 === u2 ? void 0 : u2.bridge) || void 0 === c2 ? void 0 : c2.width)));
      }
    });
  }(e8, t4), e8.node.type === Au.META && function(e9, t5) {
    const r2 = n(t5), o2 = r2.subScene.meta;
    Object.assign(e9, o2);
    const { nodeSep: i2, rankSep: a3, edgeSep: u2, align: c2 } = r2.graph.meta, s3 = { nodesep: i2, ranksep: a3, edgesep: u2, align: c2 };
    Object.assign(e9.coreBox, function(e10, n2) {
      const { ranksep: t6, nodesep: r3, edgesep: o3, align: i3 } = n2;
      Object.assign(e10.graph(), { ranksep: t6, nodesep: r3, edgesep: o3, align: i3 });
      const a4 = [];
      if (e10.nodes().forEach((n3) => {
        e10.node(n3).node.type !== Au.BRIDGE && a4.push(n3);
      }), !a4.length)
        return { width: 0, height: 0 };
      Du(e10);
      let u3 = 1 / 0, c3 = 1 / 0, s4 = -1 / 0, d3 = -1 / 0;
      return a4.forEach((n3) => {
        const t7 = e10.node(n3), r4 = 0.5 * t7.width, o4 = t7.x - r4, i4 = t7.x + r4;
        u3 = o4 < u3 ? o4 : u3, s4 = i4 > s4 ? i4 : s4;
        const a5 = 0.5 * t7.height, f3 = t7.y - a5, h2 = t7.y + a5;
        c3 = f3 < c3 ? f3 : c3, d3 = h2 > d3 ? h2 : d3;
      }), e10.edges().forEach((n3) => {
        const t7 = e10.edge(n3), r4 = e10.node(t7.metaEdge.v), o4 = e10.node(t7.metaEdge.w);
        if (3 === t7.points.length && function(e11) {
          let n4 = ec(e11[0], e11[1]);
          for (let t8 = 1; t8 < e11.length - 1; t8++) {
            const r5 = ec(e11[t8], e11[t8 + 1]);
            if (Math.abs(r5 - n4) > 1)
              return false;
            n4 = r5;
          }
          return true;
        }(t7.points)) {
          if (null != r4) {
            const e11 = r4.expanded ? r4.x : nc(r4);
            t7.points[0].x = e11;
          }
          if (null != o4) {
            const e11 = o4.expanded ? o4.x : nc(o4);
            t7.points[2].x = e11;
          }
          t7.points = [t7.points[0], t7.points[1]];
        }
        const i4 = t7.points[t7.points.length - 2];
        null != o4 && (t7.points[t7.points.length - 1] = tc(i4, o4));
        const a5 = t7.points[1];
        null != r4 && (t7.points[0] = tc(a5, r4)), t7.points.forEach((e11) => {
          u3 = e11.x < u3 ? e11.x : u3, s4 = e11.x > s4 ? e11.x : s4, c3 = e11.y < c3 ? e11.y : c3, d3 = e11.y > d3 ? e11.y : d3;
        });
      }), e10.nodes().forEach((n3) => {
        const t7 = e10.node(n3);
        t7.x -= u3, t7.y -= c3;
      }), e10.edges().forEach((n3) => {
        e10.edge(n3).points.forEach((e11) => {
          e11.x -= u3, e11.y -= c3;
        });
      }), { width: s4 - u3, height: d3 - c3 };
    }(e9.coreGraph, s3));
    let d2 = 0;
    e9.coreGraph.nodeCount() > 0 && d2++;
    const f2 = d2 <= 1 ? 0 : d2;
    e9.coreBox.width += f2 + f2, e9.coreBox.height = o2.labelHeight + e9.coreBox.height, e9.width = e9.coreBox.width + o2.paddingLeft + o2.paddingRight, e9.height = e9.paddingTop + e9.coreBox.height + e9.paddingBottom;
  }(e8, t4);
}
function ec(e8, n2) {
  const t4 = n2.x - e8.x, r2 = n2.y - e8.y;
  return 180 * Math.atan(r2 / t4) / Math.PI;
}
function nc(e8) {
  if (e8.expanded)
    return e8.x;
  return e8.x - e8.width / 2 + 0 + e8.coreBox.width / 2;
}
function tc(e8, n2) {
  const t4 = n2.expanded ? n2.x : nc(n2), r2 = n2.y, o2 = e8.x - t4, i2 = e8.y - r2;
  let a3, u2, c2 = n2.expanded ? n2.width : n2.coreBox.width, s3 = n2.expanded ? n2.height : n2.coreBox.height;
  return Math.abs(i2) * c2 / 2 > Math.abs(o2) * s3 / 2 ? (i2 < 0 && (s3 = -s3), a3 = 0 === i2 ? 0 : s3 / 2 * o2 / i2, u2 = s3 / 2) : (o2 < 0 && (c2 = -c2), a3 = c2 / 2, u2 = 0 === o2 ? 0 : c2 / 2 * i2 / o2), { x: t4 + a3, y: r2 + u2 };
}
var rc = class {
  constructor(e8) {
    this.hierarchy = e8, this.index = {}, this.hasSubHierarchy = {}, this.root = new ac(this.hierarchy.root, this.hierarchy.graphOptions), this.index[e8.root.name] = this.root, this.buildSubHierarchy(e8.root.name), this.root.expanded = true;
  }
  getRenderInfoNodes() {
    return Object.values(this.index);
  }
  getSubHierarchy() {
    return this.hasSubHierarchy;
  }
  buildSubHierarchy(e8) {
    if (e8 in this.hasSubHierarchy)
      return;
    this.hasSubHierarchy[e8] = true;
    const n2 = this.index[e8];
    if (n2.node.type !== Au.META)
      return;
    const t4 = n2, r2 = t4.node.metaGraph, o2 = t4.coreGraph;
    r2.nodes().forEach((e9) => {
      const n3 = this.getOrCreateRenderNodeByName(e9);
      o2.setNode(e9, n3);
    }), r2.edges().forEach((e9) => {
      const n3 = r2.edge(e9), t5 = new ic(n3);
      o2.setEdge(e9.v, e9.w, t5);
    });
    const i2 = t4.node.parentNode;
    if (!i2)
      return;
    const a3 = this.getRenderNodeByName(i2.name), u2 = (e9, ...n3) => n3.concat([e9 ? "IN" : "OUT"]).join("~~"), c2 = this.hierarchy.getBridgeGraph(e8);
    c2.edges().forEach((n3) => {
      const t5 = c2.edge(n3), s3 = !!r2.node(n3.w), [d2, f2] = s3 ? [n3.w, n3.v] : [n3.v, n3.w], h2 = (n4) => {
        const t6 = s3 ? { v: n4, w: e8 } : { v: e8, w: n4 };
        return a3.coreGraph.edge(t6);
      };
      let l2 = h2(f2);
      l2 || (l2 = h2(u2(s3, f2, i2.name)));
      const v2 = u2(s3, e8), p2 = u2(s3, f2, e8);
      let g2 = o2.node(p2);
      if (!g2) {
        let e9 = o2.node(v2);
        if (!e9) {
          const n5 = { name: v2, type: Au.BRIDGE, isGroupNode: false, cardinality: 0, parentNode: null, include: Bu.UNSPECIFIED, inbound: s3, attr: {} };
          e9 = new oc(n5), this.index[v2] = e9, o2.setNode(v2, e9);
        }
        const n4 = { name: p2, type: Au.BRIDGE, isGroupNode: false, cardinality: 1, parentNode: null, include: Bu.UNSPECIFIED, inbound: s3, attr: {} };
        g2 = new oc(n4), this.index[p2] = g2, o2.setNode(p2, g2), o2.setParent(p2, v2), e9.node.cardinality++;
      }
      const y3 = new ic(t5);
      y3.adjoiningMetaEdge = l2, s3 ? o2.setEdge(p2, d2, y3) : o2.setEdge(d2, p2, y3);
    });
  }
  getOrCreateRenderNodeByName(e8) {
    if (!e8)
      return null;
    if (e8 in this.index)
      return this.index[e8];
    const n2 = this.getNodeByName(e8);
    return n2 ? (this.index[e8] = n2.isGroupNode ? new ac(n2, this.hierarchy.graphOptions) : new oc(n2), this.index[e8]) : null;
  }
  getRenderNodeByName(e8) {
    return this.index[e8];
  }
  getNodeByName(e8) {
    return this.hierarchy.node(e8);
  }
};
var oc = class {
  constructor(e8) {
    this.node = e8, this.expanded = false, this.x = 0, this.y = 0, this.coreBox = { width: 0, height: 0 }, this.outboxWidth = 0, this.labelOffset = 0, this.radius = 0, this.labelHeight = 0, this.paddingTop = 0, this.paddingLeft = 0, this.paddingRight = 0, this.paddingBottom = 0, this.width = e8.width || 0, this.height = e8.height || 0, this.displayName = e8.name, this.attr = e8.attr;
  }
};
var ic = class {
  constructor(e8) {
    this.metaEdge = e8, this.adjoiningMetaEdge = null, this.weight = 1, this.points = [];
  }
};
var ac = class extends oc {
  constructor(e8, n2) {
    super(e8);
    const t4 = e8.metaGraph.graph();
    n2.compound = true, this.coreGraph = Wu(t4.name, Lu.CORE, n2);
  }
};
function uc(n2, t4, r2) {
  var o2, i2, a3, u2;
  const c2 = n2.nodes.filter((e8, n3, t5) => t5.findIndex((n4) => n4.id === e8.id) !== n3).map((e8) => e8.id);
  if (c2.length)
    throw new Error(`Duplicated ids found: ${c2.join(", ")}`);
  const s3 = function(e8) {
    const n3 = { nodes: [] }, t5 = e8.compound, r3 = Object.keys(t5 || {}), o3 = /* @__PURE__ */ new Map(), i3 = (e9, n4 = []) => {
      if (o3.has(e9))
        return o3.get(e9);
      for (let o4 = 0; o4 < r3.length; o4++) {
        const a5 = r3[o4];
        if (t5 && -1 !== t5[a5].indexOf(e9))
          return n4.unshift(a5), i3(a5, n4);
      }
      return 0 === n4.length && o3.set(e9, n4), n4;
    }, a4 = (n4) => e8.edges.filter((e9) => e9.w === n4).map((e9) => ({ name: e9.v }));
    return e8.nodes.forEach((e9) => {
      const t6 = e9.id, r4 = [...i3(t6), t6], o4 = a4(t6);
      n3.nodes.push({ name: t6, path: r4, inputs: o4, width: e9.width, height: e9.height, attr: Object.assign({}, e9) });
    }), n3;
  }(n2), d2 = function(e8, n3) {
    const t5 = (e9, n4) => {
      for (const t6 of n4.values())
        if (t6.includes(e9))
          return true;
      return false;
    }, r3 = (e9, n4 = []) => {
      if (0 === Object.keys(e9).length)
        return [...new Set(n4)];
      const o3 = new Map(Object.keys(e9).map((n5) => [n5, e9[n5]])), i3 = {};
      for (const [e10, r4] of o3)
        t5(e10, o3) ? i3[e10] = r4 : n4 = n4.concat(e10, r4);
      return r3(i3, n4);
    };
    return r3(e8).filter((e9) => n3.includes(e9));
  }(n2.compound || {}, (null == t4 ? void 0 : t4.expanded) || []), f2 = function(e8, n3) {
    return function(e9) {
      return new rc(e9);
    }(Ku(Fu(e8), n3));
  }(s3, { rankDirection: (null === (i2 = null === (o2 = null == r2 ? void 0 : r2.graph) || void 0 === o2 ? void 0 : o2.meta) || void 0 === i2 ? void 0 : i2.rankDir) || (null == t4 ? void 0 : t4.rankDirection) || e.graph.meta.rankDir, align: (null === (u2 = null === (a3 = null == r2 ? void 0 : r2.graph) || void 0 === a3 ? void 0 : a3.meta) || void 0 === u2 ? void 0 : u2.align) || e.graph.meta.align });
  return function(e8, n3) {
    n3.forEach((n4) => {
      const t5 = e8.getRenderInfoNodes().find((e9) => e9.displayName === n4), r3 = t5 && t5.node && t5.node.name || "", o3 = e8.getRenderNodeByName(r3);
      if (!o3)
        throw new Error(`No nodes found: ${r3}`);
      o3.expanded = true, e8.buildSubHierarchy(r3);
    });
  }(f2, d2), Zu(f2.root, r2), dc(f2.root);
}
function dc(e8) {
  const n2 = e8.coreGraph.nodes().map((n3) => e8.coreGraph.node(n3));
  return Object.assign(Object.assign({}, fc(e8)), { expanded: e8.expanded, nodes: e8.expanded ? (t4 = n2, t4.map((e9) => e9.node.type === Au.META ? dc(e9) : fc(e9))) : [], edges: e8.expanded ? hc(e8) : [] });
  var t4;
}
function fc(e8) {
  return { id: e8.node.name, name: e8.node.name, type: e8.node.type, cardinality: e8.node.cardinality, attr: e8.attr, parentNodeName: e8.node.parentNode ? e8.node.parentNode.name : null, coreBox: Object.assign({}, e8.coreBox), x: e8.x, y: e8.y, width: e8.width, height: e8.height, radius: e8.radius, labelHeight: e8.labelHeight, labelOffset: e8.labelOffset, outboxWidth: e8.outboxWidth, paddingLeft: e8.paddingLeft, paddingTop: e8.paddingTop, paddingRight: e8.paddingRight, paddingBottom: e8.paddingBottom, path: e8.node.path };
}
function hc(e8) {
  return e8.coreGraph.edges().map((n2) => ({ renderInfoEdge: e8.coreGraph.edge(n2), edge: n2 })).filter(({ renderInfoEdge: e9 }) => e9.metaEdge).map(({ edge: n2, renderInfoEdge: t4 }) => {
    const r2 = function(e9, n3) {
      const t5 = n3.points.map((e10) => Object.assign({}, e10));
      if (n3.adjoiningMetaEdge) {
        const r3 = n3.adjoiningMetaEdge.points, o2 = n3.metaEdge.inbound, i2 = o2 ? r3[r3.length - 1] : r3[0], a3 = t5[o2 ? 0 : t5.length - 1], u2 = e9.x - e9.width / 2, c2 = e9.y - e9.height / 2, s3 = i2.x - u2, d2 = i2.y - c2, f2 = -e9.paddingLeft, h2 = -(e9.paddingTop + e9.labelHeight);
        a3.x = s3 + f2, a3.y = d2 + h2;
      }
      return t5;
    }(e8, t4);
    return { adjoiningEdge: t4.adjoiningMetaEdge ? { w: t4.adjoiningMetaEdge.metaEdge.w, v: t4.adjoiningMetaEdge.metaEdge.v } : null, inbound: t4.metaEdge.inbound, w: n2.w, v: n2.v, points: r2, weight: t4.weight, baseEdgeList: t4.metaEdge.baseEdgeList, parentNodeName: e8.node.name };
  });
}
var lc;
!function(e8) {
  e8[e8.META = 0] = "META", e8[e8.OP = 1] = "OP", e8[e8.SERIES = 2] = "SERIES";
}(lc || (lc = {}));

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-graph.mjs
var _c0 = ["nz-graph-defs", ""];
var _c1 = ["nz-graph-edge", ""];
var _c2 = (a0) => ({
  $implicit: a0
});
function NzGraphEdgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.edge));
  }
}
function NzGraphEdgeComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 2)(1, "textPath", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", "#" + ctx_r0.id);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.edge.label);
  }
}
function NzGraphEdgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵelement(1, "path", 1);
    ɵɵtemplate(2, NzGraphEdgeComponent_Conditional_1_Conditional_2_Template, 3, 2, ":svg:text", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("marker-end", "url(#edge-end-arrow)");
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.edge.label ? 2 : -1);
  }
}
var _c3 = ["nz-graph-node", ""];
function NzGraphNodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainer(0, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.node));
  }
}
function NzGraphNodeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 1);
    ɵɵelementStart(1, "text", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("width", ctx_r0.node.width)("height", ctx_r0.node.height);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.node.id || ctx_r0.node.name);
  }
}
var _c4 = ["*"];
function _forTrack0($index, $item) {
  return this.edgeTrackByFun($item);
}
var _forTrack1 = ($index, $item) => $item.name;
var _c5 = (a0) => ({
  renderNode: a0,
  type: "root"
});
var _c6 = (a0) => ({
  renderNode: a0,
  type: "sub"
});
function NzGraphComponent_ng_template_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 6);
  }
  if (rf & 2) {
    const edge_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("edge", edge_r1)("edgeType", ctx_r1.nzGraphLayoutConfig == null ? null : ctx_r1.nzGraphLayoutConfig.defaultEdge == null ? null : ctx_r1.nzGraphLayoutConfig.defaultEdge.type)("customTemplate", ctx_r1.customGraphEdgeTemplate);
  }
}
function NzGraphComponent_ng_template_5_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 8);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("node", node_r3)("customTemplate", ctx_r1.nodeTemplate);
  }
}
function NzGraphComponent_ng_template_5_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 8);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("node", node_r3)("customTemplate", ctx_r1.groupNodeTemplate);
  }
}
function NzGraphComponent_ng_template_5_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    ɵɵnextContext(2);
    const groupTemplate_r4 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", groupTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, node_r3));
  }
}
function NzGraphComponent_ng_template_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzGraphComponent_ng_template_5_For_7_Conditional_0_Template, 1, 2, ":svg:g", 8)(1, NzGraphComponent_ng_template_5_For_7_Conditional_1_Template, 1, 2, ":svg:g", 8)(2, NzGraphComponent_ng_template_5_For_7_Conditional_2_Template, 1, 4, ":svg:ng-container", 3);
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    ɵɵconditional(0, node_r3.type === 1 ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, node_r3.type === 0 ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, node_r3.expanded ? 2 : -1);
  }
}
function NzGraphComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g")(1, "g", 4)(2, "g", 5);
    ɵɵrepeaterCreate(3, NzGraphComponent_ng_template_5_For_4_Template, 1, 3, ":svg:g", 6, _forTrack0, true);
    ɵɵelementEnd();
    ɵɵelementStart(5, "g", 7);
    ɵɵrepeaterCreate(6, NzGraphComponent_ng_template_5_For_7_Template, 3, 3, null, null, _forTrack1);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const renderNode_r5 = ctx.renderNode;
    const type_r6 = ctx.type;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", type_r6 === "sub" ? ctx_r1.subGraphTransform(renderNode_r5) : null);
    ɵɵadvance();
    ɵɵattribute("transform", ctx_r1.coreTransform(renderNode_r5));
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.$asNzGraphEdges(renderNode_r5.edges));
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r1.typedNodes(renderNode_r5.nodes));
  }
}
var NzGraphEdgeType;
(function(NzGraphEdgeType2) {
  NzGraphEdgeType2["LINE"] = "line";
  NzGraphEdgeType2["CURVE"] = "curve";
})(NzGraphEdgeType || (NzGraphEdgeType = {}));
function nzTypeDefinition() {
  return (item) => item;
}
var NZ_GRAPH_LAYOUT_SETTING = {
  graph: {
    meta: {
      nodeSep: 50,
      rankSep: 50,
      edgeSep: 5
    }
  },
  subScene: {
    meta: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      labelHeight: 20
    }
  },
  nodeSize: {
    meta: {
      width: 50,
      maxLabelWidth: 0,
      height: 50
    },
    node: {
      width: 50,
      height: 50,
      labelOffset: 10,
      maxLabelWidth: 40
    },
    bridge: {
      width: 5,
      height: 5,
      radius: 2,
      labelOffset: 0
    }
  }
};
var NzGraphData = class {
  /** Toggles one single data node's expanded/collapsed state. */
  toggle(nodeName) {
    this.expansionModel.toggle(nodeName);
  }
  /** Expands one single data node. */
  expand(nodeName) {
    const compound = this.dataSource.compound || {};
    const toBeSelected = this.findParents(compound, nodeName, [nodeName]);
    this.expansionModel.select(...toBeSelected);
  }
  /** Collapses one single data node. */
  collapse(nodeName) {
    const compound = this.dataSource.compound || {};
    const toBeDeselected = this.findChildren(compound, nodeName, [nodeName]);
    this.expansionModel.deselect(...toBeDeselected);
  }
  /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
  isExpanded(nodeName) {
    return this.expansionModel.isSelected(nodeName);
  }
  /** Collapse all dataNodes in the tree. */
  collapseAll() {
    this.expansionModel.clear();
  }
  expandAll() {
    this.expansionModel.select(...Object.keys(this._data.value.compound || {}));
  }
  setData(data) {
    this.expansionModel?.clear();
    this.dataSource = data;
    this._data.next(data);
  }
  constructor(source) {
    this._data = new BehaviorSubject({});
    this.expansionModel = new SelectionModel(true);
    if (source) {
      this.expansionModel?.clear();
      this.dataSource = source;
      this._data.next(source);
    }
  }
  connect() {
    const changes = [this._data, this.expansionModel.changed];
    return merge(...changes).pipe(map(() => this._data.value));
  }
  disconnect() {
  }
  findParents(data, key, parents = []) {
    const parent = Object.keys(data).filter((d2) => d2 !== key).find((d2) => data[d2].includes(key));
    if (!parent) {
      return parents;
    } else {
      return this.findParents(data, parent, [parent, ...parents]);
    }
  }
  findChildren(data, key, children2 = []) {
    const groupIds = Object.keys(data);
    const child = (data[key] || []).filter((c2) => groupIds.includes(c2));
    if (child && child.length > 0) {
      return child.reduce((pre, cur) => Array.from(/* @__PURE__ */ new Set([...pre, ...this.findChildren(data, cur, [...children2, cur])])), children2);
    }
    return children2;
  }
};
var _NzGraphDefsComponent = class _NzGraphDefsComponent {
};
_NzGraphDefsComponent.ɵfac = function NzGraphDefsComponent_Factory(t4) {
  return new (t4 || _NzGraphDefsComponent)();
};
_NzGraphDefsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzGraphDefsComponent,
  selectors: [["defs", "nz-graph-defs", ""]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 2,
  vars: 0,
  consts: [["id", "edge-end-arrow", "viewBox", "1 0 20 20", "refX", "8", "refY", "3.5", "markerWidth", "10", "markerHeight", "10", "orient", "auto", 1, "nz-graph-edge-marker"], ["points", "0 0, 10 3.5, 0 7"]],
  template: function NzGraphDefsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "marker", 0);
      ɵɵelement(1, "polygon", 1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
var NzGraphDefsComponent = _NzGraphDefsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphDefsComponent, [{
    type: Component,
    args: [{
      selector: "svg:defs[nz-graph-defs]",
      template: `
    <svg:marker
      class="nz-graph-edge-marker"
      id="edge-end-arrow"
      viewBox="1 0 20 20"
      refX="8"
      refY="3.5"
      markerWidth="10"
      markerHeight="10"
      orient="auto"
    >
      <svg:polygon points="0 0, 10 3.5, 0 7"></svg:polygon>
    </svg:marker>
  `,
      standalone: true
    }]
  }], null, null);
})();
var _NzGraphEdgeComponent = class _NzGraphEdgeComponent {
  get id() {
    return this.edge?.id || `${this.edge.v}--${this.edge.w}`;
  }
  constructor(elementRef, cdr) {
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.line = line_default().x((d2) => d2.x).y((d2) => d2.y).curve(linear_default);
    this.injector = inject(Injector);
    this.el = this.elementRef.nativeElement;
  }
  ngOnInit() {
    this.initElementStyle();
  }
  ngOnChanges(changes) {
    const {
      edge,
      customTemplate,
      edgeType
    } = changes;
    if (edge) {
      afterNextRender(() => {
        if (customTemplate) {
          this.initElementStyle();
        }
        this.setLine();
        this.cdr.markForCheck();
      }, {
        injector: this.injector
      });
    }
    if (edgeType) {
      const type = this.edgeType === NzGraphEdgeType.LINE ? linear_default : basis_default;
      this.line = line_default().x((d2) => d2.x).y((d2) => d2.y).curve(type);
    }
  }
  initElementStyle() {
    this.path = this.el.querySelector("path");
    this.setElementData();
  }
  setLine() {
    this.setPath(this.line(this.edge.points));
  }
  setPath(d2) {
    this.path.setAttribute("d", d2);
  }
  setElementData() {
    if (!this.path) {
      return;
    }
    this.path.setAttribute("id", this.id);
    this.path.setAttribute("data-edge", this.id);
    this.path.setAttribute("data-v", `${this.edge.v}`);
    this.path.setAttribute("data-w", `${this.edge.w}`);
  }
};
_NzGraphEdgeComponent.ɵfac = function NzGraphEdgeComponent_Factory(t4) {
  return new (t4 || _NzGraphEdgeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzGraphEdgeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzGraphEdgeComponent,
  selectors: [["", "nz-graph-edge", ""]],
  inputs: {
    edge: "edge",
    edgeType: "edgeType",
    customTemplate: "customTemplate"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "nz-graph-edge-line"], ["text-anchor", "middle", "dy", "10", 1, "nz-graph-edge-text"], ["startOffset", "50%"]],
  template: function NzGraphEdgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzGraphEdgeComponent_Conditional_0_Template, 1, 4, "ng-container", 0)(1, NzGraphEdgeComponent_Conditional_1_Template, 3, 2);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.customTemplate ? 0 : 1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzGraphEdgeComponent = _NzGraphEdgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphEdgeComponent, [{
    type: Component,
    args: [{
      selector: "[nz-graph-edge]",
      template: `
    @if (customTemplate) {
      <ng-container [ngTemplateOutlet]="customTemplate" [ngTemplateOutletContext]="{ $implicit: edge }" />
    } @else {
      <svg:g>
        <path class="nz-graph-edge-line" [attr.marker-end]="'url(#edge-end-arrow)'"></path>
        @if (edge.label) {
          <svg:text class="nz-graph-edge-text" text-anchor="middle" dy="10">
            <textPath [attr.href]="'#' + id" startOffset="50%">{{ edge.label }}</textPath>
          </svg:text>
        }
      </svg:g>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    edge: [{
      type: Input
    }],
    edgeType: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var _NzGraphEdgeDirective = class _NzGraphEdgeDirective {
};
_NzGraphEdgeDirective.ɵfac = function NzGraphEdgeDirective_Factory(t4) {
  return new (t4 || _NzGraphEdgeDirective)();
};
_NzGraphEdgeDirective.ɵdir = ɵɵdefineDirective({
  type: _NzGraphEdgeDirective,
  selectors: [["", "nzGraphEdge", ""]],
  exportAs: ["nzGraphEdge"],
  standalone: true
});
var NzGraphEdgeDirective = _NzGraphEdgeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphEdgeDirective, [{
    type: Directive,
    args: [{
      selector: "[nzGraphEdge]",
      exportAs: "nzGraphEdge",
      standalone: true
    }]
  }], null, null);
})();
var _NzGraphGroupNodeDirective = class _NzGraphGroupNodeDirective {
};
_NzGraphGroupNodeDirective.ɵfac = function NzGraphGroupNodeDirective_Factory(t4) {
  return new (t4 || _NzGraphGroupNodeDirective)();
};
_NzGraphGroupNodeDirective.ɵdir = ɵɵdefineDirective({
  type: _NzGraphGroupNodeDirective,
  selectors: [["", "nzGraphGroupNode", ""]],
  exportAs: ["nzGraphGroupNode"],
  standalone: true
});
var NzGraphGroupNodeDirective = _NzGraphGroupNodeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphGroupNodeDirective, [{
    type: Directive,
    args: [{
      selector: "[nzGraphGroupNode]",
      exportAs: "nzGraphGroupNode",
      standalone: true
    }]
  }], null, null);
})();
var FRAC_VIEWPOINT_AREA = 0.8;
var Minimap = class {
  constructor(ngZone, svg, zoomG, mainZoom, minimap, maxWidth, labelPadding) {
    this.ngZone = ngZone;
    this.svg = svg;
    this.zoomG = zoomG;
    this.mainZoom = mainZoom;
    this.minimap = minimap;
    this.maxWidth = maxWidth;
    this.labelPadding = labelPadding;
    this.unlisteners = [];
    const minimapElement = select_default2(minimap);
    const minimapSvgElement = minimapElement.select("svg");
    const viewpointElement = minimapSvgElement.select("rect");
    this.canvas = minimapElement.select("canvas.viewport").node();
    this.canvasRect = this.canvas.getBoundingClientRect();
    const handleEvent = (event) => {
      const minimapOffset = this.minimapOffset();
      const width = Number(viewpointElement.attr("width"));
      const height = Number(viewpointElement.attr("height"));
      const clickCoords = pointer_default(event, minimapSvgElement.node());
      this.viewpointCoord.x = clickCoords[0] - width / 2 - minimapOffset.x;
      this.viewpointCoord.y = clickCoords[1] - height / 2 - minimapOffset.y;
      this.updateViewpoint();
    };
    this.viewpointCoord = {
      x: 0,
      y: 0
    };
    const subject = drag_default().subject(Object);
    const dragEvent = subject.on("drag", handleEvent);
    viewpointElement.datum(this.viewpointCoord).call(dragEvent);
    minimapSvgElement.on("click", (event) => {
      if (event.defaultPrevented) {
        return;
      }
      handleEvent(event);
    });
    this.unlisteners.push(() => {
      subject.on("drag", null);
      minimapSvgElement.on("click", null);
    });
    this.viewpoint = viewpointElement.node();
    this.minimapSvg = minimapSvgElement.node();
    this.canvasBuffer = minimapElement.select("canvas.buffer").node();
    this.update();
  }
  destroy() {
    while (this.unlisteners.length) {
      this.unlisteners.pop()();
    }
  }
  minimapOffset() {
    return {
      x: (this.canvasRect.width - this.minimapSize.width) / 2,
      y: (this.canvasRect.height - this.minimapSize.height) / 2
    };
  }
  updateViewpoint() {
    select_default2(this.viewpoint).attr("x", this.viewpointCoord.x).attr("y", this.viewpointCoord.y);
    const mainX = -this.viewpointCoord.x * this.scaleMain / this.scaleMinimap;
    const mainY = -this.viewpointCoord.y * this.scaleMain / this.scaleMinimap;
    select_default2(this.svg).call(this.mainZoom.transform, identity2.translate(mainX, mainY).scale(this.scaleMain));
  }
  update() {
    let sceneSize = null;
    try {
      sceneSize = this.zoomG.getBBox();
      if (sceneSize.width === 0) {
        return;
      }
    } catch (e8) {
      return;
    }
    const svgSelection = select_default2(this.svg);
    let stylesText = "";
    for (const k3 of new Array(document.styleSheets.length).keys()) {
      try {
        const cssRules = document.styleSheets[k3].cssRules || document.styleSheets[k3].rules;
        if (cssRules == null) {
          continue;
        }
        for (const i2 of new Array(cssRules.length).keys()) {
          stylesText += `${cssRules[i2].cssText.replace(/ ?tf-[\w-]+ ?/g, "")}
`;
        }
      } catch (e8) {
        if (e8.name !== "SecurityError") {
          throw e8;
        }
      }
    }
    const svgStyle = svgSelection.append("style");
    svgStyle.text(stylesText);
    const zoomGSelection = select_default2(this.zoomG);
    const zoomTransform = zoomGSelection.attr("transform");
    zoomGSelection.attr("transform", null);
    sceneSize.height += this.labelPadding * 2;
    sceneSize.width += this.labelPadding * 2;
    svgSelection.attr("width", sceneSize.width).attr("height", sceneSize.height);
    this.scaleMinimap = this.maxWidth / Math.max(sceneSize.width, sceneSize.height);
    this.minimapSize = {
      width: sceneSize.width * this.scaleMinimap,
      height: sceneSize.height * this.scaleMinimap
    };
    const minimapOffset = this.minimapOffset();
    select_default2(this.minimapSvg).attr(this.minimapSize);
    select_default2(this.canvasBuffer).attr(this.minimapSize);
    if (this.translate != null && this.zoom != null) {
      this.ngZone.runOutsideAngular(() => reqAnimFrame(() => this.zoom()));
    }
    const svgXml = new XMLSerializer().serializeToString(this.svg);
    svgStyle.remove();
    svgSelection.attr("width", "100%").attr("height", "100%");
    zoomGSelection.attr("transform", zoomTransform);
    const image = document.createElement("img");
    const onLoad = () => {
      const context = this.canvasBuffer.getContext("2d");
      context.clearRect(0, 0, this.canvasBuffer.width, this.canvasBuffer.height);
      context.drawImage(image, minimapOffset.x, minimapOffset.y, this.minimapSize.width, this.minimapSize.height);
      this.ngZone.runOutsideAngular(() => {
        reqAnimFrame(() => {
          select_default2(this.canvasBuffer).style("display", "block");
          select_default2(this.canvas).style("display", "none");
          [this.canvas, this.canvasBuffer] = [this.canvasBuffer, this.canvas];
        });
      });
    };
    image.addEventListener("load", onLoad);
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgXml)}`;
    this.unlisteners.push(() => {
      image.removeEventListener("load", onLoad);
    });
  }
  /**
   * Handles changes in zooming/panning. Should be called from the main svg
   * to notify that a zoom/pan was performed and this minimap will update it's
   * viewpoint rectangle.
   *
   * @param transform
   */
  zoom(transform2) {
    if (this.scaleMinimap == null) {
      return;
    }
    if (transform2) {
      this.translate = [transform2.x, transform2.y];
      this.scaleMain = transform2.k;
    }
    const svgRect = this.svg.getBoundingClientRect();
    const minimapOffset = this.minimapOffset();
    const viewpointSelection = select_default2(this.viewpoint);
    this.viewpointCoord.x = -this.translate[0] * this.scaleMinimap / this.scaleMain;
    this.viewpointCoord.y = -this.translate[1] * this.scaleMinimap / this.scaleMain;
    const viewpointWidth = svgRect.width * this.scaleMinimap / this.scaleMain;
    const viewpointHeight = svgRect.height * this.scaleMinimap / this.scaleMain;
    viewpointSelection.attr("x", this.viewpointCoord.x + minimapOffset.x).attr("y", this.viewpointCoord.y + minimapOffset.y).attr("width", viewpointWidth).attr("height", viewpointHeight);
    const mapWidth = this.minimapSize.width;
    const mapHeight = this.minimapSize.height;
    const x3 = this.viewpointCoord.x;
    const y3 = this.viewpointCoord.y;
    const w2 = Math.min(Math.max(0, x3 + viewpointWidth), mapWidth) - Math.min(Math.max(0, x3), mapWidth);
    const h2 = Math.min(Math.max(0, y3 + viewpointHeight), mapHeight) - Math.min(Math.max(0, y3), mapHeight);
    const fracIntersect = w2 * h2 / (mapWidth * mapHeight);
    if (fracIntersect < FRAC_VIEWPOINT_AREA) {
      this.minimap.classList.remove("hidden");
    } else {
      this.minimap.classList.add("hidden");
    }
  }
};
var _NzGraphMinimapComponent = class _NzGraphMinimapComponent {
  constructor(elementRef, ngZone) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
  }
  ngOnDestroy() {
    this.minimap?.destroy();
  }
  init(containerEle, zoomBehavior) {
    const svgEle = containerEle.nativeElement.querySelector("svg");
    const zoomEle = containerEle.nativeElement.querySelector("svg > g");
    this.minimap = new Minimap(this.ngZone, svgEle, zoomEle, zoomBehavior, this.elementRef.nativeElement, 150, 0);
  }
  zoom(transform2) {
    this.minimap?.zoom(transform2);
  }
  update() {
    this.minimap?.update();
  }
};
_NzGraphMinimapComponent.ɵfac = function NzGraphMinimapComponent_Factory(t4) {
  return new (t4 || _NzGraphMinimapComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_NzGraphMinimapComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzGraphMinimapComponent,
  selectors: [["nz-graph-minimap"]],
  hostVars: 2,
  hostBindings: function NzGraphMinimapComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("nz-graph-minimap", true);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 10,
  vars: 0,
  consts: [["id", "minimapDropShadow", "x", "-20%", "y", "-20%", "width", "150%", "height", "150%"], ["result", "offOut", "in", "SourceGraphic", "dx", "1", "dy", "1"], ["result", "matrixOut", "in", "offOut", "type", "matrix", "values", "0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.5 0"], ["result", "blurOut", "in", "matrixOut", "stdDeviation", "2"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], [1, "viewport"], [1, "buffer"]],
  template: function NzGraphMinimapComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg")(1, "defs")(2, "filter", 0);
      ɵɵelement(3, "feOffset", 1)(4, "feColorMatrix", 2)(5, "feGaussianBlur", 3)(6, "feBlend", 4);
      ɵɵelementEnd()();
      ɵɵelement(7, "rect");
      ɵɵelementEnd();
      ɵɵnamespaceHTML();
      ɵɵelement(8, "canvas", 5)(9, "canvas", 6);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzGraphMinimapComponent = _NzGraphMinimapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphMinimapComponent, [{
    type: Component,
    args: [{
      selector: "nz-graph-minimap",
      template: `
    <svg>
      <defs>
        <filter id="minimapDropShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feOffset result="offOut" in="SourceGraphic" dx="1" dy="1"></feOffset>
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.1 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2"></feGaussianBlur>
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
        </filter>
      </defs>
      <rect></rect>
    </svg>
    <canvas class="viewport"></canvas>
    <!-- Additional canvas to use as buffer to avoid flickering between updates -->
    <canvas class="buffer"></canvas>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.nz-graph-minimap]": "true"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var NzGraph = class {
};
var _NzGraphNodeComponent = class _NzGraphNodeComponent {
  constructor(ngZone, el, builder, renderer2, graphComponent) {
    this.ngZone = ngZone;
    this.el = el;
    this.builder = builder;
    this.renderer2 = renderer2;
    this.graphComponent = graphComponent;
    this.animationInfo = null;
    this.initialState = true;
    this.destroy$ = new Subject();
    this.animationPlayer = null;
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.el.nativeElement, "click").pipe(filter((event) => {
        event.preventDefault();
        return this.graphComponent.nzNodeClick.observers.length > 0;
      }), takeUntil(this.destroy$)).subscribe(() => {
        this.ngZone.run(() => this.graphComponent.nzNodeClick.emit(this.node));
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  makeAnimation() {
    const cur = this.getAnimationInfo();
    if (this.animationPlayer) {
      this.animationPlayer.destroy();
    }
    let animationFactory;
    const pre = __spreadValues({}, this.animationInfo);
    if (this.initialState) {
      animationFactory = this.builder.build([style({
        transform: `translate(${cur.x}px, ${cur.y}px)`
      }), query("g", [style({
        width: `${cur.width}px`,
        height: `${cur.height}px`
      })])]);
      this.initialState = false;
    } else {
      animationFactory = this.builder.build([style({
        transform: `translate(${pre.x}px, ${pre.y}px)`
      }), query("g", [style({
        width: `${pre.width}px`,
        height: `${pre.height}px`
      })]), group([query("g", [animate("150ms ease-out", style({
        width: `${cur.width}px`,
        height: `${cur.height}px`
      }))]), animate("150ms ease-out", style({
        transform: `translate(${cur.x}px, ${cur.y}px)`
      }))])]);
    }
    this.animationInfo = cur;
    this.animationPlayer = animationFactory.create(this.el.nativeElement);
    this.animationPlayer.play();
    const done$ = new Subject();
    this.animationPlayer.onDone(() => {
      this.renderer2.setAttribute(this.el.nativeElement, "transform", `translate(${cur.x}, ${cur.y})`);
      done$.next();
      done$.complete();
    });
    return done$.asObservable();
  }
  makeNoAnimation() {
    const cur = this.getAnimationInfo();
    this.renderer2.setAttribute(this.el.nativeElement, "transform", `translate(${cur.x}, ${cur.y})`);
  }
  getAnimationInfo() {
    const {
      x: x3,
      y: y3
    } = this.nodeTransform();
    return {
      width: this.node.width,
      height: this.node.height,
      x: x3,
      y: y3
    };
  }
  nodeTransform() {
    const x3 = this.computeCXPositionOfNodeShape() - this.node.width / 2;
    const y3 = this.node.y - this.node.height / 2;
    return {
      x: x3,
      y: y3
    };
  }
  computeCXPositionOfNodeShape() {
    if (this.node.expanded) {
      return this.node.x;
    }
    return this.node.x - this.node.width / 2 + this.node.coreBox.width / 2;
  }
};
_NzGraphNodeComponent.ɵfac = function NzGraphNodeComponent_Factory(t4) {
  return new (t4 || _NzGraphNodeComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzGraph));
};
_NzGraphNodeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzGraphNodeComponent,
  selectors: [["", "nz-graph-node", ""]],
  hostVars: 7,
  hostBindings: function NzGraphNodeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.node.id || ctx.node.name);
      ɵɵclassProp("nz-graph-node-expanded", ctx.node.expanded)("nz-graph-group-node", ctx.node.type === 0)("nz-graph-base-node", ctx.node.type === 1);
    }
  },
  inputs: {
    node: "node",
    noAnimation: [InputFlags.HasDecoratorInputTransform, "noAnimation", "noAnimation", booleanAttribute],
    customTemplate: "customTemplate"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 3,
  vars: 1,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "nz-graph-node-rect"], ["x", "10", "y", "20"]],
  template: function NzGraphNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "g");
      ɵɵtemplate(1, NzGraphNodeComponent_Conditional_1_Template, 1, 4, ":svg:ng-container", 0)(2, NzGraphNodeComponent_Conditional_2_Template, 3, 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.customTemplate ? 1 : 2);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzGraphNodeComponent = _NzGraphNodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphNodeComponent, [{
    type: Component,
    args: [{
      selector: "[nz-graph-node]",
      template: `
    <svg:g>
      @if (customTemplate) {
        <ng-container [ngTemplateOutlet]="customTemplate" [ngTemplateOutletContext]="{ $implicit: node }" />
      } @else {
        <svg:rect class="nz-graph-node-rect" [attr.width]="node.width" [attr.height]="node.height"></svg:rect>
        <svg:text x="10" y="20">{{ node.id || node.name }}</svg:text>
      }
    </svg:g>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[id]": "node.id || node.name",
        "[class.nz-graph-node-expanded]": "node.expanded",
        "[class.nz-graph-group-node]": "node.type===0",
        "[class.nz-graph-base-node]": "node.type===1"
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: AnimationBuilder
  }, {
    type: Renderer2
  }, {
    type: NzGraph
  }], {
    node: [{
      type: Input
    }],
    noAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customTemplate: [{
      type: Input
    }]
  });
})();
var _NzGraphNodeDirective = class _NzGraphNodeDirective {
};
_NzGraphNodeDirective.ɵfac = function NzGraphNodeDirective_Factory(t4) {
  return new (t4 || _NzGraphNodeDirective)();
};
_NzGraphNodeDirective.ɵdir = ɵɵdefineDirective({
  type: _NzGraphNodeDirective,
  selectors: [["", "nzGraphNode", ""]],
  exportAs: ["nzGraphNode"],
  standalone: true
});
var NzGraphNodeDirective = _NzGraphNodeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphNodeDirective, [{
    type: Directive,
    args: [{
      selector: "[nzGraphNode]",
      exportAs: "nzGraphNode",
      standalone: true
    }]
  }], null, null);
})();
var calculateTransform = (containerEle, targetEle, scale) => {
  const containerEleSize = containerEle.getBoundingClientRect();
  const targetEleSize = targetEle.getBBox();
  if (!targetEleSize.width) {
    return null;
  }
  const scaleUnit = (containerEleSize.width - 48) / containerEleSize.width;
  const k3 = scale || Math.min(containerEleSize.width / targetEleSize.width, containerEleSize.height / targetEleSize.height, 1) * scaleUnit;
  const x3 = (containerEleSize.width - targetEleSize.width * k3) / 2;
  const y3 = (containerEleSize.height - targetEleSize.height * k3) / 2;
  return {
    x: x3,
    y: y3,
    k: k3
  };
};
var _NzGraphZoomDirective = class _NzGraphZoomDirective {
  constructor(element, cdr) {
    this.element = element;
    this.cdr = cdr;
    this.nzMinZoom = 0.1;
    this.nzMaxZoom = 10;
    this.nzTransformEvent = new EventEmitter();
    this.nzZoomChange = new EventEmitter();
    this.destroy$ = new Subject();
  }
  ngAfterViewInit() {
    this.bind();
  }
  ngOnDestroy() {
    this.unbind();
    this.destroy$.next();
    this.destroy$.complete();
  }
  bind() {
    this.svgElement = this.element.nativeElement.querySelector("svg");
    this.gZoomElement = this.element.nativeElement.querySelector("svg > g");
    const {
      width,
      height
    } = this.element.nativeElement.getBoundingClientRect();
    this.svgSelection = transition().selection().select(() => this.svgElement);
    this.zoomBehavior = zoom_default2().extent([[0, 0], [width, height]]).scaleExtent([this.nzMinZoom, this.nzMaxZoom]).on("zoom", (e8) => {
      this.zoomed(e8);
    });
    this.svgSelection.call(this.zoomBehavior, identity2.translate(0, 0).scale(this.nzZoom || 1));
    this.reScale(0, this.nzZoom);
  }
  unbind() {
    this.svgSelection?.interrupt().selectAll("*").interrupt();
    if (this.zoomBehavior) {
      this.zoomBehavior.on("end", null).on("zoom", null);
    }
  }
  // Methods
  fitCenter(duration = 0) {
    this.reScale(duration);
  }
  focus(id2, duration = 0) {
    if (!this.svgElement.getElementById(`${id2}`)) {
      return;
    }
    const node = this.svgElement.getElementById(`${id2}`);
    const svgRect = this.svgElement.getBoundingClientRect();
    const position = this.getRelativePositionInfo(node);
    const svgTransform = transform(this.svgElement);
    const centerX = (position.topLeft.x + position.bottomRight.x) / 2;
    const centerY = (position.topLeft.y + position.bottomRight.y) / 2;
    const dx = svgRect.left + svgRect.width / 2 - centerX;
    const dy = svgRect.top + svgRect.height / 2 - centerY;
    this.svgSelection.transition().duration(duration).call(this.zoomBehavior.translateBy, dx / svgTransform.k, dy / svgTransform.k);
  }
  /**
   * Handle zoom event
   *
   * @param transform
   */
  zoomed({
    transform: transform2
  }) {
    const {
      x: x3,
      y: y3,
      k: k3
    } = transform2;
    this.gZoomElement.setAttribute("transform", `translate(${x3}, ${y3})scale(${k3})`);
    this.nzZoom = k3;
    this.nzZoomChange.emit(this.nzZoom);
    this.nzTransformEvent.emit(transform2);
    this.cdr.markForCheck();
  }
  /**
   * Scale with zoom and duration
   *
   * @param duration
   * @param scale
   * @private
   */
  reScale(duration, scale) {
    const transform2 = calculateTransform(this.svgElement, this.gZoomElement, scale);
    if (!transform2) {
      return;
    }
    const {
      x: x3,
      y: y3,
      k: k3
    } = transform2;
    const zTransform = identity2.translate(x3, y3).scale(Math.max(k3, this.nzMinZoom));
    this.svgSelection.transition().duration(duration).call(this.zoomBehavior.transform, zTransform).on("end.fitted", () => {
      this.zoomBehavior.on("end.fitted", null);
    });
  }
  getRelativePositionInfo(node) {
    const nodeBox = node.getBBox();
    const nodeCtm = node.getScreenCTM();
    let pointTL = this.svgElement.createSVGPoint();
    let pointBR = this.svgElement.createSVGPoint();
    pointTL.x = nodeBox.x;
    pointTL.y = nodeBox.y;
    pointBR.x = nodeBox.x + nodeBox.width;
    pointBR.y = nodeBox.y + nodeBox.height;
    pointTL = pointTL.matrixTransform(nodeCtm);
    pointBR = pointBR.matrixTransform(nodeCtm);
    return {
      topLeft: pointTL,
      bottomRight: pointBR
    };
  }
};
_NzGraphZoomDirective.ɵfac = function NzGraphZoomDirective_Factory(t4) {
  return new (t4 || _NzGraphZoomDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzGraphZoomDirective.ɵdir = ɵɵdefineDirective({
  type: _NzGraphZoomDirective,
  selectors: [["", "nz-graph-zoom", ""]],
  inputs: {
    nzZoom: [InputFlags.HasDecoratorInputTransform, "nzZoom", "nzZoom", numberAttributeWithOneFallback],
    nzMinZoom: "nzMinZoom",
    nzMaxZoom: "nzMaxZoom"
  },
  outputs: {
    nzTransformEvent: "nzTransformEvent",
    nzZoomChange: "nzZoomChange"
  },
  exportAs: ["nzGraphZoom"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var NzGraphZoomDirective = _NzGraphZoomDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphZoomDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-graph-zoom]",
      exportAs: "nzGraphZoom",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    nzZoom: [{
      type: Input,
      args: [{
        transform: numberAttributeWithOneFallback
      }]
    }],
    nzMinZoom: [{
      type: Input
    }],
    nzMaxZoom: [{
      type: Input
    }],
    nzTransformEvent: [{
      type: Output
    }],
    nzZoomChange: [{
      type: Output
    }]
  });
})();
function isDataSource(value) {
  return value && typeof value.connect === "function";
}
var _NzGraphComponent = class _NzGraphComponent {
  constructor(cdr, elementRef) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.nzRankDirection = "LR";
    this.nzAutoSize = false;
    this.nzGraphInitialized = new EventEmitter();
    this.nzGraphRendered = new EventEmitter();
    this.nzNodeClick = new EventEmitter();
    this.requestId = -1;
    this.transformStyle = "";
    this.graphRenderedSubject$ = new ReplaySubject(1);
    this.renderInfo = {
      labelHeight: 0
    };
    this.mapOfNodeAttr = {};
    this.mapOfEdgeAttr = {};
    this.zoom = 1;
    this.typedNodes = nzTypeDefinition();
    this.layoutSetting = NZ_GRAPH_LAYOUT_SETTING;
    this.destroy$ = new Subject();
    this.edgeTrackByFun = (edge) => `${edge.v}-${edge.w}`;
    this.subGraphTransform = (node) => {
      const x3 = node.x - node.coreBox.width / 2;
      const y3 = node.y - node.height / 2 + node.paddingTop;
      return `translate(${x3}, ${y3})`;
    };
    this.$asNzGraphEdges = (data) => data;
    this.coreTransform = (node) => `translate(0, ${node.parentNodeName ? node.labelHeight : 0})`;
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.nzGraphZoom = inject(NzGraphZoomDirective, {
      optional: true
    });
  }
  ngOnInit() {
    this.graphRenderedSubject$.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
      if (!this.nzGraphZoom) {
        this.fitCenter();
      }
      this.nzGraphInitialized.emit(this);
    });
  }
  ngOnChanges(changes) {
    const {
      nzAutoFit,
      nzRankDirection,
      nzGraphData,
      nzGraphLayoutConfig
    } = changes;
    if (nzGraphLayoutConfig) {
      this.layoutSetting = this.mergeConfig(nzGraphLayoutConfig.currentValue);
    }
    if (nzGraphData) {
      if (this.dataSource !== this.nzGraphData) {
        this._switchDataSource(this.nzGraphData);
      }
    }
    if (nzAutoFit && !nzAutoFit.firstChange || nzRankDirection && !nzRankDirection.firstChange) {
      if (this.dataSource.dataSource) {
        this.drawGraph(this.dataSource.dataSource, {
          rankDirection: this.nzRankDirection,
          expanded: this.dataSource.expansionModel.selected || []
        }).then(() => {
          this.cdr.markForCheck();
        });
      }
    }
    this.cdr.markForCheck();
  }
  ngAfterContentChecked() {
    if (this.dataSource && !this._dataSubscription) {
      this.observeRenderChanges();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.dataSource && typeof this.dataSource.disconnect === "function") {
      this.dataSource.disconnect();
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    cancelRequestAnimationFrame(this.requestId);
  }
  /**
   * Move graph to center and scale automatically
   */
  fitCenter() {
    const {
      x: x3,
      y: y3,
      k: k3
    } = calculateTransform(this.elementRef.nativeElement.querySelector("svg"), this.elementRef.nativeElement.querySelector("svg > g"));
    if (k3) {
      this.zoom = k3;
      this.transformStyle = `translate(${x3}, ${y3})scale(${k3})`;
    }
    this.cdr.markForCheck();
  }
  /**
   * re-Draw graph
   *
   * @param data
   * @param options
   * @param needResize
   */
  drawGraph(data, options, needResize = false) {
    return new Promise((resolve) => {
      this.requestId = requestAnimationFrame(() => {
        const renderInfo = this.buildGraphInfo(data, options);
        this.renderInfo = renderInfo;
        this.cdr.markForCheck();
        this.requestId = requestAnimationFrame(() => {
          this.drawNodes(!this.noAnimation?.nzNoAnimation).then(() => {
            this.cdr.markForCheck();
            if (needResize) {
              this.resizeNodeSize().then(() => {
                const dataSource = this.dataSource.dataSource;
                this.drawGraph(dataSource, options, false).then(() => resolve());
              });
            } else {
              this.graphRenderedSubject$.next();
              this.nzGraphRendered.emit(this);
              resolve();
            }
          });
        });
      });
      this.cdr.markForCheck();
    });
  }
  /**
   * Redraw all nodes
   *
   * @param animate
   */
  drawNodes(animate2 = true) {
    return new Promise((resolve) => {
      if (animate2) {
        this.makeNodesAnimation().subscribe(() => {
          resolve();
        });
      } else {
        this.listOfNodeComponent.map((node) => {
          node.makeNoAnimation();
        });
        resolve();
      }
    });
  }
  resizeNodeSize() {
    return new Promise((resolve) => {
      const dataSource = this.dataSource.dataSource;
      let scale = this.nzGraphZoom?.nzZoom || this.zoom || 1;
      this.listOfNodeElement.forEach((nodeEle) => {
        const contentEle = nodeEle.nativeElement;
        if (contentEle) {
          let width;
          let height;
          const clientRect = contentEle.querySelector("foreignObject > :first-child")?.getBoundingClientRect();
          if (clientRect) {
            width = clientRect.width;
            height = clientRect.height;
          } else {
            const bBoxRect = contentEle.getBBox();
            width = bBoxRect.width;
            height = bBoxRect.height;
            scale = 1;
          }
          const node = dataSource.nodes.find((n2) => `${n2.id}` === nodeEle.nativeElement.id);
          if (node && width && height) {
            node.height = height / scale;
            node.width = width / scale;
          }
        }
      });
      resolve();
    });
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this.dataSource && typeof this.dataSource.disconnect === "function") {
      this.nzGraphData.disconnect();
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    this.dataSource = dataSource;
    this.observeRenderChanges();
  }
  /** Set up a subscription for the data provided by the data source. */
  observeRenderChanges() {
    let dataStream;
    let graphOptions = {
      rankDirection: this.nzRankDirection
    };
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect();
    }
    if (dataStream) {
      this._dataSubscription = dataStream.pipe(takeUntil(this.destroy$)).subscribe((data) => {
        graphOptions = {
          rankDirection: this.nzRankDirection,
          expanded: this.nzGraphData.expansionModel.selected
        };
        this.drawGraph(data, graphOptions, this.nzAutoSize).then(() => {
          this.cdr.detectChanges();
        });
      });
    } else {
      throw Error(`A valid data source must be provided.`);
    }
  }
  /**
   * Get renderInfo and prepare some data
   *
   * @param data
   * @param options
   * @private
   */
  buildGraphInfo(data, options) {
    this.parseInfo(data);
    const renderInfo = uc(data, options, this.layoutSetting);
    const dig = (nodes) => {
      nodes.forEach((node) => {
        const {
          x: x3,
          y: y3
        } = node;
        node.xOffset = x3;
        node.yOffset = y3;
        if (node.type === 1 && this.mapOfNodeAttr.hasOwnProperty(node.name)) {
          Object.assign(node, this.mapOfNodeAttr[node.name]);
        } else if (node.type === 0) {
          node.edges.forEach((edge) => {
            if (this.mapOfEdgeAttr.hasOwnProperty(`${edge.v}-${edge.w}`)) {
              Object.assign(edge, this.mapOfEdgeAttr[`${edge.v}-${edge.w}`]);
            }
          });
          dig(node.nodes);
        }
      });
    };
    dig(renderInfo.nodes);
    renderInfo.edges.forEach((edge) => {
      if (this.mapOfEdgeAttr.hasOwnProperty(`${edge.v}-${edge.w}`)) {
        Object.assign(edge, this.mapOfEdgeAttr[`${edge.v}-${edge.w}`]);
      }
    });
    return renderInfo;
  }
  /**
   * Play with animation
   *
   * @private
   */
  makeNodesAnimation() {
    return forkJoin(this.listOfNodeComponent.map((node) => node.makeAnimation())).pipe(finalize(() => {
      this.cdr.detectChanges();
    }));
  }
  parseInfo(data) {
    data.nodes.forEach((n2) => {
      this.mapOfNodeAttr[n2.id] = n2;
    });
    data.edges.forEach((e8) => {
      this.mapOfEdgeAttr[`${e8.v}-${e8.w}`] = e8;
    });
  }
  /**
   * Merge config with user inputs
   *
   * @param config
   * @private
   */
  mergeConfig(config) {
    const graphMeta = config?.layout || {};
    const subSceneMeta = config?.subScene || {};
    const defaultNodeMeta = config?.defaultNode || {};
    const defaultCompoundNodeMeta = config?.defaultCompoundNode || {};
    const bridge = NZ_GRAPH_LAYOUT_SETTING.nodeSize.bridge;
    const graph = {
      meta: __spreadValues(__spreadValues({}, NZ_GRAPH_LAYOUT_SETTING.graph.meta), graphMeta)
    };
    const subScene = {
      meta: __spreadValues(__spreadValues({}, NZ_GRAPH_LAYOUT_SETTING.subScene.meta), subSceneMeta)
    };
    const nodeSize = {
      meta: __spreadValues(__spreadValues({}, NZ_GRAPH_LAYOUT_SETTING.nodeSize.meta), defaultCompoundNodeMeta),
      node: __spreadValues(__spreadValues({}, NZ_GRAPH_LAYOUT_SETTING.nodeSize.node), defaultNodeMeta),
      bridge
    };
    return {
      graph,
      subScene,
      nodeSize
    };
  }
};
_NzGraphComponent.ɵfac = function NzGraphComponent_Factory(t4) {
  return new (t4 || _NzGraphComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
_NzGraphComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzGraphComponent,
  selectors: [["nz-graph"]],
  contentQueries: function NzGraphComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzGraphNodeDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzGraphGroupNodeDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzGraphEdgeDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t2;
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.nodeTemplate = _t2.first);
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.groupNodeTemplate = _t2.first);
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.customGraphEdgeTemplate = _t2.first);
    }
  },
  viewQuery: function NzGraphComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzGraphNodeComponent, 5, ElementRef);
      ɵɵviewQuery(NzGraphNodeComponent, 5);
    }
    if (rf & 2) {
      let _t2;
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.listOfNodeElement = _t2);
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.listOfNodeComponent = _t2);
    }
  },
  hostVars: 4,
  hostBindings: function NzGraphComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("nz-graph", true)("nz-graph-auto-size", ctx.nzAutoSize);
    }
  },
  inputs: {
    nzGraphData: "nzGraphData",
    nzRankDirection: "nzRankDirection",
    nzGraphLayoutConfig: "nzGraphLayoutConfig",
    nzAutoSize: [InputFlags.HasDecoratorInputTransform, "nzAutoSize", "nzAutoSize", booleanAttribute]
  },
  outputs: {
    nzGraphInitialized: "nzGraphInitialized",
    nzGraphRendered: "nzGraphRendered",
    nzNodeClick: "nzNodeClick"
  },
  exportAs: ["nzGraph"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NzGraph,
    useExisting: _NzGraphComponent
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 7,
  vars: 5,
  consts: [["groupTemplate", ""], ["width", "100%", "height", "100%"], ["nz-graph-defs", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "core"], [1, "nz-graph-edges"], ["nz-graph-edge", "", 1, "nz-graph-edge", 3, "edge", "edgeType", "customTemplate"], [1, "nz-graph-nodes"], ["nz-graph-node", "", 1, "nz-graph-node", 3, "node", "customTemplate"]],
  template: function NzGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1);
      ɵɵelement(2, "defs", 2);
      ɵɵelementStart(3, "g");
      ɵɵelementContainer(4, 3);
      ɵɵelementEnd()();
      ɵɵtemplate(5, NzGraphComponent_ng_template_5_Template, 8, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const groupTemplate_r4 = ɵɵreference(6);
      ɵɵadvance(3);
      ɵɵattribute("transform", ctx.transformStyle);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", groupTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c5, ctx.renderInfo));
    }
  },
  dependencies: [NgTemplateOutlet, NzGraphEdgeComponent, NzGraphNodeComponent, NzGraphDefsComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzGraphComponent = _NzGraphComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-graph",
      exportAs: "nzGraph",
      providers: [{
        provide: NzGraph,
        useExisting: NzGraphComponent
      }],
      template: `
    <ng-content></ng-content>
    <svg width="100%" height="100%">
      <svg:defs nz-graph-defs></svg:defs>
      <svg:g [attr.transform]="transformStyle">
        <ng-container
          [ngTemplateOutlet]="groupTemplate"
          [ngTemplateOutletContext]="{ renderNode: renderInfo, type: 'root' }"
        ></ng-container>
      </svg:g>
    </svg>

    <ng-template #groupTemplate let-renderNode="renderNode" let-type="type">
      <svg:g [attr.transform]="type === 'sub' ? subGraphTransform(renderNode) : null">
        <svg:g class="core" [attr.transform]="coreTransform(renderNode)">
          <svg:g class="nz-graph-edges">
            @for (edge of $asNzGraphEdges(renderNode.edges); track edgeTrackByFun(edge)) {
              <g
                class="nz-graph-edge"
                nz-graph-edge
                [edge]="edge"
                [edgeType]="nzGraphLayoutConfig?.defaultEdge?.type"
                [customTemplate]="customGraphEdgeTemplate"
              ></g>
            }
          </svg:g>

          <svg:g class="nz-graph-nodes">
            @for (node of typedNodes(renderNode.nodes); track node.name) {
              @if (node.type === 1) {
                <g class="nz-graph-node" nz-graph-node [node]="node" [customTemplate]="nodeTemplate"></g>
              }

              @if (node.type === 0) {
                <g class="nz-graph-node" nz-graph-node [node]="node" [customTemplate]="groupNodeTemplate"></g>
              }

              @if (node.expanded) {
                <ng-container
                  [ngTemplateOutlet]="groupTemplate"
                  [ngTemplateOutletContext]="{ renderNode: node, type: 'sub' }"
                />
              }
            }
          </svg:g>
        </svg:g>
      </svg:g>
    </ng-template>
  `,
      host: {
        "[class.nz-graph]": "true",
        "[class.nz-graph-auto-size]": "nzAutoSize"
      },
      imports: [NgTemplateOutlet, NzGraphEdgeComponent, NzGraphNodeComponent, NzGraphDefsComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    listOfNodeElement: [{
      type: ViewChildren,
      args: [NzGraphNodeComponent, {
        read: ElementRef
      }]
    }],
    listOfNodeComponent: [{
      type: ViewChildren,
      args: [NzGraphNodeComponent]
    }],
    nodeTemplate: [{
      type: ContentChild,
      args: [NzGraphNodeDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    groupNodeTemplate: [{
      type: ContentChild,
      args: [NzGraphGroupNodeDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    customGraphEdgeTemplate: [{
      type: ContentChild,
      args: [NzGraphEdgeDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    nzGraphData: [{
      type: Input
    }],
    nzRankDirection: [{
      type: Input
    }],
    nzGraphLayoutConfig: [{
      type: Input
    }],
    nzAutoSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGraphInitialized: [{
      type: Output
    }],
    nzGraphRendered: [{
      type: Output
    }],
    nzNodeClick: [{
      type: Output
    }]
  });
})();
var _NzGraphModule = class _NzGraphModule {
};
_NzGraphModule.ɵfac = function NzGraphModule_Factory(t4) {
  return new (t4 || _NzGraphModule)();
};
_NzGraphModule.ɵmod = ɵɵdefineNgModule({
  type: _NzGraphModule,
  imports: [NzGraphComponent, NzGraphMinimapComponent, NzGraphDefsComponent, NzGraphNodeDirective, NzGraphGroupNodeDirective, NzGraphZoomDirective, NzGraphNodeComponent, NzGraphEdgeComponent, NzGraphEdgeDirective],
  exports: [NzGraphComponent, NzGraphMinimapComponent, NzGraphDefsComponent, NzGraphNodeDirective, NzGraphGroupNodeDirective, NzGraphZoomDirective, NzGraphNodeComponent, NzGraphEdgeComponent, NzGraphEdgeDirective]
});
_NzGraphModule.ɵinj = ɵɵdefineInjector({});
var NzGraphModule = _NzGraphModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGraphModule, [{
    type: NgModule,
    args: [{
      imports: [NzGraphComponent, NzGraphMinimapComponent, NzGraphDefsComponent, NzGraphNodeDirective, NzGraphGroupNodeDirective, NzGraphZoomDirective, NzGraphNodeComponent, NzGraphEdgeComponent, NzGraphEdgeDirective],
      exports: [NzGraphComponent, NzGraphMinimapComponent, NzGraphDefsComponent, NzGraphNodeDirective, NzGraphGroupNodeDirective, NzGraphZoomDirective, NzGraphNodeComponent, NzGraphEdgeComponent, NzGraphEdgeDirective]
    }]
  }], null, null);
})();
export {
  NZ_GRAPH_LAYOUT_SETTING,
  NzGraphComponent,
  NzGraphData,
  NzGraphDefsComponent,
  NzGraphEdgeComponent,
  NzGraphEdgeDirective,
  NzGraphEdgeType,
  NzGraphGroupNodeDirective,
  NzGraphMinimapComponent,
  NzGraphModule,
  NzGraphNodeComponent,
  NzGraphNodeDirective,
  NzGraphZoomDirective,
  isDataSource,
  nzTypeDefinition
};
//# sourceMappingURL=ng-zorro-antd_graph.js.map
