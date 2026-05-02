var x = (e) => {
  throw TypeError(e);
};
var X = (e, t, s) => t.has(e) || x("Cannot " + s);
var r = (e, t, s) => (X(e, t, "read from private field"), s ? s.call(e) : t.get(e)), c = (e, t, s) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), a = (e, t, s, i) => (X(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s), _ = (e, t, s) => (X(e, t, "access private method"), s);
import { r as H, l as V } from "./internal/client.js";
import { MediaQuery as ht } from "./reactivity.js";
import { c9 as D, ah as et, a1 as u, cE as at, a$ as ct, a4 as O, cF as st } from "./store.js";
import { linear as rt } from "./easing.js";
function L(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function N(e, t, s, i) {
  if (typeof s == "number" || L(s)) {
    const o = i - s, n = (s - t) / (e.dt || 1 / 60), f = e.opts.stiffness * o, h = e.opts.damping * n, m = (f - h) * e.inv_mass, p = (n + m) * e.dt;
    return Math.abs(p) < e.opts.precision && Math.abs(o) < e.opts.precision ? i : (e.settled = !1, L(s) ? new Date(s.getTime() + p) : s + p);
  } else {
    if (Array.isArray(s))
      return s.map(
        (o, n) => (
          // @ts-ignore
          N(e, t[n], s[n], i[n])
        )
      );
    if (typeof s == "object") {
      const o = {};
      for (const n in s)
        o[n] = N(e, t[n], s[n], i[n]);
      return o;
    } else
      throw new Error(`Cannot spring ${typeof s} values`);
  }
}
function gt(e, t = {}) {
  const s = st(e), { stiffness: i = 0.15, damping: o = 0.8, precision: n = 0.01 } = t;
  let f, h, m, p = (
    /** @type {T} */
    e
  ), g = (
    /** @type {T | undefined} */
    e
  ), d = 1, j = 0, y = !1;
  function A(P, b = {}) {
    g = P;
    const nt = m = {};
    return e == null || b.hard || E.stiffness >= 1 && E.damping >= 1 ? (y = !0, f = H.now(), p = P, s.set(e = g), Promise.resolve()) : (b.soft && (j = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60), d = 0), h || (f = H.now(), y = !1, h = V((G) => {
      if (y)
        return y = !1, h = null, !1;
      d = Math.min(d + j, 1);
      const ot = Math.min(G - f, 1e3 / 30), W = {
        inv_mass: d,
        opts: E,
        settled: !0,
        dt: ot * 60 / 1e3
      }, ft = N(W, p, e, g);
      return f = G, p = /** @type {T} */
      e, s.set(e = /** @type {T} */
      ft), W.settled && (h = null), !W.settled;
    })), new Promise((G) => {
      h.promise.then(() => {
        nt === m && G();
      });
    }));
  }
  const E = {
    set: A,
    update: (P, b) => A(P(
      /** @type {T} */
      g,
      /** @type {T} */
      e
    ), b),
    subscribe: s.subscribe,
    stiffness: i,
    damping: o,
    precision: n
  };
  return E;
}
var C, T, $, l, k, F, q, Q, I, M, z, U, it;
const Y = class Y {
  /**
   * @param {T} value
   * @param {SpringOptions} [options]
   */
  constructor(t, s = {}) {
    c(this, U);
    c(this, C, D(0.15));
    c(this, T, D(0.8));
    c(this, $, D(0.01));
    c(this, l);
    c(this, k);
    c(this, F);
    c(this, q, 0);
    c(this, Q, 1);
    c(this, I, 0);
    /** @type {import('../internal/client/types').Task | null} */
    c(this, M, null);
    /** @type {ReturnType<typeof deferred> | null} */
    c(this, z, null);
    a(this, l, D(t)), a(this, k, D(t)), typeof s.stiffness == "number" && (r(this, C).v = K(s.stiffness, 0, 1)), typeof s.damping == "number" && (r(this, T).v = K(s.damping, 0, 1)), typeof s.precision == "number" && (r(this, $).v = s.precision);
  }
  /**
   * Create a spring whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Spring } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const spring = Spring.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {SpringOptions} [options]
   */
  static of(t, s) {
    const i = new Y(t(), s);
    return et(() => {
      i.set(t());
    }), i;
  }
  /**
   * Sets `spring.target` to `value` and returns a `Promise` that resolves if and when `spring.current` catches up to it.
   *
   * If `options.instant` is `true`, `spring.current` immediately matches `spring.target`.
   *
   * If `options.preserveMomentum` is provided, the spring will continue on its current trajectory for
   * the specified number of milliseconds. This is useful for things like 'fling' gestures.
   *
   * @param {T} value
   * @param {SpringUpdateOptions} [options]
   */
  set(t, s) {
    var o, n;
    if ((o = r(this, z)) == null || o.reject(new Error("Aborted")), s != null && s.instant || r(this, l).v === void 0)
      return (n = r(this, M)) == null || n.abort(), a(this, M, null), u(r(this, l), u(r(this, k), t)), a(this, F, t), Promise.resolve();
    s != null && s.preserveMomentum && (a(this, Q, 0), a(this, I, s.preserveMomentum));
    var i = a(this, z, at());
    return i.promise.catch(ct), _(this, U, it).call(this, t).then(() => {
      i === r(this, z) && i.resolve(void 0);
    }), i.promise;
  }
  get current() {
    return O(r(this, l));
  }
  get damping() {
    return O(r(this, T));
  }
  set damping(t) {
    u(r(this, T), K(t, 0, 1));
  }
  get precision() {
    return O(r(this, $));
  }
  set precision(t) {
    u(r(this, $), t);
  }
  get stiffness() {
    return O(r(this, C));
  }
  set stiffness(t) {
    u(r(this, C), K(t, 0, 1));
  }
  get target() {
    return O(r(this, k));
  }
  set target(t) {
    this.set(t);
  }
};
C = new WeakMap(), T = new WeakMap(), $ = new WeakMap(), l = new WeakMap(), k = new WeakMap(), F = new WeakMap(), q = new WeakMap(), Q = new WeakMap(), I = new WeakMap(), M = new WeakMap(), z = new WeakMap(), U = new WeakSet(), /** @param {T} value */
it = function(t) {
  var i;
  if (u(r(this, k), t), (i = r(this, l)).v ?? (i.v = t), r(this, F) ?? a(this, F, r(this, l).v), !r(this, M)) {
    a(this, q, H.now());
    var s = 1e3 / (r(this, I) * 60);
    r(this, M) ?? a(this, M, V((o) => {
      a(this, Q, Math.min(r(this, Q) + s, 1));
      const n = Math.min(o - r(this, q), 1e3 / 30), f = {
        inv_mass: r(this, Q),
        opts: {
          stiffness: r(this, C).v,
          damping: r(this, T).v,
          precision: r(this, $).v
        },
        settled: !0,
        dt: n * 60 / 1e3
      };
      var h = N(f, r(this, F), r(this, l).v, r(this, k).v);
      return a(this, F, r(this, l).v), a(this, q, o), u(r(this, l), h), f.settled && a(this, M, null), !f.settled;
    }));
  }
  return r(this, M).promise;
};
let v = Y;
function K(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function S(e, t) {
  if (e === t || e !== e) return () => e;
  const s = typeof e;
  if (s !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const i = (
      /** @type {Array<any>} */
      t.map((o, n) => S(
        /** @type {Array<any>} */
        e[n],
        o
      ))
    );
    return (o) => i.map((n) => n(o));
  }
  if (s === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (L(e) && L(t)) {
      const n = e.getTime(), h = t.getTime() - n;
      return (m) => new Date(n + m * h);
    }
    const i = Object.keys(t), o = {};
    return i.forEach((n) => {
      o[n] = S(e[n], t[n]);
    }), (n) => {
      const f = {};
      return i.forEach((h) => {
        f[h] = o[h](n);
      }), f;
    };
  }
  if (s === "number") {
    const i = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (o) => e + o * i;
  }
  return () => t;
}
function yt(e, t = {}) {
  const s = st(e);
  let i, o = e;
  function n(f, h) {
    if (o = f, e == null)
      return s.set(e = f), Promise.resolve();
    let m = i, p = !1, {
      delay: g = 0,
      duration: d = 400,
      easing: j = rt,
      interpolate: y = S
    } = { ...t, ...h };
    if (d === 0)
      return m && (m.abort(), m = null), s.set(e = o), Promise.resolve();
    const A = H.now() + g;
    let E;
    return i = V((P) => {
      if (P < A) return !0;
      p || (E = y(
        /** @type {any} */
        e,
        f
      ), typeof d == "function" && (d = d(
        /** @type {any} */
        e,
        f
      )), p = !0), m && (m.abort(), m = null);
      const b = P - A;
      return b > /** @type {number} */
      d ? (s.set(e = f), !1) : (s.set(e = E(j(b / d))), !0);
    }), i.promise;
  }
  return {
    set: n,
    update: (f, h) => n(f(
      /** @type {any} */
      o,
      /** @type {any} */
      e
    ), h),
    subscribe: s.subscribe
  };
}
var w, B, J, R;
const Z = class Z {
  /**
   * @param {T} value
   * @param {TweenOptions<T>} options
   */
  constructor(t, s = {}) {
    c(this, w);
    c(this, B);
    /** @type {TweenOptions<T>} */
    c(this, J);
    /** @type {import('../internal/client/types').Task | null} */
    c(this, R, null);
    a(this, w, D(t)), a(this, B, D(t)), a(this, J, s);
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenOptions<U>} [options]
   */
  static of(t, s) {
    const i = new Z(t(), s);
    return et(() => {
      i.set(t());
    }), i;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenOptions<T>} [options]
   * @returns
   */
  set(t, s) {
    var d;
    u(r(this, B), t);
    let {
      delay: i = 0,
      duration: o = 400,
      easing: n = rt,
      interpolate: f = S
    } = { ...r(this, J), ...s };
    if (o === 0)
      return (d = r(this, R)) == null || d.abort(), u(r(this, w), t), Promise.resolve();
    const h = H.now() + i;
    let m, p = !1, g = r(this, R);
    return a(this, R, V((j) => {
      if (j < h)
        return !0;
      if (!p) {
        p = !0;
        const A = r(this, w).v;
        m = f(A, t), typeof o == "function" && (o = o(A, t)), g == null || g.abort();
      }
      const y = j - h;
      return y > /** @type {number} */
      o ? (u(r(this, w), t), !1) : (u(r(this, w), m(n(y / /** @type {number} */
      o))), !0);
    })), r(this, R).promise;
  }
  get current() {
    return O(r(this, w));
  }
  get target() {
    return O(r(this, B));
  }
  set target(t) {
    this.set(t);
  }
};
w = new WeakMap(), B = new WeakMap(), J = new WeakMap(), R = new WeakMap();
let tt = Z;
const bt = /* @__PURE__ */ new ht(
  "(prefers-reduced-motion: reduce)"
);
export {
  v as Spring,
  tt as Tween,
  bt as prefersReducedMotion,
  gt as spring,
  yt as tweened
};
