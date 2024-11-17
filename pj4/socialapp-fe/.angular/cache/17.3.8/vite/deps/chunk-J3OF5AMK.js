// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-polyfill.mjs
var availablePrefixes = ["moz", "ms", "webkit"];
function requestAnimationFramePolyfill() {
  let lastTime = 0;
  return function(callback) {
    const currTime = (/* @__PURE__ */ new Date()).getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}
function getRequestAnimationFrame() {
  if (typeof window === "undefined") {
    return () => 0;
  }
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }
  const prefix = availablePrefixes.filter((key) => `${key}RequestAnimationFrame` in window)[0];
  return prefix ? window[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === "undefined") {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  const prefix = availablePrefixes.filter((key) => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
  return prefix ? (window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`]).call(this, id) : clearTimeout(id);
}
var reqAnimFrame = getRequestAnimationFrame();

export {
  cancelRequestAnimationFrame,
  reqAnimFrame
};
//# sourceMappingURL=chunk-J3OF5AMK.js.map
