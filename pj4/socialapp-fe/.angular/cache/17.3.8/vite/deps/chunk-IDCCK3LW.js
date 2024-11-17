import {
  inputToRGB,
  rgbToHex,
  rgbToHsv
} from "./chunk-PBTJFNNQ.js";
import {
  DomSanitizer
} from "./chunk-SHIUUSE2.js";
import {
  HttpBackend,
  HttpClient
} from "./chunk-C4KMBTLC.js";
import {
  DOCUMENT
} from "./chunk-3RMSGSQC.js";
import {
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Renderer2,
  RendererFactory2,
  SecurityContext,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-RGUNTEJD.js";
import {
  Observable,
  Subject,
  catchError,
  filter,
  finalize,
  map,
  of,
  share,
  take,
  tap
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/@ant-design/colors/es/presets.js
var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
red.primary = red[5];
var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
volcano.primary = volcano[5];
var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
orange.primary = orange[5];
var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
gold.primary = gold[5];
var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
yellow.primary = yellow[5];
var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lime.primary = lime[5];
var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
green.primary = green[5];
var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
cyan.primary = cyan[5];
var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
blue.primary = blue[5];
var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
geekblue.primary = geekblue[5];
var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
purple.primary = purple[5];
var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
magenta.primary = magenta[5];
var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
grey.primary = grey[5];
var redDark = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
redDark.primary = redDark[5];
var volcanoDark = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
volcanoDark.primary = volcanoDark[5];
var orangeDark = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
orangeDark.primary = orangeDark[5];
var goldDark = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
goldDark.primary = goldDark[5];
var yellowDark = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
yellowDark.primary = yellowDark[5];
var limeDark = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
limeDark.primary = limeDark[5];
var greenDark = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
greenDark.primary = greenDark[5];
var cyanDark = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
cyanDark.primary = cyanDark[5];
var blueDark = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
blueDark.primary = blueDark[5];
var geekblueDark = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
geekblueDark.primary = geekblueDark[5];
var purpleDark = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
purpleDark.primary = purpleDark[5];
var magentaDark = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
magentaDark.primary = magentaDark[5];
var greyDark = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
greyDark.primary = greyDark[5];

// node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular.mjs
var ANT_ICON_ANGULAR_CONSOLE_PREFIX = "[@ant-design/icons-angular]:";
function error(message) {
  console.error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
}
function warn(message) {
  if (isDevMode()) {
    console.warn(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
  }
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function withSuffix(name2, theme) {
  switch (theme) {
    case "fill":
      return `${name2}-fill`;
    case "outline":
      return `${name2}-o`;
    case "twotone":
      return `${name2}-twotone`;
    case void 0:
      return name2;
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Theme "${theme}" is not a recognized theme!`);
  }
}
function withSuffixAndColor(name2, theme, pri, sec) {
  return `${withSuffix(name2, theme)}-${pri}-${sec}`;
}
function mapAbbrToTheme(abbr) {
  return abbr === "o" ? "outline" : abbr;
}
function alreadyHasAThemeSuffix(name2) {
  return name2.endsWith("-fill") || name2.endsWith("-o") || name2.endsWith("-twotone");
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && (typeof target.theme === "string" || target.theme === void 0) && typeof target.icon === "string";
}
function getIconDefinitionFromAbbr(str) {
  const arr = str.split("-");
  const theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
  const name2 = arr.join("-");
  return {
    name: name2,
    theme,
    icon: ""
  };
}
function cloneSVG(svg) {
  return svg.cloneNode(true);
}
function replaceFillColor(raw) {
  return raw.replace(/['"]#333['"]/g, '"primaryColor"').replace(/['"]#E6E6E6['"]/g, '"secondaryColor"').replace(/['"]#D9D9D9['"]/g, '"secondaryColor"').replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
function getNameAndNamespace(type) {
  const split = type.split(":");
  switch (split.length) {
    case 1:
      return [type, ""];
    case 2:
      return [split[1], split[0]];
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The icon type ${type} is not valid!`);
  }
}
function hasNamespace(type) {
  return getNameAndNamespace(type)[1] !== "";
}
function NameSpaceIsNotSpecifyError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Type should have a namespace. Try "namespace:${name}".`);
}
function IconNotFoundError(icon) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}the icon ${icon} does not exist or is not registered.`);
}
function HttpModuleNotImport() {
  error(`you need to import "HttpClientModule" to use dynamic importing.`);
  return null;
}
function UrlNotSafeError(url) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The url "${url}" is unsafe.`);
}
function SVGTagNotFoundError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}<svg> tag not found.`);
}
function DynamicLoadingTimeoutError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Importing timeout error.`);
}
var JSONP_HANDLER_NAME = "__ant_icon_load";
var ANT_ICONS = new InjectionToken("ant_icons");
var _IconService = class _IconService {
  set twoToneColor({
    primaryColor,
    secondaryColor
  }) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  }
  get twoToneColor() {
    return __spreadValues({}, this._twoToneColorPalette);
  }
  /**
   * Disable dynamic loading (support static loading only).
   */
  get _disableDynamicLoading() {
    return false;
  }
  constructor(_rendererFactory, _handler, _document, sanitizer, _antIcons) {
    this._rendererFactory = _rendererFactory;
    this._handler = _handler;
    this._document = _document;
    this.sanitizer = sanitizer;
    this._antIcons = _antIcons;
    this.defaultTheme = "outline";
    this._svgDefinitions = /* @__PURE__ */ new Map();
    this._svgRenderedDefinitions = /* @__PURE__ */ new Map();
    this._inProgressFetches = /* @__PURE__ */ new Map();
    this._assetsUrlRoot = "";
    this._twoToneColorPalette = {
      primaryColor: "#333333",
      secondaryColor: "#E6E6E6"
    };
    this._enableJsonpLoading = false;
    this._jsonpIconLoad$ = new Subject();
    this._renderer = this._rendererFactory.createRenderer(null, null);
    if (this._handler) {
      this._http = new HttpClient(this._handler);
    }
    if (this._antIcons) {
      this.addIcon(...this._antIcons);
    }
  }
  /**
   * Call this method to switch to jsonp like loading.
   */
  useJsonpLoading() {
    if (!this._enableJsonpLoading) {
      this._enableJsonpLoading = true;
      window[JSONP_HANDLER_NAME] = (icon) => {
        this._jsonpIconLoad$.next(icon);
      };
    } else {
      warn("You are already using jsonp loading.");
    }
  }
  /**
   * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
   * @param prefix
   */
  changeAssetsSource(prefix) {
    this._assetsUrlRoot = prefix.endsWith("/") ? prefix : prefix + "/";
  }
  /**
   * Add icons provided by ant design.
   * @param icons
   */
  addIcon(...icons) {
    icons.forEach((icon) => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }
  /**
   * Register an icon. Namespace is required.
   * @param type
   * @param literal
   */
  addIconLiteral(type, literal) {
    const [_, namespace] = getNameAndNamespace(type);
    if (!namespace) {
      throw NameSpaceIsNotSpecifyError();
    }
    this.addIcon({
      name: type,
      icon: literal
    });
  }
  /**
   * Remove all cache.
   */
  clear() {
    this._svgDefinitions.clear();
    this._svgRenderedDefinitions.clear();
  }
  /**
   * Get a rendered `SVGElement`.
   * @param icon
   * @param twoToneColor
   */
  getRenderedContent(icon, twoToneColor) {
    const definition = isIconDefinition(icon) ? icon : this._svgDefinitions.get(icon) || null;
    if (!definition && this._disableDynamicLoading) {
      throw IconNotFoundError(icon);
    }
    const $iconDefinition = definition ? of(definition) : this._loadIconDynamically(icon);
    return $iconDefinition.pipe(map((i) => {
      if (!i) {
        throw IconNotFoundError(icon);
      }
      return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
    }));
  }
  getCachedIcons() {
    return this._svgDefinitions;
  }
  /**
   * Get raw svg and assemble a `IconDefinition` object.
   * @param type
   */
  _loadIconDynamically(type) {
    if (!this._http && !this._enableJsonpLoading) {
      return of(HttpModuleNotImport());
    }
    let inProgress = this._inProgressFetches.get(type);
    if (!inProgress) {
      const [name2, namespace] = getNameAndNamespace(type);
      const icon = namespace ? {
        name: type,
        icon: ""
      } : getIconDefinitionFromAbbr(name2);
      const suffix = this._enableJsonpLoading ? ".js" : ".svg";
      const url = (namespace ? `${this._assetsUrlRoot}assets/${namespace}/${name2}` : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}`) + suffix;
      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
      if (!safeUrl) {
        throw UrlNotSafeError(url);
      }
      const source = !this._enableJsonpLoading ? this._http.get(safeUrl, {
        responseType: "text"
      }).pipe(map((literal) => __spreadProps(__spreadValues({}, icon), {
        icon: literal
      }))) : this._loadIconDynamicallyWithJsonp(icon, safeUrl);
      inProgress = source.pipe(tap((definition) => this.addIcon(definition)), finalize(() => this._inProgressFetches.delete(type)), catchError(() => of(null)), share());
      this._inProgressFetches.set(type, inProgress);
    }
    return inProgress;
  }
  _loadIconDynamicallyWithJsonp(icon, url) {
    return new Observable((subscriber) => {
      const loader = this._document.createElement("script");
      const timer = setTimeout(() => {
        clean();
        subscriber.error(DynamicLoadingTimeoutError());
      }, 6e3);
      loader.src = url;
      function clean() {
        loader.parentNode.removeChild(loader);
        clearTimeout(timer);
      }
      this._document.body.appendChild(loader);
      this._jsonpIconLoad$.pipe(filter((i) => i.name === icon.name && i.theme === icon.theme), take(1)).subscribe((i) => {
        subscriber.next(i);
        clean();
      });
    });
  }
  /**
   * Render a new `SVGElement` for a given `IconDefinition`, or make a copy from cache.
   * @param icon
   * @param twoToneColor
   */
  _loadSVGFromCacheOrCreateNew(icon, twoToneColor) {
    let svg;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = icon.theme === "twotone" ? withSuffixAndColor(icon.name, icon.theme, pri, sec) : icon.theme === void 0 ? icon.name : withSuffix(icon.name, icon.theme);
    const cached = this._svgRenderedDefinitions.get(key);
    if (cached) {
      svg = cached.icon;
    } else {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        // Icons provided by ant design should be refined to remove preset colors.
        this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)),
        icon.theme === "twotone",
        pri,
        sec
      ));
      this._svgRenderedDefinitions.set(key, __spreadProps(__spreadValues({}, icon), {
        icon: svg
      }));
    }
    return cloneSVG(svg);
  }
  _createSVGElementFromString(str) {
    const div = this._document.createElement("div");
    div.innerHTML = str;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw SVGTagNotFoundError;
    }
    return svg;
  }
  _setSVGAttribute(svg) {
    this._renderer.setAttribute(svg, "width", "1em");
    this._renderer.setAttribute(svg, "height", "1em");
    return svg;
  }
  _colorizeSVGIcon(svg, twotone, pri, sec) {
    if (twotone) {
      const children = svg.childNodes;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        const child = children[i];
        if (child.getAttribute("fill") === "secondaryColor") {
          this._renderer.setAttribute(child, "fill", sec);
        } else {
          this._renderer.setAttribute(child, "fill", pri);
        }
      }
    }
    this._renderer.setAttribute(svg, "fill", "currentColor");
    return svg;
  }
};
_IconService.ɵfac = function IconService_Factory(t) {
  return new (t || _IconService)(ɵɵinject(RendererFactory2), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(DomSanitizer), ɵɵinject(ANT_ICONS, 8));
};
_IconService.ɵprov = ɵɵdefineInjectable({
  token: _IconService,
  factory: _IconService.ɵfac
});
var IconService = _IconService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconService, [{
    type: Injectable
  }], () => [{
    type: RendererFactory2
  }, {
    type: HttpBackend,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANT_ICONS]
    }]
  }], null);
})();
function checkMeta(prev, after) {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}
var _IconDirective = class _IconDirective {
  constructor(_iconService, _elementRef, _renderer) {
    this._iconService = _iconService;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
  }
  ngOnChanges(changes) {
    if (changes.type || changes.theme || changes.twoToneColor) {
      this._changeIcon();
    }
  }
  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */
  _changeIcon() {
    return new Promise((resolve) => {
      if (!this.type) {
        this._clearSVGElement();
        resolve(null);
        return;
      }
      const beforeMeta = this._getSelfRenderMeta();
      this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe((svg) => {
        const afterMeta = this._getSelfRenderMeta();
        if (checkMeta(beforeMeta, afterMeta)) {
          this._setSVGElement(svg);
          resolve(svg);
        } else {
          resolve(null);
        }
      });
    });
  }
  _getSelfRenderMeta() {
    return {
      type: this.type,
      theme: this.theme,
      twoToneColor: this.twoToneColor
    };
  }
  /**
   * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
   * If namespace is specified, ignore theme because it meaningless for users' icons.
   *
   * @param type
   * @param theme
   */
  _parseIconType(type, theme) {
    if (isIconDefinition(type)) {
      return type;
    } else {
      const [name2, namespace] = getNameAndNamespace(type);
      if (namespace) {
        return type;
      }
      if (alreadyHasAThemeSuffix(name2)) {
        if (!!theme) {
          warn(`'type' ${name2} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }
        return name2;
      } else {
        return withSuffix(name2, theme || this._iconService.defaultTheme);
      }
    }
  }
  _setSVGElement(svg) {
    this._clearSVGElement();
    this._renderer.appendChild(this._elementRef.nativeElement, svg);
  }
  _clearSVGElement() {
    const el = this._elementRef.nativeElement;
    const children = el.childNodes;
    const length = children.length;
    for (let i = length - 1; i >= 0; i--) {
      const child = children[i];
      if (child.tagName?.toLowerCase() === "svg") {
        this._renderer.removeChild(el, child);
      }
    }
  }
};
_IconDirective.ɵfac = function IconDirective_Factory(t) {
  return new (t || _IconDirective)(ɵɵdirectiveInject(IconService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_IconDirective.ɵdir = ɵɵdefineDirective({
  type: _IconDirective,
  selectors: [["", "antIcon", ""]],
  inputs: {
    type: "type",
    theme: "theme",
    twoToneColor: "twoToneColor"
  },
  features: [ɵɵNgOnChangesFeature]
});
var IconDirective = _IconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      selector: "[antIcon]"
    }]
  }], () => [{
    type: IconService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    type: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    twoToneColor: [{
      type: Input
    }]
  });
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  declarations: [IconDirective],
  exports: [IconDirective]
});
_IconModule.ɵinj = ɵɵdefineInjector({
  providers: [IconService]
});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconDirective],
      declarations: [IconDirective],
      providers: [IconService]
    }]
  }], null, null);
})();
var manifest = {
  fill: ["alipay-circle", "amazon-circle", "alipay-square", "amazon-square", "android", "apple", "account-book", "audio", "bank", "aliwangwang", "backward", "appstore", "bell", "behance-circle", "behance-square", "book", "bilibili", "bug", "alert", "box-plot", "bulb", "build", "calendar", "camera", "car", "calculator", "caret-down", "caret-right", "caret-left", "caret-up", "carry-out", "api", "check-circle", "check-square", "chrome", "ci-circle", "clock-circle", "cloud", "code", "code-sandbox-square", "codepen-square", "code-sandbox-circle", "compass", "container", "control", "copyright-circle", "copy", "credit-card", "customer-service", "dashboard", "crown", "database", "delete", "diff", "codepen-circle", "contacts", "dingtalk-circle", "discord", "dislike", "dollar-circle", "close-square", "down-circle", "down-square", "close-circle", "dribbble-square", "dropbox-square", "edit", "environment", "euro-circle", "dingtalk-square", "exclamation-circle", "experiment", "dribbble-circle", "facebook", "fast-backward", "fast-forward", "file-add", "file-excel", "file", "file-exclamation", "file-image", "eye", "file-pdf", "file-text", "file-markdown", "dropbox-circle", "file-word", "file-zip", "filter", "flag", "folder-add", "eye-invisible", "fire", "file-ppt", "format-painter", "folder-open", "frown", "forward", "fund", "gift", "gitlab", "funnel-plot", "github", "google-circle", "gold", "golden", "google-square", "google-plus-circle", "google-plus-square", "heart", "highlight", "hdd", "home", "hourglass", "idcard", "html5", "ie-square", "info-circle", "ie-circle", "file-unknown", "insurance", "instagram", "interaction", "left-circle", "left-square", "layout", "linkedin", "folder", "mail", "like", "medicine-box", "medium-circle", "meh", "merge", "message", "minus-circle", "medium-square", "money-collect", "moon", "muted", "open-a-i", "mobile", "pause-circle", "pay-circle", "phone", "lock", "minus-square", "pie-chart", "notification", "play-circle", "mac-command", "pinterest", "play-square", "plus-square", "printer", "profile", "picture", "pound-circle", "pushpin", "qq-circle", "qq-square", "question-circle", "read", "red-envelope", "reconciliation", "reddit-circle", "reddit-square", "property-safety", "rest", "project", "right-circle", "right-square", "product", "robot", "save", "schedule", "plus-circle", "shop", "safety-certificate", "shopping", "signal", "skype", "slack-circle", "slack-square", "sketch-circle", "sliders", "snippets", "smile", "sound", "security-scan", "signature", "spotify", "star", "step-forward", "step-backward", "stop", "skin", "setting", "sun", "rocket", "tablet", "tag", "tags", "taobao-circle", "taobao-square", "thunderbolt", "tik-tok", "tool", "trademark-circle", "sketch-square", "trophy", "twitch", "twitter-circle", "twitter-square", "unlock", "up-square", "usb", "switcher", "video-camera", "warning", "wechat-work", "weibo-circle", "weibo-square", "truck", "wechat", "youtube", "yuque", "zhihu-circle", "zhihu-square", "x", "yahoo", "wallet", "up-circle", "windows"],
  outline: ["alibaba", "aim", "align-right", "aliwangwang", "account-book", "aliyun", "align-center", "android", "ant-design", "apartment", "api", "amazon", "align-left", "alert", "ant-cloud", "area-chart", "arrow-left", "arrow-down", "appstore-add", "arrow-right", "audio-muted", "appstore", "audio", "arrow-up", "backward", "audit", "baidu", "bank", "bar-chart", "bars", "alipay", "apple", "bell", "bg-colors", "bilibili", "behance", "bold", "border-bottom", "border-inner", "border-horizontal", "border-left", "border", "border-verticle", "border-outer", "border-top", "branches", "box-plot", "arrows-alt", "build", "bulb", "bug", "calendar", "camera", "car", "caret-down", "caret-right", "caret-up", "check-circle", "behance-square", "block", "book", "carry-out", "check-square", "chrome", "ci-circle", "ci", "clear", "border-right", "close-circle", "close", "check", "clock-circle", "cloud-download", "cloud-server", "close-square", "cloud", "cloud-sync", "cluster", "barcode", "code", "code-sandbox", "borderless-table", "codepen-circle", "codepen", "cloud-upload", "column-width", "column-height", "compass", "compress", "coffee", "console-sql", "comment", "container", "calculator", "caret-left", "alipay-circle", "copy", "copyright-circle", "control", "copyright", "crown", "customer-service", "database", "delete-column", "delete", "delete-row", "desktop", "deployment-unit", "dingding", "diff", "contacts", "disconnect", "dislike", "docker", "discord", "dashboard", "dot-chart", "dot-net", "double-left", "double-right", "down-circle", "down", "down-square", "download", "dash", "dollar-circle", "dribbble-square", "ellipsis", "enter", "edit", "drag", "euro-circle", "dropbox", "euro", "delivered-procedure", "exception", "expand", "expand-alt", "environment", "exclamation", "dingtalk", "export", "eye", "facebook", "fall", "field-binary", "fast-backward", "fast-forward", "field-number", "file-done", "file-add", "field-string", "credit-card", "experiment", "file-exclamation", "eye-invisible", "file-gif", "dollar", "field-time", "file-markdown", "file", "file-jpg", "file-search", "file-excel", "file-sync", "file-protect", "file-pdf", "file-word", "file-unknown", "file-text", "filter", "file-ppt", "fire", "flag", "dribbble", "folder-add", "folder", "folder-view", "font-colors", "fork", "form", "font-size", "format-painter", "forward", "fullscreen", "fullscreen-exit", "function", "fund", "funnel-plot", "fund-view", "fund-projection-screen", "gateway", "gif", "gift", "frown", "global", "google", "gold", "google-plus", "harmony-o-s", "group", "heart", "gitlab", "hdd", "heat-map", "folder-open", "github", "home", "hourglass", "html5", "ie", "file-zip", "import", "inbox", "idcard", "insert-row-below", "insert-row-above", "insert-row-left", "exclamation-circle", "instagram", "info", "info-circle", "insurance", "issues-close", "java", "italic", "java-script", "key", "kubernetes", "laptop", "layout", "insert-row-right", "left-square", "highlight", "file-image", "left", "like", "line", "linux", "link", "loading-3-quarters", "interaction", "lock", "login", "logout", "mac-command", "history", "linkedin", "medicine-box", "man", "medium", "loading", "menu-fold", "meh", "menu", "menu-unfold", "merge", "merge-cells", "message", "minus-circle", "line-height", "mobile", "holder", "money-collect", "monitor", "moon", "more", "muted", "node-expand", "node-index", "node-collapse", "line-chart", "notification", "one-to-one", "medium-workmark", "number", "paper-clip", "ordered-list", "partition", "pause-circle", "open-a-i", "pay-circle", "percentage", "pic-left", "phone", "pic-center", "pic-right", "pause", "pie-chart", "minus", "play-square", "minus-square", "pinterest", "plus", "left-circle", "plus-square", "pound-circle", "pound", "poweroff", "printer", "mail", "product", "picture", "profile", "property-safety", "play-circle", "python", "pushpin", "qq", "question", "qrcode", "question-circle", "radius-bottomleft", "plus-circle", "radius-upright", "radius-upleft", "radius-bottomright", "read", "reconciliation", "red-envelope", "redo", "reload", "radar-chart", "retweet", "right-circle", "rise", "pull-request", "reddit", "right-square", "rocket", "rollback", "rotate-right", "robot", "ruby", "right", "safety-certificate", "safety", "save", "scan", "radius-setting", "security-scan", "schedule", "scissor", "setting", "shake", "share-alt", "shop", "send", "project", "select", "search", "shopping-cart", "signature", "rest", "sisternode", "shrink", "skin", "skype", "slack", "slack-square", "sliders", "small-dash", "smile", "snippets", "solution", "sort-descending", "spotify", "star", "step-backward", "sketch", "step-forward", "stop", "sort-ascending", "swap-left", "swap", "swap-right", "shopping", "sound", "switcher", "sync", "table", "sun", "tags", "stock", "taobao", "taobao-circle", "subnode", "thunderbolt", "to-top", "tik-tok", "tool", "trademark-circle", "transaction", "translation", "tag", "trophy", "truck", "team", "twitch", "twitter", "underline", "trademark", "undo", "unlock", "unordered-list", "up", "up-circle", "up-square", "ungroup", "usb", "user-add", "tablet", "user-switch", "usergroup-delete", "strikethrough", "verified", "vertical-left", "vertical-right", "video-camera-add", "video-camera", "user", "rotate-left", "user-delete", "warning", "split-cells", "usergroup-add", "wechat-work", "vertical-align-top", "weibo-circle", "weibo", "whats-app", "vertical-align-middle", "weibo-square", "vertical-align-bottom", "wifi", "windows", "woman", "yahoo", "youtube", "x", "yuque", "zhihu", "zoom-in", "wechat", "wallet", "zoom-out", "upload"],
  twotone: ["alert", "appstore", "api", "audio", "bank", "bell", "book", "box-plot", "account-book", "build", "bulb", "calculator", "calendar", "car", "camera", "ci-circle", "ci", "check-circle", "check-square", "bug", "close-circle", "cloud", "clock-circle", "compass", "carry-out", "contacts", "container", "copy", "control", "copyright-circle", "crown", "credit-card", "code", "copyright", "delete", "dashboard", "close-square", "diff", "dislike", "dollar-circle", "dollar", "down-circle", "customer-service", "down-square", "environment", "euro-circle", "edit", "exclamation-circle", "euro", "database", "experiment", "eye-invisible", "eye", "file-add", "file-excel", "file-exclamation", "file-markdown", "file-pdf", "file-image", "file-ppt", "file-text", "file-unknown", "file", "file-zip", "filter", "fire", "flag", "folder-add", "folder-open", "frown", "fund", "folder", "funnel-plot", "gold", "hdd", "heart", "home", "highlight", "gift", "hourglass", "html5", "file-word", "idcard", "interaction", "layout", "info-circle", "left-circle", "like", "left-square", "insurance", "mail", "lock", "medicine-box", "meh", "message", "minus-square", "minus-circle", "mobile", "money-collect", "notification", "phone", "picture", "play-circle", "plus-circle", "plus-square", "pound-circle", "printer", "play-square", "project", "property-safety", "pause-circle", "pushpin", "question-circle", "pie-chart", "reconciliation", "red-envelope", "right-circle", "safety-certificate", "save", "schedule", "rest", "profile", "security-scan", "right-square", "setting", "shop", "shopping", "skin", "sliders", "smile", "snippets", "sound", "star", "stop", "tablet", "tag", "rocket", "thunderbolt", "tool", "trademark-circle", "trophy", "switcher", "up-circle", "usb", "up-square", "video-camera", "wallet", "warning", "unlock", "tags"]
};

export {
  ANT_ICON_ANGULAR_CONSOLE_PREFIX,
  error,
  warn,
  getSecondaryColor,
  withSuffix,
  withSuffixAndColor,
  mapAbbrToTheme,
  alreadyHasAThemeSuffix,
  isIconDefinition,
  getIconDefinitionFromAbbr,
  cloneSVG,
  replaceFillColor,
  getNameAndNamespace,
  hasNamespace,
  NameSpaceIsNotSpecifyError,
  IconNotFoundError,
  HttpModuleNotImport,
  UrlNotSafeError,
  SVGTagNotFoundError,
  DynamicLoadingTimeoutError,
  ANT_ICONS,
  IconService,
  IconDirective,
  IconModule,
  manifest
};
//# sourceMappingURL=chunk-IDCCK3LW.js.map
