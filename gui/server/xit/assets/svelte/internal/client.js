var An = Object.defineProperty;
var Jt = (e) => {
  throw TypeError(e);
};
var Sn = (e, t, r) => t in e ? An(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var H = (e, t, r) => Sn(e, typeof t != "symbol" ? t + "" : t, r), ot = (e, t, r) => t.has(e) || Jt("Cannot " + r);
var g = (e, t, r) => (ot(e, t, "read from private field"), r ? r.call(e) : t.get(e)), F = (e, t, r) => t.has(e) ? Jt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), be = (e, t, r, n) => (ot(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Zt = (e, t, r) => (ot(e, t, "access private method"), r);
import { A as pr, u as q, S as fe, a as Nn, D as gr, h as b, C as he, H as St, b as Nt, E as $r, d as kn, F as W, e as Cn, t as j, q as de, w as Ve, c as Je, s as Ze, f as ye, g as wr, i as R, j as oe, k as Y, l as A, m as M, n as mr, o as x, T as Ln, p as C, r as Mn, v as kt, x as Er, y as On, z as Tr, B as Pn, N as Ge, G as Ct, I as _e, R as yr, J as Rn, K as In, L as gt, M as De, O as Qe, P as S, Q as Dn, U as Ar, V as Hn, W as Sr, X as Nr, Y as Ae, Z as kr, _ as Cr, $ as st, a0 as pe, a1 as qe, a2 as ne, a3 as Ce, a4 as I, a5 as ue, a6 as ve, a7 as se, a8 as Fn, a9 as Se, aa as ft, ab as xn, ac as Bn, ad as zn, ae as Vn, af as Gn, ag as qn, ah as P, ai as Lt, aj as Un, ak as Pe, al as Wn, am as Lr, an as Ne, ao as Qt, ap as Mt, aq as Ot, ar as X, as as Mr, at as Or, au as jt, av as Pr, aw as Re, ax as Yn, ay as Kn, az as Xn, aA as Pt, aB as Jn, aC as Rt, aD as Rr, aE as Q, aF as Zn, aG as It, aH as Dt, aI as Qn, aJ as jn, aK as Ht, aL as ei, aM as Ir, aN as lt, aO as ti, aP as ri, aQ as Dr, aR as ni, aS as ii, aT as ai, aU as si, aV as fi, aW as er, aX as Hr, aY as ui, aZ as G, a_ as ge, a$ as $e, b0 as oi, b1 as li, b2 as ci, b3 as di, b4 as vi, b5 as Ft, b6 as hi, b7 as Fr, b8 as _i, b9 as Ue, ba as bi, bb as xr, bc as pi, bd as gi, be as $i, bf as wi, bg as mi, bh as Br, bi as zr, bj as B, bk as Vr, bl as Ei, bm as Gr, bn as $t, bo as tr, bp as Ti, bq as qr, br as Ur, bs as yi, bt as Wr, bu as Yr, bv as wt, bw as Ai, bx as Si, by as Ni, bz as ki, bA as Kr, bB as Ci, bC as je, bD as Xr, bE as Li, bF as Mi, bG as Oi, bH as Pi, bI as Ri, bJ as Ii, bK as Di, bL as Hi, bM as Fi, bN as xi, bO as Bi, bP as zi, bQ as Vi, bR as Gi, bS as qi, bT as Ui, bU as Wi, bV as Yi, bW as Ki, bX as Xi, bY as Ji, bZ as Zi, b_ as Qi, b$ as ji, c0 as ea, c1 as ta, c2 as ra, c3 as na, c4 as ia, c5 as aa, c6 as sa, c7 as fa, c8 as ua, c9 as oa, ca as la, cb as ca, cc as da, cd as va, ce as ha, cf as _a, cg as ba, ch as pa, ci as ga, cj as $a, ck as wa, cl as ma, cm as Ea, cn as Ta, co as ya } from "../store.js";
function Aa() {
  return Symbol(pr);
}
const Sa = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
function Na(e) {
  return Sa.includes(e) || e.toLowerCase() === "!doctype";
}
function ka(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ca = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function La(e) {
  return Ca.includes(e);
}
const Ma = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Oa(e) {
  return e = e.toLowerCase(), Ma[e] ?? e;
}
const Pa = ["touchstart", "touchmove"];
function Ra(e) {
  return Pa.includes(e);
}
const Ia = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Da(e) {
  return Ia.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Jr(e) {
  return (
    /** @type {T} */
    e == null ? void 0 : e.replace(/\//g, "/​")
  );
}
function Zr(e, t, r, n) {
  return e !== t && typeof t == "object" && fe in t && Nn(
    r,
    /** @type {string} */
    Jr(n)
  ), e;
}
function Ha(e, t, r, n, i) {
  return Zr(
    r === "=" ? e[t] = n : r === "&&=" ? e[t] && (e[t] = n()) : r === "||=" ? e[t] || (e[t] = n()) : r === "??=" ? e[t] ?? (e[t] = n()) : null,
    q(() => e[t]),
    t,
    i
  );
}
async function Fa(e, t, r, n, i) {
  return Zr(
    r === "=" ? e[t] = await n : r === "&&=" ? e[t] && (e[t] = await n()) : r === "||=" ? e[t] || (e[t] = await n()) : r === "??=" ? e[t] ?? (e[t] = await n()) : null,
    q(() => e[t]),
    t,
    i
  );
}
var rr = /* @__PURE__ */ new Map();
function xa(e) {
  var t = rr.get(e);
  if (t) {
    for (const r of t)
      r.remove();
    rr.delete(e);
  }
}
function Ba(e, t, r) {
  return (...n) => {
    const i = e(...n);
    var a = b ? i : i.nodeType === gr ? i.firstChild : i;
    return Qr(a, t, r), i;
  };
}
function za(e, t, r) {
  e.__svelte_meta = {
    parent: kn,
    loc: { file: t, line: r[0], column: r[1] }
  }, r[2] && Qr(e.firstChild, t, r[2]);
}
function Qr(e, t, r) {
  for (var n = 0, i = 0; e && n < r.length; ) {
    if (b && e.nodeType === he) {
      var a = (
        /** @type {Comment} */
        e
      );
      a.data[0] === St ? i += 1 : a.data[0] === Nt && (i -= 1);
    }
    i === 0 && e.nodeType === $r && za(
      /** @type {Element} */
      e,
      t,
      r[n++]
    ), e = e.nextSibling;
  }
}
const le = Symbol("events"), jr = /* @__PURE__ */ new Set(), mt = /* @__PURE__ */ new Set();
function Va(e) {
  if (!b) return;
  e.removeAttribute("onload"), e.removeAttribute("onerror");
  const t = e.__e;
  t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
    e.isConnected && e.dispatchEvent(t);
  }));
}
function xt(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || Et.call(t, a), !a.cancelBubble)
      return Ve(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? de(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function du(e, t, r, n = {}) {
  var i = xt(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function Ga(e, t, r, n, i) {
  var a = { capture: n, passive: i }, s = xt(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && j(() => {
    t.removeEventListener(e, s, a);
  });
}
function en(e, t, r) {
  (t[le] ?? (t[le] = {}))[e] = r;
}
function tn(e) {
  for (var t = 0; t < e.length; t++)
    jr.add(e[t]);
  for (var r of mt)
    r(e);
}
let nr = null;
function Et(e) {
  var d, p;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((d = e.composedPath) == null ? void 0 : d.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  nr = e;
  var s = 0, f = nr === e && e[le];
  if (f) {
    var u = i.indexOf(f);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[le] = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1)
      return;
    u <= o && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    Je(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var l = wr, v = R;
    Ze(null), ye(null);
    try {
      for (var c, h = []; a !== null; ) {
        var _ = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var $ = (p = a[le]) == null ? void 0 : p[n];
          $ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && $.call(a, e);
        } catch (y) {
          c ? h.push(y) : c = y;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        a = _;
      }
      if (c) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw c;
      }
    } finally {
      e[le] = t, delete e.currentTarget, Ze(l), ye(v);
    }
  }
}
function qa(e, t, r, n, i, a = !1, s = !1) {
  var o, l;
  let f, u;
  try {
    f = e();
  } catch (v) {
    u = v;
  }
  if (typeof f != "function" && (a || f != null || u)) {
    const v = n == null ? void 0 : n[W];
    i ? `${v}${i[0]}${i[1]}` : `${v}`;
    const c = ((o = r[0]) == null ? void 0 : o.eventPhase) < Event.BUBBLING_PHASE ? "capture" : "";
    if (((l = r[0]) == null ? void 0 : l.type) + c, Cn(), u)
      throw u;
  }
  f == null || f.apply(t, r);
}
var br;
const ct = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((br = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : br.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function rn(e) {
  return (
    /** @type {string} */
    (ct == null ? void 0 : ct.createHTML(e)) ?? e
  );
}
function Bt(e) {
  var t = oe("template");
  return t.innerHTML = rn(e.replaceAll("<!>", "<!---->")), t.content;
}
const Ua = _e ? "template" : "TEMPLATE", Wa = _e ? "script" : "SCRIPT";
function O(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
  var r = (t & kt) !== 0, n = (t & Er) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (b)
      return O(A, null), A;
    i === void 0 && (i = Bt(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    M(i)));
    var s = (
      /** @type {TemplateNode} */
      n || mr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        M(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      O(f, u);
    } else
      O(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function nn(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = (t & kt) !== 0, a = `<${r}>${n ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (b)
      return O(A, null), A;
    if (!s) {
      var f = (
        /** @type {DocumentFragment} */
        Bt(a)
      ), u = (
        /** @type {Element} */
        M(f)
      );
      if (i)
        for (s = document.createDocumentFragment(); M(u); )
          s.appendChild(
            /** @type {TemplateNode} */
            M(u)
          );
      else
        s = /** @type {Element} */
        M(u);
    }
    var o = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (i) {
      var l = (
        /** @type {TemplateNode} */
        M(o)
      ), v = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      O(l, v);
    } else
      O(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
  return /* @__PURE__ */ nn(e, t, "svg");
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
  return /* @__PURE__ */ nn(e, t, "math");
}
function an(e, t) {
  var r = On();
  for (var n of e) {
    if (typeof n == "string") {
      r.append(Y(n));
      continue;
    }
    if (n === void 0 || n[0][0] === "/") {
      r.append(Tr(n ? n[0].slice(3) : ""));
      continue;
    }
    const [f, u, ...o] = n, l = f === "svg" ? Ge : f === "math" ? Ct : t;
    var i = oe(f, l, u == null ? void 0 : u.is);
    for (var a in u)
      Pn(i, a, u[a]);
    if (o.length > 0) {
      var s = i.nodeName === Ua ? (
        /** @type {HTMLTemplateElement} */
        i.content
      ) : i;
      s.append(
        an(o, i.nodeName === "foreignObject" ? void 0 : l)
      );
    }
    r.append(i);
  }
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
  var r = (t & kt) !== 0, n = (t & Er) !== 0, i;
  return () => {
    if (b)
      return O(A, null), A;
    if (i === void 0) {
      const u = (t & Rn) !== 0 ? Ge : (t & In) !== 0 ? Ct : void 0;
      i = an(e, u), r || (i = /** @type {TemplateNode} */
      M(i));
    }
    var a = (
      /** @type {TemplateNode} */
      n || mr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        M(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      O(s, f);
    } else
      O(a, a);
    return a;
  };
}
function Za(e) {
  return () => Qa(e());
}
function Qa(e) {
  if (b) return e;
  const t = e.nodeType === gr, r = (
    /** @type {HTMLElement} */
    e.nodeName === Wa ? [
      /** @type {HTMLScriptElement} */
      e
    ] : e.querySelectorAll("script")
  ), n = (
    /** @type {Effect & { nodes: EffectNodes }} */
    R
  );
  for (const a of r) {
    const s = oe("script");
    for (var i of a.attributes)
      s.setAttribute(i.name, i.value);
    s.textContent = a.textContent, (t ? e.firstChild === a : e === a) && (n.nodes.start = s), (t ? e.lastChild === a : e === a) && (n.nodes.end = s), a.replaceWith(s);
  }
  return e;
}
function ja(e = "") {
  if (!b) {
    var t = Y(e + "");
    return O(t, t), t;
  }
  var r = A;
  return r.nodeType !== Ln ? (r.before(r = Y()), C(r)) : Mn(
    /** @type {Text} */
    r
  ), O(r, r), r;
}
function es() {
  if (b)
    return O(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Y();
  return e.append(t, r), O(t, r), e;
}
function sn(e, t) {
  if (b) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      R
    );
    ((r.f & yr) === 0 || r.nodes.end === null) && (r.nodes.end = A), x();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ts() {
  var e, t;
  if (b && A && A.nodeType === he && ((e = A.textContent) != null && e.startsWith("$"))) {
    const r = A.textContent.substring(1);
    return x(), r;
  }
  return (t = window.__svelte ?? (window.__svelte = {})).uid ?? (t.uid = 1), `c${window.__svelte.uid++}`;
}
let et = !0;
function Ee(e) {
  et = e;
}
function rs(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function fn(e, t) {
  return un(e, t);
}
function ns(e, t) {
  gt(), t.intro = t.intro ?? !1;
  const r = t.target, n = b, i = A;
  try {
    for (var a = M(r); a && (a.nodeType !== he || /** @type {Comment} */
    a.data !== St); )
      a = De(a);
    if (!a)
      throw Qe;
    S(!0), C(
      /** @type {Comment} */
      a
    );
    const s = un(e, { ...t, anchor: a });
    return S(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((f) => f.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== Qe && console.warn("Failed to hydrate: ", s), t.recover === !1 && Dn(), gt(), Ar(r), S(!1), fn(e, t);
  } finally {
    S(n), C(i);
  }
}
const Ke = /* @__PURE__ */ new Map();
function un(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: s = !0, transformError: f }) {
  gt();
  var u = void 0, o = Hn(() => {
    var l = r ?? t.appendChild(Y());
    Sr(
      /** @type {TemplateNode} */
      l,
      {
        pending: () => {
        }
      },
      (h) => {
        Nr({});
        var _ = (
          /** @type {ComponentContext} */
          Ae
        );
        if (a && (_.c = a), i && (n.$$events = i), b && O(
          /** @type {TemplateNode} */
          h,
          null
        ), et = s, u = e(h, n) || {}, et = !0, b && (R.nodes.end = A, A === null || A.nodeType !== he || /** @type {Comment} */
        A.data !== Nt))
          throw kr(), Qe;
        Cr();
      },
      f
    );
    var v = /* @__PURE__ */ new Set(), c = (h) => {
      for (var _ = 0; _ < h.length; _++) {
        var $ = h[_];
        if (!v.has($)) {
          v.add($);
          var d = Ra($);
          for (const m of [t, document]) {
            var p = Ke.get(m);
            p === void 0 && (p = /* @__PURE__ */ new Map(), Ke.set(m, p));
            var y = p.get($);
            y === void 0 ? (m.addEventListener($, Et, { passive: d }), p.set($, 1)) : p.set($, y + 1);
          }
        }
      }
    };
    return c(st(jr)), mt.add(c), () => {
      var d;
      for (var h of v)
        for (const p of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Ke.get(p)
          ), $ = (
            /** @type {number} */
            _.get(h)
          );
          --$ == 0 ? (p.removeEventListener(h, Et), _.delete(h), _.size === 0 && Ke.delete(p)) : _.set(h, $);
        }
      mt.delete(c), l !== r && ((d = l.parentNode) == null || d.removeChild(l));
    };
  });
  return Tt.set(u, o), u;
}
let Tt = /* @__PURE__ */ new WeakMap();
function is(e, t) {
  const r = Tt.get(e);
  return r ? (Tt.delete(e), r(t)) : Promise.resolve();
}
function as(e) {
  const t = ve(e);
  function r(n, i) {
    let a = {}, s = {}, f, u = !1, o = n;
    return ne(() => {
      if (a !== (a = I(t))) {
        if (f) {
          for (var l in s) delete s[l];
          se(f);
        }
        f = ue(() => {
          o = /** @type {any} */
          o[Fn] ?? o, u && Ee(!1);
          var v = (
            // @ts-expect-error
            new.target ? new a(o, i) : a(o, i)
          );
          v && Object.defineProperties(s, Object.getOwnPropertyDescriptors(v)), u && Ee(!0);
        }), R.nodes = f.nodes;
      }
    }, Ce), u = !0, b && (o = A), s;
  }
  return r[W] = e[W], r[pe] = {
    fn: e,
    current: t,
    update: (n) => {
      qe(r[pe].current, n[pe].fn), n[pe].current = r[pe].current;
    }
  }, r;
}
function ss(e) {
  var n, i, a;
  const t = (n = Ae) == null ? void 0 : n.function, r = (a = (i = Ae) == null ? void 0 : i.p) == null ? void 0 : a.function;
  return {
    /**
     * @param {string} prop
     * @param {any[]} path
     * @param {any} result
     * @param {number} line
     * @param {number} column
     */
    mutation: (s, f, u, o, l) => {
      const v = f[0];
      if (ir(e, v) || !r)
        return u;
      let c = e;
      for (let _ = 0; _ < f.length - 1; _++)
        if (c = c[f[_]], !(c != null && c[fe]))
          return u;
      const h = Jr(`${t[W]}:${o}:${l}`);
      return Bn(v, h, s, r[W]), u;
    },
    /**
     * @param {any} key
     * @param {any} child_component
     * @param {() => any} value
     */
    binding: (s, f, u) => {
      var o;
      !ir(e, s) && r && ((o = u()) != null && o[fe]) && xn(
        t[W],
        s,
        f[W],
        r[W]
      );
    }
  };
}
function ir(e, t) {
  var n;
  const r = fe in e || ft in e;
  return !!((n = Se(e, t)) != null && n.set) || r && t in e || !(t in e);
}
function fs(e) {
  e && zn(e[W] ?? "a component", e.name);
}
function us() {
  var r;
  const e = (r = Ae) == null ? void 0 : r.function;
  function t(n) {
    Vn(n, e[W]);
  }
  return {
    $destroy: () => t("$destroy()"),
    $on: () => t("$on(...)"),
    $set: () => t("$set(...)")
  };
}
function os(e, t, r = !1) {
  Gn();
  let n = !0, i = (
    /** @type {any} */
    Pe
  );
  qn(() => {
    try {
      var a = e();
    } catch (f) {
      i = f;
      return;
    }
    var s = Lt(a, !0, !0);
    q(() => {
      if (r) {
        if (t(...s), !n) {
          const f = Un("$inspect(...)");
          f && (console.groupCollapsed("stack trace"), console.log(f), console.groupEnd());
        }
      } else
        t(n ? "init" : "update", ...s);
    }), n = !1;
  }), P(() => {
    try {
      e();
    } catch {
    }
    i !== Pe && (console.error(i), i = Pe);
  });
}
function ls(e, t = [], r = [], n) {
  var i = b, a = null;
  if (i && (x(), a = Ne(!1)), r.length === 0 && t.every((u) => u.settled)) {
    n(e), i && C(a);
    return;
  }
  const s = Wn();
  if (i) {
    var f = A;
    C(a);
  }
  Lr(t, [], r, (u) => {
    i && (S(!0), C(f));
    try {
      for (const o of u) I(o);
      n(e, ...u);
    } finally {
      i && S(!1), s();
    }
  });
}
function cs(e, ...t) {
  (typeof e != "object" || !(e instanceof Node)) && Qt();
  for (let r of t)
    typeof r != "function" && Qt();
}
var K, J, V, ce, xe, Be, nt;
class Le {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    H(this, "anchor");
    /** @type {Map<Batch, Key>} */
    F(this, K, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    F(this, J, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    F(this, V, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    F(this, ce, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    F(this, xe, !0);
    /**
     * @param {Batch} batch
     */
    F(this, Be, (t) => {
      if (g(this, K).has(t)) {
        var r = (
          /** @type {Key} */
          g(this, K).get(t)
        ), n = g(this, J).get(r);
        if (n)
          Mt(n), g(this, ce).delete(r);
        else {
          var i = g(this, V).get(r);
          i && (g(this, J).set(r, i.effect), g(this, V).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, s] of g(this, K)) {
          if (g(this, K).delete(a), a === t)
            break;
          const f = g(this, V).get(s);
          f && (se(f.effect), g(this, V).delete(s));
        }
        for (const [a, s] of g(this, J)) {
          if (a === r || g(this, ce).has(a)) continue;
          const f = () => {
            if (Array.from(g(this, K).values()).includes(a)) {
              var o = document.createDocumentFragment();
              Mr(s, o), o.append(Y()), g(this, V).set(a, { effect: s, fragment: o });
            } else
              se(s);
            g(this, ce).delete(a), g(this, J).delete(a);
          };
          g(this, xe) || !n ? (g(this, ce).add(a), Ot(s, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    F(this, nt, (t) => {
      g(this, K).delete(t);
      const r = Array.from(g(this, K).values());
      for (const [n, i] of g(this, V))
        r.includes(n) || (se(i.effect), g(this, V).delete(n));
    });
    this.anchor = t, be(this, xe, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      X
    ), i = Or();
    if (r && !g(this, J).has(t) && !g(this, V).has(t))
      if (i) {
        var a = document.createDocumentFragment(), s = Y();
        a.append(s), g(this, V).set(t, {
          effect: ue(() => r(s)),
          fragment: a
        });
      } else
        g(this, J).set(
          t,
          ue(() => r(this.anchor))
        );
    if (g(this, K).set(n, t), i) {
      for (const [f, u] of g(this, J))
        f === t ? n.unskip_effect(u) : n.skip_effect(u);
      for (const [f, u] of g(this, V))
        f === t ? n.unskip_effect(u.effect) : n.skip_effect(u.effect);
      n.oncommit(g(this, Be)), n.ondiscard(g(this, nt));
    } else
      b && (this.anchor = A), g(this, Be).call(this, n);
  }
}
K = new WeakMap(), J = new WeakMap(), V = new WeakMap(), ce = new WeakMap(), xe = new WeakMap(), Be = new WeakMap(), nt = new WeakMap();
const ar = 0, sr = 1, ds = 2;
function vs(e, t, r, n, i) {
  b && x();
  var a = (
    /** @type {V} */
    Pe
  ), s = ve(a), f = ve(a), u = new Le(e);
  ne(() => {
    var o = (
      /** @type {Batch} */
      X
    );
    o.deactivate();
    var l = t();
    o.activate();
    var v = !1;
    let c = b && jt(l) === (e.data === Pr);
    if (c && (C(Ne()), S(!1)), jt(l)) {
      var h = Jn(), _ = !1;
      const $ = (d) => {
        if (!v) {
          _ = !0, h(!1), Yn.ensure(), b && S(!1);
          try {
            d();
          } finally {
            Kn(!1), Xn || Pt();
          }
        }
      };
      l.then(
        (d) => {
          $(() => {
            Re(s, d), u.ensure(sr, n && ((p) => n(p, s)));
          });
        },
        (d) => {
          $(() => {
            if (Re(f, d), u.ensure(ds, i && ((p) => i(p, f))), !i)
              throw f.v;
          });
        }
      ), b ? u.ensure(ar, r) : de(() => {
        _ || $(() => {
          u.ensure(ar, r);
        });
      });
    } else
      Re(s, l), u.ensure(sr, n && (($) => n($, s)));
    return c && S(!0), () => {
      v = !0;
    };
  });
}
function hs(e, t, r = !1) {
  var n;
  b && (n = A, x());
  var i = new Le(e), a = r ? Ce : 0;
  function s(f, u) {
    if (b) {
      var o = Rt(
        /** @type {TemplateNode} */
        n
      );
      if (f !== parseInt(o.substring(1))) {
        var l = Ne();
        C(l), i.anchor = l, S(!1), i.ensure(f, u), S(!0);
        return;
      }
    }
    i.ensure(f, u);
  }
  ne(() => {
    var f = !1;
    t((u, o = 0) => {
      f = !0, s(o, u);
    }), f || s(-1, null);
  }, a);
}
const _s = Symbol("NaN");
function bs(e, t, r) {
  b && x();
  var n = new Le(e);
  ne(() => {
    var i = t();
    i !== i && (i = /** @type {any} */
    _s), n.ensure(i, r);
  });
}
function ps(e, t) {
  b && C(M(e)), P(() => {
    var r = t();
    for (var n in r) {
      var i = r[n];
      i ? e.style.setProperty(n, i) : e.style.removeProperty(n);
    }
  });
}
function gs(e, t) {
  return t;
}
function $s(e, t, r) {
  for (var n = [], i = t.length, a, s = t.length, f = 0; f < i; f++) {
    let v = t[f];
    Ot(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            yt(e, st(a.done)), c.delete(a), c.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var u = n.length === 0 && r !== null;
    if (u) {
      var o = (
        /** @type {Element} */
        r
      ), l = (
        /** @type {Element} */
        o.parentNode
      );
      Ar(l), l.append(o), e.items.clear();
    }
    yt(e, t, !u);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function yt(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const s of e.pending.values())
      for (const f of s)
        n.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n != null && n.has(a)) {
      a.f |= Q;
      const s = document.createDocumentFragment();
      Mr(a, s);
    } else
      se(t[i], r);
  }
}
var fr;
function ws(e, t, r, n, i, a = null) {
  var s = e, f = /* @__PURE__ */ new Map(), u = (t & Rr) !== 0;
  if (u) {
    var o = (
      /** @type {Element} */
      e
    );
    s = b ? C(M(o)) : o.appendChild(Y());
  }
  b && x();
  var l = null, v = It(() => {
    var m = r();
    return Dt(m) ? m : m == null ? [] : st(m);
  }), c, h = /* @__PURE__ */ new Map(), _ = !0;
  function $(m) {
    (y.effect.f & Ir) === 0 && (y.pending.delete(m), y.fallback = l, ms(y, c, s, t, n), l !== null && (c.length === 0 ? (l.f & Q) === 0 ? Mt(l) : (l.f ^= Q, Oe(l, null, s)) : Ot(l, () => {
      l = null;
    })));
  }
  function d(m) {
    y.pending.delete(m);
  }
  var p = ne(() => {
    c = /** @type {V[]} */
    I(v);
    var m = c.length;
    let w = !1;
    if (b) {
      var z = Rt(s) === Pr;
      z !== (m === 0) && (s = Ne(), C(s), S(!1), w = !0);
    }
    for (var T = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      X
    ), N = Or(), L = 0; L < m; L += 1) {
      b && A.nodeType === he && /** @type {Comment} */
      A.data === Nt && (s = /** @type {Comment} */
      A, w = !0, S(!1));
      var k = c[L], ee = n(k, L), D = _ ? null : f.get(ee);
      D ? (D.v && Re(D.v, k), D.i && Re(D.i, L), N && E.unskip_effect(D.e)) : (D = Es(
        f,
        _ ? s : fr ?? (fr = Y()),
        k,
        ee,
        L,
        i,
        t,
        r
      ), _ || (D.e.f |= Q), f.set(ee, D)), T.add(ee);
    }
    if (m === 0 && a && !l && (_ ? l = ue(() => a(s)) : (l = ue(() => a(fr ?? (fr = Y()))), l.f |= Q)), m > T.size && Zn(), b && m > 0 && C(Ne()), !_)
      if (h.set(E, T), N) {
        for (const [We, Ye] of f)
          T.has(We) || E.skip_effect(Ye.e);
        E.oncommit($), E.ondiscard(d);
      } else
        $(E);
    w && S(!0), I(v);
  }), y = { effect: p, items: f, pending: h, outrogroups: null, fallback: l };
  _ = !1, b && (s = A);
}
function Me(e) {
  for (; e !== null && (e.f & ti) === 0; )
    e = e.next;
  return e;
}
function ms(e, t, r, n, i) {
  var k, ee, D, We, Ye, Ut, Wt, Yt, Kt;
  var a = (n & ri) !== 0, s = t.length, f = e.items, u = Me(e.effect.first), o, l = null, v, c = [], h = [], _, $, d, p;
  if (a)
    for (p = 0; p < s; p += 1)
      _ = t[p], $ = i(_, p), d = /** @type {EachItem} */
      f.get($).e, (d.f & Q) === 0 && ((ee = (k = d.nodes) == null ? void 0 : k.a) == null || ee.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(d));
  for (p = 0; p < s; p += 1) {
    if (_ = t[p], $ = i(_, p), d = /** @type {EachItem} */
    f.get($).e, e.outrogroups !== null)
      for (const te of e.outrogroups)
        te.pending.delete(d), te.done.delete(d);
    if ((d.f & lt) !== 0 && (Mt(d), a && ((We = (D = d.nodes) == null ? void 0 : D.a) == null || We.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(d))), (d.f & Q) !== 0)
      if (d.f ^= Q, d === u)
        Oe(d, null, r);
      else {
        var y = l ? l.next : u;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), ie(e, l, d), ie(e, d, y), Oe(d, y, r), l = d, c = [], h = [], u = Me(l.next);
        continue;
      }
    if (d !== u) {
      if (o !== void 0 && o.has(d)) {
        if (c.length < h.length) {
          var m = h[0], w;
          l = m.prev;
          var z = c[0], T = c[c.length - 1];
          for (w = 0; w < c.length; w += 1)
            Oe(c[w], m, r);
          for (w = 0; w < h.length; w += 1)
            o.delete(h[w]);
          ie(e, z.prev, T.next), ie(e, l, z), ie(e, T, m), u = m, l = T, p -= 1, c = [], h = [];
        } else
          o.delete(d), Oe(d, u, r), ie(e, d.prev, d.next), ie(e, d, l === null ? e.effect.first : l.next), ie(e, l, d), l = d;
        continue;
      }
      for (c = [], h = []; u !== null && u !== d; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(u), h.push(u), u = Me(u.next);
      if (u === null)
        continue;
    }
    (d.f & Q) === 0 && c.push(d), l = d, u = Me(d.next);
  }
  if (e.outrogroups !== null) {
    for (const te of e.outrogroups)
      te.pending.size === 0 && (yt(e, st(te.done)), (Ye = e.outrogroups) == null || Ye.delete(te));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (u !== null || o !== void 0) {
    var E = [];
    if (o !== void 0)
      for (d of o)
        (d.f & lt) === 0 && E.push(d);
    for (; u !== null; )
      (u.f & lt) === 0 && u !== e.fallback && E.push(u), u = Me(u.next);
    var N = E.length;
    if (N > 0) {
      var L = (n & Rr) !== 0 && s === 0 ? r : null;
      if (a) {
        for (p = 0; p < N; p += 1)
          (Wt = (Ut = E[p].nodes) == null ? void 0 : Ut.a) == null || Wt.measure();
        for (p = 0; p < N; p += 1)
          (Kt = (Yt = E[p].nodes) == null ? void 0 : Yt.a) == null || Kt.fix();
      }
      $s(e, E, L);
    }
  }
  a && de(() => {
    var te, Xt;
    if (v !== void 0)
      for (d of v)
        (Xt = (te = d.nodes) == null ? void 0 : te.a) == null || Xt.apply();
  });
}
function Es(e, t, r, n, i, a, s, f) {
  var u = (s & Qn) !== 0 ? (s & jn) === 0 ? Ht(r, !1, !1) : ve(r) : null, o = (s & ei) !== 0 ? ve(i) : null;
  return {
    v: u,
    i: o,
    e: ue(() => (a(t, u ?? r, o ?? i, f), () => {
      e.delete(n);
    }))
  };
}
function Oe(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Q) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        De(n)
      );
      if (a.before(n), n === i)
        return;
      n = s;
    }
}
function ie(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Ts(e, t, r = !1, n = !1, i = !1, a = !1) {
  var s = e, f = "";
  if (r) {
    var u = (
      /** @type {Element} */
      e
    );
    b && (s = C(M(u)));
  }
  Dr(() => {
    var o = (
      /** @type {Effect} */
      R
    );
    if (f === (f = t() ?? "")) {
      b && x();
      return;
    }
    if (r && !b) {
      o.nodes = null, u.innerHTML = /** @type {string} */
      f, f !== "" && O(
        /** @type {TemplateNode} */
        M(u),
        /** @type {TemplateNode} */
        u.lastChild
      );
      return;
    }
    if (o.nodes !== null && (ni(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), f !== "") {
      if (b) {
        A.data;
        for (var l = x(), v = l; l !== null && (l.nodeType !== he || /** @type {Comment} */
        l.data !== ""); )
          v = l, l = De(l);
        if (l === null)
          throw kr(), Qe;
        O(A, v), s = C(l);
        return;
      }
      var c = n ? Ge : i ? Ct : void 0, h = (
        /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
        oe(n ? "svg" : i ? "math" : "template", c)
      );
      h.innerHTML = /** @type {any} */
      f;
      var _ = n || i ? h : (
        /** @type {HTMLTemplateElement} */
        h.content
      );
      if (O(
        /** @type {TemplateNode} */
        M(_),
        /** @type {TemplateNode} */
        _.lastChild
      ), n || i)
        for (; M(_); )
          s.before(
            /** @type {TemplateNode} */
            M(_)
          );
      else
        s.before(_);
    }
  });
}
function ys(e, t, r, n, i) {
  var f;
  b && x();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t[r === "default" ? "children" : r], s = !0), a === void 0 ? i !== null && i(e) : a(e, s ? () => n : n);
}
function As(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const r in e.$$slots)
    t[r] = !0;
  return t;
}
function Ss(e) {
  const t = e();
  t && Na(t) && fi();
}
function Ns(e) {
  const t = e();
  t && !(typeof t == "string") && ai();
}
function ks(e, t) {
  e != null && typeof e.subscribe != "function" && si();
}
function on(e) {
  return e.toString = () => (ii(), ""), e;
}
function Cs(e, t, ...r) {
  var n = new Le(e);
  ne(() => {
    const i = t() ?? null;
    n.ensure(i, i && ((a) => i(a, ...r)));
  }, Ce);
}
function Ls(e, t) {
  const r = (n, ...i) => {
    var a = Hr;
    er(e);
    try {
      return t(n, ...i);
    } finally {
      er(a);
    }
  };
  return on(r), r;
}
function vu(e) {
  return (t, ...r) => {
    var u;
    var n = e(...r), i;
    if (b)
      i = /** @type {Element} */
      A, x();
    else {
      var a = n.render().trim(), s = Bt(a);
      i = /** @type {Element} */
      M(s), t.before(i);
    }
    const f = (u = n.setup) == null ? void 0 : u.call(n, i);
    O(i, i), typeof f == "function" && j(f);
  };
}
function Ms(e, t, r) {
  var n;
  b && (n = A, x());
  var i = new Le(e);
  ne(() => {
    var a = t() ?? null;
    if (b) {
      var s = Rt(
        /** @type {TemplateNode} */
        n
      ), f = s === St, u = a !== null;
      if (f !== u) {
        var o = Ne();
        C(o), i.anchor = o, S(!1), i.ensure(a, a && ((l) => r(l, a))), S(!0);
        return;
      }
    }
    i.ensure(a, a && ((l) => r(l, a)));
  }, Ce);
}
const Os = () => performance.now(), Z = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Os(),
  tasks: /* @__PURE__ */ new Set()
};
function ln() {
  const e = Z.now();
  Z.tasks.forEach((t) => {
    t.c(e) || (Z.tasks.delete(t), t.f());
  }), Z.tasks.size !== 0 && Z.tick(ln);
}
function Ps(e) {
  let t;
  return Z.tasks.size === 0 && Z.tick(ln), {
    promise: new Promise((r) => {
      Z.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Z.tasks.delete(t);
    }
  };
}
function tt(e, t) {
  Ve(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Rs(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function ur(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const s = Rs(i.trim());
    t[s] = a.trim();
  }
  return t;
}
const Is = (e) => e;
let cn = null;
function or(e) {
  cn = e;
}
function Ds(e, t, r) {
  var n = cn ?? /** @type {Effect} */
  R, i = (
    /** @type {EffectNodes} */
    n.nodes
  ), a, s, f, u = null;
  i.a ?? (i.a = {
    element: e,
    measure() {
      a = this.element.getBoundingClientRect();
    },
    apply() {
      if (f == null || f.abort(), s = this.element.getBoundingClientRect(), a.left !== s.left || a.right !== s.right || a.top !== s.top || a.bottom !== s.bottom) {
        const o = t()(this.element, { from: a, to: s }, r == null ? void 0 : r());
        f = rt(this.element, o, void 0, 1, () => {
          f == null || f.abort(), f = void 0;
        });
      }
    },
    fix() {
      if (!e.getAnimations().length) {
        var { position: o, width: l, height: v } = getComputedStyle(e);
        if (o !== "absolute" && o !== "fixed") {
          var c = (
            /** @type {HTMLElement | SVGElement} */
            e.style
          );
          u = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = l, c.height = v;
          var h = e.getBoundingClientRect();
          if (a.left !== h.left || a.top !== h.top) {
            var _ = `translate(${a.left - h.left}px, ${a.top - h.top}px)`;
            c.transform = c.transform ? `${c.transform} ${_}` : _;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var o = (
          /** @type {HTMLElement | SVGElement} */
          e.style
        );
        o.position = u.position, o.width = u.width, o.height = u.height, o.transform = u.transform;
      }
    }
  }), i.a.element = e;
}
function Hs(e, t, r, n) {
  var m;
  var i = (e & li) !== 0, a = (e & ci) !== 0, s = i && a, f = (e & oi) !== 0, u = s ? "both" : i ? "in" : "out", o, l = t.inert, v = t.style.overflow, c, h;
  function _() {
    return Ve(() => o ?? (o = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
    {}, {
      direction: u
    })));
  }
  var $ = {
    is_global: f,
    in() {
      var w;
      if (t.inert = l, !i) {
        h == null || h.abort(), (w = h == null ? void 0 : h.reset) == null || w.call(h);
        return;
      }
      a || c == null || c.abort(), c = rt(t, _(), h, 1, () => {
        tt(t, "introend"), c == null || c.abort(), c = o = void 0, t.style.overflow = v;
      });
    },
    out(w) {
      if (!a) {
        w == null || w(), o = void 0;
        return;
      }
      t.inert = !0, h = rt(t, _(), c, 0, () => {
        tt(t, "outroend"), w == null || w();
      });
    },
    stop: () => {
      c == null || c.abort(), h == null || h.abort();
    }
  }, d = (
    /** @type {Effect & { nodes: EffectNodes }} */
    R
  );
  if (((m = d.nodes).t ?? (m.t = [])).push($), i && et) {
    var p = f;
    if (!p) {
      for (var y = (
        /** @type {Effect | null} */
        d.parent
      ); y && (y.f & Ce) !== 0; )
        for (; (y = y.parent) && (y.f & ui) === 0; )
          ;
      p = !y || (y.f & yr) !== 0;
    }
    p && G(() => {
      q(() => $.in());
    });
  }
}
function rt(e, t, r, n, i) {
  var a = n === 1;
  if (ge(t)) {
    var s, f = !1;
    return de(() => {
      if (!f) {
        var d = t({ direction: a ? "in" : "out" });
        s = rt(e, d, r, n, i);
      }
    }), {
      abort: () => {
        f = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration) && !(t != null && t.delay))
    return tt(e, a ? "introstart" : "outrostart"), i(), {
      abort: $e,
      deactivate: $e,
      reset: $e,
      t: () => n
    };
  const { delay: u = 0, css: o, tick: l, easing: v = Is } = t;
  var c = [];
  if (a && r === void 0 && (l && l(0, 1), o)) {
    var h = ur(o(0, 1));
    c.push(h, h);
  }
  var _ = () => 1 - n, $ = e.animate(c, { duration: u, fill: "forwards" });
  return $.onfinish = () => {
    $.cancel(), tt(e, a ? "introstart" : "outrostart");
    var d = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var p = n - d, y = (
      /** @type {number} */
      t.duration * Math.abs(p)
    ), m = [];
    if (y > 0) {
      var w = !1;
      if (o)
        for (var z = Math.ceil(y / 16.666666666666668), T = 0; T <= z; T += 1) {
          var E = d + p * v(T / z), N = ur(o(E, 1 - E));
          m.push(N), w || (w = N.overflow === "hidden");
        }
      w && (e.style.overflow = "hidden"), _ = () => {
        var L = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          $.currentTime
        );
        return d + p * v(L / y);
      }, l && Ps(() => {
        if ($.playState !== "running") return !1;
        var L = _();
        return l(L, 1 - L), !0;
      });
    }
    $ = e.animate(m, { duration: y, fill: "forwards" }), $.onfinish = () => {
      _ = () => n, l == null || l(n, 1 - n), i();
    };
  }, {
    abort: () => {
      $ && ($.cancel(), $.effect = null, $.onfinish = $e);
    },
    deactivate: () => {
      i = $e;
    },
    reset: () => {
      n === 0 && (l == null || l(1, 0));
    },
    t: () => _()
  };
}
function Fs(e, t, r, n, i, a) {
  let s = b;
  b && x();
  var f = null;
  b && A.nodeType === $r && (f = /** @type {Element} */
  A, x());
  var u = (
    /** @type {TemplateNode} */
    b ? A : e
  ), o = (
    /** @type {Effect} */
    R
  ), l = new Le(u, !1);
  ne(() => {
    const v = t() || null;
    var c = i ? i() : r || v === "svg" ? Ge : void 0;
    if (v === null) {
      l.ensure(null, null), Ee(!0);
      return;
    }
    return l.ensure(v, (h) => {
      if (v) {
        if (f = b ? (
          /** @type {Element} */
          f
        ) : oe(v, c), O(f, f), n) {
          b && Da(v) && f.append(document.createComment(""));
          var _ = b ? M(f) : f.appendChild(Y());
          b && (_ === null ? S(!1) : C(_)), or(o), n(f, _), or(null);
        }
        R.nodes.end = f, h.before(f);
      }
      b && C(h);
    }), Ee(!0), () => {
      v && Ee(!1);
    };
  }, Ce), j(() => {
    Ee(!0);
  }), s && (S(!0), C(u));
}
function xs(e, t) {
  let r = null, n = b;
  var i;
  if (b) {
    r = A;
    for (var a = M(document.head); a !== null && (a.nodeType !== he || /** @type {Comment} */
    a.data !== e); )
      a = De(a);
    if (a === null)
      S(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        De(a)
      );
      a.remove(), C(s);
    }
  }
  b || (i = document.head.appendChild(Y()));
  try {
    ne(() => t(i), di | vi);
  } finally {
    n && (S(!0), C(
      /** @type {TemplateNode} */
      r
    ));
  }
}
function Bs(e, t) {
  G(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = oe("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function zs(e, t, r) {
  G(() => {
    var n = q(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      P(() => {
        var s = r();
        Ft(s), i && hi(a, s) && (a = s, n.update(s));
      }), i = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function zt(e, t) {
  var r = void 0, n;
  Fr(() => {
    r !== (r = t()) && (n && (se(n), n = null), r && (n = ue(() => {
      G(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
const Vs = /[&"<]/g;
function Gs(e, t) {
  const r = String(e ?? ""), n = Vs;
  n.lastIndex = 0;
  let i = "", a = 0;
  for (; n.test(r); ) {
    const s = n.lastIndex - 1, f = r[s];
    i += r.substring(a, s) + (f === "&" ? "&amp;" : f === '"' ? "&quot;" : "&lt;"), a = s + 1;
  }
  return i + r.substring(a);
}
function dn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = dn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function qs() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = dn(e)) && (n && (n += " "), n += t);
  return n;
}
const lr = {
  translate: /* @__PURE__ */ new Map([
    [!0, "yes"],
    [!1, "no"]
  ])
};
function Us(e, t, r = !1) {
  if (e === "hidden" && t !== "until-found" && (r = !0), t == null || !t && r) return "";
  const n = _i.call(lr, e) && lr[e].get(t) || t, i = r ? '=""' : `="${Gs(n)}"`;
  return ` ${e}${i}`;
}
function vn(e) {
  return typeof e == "object" ? qs(e) : e ?? "";
}
const cr = [...` 	
\r\f \v\uFEFF`];
function Ws(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var i of Object.keys(r))
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || cr.includes(n[s - 1])) && (f === n.length || cr.includes(n[f])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(f + 1) : s = f;
        }
  }
  return n === "" ? null : n;
}
function dr(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function dt(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ys(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, f = !1, u = [];
      n && u.push(...Object.keys(n).map(dt)), i && u.push(...Object.keys(i).map(dt));
      var o = 0, l = -1;
      const $ = e.length;
      for (var v = 0; v < $; v++) {
        var c = e[v];
        if (f ? c === "/" && e[v - 1] === "*" && (f = !1) : a ? a === c && (a = !1) : c === "/" && e[v + 1] === "*" ? f = !0 : c === '"' || c === "'" ? a = c : c === "(" ? s++ : c === ")" && s--, !f && a === !1 && s === 0) {
          if (c === ":" && l === -1)
            l = v;
          else if (c === ";" || v === $ - 1) {
            if (l !== -1) {
              var h = dt(e.substring(o, l).trim());
              if (!u.includes(h)) {
                c !== ";" && v++;
                var _ = e.substring(o, v).trim();
                r += " " + _ + ";";
              }
            }
            o = v + 1, l = -1;
          }
        }
      }
    }
    return n && (r += dr(n)), i && (r += dr(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function hn(e, t, r, n, i, a) {
  var s = e.__className;
  if (b || s !== r || s === void 0) {
    var f = Ws(r, n, a);
    (!b || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : t ? e.className = f : e.setAttribute("class", f)), e.__className = r;
  } else if (a && i !== a)
    for (var u in a) {
      var o = !!a[u];
      (i == null || o !== !!i[u]) && e.classList.toggle(u, o);
    }
  return a;
}
function vt(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function _n(e, t, r, n) {
  var i = e.__style;
  if (b || i !== t) {
    var a = Ys(t, n);
    (!b || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  } else n && (Array.isArray(n) ? (vt(e, r == null ? void 0 : r[0], n[0]), vt(e, r == null ? void 0 : r[1], n[1], "important")) : vt(e, r, n));
  return n;
}
function He(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Dt(t))
      return bi();
    for (var n of e.options)
      n.selected = t.includes(Ie(n));
    return;
  }
  for (n of e.options) {
    var i = Ie(n);
    if (xr(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Vt(e) {
  var t = new MutationObserver(() => {
    He(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), j(() => {
    t.disconnect();
  });
}
function Ks(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Ue(e, "change", (a) => {
    var s = a ? "[selected]" : ":checked", f;
    if (e.multiple)
      f = [].map.call(e.querySelectorAll(s), Ie);
    else {
      var u = e.querySelector(s) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      f = u && Ie(u);
    }
    r(f), e.__value = f, X !== null && n.add(X);
  }), G(() => {
    var a = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        X
      );
      if (n.has(s))
        return;
    }
    if (He(e, a, i), i && a === void 0) {
      var f = e.querySelector(":checked");
      f !== null && (a = Ie(f), r(a));
    }
    e.__value = a, i = !1;
  }), Vt(e);
}
function Ie(e) {
  return "__value" in e ? e.__value : e.value;
}
const we = Symbol("class"), me = Symbol("style"), bn = Symbol("is custom element"), pn = Symbol("is html"), Xs = _e ? "link" : "LINK", Js = _e ? "input" : "INPUT", Zs = _e ? "option" : "OPTION", Qs = _e ? "select" : "SELECT", js = _e ? "progress" : "PROGRESS";
function gn(e) {
  if (b) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ke(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ke(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, de(r), pi();
  }
}
function ef(e, t) {
  var r = ut(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== js) || (e.value = t ?? "");
}
function tf(e, t) {
  var r = ut(e);
  r.checked !== (r.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function $n(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function rf(e, t) {
  const r = e.checked;
  e.defaultChecked = t, e.checked = r;
}
function nf(e, t) {
  const r = e.value;
  e.defaultValue = t, e.value = r;
}
function ke(e, t, r, n) {
  var i = ut(e);
  b && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Xs) || i[t] !== (i[t] = r) && (t === "loading" && (e[gi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Gt(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function af(e, t, r) {
  e.setAttributeNS("http://www.w3.org/1999/xlink", t, r);
}
function sf(e, t, r) {
  var n = wr, i = R;
  let a = b;
  b && S(!1), Ze(null), ye(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (At.has(e.getAttribute("is") || e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.getAttribute("is") || e.nodeName.toLowerCase()) ? Gt(e).includes(t) : r && typeof r == "object") ? e[t] = r : ke(e, t, r == null ? r : String(r));
  } finally {
    Ze(n), ye(i), a && S(!0);
  }
}
function ff(e, t, r, n, i = !1, a = !1) {
  if (b && i && e.nodeName === Js) {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), f = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    f in r || gn(s);
  }
  var u = ut(e), o = u[bn], l = !u[pn];
  let v = b && o;
  v && S(!1);
  var c = t || {}, h = e.nodeName === Zs;
  for (var _ in t)
    _ in r || (r[_] = null);
  r.class ? r.class = vn(r.class) : (n || r[we]) && (r.class = null), r[me] && (r.style ?? (r.style = null));
  var $ = Gt(e);
  for (const T in r) {
    let E = r[T];
    if (h && T === "value" && E == null) {
      e.value = e.__value = "", c[T] = E;
      continue;
    }
    if (T === "class") {
      var d = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      hn(e, d, E, n, t == null ? void 0 : t[we], r[we]), c[T] = E, c[we] = r[we];
      continue;
    }
    if (T === "style") {
      _n(e, E, t == null ? void 0 : t[me], r[me]), c[T] = E, c[me] = r[me];
      continue;
    }
    var p = c[T];
    if (!(E === p && !(E === void 0 && e.hasAttribute(T)))) {
      c[T] = E;
      var y = T[0] + T[1];
      if (y !== "$$")
        if (y === "on") {
          const N = {}, L = "$$" + T;
          let k = T.slice(2);
          var m = La(k);
          if (ka(k) && (k = k.slice(0, -7), N.capture = !0), !m && p) {
            if (E != null) continue;
            e.removeEventListener(k, c[L], N), c[L] = null;
          }
          if (m)
            en(k, e, E), tn([k]);
          else if (E != null) {
            let ee = function(D) {
              c[T].call(this, D);
            };
            c[L] = xt(k, e, ee, N);
          }
        } else if (T === "style")
          ke(e, T, E);
        else if (T === "autofocus")
          Br(
            /** @type {HTMLElement} */
            e,
            !!E
          );
        else if (!o && (T === "__value" || T === "value" && E != null))
          e.value = e.__value = E;
        else if (T === "selected" && h)
          $n(
            /** @type {HTMLOptionElement} */
            e,
            E
          );
        else {
          var w = T;
          l || (w = Oa(w));
          var z = w === "defaultValue" || w === "defaultChecked";
          if (E == null && !o && !z)
            if (u[T] = null, w === "value" || w === "checked") {
              let N = (
                /** @type {HTMLInputElement} */
                e
              );
              const L = t === void 0;
              if (w === "value") {
                let k = N.defaultValue;
                N.removeAttribute(w), N.defaultValue = k, N.value = N.__value = L ? k : null;
              } else {
                let k = N.defaultChecked;
                N.removeAttribute(w), N.defaultChecked = k, N.checked = L ? k : !1;
              }
            } else
              e.removeAttribute(T);
          else z || $.includes(w) && (o || typeof E != "string") ? (e[w] = E, w in u && (u[w] = Pe)) : typeof E != "function" && ke(e, w, E);
        }
    }
  }
  return v && S(!0), c;
}
function uf(e, t, r = [], n = [], i = [], a, s = !1, f = !1) {
  Lr(i, r, n, (u) => {
    var o = void 0, l = {}, v = e.nodeName === Qs, c = !1;
    if (Fr(() => {
      var _ = t(...u.map(I)), $ = ff(
        e,
        o,
        _,
        a,
        s,
        f
      );
      c && v && "value" in _ && He(
        /** @type {HTMLSelectElement} */
        e,
        _.value
      );
      for (let p of Object.getOwnPropertySymbols(l))
        _[p] || se(l[p]);
      for (let p of Object.getOwnPropertySymbols(_)) {
        var d = _[p];
        p.description === pr && (!o || d !== o[p]) && (l[p] && se(l[p]), l[p] = ue(() => zt(e, () => d))), $[p] = d;
      }
      o = $;
    }), v) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      G(() => {
        He(
          h,
          /** @type {Record<string | symbol, any>} */
          o.value,
          !0
        ), Vt(h);
      });
    }
    c = !0;
  });
}
function ut(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [bn]: e.nodeName.includes("-"),
      [pn]: e.namespaceURI === $i
    })
  );
}
var At = /* @__PURE__ */ new Map();
function Gt(e) {
  var t = e.getAttribute("is") || e.nodeName, r = At.get(t);
  if (r) return r;
  At.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = mi(i);
    for (var s in n)
      n[s].set && r.push(s);
    i = wi(i);
  }
  return r;
}
let ht = null;
function wn() {
  var t, r;
  if (ht === null) {
    var e = oe("select");
    e.innerHTML = rn("<option><span>t</span></option>"), ht = /** @type {Element} */
    ((r = (t = e.firstChild) == null ? void 0 : t.firstChild) == null ? void 0 : r.nodeType) === 1;
  }
  return ht;
}
function of(e, t) {
  wn() && zt(e, () => () => {
    const r = e.closest("select");
    if (!r) return;
    const n = new MutationObserver((i) => {
      var s, f;
      var a = !1;
      for (const u of i) {
        if (u.target === e)
          return;
        a || (a = !!((f = (s = u.target.parentElement) == null ? void 0 : s.closest("option")) != null && f.selected));
      }
      a && (e.replaceWith(e = /** @type {HTMLElement} */
      e.cloneNode(!0)), t(e));
    });
    return n.observe(r, {
      childList: !0,
      characterData: !0,
      subtree: !0
    }), () => {
      n.disconnect();
    };
  });
}
function lf(e, t) {
  var r = b;
  wn() || (S(!1), e.textContent = "", e.append(Tr("")));
  try {
    t();
  } finally {
    r && (b ? zr(e) : (S(!0), C(e)));
  }
}
function cf(e) {
  B(document, ["focusin", "focusout"], (t) => {
    t && t.type === "focusout" && /** @type {FocusEvent} */
    t.relatedTarget || e(document.activeElement);
  });
}
function df(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Ue(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = bt(e) ? pt(a) : a, r(a), X !== null && n.add(X), await Vr(), a !== (a = t())) {
      var s = e.selectionStart, f = e.selectionEnd, u = e.value.length;
      if (e.value = a ?? "", f !== null) {
        var o = e.value.length;
        s === f && f === u && o > u ? (e.selectionStart = o, e.selectionEnd = o) : (e.selectionStart = s, e.selectionEnd = Math.min(f, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (b && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  q(t) == null && e.value) && (r(bt(e) ? pt(e.value) : e.value), X !== null && n.add(X)), P(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        X
      );
      if (n.has(a))
        return;
    }
    bt(e) && i === pt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
const _t = /* @__PURE__ */ new Set();
function vf(e, t, r, n, i = n) {
  var a = r.getAttribute("type") === "checkbox", s = e;
  let f = !1;
  if (t !== null)
    for (var u of t)
      s = s[u] ?? (s[u] = []);
  s.push(r), Ue(
    r,
    "change",
    () => {
      var o = r.__value;
      a && (o = vr(s, o, r.checked)), i(o);
    },
    // TODO better default value handling
    () => i(a ? [] : null)
  ), P(() => {
    var o = n();
    if (b && r.defaultChecked !== r.checked) {
      f = !0;
      return;
    }
    a ? (o = o || [], r.checked = o.includes(r.__value)) : r.checked = xr(r.__value, o);
  }), j(() => {
    var o = s.indexOf(r);
    o !== -1 && s.splice(o, 1);
  }), _t.has(s) || (_t.add(s), de(() => {
    s.sort((o, l) => o.compareDocumentPosition(l) === 4 ? -1 : 1), _t.delete(s);
  })), de(() => {
    if (f) {
      var o;
      if (a)
        o = vr(s, o, r.checked);
      else {
        var l = s.find((v) => v.checked);
        o = l == null ? void 0 : l.__value;
      }
      i(o);
    }
  });
}
function hf(e, t, r = t) {
  Ue(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (b && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  q(t) == null) && r(e.checked), P(() => {
    var n = t();
    e.checked = !!n;
  });
}
function vr(e, t, r) {
  for (var n = /* @__PURE__ */ new Set(), i = 0; i < e.length; i += 1)
    e[i].checked && n.add(e[i].__value);
  return r || n.delete(t), Array.from(n);
}
function bt(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function pt(e) {
  return e === "" ? null : +e;
}
function _f(e, t, r = t) {
  Ue(e, "change", () => {
    r(e.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  b && e.files && r(e.files), P(() => {
    e.files = t();
  });
}
function qt(e) {
  for (var t = [], r = 0; r < e.length; r += 1)
    t.push({ start: e.start(r), end: e.end(r) });
  return t;
}
function bf(e, t, r = t) {
  var n, i, a = () => {
    cancelAnimationFrame(n), e.paused || (n = requestAnimationFrame(a));
    var s = e.currentTime;
    i !== s && r(i = s);
  };
  n = requestAnimationFrame(a), e.addEventListener("timeupdate", a), P(() => {
    var s = Number(t());
    i !== s && !isNaN(
      /** @type {any} */
      s
    ) && (e.currentTime = i = s);
  }), j(() => {
    cancelAnimationFrame(n), e.removeEventListener("timeupdate", a);
  });
}
function pf(e, t) {
  var r;
  B(e, ["loadedmetadata", "progress", "timeupdate", "seeking"], () => {
    var n = e.buffered;
    (!r || r.length !== n.length || r.some((i, a) => n.start(a) !== i.start || n.end(a) !== i.end)) && (r = qt(n), t(r));
  });
}
function gf(e, t) {
  B(e, ["loadedmetadata"], () => t(qt(e.seekable)));
}
function $f(e, t) {
  B(e, ["timeupdate"], () => t(qt(e.played)));
}
function wf(e, t) {
  B(e, ["seeking", "seeked"], () => t(e.seeking));
}
function mf(e, t) {
  B(e, ["timeupdate", "ended"], () => t(e.ended));
}
function Ef(e, t) {
  B(
    e,
    ["loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "emptied"],
    () => t(e.readyState)
  );
}
function Tf(e, t, r = t) {
  G(() => {
    var n = Number(t());
    n !== e.playbackRate && !isNaN(n) && (e.playbackRate = n);
  }), G(() => {
    B(e, ["ratechange"], () => {
      r(e.playbackRate);
    });
  });
}
function yf(e, t, r = t) {
  var n = t(), i = () => {
    n !== e.paused && r(n = e.paused);
  };
  B(e, ["play", "pause", "canplay"], i, n == null), G(() => {
    (n = !!t()) !== e.paused && (n ? e.pause() : e.play().catch((a) => {
      throw r(n = !0), a;
    }));
  });
}
function Af(e, t, r = t) {
  var n = () => {
    r(e.volume);
  };
  t() == null && n(), B(e, ["volumechange"], n, !1), P(() => {
    var i = Number(t());
    i !== e.volume && !isNaN(i) && (e.volume = i);
  });
}
function Sf(e, t, r = t) {
  var n = () => {
    r(e.muted);
  };
  t() == null && n(), B(e, ["volumechange"], n, !1), P(() => {
    var i = !!t();
    e.muted !== i && (e.muted = i);
  });
}
function Nf(e) {
  B(window, ["online", "offline"], () => {
    e(navigator.onLine);
  });
}
function kf(e, t, r) {
  var n = Se(e, t);
  n && n.set && (e[t] = r, j(() => {
    e[t] = null;
  }));
}
var ae, Te, ze, it, mn;
const at = class at {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    F(this, it);
    /** */
    F(this, ae, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    F(this, Te);
    /** @type {ResizeObserverOptions} */
    F(this, ze);
    be(this, ze, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var n = g(this, ae).get(t) || /* @__PURE__ */ new Set();
    return n.add(r), g(this, ae).set(t, n), Zt(this, it, mn).call(this).observe(t, g(this, ze)), () => {
      var i = g(this, ae).get(t);
      i.delete(r), i.size === 0 && (g(this, ae).delete(t), g(this, Te).unobserve(t));
    };
  }
};
ae = new WeakMap(), Te = new WeakMap(), ze = new WeakMap(), it = new WeakSet(), mn = function() {
  return g(this, Te) ?? be(this, Te, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        at.entries.set(r.target, r);
        for (var n of g(this, ae).get(r.target) || [])
          n(r);
      }
    }
  ));
}, /** @static */
H(at, "entries", /* @__PURE__ */ new WeakMap());
let Fe = at;
var Cf = /* @__PURE__ */ new Fe({
  box: "content-box"
}), En = /* @__PURE__ */ new Fe({
  box: "border-box"
}), Lf = /* @__PURE__ */ new Fe({
  box: "device-pixel-content-box"
});
function Mf(e, t, r) {
  var n = t === "contentRect" || t === "contentBoxSize" ? Cf : t === "borderBoxSize" ? En : Lf, i = n.observe(
    e,
    /** @param {any} entry */
    (a) => r(a[t])
  );
  j(i);
}
function Of(e, t, r) {
  var n = En.observe(e, () => r(e[t]));
  G(() => (q(() => r(e[t])), n));
}
function hr(e, t) {
  return e === t || (e == null ? void 0 : e[fe]) === t;
}
function Pf(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    Ae.r
  ), a = (
    /** @type {Effect} */
    R
  );
  return G(() => {
    var s, f;
    return P(() => {
      s = f, f = (n == null ? void 0 : n()) || [], q(() => {
        e !== r(...f) && (t(e, ...f), s && hr(r(...s), e) && t(null, ...s));
      });
    }), () => {
      let u = a;
      for (; u !== i && u.parent !== null && u.parent.f & Ei; )
        u = u.parent;
      const o = () => {
        f && hr(r(...f), e) && t(null, ...f);
      }, l = u.teardown;
      u.teardown = () => {
        o(), l == null || l();
      };
    };
  }), e;
}
function Rf(e, t, r, n = r) {
  t.addEventListener("input", () => {
    n(t[e]);
  }), P(() => {
    var i = r();
    if (t[e] !== i)
      if (i == null) {
        var a = t[e];
        n(a);
      } else
        t[e] = i + "";
  });
}
function If(e, t, r, n, i) {
  var a = () => {
    n(r[e]);
  };
  r.addEventListener(t, a), i ? P(() => {
    r[e] = i();
  }) : a(), (r === document.body || r === window || r === document) && j(() => {
    r.removeEventListener(t, a);
  });
}
function Df(e, t) {
  B(e, ["focus", "blur"], () => {
    t(e === document.activeElement);
  });
}
function Hf(e, t, r = t) {
  var n = e === "x", i = () => Ve(() => {
    a = !0, clearTimeout(s), s = setTimeout(f, 100), r(window[n ? "scrollX" : "scrollY"]);
  });
  addEventListener("scroll", i, {
    passive: !0
  });
  var a = !1, s, f = () => {
    a = !1;
  }, u = !0;
  P(() => {
    var o = t();
    u ? u = !1 : !a && o != null && (a = !0, clearTimeout(s), n ? scrollTo(o, window.scrollY) : scrollTo(window.scrollX, o), s = setTimeout(f, 100));
  }), G(i), j(() => {
    removeEventListener("scroll", i);
  });
}
function Ff(e, t) {
  B(window, ["resize"], () => Ve(() => t(window[e])));
}
function xf(e) {
  return function(...t) {
    var r = (
      /** @type {Event} */
      t[0]
    );
    r.isTrusted && (e == null || e.apply(this, t));
  };
}
function Bf(e) {
  return function(...t) {
    var r = (
      /** @type {Event} */
      t[0]
    );
    r.target === this && (e == null || e.apply(this, t));
  };
}
function zf(e) {
  return function(...t) {
    var r = (
      /** @type {Event} */
      t[0]
    );
    return r.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Vf(e) {
  var t = !1;
  return function(...r) {
    if (!t)
      return t = !0, e == null ? void 0 : e.apply(this, r);
  };
}
function Gf(e) {
  return function(...t) {
    var r = (
      /** @type {Event} */
      t[0]
    );
    return r.stopImmediatePropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function qf(e) {
  return function(...t) {
    var r = (
      /** @type {Event} */
      t[0]
    );
    return r.preventDefault(), e == null ? void 0 : e.apply(this, t);
  };
}
function Uf(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ae
  ), r = t.l.u;
  if (!r) return;
  let n = () => Ft(t.s);
  if (e) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = qr(() => {
      let f = !1;
      const u = t.s;
      for (const o in u)
        u[o] !== a[o] && (a[o] = u[o], f = !0);
      return f && i++, i;
    });
    n = () => I(s);
  }
  r.b.length && Gr(() => {
    _r(t, n), tr(r.b);
  }), $t(() => {
    const i = q(() => r.m.map(Ti));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), r.a.length && $t(() => {
    _r(t, n), tr(r.a);
  });
}
function _r(e, t) {
  if (e.l.s)
    for (const r of e.l.s) I(r);
  t();
}
function Wf(e) {
  var t = ve(0);
  return function() {
    return arguments.length === 1 ? (qe(t, I(t) + 1), arguments[0]) : (I(t), e());
  };
}
function Yf(e, t) {
  var a;
  var r = (
    /** @type {Record<string, Function[] | Function>} */
    (a = e.$$events) == null ? void 0 : a[t.type]
  ), n = Dt(r) ? r.slice() : r == null ? [] : [r];
  for (var i of n)
    i.call(this, t);
}
function Kf(e, t, r) {
  var n;
  e.$$events || (e.$$events = {}), (n = e.$$events)[t] || (n[t] = []), e.$$events[t].push(r);
}
function Xf(e) {
  for (var t in e)
    t in this && (this[t] = e[t]);
}
function Jf(e, t = 1) {
  const r = e();
  return e(r + t), r;
}
function Zf(e, t = 1) {
  const r = e() + t;
  return e(r), r;
}
const Qf = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function jf(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Qf
  );
}
const eu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return I(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, r) {
    if (!(t in e.special)) {
      var n = R;
      try {
        ye(e.parent_effect), e.special[t] = Tn(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Wr
        );
      } finally {
        ye(n);
      }
    }
    return e.special[t](r), wt(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), wt(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function tu(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: ve(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        R
      )
    },
    eu
  );
}
const ru = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (ge(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      ge(i) && (i = i());
      const a = Se(i, t);
      if (a && a.set)
        return a.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (ge(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Se(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === fe || t === ft) return !1;
    for (let r of e.props)
      if (ge(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (ge(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function nu(...e) {
  return new Proxy({ props: e }, ru);
}
function Tn(e, t, r, n) {
  var y;
  var i = (r & Ai) !== 0, a = (r & ki) !== 0, s = (
    /** @type {V} */
    n
  ), f = !0, u = () => (f && (f = !1, s = a ? q(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s);
  let o;
  if (i) {
    var l = fe in e || ft in e;
    o = ((y = Se(e, t)) == null ? void 0 : y.set) ?? (l && t in e ? (m) => e[t] = m : void 0);
  }
  var v, c = !1;
  i ? [v, c] = Ur(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = u(), o && (yi(), o(v)));
  var h;
  if (h = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? u() : (f = !0, m);
  }, (r & Wr) === 0)
    return h;
  if (o) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(m, w) {
        return arguments.length > 0 ? ((!w || _ || c) && o(w ? h() : m), m) : h();
      })
    );
  }
  var $ = !1, d = ((r & Si) !== 0 ? qr : It)(() => ($ = !1, h()));
  i && I(d);
  var p = (
    /** @type {Effect} */
    R
  );
  return (
    /** @type {() => V} */
    (function(m, w) {
      if (arguments.length > 0) {
        const z = w ? I(d) : i ? Yr(m) : m;
        return qe(d, z), $ = !0, s !== void 0 && (s = z), m;
      }
      return Ni && $ || (p.f & Ir) !== 0 ? d.v : I(d);
    })
  );
}
function iu(e, t, r, n, i, a) {
  Kr(t, () => {
    var f;
    var s = !1;
    (f = Hr) == null || f[W], P(() => {
      if (!s) {
        var [u, o] = Ur(r);
        if (!o) {
          var l = n(), v = !1, c = P(() => {
            v || u[l];
          });
          v = !0, c.deps === null && (Ci(), s = !0);
        }
      }
    });
  });
}
function au(e) {
  return new su(e);
}
var re, U;
class su {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    F(this, re);
    /** @type {Record<string, any>} */
    F(this, U);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (s, f) => {
      var u = Ht(f, !1, !1);
      return r.set(s, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return I(r.get(f) ?? n(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === ft ? !0 : (I(r.get(f) ?? n(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, u) {
          return qe(r.get(f) ?? n(f, u), u), Reflect.set(s, f, u);
        }
      }
    );
    be(this, U, (t.hydrate ? ns : fn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && Pt(), be(this, re, i.$$events);
    for (const s of Object.keys(g(this, U)))
      s === "$set" || s === "$destroy" || s === "$on" || Je(this, s, {
        get() {
          return g(this, U)[s];
        },
        /** @param {any} value */
        set(f) {
          g(this, U)[s] = f;
        },
        enumerable: !0
      });
    g(this, U).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, g(this, U).$destroy = () => {
      is(g(this, U));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    g(this, U).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    g(this, re)[t] = g(this, re)[t] || [];
    const n = (...i) => r.call(this, ...i);
    return g(this, re)[t].push(n), () => {
      g(this, re)[t] = g(this, re)[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    g(this, U).$destroy();
  }
}
re = new WeakMap(), U = new WeakMap();
let yn;
typeof HTMLElement == "function" && (yn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    H(this, "$$ctor");
    /** Slots */
    H(this, "$$s");
    /** @type {any} The Svelte component instance */
    H(this, "$$c");
    /** Whether or not the custom element is connected */
    H(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    H(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    H(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    H(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    H(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    H(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    H(this, "$$me");
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    H(this, "$$shadowRoot", null);
    this.$$ctor = t, this.$$s = r, n && (this.$$shadowRoot = this.attachShadow(n));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (a) => {
          const s = oe("slot");
          i !== "default" && (s.name = i), sn(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = fu(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Xe(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = au({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Xr(() => {
        P(() => {
          var i;
          this.$$r = !0;
          for (const a of je(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Xe(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const s = this.$$c.$on(i, a);
          this.$$l_u.set(a, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Xe(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return je(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Xe(e, t, r, n) {
  var a;
  const i = (a = r[e]) == null ? void 0 : a.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function fu(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function uu(e, t, r, n, i, a) {
  let s = class extends yn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return je(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return je(t).forEach((f) => {
    Je(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        var v;
        u = Xe(f, u, t), this.$$d[f] = u;
        var o = this.$$c;
        if (o) {
          var l = (v = Se(o, f)) == null ? void 0 : v.get;
          l ? o[f] = u : o.$set({ [f]: u });
        }
      }
    });
  }), n.forEach((f) => {
    Je(s.prototype, f, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[f];
      }
    });
  }), a && (s = a(s)), e.element = /** @type {any} */
  s, s;
}
function ou(e, ...t) {
  return q(() => {
    try {
      let r = !1;
      const n = [];
      for (const i of t)
        i && typeof i == "object" && fe in i ? (n.push(Lt(i, !0)), r = !0) : n.push(i);
      r && (Li(e), console.log("%c[snapshot]", "color: grey", ...n));
    } catch {
    }
  }), t;
}
const hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CLASS: we,
  FILENAME: W,
  HMR: pe,
  NAMESPACE_SVG: Ge,
  STYLE: me,
  aborted: Mi,
  action: zs,
  get active_effect() {
    return R;
  },
  add_legacy_event_listener: Kf,
  add_locations: Ba,
  add_svelte_meta: Oi,
  animation: Ds,
  append: sn,
  append_styles: Bs,
  apply: qa,
  assign: Ha,
  assign_async: Fa,
  async: ls,
  async_derived: Pi,
  attach: zt,
  attachment: Aa,
  attr: Us,
  attribute_effect: uf,
  autofocus: Br,
  await: vs,
  bind_active_element: cf,
  bind_buffered: pf,
  bind_checked: hf,
  bind_content_editable: Rf,
  bind_current_time: bf,
  bind_element_size: Of,
  bind_ended: mf,
  bind_files: _f,
  bind_focused: Df,
  bind_group: vf,
  bind_muted: Sf,
  bind_online: Nf,
  bind_paused: yf,
  bind_playback_rate: Tf,
  bind_played: $f,
  bind_prop: kf,
  bind_property: If,
  bind_ready_state: Ef,
  bind_resize_observer: Mf,
  bind_seekable: gf,
  bind_seeking: wf,
  bind_select_value: Ks,
  bind_this: Pf,
  bind_value: df,
  bind_volume: Af,
  bind_window_scroll: Hf,
  bind_window_size: Ff,
  boundary: Sr,
  bubble_event: Yf,
  check_target: fs,
  child: Ri,
  cleanup_styles: xa,
  clsx: vn,
  comment: es,
  component: Ms,
  create_custom_element: uu,
  create_ownership_validator: ss,
  css_props: ps,
  customizable_select: lf,
  deep_read: Ii,
  deep_read_state: Ft,
  deferred_template_effect: Di,
  delegate: tn,
  delegated: en,
  derived: Hi,
  derived_safe_equal: It,
  get document() {
    return Fi;
  },
  each: ws,
  eager: xi,
  effect: G,
  effect_root: Xr,
  effect_tracking: Bi,
  element: Fs,
  equals: zi,
  event: Ga,
  exclude_from_object: Vi,
  fallback: Gi,
  first_child: qi,
  flush: Pt,
  for_await_track_reactivity_loss: Ui,
  from_html: Ya,
  from_mathml: Xa,
  from_svg: Ka,
  from_tree: Ja,
  get: I,
  head: xs,
  hmr: as,
  html: Ts,
  hydrate_template: Wi,
  if: hs,
  index: gs,
  init: Uf,
  init_select: Vt,
  inspect: os,
  invalid_default_snippet: Yi,
  invalidate_inner_signals: Ki,
  invalidate_store: Xi,
  invoke_error_boundary: Ji,
  key: bs,
  legacy_api: us,
  legacy_pre_effect: Zi,
  legacy_pre_effect_reset: Qi,
  legacy_rest_props: tu,
  log_if_contains_state: ou,
  mark_store_binding: ji,
  mutable_source: Ht,
  mutate: ea,
  next: ta,
  noop: $e,
  once: Vf,
  pending: ra,
  pop: Cr,
  preventDefault: qf,
  prevent_snippet_stringification: on,
  prop: Tn,
  props_id: ts,
  proxy: Yr,
  push: Nr,
  raf: Z,
  reactive_import: Wf,
  remove_input_defaults: gn,
  remove_textarea_child: na,
  render_effect: P,
  replay_events: Va,
  reset: zr,
  rest_props: jf,
  run: ia,
  run_after_blockers: Kr,
  safe_get: aa,
  sanitize_slots: As,
  save: sa,
  select_option: He,
  selectedcontent: of,
  self: Bf,
  set: qe,
  set_attribute: ke,
  set_checked: tf,
  set_class: hn,
  set_custom_element_data: sf,
  set_default_checked: rf,
  set_default_value: nf,
  set_selected: $n,
  set_style: _n,
  set_text: rs,
  set_value: ef,
  set_xlink_attribute: af,
  setup_stores: fa,
  sibling: ua,
  slot: ys,
  snapshot: Lt,
  snippet: Cs,
  spread_props: nu,
  state: oa,
  stopImmediatePropagation: Gf,
  stopPropagation: zf,
  store_get: la,
  store_mutate: ca,
  store_set: da,
  store_unsub: va,
  strict_equals: ha,
  tag: _a,
  tag_proxy: ba,
  template_effect: Dr,
  text: ja,
  tick: Vr,
  to_array: pa,
  trace: ga,
  track_reactivity_loss: $a,
  transition: Hs,
  trusted: xf,
  untrack: q,
  update: wt,
  update_legacy_props: Xf,
  update_pre: wa,
  update_pre_prop: Zf,
  update_pre_store: ma,
  update_prop: Jf,
  update_store: Ea,
  user_effect: $t,
  user_pre_effect: Gr,
  validate_binding: iu,
  validate_dynamic_element_tag: Ns,
  validate_snippet_args: cs,
  validate_store: ks,
  validate_void_dynamic_element: Ss,
  wait: Ta,
  get window() {
    return ya;
  },
  with_script: Za,
  wrap_snippet: Ls
}, Symbol.toStringTag, { value: "Module" }));
export {
  vu as c,
  ns as h,
  hu as i,
  Ps as l,
  fn as m,
  du as o,
  Z as r,
  is as u
};
