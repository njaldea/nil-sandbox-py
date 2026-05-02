import { cubicOut as O } from "./easing.js";
function b(a, { from: t, to: r }, p = {}) {
  var { delay: u = 0, duration: n = (i) => Math.sqrt(i) * 120, easing: y = O } = p, h = getComputedStyle(a), g = h.transform === "none" ? "" : h.transform, [s, v] = h.transformOrigin.split(" ").map(parseFloat);
  s /= a.clientWidth, v /= a.clientHeight;
  var c = W(a), d = a.clientWidth / r.width / c, f = a.clientHeight / r.height / c, x = t.left + t.width * s, m = t.top + t.height * v, w = r.left + r.width * s, S = r.top + r.height * v, l = (x - w) * d, o = (m - S) * f, $ = t.width / r.width, z = t.height / r.height;
  return {
    delay: u,
    duration: typeof n == "function" ? n(Math.sqrt(l * l + o * o)) : n,
    easing: y,
    css: (i, e) => {
      var C = e * l, q = e * o, H = i + e * $, M = i + e * z;
      return `transform: ${g} translate(${C}px, ${q}px) scale(${H}, ${M});`;
    }
  };
}
function W(a) {
  if ("currentCSSZoom" in a)
    return (
      /** @type {number} */
      a.currentCSSZoom
    );
  for (var t = a, r = 1; t !== null; )
    r *= +getComputedStyle(t).zoom, t = /** @type {Element | null} */
    t.parentElement;
  return r;
}
export {
  b as flip
};
