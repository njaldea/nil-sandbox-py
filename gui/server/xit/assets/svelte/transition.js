const M = (t) => t;
function m(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function C(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function w(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function W(t, { delay: e = 0, duration: a = 400, easing: r = C, amount: p = 5, opacity: n = 0 } = {}) {
  const c = getComputedStyle(t), s = +c.opacity, d = c.filter === "none" ? "" : c.filter, i = s * (1 - n), [o, y] = w(p);
  return {
    delay: e,
    duration: a,
    easing: r,
    css: (f, u) => `opacity: ${s - i * u}; filter: ${d} blur(${u * o}${y});`
  };
}
function q(t, { delay: e = 0, duration: a = 400, easing: r = M } = {}) {
  const p = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: a,
    easing: r,
    css: (n) => `opacity: ${n * p}`
  };
}
function B(t, { delay: e = 0, duration: a = 400, easing: r = m, x: p = 0, y: n = 0, opacity: c = 0 } = {}) {
  const s = getComputedStyle(t), d = +s.opacity, i = s.transform === "none" ? "" : s.transform, o = d * (1 - c), [y, f] = w(p), [u, _] = w(n);
  return {
    delay: e,
    duration: a,
    easing: r,
    css: ($, h) => `
			transform: ${i} translate(${(1 - $) * y}${f}, ${(1 - $) * u}${_});
			opacity: ${d - o * h}`
  };
}
function L(t, { delay: e = 0, duration: a = 400, easing: r = m, axis: p = "y" } = {}) {
  const n = getComputedStyle(t), c = +n.opacity, s = p === "y" ? "height" : "width", d = parseFloat(n[s]), i = p === "y" ? ["top", "bottom"] : ["left", "right"], o = i.map(
    (l) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${l[0].toUpperCase()}${l.slice(1)}`
    )
  ), y = parseFloat(n[`padding${o[0]}`]), f = parseFloat(n[`padding${o[1]}`]), u = parseFloat(n[`margin${o[0]}`]), _ = parseFloat(n[`margin${o[1]}`]), $ = parseFloat(
    n[`border${o[0]}Width`]
  ), h = parseFloat(
    n[`border${o[1]}Width`]
  );
  return {
    delay: e,
    duration: a,
    easing: r,
    css: (l) => `overflow: hidden;opacity: ${Math.min(l * 20, 1) * c};${s}: ${l * d}px;padding-${i[0]}: ${l * y}px;padding-${i[1]}: ${l * f}px;margin-${i[0]}: ${l * u}px;margin-${i[1]}: ${l * _}px;border-${i[0]}-width: ${l * $}px;border-${i[1]}-width: ${l * h}px;min-${s}: 0`
  };
}
function R(t, { delay: e = 0, duration: a = 400, easing: r = m, start: p = 0, opacity: n = 0 } = {}) {
  const c = getComputedStyle(t), s = +c.opacity, d = c.transform === "none" ? "" : c.transform, i = 1 - p, o = s * (1 - n);
  return {
    delay: e,
    duration: a,
    easing: r,
    css: (y, f) => `
			transform: ${d} scale(${1 - i * f});
			opacity: ${s - o * f}
		`
  };
}
function z(t, { delay: e = 0, speed: a, duration: r, easing: p = C } = {}) {
  let n = t.getTotalLength();
  const c = getComputedStyle(t);
  return c.strokeLinecap !== "butt" && (n += parseInt(c.strokeWidth)), r === void 0 ? a === void 0 ? r = 800 : r = n / a : typeof r == "function" && (r = r(n)), {
    delay: e,
    duration: r,
    easing: p,
    css: (s, d) => `
			stroke-dasharray: ${n};
			stroke-dashoffset: ${d * n};
		`
  };
}
function v(t, e) {
  for (const a in e) t[a] = e[a];
  return (
    /** @type {T & S} */
    t
  );
}
function I({ fallback: t, ...e }) {
  const a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function p(c, s, d) {
    const {
      delay: i = 0,
      duration: o = (
        /** @param {number} d */
        (g) => Math.sqrt(g) * 30
      ),
      easing: y = m
    } = v(v({}, e), d), f = c.getBoundingClientRect(), u = s.getBoundingClientRect(), _ = f.left - u.left, $ = f.top - u.top, h = f.width / u.width, l = f.height / u.height, k = Math.sqrt(_ * _ + $ * $), x = getComputedStyle(s), F = x.transform === "none" ? "" : x.transform, S = +x.opacity;
    return {
      delay: i,
      duration: typeof o == "function" ? o(k) : o,
      easing: y,
      css: (g, b) => `
			   opacity: ${g * S};
			   transform-origin: top left;
			   transform: ${F} translate(${b * _}px,${b * $}px) scale(${g + (1 - g) * h}, ${g + (1 - g) * l});
		   `
    };
  }
  function n(c, s, d) {
    return (i, o) => (c.set(o.key, i), () => {
      if (s.has(o.key)) {
        const y = s.get(o.key);
        return s.delete(o.key), p(
          /** @type {Element} */
          y,
          i,
          o
        );
      }
      return c.delete(o.key), t && t(i, o, d);
    });
  }
  return [n(r, a, !1), n(a, r, !0)];
}
export {
  W as blur,
  I as crossfade,
  z as draw,
  q as fade,
  B as fly,
  R as scale,
  L as slide
};
