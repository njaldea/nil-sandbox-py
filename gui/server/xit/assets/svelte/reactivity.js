var _s = Object.getPrototypeOf;
var zs = Reflect.get;
var is = (o) => {
  throw TypeError(o);
};
var Y = (o, n, s) => n.has(o) || is("Cannot " + s);
var e = (o, n, s) => (Y(o, n, "read from private field"), s ? s.call(o) : n.get(o)), u = (o, n, s) => n.has(o) ? is("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(o) : n.set(o, s), P = (o, n, s, t) => (Y(o, n, "write to private field"), t ? t.call(o, s) : n.set(o, s), s), f = (o, n, s) => (Y(o, n, "access private method"), s);
var hs = (o, n, s) => zs(_s(o), s, n);
import { c9 as c, g as us, a4 as r, s as as, bL as ys, a1 as a, cB as V, a6 as ls, cC as l, cD as Ss } from "./store.js";
import { o as bs } from "./internal/client.js";
var ns = !1, W, T, G, H, ds;
const ss = class ss extends Date {
  /** @param {any[]} params */
  constructor(...s) {
    super(...s);
    u(this, H);
    u(this, W, c(super.getTime()));
    /** @type {Map<keyof Date, Source<unknown>>} */
    u(this, T, /* @__PURE__ */ new Map());
    u(this, G, us);
    ns || f(this, H, ds).call(this);
  }
};
W = new WeakMap(), T = new WeakMap(), G = new WeakMap(), H = new WeakSet(), ds = function() {
  ns = !0;
  var s = ss.prototype, t = Date.prototype, i = (
    /** @type {Array<keyof Date & string>} */
    Object.getOwnPropertyNames(t)
  );
  for (const h of i)
    (h.startsWith("get") || h.startsWith("to") || h === "valueOf") && (s[h] = function(...z) {
      if (z.length > 0)
        return r(e(this, W)), t[h].apply(this, z);
      var b = e(this, T).get(h);
      if (b === void 0) {
        const M = us;
        as(e(this, G)), b = ys(() => (r(e(this, W)), t[h].apply(this, z))), e(this, T).set(h, b), as(M);
      }
      return r(b);
    }), h.startsWith("set") && (s[h] = function(...z) {
      var b = t[h].apply(this, z);
      return a(e(this, W), t.getTime.call(this)), b;
    });
};
let os = ss;
var Ps = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], xs = ["difference", "intersection", "symmetricDifference", "union"], ps = !1, $, d, x, I, k, vs, ms;
const K = class K extends Set {
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(s) {
    super();
    u(this, k);
    /** @type {Map<T, Source<boolean>>} */
    u(this, $, /* @__PURE__ */ new Map());
    u(this, d, c(0));
    u(this, x, c(0));
    u(this, I, V || -1);
    if (s) {
      for (var t of s)
        super.add(t);
      e(this, x).v = super.size;
    }
    ps || f(this, k, ms).call(this);
  }
  /** @param {T} value */
  has(s) {
    var t = super.has(s), i = e(this, $), h = i.get(s);
    if (h === void 0) {
      if (!t)
        return r(e(this, d)), !1;
      h = f(this, k, vs).call(this, !0), i.set(s, h);
    }
    return r(h), t;
  }
  /** @param {T} value */
  add(s) {
    return super.has(s) || (super.add(s), a(e(this, x), super.size), l(e(this, d))), this;
  }
  /** @param {T} value */
  delete(s) {
    var t = super.delete(s), i = e(this, $), h = i.get(s);
    return h !== void 0 && (i.delete(s), a(h, !1)), t && (a(e(this, x), super.size), l(e(this, d))), t;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var s = e(this, $);
      for (var t of s.values())
        a(t, !1);
      s.clear(), a(e(this, x), 0), l(e(this, d));
    }
  }
  keys() {
    return this.values();
  }
  values() {
    return r(e(this, d)), super.values();
  }
  entries() {
    return r(e(this, d)), super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return r(e(this, x));
  }
};
$ = new WeakMap(), d = new WeakMap(), x = new WeakMap(), I = new WeakMap(), k = new WeakSet(), /**
 * If the source is being created inside the same reaction as the SvelteSet instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
vs = function(s) {
  return V === e(this, I) ? c(s) : ls(s);
}, // We init as part of the first instance so that we can treeshake this class
ms = function() {
  ps = !0;
  var s = K.prototype, t = Set.prototype;
  for (const i of Ps)
    s[i] = function(...h) {
      return r(e(this, d)), t[i].apply(this, h);
    };
  for (const i of xs)
    s[i] = function(...h) {
      r(e(this, d));
      var z = (
        /** @type {Set<T>} */
        t[i].apply(this, h)
      );
      return new K(z);
    };
};
let cs = K;
var m, g, y, X, v, C, Q;
const es = class es extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(s) {
    super();
    u(this, v);
    /** @type {Map<K, Source<number>>} */
    u(this, m, /* @__PURE__ */ new Map());
    u(this, g, c(0));
    u(this, y, c(0));
    u(this, X, V || -1);
    if (s) {
      for (var [t, i] of s)
        super.set(t, i);
      e(this, y).v = super.size;
    }
  }
  /** @param {K} key */
  has(s) {
    var t = e(this, m), i = t.get(s);
    if (i === void 0)
      if (super.has(s))
        i = f(this, v, C).call(this, 0), t.set(s, i);
      else
        return r(e(this, g)), !1;
    return r(i), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(s, t) {
    f(this, v, Q).call(this), super.forEach(s, t);
  }
  /** @param {K} key */
  get(s) {
    var t = e(this, m), i = t.get(s);
    if (i === void 0)
      if (super.has(s))
        i = f(this, v, C).call(this, 0), t.set(s, i);
      else {
        r(e(this, g));
        return;
      }
    return r(i), super.get(s);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(s, t) {
    var rs;
    var i = e(this, m), h = i.get(s), z = super.get(s), b = super.set(s, t), M = e(this, g);
    if (h === void 0)
      h = f(this, v, C).call(this, 0), i.set(s, h), a(e(this, y), super.size), l(M);
    else if (z !== t) {
      l(h);
      var ts = M.reactions === null ? null : new Set(M.reactions), gs = ts === null || !((rs = h.reactions) != null && rs.every(
        (ws) => (
          /** @type {NonNullable<typeof v_reactions>} */
          ts.has(ws)
        )
      ));
      gs && l(M);
    }
    return b;
  }
  /** @param {K} key */
  delete(s) {
    var t = e(this, m), i = t.get(s), h = super.delete(s);
    return i !== void 0 && (t.delete(s), a(i, -1)), h && (a(e(this, y), super.size), l(e(this, g))), h;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var s = e(this, m);
      a(e(this, y), 0);
      for (var t of s.values())
        a(t, -1);
      l(e(this, g)), s.clear();
    }
  }
  keys() {
    return r(e(this, g)), super.keys();
  }
  values() {
    return f(this, v, Q).call(this), super.values();
  }
  entries() {
    return f(this, v, Q).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return r(e(this, y)), super.size;
  }
};
m = new WeakMap(), g = new WeakMap(), y = new WeakMap(), X = new WeakMap(), v = new WeakSet(), /**
 * If the source is being created inside the same reaction as the SvelteMap instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
C = function(s) {
  return V === e(this, X) ? c(s) : ls(s);
}, Q = function() {
  r(e(this, g));
  var s = e(this, m);
  if (e(this, y).v !== s.size) {
    for (var t of hs(es.prototype, this, "keys").call(this))
      if (!s.has(t)) {
        var i = f(this, v, C).call(this, 0);
        s.set(t, i);
      }
  }
  for ([, i] of e(this, m))
    r(i);
};
let fs = es;
const Z = Symbol();
var p, B, S, R, N;
class Ls extends URLSearchParams {
  constructor() {
    super(...arguments);
    u(this, R);
    u(this, p, c(0));
    u(this, B, Rs());
    u(this, S, !1);
  }
  /**
   * @param {URLSearchParams} params
   * @internal
   */
  [Z](s) {
    if (!e(this, S)) {
      P(this, S, !0);
      for (const t of [...super.keys()])
        super.delete(t);
      for (const [t, i] of s)
        super.append(t, i);
      l(e(this, p)), P(this, S, !1);
    }
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  append(s, t) {
    super.append(s, t), f(this, R, N).call(this), l(e(this, p));
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {void}
   */
  delete(s, t) {
    var i = super.has(s, t);
    super.delete(s, t), i && (f(this, R, N).call(this), l(e(this, p)));
  }
  /**
   * @param {string} name
   * @returns {string|null}
   */
  get(s) {
    return r(e(this, p)), super.get(s);
  }
  /**
   * @param {string} name
   * @returns {string[]}
   */
  getAll(s) {
    return r(e(this, p)), super.getAll(s);
  }
  /**
   * @param {string} name
   * @param {string=} value
   * @returns {boolean}
   */
  has(s, t) {
    return r(e(this, p)), super.has(s, t);
  }
  keys() {
    return r(e(this, p)), super.keys();
  }
  /**
   * @param {string} name
   * @param {string} value
   * @returns {void}
   */
  set(s, t) {
    var i = super.getAll(s).join("");
    super.set(s, t), i !== super.getAll(s).join("") && (f(this, R, N).call(this), l(e(this, p)));
  }
  sort() {
    super.sort(), f(this, R, N).call(this), l(e(this, p));
  }
  toString() {
    return r(e(this, p)), super.toString();
  }
  values() {
    return r(e(this, p)), super.values();
  }
  entries() {
    return r(e(this, p)), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return r(e(this, p)), super.size;
  }
}
p = new WeakMap(), B = new WeakMap(), S = new WeakMap(), R = new WeakSet(), N = function() {
  if (!e(this, B) || e(this, S)) return;
  P(this, S, !0);
  const s = this.toString();
  e(this, B).search = s && `?${s}`, P(this, S, !1);
};
let q = null;
function Rs() {
  return q;
}
var L, O, A, w, _, E, U, j, D;
class Ms extends URL {
  /**
   * @param {string | URL} url
   * @param {string | URL} [base]
   */
  constructor(s, t) {
    s = new URL(s, t);
    super(s);
    u(this, L, c(super.protocol));
    u(this, O, c(super.username));
    u(this, A, c(super.password));
    u(this, w, c(super.hostname));
    u(this, _, c(super.port));
    u(this, E, c(super.pathname));
    u(this, U, c(super.hash));
    u(this, j, c(super.search));
    u(this, D);
    q = this, P(this, D, new Ls(s.searchParams)), q = null;
  }
  get hash() {
    return r(e(this, U));
  }
  set hash(s) {
    super.hash = s, a(e(this, U), super.hash);
  }
  get host() {
    return r(e(this, w)), r(e(this, _)), super.host;
  }
  set host(s) {
    super.host = s, a(e(this, w), super.hostname), a(e(this, _), super.port);
  }
  get hostname() {
    return r(e(this, w));
  }
  set hostname(s) {
    super.hostname = s, a(e(this, w), super.hostname);
  }
  get href() {
    return r(e(this, L)), r(e(this, O)), r(e(this, A)), r(e(this, w)), r(e(this, _)), r(e(this, E)), r(e(this, U)), r(e(this, j)), super.href;
  }
  set href(s) {
    super.href = s, a(e(this, L), super.protocol), a(e(this, O), super.username), a(e(this, A), super.password), a(e(this, w), super.hostname), a(e(this, _), super.port), a(e(this, E), super.pathname), a(e(this, U), super.hash), a(e(this, j), super.search), e(this, D)[Z](super.searchParams);
  }
  get password() {
    return r(e(this, A));
  }
  set password(s) {
    super.password = s, a(e(this, A), super.password);
  }
  get pathname() {
    return r(e(this, E));
  }
  set pathname(s) {
    super.pathname = s, a(e(this, E), super.pathname);
  }
  get port() {
    return r(e(this, _));
  }
  set port(s) {
    super.port = s, a(e(this, _), super.port);
  }
  get protocol() {
    return r(e(this, L));
  }
  set protocol(s) {
    super.protocol = s, a(e(this, L), super.protocol);
  }
  get search() {
    return r(e(this, j));
  }
  set search(s) {
    super.search = s, a(e(this, j), super.search), e(this, D)[Z](super.searchParams);
  }
  get username() {
    return r(e(this, O));
  }
  set username(s) {
    super.username = s, a(e(this, O), super.username);
  }
  get origin() {
    return r(e(this, L)), r(e(this, w)), r(e(this, _)), super.origin;
  }
  get searchParams() {
    return e(this, D);
  }
  toString() {
    return this.href;
  }
  toJSON() {
    return this.href;
  }
}
L = new WeakMap(), O = new WeakMap(), A = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), E = new WeakMap(), U = new WeakMap(), j = new WeakMap(), D = new WeakMap();
var F, J;
class Os {
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(n, s) {
    u(this, F);
    u(this, J);
    P(this, F, n), P(this, J, Ss(s));
  }
  get current() {
    return e(this, J).call(this), e(this, F).call(this);
  }
}
F = new WeakMap(), J = new WeakMap();
const As = /\(.+\)/, Es = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Ws extends Os {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(n, s) {
    let t = As.test(n) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    n.split(/[\s,]+/).some((h) => Es.has(h.trim())) ? n : `(${n})`;
    const i = window.matchMedia(t);
    super(
      () => i.matches,
      (h) => bs(i, "change", h)
    );
  }
}
export {
  Ws as MediaQuery,
  os as SvelteDate,
  fs as SvelteMap,
  cs as SvelteSet,
  Ms as SvelteURL,
  Ls as SvelteURLSearchParams,
  Ss as createSubscriber
};
