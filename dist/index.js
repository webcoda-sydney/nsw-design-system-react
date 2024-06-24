import pe, { useId as ar, useState as cr, useEffect as ve, Fragment as dn, forwardRef as ht, useRef as ke, createElement as mt, useLayoutEffect as vt, useMemo as gt, useCallback as yt, useDebugValue as bt } from "react";
const lr = (e = "", n = "-") => (e + ar()).replace(/\:/g, n);
function wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fe = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function _t() {
  if (An)
    return Ee;
  An = 1;
  var e = pe, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, f, u) {
    var p, m = {}, g = null, x = null;
    u !== void 0 && (g = "" + u), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (p in f)
      t.call(f, p) && !i.hasOwnProperty(p) && (m[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: n, type: l, key: g, ref: x, props: m, _owner: o.current };
  }
  return Ee.Fragment = r, Ee.jsx = a, Ee.jsxs = a, Ee;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Ct() {
  return Ln || (Ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E = Symbol.iterator, O = "@@iterator";
    function M(c) {
      if (c === null || typeof c != "object")
        return null;
      var h = E && c[E] || c[O];
      return typeof h == "function" ? h : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(c) {
      {
        for (var h = arguments.length, y = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          y[S - 1] = arguments[S];
        U("error", c, y);
      }
    }
    function U(c, h, y) {
      {
        var S = R.ReactDebugCurrentFrame, V = S.getStackAddendum();
        V !== "" && (h += "%s", y = y.concat([V]));
        var Y = y.map(function(H) {
          return String(H);
        });
        Y.unshift("Warning: " + h), Function.prototype.apply.call(console[c], console, Y);
      }
    }
    var Z = !1, w = !1, F = !1, J = !1, se = !1, ae;
    ae = Symbol.for("react.module.reference");
    function ne(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === t || c === i || se || c === o || c === u || c === p || J || c === x || Z || w || F || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === m || c.$$typeof === a || c.$$typeof === l || c.$$typeof === f || c.$$typeof === ae || c.getModuleId !== void 0));
    }
    function ye(c, h, y) {
      var S = c.displayName;
      if (S)
        return S;
      var V = h.displayName || h.name || "";
      return V !== "" ? y + "(" + V + ")" : y;
    }
    function be(c) {
      return c.displayName || "Context";
    }
    function re(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var h = c;
            return be(h) + ".Consumer";
          case a:
            var y = c;
            return be(y._context) + ".Provider";
          case f:
            return ye(c, c.render, "ForwardRef");
          case m:
            var S = c.displayName || null;
            return S !== null ? S : re(c.type) || "Memo";
          case g: {
            var V = c, Y = V._payload, H = V._init;
            try {
              return re(H(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ue = 0, te, le, he, we, v, C, I;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function N() {
      {
        if (ue === 0) {
          te = console.log, le = console.info, he = console.warn, we = console.error, v = console.group, C = console.groupCollapsed, I = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        ue++;
      }
    }
    function D() {
      {
        if (ue--, ue === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, c, {
              value: te
            }),
            info: ee({}, c, {
              value: le
            }),
            warn: ee({}, c, {
              value: he
            }),
            error: ee({}, c, {
              value: we
            }),
            group: ee({}, c, {
              value: v
            }),
            groupCollapsed: ee({}, c, {
              value: C
            }),
            groupEnd: ee({}, c, {
              value: I
            })
          });
        }
        ue < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = R.ReactCurrentDispatcher, P;
    function j(c, h, y) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (V) {
            var S = V.stack.trim().match(/\n( *(at )?)/);
            P = S && S[1] || "";
          }
        return `
` + P + c;
      }
    }
    var q = !1, A;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      A = new K();
    }
    function _(c, h) {
      if (!c || q)
        return "";
      {
        var y = A.get(c);
        if (y !== void 0)
          return y;
      }
      var S;
      q = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = k.current, k.current = null, N();
      try {
        if (h) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (fe) {
              S = fe;
            }
            Reflect.construct(c, [], H);
          } else {
            try {
              H.call();
            } catch (fe) {
              S = fe;
            }
            c.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            S = fe;
          }
          c();
        }
      } catch (fe) {
        if (fe && S && typeof fe.stack == "string") {
          for (var L = fe.stack.split(`
`), X = S.stack.split(`
`), z = L.length - 1, G = X.length - 1; z >= 1 && G >= 0 && L[z] !== X[G]; )
            G--;
          for (; z >= 1 && G >= 0; z--, G--)
            if (L[z] !== X[G]) {
              if (z !== 1 || G !== 1)
                do
                  if (z--, G--, G < 0 || L[z] !== X[G]) {
                    var ie = `
` + L[z].replace(" at new ", " at ");
                    return c.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", c.displayName)), typeof c == "function" && A.set(c, ie), ie;
                  }
                while (z >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        q = !1, k.current = Y, D(), Error.prepareStackTrace = V;
      }
      var xe = c ? c.displayName || c.name : "", jn = xe ? j(xe) : "";
      return typeof c == "function" && A.set(c, jn), jn;
    }
    function oe(c, h, y) {
      return _(c, !1);
    }
    function _e(c) {
      var h = c.prototype;
      return !!(h && h.isReactComponent);
    }
    function me(c, h, y) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return _(c, _e(c));
      if (typeof c == "string")
        return j(c);
      switch (c) {
        case u:
          return j("Suspense");
        case p:
          return j("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return oe(c.render);
          case m:
            return me(c.type, h, y);
          case g: {
            var S = c, V = S._payload, Y = S._init;
            try {
              return me(Y(V), h, y);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Cn = {}, xn = R.ReactDebugCurrentFrame;
    function Ie(c) {
      if (c) {
        var h = c._owner, y = me(c.type, c._source, h ? h.type : null);
        xn.setExtraStackFrame(y);
      } else
        xn.setExtraStackFrame(null);
    }
    function zr(c, h, y, S, V) {
      {
        var Y = Function.call.bind($e);
        for (var H in c)
          if (Y(c, H)) {
            var L = void 0;
            try {
              if (typeof c[H] != "function") {
                var X = Error((S || "React class") + ": " + y + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              L = c[H](h, H, S, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              L = z;
            }
            L && !(L instanceof Error) && (Ie(V), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", y, H, typeof L), Ie(null)), L instanceof Error && !(L.message in Cn) && (Cn[L.message] = !0, Ie(V), T("Failed %s type: %s", y, L.message), Ie(null));
          }
      }
    }
    var Gr = Array.isArray;
    function qe(c) {
      return Gr(c);
    }
    function Qr(c) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, y = h && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return y;
      }
    }
    function Jr(c) {
      try {
        return Tn(c), !1;
      } catch {
        return !0;
      }
    }
    function Tn(c) {
      return "" + c;
    }
    function En(c) {
      if (Jr(c))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qr(c)), Tn(c);
    }
    var Te = R.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sn, Rn, Ve;
    Ve = {};
    function Xr(c) {
      if ($e.call(c, "ref")) {
        var h = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function et(c) {
      if ($e.call(c, "key")) {
        var h = Object.getOwnPropertyDescriptor(c, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function nt(c, h) {
      if (typeof c.ref == "string" && Te.current && h && Te.current.stateNode !== h) {
        var y = re(Te.current.type);
        Ve[y] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Te.current.type), c.ref), Ve[y] = !0);
      }
    }
    function rt(c, h) {
      {
        var y = function() {
          Sn || (Sn = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function tt(c, h) {
      {
        var y = function() {
          Rn || (Rn = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        y.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var ot = function(c, h, y, S, V, Y, H) {
      var L = {
        $$typeof: n,
        type: c,
        key: h,
        ref: y,
        props: H,
        _owner: Y
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function it(c, h, y, S, V) {
      {
        var Y, H = {}, L = null, X = null;
        y !== void 0 && (En(y), L = "" + y), et(h) && (En(h.key), L = "" + h.key), Xr(h) && (X = h.ref, nt(h, V));
        for (Y in h)
          $e.call(h, Y) && !Kr.hasOwnProperty(Y) && (H[Y] = h[Y]);
        if (c && c.defaultProps) {
          var z = c.defaultProps;
          for (Y in z)
            H[Y] === void 0 && (H[Y] = z[Y]);
        }
        if (L || X) {
          var G = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          L && rt(H, G), X && tt(H, G);
        }
        return ot(c, L, X, V, S, Te.current, H);
      }
    }
    var We = R.ReactCurrentOwner, Nn = R.ReactDebugCurrentFrame;
    function Ce(c) {
      if (c) {
        var h = c._owner, y = me(c.type, c._source, h ? h.type : null);
        Nn.setExtraStackFrame(y);
      } else
        Nn.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function Ye(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }
    function kn() {
      {
        if (We.current) {
          var c = re(We.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function st(c) {
      {
        if (c !== void 0) {
          var h = c.fileName.replace(/^.*[\\\/]/, ""), y = c.lineNumber;
          return `

Check your code at ` + h + ":" + y + ".";
        }
        return "";
      }
    }
    var Pn = {};
    function at(c) {
      {
        var h = kn();
        if (!h) {
          var y = typeof c == "string" ? c : c.displayName || c.name;
          y && (h = `

Check the top-level render call using <` + y + ">.");
        }
        return h;
      }
    }
    function On(c, h) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var y = at(h);
        if (Pn[y])
          return;
        Pn[y] = !0;
        var S = "";
        c && c._owner && c._owner !== We.current && (S = " It was passed a child from " + re(c._owner.type) + "."), Ce(c), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, S), Ce(null);
      }
    }
    function $n(c, h) {
      {
        if (typeof c != "object")
          return;
        if (qe(c))
          for (var y = 0; y < c.length; y++) {
            var S = c[y];
            Ye(S) && On(S, h);
          }
        else if (Ye(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var V = M(c);
          if (typeof V == "function" && V !== c.entries)
            for (var Y = V.call(c), H; !(H = Y.next()).done; )
              Ye(H.value) && On(H.value, h);
        }
      }
    }
    function ct(c) {
      {
        var h = c.type;
        if (h == null || typeof h == "string")
          return;
        var y;
        if (typeof h == "function")
          y = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === f || h.$$typeof === m))
          y = h.propTypes;
        else
          return;
        if (y) {
          var S = re(h);
          zr(y, c.props, "prop", S, c);
        } else if (h.PropTypes !== void 0 && !Be) {
          Be = !0;
          var V = re(h);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(c) {
      {
        for (var h = Object.keys(c.props), y = 0; y < h.length; y++) {
          var S = h[y];
          if (S !== "children" && S !== "key") {
            Ce(c), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ce(null);
            break;
          }
        }
        c.ref !== null && (Ce(c), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function In(c, h, y, S, V, Y) {
      {
        var H = ne(c);
        if (!H) {
          var L = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = st(V);
          X ? L += X : L += kn();
          var z;
          c === null ? z = "null" : qe(c) ? z = "array" : c !== void 0 && c.$$typeof === n ? (z = "<" + (re(c.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : z = typeof c, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, L);
        }
        var G = it(c, h, y, V, Y);
        if (G == null)
          return G;
        if (H) {
          var ie = h.children;
          if (ie !== void 0)
            if (S)
              if (qe(ie)) {
                for (var xe = 0; xe < ie.length; xe++)
                  $n(ie[xe], c);
                Object.freeze && Object.freeze(ie);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $n(ie, c);
        }
        return c === t ? lt(G) : ct(G), G;
      }
    }
    function ut(c, h, y) {
      return In(c, h, y, !0);
    }
    function ft(c, h, y) {
      return In(c, h, y, !1);
    }
    var dt = ft, pt = ut;
    Se.Fragment = t, Se.jsx = dt, Se.jsxs = pt;
  }()), Se;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = _t() : e.exports = Ct();
})(Fe);
const pn = Fe.exports.Fragment, s = Fe.exports.jsx, b = Fe.exports.jsxs, Ne = /^[a-z0-9]+(-[a-z0-9]+)*$/, De = (e, n, r, t = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    t = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const l = o.pop(), f = o.pop(), u = {
      provider: o.length > 0 ? o[0] : t,
      prefix: f,
      name: l
    };
    return n && !Ae(u) ? null : u;
  }
  const i = o[0], a = i.split("-");
  if (a.length > 1) {
    const l = {
      provider: t,
      prefix: a.shift(),
      name: a.join("-")
    };
    return n && !Ae(l) ? null : l;
  }
  if (r && t === "") {
    const l = {
      provider: t,
      prefix: "",
      name: i
    };
    return n && !Ae(l, r) ? null : l;
  }
  return null;
}, Ae = (e, n) => e ? !!((e.provider === "" || e.provider.match(Ne)) && (n && e.prefix === "" || e.prefix.match(Ne)) && e.name.match(Ne)) : !1, ur = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Me = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), hn = Object.freeze({
  ...ur,
  ...Me
}), nn = Object.freeze({
  ...hn,
  body: "",
  hidden: !1
});
function xt(e, n) {
  const r = {};
  !e.hFlip != !n.hFlip && (r.hFlip = !0), !e.vFlip != !n.vFlip && (r.vFlip = !0);
  const t = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return t && (r.rotate = t), r;
}
function Mn(e, n) {
  const r = xt(e, n);
  for (const t in nn)
    t in Me ? t in e && !(t in r) && (r[t] = Me[t]) : t in n ? r[t] = n[t] : t in e && (r[t] = e[t]);
  return r;
}
function Tt(e, n) {
  const r = e.icons, t = e.aliases || {}, o = /* @__PURE__ */ Object.create(null);
  function i(a) {
    if (r[a])
      return o[a] = [];
    if (!(a in o)) {
      o[a] = null;
      const l = t[a] && t[a].parent, f = l && i(l);
      f && (o[a] = [l].concat(f));
    }
    return o[a];
  }
  return (n || Object.keys(r).concat(Object.keys(t))).forEach(i), o;
}
function Et(e, n, r) {
  const t = e.icons, o = e.aliases || {};
  let i = {};
  function a(l) {
    i = Mn(t[l] || o[l], i);
  }
  return a(n), r.forEach(a), Mn(e, i);
}
function fr(e, n) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    n(o, null), r.push(o);
  });
  const t = Tt(e);
  for (const o in t) {
    const i = t[o];
    i && (n(o, Et(e, o, i)), r.push(o));
  }
  return r;
}
const St = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ur
};
function Ue(e, n) {
  for (const r in n)
    if (r in e && typeof e[r] != typeof n[r])
      return !1;
  return !0;
}
function dr(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ue(e, St))
    return null;
  const r = n.icons;
  for (const o in r) {
    const i = r[o];
    if (!o.match(Ne) || typeof i.body != "string" || !Ue(i, nn))
      return null;
  }
  const t = n.aliases || {};
  for (const o in t) {
    const i = t[o], a = i.parent;
    if (!o.match(Ne) || typeof a != "string" || !r[a] && !t[a] || !Ue(i, nn))
      return null;
  }
  return n;
}
const Fn = /* @__PURE__ */ Object.create(null);
function Rt(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ge(e, n) {
  const r = Fn[e] || (Fn[e] = /* @__PURE__ */ Object.create(null));
  return r[n] || (r[n] = Rt(e, n));
}
function mn(e, n) {
  return dr(n) ? fr(n, (r, t) => {
    t ? e.icons[r] = t : e.missing.add(r);
  }) : [];
}
function Nt(e, n, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[n] = {
        ...r
      }, !0;
  } catch {
  }
  return !1;
}
let Pe = !1;
function pr(e) {
  return typeof e == "boolean" && (Pe = e), Pe;
}
function kt(e) {
  const n = typeof e == "string" ? De(e, !0, Pe) : e;
  if (n) {
    const r = ge(n.provider, n.prefix), t = n.name;
    return r.icons[t] || (r.missing.has(t) ? null : void 0);
  }
}
function Pt(e, n) {
  const r = De(e, !0, Pe);
  if (!r)
    return !1;
  const t = ge(r.provider, r.prefix);
  return Nt(t, r.name, n);
}
function Ot(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), Pe && !n && !e.prefix) {
    let o = !1;
    return dr(e) && (e.prefix = "", fr(e, (i, a) => {
      a && Pt(i, a) && (o = !0);
    })), o;
  }
  const r = e.prefix;
  if (!Ae({
    provider: n,
    prefix: r,
    name: "a"
  }))
    return !1;
  const t = ge(n, r);
  return !!mn(t, e);
}
const hr = Object.freeze({
  width: null,
  height: null
}), mr = Object.freeze({
  ...hr,
  ...Me
}), $t = /(-?[0-9.]*[0-9]+[0-9.]*)/g, It = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Dn(e, n, r) {
  if (n === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * n * r) / r;
  if (typeof e != "string")
    return e;
  const t = e.split($t);
  if (t === null || !t.length)
    return e;
  const o = [];
  let i = t.shift(), a = It.test(i);
  for (; ; ) {
    if (a) {
      const l = parseFloat(i);
      isNaN(l) ? o.push(i) : o.push(Math.ceil(l * n * r) / r);
    } else
      o.push(i);
    if (i = t.shift(), i === void 0)
      return o.join("");
    a = !a;
  }
}
function jt(e, n) {
  const r = {
    ...hn,
    ...e
  }, t = {
    ...mr,
    ...n
  }, o = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let i = r.body;
  [r, t].forEach((x) => {
    const E = [], O = x.hFlip, M = x.vFlip;
    let R = x.rotate;
    O ? M ? R += 2 : (E.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), E.push("scale(-1 1)"), o.top = o.left = 0) : M && (E.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), E.push("scale(1 -1)"), o.top = o.left = 0);
    let T;
    switch (R < 0 && (R -= Math.floor(R / 4) * 4), R = R % 4, R) {
      case 1:
        T = o.height / 2 + o.top, E.unshift("rotate(90 " + T.toString() + " " + T.toString() + ")");
        break;
      case 2:
        E.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
        break;
      case 3:
        T = o.width / 2 + o.left, E.unshift("rotate(-90 " + T.toString() + " " + T.toString() + ")");
        break;
    }
    R % 2 === 1 && (o.left !== o.top && (T = o.left, o.left = o.top, o.top = T), o.width !== o.height && (T = o.width, o.width = o.height, o.height = T)), E.length && (i = '<g transform="' + E.join(" ") + '">' + i + "</g>");
  });
  const a = t.width, l = t.height, f = o.width, u = o.height;
  let p, m;
  return a === null ? (m = l === null ? "1em" : l === "auto" ? u : l, p = Dn(m, f / u)) : (p = a === "auto" ? f : a, m = l === null ? Dn(p, u / f) : l === "auto" ? u : l), {
    attributes: {
      width: p.toString(),
      height: m.toString(),
      viewBox: o.left.toString() + " " + o.top.toString() + " " + f.toString() + " " + u.toString()
    },
    body: i
  };
}
const At = /\sid="(\S+)"/g, Lt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Mt = 0;
function Ft(e, n = Lt) {
  const r = [];
  let t;
  for (; t = At.exec(e); )
    r.push(t[1]);
  return r.length && r.forEach((o) => {
    const i = typeof n == "function" ? n(o) : n + (Mt++).toString(), a = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + i + "$3");
  }), e;
}
const rn = /* @__PURE__ */ Object.create(null);
function Dt(e, n) {
  rn[e] = n;
}
function tn(e) {
  return rn[e] || rn[""];
}
function vn(e) {
  let n;
  if (typeof e.resources == "string")
    n = [e.resources];
  else if (n = e.resources, !(n instanceof Array) || !n.length)
    return null;
  return {
    resources: n,
    path: e.path || "/",
    maxURL: e.maxURL || 500,
    rotate: e.rotate || 750,
    timeout: e.timeout || 5e3,
    random: e.random === !0,
    index: e.index || 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const gn = /* @__PURE__ */ Object.create(null), Re = ["https://api.simplesvg.com", "https://api.unisvg.com"], Le = [];
for (; Re.length > 0; )
  Re.length === 1 || Math.random() > 0.5 ? Le.push(Re.shift()) : Le.push(Re.pop());
gn[""] = vn({
  resources: ["https://api.iconify.design"].concat(Le)
});
function Ht(e, n) {
  const r = vn(n);
  return r === null ? !1 : (gn[e] = r, !0);
}
function yn(e) {
  return gn[e];
}
const qt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Hn = qt();
function Vt(e, n) {
  const r = yn(e);
  if (!r)
    return 0;
  let t;
  if (!r.maxURL)
    t = 0;
  else {
    let o = 0;
    r.resources.forEach((a) => {
      o = Math.max(o, a.length);
    });
    const i = n + ".json?icons=";
    t = r.maxURL - o - r.path.length - i.length;
  }
  return t;
}
function Wt(e) {
  return e === 404;
}
const Bt = (e, n, r) => {
  const t = [], o = Vt(e, n), i = "icons";
  let a = {
    type: i,
    provider: e,
    prefix: n,
    icons: []
  }, l = 0;
  return r.forEach((f, u) => {
    l += f.length + 1, l >= o && u > 0 && (t.push(a), a = {
      type: i,
      provider: e,
      prefix: n,
      icons: []
    }, l = f.length), a.icons.push(f);
  }), t.push(a), t;
};
function Yt(e) {
  if (typeof e == "string") {
    const n = yn(e);
    if (n)
      return n.path;
  }
  return "/";
}
const Ut = (e, n, r) => {
  if (!Hn) {
    r("abort", 424);
    return;
  }
  let t = Yt(n.provider);
  switch (n.type) {
    case "icons": {
      const i = n.prefix, l = n.icons.join(","), f = new URLSearchParams({
        icons: l
      });
      t += i + ".json?" + f.toString();
      break;
    }
    case "custom": {
      const i = n.uri;
      t += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let o = 503;
  Hn(e + t).then((i) => {
    const a = i.status;
    if (a !== 200) {
      setTimeout(() => {
        r(Wt(a) ? "abort" : "next", a);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        r("next", o);
      });
      return;
    }
    setTimeout(() => {
      r("success", i);
    });
  }).catch(() => {
    r("next", o);
  });
}, Zt = {
  prepare: Bt,
  send: Ut
};
function zt(e) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let t = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (t.name === o.name && t.prefix === o.prefix && t.provider === o.provider)
      return;
    t = o;
    const i = o.provider, a = o.prefix, l = o.name, f = r[i] || (r[i] = /* @__PURE__ */ Object.create(null)), u = f[a] || (f[a] = ge(i, a));
    let p;
    l in u.icons ? p = n.loaded : a === "" || u.missing.has(l) ? p = n.missing : p = n.pending;
    const m = {
      provider: i,
      prefix: a,
      name: l
    };
    p.push(m);
  }), n;
}
function vr(e, n) {
  e.forEach((r) => {
    const t = r.loaderCallbacks;
    t && (r.loaderCallbacks = t.filter((o) => o.id !== n));
  });
}
function Gt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let r = !1;
    const t = e.provider, o = e.prefix;
    n.forEach((i) => {
      const a = i.icons, l = a.pending.length;
      a.pending = a.pending.filter((f) => {
        if (f.prefix !== o)
          return !0;
        const u = f.name;
        if (e.icons[u])
          a.loaded.push({
            provider: t,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          a.missing.push({
            provider: t,
            prefix: o,
            name: u
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== l && (r || vr([e], i.id), i.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), i.abort));
    });
  }));
}
let Qt = 0;
function Jt(e, n, r) {
  const t = Qt++, o = vr.bind(null, r, t);
  if (!n.pending.length)
    return o;
  const i = {
    id: t,
    icons: n,
    callback: e,
    abort: o
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(i);
  }), o;
}
function Kt(e, n = !0, r = !1) {
  const t = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? De(o, n, r) : o;
    i && t.push(i);
  }), t;
}
var Xt = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function eo(e, n, r, t) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let a;
  if (e.random) {
    let F = e.resources.slice(0);
    for (a = []; F.length > 1; ) {
      const J = Math.floor(Math.random() * F.length);
      a.push(F[J]), F = F.slice(0, J).concat(F.slice(J + 1));
    }
    a = a.concat(F);
  } else
    a = e.resources.slice(i).concat(e.resources.slice(0, i));
  const l = Date.now();
  let f = "pending", u = 0, p, m = null, g = [], x = [];
  typeof t == "function" && x.push(t);
  function E() {
    m && (clearTimeout(m), m = null);
  }
  function O() {
    f === "pending" && (f = "aborted"), E(), g.forEach((F) => {
      F.status === "pending" && (F.status = "aborted");
    }), g = [];
  }
  function M(F, J) {
    J && (x = []), typeof F == "function" && x.push(F);
  }
  function R() {
    return {
      startTime: l,
      payload: n,
      status: f,
      queriesSent: u,
      queriesPending: g.length,
      subscribe: M,
      abort: O
    };
  }
  function T() {
    f = "failed", x.forEach((F) => {
      F(void 0, p);
    });
  }
  function U() {
    g.forEach((F) => {
      F.status === "pending" && (F.status = "aborted");
    }), g = [];
  }
  function Z(F, J, se) {
    const ae = J !== "success";
    switch (g = g.filter((ne) => ne !== F), f) {
      case "pending":
        break;
      case "failed":
        if (ae || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (J === "abort") {
      p = se, T();
      return;
    }
    if (ae) {
      p = se, g.length || (a.length ? w() : T());
      return;
    }
    if (E(), U(), !e.random) {
      const ne = e.resources.indexOf(F.resource);
      ne !== -1 && ne !== e.index && (e.index = ne);
    }
    f = "completed", x.forEach((ne) => {
      ne(se);
    });
  }
  function w() {
    if (f !== "pending")
      return;
    E();
    const F = a.shift();
    if (F === void 0) {
      if (g.length) {
        m = setTimeout(() => {
          E(), f === "pending" && (U(), T());
        }, e.timeout);
        return;
      }
      T();
      return;
    }
    const J = {
      status: "pending",
      resource: F,
      callback: (se, ae) => {
        Z(J, se, ae);
      }
    };
    g.push(J), u++, m = setTimeout(w, e.rotate), r(F, n, J.callback);
  }
  return setTimeout(w), R;
}
function gr(e) {
  const n = {
    ...Xt,
    ...e
  };
  let r = [];
  function t() {
    r = r.filter((l) => l().status === "pending");
  }
  function o(l, f, u) {
    const p = eo(n, l, f, (m, g) => {
      t(), u && u(m, g);
    });
    return r.push(p), p;
  }
  function i(l) {
    return r.find((f) => l(f)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (l) => {
      n.index = l;
    },
    getIndex: () => n.index,
    cleanup: t
  };
}
function qn() {
}
const Ze = /* @__PURE__ */ Object.create(null);
function no(e) {
  if (!Ze[e]) {
    const n = yn(e);
    if (!n)
      return;
    const r = gr(n), t = {
      config: n,
      redundancy: r
    };
    Ze[e] = t;
  }
  return Ze[e];
}
function ro(e, n, r) {
  let t, o;
  if (typeof e == "string") {
    const i = tn(e);
    if (!i)
      return r(void 0, 424), qn;
    o = i.send;
    const a = no(e);
    a && (t = a.redundancy);
  } else {
    const i = vn(e);
    if (i) {
      t = gr(i);
      const a = e.resources ? e.resources[0] : "", l = tn(a);
      l && (o = l.send);
    }
  }
  return !t || !o ? (r(void 0, 424), qn) : t.query(n, o, r)().abort;
}
const Vn = "iconify2", Oe = "iconify", yr = Oe + "-count", Wn = Oe + "-version", br = 36e5, to = 168;
function on(e, n) {
  try {
    return e.getItem(n);
  } catch {
  }
}
function bn(e, n, r) {
  try {
    return e.setItem(n, r), !0;
  } catch {
  }
}
function Bn(e, n) {
  try {
    e.removeItem(n);
  } catch {
  }
}
function sn(e, n) {
  return bn(e, yr, n.toString());
}
function an(e) {
  return parseInt(on(e, yr)) || 0;
}
const He = {
  local: !0,
  session: !0
}, wr = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let wn = !1;
function oo(e) {
  wn = e;
}
let je = typeof window > "u" ? {} : window;
function _r(e) {
  const n = e + "Storage";
  try {
    if (je && je[n] && typeof je[n].length == "number")
      return je[n];
  } catch {
  }
  He[e] = !1;
}
function Cr(e, n) {
  const r = _r(e);
  if (!r)
    return;
  const t = on(r, Wn);
  if (t !== Vn) {
    if (t) {
      const l = an(r);
      for (let f = 0; f < l; f++)
        Bn(r, Oe + f.toString());
    }
    bn(r, Wn, Vn), sn(r, 0);
    return;
  }
  const o = Math.floor(Date.now() / br) - to, i = (l) => {
    const f = Oe + l.toString(), u = on(r, f);
    if (typeof u == "string") {
      try {
        const p = JSON.parse(u);
        if (typeof p == "object" && typeof p.cached == "number" && p.cached > o && typeof p.provider == "string" && typeof p.data == "object" && typeof p.data.prefix == "string" && n(p, l))
          return !0;
      } catch {
      }
      Bn(r, f);
    }
  };
  let a = an(r);
  for (let l = a - 1; l >= 0; l--)
    i(l) || (l === a - 1 ? (a--, sn(r, a)) : wr[e].add(l));
}
function xr() {
  if (!wn) {
    oo(!0);
    for (const e in He)
      Cr(e, (n) => {
        const r = n.data, t = n.provider, o = r.prefix, i = ge(t, o);
        if (!mn(i, r).length)
          return !1;
        const a = r.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, a) : a, !0;
      });
  }
}
function io(e, n) {
  const r = e.lastModifiedCached;
  if (r && r >= n)
    return r === n;
  if (e.lastModifiedCached = n, r)
    for (const t in He)
      Cr(t, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === n;
      });
  return !0;
}
function so(e, n) {
  wn || xr();
  function r(t) {
    let o;
    if (!He[t] || !(o = _r(t)))
      return;
    const i = wr[t];
    let a;
    if (i.size)
      i.delete(a = Array.from(i).shift());
    else if (a = an(o), !sn(o, a + 1))
      return;
    const l = {
      cached: Math.floor(Date.now() / br),
      provider: e.provider,
      data: n
    };
    return bn(o, Oe + a.toString(), JSON.stringify(l));
  }
  n.lastModified && !io(e, n.lastModified) || !Object.keys(n.icons).length || (n.not_found && (n = Object.assign({}, n), delete n.not_found), r("local") || r("session"));
}
function Yn() {
}
function ao(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Gt(e);
  }));
}
function co(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const {
      provider: r,
      prefix: t
    } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = tn(r)))
      return;
    i.prepare(r, t, o).forEach((l) => {
      ro(r, l, (f, u) => {
        if (typeof f != "object") {
          if (u !== 404)
            return;
          l.icons.forEach((p) => {
            e.missing.add(p);
          });
        } else
          try {
            const p = mn(e, f);
            if (!p.length)
              return;
            const m = e.pendingIcons;
            m && p.forEach((g) => {
              m.delete(g);
            }), so(e, f);
          } catch (p) {
            console.error(p);
          }
        ao(e);
      });
    });
  }));
}
const lo = (e, n) => {
  const r = Kt(e, !0, pr()), t = zt(r);
  if (!t.pending.length) {
    let f = !0;
    return n && setTimeout(() => {
      f && n(t.loaded, t.missing, t.pending, Yn);
    }), () => {
      f = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let a, l;
  return t.pending.forEach((f) => {
    const {
      provider: u,
      prefix: p
    } = f;
    if (p === l && u === a)
      return;
    a = u, l = p, i.push(ge(u, p));
    const m = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    m[p] || (m[p] = []);
  }), t.pending.forEach((f) => {
    const {
      provider: u,
      prefix: p,
      name: m
    } = f, g = ge(u, p), x = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    x.has(m) || (x.add(m), o[u][p].push(m));
  }), i.forEach((f) => {
    const {
      provider: u,
      prefix: p
    } = f;
    o[u][p].length && co(f, o[u][p]);
  }), n ? Jt(n, t, i) : Yn;
};
function uo(e, n) {
  const r = {
    ...e
  };
  for (const t in n) {
    const o = n[t], i = typeof o;
    t in hr ? (o === null || o && (i === "string" || i === "number")) && (r[t] = o) : i === typeof r[t] && (r[t] = t === "rotate" ? o % 4 : o);
  }
  return r;
}
const fo = /[\s,]+/;
function po(e, n) {
  n.split(fo).forEach((r) => {
    switch (r.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function ho(e, n = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function t(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (r === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : t(o);
  } else if (r !== e) {
    let o = 0;
    switch (r) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? t(i) : 0);
    }
  }
  return n;
}
function mo(e, n) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const t in n)
    r += " " + t + '="' + n[t] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function vo(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function go(e) {
  return 'url("data:image/svg+xml,' + vo(e) + '")';
}
const Tr = {
  ...mr,
  inline: !1
}, yo = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, bo = {
  display: "inline-block"
}, cn = {
  backgroundColor: "currentColor"
}, Er = {
  backgroundColor: "transparent"
}, Un = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Zn = {
  webkitMask: cn,
  mask: cn,
  background: Er
};
for (const e in Zn) {
  const n = Zn[e];
  for (const r in Un)
    n[e + r] = Un[r];
}
const wo = {
  ...Tr,
  inline: !0
};
function zn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const _o = (e, n, r, t) => {
  const o = r ? wo : Tr, i = uo(o, n), a = n.mode || "svg", l = {}, f = n.style || {}, u = {
    ...a === "svg" ? yo : {},
    ref: t
  };
  for (let R in n) {
    const T = n[R];
    if (T !== void 0)
      switch (R) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[R] = T === !0 || T === "true" || T === 1;
          break;
        case "flip":
          typeof T == "string" && po(i, T);
          break;
        case "color":
          l.color = T;
          break;
        case "rotate":
          typeof T == "string" ? i[R] = ho(T) : typeof T == "number" && (i[R] = T);
          break;
        case "ariaHidden":
        case "aria-hidden":
          T !== !0 && T !== "true" && delete u["aria-hidden"];
          break;
        default:
          o[R] === void 0 && (u[R] = T);
      }
  }
  const p = jt(e, i), m = p.attributes;
  if (i.inline && (l.verticalAlign = "-0.125em"), a === "svg") {
    u.style = {
      ...l,
      ...f
    }, Object.assign(u, m);
    let R = 0, T = n.id;
    return typeof T == "string" && (T = T.replace(/-/g, "_")), u.dangerouslySetInnerHTML = {
      __html: Ft(p.body, T ? () => T + "ID" + R++ : "iconifyReact")
    }, /* @__PURE__ */ s("svg", {
      ...u
    });
  }
  const {
    body: g,
    width: x,
    height: E
  } = e, O = a === "mask" || (a === "bg" ? !1 : g.indexOf("currentColor") !== -1), M = mo(g, {
    ...m,
    width: x + "",
    height: E + ""
  });
  return u.style = {
    ...l,
    "--svg": go(M),
    width: zn(m.width),
    height: zn(m.height),
    ...bo,
    ...O ? cn : Er,
    ...f
  }, /* @__PURE__ */ s("span", {
    ...u
  });
};
pr(!0);
Dt("", Zt);
if (typeof document < "u" && typeof window < "u") {
  xr();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((t) => {
      try {
        (typeof t != "object" || t === null || t instanceof Array || typeof t.icons != "object" || typeof t.prefix != "string" || !Ot(t)) && console.error(r);
      } catch {
        console.error(r);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const n = e.IconifyProviders;
    if (typeof n == "object" && n !== null)
      for (let r in n) {
        const t = "IconifyProviders[" + r + "] is invalid.";
        try {
          const o = n[r];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          Ht(r, o) || console.error(t);
        } catch {
          console.error(t);
        }
      }
  }
}
class Sr extends pe.Component {
  constructor(n) {
    super(n), this.state = {
      icon: null
    };
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  _setData(n) {
    this.state.icon !== n && this.setState({
      icon: n
    });
  }
  _checkIcon(n) {
    const r = this.state, t = this.props.icon;
    if (typeof t == "object" && t !== null && typeof t.body == "string") {
      this._icon = "", this._abortLoading(), (n || r.icon === null) && this._setData({
        data: t
      });
      return;
    }
    let o;
    if (typeof t != "string" || (o = De(t, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const i = kt(o);
    if (!i) {
      (!this._loading || this._loading.name !== t) && (this._abortLoading(), this._icon = "", this._setData(null), i !== null && (this._loading = {
        name: t,
        abort: lo([o], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== t || r.icon === null) {
      this._abortLoading(), this._icon = t;
      const a = ["iconify"];
      o.prefix !== "" && a.push("iconify--" + o.prefix), o.provider !== "" && a.push("iconify--" + o.provider), this._setData({
        data: i,
        classes: a
      }), this.props.onLoad && this.props.onLoad(t);
    }
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(n) {
    n.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const n = this.props, r = this.state.icon;
    if (r === null)
      return n.children ? n.children : /* @__PURE__ */ s("span", {});
    let t = n;
    return r.classes && (t = {
      ...n,
      className: (typeof n.className == "string" ? n.className + " " : "") + r.classes.join(" ")
    }), _o({
      ...hn,
      ...r.data
    }, t, n._inline, n._ref);
  }
}
const Co = pe.forwardRef(function(n, r) {
  const t = {
    ...n,
    _ref: r,
    _inline: !1
  };
  return /* @__PURE__ */ s(Sr, {
    ...t
  });
});
pe.forwardRef(function(n, r) {
  const t = {
    ...n,
    _ref: r,
    _inline: !0
  };
  return /* @__PURE__ */ s(Sr, {
    ...t
  });
});
function Rr(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = Rr(e[n])) && (t && (t += " "), t += r);
    else
      for (n in e)
        e[n] && (t && (t += " "), t += n);
  return t;
}
function Nr() {
  for (var e, n, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = Rr(e)) && (t && (t += " "), t += n);
  return t;
}
function Q(e) {
  const {
    icon: n,
    className: r,
    width: t = 24,
    height: o = 24,
    ...i
  } = e;
  return /* @__PURE__ */ s(Co, {
    ...i,
    className: Nr("nsw-material-icons", r),
    icon: n,
    width: t,
    height: o
  });
}
const Ti = (e) => {
  const {
    header: n,
    body: r,
    closed: t = !0,
    className: o = "",
    ...i
  } = e, [a, l] = cr(!t), f = lr("accordion");
  return ve(() => {
    l(!t);
  }, [t]), /* @__PURE__ */ b(dn, {
    children: [/* @__PURE__ */ s("div", {
      className: "nsw-accordion__title",
      children: /* @__PURE__ */ b("button", {
        type: "button",
        "aria-expanded": a,
        "aria-controls": f,
        className: `nsw-accordion__button ${a ? "is-open" : ""}`,
        onClick: () => l((u) => !u),
        children: [n, /* @__PURE__ */ s(Q, {
          icon: "ic:baseline-keyboard-arrow-down",
          className: "nsw-accordion__icon"
        })]
      })
    }), /* @__PURE__ */ s("div", {
      className: "nsw-accordion__content",
      id: f,
      hidden: !a,
      children: /* @__PURE__ */ s("div", {
        className: "nsw-wysiwyg-content",
        children: r
      })
    })]
  });
}, Ei = ({
  className: e,
  children: n,
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-accordion ready ${e || ""}`,
  ...r,
  children: n
}), Si = ({
  label: e,
  items: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("nav", {
  className: `nsw-breadcrumbs ${r}`,
  "aria-label": e,
  ...t,
  children: /* @__PURE__ */ s(To, {
    inline: !0,
    items: n
  })
}), xo = ({
  text: e,
  link: n,
  linkComponent: r = "a",
  children: t,
  onClick: o,
  ...i
}) => {
  const a = r;
  return typeof o == "function" && (i.onClick = o, n || (n = "#")), a === "a" ? i.href = n : typeof a == "function" && (i.to = n), n ? /* @__PURE__ */ b("li", {
    children: [/* @__PURE__ */ s(a, {
      ...i,
      children: e
    }), t]
  }) : /* @__PURE__ */ b("li", {
    children: [e, t]
  });
}, To = ({
  inline: e,
  items: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("ol", {
  className: `nsw-breadcrumb__list ${r}${e ? " nsw-breadcrumb__list--inline" : ""}`,
  ...t,
  children: n.map((o) => /* @__PURE__ */ s(xo, {
    ...o
  }, o.text))
}), Ri = ht(({
  linkComponent: e = "button",
  link: n,
  children: r,
  style: t = "dark",
  type: o = "button",
  block: i,
  className: a = "",
  ...l
}, f) => {
  if (n) {
    const u = e;
    return u === "a" ? l.href = n || l.href : typeof u == "function" && (l.to = n), /* @__PURE__ */ s(u, {
      ref: f,
      className: `nsw-button ${a} nsw-button--${t}${i ? " nsw-button--block" : ""}`,
      ...l,
      children: r
    });
  }
  return /* @__PURE__ */ s("button", {
    ref: f,
    type: o,
    className: `nsw-button ${a} nsw-button--${t}${i ? " nsw-button--block" : ""}`,
    ...l,
    children: r
  });
});
var d = { exports: {} }, ze = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Eo() {
  if (Gn)
    return W;
  Gn = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function U(w) {
    if (typeof w == "object" && w !== null) {
      var F = w.$$typeof;
      switch (F) {
        case n:
          switch (w = w.type, w) {
            case f:
            case u:
            case t:
            case i:
            case o:
            case m:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case p:
                case E:
                case x:
                case a:
                  return w;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function Z(w) {
    return U(w) === u;
  }
  return W.AsyncMode = f, W.ConcurrentMode = u, W.ContextConsumer = l, W.ContextProvider = a, W.Element = n, W.ForwardRef = p, W.Fragment = t, W.Lazy = E, W.Memo = x, W.Portal = r, W.Profiler = i, W.StrictMode = o, W.Suspense = m, W.isAsyncMode = function(w) {
    return Z(w) || U(w) === f;
  }, W.isConcurrentMode = Z, W.isContextConsumer = function(w) {
    return U(w) === l;
  }, W.isContextProvider = function(w) {
    return U(w) === a;
  }, W.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }, W.isForwardRef = function(w) {
    return U(w) === p;
  }, W.isFragment = function(w) {
    return U(w) === t;
  }, W.isLazy = function(w) {
    return U(w) === E;
  }, W.isMemo = function(w) {
    return U(w) === x;
  }, W.isPortal = function(w) {
    return U(w) === r;
  }, W.isProfiler = function(w) {
    return U(w) === i;
  }, W.isStrictMode = function(w) {
    return U(w) === o;
  }, W.isSuspense = function(w) {
    return U(w) === m;
  }, W.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === t || w === u || w === i || w === o || w === m || w === g || typeof w == "object" && w !== null && (w.$$typeof === E || w.$$typeof === x || w.$$typeof === a || w.$$typeof === l || w.$$typeof === p || w.$$typeof === M || w.$$typeof === R || w.$$typeof === T || w.$$typeof === O);
  }, W.typeOf = U, W;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function So() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, O = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function U(_) {
      return typeof _ == "string" || typeof _ == "function" || _ === t || _ === u || _ === i || _ === o || _ === m || _ === g || typeof _ == "object" && _ !== null && (_.$$typeof === E || _.$$typeof === x || _.$$typeof === a || _.$$typeof === l || _.$$typeof === p || _.$$typeof === M || _.$$typeof === R || _.$$typeof === T || _.$$typeof === O);
    }
    function Z(_) {
      if (typeof _ == "object" && _ !== null) {
        var oe = _.$$typeof;
        switch (oe) {
          case n:
            var _e = _.type;
            switch (_e) {
              case f:
              case u:
              case t:
              case i:
              case o:
              case m:
                return _e;
              default:
                var me = _e && _e.$$typeof;
                switch (me) {
                  case l:
                  case p:
                  case E:
                  case x:
                  case a:
                    return me;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var w = f, F = u, J = l, se = a, ae = n, ne = p, ye = t, be = E, re = x, ee = r, ue = i, te = o, le = m, he = !1;
    function we(_) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(_) || Z(_) === f;
    }
    function v(_) {
      return Z(_) === u;
    }
    function C(_) {
      return Z(_) === l;
    }
    function I(_) {
      return Z(_) === a;
    }
    function $(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === n;
    }
    function N(_) {
      return Z(_) === p;
    }
    function D(_) {
      return Z(_) === t;
    }
    function k(_) {
      return Z(_) === E;
    }
    function P(_) {
      return Z(_) === x;
    }
    function j(_) {
      return Z(_) === r;
    }
    function q(_) {
      return Z(_) === i;
    }
    function A(_) {
      return Z(_) === o;
    }
    function K(_) {
      return Z(_) === m;
    }
    B.AsyncMode = w, B.ConcurrentMode = F, B.ContextConsumer = J, B.ContextProvider = se, B.Element = ae, B.ForwardRef = ne, B.Fragment = ye, B.Lazy = be, B.Memo = re, B.Portal = ee, B.Profiler = ue, B.StrictMode = te, B.Suspense = le, B.isAsyncMode = we, B.isConcurrentMode = v, B.isContextConsumer = C, B.isContextProvider = I, B.isElement = $, B.isForwardRef = N, B.isFragment = D, B.isLazy = k, B.isMemo = P, B.isPortal = j, B.isProfiler = q, B.isStrictMode = A, B.isSuspense = K, B.isValidElementType = U, B.typeOf = Z;
  }()), B;
}
var Jn;
function kr() {
  return Jn || (Jn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Eo() : e.exports = So();
  }(ze)), ze.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ge, Kn;
function Ro() {
  if (Kn)
    return Ge;
  Kn = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ge = o() ? Object.assign : function(i, a) {
    for (var l, f = t(i), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var m in l)
        n.call(l, m) && (f[m] = l[m]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          r.call(l, u[g]) && (f[u[g]] = l[u[g]]);
      }
    }
    return f;
  }, Ge;
}
var Qe, Xn;
function _n() {
  if (Xn)
    return Qe;
  Xn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qe = e, Qe;
}
var Je, er;
function Pr() {
  return er || (er = 1, Je = Function.call.bind(Object.prototype.hasOwnProperty)), Je;
}
var Ke, nr;
function No() {
  if (nr)
    return Ke;
  nr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = _n(), r = {}, t = Pr();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, l, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (t(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (f || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = i[p](a, p, f, l, null, n);
          } catch (E) {
            m = E;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (x != null ? x : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ke = o, Ke;
}
var Xe, rr;
function ko() {
  if (rr)
    return Xe;
  rr = 1;
  var e = kr(), n = Ro(), r = _n(), t = Pr(), o = No(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Xe = function(l, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(v) {
      var C = v && (u && v[u] || v[p]);
      if (typeof C == "function")
        return C;
    }
    var g = "<<anonymous>>", x = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: U,
      element: Z(),
      elementType: w(),
      instanceOf: F,
      node: ne(),
      objectOf: se,
      oneOf: J,
      oneOfType: ae,
      shape: be,
      exact: re
    };
    function E(v, C) {
      return v === C ? v !== 0 || 1 / v === 1 / C : v !== v && C !== C;
    }
    function O(v, C) {
      this.message = v, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function M(v) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, I = 0;
      function $(D, k, P, j, q, A, K) {
        if (j = j || g, A = A || P, K !== r) {
          if (f) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = j + ":" + P;
            !C[oe] && I < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[oe] = !0, I++);
          }
        }
        return k[P] == null ? D ? k[P] === null ? new O("The " + q + " `" + A + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new O("The " + q + " `" + A + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : v(k, P, j, q, A);
      }
      var N = $.bind(null, !1);
      return N.isRequired = $.bind(null, !0), N;
    }
    function R(v) {
      function C(I, $, N, D, k, P) {
        var j = I[$], q = te(j);
        if (q !== v) {
          var A = le(j);
          return new O(
            "Invalid " + D + " `" + k + "` of type " + ("`" + A + "` supplied to `" + N + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return M(C);
    }
    function T() {
      return M(a);
    }
    function U(v) {
      function C(I, $, N, D, k) {
        if (typeof v != "function")
          return new O("Property `" + k + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var P = I[$];
        if (!Array.isArray(P)) {
          var j = te(P);
          return new O("Invalid " + D + " `" + k + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected an array."));
        }
        for (var q = 0; q < P.length; q++) {
          var A = v(P, q, N, D, k + "[" + q + "]", r);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return M(C);
    }
    function Z() {
      function v(C, I, $, N, D) {
        var k = C[I];
        if (!l(k)) {
          var P = te(k);
          return new O("Invalid " + N + " `" + D + "` of type " + ("`" + P + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(v);
    }
    function w() {
      function v(C, I, $, N, D) {
        var k = C[I];
        if (!e.isValidElementType(k)) {
          var P = te(k);
          return new O("Invalid " + N + " `" + D + "` of type " + ("`" + P + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(v);
    }
    function F(v) {
      function C(I, $, N, D, k) {
        if (!(I[$] instanceof v)) {
          var P = v.name || g, j = we(I[$]);
          return new O("Invalid " + D + " `" + k + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return M(C);
    }
    function J(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function C(I, $, N, D, k) {
        for (var P = I[$], j = 0; j < v.length; j++)
          if (E(P, v[j]))
            return null;
        var q = JSON.stringify(v, function(K, _) {
          var oe = le(_);
          return oe === "symbol" ? String(_) : _;
        });
        return new O("Invalid " + D + " `" + k + "` of value `" + String(P) + "` " + ("supplied to `" + N + "`, expected one of " + q + "."));
      }
      return M(C);
    }
    function se(v) {
      function C(I, $, N, D, k) {
        if (typeof v != "function")
          return new O("Property `" + k + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var P = I[$], j = te(P);
        if (j !== "object")
          return new O("Invalid " + D + " `" + k + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected an object."));
        for (var q in P)
          if (t(P, q)) {
            var A = v(P, q, N, D, k + "." + q, r);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return M(C);
    }
    function ae(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var C = 0; C < v.length; C++) {
        var I = v[C];
        if (typeof I != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(I) + " at index " + C + "."
          ), a;
      }
      function $(N, D, k, P, j) {
        for (var q = [], A = 0; A < v.length; A++) {
          var K = v[A], _ = K(N, D, k, P, j, r);
          if (_ == null)
            return null;
          _.data && t(_.data, "expectedType") && q.push(_.data.expectedType);
        }
        var oe = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new O("Invalid " + P + " `" + j + "` supplied to " + ("`" + k + "`" + oe + "."));
      }
      return M($);
    }
    function ne() {
      function v(C, I, $, N, D) {
        return ee(C[I]) ? null : new O("Invalid " + N + " `" + D + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return M(v);
    }
    function ye(v, C, I, $, N) {
      return new O(
        (v || "React class") + ": " + C + " type `" + I + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function be(v) {
      function C(I, $, N, D, k) {
        var P = I[$], j = te(P);
        if (j !== "object")
          return new O("Invalid " + D + " `" + k + "` of type `" + j + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var q in v) {
          var A = v[q];
          if (typeof A != "function")
            return ye(N, D, k, q, le(A));
          var K = A(P, q, N, D, k + "." + q, r);
          if (K)
            return K;
        }
        return null;
      }
      return M(C);
    }
    function re(v) {
      function C(I, $, N, D, k) {
        var P = I[$], j = te(P);
        if (j !== "object")
          return new O("Invalid " + D + " `" + k + "` of type `" + j + "` " + ("supplied to `" + N + "`, expected `object`."));
        var q = n({}, I[$], v);
        for (var A in q) {
          var K = v[A];
          if (t(v, A) && typeof K != "function")
            return ye(N, D, k, A, le(K));
          if (!K)
            return new O(
              "Invalid " + D + " `" + k + "` key `" + A + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(I[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var _ = K(P, A, N, D, k + "." + A, r);
          if (_)
            return _;
        }
        return null;
      }
      return M(C);
    }
    function ee(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(ee);
          if (v === null || l(v))
            return !0;
          var C = m(v);
          if (C) {
            var I = C.call(v), $;
            if (C !== v.entries) {
              for (; !($ = I.next()).done; )
                if (!ee($.value))
                  return !1;
            } else
              for (; !($ = I.next()).done; ) {
                var N = $.value;
                if (N && !ee(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(v, C) {
      return v === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function te(v) {
      var C = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : ue(C, v) ? "symbol" : C;
    }
    function le(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var C = te(v);
      if (C === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function he(v) {
      var C = le(v);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function we(v) {
      return !v.constructor || !v.constructor.name ? g : v.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Xe;
}
var en, tr;
function Po() {
  if (tr)
    return en;
  tr = 1;
  var e = _n();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, en = function() {
    function t(a, l, f, u, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    t.isRequired = t;
    function o() {
      return t;
    }
    var i = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: o,
      element: t,
      elementType: t,
      instanceOf: o,
      node: t,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, en;
}
if (process.env.NODE_ENV !== "production") {
  var Oo = kr(), $o = !0;
  d.exports = ko()(Oo.isElement, $o);
} else
  d.exports = Po()();
const Io = ({
  title: e,
  level: n = 4,
  children: r,
  className: t = "",
  ...o
}) => {
  const i = `h${n}`;
  return /* @__PURE__ */ s("div", {
    className: `nsw-callout ${t}`,
    ...o,
    children: /* @__PURE__ */ b("div", {
      className: "nsw-callout__content",
      children: [/* @__PURE__ */ s(i, {
        className: "nsw-callout__title",
        children: e
      }), r]
    })
  });
};
Io.propTypes = {
  title: d.exports.string.isRequired,
  level: d.exports.number,
  children: d.exports.node.isRequired,
  className: d.exports.string
};
const Ni = ({
  link: e,
  linkTarget: n,
  style: r = "white",
  headline: t,
  highlight: o,
  tag: i,
  date: a,
  image: l,
  imageAlt: f,
  className: u = "",
  children: p,
  linkComponent: m = "a",
  ...g
}) => {
  const {
    href: x,
    target: E,
    ...O
  } = g;
  let M = "div";
  e !== void 0 && (M = "div");
  const R = () => {
    if (!l)
      return "";
    if (typeof l == "string")
      return /* @__PURE__ */ s(or, {
        src: l,
        alt: f || ""
      });
    if (typeof l == "function")
      return /* @__PURE__ */ s(or, {
        alt: f || "",
        children: l
      });
  };
  return /* @__PURE__ */ b(M, {
    className: Nr(u, `nsw-card nsw-card--${r}`, {
      "nsw-card--highlight": o,
      "nsw-card--headline": t && !p
    }),
    ...O,
    children: [R(), /* @__PURE__ */ b(jo, {
      children: [i ? /* @__PURE__ */ s(Lo, {
        children: i
      }) : "", a ? /* @__PURE__ */ s(Mo, {
        date: a
      }) : "", t ? /* @__PURE__ */ s(Ao, {
        link: e,
        linkTarget: n,
        linkComponent: m,
        children: t
      }) : "", p]
    })]
  });
}, jo = ({
  className: e,
  children: n,
  ...r
}) => /* @__PURE__ */ b("div", {
  className: `nsw-card__content ${e}`,
  ...r,
  children: [n, /* @__PURE__ */ s(Q, {
    icon: "ic:baseline-east",
    className: "nsw-card__icon"
  })]
}), Ao = ({
  className: e = "",
  link: n,
  linkComponent: r = "a",
  linkTarget: t,
  children: o
}) => {
  const i = "div";
  return n !== void 0 ? /* @__PURE__ */ s(i, {
    className: `nsw-card__title ${e}`,
    children: /* @__PURE__ */ s(r, {
      href: n,
      target: t,
      className: "nsw-card__link",
      children: o
    })
  }) : /* @__PURE__ */ s(i, {
    className: "nsw-card__title",
    children: o
  });
}, or = ({
  src: e,
  className: n = "",
  alt: r = "",
  children: t,
  ...o
}) => /* @__PURE__ */ s("div", {
  className: "nsw-card__image",
  children: t || /* @__PURE__ */ s("img", {
    className: n,
    src: e,
    alt: r,
    ...o
  })
}), ki = ({
  src: e,
  children: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("div", {
  className: `nsw-card__copy ${r}`,
  ...t,
  children: n
}), Lo = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("p", {
  className: `nsw-card__tag ${n}`,
  ...r,
  children: e
}), Mo = ({
  className: e = "",
  date: n,
  ...r
}) => /* @__PURE__ */ s("p", {
  className: `nsw-card__date ${e}`,
  ...r,
  children: /* @__PURE__ */ s("time", {
    dateTime: n,
    children: n
  })
}), Fo = ({
  links: e,
  mainLink: n,
  headline: r,
  copy: t,
  image: o,
  imageAlt: i,
  icon: a,
  className: l = ""
}) => /* @__PURE__ */ b("div", {
  className: `nsw-content-block ${l}`,
  children: [o ? /* @__PURE__ */ s(Or, {
    src: o,
    imageAlt: i || ""
  }) : "", a ? /* @__PURE__ */ s($r, {
    children: a
  }) : "", /* @__PURE__ */ b("div", {
    className: "nsw-content-block__content",
    children: [r ? /* @__PURE__ */ s(jr, {
      children: r
    }) : "", t ? /* @__PURE__ */ s(Ir, {
      children: t
    }) : "", /* @__PURE__ */ s("ul", {
      className: "nsw-content-block__list",
      children: e ? e.map((u) => /* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ s("a", {
          href: u.url,
          children: u.text
        })
      }, u.text)) : ""
    }), n ? /* @__PURE__ */ s("div", {
      className: "nsw-content-block__link",
      children: /* @__PURE__ */ s("a", {
        href: n.url,
        children: n.text
      })
    }) : ""]
  })]
});
Fo.propTypes = {
  image: d.exports.string,
  imageAlt: d.exports.string,
  headline: d.exports.string.isRequired,
  icon: d.exports.node,
  copy: d.exports.string,
  links: d.exports.arrayOf(d.exports.shape({
    url: d.exports.string,
    text: d.exports.string
  })),
  mainLink: d.exports.shape({
    url: d.exports.string.isRequired,
    text: d.exports.string.isRequired
  }),
  className: d.exports.string
};
const Or = ({
  src: e,
  className: n = "",
  imageAlt: r,
  ...t
}) => /* @__PURE__ */ s("div", {
  className: "nsw-content-block__image",
  children: /* @__PURE__ */ s("img", {
    src: e,
    alt: r,
    className: "nsw-content-block__image",
    ...t
  })
});
Or.propTypes = {
  src: d.exports.string.isRequired,
  imageAlt: d.exports.string,
  className: d.exports.string
};
const $r = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: "nsw-content-block__image",
  ...r,
  children: /* @__PURE__ */ s("div", {
    className: "nsw-content-block__icon",
    children: e
  })
});
$r.propTypes = {
  className: d.exports.string,
  children: d.exports.node
};
const Ir = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("p", {
  className: `nsw-content-block__copy ${n}`,
  ...r,
  children: e
});
Ir.propTypes = {
  className: d.exports.string,
  children: d.exports.node
};
const jr = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("h2", {
  className: "nsw-content-block__title",
  ...r,
  children: e
});
jr.propTypes = {
  className: d.exports.string,
  children: d.exports.node
};
const Pi = ({
  footerLinks: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("ul", {
  className: n,
  ...r,
  children: e.map(({
    url: t,
    text: o,
    target: i,
    linkComponent: a = "a",
    ...l
  }, f) => /* @__PURE__ */ s("li", {
    children: /* @__PURE__ */ s(a, {
      ...l,
      href: t,
      target: i,
      children: o
    })
  }, t + o + f))
}), Oi = ({
  heading: e,
  sectionLinks: n,
  className: r = "",
  ...t
}) => {
  const o = e.linkComponent ? e.linkComponent : "a";
  return /* @__PURE__ */ b("div", {
    className: `nsw-footer__group ${r}`,
    ...t,
    children: [/* @__PURE__ */ s("h3", {
      className: "nsw-footer__heading",
      children: /* @__PURE__ */ s(o, {
        href: e.url,
        target: e.target,
        children: e.text
      })
    }), /* @__PURE__ */ s("ul", {
      className: "nsw-footer__list",
      children: n.map(({
        url: i,
        text: a,
        target: l,
        linkComponent: f = "a",
        ...u
      }, p) => /* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ s(f, {
          ...u,
          href: i,
          target: l,
          children: a
        })
      }, i + a + p))
    })]
  });
}, $i = ({
  children: e,
  className: n = "",
  ariaLabel: r = "footer",
  ...t
}) => /* @__PURE__ */ s("nav", {
  className: `nsw-footer__upper ${n}`,
  "aria-label": r,
  ...t,
  children: /* @__PURE__ */ s("div", {
    className: "nsw-container",
    children: e
  })
}), Ii = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-footer__lower ${n}`,
  ...r,
  children: e
}), ji = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("footer", {
  className: `nsw-footer ${n}`,
  ...r,
  role: "contentinfo",
  children: e
});
var Ar = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = pe;
  function r(g) {
    return g && typeof g == "object" && "default" in g ? g : { default: g };
  }
  var t = /* @__PURE__ */ r(n), o = "id", i = 0;
  function a(g) {
    return i++, "".concat(g || o).concat(i);
  }
  var l = function() {
    i = 0;
  }, f = function(x) {
    o = x;
  }, u = function(x, E) {
    for (var O = [], M = 0; M < x; M++)
      O.push(a(E));
    return O;
  };
  function p(g) {
    var x = t.default.useRef();
    return t.default.useEffect(function() {
      x.current = g;
    }), x.current;
  }
  function m() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, x = arguments.length > 1 ? arguments[1] : void 0, E = t.default.useRef([]), O = p(g), M = p(x);
    return (g !== O || M !== x) && (E.current = u(g, x)), E.current;
  }
  e.default = a, e.resetId = l, e.setPrefix = f, e.useId = m;
})(Ar);
const ce = /* @__PURE__ */ wt(Ar), Do = ce(), Ho = {
  invalid: "ic:baseline-cancel",
  valid: "ic:baseline-check-circle"
}, de = ({
  htmlId: e = Do,
  children: n,
  className: r,
  status: t,
  ...o
}) => /* @__PURE__ */ b("span", {
  id: `${t === "invalid" ? "error" : "helper"}${e}`,
  className: `nsw-form__helper ${t === "invalid" ? " nsw-form__helper--error" : ""} ${t === "valid" ? " nsw-form__helper--valid" : ""} ${r}`,
  ...o,
  children: [(t === "invalid" || t === "valid") && /* @__PURE__ */ s(Q, {
    icon: Ho[t]
  }), n]
});
de.propTypes = {
  htmlId: d.exports.string,
  children: d.exports.node,
  className: d.exports.string,
  error: d.exports.bool
};
const qo = ({
  htmlFor: e,
  text: n,
  dark: r,
  inline: t,
  className: o = "",
  isSrOnly: i = !1,
  ...a
}) => /* @__PURE__ */ s("label", {
  htmlFor: e,
  className: i ? "sr-only" : `nsw-form__label ${o}`,
  ...a,
  children: n
}), Lr = ({
  htmlId: e = ce(),
  status: n = "default",
  children: r,
  label: t,
  helper: o,
  statusText: i,
  error: a,
  className: l = "",
  hideLabel: f = !1,
  isInputGroup: u = !1,
  isInputGroupIcon: p = !1,
  ...m
}) => {
  var g;
  return /* @__PURE__ */ s("div", {
    className: `nsw-form__group ${l}`,
    ...m,
    children: /* @__PURE__ */ b("div", {
      className: `${u ? "nsw-form__input-group" : ""} ${p ? "nsw-form__input-group nsw-form__input-group--icon" : ""}`,
      children: [/* @__PURE__ */ s(qo, {
        htmlFor: e,
        text: t,
        isSrOnly: f
      }), o ? /* @__PURE__ */ s(de, {
        htmlId: e,
        children: o
      }) : "", (g = pe.Children.map(r, (x) => x ? pe.cloneElement(x, {
        error: a
      }) : null)) == null ? void 0 : g.filter((x) => !!x), n ? /* @__PURE__ */ s(de, {
        htmlId: e,
        status: n,
        children: i
      }) : ""]
    })
  });
}, Vo = ({
  as: e = "input",
  status: n,
  block: r,
  number: t,
  htmlId: o = "0",
  type: i = "text",
  className: a = "",
  ...l
}) => e === "textarea" ? /* @__PURE__ */ s("textarea", {
  className: `nsw-form__input ${a}${r ? " nsw-form__input--block" : ""}${t ? " nsw-form__input--number" : ""}`,
  "aria-invalid": n === "invalid" ? "true" : "false",
  "aria-describedby": n === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  id: o,
  ...l
}) : /* @__PURE__ */ s("input", {
  className: `nsw-form__input ${a}${r ? " nsw-form__input--block" : ""}${t ? " nsw-form__input--number" : ""}`,
  "aria-invalid": n === "invalid" ? "true" : "false",
  "aria-describedby": n === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  type: i,
  ...l,
  id: o
}), Ai = ({
  status: e = "default",
  className: n = "",
  inputType: r,
  statusText: t,
  label: o,
  helper: i,
  htmlId: a = ce(),
  as: l,
  children: f,
  isInputGroup: u = !1,
  isInputGroupIcon: p = !1,
  hideLabel: m,
  ...g
}) => /* @__PURE__ */ b(Lr, {
  className: n,
  status: e,
  statusText: t,
  label: o,
  helper: i,
  htmlId: a,
  isInputGroup: u,
  isInputGroupIcon: p,
  hideLabel: m,
  children: [/* @__PURE__ */ s(Vo, {
    ...g,
    as: l,
    status: e,
    htmlId: a,
    type: r
  }), f]
}), Wo = ce(), Mr = ({
  text: e,
  value: n
}) => /* @__PURE__ */ s("option", {
  value: n,
  children: e
});
Mr.propTypes = {
  text: d.exports.string.isRequired,
  value: d.exports.string.isRequired
};
const Fr = ({
  htmlId: e,
  selected: n,
  options: r,
  block: t,
  status: o = "default",
  className: i = "",
  placeholder: a,
  ...l
}) => /* @__PURE__ */ b("select", {
  className: `nsw-form__select ${i}`,
  "aria-invalid": o === "invalid" ? "true" : void 0,
  "aria-describedby": o === "invalid" ? `helper${e} error${e}` : `helper${e}`,
  id: e,
  defaultValue: n,
  ...l,
  children: [!!a && /* @__PURE__ */ s("option", {
    value: "",
    children: a
  }), r.map((f) => /* @__PURE__ */ s(Mr, {
    ...f
  }, f.value))]
});
Fr.propTypes = {
  options: d.exports.arrayOf(d.exports.shape({
    value: d.exports.string.isRequired,
    text: d.exports.string.isRequired
  })).isRequired,
  block: d.exports.bool,
  htmlId: d.exports.string,
  status: d.exports.oneOf(["valid", "invalid", "default"]),
  selected: d.exports.string,
  className: d.exports.string
};
const Bo = ({
  status: e = "default",
  selected: n,
  statusText: r,
  label: t,
  helper: o,
  options: i,
  htmlId: a = Wo,
  placeholder: l = "Please select",
  hideLabel: f,
  ...u
}) => /* @__PURE__ */ s(Lr, {
  status: e,
  statusText: r,
  label: t,
  helper: o,
  htmlId: a,
  hideLabel: f,
  children: /* @__PURE__ */ s(Fr, {
    ...u,
    htmlId: a,
    options: i,
    selected: n,
    placeholder: l,
    status: e
  })
});
Bo.propTypes = {
  status: d.exports.oneOf(["valid", "invalid", "default"]),
  statusText: d.exports.string,
  label: d.exports.string,
  helper: d.exports.string,
  selected: d.exports.string,
  options: d.exports.arrayOf(d.exports.shape({
    value: d.exports.string.isRequired,
    text: d.exports.string.isRequired
  })).isRequired,
  htmlId: d.exports.string
};
const Dr = ({
  text: e,
  htmlId: n,
  value: r,
  status: t,
  as: o,
  uniqueID: i = ce(),
  onChange: a,
  checked: l = !1,
  ...f
}) => /* @__PURE__ */ b(dn, {
  children: [/* @__PURE__ */ s("input", {
    className: "nsw-form__checkbox-input",
    type: "checkbox",
    name: n,
    "aria-invalid": t === "invalid" && o !== "group" ? "true" : void 0,
    "aria-describedby": t === "invalid" ? `helper${n} error${n}` : `helper${n}`,
    id: i,
    value: r,
    checked: l,
    onChange: a,
    ...f
  }), /* @__PURE__ */ s("label", {
    className: "nsw-form__checkbox-label",
    htmlFor: i,
    children: e
  })]
});
Dr.propTypes = {
  text: d.exports.string.isRequired,
  value: d.exports.string.isRequired,
  className: d.exports.string,
  htmlId: d.exports.string,
  uniqueID: d.exports.func,
  status: d.exports.oneOf(["valid", "invalid", "default"]),
  as: d.exports.string
};
const Yo = ({
  className: e = "",
  as: n,
  status: r = "default",
  label: t,
  options: o,
  htmlId: i = ce(),
  statusText: a,
  helper: l,
  onChange: f
}) => /* @__PURE__ */ s("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ b("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": r === "invalid" ? "true" : void 0,
    children: [n === "group" ? /* @__PURE__ */ b("legend", {
      children: [/* @__PURE__ */ s("span", {
        className: "nsw-form__legend",
        children: t
      }), l ? /* @__PURE__ */ s(de, {
        htmlId: i,
        children: l
      }) : "", r ? /* @__PURE__ */ s(de, {
        htmlId: i,
        status: r,
        children: a
      }) : ""]
    }) : "", /* @__PURE__ */ s("div", {
      children: o.map((u) => /* @__PURE__ */ s(Dr, {
        ...u,
        as: n,
        htmlId: i,
        status: r,
        checked: u.selected,
        onChange: f
      }, u.value))
    }), r && n !== "group" ? /* @__PURE__ */ s(de, {
      htmlId: i,
      status: r,
      children: a
    }) : ""]
  })
});
Yo.propTypes = {
  status: d.exports.oneOf(["valid", "invalid", "default"]),
  statusText: d.exports.string,
  htmlId: d.exports.string,
  label: d.exports.string,
  as: d.exports.oneOf(["group", !1]),
  helper: d.exports.string,
  options: d.exports.arrayOf(d.exports.shape({
    value: d.exports.string,
    text: d.exports.string
  })).isRequired,
  className: d.exports.string
};
const Uo = ({
  text: e,
  htmlId: n,
  value: r,
  status: t,
  uniqueID: o = ce(),
  onChange: i,
  checked: a = !1,
  ...l
}) => /* @__PURE__ */ b(pe.Fragment, {
  children: [/* @__PURE__ */ s("input", {
    className: "nsw-form__radio-input",
    type: "radio",
    name: n,
    "aria-describedby": t === "invalid" ? `helper${n} error${n}` : `helper${n}`,
    id: o,
    value: r,
    checked: a,
    onChange: i,
    ...l
  }), /* @__PURE__ */ s("label", {
    className: "nsw-form__radio-label",
    htmlFor: o,
    children: e
  })]
}), Li = ({
  className: e = "",
  as: n = "group",
  label: r,
  helper: t,
  status: o = "default",
  htmlId: i,
  statusText: a,
  options: l,
  onChange: f
}) => /* @__PURE__ */ s("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ b("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": o === "invalid" ? "true" : void 0,
    children: [n === "group" ? /* @__PURE__ */ b("legend", {
      children: [/* @__PURE__ */ s("span", {
        className: "nsw-form__legend",
        children: r
      }), t ? /* @__PURE__ */ s(de, {
        htmlId: i,
        children: t
      }) : "", o ? /* @__PURE__ */ s(de, {
        htmlId: i,
        status: o,
        children: a
      }) : ""]
    }) : "", /* @__PURE__ */ s("div", {
      children: l.map((u) => /* @__PURE__ */ s(Uo, {
        ...u,
        htmlId: i,
        status: o,
        checked: u.selected,
        onChange: f
      }, u.value))
    }), o && n !== "group" ? /* @__PURE__ */ s(de, {
      htmlId: i,
      status: o,
      children: a
    }) : ""]
  })
}), Zo = ({
  step: e,
  of: n,
  ...r
}) => /* @__PURE__ */ b("div", {
  className: "nsw-progress-indicator",
  ...r,
  children: [/* @__PURE__ */ b("div", {
    className: "nsw-progress-indicator__count",
    children: ["Step ", e, " of ", n]
  }), /* @__PURE__ */ s("div", {
    className: "nsw-progress-indicator__bar",
    children: [...Array(n)].fill(void 0).map((t, o) => o + 1 <= e ? /* @__PURE__ */ s(ln, {
      active: !0
    }, o) : /* @__PURE__ */ s(ln, {}, o))
  })]
});
Zo.propTypes = {
  step: d.exports.number.isRequired,
  of: d.exports.number.isRequired
};
const ln = ({
  active: e
}) => /* @__PURE__ */ s("div", {
  className: `${e ? "active" : ""}`
});
ln.propTypes = {
  active: d.exports.bool
};
const zo = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
  default: ""
}, ir = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark"
}, Mi = (e) => {
  const {
    title: n,
    content: r,
    ctaText: t,
    ctaHref: o,
    as: i = "default",
    className: a = "",
    children: l,
    onClose: f,
    ...u
  } = e, p = ke(null);
  return ve(() => {
    (async () => {
      const {
        GlobalAlert: m
      } = await import("./main.ca35e5ee.js");
      new m(p.current).init();
    })();
  }, []), /* @__PURE__ */ s("div", {
    ref: p,
    className: `nsw-global-alert ${a} ${zo[i]}`,
    ...u,
    children: /* @__PURE__ */ b("div", {
      className: "nsw-global-alert__wrapper",
      children: [/* @__PURE__ */ b("div", {
        className: "nsw-global-alert__content",
        children: [/* @__PURE__ */ s("div", {
          className: "nsw-global-alert__title",
          children: n
        }), typeof r == "string" ? /* @__PURE__ */ s("p", {
          children: r
        }) : r]
      }), /* @__PURE__ */ s("p", {
        children: t && o ? /* @__PURE__ */ s("a", {
          href: o,
          className: i ? ir[i] : ir.default,
          children: t
        }) : ""
      }), /* @__PURE__ */ b("button", {
        type: "button",
        className: "nsw-icon-button js-close-alert",
        onClick: f,
        children: [/* @__PURE__ */ s(Q, {
          icon: "ic:baseline-close"
        }), /* @__PURE__ */ s("span", {
          className: "sr-only",
          children: "Close message"
        })]
      })]
    })
  });
}, Fi = (e) => {
  const {
    siteTitle: n,
    siteDescriptor: r,
    logo: t,
    headerUrl: o,
    linkComponent: i = "a",
    mobile: a = !0,
    search: l = !0,
    onSubmit: f,
    slotMainLogo: u,
    ...p
  } = e, m = ke(null), g = ke(null);
  return ve(() => {
    (async () => {
      const {
        SiteSearch: x
      } = await import("./main.ca35e5ee.js");
      l && (new x(m.current).init(), new x(g.current).init());
    })();
  }, []), /* @__PURE__ */ s(dn, {
    children: /* @__PURE__ */ s("header", {
      className: "nsw-header",
      ...p,
      children: /* @__PURE__ */ b("div", {
        className: "nsw-header__container",
        children: [/* @__PURE__ */ b("div", {
          className: "nsw-header__inner",
          children: [/* @__PURE__ */ b("div", {
            className: "nsw-header__main",
            children: [/* @__PURE__ */ s("div", {
              className: "nsw-header__waratah",
              children: /* @__PURE__ */ b(i, {
                href: o,
                className: "nsw-header__logo-link",
                children: [u || /* @__PURE__ */ b("svg", {
                  width: "259",
                  height: "280",
                  viewBox: "0 0 259 280",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ s("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M24.2079 270.207H19.1749H19.1625V265.93L30.3122 265.984V279.66H26.0807V277.169C25.8149 277.447 25.5284 277.725 25.2211 278.002C24.5484 278.587 23.7303 279.072 22.7877 279.436C21.8284 279.809 20.645 280 19.2746 280C16.945 280 14.8895 279.461 13.1662 278.4C11.4387 277.335 10.0933 275.806 9.15894 273.862C8.23291 271.935 7.76367 269.631 7.76367 267.012C7.76367 264.355 8.25783 262.018 9.23368 260.066C10.2054 258.106 11.5965 256.568 13.3655 255.495C15.1345 254.43 17.2149 253.891 19.5487 253.891C21.0644 253.891 22.4638 254.136 23.7054 254.616C24.9595 255.101 26.0641 255.773 26.9776 256.601C27.9078 257.439 28.6428 258.396 29.1702 259.453C29.6976 260.501 29.9882 261.62 30.0422 262.772L30.063 263.207H24.0252L23.9629 262.868C23.83 262.155 23.5559 261.488 23.149 260.887C22.7503 260.294 22.2312 259.809 21.6125 259.457C20.9979 259.105 20.2671 258.926 19.4366 258.926C18.4316 258.926 17.5056 259.187 16.6959 259.701C15.8903 260.211 15.2383 261.052 14.7608 262.196C14.2749 263.365 14.0299 264.936 14.0299 266.875C14.0299 268.454 14.1919 269.772 14.5116 270.8C14.823 271.811 15.2508 272.619 15.7781 273.203C16.3014 273.784 16.8952 274.194 17.5513 274.422C18.2157 274.666 18.9175 274.791 19.64 274.791C20.3086 274.791 20.9107 274.679 21.4298 274.463C21.953 274.239 22.4098 273.949 22.7835 273.597C23.1614 273.241 23.4604 272.851 23.668 272.445C23.884 272.035 24.0168 271.629 24.0667 271.235L24.2079 270.207ZM45.0858 253.895C47.4403 253.895 49.5207 254.429 51.2648 255.482C53.0172 256.543 54.3959 258.072 55.3509 260.028C56.2977 261.963 56.7794 264.309 56.7794 266.995C56.7794 269.643 56.306 271.964 55.3675 273.895C54.4208 275.843 53.0504 277.364 51.2939 278.416C49.5498 279.469 47.4569 279.999 45.0816 279.999C42.6856 279.999 40.5802 279.465 38.8279 278.416C37.0755 277.372 35.6927 275.859 34.7293 273.911C33.7825 271.984 33.3008 269.659 33.3008 266.999C33.3008 264.326 33.7866 261.984 34.75 260.045C35.7176 258.089 37.1045 256.559 38.8694 255.494C40.6342 254.433 42.723 253.895 45.0858 253.895ZM45.0858 275.08C46.2028 275.08 47.1787 274.815 47.9843 274.293C48.7857 273.77 49.4169 272.921 49.8654 271.777C50.318 270.592 50.5506 269.005 50.5506 267.065C50.5506 265.072 50.3139 263.447 49.8529 262.233C49.4086 261.052 48.7733 260.177 47.9677 259.63C47.1538 259.087 46.1862 258.81 45.0899 258.81C43.9895 258.81 43.0178 259.087 42.2039 259.63C41.3941 260.173 40.7505 261.052 40.2979 262.241C39.8286 263.464 39.5919 265.084 39.5919 267.061C39.5919 269.005 39.8286 270.592 40.2937 271.773C40.7463 272.921 41.3858 273.77 42.1956 274.288C43.0053 274.815 43.977 275.08 45.0858 275.08ZM68.8499 272.15L62.6875 254.321H57.0898L65.7438 279.572H71.9395L80.6682 254.321H75.0622L68.8499 272.15ZM99.1615 269.323H88.8631V274.529L100.906 274.545V279.572H83.1035V254.321H100.735L100.719 259.311H88.8922V264.4H99.1615V269.323ZM121.644 267.794C122.329 267.181 122.89 266.393 123.322 265.453C123.741 264.52 123.957 263.372 123.957 262.034C123.957 260.537 123.646 259.199 123.027 258.051C122.408 256.882 121.428 255.958 120.108 255.295C118.808 254.648 117.135 254.321 115.133 254.321H104.395V279.564H110.154V270.16H114.394L118.385 279.564H124.431L119.78 269.108C120.453 268.751 121.08 268.308 121.644 267.794ZM118.131 262.154C118.131 263.153 117.795 263.944 117.106 264.582C116.416 265.212 115.457 265.531 114.249 265.531H110.154V258.925H114.61C115.648 258.925 116.483 259.211 117.155 259.8C117.812 260.376 118.131 261.147 118.131 262.154ZM133.29 254.321L143.817 269.551V254.321H149.593V279.572H144.507L133.527 263.712V279.572H127.768V254.321H133.29ZM167.239 270.782L161.949 254.321H154.055V279.572H159.864V263.306L164.988 279.572H169.473L174.635 263.215V279.572H180.461V254.321H172.583L167.239 270.782ZM200.966 269.323H190.668V274.529L202.714 274.545V279.572H184.908V254.321H202.544L202.523 259.311H190.705V264.4H200.966V269.323ZM222.46 269.551L211.937 254.321H206.41V279.572H212.166V263.712L223.145 279.572H228.232V254.321H222.46V269.551ZM238.046 259.547H230.658V254.321H251.06V259.547H243.843V279.572H238.046V259.547Z",
                    fill: "#002664"
                  }), /* @__PURE__ */ s("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M146.699 209.236C145.217 206.841 142.982 204.665 140.059 202.771C137.14 200.877 133.162 199.431 128.249 198.474L114.571 195.66C110.439 194.769 107.59 193.617 106.103 192.241C104.654 190.898 103.919 189.112 103.919 186.932C103.919 185.544 104.235 184.28 104.862 183.173C105.485 182.062 106.39 181.08 107.549 180.251C108.715 179.423 110.165 178.768 111.855 178.308C113.566 177.839 115.488 177.603 117.569 177.603C120.309 177.603 122.78 177.964 124.915 178.681C127.024 179.394 128.772 180.562 130.109 182.162C131.447 183.762 132.269 185.937 132.551 188.627L132.589 189H149.56L149.552 188.573C149.477 183.998 148.181 179.8 145.702 176.099C143.219 172.394 139.561 169.418 134.823 167.247C130.097 165.083 124.2 163.985 117.295 163.985C111.494 163.985 106.178 164.996 101.49 166.994C96.7893 168.996 93.0146 171.884 90.278 175.581C87.529 179.298 86.1587 183.745 86.2002 188.805C86.3123 194.98 88.1893 199.991 91.7771 203.708C95.3525 207.405 100.253 209.866 106.344 211.014L120.139 213.824C122.668 214.326 124.964 214.984 126.962 215.784C128.922 216.568 130.487 217.587 131.613 218.814C132.713 220.011 133.27 221.586 133.27 223.484C133.27 225.598 132.576 227.384 131.21 228.785C129.81 230.219 127.909 231.3 125.567 232.009C123.179 232.73 120.509 233.095 117.631 233.095C114.824 233.095 112.237 232.66 109.945 231.798C107.665 230.948 105.751 229.705 104.256 228.105C102.765 226.514 101.743 224.52 101.216 222.187L101.141 221.86H83.8457L83.8914 222.32C84.2983 226.365 85.5566 229.949 87.6287 232.979C89.6967 235.988 92.346 238.524 95.502 240.53C98.6496 242.523 102.179 244.044 105.996 245.043C109.803 246.037 113.74 246.543 117.689 246.543C124.155 246.543 129.889 245.524 134.735 243.509C139.602 241.487 143.452 238.702 146.184 235.233C148.937 231.74 150.332 227.757 150.332 223.385C150.332 221.321 150.1 219.025 149.635 216.563C149.157 214.081 148.169 211.615 146.699 209.236ZM25.9368 191.763L62.8532 245.075H77.8689V165.351H61.0717V216.633L25.7541 165.53L25.6295 165.351H9.18945V245.075H25.9368V191.763ZM222.574 216.34L236.962 165.353H253.419L229.832 245.077H216.465L201.911 194.608L187.252 245.077H174.105L150.572 165.353H167.083L181.467 216.332L195.856 165.353H208.023L222.574 216.34Z",
                    fill: "#002664"
                  }), /* @__PURE__ */ s("path", {
                    d: "M122.291 145.572C102.541 143.148 83.3565 149.476 49.6002 140.309C46.1536 139.372 44.8829 143.003 46.7474 146.045C55.8166 160.848 101.628 149.248 122.382 147.11C123.288 147.015 123.196 145.684 122.291 145.572Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M208.735 140.309C174.979 149.476 155.794 143.148 136.044 145.572C135.139 145.684 135.044 147.019 135.953 147.11C156.712 149.248 202.519 160.848 211.588 146.045C213.452 143.003 212.182 139.372 208.735 140.309Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M59.8819 119.132C53.0177 109.074 47.4076 97.8218 43.064 85.4429C29.9626 89.268 16.554 94.7882 2.90445 102.012C1.13961 102.944 0.0557817 104.693 0.00179824 106.682C-0.0480326 108.672 0.940279 110.47 2.65529 111.494C29.0864 127.296 54.9279 136.335 79.5858 138.427C72.2441 133.952 65.5128 127.383 59.8819 119.132Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M23.0586 85.5128C29.1047 83.0967 35.0969 81.0245 41.0351 79.2798C38.909 72.3837 37.1649 65.1603 35.7862 57.6218C28.9594 56.7723 21.8959 56.2211 14.5873 55.9807C14.525 55.9807 14.4586 55.9766 14.3963 55.9766C12.482 55.9766 10.7545 56.938 9.74958 58.5792C8.71144 60.27 8.66576 62.3214 9.62916 64.062C13.8731 71.7206 18.3537 78.8695 23.0586 85.5128Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M88.0053 135.572C92.1039 137.379 96.298 138.39 100.363 138.601C90.4097 131.481 82.5904 119.409 78.0848 104.021C72.2795 84.2118 70.3403 62.3549 72.2546 38.774C64.4228 33.8382 55.935 29.2173 46.7952 24.9239C45.0303 24.095 43.0122 24.2566 41.3927 25.3549C39.7773 26.449 38.8845 28.26 39.0049 30.1954C41.1311 64.4105 49.9553 93.1096 65.2285 115.493C71.6317 124.884 79.5092 131.825 88.0053 135.572Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M107.488 23.5772C102.803 17.8995 97.7207 12.2841 92.2352 6.73487C91.1721 5.65736 89.8018 5.08545 88.3857 5.08545C87.8791 5.08545 87.3684 5.16005 86.8617 5.30924C84.9391 5.87701 83.548 7.41453 83.1286 9.4245C82.0572 14.5883 80.0183 25.1147 79.1172 35.5251C86.1309 40.1377 92.6089 45.0155 98.5429 50.1461C100.843 41.3893 103.833 32.5164 107.488 23.5772Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M255.42 102.007C241.77 94.7836 228.362 89.2634 215.26 85.4382C210.917 97.8172 205.307 109.069 198.442 119.127C192.812 127.382 186.08 133.947 178.734 138.423C203.392 136.33 229.234 127.291 255.665 111.489C257.38 110.465 258.372 108.667 258.318 106.678C258.273 104.688 257.185 102.944 255.42 102.007Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M235.273 85.5133C239.978 78.87 244.459 71.717 248.703 64.0584C249.666 62.3178 249.625 60.2705 248.582 58.5755C247.577 56.9385 245.85 55.9729 243.936 55.9729C243.873 55.9729 243.807 55.9729 243.745 55.977C236.436 56.2174 229.368 56.7727 222.546 57.6182C221.171 65.1566 219.423 72.3801 217.297 79.2761C223.235 81.025 229.231 83.1013 235.273 85.5133Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M180.247 104.025C175.742 119.409 167.918 131.485 157.969 138.605C162.034 138.394 166.232 137.378 170.327 135.571C178.823 131.825 186.7 124.883 193.104 115.496C208.377 93.1132 217.201 64.4142 219.327 30.199C219.448 28.2637 218.555 26.4526 216.939 25.3585C215.32 24.2603 213.302 24.0987 211.537 24.9275C202.397 29.2169 193.909 33.8377 186.077 38.7777C187.992 62.3586 186.048 84.2113 180.247 104.025Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M179.214 35.5207C178.313 25.1145 176.274 14.588 175.203 9.42011C174.787 7.41013 173.392 5.87261 171.47 5.30484C170.963 5.15565 170.452 5.08105 169.946 5.08105C168.53 5.08105 167.159 5.65296 166.096 6.73047C160.611 12.2796 155.528 17.8951 150.844 23.5728C154.498 32.512 157.488 41.3849 159.793 50.1376C165.727 45.0111 172.2 40.1333 179.214 35.5207Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M129.144 87.2286C135.784 74.1368 146.39 62.4003 154.354 54.9862C149.982 37.2073 143.25 20.4354 133.957 2.88856C132.998 1.07751 131.195 0 129.148 0C127.101 0 125.303 1.08165 124.34 2.88856C114.951 20.4934 108.103 38.0112 103.963 54.982C112.276 62.6696 123.243 75.2061 129.144 87.2286Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M153.541 133.686C160.426 128.853 167.311 120.432 171.68 108.716C180.138 86.0347 181.014 60.7712 179.802 42.8928C164.471 53.1085 140.137 74.4432 131.827 97.2532C127.916 107.987 126.093 122.608 129.107 130.764C130.366 134.175 132.508 136.761 135.452 137.991C139.912 139.856 146.764 138.447 153.541 133.686Z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ s("path", {
                    d: "M125.713 95.261C123.686 90.5366 121.452 86.0815 117.985 81.0752C108.176 66.9142 94.9588 54.1416 78.5104 42.8899C78.3402 45.5422 75.94 74.1874 84.3614 102.194C90.7688 123.496 101.715 132.174 107.715 135.527C113.753 138.896 119.276 139.692 125.754 138.084C119.189 129.149 120.007 110.814 125.713 95.261Z",
                    fill: "#D7153A"
                  })]
                }), /* @__PURE__ */ s("span", {
                  className: "sr-only",
                  children: "NSW Government"
                })]
              })
            }), t ? /* @__PURE__ */ b("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ s("img", {
                src: t,
                alt: n + "logo"
              }), /* @__PURE__ */ s("span", {
                className: "sr-only",
                children: n
              }), /* @__PURE__ */ s("span", {
                className: "sr-only",
                children: r
              })]
            }) : /* @__PURE__ */ b("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ s("div", {
                className: "nsw-header__title",
                children: n
              }), /* @__PURE__ */ s("div", {
                className: "nsw-header__description",
                children: r
              })]
            })]
          }), a ? /* @__PURE__ */ s("div", {
            className: "nsw-header__menu",
            children: /* @__PURE__ */ b("button", {
              type: "button",
              className: "js-open-nav",
              "aria-expanded": "false",
              "aria-controls": "main-nav",
              children: [/* @__PURE__ */ s(Q, {
                icon: "ic:baseline-menu"
              }), /* @__PURE__ */ b("span", {
                children: [/* @__PURE__ */ s("span", {
                  className: "sr-only",
                  children: "Open"
                }), " ", "Menu"]
              })]
            })
          }) : "", l ? /* @__PURE__ */ s("div", {
            className: "nsw-header__search",
            children: /* @__PURE__ */ b("button", {
              ref: m,
              type: "button",
              className: "js-open-search",
              "aria-expanded": "false",
              "aria-controls": "header-search",
              children: [/* @__PURE__ */ s(Q, {
                icon: "ic:baseline-search"
              }), /* @__PURE__ */ b("span", {
                className: "nsw-header-btn__sub",
                children: [/* @__PURE__ */ s("span", {
                  className: "sr-only",
                  children: "Show"
                }), " ", "Search"]
              })]
            })
          }) : ""]
        }), l ? /* @__PURE__ */ b("div", {
          id: "header-search",
          className: "nsw-header__search-area js-search-area",
          hidden: !0,
          children: [/* @__PURE__ */ b("form", {
            role: "search",
            onSubmit: f,
            children: [/* @__PURE__ */ s("label", {
              htmlFor: "nsw-header-input",
              className: "sr-only",
              children: "Search site for:"
            }), /* @__PURE__ */ s("input", {
              autoComplete: "off",
              className: "nsw-header__input js-search-input",
              id: "nsw-header-input",
              name: "searchInput",
              type: "text"
            }), /* @__PURE__ */ s("button", {
              className: "nsw-icon-button nsw-icon-button--flex",
              type: "submit",
              "aria-label": "search",
              children: /* @__PURE__ */ s(Q, {
                icon: "ic:baseline-search"
              })
            })]
          }), /* @__PURE__ */ b("button", {
            ref: g,
            className: "nsw-icon-button js-close-search",
            "aria-expanded": "true",
            "aria-controls": "header-search",
            children: [/* @__PURE__ */ s(Q, {
              icon: "ic:baseline-close",
              className: "nsw-search__close-icon"
            }), /* @__PURE__ */ s("span", {
              className: "sr-only",
              children: "Close search"
            })]
          })]
        }) : ""]
      })
    })
  });
}, Go = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white"
}, Qo = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark"
}, Jo = (e) => e ? typeof e != "number" && typeof e != "string" && typeof e != "boolean" && "src" in e ? /* @__PURE__ */ s("img", {
  className: "nsw-hero-banner__image",
  src: e.src,
  alt: e.alt
}) : e : /* @__PURE__ */ s("div", {
  className: "nsw-hero-banner__bg"
}), Di = ({
  title: e = "Hero Banner",
  intro: n,
  cta: r,
  style: t = "white",
  wide: o,
  featured: i,
  image: a,
  children: l,
  className: f = "",
  ...u
}) => /* @__PURE__ */ s("div", {
  className: `nsw-hero-banner ${t ? Go[t] : ""} ${o ? "nsw-hero-banner--wide" : ""} ${i ? " nsw-hero-banner--featured" : ""}  ${f}`,
  ...u,
  children: /* @__PURE__ */ s("div", {
    className: "nsw-hero-banner__container",
    children: /* @__PURE__ */ b("div", {
      className: "nsw-hero-banner__wrapper",
      children: [/* @__PURE__ */ b("div", {
        className: "nsw-hero-banner__content nsw-wysiwyg-content",
        children: [/* @__PURE__ */ s("h1", {
          children: e
        }), /* @__PURE__ */ s("div", {
          className: "nsw-intro",
          children: n
        }), r ? /* @__PURE__ */ s("div", {
          className: "nsw-hero-banner__button",
          children: /* @__PURE__ */ s("a", {
            href: r.url,
            className: `nsw-button ${Qo[t]}`,
            onClick: r.onClick,
            children: r.text
          })
        }) : ""]
      }), l, /* @__PURE__ */ s("div", {
        className: "nsw-hero-banner__box",
        role: "presentation",
        children: Jo(a)
      })]
    })
  })
}), Ko = ({
  subtitle: e,
  children: n
}) => /* @__PURE__ */ s("div", {
  className: "nsw-hero-banner__links",
  children: /* @__PURE__ */ b("div", {
    className: "nsw-hero-banner__list",
    children: [/* @__PURE__ */ s("div", {
      className: "nsw-hero-banner__sub-title",
      children: e
    }), n]
  })
});
Ko.propTypes = {
  subtitle: d.exports.string.isRequired,
  children: d.exports.node.isRequired
};
const Hr = ({
  url: e,
  title: n,
  ...r
}) => /* @__PURE__ */ s("li", {
  children: /* @__PURE__ */ s("a", {
    href: `${e}`,
    ...r,
    children: n
  })
});
Hr.propTypes = {
  url: d.exports.string,
  title: d.exports.string
};
const Hi = ({
  title: e,
  links: n,
  ariaLabel: r = ar(),
  className: t = "",
  ...o
}) => /* @__PURE__ */ b("nav", {
  className: `nsw-in-page-nav ${t}`,
  "aria-labelledby": r,
  ...o,
  children: [/* @__PURE__ */ s("div", {
    id: r,
    className: "nsw-in-page-nav__title",
    children: e
  }), /* @__PURE__ */ s("ul", {
    children: n ? n.map((i) => /* @__PURE__ */ mt(Hr, {
      ...i,
      key: i.title
    })) : ""
  })]
}), Xo = ({
  text: e,
  link: n,
  linkComponent: r = "a",
  children: t,
  onClick: o,
  ...i
}) => {
  const a = r;
  return typeof o == "function" && (i.onClick = o, n || (n = "#")), a === "a" ? (i.href = n, i.rel = (i == null ? void 0 : i.target) === "_blank" ? "nofollow noopener" : void 0) : typeof a == "function" && (i.to = n), n ? /* @__PURE__ */ b("li", {
    className: "nsw-link-list__item",
    children: [/* @__PURE__ */ b(a, {
      ...i,
      children: [/* @__PURE__ */ s("span", {
        children: e
      }), /* @__PURE__ */ s(Q, {
        icon: "ic:baseline-east",
        className: "nsw-link-list__icon"
      })]
    }), t]
  }) : /* @__PURE__ */ b("li", {
    className: "nsw-link-list__item",
    children: [e, t]
  });
}, qi = ({
  items: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: "nsw-link-list",
  children: /* @__PURE__ */ s("ul", {
    className: `nsw-link-list__list ${n}`,
    ...r,
    children: e.map((t, o) => /* @__PURE__ */ s(Xo, {
      ...t
    }, t.href || "" + o))
  })
}), ei = (e) => {
  const n = Object.keys(e).sort((r, t) => e[t] - e[r]);
  return n.map((r, t) => {
    let o = "";
    const i = e[r], a = n[t - 1], l = a ? e[a] : null;
    return i >= 0 && (o = `(min-width: ${i}px)`), l !== null && (o && (o += " and "), o += `(max-width: ${l - 1}px)`), {
      breakpoint: r,
      maxWidth: l ? l - 1 : null,
      minWidth: i,
      query: o
    };
  });
}, ni = ei, ri = typeof window > "u" ? ve : vt, ti = ri, oi = {
  breakpoint: void 0,
  minWidth: void 0,
  maxWidth: void 0
}, ii = (e, n, r = !0) => {
  const t = gt(() => ni(e), [e]), [o, i] = cr(() => {
    for (const { query: l, ...f } of t)
      if (typeof window < "u" && !(n && r)) {
        if (window.matchMedia(l).matches)
          return f;
      } else if (f.breakpoint === n)
        return f;
    return oi;
  }), a = yt(({ matches: l }, f) => {
    l && i(f);
  }, []);
  return ti(() => {
    const l = t.map(({ query: f, ...u }) => {
      const p = window.matchMedia(f);
      a(p, u);
      const m = (g) => {
        a(g, u);
      };
      return p.addListener(m), () => p.removeListener(m);
    });
    return () => l.forEach((f) => f());
  }, [t, a]), bt(o, (l) => typeof l.breakpoint == "string" ? `${l.breakpoint} (${l.minWidth} \u2264 x${l.maxWidth ? ` < ${l.maxWidth + 1}` : ""})` : ""), o;
}, si = ii, ai = {
  mobile: 0,
  tablet: 992
}, Vi = (e) => {
  const {
    navItems: n,
    megaMenu: r,
    className: t = "",
    isCloseWhenOutsideClick: o = !0,
    ...i
  } = e, {
    breakpoint: a
  } = si(ai, "mobile"), l = ke(null), f = () => {
    var p;
    const u = (p = l.current) == null ? void 0 : p.querySelector("ul > li > a.active");
    return u && u.click(), u;
  };
  return ve(() => {
    let u;
    return (async () => {
      const {
        Navigation: p
      } = await import("./main.ca35e5ee.js");
      u = new p(), u.init();
    })(), () => {
      console.log("\u{1F680} ~ file: mainNav.tsx ~ line 73 ~ return ~ nav", u), u && (u.openSubNavElements = [], u = null);
    };
  }, []), ve(() => {
    if (o && a !== "mobile") {
      const u = (p) => {
        p.target.closest(".nsw-main-nav__list") || f();
      };
      return document.addEventListener("click", u), () => {
        document.removeEventListener("click", u);
      };
    }
  }, [o, a]), /* @__PURE__ */ b("nav", {
    id: "main-nav",
    className: `nsw-main-nav ${t} ${r ? "js-mega-menu" : ""}`,
    "aria-label": "Main Navigation",
    ...i,
    children: [/* @__PURE__ */ b("div", {
      className: "nsw-main-nav__header",
      children: [/* @__PURE__ */ s("div", {
        id: "nsw-main-nav__title",
        children: "Menu"
      }), /* @__PURE__ */ b("button", {
        type: "button",
        className: "nsw-icon-button js-close-nav",
        "aria-expanded": "true",
        children: [/* @__PURE__ */ s(Q, {
          icon: "ic:baseline-close"
        }), /* @__PURE__ */ s("span", {
          className: "sr-only",
          children: "Close Menu"
        })]
      })]
    }), /* @__PURE__ */ s("ul", {
      ref: l,
      className: "nsw-main-nav__list",
      children: n.map((u, p) => {
        var g, x;
        const m = u.linkComponent || "a";
        return /* @__PURE__ */ s("li", {
          children: /* @__PURE__ */ b(pn, {
            children: [/* @__PURE__ */ b(m, {
              href: u.url,
              target: u.target,
              children: [/* @__PURE__ */ s("span", {
                children: u.text
              }), (g = u.subNav) != null && g.length ? /* @__PURE__ */ s(Q, {
                icon: "ic:baseline-keyboard-arrow-right",
                className: "nsw-main-nav__link-icon"
              }) : ""]
            }), (x = u.subNav) != null && x.length ? /* @__PURE__ */ s(qr, {
              subNav: u.subNav,
              url: u.url,
              text: u.subNavHeader || u.text,
              target: u.target,
              description: u.description,
              id: u.id,
              linkComponent: m
            }) : ""]
          })
        }, u.id ? `navItem-${u.id}` : u.url + u.text + p);
      })
    })]
  });
}, sr = ({
  url: e,
  text: n,
  description: r,
  id: t,
  target: o,
  linkComponent: i = "a"
}) => /* @__PURE__ */ b(pn, {
  children: [/* @__PURE__ */ b("div", {
    className: "nsw-main-nav__header",
    children: [/* @__PURE__ */ b("button", {
      type: "button",
      className: "nsw-icon-button nsw-icon-button--flex js-close-sub-nav",
      "aria-controls": `sub-nav-${t}`,
      "aria-expanded": "true",
      children: [/* @__PURE__ */ s(Q, {
        icon: "ic:baseline-keyboard-arrow-left"
      }), /* @__PURE__ */ b("span", {
        children: ["Back", /* @__PURE__ */ s("span", {
          className: "sr-only",
          children: " to previous menu"
        })]
      })]
    }), /* @__PURE__ */ b("button", {
      type: "button",
      className: "nsw-icon-button js-close-nav",
      "aria-expanded": "true",
      children: [/* @__PURE__ */ s(Q, {
        icon: "ic:baseline-close"
      }), /* @__PURE__ */ s("span", {
        className: "sr-only",
        children: "Close Menu"
      })]
    })]
  }), /* @__PURE__ */ s("div", {
    className: "nsw-main-nav__title",
    children: /* @__PURE__ */ b(i, {
      href: e,
      target: o,
      children: [/* @__PURE__ */ s("span", {
        children: n
      }), /* @__PURE__ */ s(Q, {
        icon: "ic:baseline-east"
      })]
    })
  }), /* @__PURE__ */ s("div", {
    className: "nsw-main-nav__description",
    children: r
  })]
}), qr = ({
  id: e = "",
  subNav: n,
  url: r,
  text: t,
  description: o,
  target: i,
  linkComponent: a = "a"
}) => {
  const l = e || lr();
  return n ? /* @__PURE__ */ b("div", {
    className: "nsw-main-nav__sub-nav",
    id: `sub-nav-${l}`,
    role: "region",
    "aria-label": t,
    children: [/* @__PURE__ */ s(sr, {
      url: r,
      text: t,
      description: o,
      id: l,
      target: i,
      linkComponent: a
    }), /* @__PURE__ */ s("ul", {
      className: "nsw-main-nav__sub-list",
      children: n.map((f, u) => {
        var g, x;
        const p = l + u, m = f.linkComponent || "a";
        return /* @__PURE__ */ s("li", {
          children: /* @__PURE__ */ b(pn, {
            children: [/* @__PURE__ */ b(m, {
              href: f.url,
              target: f.target,
              children: [/* @__PURE__ */ s("span", {
                children: f.text
              }), (g = f.subNav) != null && g.length ? /* @__PURE__ */ s(Q, {
                icon: "ic:baseline-keyboard-arrow-right",
                className: "nsw-main-nav__link-icon"
              }) : ""]
            }), (x = f.subNav) != null && x.length ? /* @__PURE__ */ b("div", {
              className: "nsw-main-nav__sub-nav",
              id: `sub-nav-${p}`,
              role: "region",
              "aria-label": `${t} Submenu`,
              children: [/* @__PURE__ */ s(sr, {
                url: r,
                text: t,
                description: o,
                id: p,
                linkComponent: m
              }), /* @__PURE__ */ s("ul", {
                className: "nsw-main-nav__sub-list",
                children: f.subNav.map((E, O) => {
                  var R;
                  const M = E.linkComponent || "a";
                  return /* @__PURE__ */ s("li", {
                    children: /* @__PURE__ */ b(M, {
                      href: E.url,
                      target: E.target,
                      className: "nsw-subnavigation__link",
                      children: [/* @__PURE__ */ s("span", {
                        children: E.text
                      }), (R = E.subNav) != null && R.length ? /* @__PURE__ */ s(Q, {
                        icon: "ic:baseline-keyboard-arrow-right",
                        className: "nsw-main-nav__link-icon"
                      }) : ""]
                    })
                  }, E.url + E.text + O);
                })
              })]
            }) : ""]
          })
        }, p);
      })
    })]
  }) : null;
};
qr.propTypes = {
  subNav: d.exports.arrayOf(d.exports.shape({
    url: d.exports.string,
    text: d.exports.string,
    subNav: d.exports.arrayOf
  })).isRequired,
  url: d.exports.string,
  text: d.exports.string,
  description: d.exports.string,
  renderLink: d.exports.func,
  target: d.exports.string
};
const ci = ({
  text: e = "A NSW Government website"
}) => /* @__PURE__ */ s("div", {
  className: "nsw-masthead",
  children: /* @__PURE__ */ s("div", {
    className: "nsw-container",
    children: /* @__PURE__ */ s("p", {
      children: e
    })
  })
});
ci.propTypes = {
  text: d.exports.string
};
const li = ({
  nav: e,
  content: n
}) => /* @__PURE__ */ b("nav", {
  className: "nsw-skip",
  "aria-label": "Skip to links",
  children: [/* @__PURE__ */ s("a", {
    href: e,
    children: /* @__PURE__ */ s("span", {
      children: "Skip to navigation"
    })
  }), /* @__PURE__ */ s("a", {
    href: n,
    children: /* @__PURE__ */ s("span", {
      children: "Skip to content"
    })
  })]
});
li.propTypes = {
  nav: d.exports.string.isRequired,
  content: d.exports.string.isRequired
};
const ui = {
  info: "nsw-in-page-alert--info",
  warning: "nsw-in-page-alert--warning",
  error: "nsw-in-page-alert--error",
  success: "nsw-in-page-alert--success"
}, fi = {
  info: "ic:baseline-info",
  warning: "ic:baseline-error",
  error: "ic:baseline-cancel",
  success: "ic:baseline-check-circle"
}, Wi = ({
  title: e = "",
  as: n,
  children: r,
  className: t = "",
  compact: o = !1,
  ...i
}) => /* @__PURE__ */ b("div", {
  className: `nsw-in-page-alert ${t} ${ui[n]} ${o ? "nsw-in-page-alert--compact" : ""}`.trim(),
  ...i,
  children: [/* @__PURE__ */ s(Q, {
    icon: fi[n],
    className: "nsw-in-page-alert__icon"
  }), /* @__PURE__ */ b("div", {
    className: "nsw-in-page-alert__content",
    children: [!!e && /* @__PURE__ */ s("h5", {
      children: e
    }), r]
  })]
}), di = ({
  backLink: e,
  active: n,
  nextLink: r,
  paginationItems: t,
  className: o,
  children: i,
  ...a
}) => /* @__PURE__ */ s("div", {
  className: `nsw-container ${o}`,
  ...a,
  children: /* @__PURE__ */ s("nav", {
    className: "nsw-pagination",
    "aria-label": "Pagination",
    children: /* @__PURE__ */ b("ul", {
      children: [/* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ b("a", {
          className: "nsw-icon-button",
          href: e,
          children: [/* @__PURE__ */ s(Q, {
            icon: "ic:baseline-keyboard-arrow-left"
          }), /* @__PURE__ */ s("span", {
            className: "sr-only",
            children: "Back"
          })]
        })
      }), t ? t.map((l, f) => /* @__PURE__ */ s(Vr, {
        url: l.url,
        page: f + 1,
        active: n
      }, `pagination-${f}`)) : "", i, /* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ b("a", {
          href: r,
          className: "nsw-icon-button",
          children: [/* @__PURE__ */ s(Q, {
            icon: "ic:baseline-keyboard-arrow-right"
          }), /* @__PURE__ */ s("span", {
            className: "sr-only",
            children: "Next"
          })]
        })
      })]
    })
  })
});
di.propTypes = {
  className: d.exports.string,
  paginationItems: d.exports.arrayOf(d.exports.shape({
    url: d.exports.string
  })),
  children: d.exports.node,
  backLink: d.exports.string,
  nextLink: d.exports.string,
  active: d.exports.number
};
const Vr = ({
  url: e,
  page: n,
  active: r
}) => /* @__PURE__ */ s("li", {
  children: /* @__PURE__ */ s("a", {
    className: r === n ? "active" : "",
    href: e,
    children: /* @__PURE__ */ b("span", {
      children: [/* @__PURE__ */ s("span", {
        className: "sr-only",
        children: "Page "
      }), n]
    })
  })
});
Vr.propTypes = {
  page: d.exports.number,
  active: d.exports.number,
  url: d.exports.string
};
const pi = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding"
}, hi = ({
  children: e,
  style: n = "white",
  container: r = !0,
  padding: t = "full",
  box: o = !1,
  className: i = "",
  ...a
}) => /* @__PURE__ */ s("div", {
  className: `nsw-section ${i} ${pi[t]} nsw-section--${n} ${o ? "nsw-section--box" : ""}`,
  ...a,
  children: /* @__PURE__ */ s("div", {
    className: r ? "nsw-container" : "",
    children: e
  })
});
hi.propTypes = {
  padding: d.exports.oneOf(["full", "half", "none"]),
  style: d.exports.oneOf(["white", "brand-dark", "brand-light", "brand-supplementary", "black", "off-white", "grey-01", "grey-02", "grey-03", "grey-04"]),
  children: d.exports.node.isRequired,
  container: d.exports.bool,
  className: d.exports.string,
  box: d.exports.bool
};
const mi = ({
  caption: e,
  headers: n,
  data: r,
  striped: t = !1,
  bordered: o,
  captionTop: i,
  className: a = "",
  firstCellIsHeader: l,
  ...f
}) => /* @__PURE__ */ b("table", {
  className: `nsw-table ${t ? "nsw-table--striped " : " "} ${o ? "nsw-table--bordered " : " "} ${i ? "nsw-table--caption-top " : " "} ${a}`,
  ...f,
  children: [e && /* @__PURE__ */ s(Ur, {
    tableCaption: e
  }), /* @__PURE__ */ s(Br, {
    children: /* @__PURE__ */ s(fn, {
      children: n.map((u, p) => /* @__PURE__ */ s(un, {
        title: u.title,
        width: u.width
      }, `tableHeader-${ce()}`))
    })
  }), /* @__PURE__ */ s(Wr, {
    children: r.map((u, p) => /* @__PURE__ */ s(fn, {
      children: n.map((m, g) => g === 0 && l === !0 ? /* @__PURE__ */ s(un, {
        scope: "row",
        title: u[m.key] ? u[m.key] : ""
      }, `tableHeader-${ce()}`) : /* @__PURE__ */ s(Yr, {
        data: u[m.key] ? u[m.key] : ""
      }, `tableCell-${ce()}`))
    }, `tableRow-${ce()}`))
  })]
});
mi.propTypes = {
  caption: d.exports.string,
  headers: d.exports.arrayOf(Object).isRequired,
  data: d.exports.arrayOf(Object).isRequired,
  striped: d.exports.bool,
  bordered: d.exports.bool,
  captionTop: d.exports.bool,
  className: d.exports.string,
  firstCellIsHeader: d.exports.bool
};
const Wr = ({
  className: e = "",
  ...n
}) => /* @__PURE__ */ s("tbody", {
  className: e,
  ...n
});
Wr.propTypes = {
  className: d.exports.string
};
const Br = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("thead", {
  className: n,
  ...r,
  children: e
});
Br.propTypes = {
  children: d.exports.node,
  className: d.exports.string
};
const un = ({
  title: e,
  width: n,
  scope: r = "col",
  className: t = "",
  ...o
}) => (o.width = n ? `${n}%` : void 0, /* @__PURE__ */ s("th", {
  ...o,
  className: t,
  scope: r,
  children: e
}));
un.propTypes = {
  title: d.exports.string.isRequired,
  width: d.exports.number,
  className: d.exports.string,
  scope: d.exports.string
};
const Yr = ({
  data: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("td", {
  className: n,
  ...r,
  children: e
});
Yr.propTypes = {
  data: d.exports.string,
  className: d.exports.string
};
const fn = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("tr", {
  className: n,
  ...r,
  children: e
});
fn.propTypes = {
  children: d.exports.node,
  className: d.exports.string
};
const Ur = ({
  captionId: e,
  tableCaption: n,
  className: r = "",
  ...t
}) => n ? /* @__PURE__ */ s("caption", {
  className: r,
  ...t,
  children: n
}) : null;
Ur.propTypes = {
  tableCaption: d.exports.string,
  captionId: d.exports.string,
  className: d.exports.string
};
const vi = ({
  children: e
}) => /* @__PURE__ */ s("div", {
  className: "nsw-table-responsive",
  role: "region",
  children: e
});
vi.propTypes = {
  children: d.exports.node
};
const gi = (e) => {
  const {
    className: n = "",
    children: r,
    ...t
  } = e, o = ke(null);
  return ve(() => {
    (async () => {
      const {
        Tabs: i
      } = await import("./main.ca35e5ee.js");
      new i(o.current).init();
    })();
  }, []), /* @__PURE__ */ s("div", {
    ref: o,
    className: `nsw-tabs js-tabs ${n}`,
    ...t,
    children: r
  });
};
gi.propTypes = {
  className: d.exports.string,
  children: d.exports.node
};
const yi = ({
  children: e
}) => /* @__PURE__ */ s("ul", {
  className: "nsw-tabs__list",
  children: e
});
yi.propTypes = {
  children: d.exports.node.isRequired
};
const bi = ({
  urlHash: e,
  title: n
}) => /* @__PURE__ */ s("li", {
  className: "nsw-tabs__list-item",
  children: /* @__PURE__ */ s("a", {
    href: `#${e}`,
    className: "nsw-tabs__link",
    children: n
  })
});
bi.propTypes = {
  urlHash: d.exports.string.isRequired,
  title: d.exports.string.isRequired
};
const wi = ({
  urlHash: e,
  children: n
}) => /* @__PURE__ */ s("section", {
  id: e,
  className: "nsw-tabs__content",
  children: n
});
wi.propTypes = {
  urlHash: d.exports.string.isRequired,
  children: d.exports.node.isRequired
};
const Zr = ({
  link: e,
  text: n,
  linkComponent: r = "a",
  className: t = "",
  ...o
}) => {
  const i = "span", a = r;
  return a === "a" ? o.href = e : typeof a == "function" && (o.to = e), e ? /* @__PURE__ */ s(a, {
    className: `nsw-tag ${t}`,
    ...o,
    children: n
  }) : /* @__PURE__ */ s(i, {
    ...o,
    className: `nsw-tag ${t}`,
    children: n
  });
};
Zr.propTypes = {
  className: d.exports.string,
  link: d.exports.string,
  text: d.exports.string.isRequired,
  linkComponent: d.exports.oneOfType([d.exports.string, d.exports.func])
};
const Bi = ({
  tags: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-list nsw-list--8 ${n}`,
  ...r,
  children: e.map((t) => /* @__PURE__ */ s(Zr, {
    ...t,
    linkComponent: t.linkComponent,
    link: t.link,
    text: t.text
  }, t.text))
}), _i = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent"
}, Ci = ({
  image: e,
  video: n,
  title: r,
  caption: t,
  left: o,
  right: i,
  center: a,
  children: l,
  style: f = "default"
}) => /* @__PURE__ */ b("figure", {
  className: `nsw-media ${o === void 0 || o === "none" ? "" : ` nsw-media--left-${o}`}
		${_i[f]}
		${i === void 0 || i === "none" ? "" : ` nsw-media--right-${i}`}
		${a === void 0 || a === "none" ? "" : ` nsw-media--${a}`}`,
  children: [n ? /* @__PURE__ */ s("div", {
    className: "nsw-media__video",
    children: /* @__PURE__ */ s("iframe", {
      src: n,
      title: r,
      frameBorder: "0",
      allowFullScreen: !0
    })
  }) : "", e ? /* @__PURE__ */ s("img", {
    src: e,
    alt: r
  }) : "", l, !!t && /* @__PURE__ */ s("figcaption", {
    children: t
  })]
});
Ci.propTypes = {
  style: d.exports.oneOf(["default", "dark", "light", "transparent"]),
  video: d.exports.string,
  image: d.exports.string,
  caption: d.exports.string,
  title: d.exports.string,
  right: d.exports.oneOf(["none", "30", "40", "50"]),
  left: d.exports.oneOf(["none", "30", "40", "50"]),
  center: d.exports.oneOf(["none", "60", "70", "80", "90"])
};
export {
  Ti as Accordion,
  Ei as AccordionGroup,
  Wi as Alert,
  Si as Breadcrumbs,
  Ri as Button,
  Io as Callout,
  Ni as Card,
  ki as CardCopy,
  Fo as ContentBlock,
  ji as Footer,
  Pi as FooterLinks,
  Ii as FooterLower,
  Oi as FooterSectionGroup,
  $i as FooterUpper,
  Lr as FormGroup,
  Yo as FormGroupCheckbox,
  Li as FormGroupRadio,
  Bo as FormGroupSelect,
  Ai as FormGroupText,
  de as FormHelper,
  qo as FormLabel,
  Mi as GlobalAlert,
  Fi as Header,
  Di as HeroBanner,
  Ko as HeroBannerList,
  Hi as InPageNavLinks,
  qi as LinkList,
  Vi as MainNav,
  ci as Masthead,
  Ci as Media,
  di as Pagination,
  Zo as ProgressIndicator,
  hi as Section,
  Fr as Select,
  Mr as SelectItem,
  li as SkipTo,
  bi as TabItem,
  yi as TabItemWrapper,
  wi as TabSection,
  mi as Table,
  vi as TableResponsiveWrapper,
  gi as Tabs,
  Bi as TagList,
  Vo as TextInput
};
