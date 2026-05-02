var Cr = Object.defineProperty;
var xn = (e) => {
  throw TypeError(e);
};
var Ir = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Ir(e, typeof t != "symbol" ? t + "" : t, n), Vt = (e, t, n) => t.has(e) || xn("Cannot " + n);
var a = (e, t, n) => (Vt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), g = (e, t, n) => t.has(e) ? xn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), b = (e, t, n, r) => (Vt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), m = (e, t, n) => (Vt(e, t, "access private method"), n);
var Hn = Array.isArray, Dr = Array.prototype.indexOf, Ze = Array.prototype.includes, ei = Array.from, ti = Object.keys, Xt = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, Pr = Object.getOwnPropertyDescriptors, $n = Object.prototype, Lr = Array.prototype, fn = Object.getPrototypeOf, On = Object.isExtensible, ni = Object.prototype.hasOwnProperty;
function ri(e) {
  return typeof e == "function";
}
const fe = () => {
};
function si(e) {
  return typeof (e == null ? void 0 : e.then) == "function";
}
function ii(e) {
  return e();
}
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Un() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function ai(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function oi(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
function fi(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var s of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, s) && !t.includes(s) && (n[s] = e[s]);
  return n;
}
const C = 2, je = 4, Tt = 8, ln = 1 << 24, le = 16, ue = 32, ye = 64, Jt = 128, V = 512, O = 1024, I = 2048, re = 4096, K = 8192, W = 16384, Ye = 32768, Nn = 1 << 25, dt = 65536, ht = 1 << 17, Fr = 1 << 18, Ue = 1 << 19, Bn = 1 << 20, li = 1 << 25, qe = 65536, Zt = 1 << 21, Qe = 1 << 22, Te = 1 << 23, Ae = Symbol("$state"), ui = Symbol("legacy props"), ci = Symbol(""), jr = Symbol("proxy path"), _i = Symbol("hmr anchor"), oe = new class extends Error {
  constructor() {
    super(...arguments);
    se(this, "name", "StaleReactionError");
    se(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var qn;
const hi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((qn = globalThis.document) != null && qn.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), vi = 1, Yt = 3, zn = 8, pi = 11;
function Gn(e) {
  return e === this.v;
}
function Vn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Kn(e) {
  return !Vn(e, this.v);
}
function qr(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required");
}
function wi() {
  throw new Error("https://svelte.dev/e/invalid_default_snippet");
}
function yi() {
  throw new Error("https://svelte.dev/e/invalid_snippet_arguments");
}
function Hr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function $r() {
  throw new Error("https://svelte.dev/e/missing_context");
}
function bi() {
  throw new Error("https://svelte.dev/e/snippet_without_render_tag");
}
function gi(e) {
  throw new Error("https://svelte.dev/e/store_invalid_shape");
}
function mi() {
  throw new Error("https://svelte.dev/e/svelte_element_invalid_this_value");
}
function Yr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ei(e, t) {
  throw new Error("https://svelte.dev/e/component_api_changed");
}
function Ti(e, t) {
  throw new Error("https://svelte.dev/e/component_api_invalid_new");
}
function Ai(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ur(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Br() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Gr() {
  throw new Error("https://svelte.dev/e/effect_pending_outside_reaction");
}
function Vr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Kr() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function Wr() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function Si() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction");
}
function ki() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function xi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ni = 1, Ri = 2, Mi = 4, Ci = 8, Ii = 16, Di = 1, Pi = 4, Li = 8, Fi = 16, ji = 1, qi = 2, Hi = 4, $i = 1, Yi = 2, Ui = 4, Bi = 8, es = "[", Wn = "[!", Rn = "[?", ts = "]", un = {}, R = Symbol(), ns = Symbol("filename"), zi = Symbol("hmr"), rs = "http://www.w3.org/1999/xhtml", Gi = "http://www.w3.org/2000/svg", Vi = "http://www.w3.org/1998/Math/MathML", Ki = "@attach";
function Wi(e) {
  console.warn("https://svelte.dev/e/dynamic_void_element_content");
}
const ss = [];
function is(e, t = !1, n = !1) {
  return St(e, /* @__PURE__ */ new Map(), "", ss, null, n);
}
function St(e, t, n, r, s = null, i = !1) {
  if (typeof e == "object" && e !== null) {
    var f = t.get(e);
    if (f !== void 0) return f;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (Hn(e)) {
      var l = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, l), s !== null && t.set(s, l);
      for (var u = 0; u < e.length; u += 1) {
        var o = e[u];
        u in e && (l[u] = St(o, t, n, r, null, i));
      }
      return l;
    }
    if (fn(e) === $n) {
      l = {}, t.set(e, l), s !== null && t.set(s, l);
      for (var c of Object.keys(e))
        l[c] = St(
          // @ts-expect-error
          e[c],
          t,
          n,
          r,
          null,
          i
        );
      return l;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function" && !i)
      return St(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
let Be = null;
function Xn(e, t) {
  const n = e.v;
  if (n === R)
    return;
  const r = as(e), s = (
    /** @type {Reaction} */
    w
  ), i = e.wv > s.wv || s.wv === 0, f = i ? "color: CornflowerBlue; font-weight: bold" : "color: grey; font-weight: normal";
  if (console.groupCollapsed(
    e.label ? `%c${r}%c ${e.label}` : `%c${r}%c`,
    f,
    i ? "font-weight: normal" : f,
    typeof n == "object" && n !== null && Ae in n ? is(n, !0) : n
  ), r === "$derived") {
    const u = new Set(
      /** @type {Derived} */
      e.deps
    );
    for (const o of u)
      Xn(o);
  }
  if (e.created && console.log(e.created), i && e.updated)
    for (const u of e.updated.values())
      u.error && console.log(u.error);
  if (t)
    for (var l of t.traces)
      console.log(l);
  console.groupEnd();
}
function as(e) {
  var t;
  return (e.f & (C | Qe)) !== 0 ? "$derived" : (t = e.label) != null && t.startsWith("$") ? "store" : "$state";
}
function Xi(e, t) {
  var n = Be;
  try {
    Be = { entries: /* @__PURE__ */ new Map(), reaction: w };
    var r = performance.now(), s = t(), i = (performance.now() - r).toFixed(2), f = $e(e);
    if (!At())
      console.log(`${f} %cran outside of an effect (${i}ms)`, "color: grey");
    else if (Be.entries.size === 0)
      console.log(`${f} %cno reactive dependencies (${i}ms)`, "color: grey");
    else {
      console.group(`${f} %c(${i}ms)`, "color: grey");
      var l = Be.entries;
      $e(() => {
        for (const [u, o] of l)
          Xn(u, o);
      }), Be = null, console.groupEnd();
    }
    return s;
  } finally {
    Be = n;
  }
}
function Ji(e, t) {
  return e.label = t, os(e.v, t), e;
}
function os(e, t) {
  var n;
  return (n = e == null ? void 0 : e[jr]) == null || n.call(e, t), e;
}
function Zi(e) {
  const t = new Error(), n = fs();
  return n.length === 0 ? null : (n.unshift(`
`), Xt(t, "stack", {
    value: n.join(`
`)
  }), Xt(t, "name", {
    value: e
  }), /** @type {Error & { stack: string }} */
  t);
}
function fs() {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 1 / 0;
  const t = new Error().stack;
  if (Error.stackTraceLimit = e, !t) return [];
  const n = t.split(`
`), r = [];
  for (let s = 0; s < n.length; s++) {
    const i = n[s], f = i.replaceAll("\\", "/");
    if (i.trim() !== "Error") {
      if (i.includes("validate_each_keys"))
        return [];
      f.includes("svelte/src/internal") || f.includes("node_modules/.vite") || r.push(i);
    }
  }
  return r;
}
let M = null;
function et(e) {
  M = e;
}
let Kt = null;
function Qi(e, t, n, r, s, i) {
  const f = Kt;
  Kt = {
    type: t,
    file: n[ns],
    line: r,
    column: s,
    parent: f,
    ...i
  };
  try {
    return e();
  } finally {
    Kt = f;
  }
}
let ls = null;
function ea(e) {
  ls = e;
}
function ta() {
  const e = {};
  return [
    () => (_s(e) || $r(), us(e)),
    (t) => cs(e, t)
  ];
}
function us(e) {
  return (
    /** @type {T} */
    Ut().get(e)
  );
}
function cs(e, t) {
  return Ut().set(e, t), t;
}
function _s(e) {
  return Ut().has(e);
}
function na() {
  return Ut();
}
function ra(e, t = !1, n) {
  M = {
    p: M,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      y
    ),
    l: null
  };
}
function sa(e) {
  var t = (
    /** @type {ComponentContext} */
    M
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      xr(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, M = t.p, e ?? /** @type {T} */
  {};
}
function Jn() {
  return !0;
}
function Ut(e) {
  return M === null && Hr(), M.c ?? (M.c = new Map(ds(M) || void 0));
}
function ds(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Re = [];
function Zn() {
  var e = Re;
  Re = [], Yn(e);
}
function Se(e) {
  if (Re.length === 0 && !ut) {
    var t = Re;
    queueMicrotask(() => {
      t === Re && Zn();
    });
  }
  Re.push(e);
}
function hs() {
  for (; Re.length > 0; )
    Zn();
}
function ia(e, t) {
  console.warn("https://svelte.dev/e/assignment_value_stale");
}
function aa(e, t) {
  console.warn("https://svelte.dev/e/binding_property_non_reactive");
}
function oa(e) {
  console.warn("https://svelte.dev/e/console_log_state");
}
function vs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function fa(e, t) {
  console.warn("https://svelte.dev/e/event_handler_invalid");
}
function la(e) {
  console.warn("https://svelte.dev/e/hydratable_missing_but_expected");
}
function cn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ua(e, t, n, r) {
  console.warn("https://svelte.dev/e/ownership_invalid_binding");
}
function ca(e, t, n, r) {
  console.warn("https://svelte.dev/e/ownership_invalid_mutation");
}
function _a() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Qn(e) {
  console.warn("https://svelte.dev/e/state_proxy_equality_mismatch");
}
function ps() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let U = !1;
function da(e) {
  U = e;
}
let k;
function ke(e) {
  if (e === null)
    throw cn(), un;
  return k = e;
}
function ws() {
  return ke(/* @__PURE__ */ Oe(k));
}
function ha(e) {
  if (U) {
    if (/* @__PURE__ */ Oe(k) !== null)
      throw cn(), un;
    k = e;
  }
}
function va(e) {
  U && (k = e.content);
}
function ys(e = 1) {
  if (U) {
    for (var t = e, n = k; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n);
    k = n;
  }
}
function bs(e = !0) {
  for (var t = 0, n = k; ; ) {
    if (n.nodeType === zn) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === ts) {
        if (t === 0) return n;
        t -= 1;
      } else (r === es || r === Wn || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(n)
    );
    e && n.remove(), n = s;
  }
}
function pa(e) {
  if (!e || e.nodeType !== zn)
    throw cn(), un;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ot(e) {
  if (typeof e != "object" || e === null || Ae in e)
    return e;
  const t = fn(e);
  if (t !== $n && t !== Lr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Hn(e), s = /* @__PURE__ */ be(0), i = Fe, f = (l) => {
    if (Fe === i)
      return l();
    var u = w, o = Fe;
    J(null), Fn(i);
    var c = l();
    return J(u), Fn(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ be(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Xr();
        var c = n.get(u);
        return c === void 0 ? f(() => {
          var p = /* @__PURE__ */ be(o.value);
          return n.set(u, p), p;
        }) : ee(c, o.value, !0), !0;
      },
      deleteProperty(l, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in l) {
            const c = f(() => /* @__PURE__ */ be(R));
            n.set(u, c), _t(s);
          }
        } else
          ee(o, R), _t(s);
        return !0;
      },
      get(l, u, o) {
        var h;
        if (u === Ae)
          return e;
        var c = n.get(u), p = u in l;
        if (c === void 0 && (!p || (h = lt(l, u)) != null && h.writable) && (c = f(() => {
          var _ = ot(p ? l[u] : R), A = /* @__PURE__ */ be(_);
          return A;
        }), n.set(u, c)), c !== void 0) {
          var d = F(c);
          return d === R ? void 0 : d;
        }
        return Reflect.get(l, u, o);
      },
      getOwnPropertyDescriptor(l, u) {
        var o = Reflect.getOwnPropertyDescriptor(l, u);
        if (o && "value" in o) {
          var c = n.get(u);
          c && (o.value = F(c));
        } else if (o === void 0) {
          var p = n.get(u), d = p == null ? void 0 : p.v;
          if (p !== void 0 && d !== R)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return o;
      },
      has(l, u) {
        var d;
        if (u === Ae)
          return !0;
        var o = n.get(u), c = o !== void 0 && o.v !== R || Reflect.has(l, u);
        if (o !== void 0 || y !== null && (!c || (d = lt(l, u)) != null && d.writable)) {
          o === void 0 && (o = f(() => {
            var h = c ? ot(l[u]) : R, _ = /* @__PURE__ */ be(h);
            return _;
          }), n.set(u, o));
          var p = F(o);
          if (p === R)
            return !1;
        }
        return c;
      },
      set(l, u, o, c) {
        var kn;
        var p = n.get(u), d = u in l;
        if (r && u === "length")
          for (var h = o; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var _ = n.get(h + "");
            _ !== void 0 ? ee(_, R) : h in l && (_ = f(() => /* @__PURE__ */ be(R)), n.set(h + "", _));
          }
        if (p === void 0)
          (!d || (kn = lt(l, u)) != null && kn.writable) && (p = f(() => /* @__PURE__ */ be(void 0)), ee(p, ot(o)), n.set(u, p));
        else {
          d = p.v !== R;
          var A = f(() => ot(o));
          ee(p, A);
        }
        var S = Reflect.getOwnPropertyDescriptor(l, u);
        if (S != null && S.set && S.set.call(c, o), !d) {
          if (r && typeof u == "string") {
            var it = (
              /** @type {Source<number>} */
              n.get("length")
            ), at = Number(u);
            Number.isInteger(at) && at >= it.v && ee(it, at + 1);
          }
          _t(s);
        }
        return !0;
      },
      ownKeys(l) {
        F(s);
        var u = Reflect.ownKeys(l).filter((p) => {
          var d = n.get(p);
          return d === void 0 || d.v !== R;
        });
        for (var [o, c] of n)
          c.v !== R && !(o in l) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        Jr();
      }
    }
  );
}
function tt(e) {
  try {
    if (e !== null && typeof e == "object" && Ae in e)
      return e[Ae];
  } catch {
  }
  return e;
}
function wa(e, t) {
  return Object.is(tt(e), tt(t));
}
function ya(e, t, n = !0) {
  try {
    e === t != (tt(e) === tt(t)) && Qn(n ? "===" : "!==");
  } catch {
  }
  return e === t === n;
}
function ba(e, t, n = !0) {
  return e == t != (tt(e) == tt(t)) && Qn(), e == t === n;
}
var Mn, gs, ms, er, tr;
function ga() {
  if (Mn === void 0) {
    Mn = window, gs = document, ms = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    er = lt(t, "firstChild").get, tr = lt(t, "nextSibling").get, On(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), On(n) && (n.__t = void 0);
  }
}
function vt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  return (
    /** @type {TemplateNode | null} */
    er.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return (
    /** @type {TemplateNode | null} */
    tr.call(e)
  );
}
function ma(e, t) {
  if (!U)
    return /* @__PURE__ */ Pt(e);
  var n = /* @__PURE__ */ Pt(k);
  if (n === null)
    n = k.appendChild(vt());
  else if (t && n.nodeType !== Yt) {
    var r = vt();
    return n == null || n.before(r), ke(r), r;
  }
  return t && _n(
    /** @type {Text} */
    n
  ), ke(n), n;
}
function Ea(e, t = !1) {
  if (!U) {
    var n = /* @__PURE__ */ Pt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Oe(n) : n;
  }
  if (t) {
    if ((k == null ? void 0 : k.nodeType) !== Yt) {
      var r = vt();
      return k == null || k.before(r), ke(r), r;
    }
    _n(
      /** @type {Text} */
      k
    );
  }
  return k;
}
function Ta(e, t = 1, n = !1) {
  let r = U ? k : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(r);
  if (!U)
    return r;
  if (n) {
    if ((r == null ? void 0 : r.nodeType) !== Yt) {
      var i = vt();
      return r === null ? s == null || s.after(i) : r.before(i), ke(i), i;
    }
    _n(
      /** @type {Text} */
      r
    );
  }
  return ke(r), r;
}
function Es(e) {
  e.textContent = "";
}
function Aa() {
  return !1;
}
function Sa(e, t, n) {
  let r = n ? { is: n } : void 0;
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? rs, e, r)
  );
}
function ka() {
  return document.createDocumentFragment();
}
function xa(e = "") {
  return document.createComment(e);
}
function Oa(e, t, n = "") {
  if (t.startsWith("xlink:")) {
    e.setAttributeNS("http://www.w3.org/1999/xlink", t, n);
    return;
  }
  return e.setAttribute(t, n);
}
function _n(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Yt; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
function nr(e) {
  var t = y;
  if (t === null)
    return w.f |= Te, e;
  if ((t.f & Ye) === 0 && (t.f & je) === 0)
    throw e;
  we(e, t);
}
function we(e, t) {
  for (; t !== null; ) {
    if ((t.f & Jt) !== 0) {
      if ((t.f & Ye) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Ts = -7169;
function T(e, t) {
  e.f = e.f & Ts | t;
}
function dn(e) {
  (e.f & V) !== 0 || e.deps === null ? T(e, O) : T(e, re);
}
function rr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & C) === 0 || (t.f & qe) === 0 || (t.f ^= qe, rr(
        /** @type {Derived} */
        t.deps
      ));
}
function sr(e, t, n) {
  (e.f & I) !== 0 ? t.add(e) : (e.f & re) !== 0 && n.add(e), rr(e.deps), T(e, O);
}
function hn(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), fe;
  const r = $e(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ze = [];
function ir(e, t) {
  return {
    subscribe: vn(e, t).subscribe
  };
}
function vn(e, t = fe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(l) {
    if (Vn(e, l) && (e = l, n)) {
      const u = !ze.length;
      for (const o of r)
        o[1](), ze.push(o, e);
      if (u) {
        for (let o = 0; o < ze.length; o += 2)
          ze[o][0](ze[o + 1]);
        ze.length = 0;
      }
    }
  }
  function i(l) {
    s(l(
      /** @type {T} */
      e
    ));
  }
  function f(l, u = fe) {
    const o = [l, u];
    return r.add(o), r.size === 1 && (n = t(s, i) || fe), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(o), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: f };
}
function As(e, t, n) {
  const r = !Array.isArray(e), s = r ? [e] : e;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return ir(n, (f, l) => {
    let u = !1;
    const o = [];
    let c = 0, p = fe;
    const d = () => {
      if (c)
        return;
      p();
      const _ = t(r ? o[0] : o, f, l);
      i ? f(_) : p = typeof _ == "function" ? _ : fe;
    }, h = s.map(
      (_, A) => hn(
        _,
        (S) => {
          o[A] = S, c &= ~(1 << A), u && d();
        },
        () => {
          c |= 1 << A;
        }
      )
    );
    return u = !0, d(), function() {
      Yn(h), p(), u = !1;
    };
  });
}
function Ss(e) {
  return {
    // @ts-expect-error TODO i suspect the bind is unnecessary
    subscribe: e.subscribe.bind(e)
  };
}
function pn(e) {
  let t;
  return hn(e, (n) => t = n)(), t;
}
let Qt = !1, ft = !1, en = Symbol();
function Na(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Fs(void 0),
    unsubscribe: fe
  });
  if (r.store !== e && !(en in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = fe;
    else {
      var s = !0;
      r.unsubscribe = hn(e, (i) => {
        s ? r.source.v = i : ee(r.source, i);
      }), s = !1;
    }
  return e && en in n ? pn(e) : F(r.source);
}
function Ra(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = fe), e;
}
function ks(e, t) {
  return Bt(e, t), t;
}
function Ma(e, t) {
  var n = e[t];
  n.store !== null && ks(n.store, n.source.v);
}
function Ca() {
  const e = {};
  function t() {
    An(() => {
      for (var n in e)
        e[n].unsubscribe();
      Xt(e, en, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Bt(e, t) {
  Qt = !0;
  try {
    e.set(t);
  } finally {
    Qt = !1;
  }
}
function Ia(e, t, n) {
  return Bt(e, n), t;
}
function Da(e, t, n = 1) {
  return Bt(e, t + n), t;
}
function Pa(e, t, n = 1) {
  const r = t + n;
  return Bt(e, r), r;
}
function La() {
  ft = !0;
}
function Fa(e) {
  var t = ft;
  try {
    return ft = !1, [e(), ft];
  } finally {
    ft = t;
  }
}
const _e = /* @__PURE__ */ new Set();
let v = null, x = null, tn = null, ut = !1, Wt = !1, Ge = null, kt = null;
var Cn = 0;
let xs = 1;
var Ve, Ke, Ce, de, ie, yt, H, bt, me, he, ae, We, Xe, Ie, N, xt, ar, Ot, nn, Nt, Os;
const Ht = class Ht {
  constructor() {
    g(this, N);
    se(this, "id", xs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    se(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    se(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, Ve, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, Ke, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    g(this, Ce, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    g(this, de, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    g(this, ie, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    g(this, yt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    g(this, H, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    g(this, bt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    g(this, me, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    g(this, he, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    g(this, ae, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    g(this, We, /* @__PURE__ */ new Set());
    se(this, "is_fork", !1);
    g(this, Xe, !1);
    /** @type {Set<Batch>} */
    g(this, Ie, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, ae).has(t) || a(this, ae).set(t, { d: [], m: [] }), a(this, We).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = a(this, ae).get(t);
    if (r) {
      a(this, ae).delete(t);
      for (var s of r.d)
        T(s, I), n(s);
      for (s of r.m)
        T(s, re), n(s);
    }
    a(this, We).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== R && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Te) === 0 && (this.current.set(t, [n, r]), x == null || x.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    v = this;
  }
  deactivate() {
    v = null, x = null;
  }
  flush() {
    try {
      Wt = !0, v = this, m(this, N, Ot).call(this);
    } finally {
      Cn = 0, tn = null, Ge = null, kt = null, Wt = !1, v = null, x = null, Le.clear();
    }
  }
  discard() {
    for (const t of a(this, Ke)) t(this);
    a(this, Ke).clear(), a(this, Ce).clear(), _e.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, bt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = a(this, de).get(n) ?? 0;
    if (a(this, de).set(n, r + 1), t) {
      let s = a(this, ie).get(n) ?? 0;
      a(this, ie).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = a(this, de).get(n) ?? 0;
    if (s === 1 ? a(this, de).delete(n) : a(this, de).set(n, s - 1), t) {
      let i = a(this, ie).get(n) ?? 0;
      i === 1 ? a(this, ie).delete(n) : a(this, ie).set(n, i - 1);
    }
    a(this, Xe) || r || (b(this, Xe, !0), Se(() => {
      b(this, Xe, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      a(this, me).add(r);
    for (const r of n)
      a(this, he).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Ve).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, Ke).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, Ce).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, Ce)) t(this);
    a(this, Ce).clear();
  }
  settled() {
    return (a(this, yt) ?? b(this, yt, Un())).promise;
  }
  static ensure() {
    if (v === null) {
      const t = v = new Ht();
      Wt || (_e.add(v), ut || Se(() => {
        v === t && t.flush();
      }));
    }
    return v;
  }
  apply() {
    {
      x = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (tn = t, (s = t.b) != null && s.is_pending && (t.f & (je | Tt | ln)) !== 0 && (t.f & Ye) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ge !== null && n === y && (w === null || (w.f & C) === 0) && !Qt)
        return;
      if ((r & (ye | ue)) !== 0) {
        if ((r & O) === 0)
          return;
        n.f ^= O;
      }
    }
    a(this, H).push(n);
  }
};
Ve = new WeakMap(), Ke = new WeakMap(), Ce = new WeakMap(), de = new WeakMap(), ie = new WeakMap(), yt = new WeakMap(), H = new WeakMap(), bt = new WeakMap(), me = new WeakMap(), he = new WeakMap(), ae = new WeakMap(), We = new WeakMap(), Xe = new WeakMap(), Ie = new WeakMap(), N = new WeakSet(), xt = function() {
  return this.is_fork || a(this, ie).size > 0;
}, ar = function() {
  for (const r of a(this, Ie))
    for (const s of a(r, ie).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (a(this, ae).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, Ot = function() {
  var l, u;
  if (Cn++ > 1e3 && (_e.delete(this), Ns()), !m(this, N, xt).call(this)) {
    for (const o of a(this, me))
      a(this, he).delete(o), T(o, I), this.schedule(o);
    for (const o of a(this, he))
      T(o, re), this.schedule(o);
  }
  const t = a(this, H);
  b(this, H, []), this.apply();
  var n = Ge = [], r = [], s = kt = [];
  for (const o of t)
    try {
      m(this, N, nn).call(this, o, n, r);
    } catch (c) {
      throw ur(o), c;
    }
  if (v = null, s.length > 0) {
    var i = Ht.ensure();
    for (const o of s)
      i.schedule(o);
  }
  if (Ge = null, kt = null, m(this, N, xt).call(this) || m(this, N, ar).call(this)) {
    m(this, N, Nt).call(this, r), m(this, N, Nt).call(this, n);
    for (const [o, c] of a(this, ae))
      lr(o, c);
  } else {
    a(this, de).size === 0 && _e.delete(this), a(this, me).clear(), a(this, he).clear();
    for (const o of a(this, Ve)) o(this);
    a(this, Ve).clear(), In(r), In(n), (l = a(this, yt)) == null || l.resolve();
  }
  var f = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    v
  );
  if (a(this, H).length > 0) {
    const o = f ?? (f = this);
    a(o, H).push(...a(this, H).filter((c) => !a(o, H).includes(c)));
  }
  f !== null && (_e.add(f), m(u = f, N, Ot).call(u));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
nn = function(t, n, r) {
  t.f ^= O;
  for (var s = t.first; s !== null; ) {
    var i = s.f, f = (i & (ue | ye)) !== 0, l = f && (i & O) !== 0, u = l || (i & K) !== 0 || a(this, ae).has(s);
    if (!u && s.fn !== null) {
      f ? s.f ^= O : (i & je) !== 0 ? n.push(s) : st(s) && ((i & le) !== 0 && a(this, he).add(s), He(s));
      var o = s.first;
      if (o !== null) {
        s = o;
        continue;
      }
    }
    for (; s !== null; ) {
      var c = s.next;
      if (c !== null) {
        s = c;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Nt = function(t) {
  for (var n = 0; n < t.length; n += 1)
    sr(t[n], a(this, me), a(this, he));
}, Os = function() {
  var c, p, d;
  for (const h of _e) {
    var t = h.id < this.id, n = [];
    for (const [_, [A, S]] of this.current) {
      if (h.current.has(_)) {
        var r = (
          /** @type {[any, boolean]} */
          h.current.get(_)[0]
        );
        if (t && A !== r)
          h.current.set(_, [A, S]);
        else
          continue;
      }
      n.push(_);
    }
    var s = [...h.current.keys()].filter((_) => !this.current.has(_));
    if (s.length === 0)
      t && h.discard();
    else if (n.length > 0) {
      if (t)
        for (const _ of a(this, We))
          h.unskip_effect(_, (A) => {
            var S;
            (A.f & (le | Qe)) !== 0 ? h.schedule(A) : m(S = h, N, Nt).call(S, [A]);
          });
      h.activate();
      var i = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (var l of n)
        or(l, s, i, f);
      f = /* @__PURE__ */ new Map();
      var u = [...h.current.keys()].filter(
        (_) => this.current.has(_) ? (
          /** @type {[any, boolean]} */
          this.current.get(_)[0] !== _
        ) : !0
      );
      for (const _ of a(this, bt))
        (_.f & (W | K | ht)) === 0 && wn(_, u, f) && ((_.f & (Qe | le)) !== 0 ? (T(_, I), h.schedule(_)) : a(h, me).add(_));
      if (a(h, H).length > 0) {
        h.apply();
        for (var o of a(h, H))
          m(c = h, N, nn).call(c, o, [], []);
        b(h, H, []);
      }
      h.deactivate();
    }
  }
  for (const h of _e)
    a(h, Ie).has(this) && (a(h, Ie).delete(this), a(h, Ie).size === 0 && !m(p = h, N, xt).call(p) && (h.activate(), m(d = h, N, Ot).call(d)));
};
let ce = Ht;
function Lt(e) {
  var t = ut;
  ut = !0;
  try {
    var n;
    for (e && (v !== null && !v.is_fork && v.flush(), n = e()); ; ) {
      if (hs(), v === null)
        return (
          /** @type {T} */
          n
        );
      v.flush();
    }
  } finally {
    ut = t;
  }
}
function Ns() {
  try {
    Vr();
  } catch (e) {
    we(e, tn);
  }
}
let Q = null;
function In(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (W | K)) === 0 && st(r) && (Q = /* @__PURE__ */ new Set(), He(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Nr(r), (Q == null ? void 0 : Q.size) > 0)) {
        Le.clear();
        for (const s of Q) {
          if ((s.f & (W | K)) !== 0) continue;
          const i = [s];
          let f = s.parent;
          for (; f !== null; )
            Q.has(f) && (Q.delete(f), i.push(f)), f = f.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const u = i[l];
            (u.f & (W | K)) === 0 && He(u);
          }
        }
        Q.clear();
      }
    }
    Q = null;
  }
}
function or(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & C) !== 0 ? or(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : (i & (Qe | le)) !== 0 && (i & I) === 0 && wn(s, t, r) && (T(s, I), yn(
        /** @type {Effect} */
        s
      ));
    }
}
function fr(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & C) !== 0 ? fr(
        /** @type {Derived} */
        n,
        t
      ) : (r & ht) !== 0 && (T(n, I), t.add(
        /** @type {Effect} */
        n
      ));
    }
}
function wn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Ze.call(t, s))
        return !0;
      if ((s.f & C) !== 0 && wn(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function yn(e) {
  v.schedule(e);
}
let Ft = [];
function Rs() {
  Lt(() => {
    const e = Ft;
    Ft = [];
    for (const t of e)
      js(t);
  });
}
function ja(e) {
  var t = rt(0), n = !0, r = (
    /** @type {T} */
    void 0
  );
  return F(t), Bs(() => {
    if (n) {
      var s = x;
      try {
        x = null, r = e();
      } finally {
        x = s;
      }
      return;
    }
    Ft.length === 0 && Se(Rs), Ft.push(t);
  }), n = !1, r;
}
function lr(e, t) {
  if (!((e.f & ue) !== 0 && (e.f & O) !== 0)) {
    (e.f & I) !== 0 ? t.d.push(e) : (e.f & re) !== 0 && t.m.push(e), T(e, O);
    for (var n = e.first; n !== null; )
      lr(n, t), n = n.next;
  }
}
function ur(e) {
  T(e, O);
  for (var t = e.first; t !== null; )
    ur(t), t = t.next;
}
function qa(e) {
  qr(), v !== null && Wr();
  var t = ce.ensure();
  t.is_fork = !0, x = /* @__PURE__ */ new Map();
  var n = !1, r = t.settled();
  return Lt(e), {
    commit: async () => {
      if (n) {
        await r;
        return;
      }
      _e.has(t) || Kr(), n = !0, t.is_fork = !1;
      for (var [s, [i]] of t.current)
        s.v = i, s.wv = qt();
      t.activate(), t.run_fork_commit_callbacks(), t.deactivate(), Lt(() => {
        var f = /* @__PURE__ */ new Set();
        for (var l of t.current.keys())
          fr(l, f);
        Ls(f), yr();
      }), t.flush(), await r;
    },
    discard: () => {
      for (var s of t.current.keys())
        s.wv = qt();
      !n && _e.has(t) && t.discard();
    }
  };
}
function cr(e) {
  let t = 0, n = rt(0), r;
  return () => {
    At() && (F(n), Gt(() => (t === 0 && (r = $e(() => e(() => _t(n)))), t += 1, () => {
      Se(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, _t(n));
      });
    })));
  };
}
var Ms = dt | Ue;
function Ha(e, t, n, r) {
  new Cs(e, t, n, r);
}
var $, gt, z, De, P, G, D, Y, ve, Pe, Ee, Je, mt, Et, pe, $t, E, _r, dr, hr, rn, Rt, Mt, sn, an;
class Cs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    g(this, E);
    /** @type {Boundary | null} */
    se(this, "parent");
    se(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    se(this, "transform_error");
    /** @type {TemplateNode} */
    g(this, $);
    /** @type {TemplateNode | null} */
    g(this, gt, U ? k : null);
    /** @type {BoundaryProps} */
    g(this, z);
    /** @type {((anchor: Node) => void)} */
    g(this, De);
    /** @type {Effect} */
    g(this, P);
    /** @type {Effect | null} */
    g(this, G, null);
    /** @type {Effect | null} */
    g(this, D, null);
    /** @type {Effect | null} */
    g(this, Y, null);
    /** @type {DocumentFragment | null} */
    g(this, ve, null);
    g(this, Pe, 0);
    g(this, Ee, 0);
    g(this, Je, !1);
    /** @type {Set<Effect>} */
    g(this, mt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    g(this, Et, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    g(this, pe, null);
    g(this, $t, cr(() => (b(this, pe, rt(a(this, Pe))), () => {
      b(this, pe, null);
    })));
    var i;
    b(this, $, t), b(this, z, n), b(this, De, (f) => {
      var l = (
        /** @type {Effect} */
        y
      );
      l.b = this, l.f |= Jt, r(f);
    }), this.parent = /** @type {Effect} */
    y.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((f) => f), b(this, P, Vs(() => {
      if (U) {
        const f = (
          /** @type {Comment} */
          a(this, gt)
        );
        ws();
        const l = f.data === Wn;
        if (f.data.startsWith(Rn)) {
          const o = JSON.parse(f.data.slice(Rn.length));
          m(this, E, dr).call(this, o);
        } else l ? m(this, E, hr).call(this) : m(this, E, _r).call(this);
      } else
        m(this, E, rn).call(this);
    }, Ms)), U && b(this, $, k);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    sr(t, a(this, mt), a(this, Et));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, z).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    m(this, E, sn).call(this, t, n), b(this, Pe, a(this, Pe) + t), !(!a(this, pe) || a(this, Je)) && (b(this, Je, !0), Se(() => {
      b(this, Je, !1), a(this, pe) && pt(a(this, pe), a(this, Pe));
    }));
  }
  get_effect_pending() {
    return a(this, $t).call(this), F(
      /** @type {Source<number>} */
      a(this, pe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, z).onerror && !a(this, z).failed)
      throw t;
    v != null && v.is_fork ? (a(this, G) && v.skip_effect(a(this, G)), a(this, D) && v.skip_effect(a(this, D)), a(this, Y) && v.skip_effect(a(this, Y)), v.on_fork_commit(() => {
      m(this, E, an).call(this, t);
    })) : m(this, E, an).call(this, t);
  }
}
$ = new WeakMap(), gt = new WeakMap(), z = new WeakMap(), De = new WeakMap(), P = new WeakMap(), G = new WeakMap(), D = new WeakMap(), Y = new WeakMap(), ve = new WeakMap(), Pe = new WeakMap(), Ee = new WeakMap(), Je = new WeakMap(), mt = new WeakMap(), Et = new WeakMap(), pe = new WeakMap(), $t = new WeakMap(), E = new WeakSet(), _r = function() {
  try {
    b(this, G, Ne(() => a(this, De).call(this, a(this, $))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
dr = function(t) {
  const n = a(this, z).failed;
  n && b(this, Y, Ne(() => {
    n(
      a(this, $),
      () => t,
      () => () => {
      }
    );
  }));
}, hr = function() {
  const t = a(this, z).pending;
  t && (this.is_pending = !0, b(this, D, Ne(() => t(a(this, $)))), Se(() => {
    var n = b(this, ve, document.createDocumentFragment()), r = vt();
    n.append(r), b(this, G, m(this, E, Mt).call(this, () => Ne(() => a(this, De).call(this, r)))), a(this, Ee) === 0 && (a(this, $).before(n), b(this, ve, null), Dt(
      /** @type {Effect} */
      a(this, D),
      () => {
        b(this, D, null);
      }
    ), m(this, E, Rt).call(
      this,
      /** @type {Batch} */
      v
    ));
  }));
}, rn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), b(this, Ee, 0), b(this, Pe, 0), b(this, G, Ne(() => {
      a(this, De).call(this, a(this, $));
    })), a(this, Ee) > 0) {
      var t = b(this, ve, document.createDocumentFragment());
      Xs(a(this, G), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, z).pending
      );
      b(this, D, Ne(() => n(a(this, $))));
    } else
      m(this, E, Rt).call(
        this,
        /** @type {Batch} */
        v
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
Rt = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, mt), a(this, Et));
}, /**
 * @template T
 * @param {() => T} fn
 */
Mt = function(t) {
  var n = y, r = w, s = M;
  Z(a(this, P)), J(a(this, P)), et(a(this, P).ctx);
  try {
    return ce.ensure(), t();
  } catch (i) {
    return nr(i), null;
  } finally {
    Z(n), J(r), et(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
sn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && m(r = this.parent, E, sn).call(r, t, n);
    return;
  }
  b(this, Ee, a(this, Ee) + t), a(this, Ee) === 0 && (m(this, E, Rt).call(this, n), a(this, D) && Dt(a(this, D), () => {
    b(this, D, null);
  }), a(this, ve) && (a(this, $).before(a(this, ve)), b(this, ve, null)));
}, /**
 * @param {unknown} error
 */
an = function(t) {
  a(this, G) && (ne(a(this, G)), b(this, G, null)), a(this, D) && (ne(a(this, D)), b(this, D, null)), a(this, Y) && (ne(a(this, Y)), b(this, Y, null)), U && (ke(
    /** @type {TemplateNode} */
    a(this, gt)
  ), ys(), ke(bs()));
  var n = a(this, z).onerror;
  let r = a(this, z).failed;
  var s = !1, i = !1;
  const f = () => {
    if (s) {
      ps();
      return;
    }
    s = !0, i && Qr(), a(this, Y) !== null && Dt(a(this, Y), () => {
      b(this, Y, null);
    }), m(this, E, Mt).call(this, () => {
      m(this, E, rn).call(this);
    });
  }, l = (u) => {
    try {
      i = !0, n == null || n(u, f), i = !1;
    } catch (o) {
      we(o, a(this, P) && a(this, P).parent);
    }
    r && b(this, Y, m(this, E, Mt).call(this, () => {
      try {
        return Ne(() => {
          var o = (
            /** @type {Effect} */
            y
          );
          o.b = this, o.f |= Jt, r(
            a(this, $),
            () => u,
            () => f
          );
        });
      } catch (o) {
        return we(
          o,
          /** @type {Effect} */
          a(this, P).parent
        ), null;
      }
    }));
  };
  Se(() => {
    var u;
    try {
      u = this.transform_error(t);
    } catch (o) {
      we(o, a(this, P) && a(this, P).parent);
      return;
    }
    u !== null && typeof u == "object" && typeof /** @type {any} */
    u.then == "function" ? u.then(
      l,
      /** @param {unknown} e */
      (o) => we(o, a(this, P) && a(this, P).parent)
    ) : l(u);
  });
};
function $a() {
  y === null && Gr();
  var e = y.b;
  return e === null ? 0 : e.get_effect_pending();
}
function bn(e, t, n, r) {
  const s = mn;
  var i = e.filter((d) => !d.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var f = (
    /** @type {Effect} */
    y
  ), l = gn(), u = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function o(d) {
    l();
    try {
      r(d);
    } catch (h) {
      (f.f & W) === 0 && we(h, f);
    }
    nt();
  }
  if (n.length === 0) {
    u.then(() => o(t.map(s)));
    return;
  }
  var c = zt();
  function p() {
    Promise.all(n.map((d) => /* @__PURE__ */ Is(d))).then((d) => o([...t.map(s), ...d])).catch((d) => we(d, f)).finally(() => c());
  }
  u ? u.then(() => {
    l(), p(), nt();
  }) : p();
}
function Ya(e, t) {
  bn(e, [], [], t);
}
function gn() {
  var e = (
    /** @type {Effect} */
    y
  ), t = w, n = M, r = (
    /** @type {Batch} */
    v
  );
  return function(i = !0) {
    Z(e), J(t), et(n), i && (e.f & W) === 0 && (r == null || r.activate(), r == null || r.apply());
  };
}
async function Ua(e) {
  var t = gn(), n = await e;
  return () => (t(), n);
}
async function Dn(e) {
  var t = ct;
  queueMicrotask(() => {
    ct === t && Ct(null);
  });
  var n = await e;
  return () => (Ct(t), queueMicrotask(() => {
    ct === t && Ct(null);
  }), n);
}
async function* Ba(e) {
  var s, i;
  const t = ((s = e[Symbol.asyncIterator]) == null ? void 0 : s.call(e)) ?? ((i = e[Symbol.iterator]) == null ? void 0 : i.call(e));
  if (t === void 0)
    throw new TypeError("value is not async iterable");
  let n = !1;
  try {
    for (; ; ) {
      const { done: f, value: l } = (await Dn(t.next()))();
      if (f) {
        n = !0;
        break;
      }
      var r = ct;
      yield l, Ct(r);
    }
  } finally {
    if (!n && t.return !== void 0)
      return (
        /** @type {TReturn} */
        (await Dn(t.return()))().value
      );
  }
}
function nt(e = !0) {
  Z(null), J(null), et(null), e && (v == null || v.deactivate());
}
function za(e) {
  const t = gn(), n = zt();
  var r = (
    /** @type {Effect} */
    y
  ), s = null;
  const i = (o) => {
    s = { error: o }, jn(r) || we(o, r);
  };
  var f = Promise.resolve(e[0]()).catch(i), l = { promise: f, settled: !1 }, u = [l];
  f.finally(() => {
    l.settled = !0, nt();
  });
  for (const o of e.slice(1)) {
    f = f.then(() => {
      if (t(), s)
        throw s.error;
      if (jn(r))
        throw oe;
      return o();
    }).catch(i);
    const c = { promise: f, settled: !1 };
    u.push(c), f.finally(() => {
      c.settled = !0, nt();
    });
  }
  return f.then(() => Promise.resolve()).finally(() => n()), u;
}
function Ga(e) {
  return Promise.all(e.map((t) => t.promise));
}
function zt() {
  var e = (
    /** @type {Effect} */
    y
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    v
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
let ct = null;
function Ct(e) {
  ct = e;
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  var t = C | I;
  return y !== null && (y.f |= Ue), {
    ctx: M,
    deps: null,
    effects: null,
    equals: Gn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      R
    ),
    wv: 0,
    parent: y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Is(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    y
  );
  r === null && Yr();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = rt(
    /** @type {V} */
    R
  ), f = !w, l = /* @__PURE__ */ new Map();
  return Gs(() => {
    var h;
    var u = (
      /** @type {Effect} */
      y
    ), o = Un();
    s = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(nt);
    } catch (_) {
      o.reject(_), nt();
    }
    var c = (
      /** @type {Batch} */
      v
    );
    if (f) {
      if ((u.f & Ye) !== 0)
        var p = zt();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (h = l.get(c)) == null || h.reject(oe), l.delete(c);
      else {
        for (const _ of l.values())
          _.reject(oe);
        l.clear();
      }
      l.set(c, o);
    }
    const d = (_, A = void 0) => {
      if (p) {
        var S = A === oe;
        p(S);
      }
      if (!(A === oe || (u.f & W) !== 0)) {
        if (c.activate(), A)
          i.f |= Te, pt(i, A);
        else {
          (i.f & Te) !== 0 && (i.f ^= Te), pt(i, _);
          for (const [it, at] of l) {
            if (l.delete(it), it === c) break;
            at.reject(oe);
          }
        }
        c.deactivate();
      }
    };
    o.promise.then(d, (_) => d(null, _ || "unknown"));
  }), An(() => {
    for (const u of l.values())
      u.reject(oe);
  }), new Promise((u) => {
    function o(c) {
      function p() {
        c === s ? u(i) : o(s);
      }
      c.then(p, p);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Va(e) {
  const t = /* @__PURE__ */ mn(e);
  return gr(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  const t = /* @__PURE__ */ mn(e);
  return t.equals = Kn, t;
}
function Ds(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ne(
        /** @type {Effect} */
        t[n]
      );
  }
}
function En(e) {
  var t, n = y, r = e.parent;
  if (!xe && r !== null && (r.f & (W | K)) !== 0)
    return vs(), e.v;
  Z(r);
  try {
    e.f &= ~qe, Ds(e), t = Tr(e);
  } finally {
    Z(n);
  }
  return t;
}
function vr(e) {
  var t = En(e);
  if (!e.equals(t) && (e.wv = qt(), (!(v != null && v.is_fork) || e.deps === null) && (v !== null ? v.capture(e, t, !0) : e.v = t, e.deps === null))) {
    T(e, O);
    return;
  }
  xe || (x !== null ? (At() || v != null && v.is_fork) && x.set(e, t) : dn(e));
}
function Ps(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(oe), r.teardown = fe, r.ac = null, wt(r, 0), Sn(r));
}
function pr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && He(t);
}
let jt = /* @__PURE__ */ new Set();
const Le = /* @__PURE__ */ new Map();
function Ls(e) {
  jt = e;
}
let wr = !1;
function rt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  const n = rt(e);
  return gr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Fs(e, t = !1, n = !0) {
  const r = rt(e);
  return t || (r.equals = Kn), r;
}
function Wa(e, t) {
  return ee(
    e,
    $e(() => F(e))
  ), t;
}
function ee(e, t, n = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!te || (w.f & ht) !== 0) && Jn() && (w.f & (C | le | Qe | ht)) !== 0 && (X === null || !Ze.call(X, e)) && Zr();
  let r = n ? ot(t) : t;
  return pt(e, r, kt);
}
function pt(e, t, n = null) {
  if (!e.equals(t)) {
    Le.set(e, xe ? t : e.v);
    var r = ce.ensure();
    if (r.capture(e, t), (e.f & C) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & I) !== 0 && En(s), x === null && dn(s);
    }
    e.wv = qt(), br(e, I, n), y !== null && (y.f & O) !== 0 && (y.f & (ue | ye)) === 0 && (B === null ? $s([e]) : B.push(e)), !r.is_fork && jt.size > 0 && !wr && yr();
  }
  return t;
}
function yr() {
  wr = !1;
  for (const e of jt)
    (e.f & O) !== 0 && T(e, re), st(e) && He(e);
  jt.clear();
}
function js(e, t = 1) {
  var n = F(e), r = t === 1 ? n++ : n--;
  return ee(e, n), r;
}
function Xa(e, t = 1) {
  var n = F(e);
  return ee(e, t === 1 ? ++n : --n);
}
function _t(e) {
  ee(e, e.v + 1);
}
function br(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, i = 0; i < s; i++) {
      var f = r[i], l = f.f, u = (l & I) === 0;
      if (u && T(f, t), (l & C) !== 0) {
        var o = (
          /** @type {Derived} */
          f
        );
        x == null || x.delete(o), (l & qe) === 0 && (l & V && (f.f |= qe), br(o, re, n));
      } else if (u) {
        var c = (
          /** @type {Effect} */
          f
        );
        (l & le) !== 0 && Q !== null && Q.add(c), n !== null ? n.push(c) : yn(c);
      }
    }
}
let ge = null;
function qs(e) {
  var t = ge;
  try {
    if (ge = /* @__PURE__ */ new Set(), $e(e), t !== null)
      for (var n of ge)
        t.add(n);
    return ge;
  } finally {
    ge = t;
  }
}
function Ja(e) {
  for (var t of qs(e))
    pt(t, t.v);
}
function Za(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Se(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Qa(e) {
  U && /* @__PURE__ */ Pt(e) !== null && Es(e);
}
let Pn = !1;
function Hs() {
  Pn || (Pn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function eo(e, t, n, r = !0) {
  r && n();
  for (var s of t)
    e.addEventListener(s, n);
  An(() => {
    for (var i of t)
      e.removeEventListener(i, n);
  });
}
function Tn(e) {
  var t = w, n = y;
  J(null), Z(null);
  try {
    return e();
  } finally {
    J(t), Z(n);
  }
}
function to(e, t, n, r = n) {
  e.addEventListener(t, () => Tn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Hs();
}
let It = !1, xe = !1;
function Ln(e) {
  xe = e;
}
let w = null, te = !1;
function J(e) {
  w = e;
}
let y = null;
function Z(e) {
  y = e;
}
let X = null;
function gr(e) {
  w !== null && (X === null ? X = [e] : X.push(e));
}
let L = null, q = 0, B = null;
function $s(e) {
  B = e;
}
let mr = 1, Me = 0, Fe = Me;
function Fn(e) {
  Fe = e;
}
function qt() {
  return ++mr;
}
function st(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if (t & C && (e.f &= ~qe), (t & re) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (st(
        /** @type {Derived} */
        i
      ) && vr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & V) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    x === null && T(e, O);
  }
  return !1;
}
function Er(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(X !== null && Ze.call(X, e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & C) !== 0 ? Er(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? T(i, I) : (i.f & O) !== 0 && T(i, re), yn(
        /** @type {Effect} */
        i
      ));
    }
}
function Tr(e) {
  var A;
  var t = L, n = q, r = B, s = w, i = X, f = M, l = te, u = Fe, o = e.f;
  L = /** @type {null | Value[]} */
  null, q = 0, B = null, w = (o & (ue | ye)) === 0 ? e : null, X = null, et(e.ctx), te = !1, Fe = ++Me, e.ac !== null && (Tn(() => {
    e.ac.abort(oe);
  }), e.ac = null);
  try {
    e.f |= Zt;
    var c = (
      /** @type {Function} */
      e.fn
    ), p = c();
    e.f |= Ye;
    var d = e.deps, h = v == null ? void 0 : v.is_fork;
    if (L !== null) {
      var _;
      if (h || wt(e, q), d !== null && q > 0)
        for (d.length = q + L.length, _ = 0; _ < L.length; _++)
          d[q + _] = L[_];
      else
        e.deps = d = L;
      if (At() && (e.f & V) !== 0)
        for (_ = q; _ < d.length; _++)
          ((A = d[_]).reactions ?? (A.reactions = [])).push(e);
    } else !h && d !== null && q < d.length && (wt(e, q), d.length = q);
    if (Jn() && B !== null && !te && d !== null && (e.f & (C | re | I)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      B.length; _++)
        Er(
          B[_],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (Me++, s.deps !== null)
        for (let S = 0; S < n; S += 1)
          s.deps[S].rv = Me;
      if (t !== null)
        for (const S of t)
          S.rv = Me;
      B !== null && (r === null ? r = B : r.push(.../** @type {Source[]} */
      B));
    }
    return (e.f & Te) !== 0 && (e.f ^= Te), p;
  } catch (S) {
    return nr(S);
  } finally {
    e.f ^= Zt, L = t, q = n, B = r, w = s, X = i, et(f), te = l, Fe = u;
  }
}
function Ys(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Dr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && (t.f & C) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !Ze.call(L, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & V) !== 0 && (i.f ^= V, i.f &= ~qe), i.v !== R && dn(i), Ps(i), wt(i, 0);
  }
}
function wt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ys(e, n[r]);
}
function He(e) {
  var t = e.f;
  if ((t & W) === 0) {
    T(e, O);
    var n = y, r = It;
    y = e, It = !0;
    try {
      (t & (le | ln)) !== 0 ? Ks(e) : Sn(e), Or(e);
      var s = Tr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = mr;
      var i;
    } finally {
      It = r, y = n;
    }
  }
}
async function no() {
  await Promise.resolve(), Lt();
}
function ro() {
  return ce.ensure().settled();
}
function F(e) {
  var t = e.f, n = (t & C) !== 0;
  if (ge == null || ge.add(e), w !== null && !te) {
    var r = y !== null && (y.f & W) !== 0;
    if (!r && (X === null || !Ze.call(X, e))) {
      var s = w.deps;
      if ((w.f & Zt) !== 0)
        e.rv < Me && (e.rv = Me, L === null && s !== null && s[q] === e ? q++ : L === null ? L = [e] : L.push(e));
      else {
        (w.deps ?? (w.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [w] : Ze.call(i, w) || i.push(w);
      }
    }
  }
  if (xe && Le.has(e))
    return Le.get(e);
  if (n) {
    var f = (
      /** @type {Derived} */
      e
    );
    if (xe) {
      var l = f.v;
      return ((f.f & O) === 0 && f.reactions !== null || Sr(f)) && (l = En(f)), Le.set(f, l), l;
    }
    var u = (f.f & V) === 0 && !te && w !== null && (It || (w.f & V) !== 0), o = (f.f & Ye) === 0;
    st(f) && (u && (f.f |= V), vr(f)), u && !o && (pr(f), Ar(f));
  }
  if (x != null && x.has(e))
    return x.get(e);
  if ((e.f & Te) !== 0)
    throw e.v;
  return e.v;
}
function Ar(e) {
  if (e.f |= V, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & C) !== 0 && (t.f & V) === 0 && (pr(
        /** @type {Derived} */
        t
      ), Ar(
        /** @type {Derived} */
        t
      ));
}
function Sr(e) {
  if (e.v === R) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Le.has(t) || (t.f & C) !== 0 && Sr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function so(e) {
  return e && F(e);
}
function $e(e) {
  var t = te;
  try {
    return te = !0, e();
  } finally {
    te = t;
  }
}
function io(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ae in e)
      on(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ae in n && on(n);
      }
  }
}
function on(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        on(e[r], t);
      } catch {
      }
    const n = fn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Pr(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function kr(e) {
  y === null && (w === null && zr(), Br()), xe && Ur();
}
function Us(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function j(e, t) {
  var n = y;
  n !== null && (n.f & K) !== 0 && (e |= K);
  var r = {
    ctx: M,
    deps: null,
    nodes: null,
    f: e | I | V,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  v == null || v.register_created_effect(r);
  var s = r;
  if ((e & je) !== 0)
    Ge !== null ? Ge.push(r) : ce.ensure().schedule(r);
  else if (t !== null) {
    try {
      He(r);
    } catch (f) {
      throw ne(r), f;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ue) === 0 && (s = s.first, (e & le) !== 0 && (e & dt) !== 0 && s !== null && (s.f |= dt));
  }
  if (s !== null && (s.parent = n, n !== null && Us(s, n), w !== null && (w.f & C) !== 0 && (e & ye) === 0)) {
    var i = (
      /** @type {Derived} */
      w
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return r;
}
function At() {
  return w !== null && !te;
}
function An(e) {
  const t = j(Tt, null);
  return T(t, O), t.teardown = e, t;
}
function ao(e) {
  kr();
  var t = (
    /** @type {Effect} */
    y.f
  ), n = !w && (t & ue) !== 0 && (t & Ye) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      M
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return xr(e);
}
function xr(e) {
  return j(je | Bn, e);
}
function oo(e) {
  return kr(), j(Tt | Bn, e);
}
function Bs(e) {
  return j(ht, e);
}
function zs(e) {
  ce.ensure();
  const t = j(ye | Ue, e);
  return () => {
    ne(t);
  };
}
function fo(e) {
  ce.ensure();
  const t = j(ye | Ue, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dt(t, () => {
      ne(t), r(void 0);
    }) : (ne(t), r(void 0));
  });
}
function lo(e) {
  return j(je, e);
}
function uo(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    M
  ), r = { effect: null, ran: !1, deps: e };
  n.l.$.push(r), r.effect = Gt(() => {
    if (e(), !r.ran) {
      r.ran = !0;
      var s = (
        /** @type {Effect} */
        y
      );
      try {
        Z(s.parent), $e(t);
      } finally {
        Z(s);
      }
    }
  });
}
function co() {
  var e = (
    /** @type {ComponentContextLegacy} */
    M
  );
  Gt(() => {
    for (var t of e.l.$) {
      t.deps();
      var n = t.effect;
      (n.f & O) !== 0 && n.deps !== null && T(n, re), st(n) && He(n), t.ran = !1;
    }
  });
}
function Gs(e) {
  return j(Qe | Ue, e);
}
function Gt(e, t = 0) {
  return j(Tt | t, e);
}
function _o(e, t = [], n = [], r = []) {
  bn(r, t, n, (s) => {
    j(Tt, () => e(...s.map(F)));
  });
}
function ho(e, t = [], n = [], r = []) {
  if (n.length > 0 || r.length > 0)
    var s = zt();
  bn(r, t, n, (i) => {
    j(je, () => e(...i.map(F))), s && s();
  });
}
function Vs(e, t = 0) {
  var n = j(le | t, e);
  return n;
}
function vo(e, t = 0) {
  var n = j(ln | t, e);
  return n;
}
function Ne(e) {
  return j(ue | Ue, e);
}
function Or(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = xe, r = w;
    Ln(!0), J(null);
    try {
      t.call(null);
    } finally {
      Ln(n), J(r);
    }
  }
}
function Sn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Tn(() => {
      s.abort(oe);
    });
    var r = n.next;
    (n.f & ye) !== 0 ? n.parent = null : ne(n, t), n = r;
  }
}
function Ks(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & ue) === 0 && ne(t), t = n;
  }
}
function ne(e, t = !0) {
  var n = !1;
  (t || (e.f & Fr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ws(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), T(e, Nn), Sn(e, t && !n), wt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Or(e), e.f ^= Nn, e.f |= W;
  var s = e.parent;
  s !== null && s.first !== null && Nr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ws(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Oe(e);
    e.remove(), e = n;
  }
}
function Nr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Dt(e, t, n = !0) {
  var r = [];
  Rr(e, r, !0);
  var s = () => {
    n && ne(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var f = () => --i || s();
    for (var l of r)
      l.out(f);
  } else
    s();
}
function Rr(e, t, n) {
  if ((e.f & K) === 0) {
    e.f ^= K;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & ye) === 0) {
        var f = (s.f & dt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & ue) !== 0 && (e.f & le) !== 0;
        Rr(s, t, f ? n : !1);
      }
      s = i;
    }
  }
}
function po(e) {
  Mr(e, !0);
}
function Mr(e, t) {
  if ((e.f & K) !== 0) {
    e.f ^= K, (e.f & O) === 0 && (T(e, I), ce.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & dt) !== 0 || (n.f & ue) !== 0;
      Mr(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const f of i)
        (f.is_global || t) && f.in();
  }
}
function jn(e = (
  /** @type {Effect} */
  y
)) {
  return (e.f & W) !== 0;
}
function Xs(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Oe(n);
      t.append(n), n = s;
    }
}
function Js(e, t) {
  var n = y, r = w, s = e();
  const i = vn(s, (f) => {
    var l = s !== e(), u, o = w, c = y;
    J(r), Z(n);
    try {
      u = zs(() => {
        Gt(() => {
          const p = e();
          l && f(p);
        });
      });
    } finally {
      J(o), Z(c);
    }
    return l = !0, u;
  });
  return t ? {
    set: t,
    update: (f) => t(f(e())),
    subscribe: i.subscribe
  } : {
    subscribe: i.subscribe
  };
}
function Zs(e) {
  let t;
  const n = cr((s) => {
    let i = !1;
    const f = e.subscribe((l) => {
      t = l, i && s();
    });
    return i = !0, f;
  });
  function r() {
    return At() ? (n(), t) : pn(e);
  }
  return "set" in e ? {
    get current() {
      return r();
    },
    set current(s) {
      e.set(s);
    }
  } : {
    get current() {
      return r();
    }
  };
}
const wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  derived: As,
  fromStore: Zs,
  get: pn,
  readable: ir,
  readonly: Ss,
  toStore: Js,
  writable: vn
}, Symbol.toStringTag, { value: "Module" }));
export {
  ei as $,
  Ki as A,
  Oa as B,
  zn as C,
  pi as D,
  vi as E,
  ns as F,
  Vi as G,
  es as H,
  hi as I,
  Ui as J,
  Bi as K,
  ga as L,
  Oe as M,
  Gi as N,
  un as O,
  da as P,
  ki as Q,
  Ye as R,
  Ae as S,
  Yt as T,
  Es as U,
  fo as V,
  Ha as W,
  ra as X,
  M as Y,
  cn as Z,
  sa as _,
  ia as a,
  fe as a$,
  zi as a0,
  ee as a1,
  Vs as a2,
  dt as a3,
  F as a4,
  Ne as a5,
  rt as a6,
  ne as a7,
  _i as a8,
  lt as a9,
  Lt as aA,
  gn as aB,
  pa as aC,
  Mi as aD,
  li as aE,
  Ai as aF,
  Ka as aG,
  Hn as aH,
  Ni as aI,
  Ii as aJ,
  Fs as aK,
  Ri as aL,
  W as aM,
  K as aN,
  ue as aO,
  Ci as aP,
  _o as aQ,
  Ws as aR,
  bi as aS,
  mi as aT,
  gi as aU,
  Wi as aV,
  ea as aW,
  ls as aX,
  le as aY,
  lo as aZ,
  ri as a_,
  ui as aa,
  ua as ab,
  ca as ac,
  Ti as ad,
  Ei as ae,
  kr as af,
  Bs as ag,
  Gt as ah,
  is as ai,
  Zi as aj,
  R as ak,
  zt as al,
  bn as am,
  bs as an,
  yi as ao,
  po as ap,
  Dt as aq,
  v as ar,
  Xs as as,
  Aa as at,
  si as au,
  Wn as av,
  pt as aw,
  ce as ax,
  nt as ay,
  ut as az,
  ts as b,
  La as b$,
  Hi as b0,
  ji as b1,
  qi as b2,
  Fr as b3,
  Ue as b4,
  io as b5,
  Vn as b6,
  vo as b7,
  ni as b8,
  to as b9,
  Ya as bA,
  aa as bB,
  ti as bC,
  zs as bD,
  oa as bE,
  jn as bF,
  Qi as bG,
  Is as bH,
  ma as bI,
  on as bJ,
  ho as bK,
  Va as bL,
  gs as bM,
  ja as bN,
  At as bO,
  ba as bP,
  fi as bQ,
  ai as bR,
  Ea as bS,
  Ba as bT,
  va as bU,
  wi as bV,
  Ja as bW,
  Ma as bX,
  we as bY,
  uo as bZ,
  co as b_,
  _a as ba,
  wa as bb,
  Hs as bc,
  ci as bd,
  rs as be,
  fn as bf,
  Pr as bg,
  Za as bh,
  ha as bi,
  eo as bj,
  no as bk,
  Nn as bl,
  oo as bm,
  ao as bn,
  Yn as bo,
  ii as bp,
  mn as bq,
  Fa as br,
  Oi as bs,
  Pi as bt,
  ot as bu,
  js as bv,
  Li as bw,
  Di as bx,
  xe as by,
  Fi as bz,
  Xt as c,
  Wa as c0,
  ys as c1,
  $a as c2,
  Qa as c3,
  za as c4,
  so as c5,
  Ua as c6,
  Ca as c7,
  Ta as c8,
  be as c9,
  ro as cA,
  Fe as cB,
  _t as cC,
  cr as cD,
  Un as cE,
  vn as cF,
  pn as cG,
  wo as cH,
  Na as ca,
  Ia as cb,
  ks as cc,
  Ra as cd,
  ya as ce,
  Ji as cf,
  os as cg,
  oi as ch,
  Xi as ci,
  Dn as cj,
  Xa as ck,
  Pa as cl,
  Da as cm,
  Ga as cn,
  Mn as co,
  qr as cp,
  la as cq,
  Hr as cr,
  xi as cs,
  Si as ct,
  ta as cu,
  qa as cv,
  na as cw,
  us as cx,
  _s as cy,
  cs as cz,
  Kt as d,
  fa as e,
  Z as f,
  w as g,
  U as h,
  y as i,
  Sa as j,
  vt as k,
  k as l,
  Pt as m,
  ms as n,
  ws as o,
  ke as p,
  Se as q,
  _n as r,
  J as s,
  An as t,
  $e as u,
  $i as v,
  Tn as w,
  Yi as x,
  ka as y,
  xa as z
};
