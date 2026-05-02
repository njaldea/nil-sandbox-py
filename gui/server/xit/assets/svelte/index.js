import { cp as m, h as x, cq as b, Y as n, cr as s, cs as i, aH as h, g as l, ct as g, bn as v, u as f } from "./store.js";
import { cu as z, aA as H, cv as M, cw as P, cx as R, cy as Y, cz as j, cA as B, bk as F } from "./store.js";
import { c as I, h as J, m as K, u as L } from "./internal/client.js";
function k(t, e) {
  var c;
  if (m(), x) {
    const a = (c = window.__svelte) == null ? void 0 : c.h;
    if (a != null && a.has(t))
      return (
        /** @type {T} */
        a.get(t)
      );
    b();
  }
  return e();
}
function A() {
  var t;
  return l === null && g(), ((t = l).ac ?? (t.ac = new AbortController())).signal;
}
function y(t) {
  n === null && s(), v(() => {
    const e = f(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function S(t) {
  n === null && s(), y(() => () => f(t));
}
function C(t, e, { bubbles: c = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: c, cancelable: a });
}
function q() {
  const t = n;
  return t === null && s(), (e, c, a) => {
    var r;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (r = t.s.$$events) == null ? void 0 : r[
        /** @type {string} */
        e
      ]
    );
    if (o) {
      const p = h(o) ? o.slice() : [o], u = C(
        /** @type {string} */
        e,
        c,
        a
      );
      for (const d of p)
        d.call(t.x, u);
      return !u.defaultPrevented;
    }
    return !0;
  };
}
function D(t) {
  n === null && s(), n.l === null && i(), _(n).b.push(t);
}
function E(t) {
  n === null && s(), n.l === null && i(), _(n).a.push(t);
}
function _(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
export {
  E as afterUpdate,
  D as beforeUpdate,
  z as createContext,
  q as createEventDispatcher,
  I as createRawSnippet,
  H as flushSync,
  M as fork,
  A as getAbortSignal,
  P as getAllContexts,
  R as getContext,
  Y as hasContext,
  k as hydratable,
  J as hydrate,
  K as mount,
  S as onDestroy,
  y as onMount,
  j as setContext,
  B as settled,
  F as tick,
  L as unmount,
  f as untrack
};
