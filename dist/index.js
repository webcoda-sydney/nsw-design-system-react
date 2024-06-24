import pe, { useId as dr, useState as pr, useEffect as ge, Fragment as vn, forwardRef as Ct, useRef as $e, createElement as Tt, useLayoutEffect as Et, useMemo as xt, useCallback as St, useDebugValue as Rt } from "react";
const hr = (e = "", n = "-") => (e + dr()).replace(/\:/g, n);
function mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tn = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Nt() {
  if (Hn) return Re;
  Hn = 1;
  var e = pe, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, f, u) {
    var p, m = {}, g = null, C = null;
    u !== void 0 && (g = "" + u), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (p in f) t.call(f, p) && !o.hasOwnProperty(p) && (m[p] = f[p]);
    if (l && l.defaultProps) for (p in f = l.defaultProps, f) m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: n, type: l, key: g, ref: C, props: m, _owner: i.current };
  }
  return Re.Fragment = r, Re.jsx = a, Re.jsxs = a, Re;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function kt() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pe, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), R = Symbol.iterator, x = "@@iterator";
    function F(c) {
      if (c === null || typeof c != "object")
        return null;
      var h = R && c[R] || c[x];
      return typeof h == "function" ? h : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(c) {
      {
        for (var h = arguments.length, _ = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          _[S - 1] = arguments[S];
        q("error", c, _);
      }
    }
    function q(c, h, _) {
      {
        var S = O.ReactDebugCurrentFrame, W = S.getStackAddendum();
        W !== "" && (h += "%s", _ = _.concat([W]));
        var U = _.map(function(H) {
          return String(H);
        });
        U.unshift("Warning: " + h), Function.prototype.apply.call(console[c], console, U);
      }
    }
    var Z = !1, b = !1, M = !1, Q = !1, ae = !1, ce;
    ce = Symbol.for("react.module.reference");
    function te(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === t || c === o || ae || c === i || c === u || c === p || Q || c === C || Z || b || M || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === m || c.$$typeof === a || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === ce || c.getModuleId !== void 0));
    }
    function be(c, h, _) {
      var S = c.displayName;
      if (S)
        return S;
      var W = h.displayName || h.name || "";
      return W !== "" ? _ + "(" + W + ")" : _;
    }
    function we(c) {
      return c.displayName || "Context";
    }
    function ee(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
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
            return we(h) + ".Consumer";
          case a:
            var _ = c;
            return we(_._context) + ".Provider";
          case f:
            return be(c, c.render, "ForwardRef");
          case m:
            var S = c.displayName || null;
            return S !== null ? S : ee(c.type) || "Memo";
          case g: {
            var W = c, U = W._payload, H = W._init;
            try {
              return ee(H(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, fe = 0, ie, ue, he, _e, v, T, j;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function N() {
      {
        if (fe === 0) {
          ie = console.log, ue = console.info, he = console.warn, _e = console.error, v = console.group, T = console.groupCollapsed, j = console.groupEnd;
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
        fe++;
      }
    }
    function D() {
      {
        if (fe--, fe === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, c, {
              value: ie
            }),
            info: ne({}, c, {
              value: ue
            }),
            warn: ne({}, c, {
              value: he
            }),
            error: ne({}, c, {
              value: _e
            }),
            group: ne({}, c, {
              value: v
            }),
            groupCollapsed: ne({}, c, {
              value: T
            }),
            groupEnd: ne({}, c, {
              value: j
            })
          });
        }
        fe < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = O.ReactCurrentDispatcher, P;
    function I(c, h, _) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (W) {
            var S = W.stack.trim().match(/\n( *(at )?)/);
            P = S && S[1] || "";
          }
        return `
` + P + c;
      }
    }
    var V = !1, L;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      L = new J();
    }
    function w(c, h) {
      if (!c || V)
        return "";
      {
        var _ = L.get(c);
        if (_ !== void 0)
          return _;
      }
      var S;
      V = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = k.current, k.current = null, N();
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
            } catch (re) {
              S = re;
            }
            Reflect.construct(c, [], H);
          } else {
            try {
              H.call();
            } catch (re) {
              S = re;
            }
            c.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            S = re;
          }
          c();
        }
      } catch (re) {
        if (re && S && typeof re.stack == "string") {
          for (var A = re.stack.split(`
`), X = S.stack.split(`
`), z = A.length - 1, G = X.length - 1; z >= 1 && G >= 0 && A[z] !== X[G]; )
            G--;
          for (; z >= 1 && G >= 0; z--, G--)
            if (A[z] !== X[G]) {
              if (z !== 1 || G !== 1)
                do
                  if (z--, G--, G < 0 || A[z] !== X[G]) {
                    var se = `
` + A[z].replace(" at new ", " at ");
                    return c.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", c.displayName)), typeof c == "function" && L.set(c, se), se;
                  }
                while (z >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        V = !1, k.current = U, D(), Error.prepareStackTrace = W;
      }
      var Ee = c ? c.displayName || c.name : "", ve = Ee ? I(Ee) : "";
      return typeof c == "function" && L.set(c, ve), ve;
    }
    function oe(c, h, _) {
      return w(c, !1);
    }
    function Ce(c) {
      var h = c.prototype;
      return !!(h && h.isReactComponent);
    }
    function me(c, h, _) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return w(c, Ce(c));
      if (typeof c == "string")
        return I(c);
      switch (c) {
        case u:
          return I("Suspense");
        case p:
          return I("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return oe(c.render);
          case m:
            return me(c.type, h, _);
          case g: {
            var S = c, W = S._payload, U = S._init;
            try {
              return me(U(W), h, _);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, Rn = {}, Nn = O.ReactDebugCurrentFrame;
    function Le(c) {
      if (c) {
        var h = c._owner, _ = me(c.type, c._source, h ? h.type : null);
        Nn.setExtraStackFrame(_);
      } else
        Nn.setExtraStackFrame(null);
    }
    function et(c, h, _, S, W) {
      {
        var U = Function.call.bind(xe);
        for (var H in c)
          if (U(c, H)) {
            var A = void 0;
            try {
              if (typeof c[H] != "function") {
                var X = Error((S || "React class") + ": " + _ + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              A = c[H](h, H, S, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              A = z;
            }
            A && !(A instanceof Error) && (Le(W), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", _, H, typeof A), Le(null)), A instanceof Error && !(A.message in Rn) && (Rn[A.message] = !0, Le(W), E("Failed %s type: %s", _, A.message), Le(null));
          }
      }
    }
    var nt = Array.isArray;
    function We(c) {
      return nt(c);
    }
    function rt(c) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, _ = h && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return _;
      }
    }
    function tt(c) {
      try {
        return kn(c), !1;
      } catch {
        return !0;
      }
    }
    function kn(c) {
      return "" + c;
    }
    function Pn(c) {
      if (tt(c))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(c)), kn(c);
    }
    var Se = O.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, On, $n, Be;
    Be = {};
    function ot(c) {
      if (xe.call(c, "ref")) {
        var h = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function st(c) {
      if (xe.call(c, "key")) {
        var h = Object.getOwnPropertyDescriptor(c, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function at(c, h) {
      if (typeof c.ref == "string" && Se.current && h && Se.current.stateNode !== h) {
        var _ = ee(Se.current.type);
        Be[_] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(Se.current.type), c.ref), Be[_] = !0);
      }
    }
    function ct(c, h) {
      {
        var _ = function() {
          On || (On = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function lt(c, h) {
      {
        var _ = function() {
          $n || ($n = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        _.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var ut = function(c, h, _, S, W, U, H) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: c,
        key: h,
        ref: _,
        props: H,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function ft(c, h, _, S, W) {
      {
        var U, H = {}, A = null, X = null;
        _ !== void 0 && (Pn(_), A = "" + _), st(h) && (Pn(h.key), A = "" + h.key), ot(h) && (X = h.ref, at(h, W));
        for (U in h)
          xe.call(h, U) && !it.hasOwnProperty(U) && (H[U] = h[U]);
        if (c && c.defaultProps) {
          var z = c.defaultProps;
          for (U in z)
            H[U] === void 0 && (H[U] = z[U]);
        }
        if (A || X) {
          var G = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          A && ct(H, G), X && lt(H, G);
        }
        return ut(c, A, X, W, S, Se.current, H);
      }
    }
    var Ye = O.ReactCurrentOwner, jn = O.ReactDebugCurrentFrame;
    function Te(c) {
      if (c) {
        var h = c._owner, _ = me(c.type, c._source, h ? h.type : null);
        jn.setExtraStackFrame(_);
      } else
        jn.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Ze(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }
    function In() {
      {
        if (Ye.current) {
          var c = ee(Ye.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function dt(c) {
      return "";
    }
    var Ln = {};
    function pt(c) {
      {
        var h = In();
        if (!h) {
          var _ = typeof c == "string" ? c : c.displayName || c.name;
          _ && (h = `

Check the top-level render call using <` + _ + ">.");
        }
        return h;
      }
    }
    function An(c, h) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var _ = pt(h);
        if (Ln[_])
          return;
        Ln[_] = !0;
        var S = "";
        c && c._owner && c._owner !== Ye.current && (S = " It was passed a child from " + ee(c._owner.type) + "."), Te(c), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, S), Te(null);
      }
    }
    function Mn(c, h) {
      {
        if (typeof c != "object")
          return;
        if (We(c))
          for (var _ = 0; _ < c.length; _++) {
            var S = c[_];
            Ze(S) && An(S, h);
          }
        else if (Ze(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var W = F(c);
          if (typeof W == "function" && W !== c.entries)
            for (var U = W.call(c), H; !(H = U.next()).done; )
              Ze(H.value) && An(H.value, h);
        }
      }
    }
    function ht(c) {
      {
        var h = c.type;
        if (h == null || typeof h == "string")
          return;
        var _;
        if (typeof h == "function")
          _ = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === m))
          _ = h.propTypes;
        else
          return;
        if (_) {
          var S = ee(h);
          et(_, c.props, "prop", S, c);
        } else if (h.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var W = ee(h);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(c) {
      {
        for (var h = Object.keys(c.props), _ = 0; _ < h.length; _++) {
          var S = h[_];
          if (S !== "children" && S !== "key") {
            Te(c), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Te(null);
            break;
          }
        }
        c.ref !== null && (Te(c), E("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var Fn = {};
    function Dn(c, h, _, S, W, U) {
      {
        var H = te(c);
        if (!H) {
          var A = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = dt();
          X ? A += X : A += In();
          var z;
          c === null ? z = "null" : We(c) ? z = "array" : c !== void 0 && c.$$typeof === n ? (z = "<" + (ee(c.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : z = typeof c, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, A);
        }
        var G = ft(c, h, _, W, U);
        if (G == null)
          return G;
        if (H) {
          var se = h.children;
          if (se !== void 0)
            if (S)
              if (We(se)) {
                for (var Ee = 0; Ee < se.length; Ee++)
                  Mn(se[Ee], c);
                Object.freeze && Object.freeze(se);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mn(se, c);
        }
        if (xe.call(h, "key")) {
          var ve = ee(c), re = Object.keys(h).filter(function(_t) {
            return _t !== "key";
          }), ze = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fn[ve + ze]) {
            var wt = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, ve, wt, ve), Fn[ve + ze] = !0;
          }
        }
        return c === t ? mt(G) : ht(G), G;
      }
    }
    function vt(c, h, _) {
      return Dn(c, h, _, !0);
    }
    function gt(c, h, _) {
      return Dn(c, h, _, !1);
    }
    var yt = gt, bt = vt;
    Ne.Fragment = t, Ne.jsx = yt, Ne.jsxs = bt;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? tn.exports = Nt() : tn.exports = kt();
var gn = tn.exports;
const yn = gn.Fragment, s = gn.jsx, y = gn.jsxs, Pe = /^[a-z0-9]+(-[a-z0-9]+)*$/, qe = (e, n, r, t = "") => {
  const i = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    t = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const l = i.pop(), f = i.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : t,
      prefix: f,
      name: l
    };
    return n && !Fe(u) ? null : u;
  }
  const o = i[0], a = o.split("-");
  if (a.length > 1) {
    const l = {
      provider: t,
      prefix: a.shift(),
      name: a.join("-")
    };
    return n && !Fe(l) ? null : l;
  }
  if (r && t === "") {
    const l = {
      provider: t,
      prefix: "",
      name: o
    };
    return n && !Fe(l, r) ? null : l;
  }
  return null;
}, Fe = (e, n) => e ? !!((e.provider === "" || e.provider.match(Pe)) && (n && e.prefix === "" || e.prefix.match(Pe)) && e.name.match(Pe)) : !1, vr = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), He = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), bn = Object.freeze({
  ...vr,
  ...He
}), on = Object.freeze({
  ...bn,
  body: "",
  hidden: !1
});
function Pt(e, n) {
  const r = {};
  !e.hFlip != !n.hFlip && (r.hFlip = !0), !e.vFlip != !n.vFlip && (r.vFlip = !0);
  const t = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return t && (r.rotate = t), r;
}
function Vn(e, n) {
  const r = Pt(e, n);
  for (const t in on)
    t in He ? t in e && !(t in r) && (r[t] = He[t]) : t in n ? r[t] = n[t] : t in e && (r[t] = e[t]);
  return r;
}
function Ot(e, n) {
  const r = e.icons, t = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a])
      return i[a] = [];
    if (!(a in i)) {
      i[a] = null;
      const l = t[a] && t[a].parent, f = l && o(l);
      f && (i[a] = [l].concat(f));
    }
    return i[a];
  }
  return Object.keys(r).concat(Object.keys(t)).forEach(o), i;
}
function $t(e, n, r) {
  const t = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(l) {
    o = Vn(t[l] || i[l], o);
  }
  return a(n), r.forEach(a), Vn(e, o);
}
function gr(e, n) {
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return r;
  e.not_found instanceof Array && e.not_found.forEach((i) => {
    n(i, null), r.push(i);
  });
  const t = Ot(e);
  for (const i in t) {
    const o = t[i];
    o && (n(i, $t(e, i, o)), r.push(i));
  }
  return r;
}
const jt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...vr
};
function Ge(e, n) {
  for (const r in n)
    if (r in e && typeof e[r] != typeof n[r])
      return !1;
  return !0;
}
function yr(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ge(e, jt))
    return null;
  const r = n.icons;
  for (const i in r) {
    const o = r[i];
    if (!i.match(Pe) || typeof o.body != "string" || !Ge(o, on))
      return null;
  }
  const t = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in t) {
    const o = t[i], a = o.parent;
    if (!i.match(Pe) || typeof a != "string" || !r[a] && !t[a] || !Ge(o, on))
      return null;
  }
  return n;
}
const Wn = /* @__PURE__ */ Object.create(null);
function It(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ye(e, n) {
  const r = Wn[e] || (Wn[e] = /* @__PURE__ */ Object.create(null));
  return r[n] || (r[n] = It(e, n));
}
function wn(e, n) {
  return yr(n) ? gr(n, (r, t) => {
    t ? e.icons[r] = t : e.missing.add(r);
  }) : [];
}
function Lt(e, n, r) {
  try {
    if (typeof r.body == "string")
      return e.icons[n] = {
        ...r
      }, !0;
  } catch {
  }
  return !1;
}
let je = !1;
function br(e) {
  return typeof e == "boolean" && (je = e), je;
}
function At(e) {
  const n = typeof e == "string" ? qe(e, !0, je) : e;
  if (n) {
    const r = ye(n.provider, n.prefix), t = n.name;
    return r.icons[t] || (r.missing.has(t) ? null : void 0);
  }
}
function Mt(e, n) {
  const r = qe(e, !0, je);
  if (!r)
    return !1;
  const t = ye(r.provider, r.prefix);
  return Lt(t, r.name, n);
}
function Ft(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), je && !n && !e.prefix) {
    let i = !1;
    return yr(e) && (e.prefix = "", gr(e, (o, a) => {
      a && Mt(o, a) && (i = !0);
    })), i;
  }
  const r = e.prefix;
  if (!Fe({
    provider: n,
    prefix: r,
    name: "a"
  }))
    return !1;
  const t = ye(n, r);
  return !!wn(t, e);
}
const wr = Object.freeze({
  width: null,
  height: null
}), _r = Object.freeze({
  // Dimensions
  ...wr,
  // Transformations
  ...He
}), Dt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ht = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Bn(e, n, r) {
  if (n === 1)
    return e;
  if (r = r || 100, typeof e == "number")
    return Math.ceil(e * n * r) / r;
  if (typeof e != "string")
    return e;
  const t = e.split(Dt);
  if (t === null || !t.length)
    return e;
  const i = [];
  let o = t.shift(), a = Ht.test(o);
  for (; ; ) {
    if (a) {
      const l = parseFloat(o);
      isNaN(l) ? i.push(o) : i.push(Math.ceil(l * n * r) / r);
    } else
      i.push(o);
    if (o = t.shift(), o === void 0)
      return i.join("");
    a = !a;
  }
}
const qt = (e) => e === "unset" || e === "undefined" || e === "none";
function Vt(e, n) {
  const r = {
    ...bn,
    ...e
  }, t = {
    ..._r,
    ...n
  }, i = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, t].forEach((R) => {
    const x = [], F = R.hFlip, O = R.vFlip;
    let E = R.rotate;
    F ? O ? E += 2 : (x.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), x.push("scale(-1 1)"), i.top = i.left = 0) : O && (x.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), x.push("scale(1 -1)"), i.top = i.left = 0);
    let q;
    switch (E < 0 && (E -= Math.floor(E / 4) * 4), E = E % 4, E) {
      case 1:
        q = i.height / 2 + i.top, x.unshift("rotate(90 " + q.toString() + " " + q.toString() + ")");
        break;
      case 2:
        x.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
        break;
      case 3:
        q = i.width / 2 + i.left, x.unshift("rotate(-90 " + q.toString() + " " + q.toString() + ")");
        break;
    }
    E % 2 === 1 && (i.left !== i.top && (q = i.left, i.left = i.top, i.top = q), i.width !== i.height && (q = i.width, i.width = i.height, i.height = q)), x.length && (o = '<g transform="' + x.join(" ") + '">' + o + "</g>");
  });
  const a = t.width, l = t.height, f = i.width, u = i.height;
  let p, m;
  a === null ? (m = l === null ? "1em" : l === "auto" ? u : l, p = Bn(m, f / u)) : (p = a === "auto" ? f : a, m = l === null ? Bn(p, u / f) : l === "auto" ? u : l);
  const g = {}, C = (R, x) => {
    qt(x) || (g[R] = x.toString());
  };
  return C("width", p), C("height", m), g.viewBox = i.left.toString() + " " + i.top.toString() + " " + f.toString() + " " + u.toString(), {
    attributes: g,
    body: o
  };
}
const Wt = /\sid="(\S+)"/g, Bt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Yt = 0;
function Ut(e, n = Bt) {
  const r = [];
  let t;
  for (; t = Wt.exec(e); )
    r.push(t[1]);
  if (!r.length)
    return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((o) => {
    const a = typeof n == "function" ? n(o) : n + (Yt++).toString(), l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + a + i + "$3"
    );
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
const sn = /* @__PURE__ */ Object.create(null);
function Zt(e, n) {
  sn[e] = n;
}
function an(e) {
  return sn[e] || sn[""];
}
function _n(e) {
  let n;
  if (typeof e.resources == "string")
    n = [e.resources];
  else if (n = e.resources, !(n instanceof Array) || !n.length)
    return null;
  return {
    // API hosts
    resources: n,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const Cn = /* @__PURE__ */ Object.create(null), ke = ["https://api.simplesvg.com", "https://api.unisvg.com"], De = [];
for (; ke.length > 0; )
  ke.length === 1 || Math.random() > 0.5 ? De.push(ke.shift()) : De.push(ke.pop());
Cn[""] = _n({
  resources: ["https://api.iconify.design"].concat(De)
});
function zt(e, n) {
  const r = _n(n);
  return r === null ? !1 : (Cn[e] = r, !0);
}
function Tn(e) {
  return Cn[e];
}
const Gt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Yn = Gt();
function Kt(e, n) {
  const r = Tn(e);
  if (!r)
    return 0;
  let t;
  if (!r.maxURL)
    t = 0;
  else {
    let i = 0;
    r.resources.forEach((a) => {
      i = Math.max(i, a.length);
    });
    const o = n + ".json?icons=";
    t = r.maxURL - i - r.path.length - o.length;
  }
  return t;
}
function Qt(e) {
  return e === 404;
}
const Jt = (e, n, r) => {
  const t = [], i = Kt(e, n), o = "icons";
  let a = {
    type: o,
    provider: e,
    prefix: n,
    icons: []
  }, l = 0;
  return r.forEach((f, u) => {
    l += f.length + 1, l >= i && u > 0 && (t.push(a), a = {
      type: o,
      provider: e,
      prefix: n,
      icons: []
    }, l = f.length), a.icons.push(f);
  }), t.push(a), t;
};
function Xt(e) {
  if (typeof e == "string") {
    const n = Tn(e);
    if (n)
      return n.path;
  }
  return "/";
}
const ei = (e, n, r) => {
  if (!Yn) {
    r("abort", 424);
    return;
  }
  let t = Xt(n.provider);
  switch (n.type) {
    case "icons": {
      const o = n.prefix, l = n.icons.join(","), f = new URLSearchParams({
        icons: l
      });
      t += o + ".json?" + f.toString();
      break;
    }
    case "custom": {
      const o = n.uri;
      t += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      r("abort", 400);
      return;
  }
  let i = 503;
  Yn(e + t).then((o) => {
    const a = o.status;
    if (a !== 200) {
      setTimeout(() => {
        r(Qt(a) ? "abort" : "next", a);
      });
      return;
    }
    return i = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? r("abort", o) : r("next", i);
      });
      return;
    }
    setTimeout(() => {
      r("success", o);
    });
  }).catch(() => {
    r("next", i);
  });
}, ni = {
  prepare: Jt,
  send: ei
};
function ri(e) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, r = /* @__PURE__ */ Object.create(null);
  e.sort((i, o) => i.provider !== o.provider ? i.provider.localeCompare(o.provider) : i.prefix !== o.prefix ? i.prefix.localeCompare(o.prefix) : i.name.localeCompare(o.name));
  let t = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((i) => {
    if (t.name === i.name && t.prefix === i.prefix && t.provider === i.provider)
      return;
    t = i;
    const o = i.provider, a = i.prefix, l = i.name, f = r[o] || (r[o] = /* @__PURE__ */ Object.create(null)), u = f[a] || (f[a] = ye(o, a));
    let p;
    l in u.icons ? p = n.loaded : a === "" || u.missing.has(l) ? p = n.missing : p = n.pending;
    const m = {
      provider: o,
      prefix: a,
      name: l
    };
    p.push(m);
  }), n;
}
function Cr(e, n) {
  e.forEach((r) => {
    const t = r.loaderCallbacks;
    t && (r.loaderCallbacks = t.filter((i) => i.id !== n));
  });
}
function ti(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let r = !1;
    const t = e.provider, i = e.prefix;
    n.forEach((o) => {
      const a = o.icons, l = a.pending.length;
      a.pending = a.pending.filter((f) => {
        if (f.prefix !== i)
          return !0;
        const u = f.name;
        if (e.icons[u])
          a.loaded.push({
            provider: t,
            prefix: i,
            name: u
          });
        else if (e.missing.has(u))
          a.missing.push({
            provider: t,
            prefix: i,
            name: u
          });
        else
          return r = !0, !0;
        return !1;
      }), a.pending.length !== l && (r || Cr([e], o.id), o.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), o.abort));
    });
  }));
}
let ii = 0;
function oi(e, n, r) {
  const t = ii++, i = Cr.bind(null, r, t);
  if (!n.pending.length)
    return i;
  const o = {
    id: t,
    icons: n,
    callback: e,
    abort: i
  };
  return r.forEach((a) => {
    (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o);
  }), i;
}
function si(e, n = !0, r = !1) {
  const t = [];
  return e.forEach((i) => {
    const o = typeof i == "string" ? qe(i, n, r) : i;
    o && t.push(o);
  }), t;
}
var ai = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ci(e, n, r, t) {
  const i = e.resources.length, o = e.random ? Math.floor(Math.random() * i) : e.index;
  let a;
  if (e.random) {
    let M = e.resources.slice(0);
    for (a = []; M.length > 1; ) {
      const Q = Math.floor(Math.random() * M.length);
      a.push(M[Q]), M = M.slice(0, Q).concat(M.slice(Q + 1));
    }
    a = a.concat(M);
  } else
    a = e.resources.slice(o).concat(e.resources.slice(0, o));
  const l = Date.now();
  let f = "pending", u = 0, p, m = null, g = [], C = [];
  typeof t == "function" && C.push(t);
  function R() {
    m && (clearTimeout(m), m = null);
  }
  function x() {
    f === "pending" && (f = "aborted"), R(), g.forEach((M) => {
      M.status === "pending" && (M.status = "aborted");
    }), g = [];
  }
  function F(M, Q) {
    Q && (C = []), typeof M == "function" && C.push(M);
  }
  function O() {
    return {
      startTime: l,
      payload: n,
      status: f,
      queriesSent: u,
      queriesPending: g.length,
      subscribe: F,
      abort: x
    };
  }
  function E() {
    f = "failed", C.forEach((M) => {
      M(void 0, p);
    });
  }
  function q() {
    g.forEach((M) => {
      M.status === "pending" && (M.status = "aborted");
    }), g = [];
  }
  function Z(M, Q, ae) {
    const ce = Q !== "success";
    switch (g = g.filter((te) => te !== M), f) {
      case "pending":
        break;
      case "failed":
        if (ce || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (Q === "abort") {
      p = ae, E();
      return;
    }
    if (ce) {
      p = ae, g.length || (a.length ? b() : E());
      return;
    }
    if (R(), q(), !e.random) {
      const te = e.resources.indexOf(M.resource);
      te !== -1 && te !== e.index && (e.index = te);
    }
    f = "completed", C.forEach((te) => {
      te(ae);
    });
  }
  function b() {
    if (f !== "pending")
      return;
    R();
    const M = a.shift();
    if (M === void 0) {
      if (g.length) {
        m = setTimeout(() => {
          R(), f === "pending" && (q(), E());
        }, e.timeout);
        return;
      }
      E();
      return;
    }
    const Q = {
      status: "pending",
      resource: M,
      callback: (ae, ce) => {
        Z(Q, ae, ce);
      }
    };
    g.push(Q), u++, m = setTimeout(b, e.rotate), r(M, n, Q.callback);
  }
  return setTimeout(b), O;
}
function Tr(e) {
  const n = {
    ...ai,
    ...e
  };
  let r = [];
  function t() {
    r = r.filter((l) => l().status === "pending");
  }
  function i(l, f, u) {
    const p = ci(n, l, f, (m, g) => {
      t(), u && u(m, g);
    });
    return r.push(p), p;
  }
  function o(l) {
    return r.find((f) => l(f)) || null;
  }
  return {
    query: i,
    find: o,
    setIndex: (l) => {
      n.index = l;
    },
    getIndex: () => n.index,
    cleanup: t
  };
}
function Un() {
}
const Ke = /* @__PURE__ */ Object.create(null);
function li(e) {
  if (!Ke[e]) {
    const n = Tn(e);
    if (!n)
      return;
    const r = Tr(n), t = {
      config: n,
      redundancy: r
    };
    Ke[e] = t;
  }
  return Ke[e];
}
function ui(e, n, r) {
  let t, i;
  if (typeof e == "string") {
    const o = an(e);
    if (!o)
      return r(void 0, 424), Un;
    i = o.send;
    const a = li(e);
    a && (t = a.redundancy);
  } else {
    const o = _n(e);
    if (o) {
      t = Tr(o);
      const a = e.resources ? e.resources[0] : "", l = an(a);
      l && (i = l.send);
    }
  }
  return !t || !i ? (r(void 0, 424), Un) : t.query(n, i, r)().abort;
}
const Zn = "iconify2", Ie = "iconify", Er = Ie + "-count", zn = Ie + "-version", xr = 36e5, fi = 168;
function cn(e, n) {
  try {
    return e.getItem(n);
  } catch {
  }
}
function En(e, n, r) {
  try {
    return e.setItem(n, r), !0;
  } catch {
  }
}
function Gn(e, n) {
  try {
    e.removeItem(n);
  } catch {
  }
}
function ln(e, n) {
  return En(e, Er, n.toString());
}
function un(e) {
  return parseInt(cn(e, Er)) || 0;
}
const Ve = {
  local: !0,
  session: !0
}, Sr = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let xn = !1;
function di(e) {
  xn = e;
}
let Ae = typeof window > "u" ? {} : window;
function Rr(e) {
  const n = e + "Storage";
  try {
    if (Ae && Ae[n] && typeof Ae[n].length == "number")
      return Ae[n];
  } catch {
  }
  Ve[e] = !1;
}
function Nr(e, n) {
  const r = Rr(e);
  if (!r)
    return;
  const t = cn(r, zn);
  if (t !== Zn) {
    if (t) {
      const l = un(r);
      for (let f = 0; f < l; f++)
        Gn(r, Ie + f.toString());
    }
    En(r, zn, Zn), ln(r, 0);
    return;
  }
  const i = Math.floor(Date.now() / xr) - fi, o = (l) => {
    const f = Ie + l.toString(), u = cn(r, f);
    if (typeof u == "string") {
      try {
        const p = JSON.parse(u);
        if (typeof p == "object" && typeof p.cached == "number" && p.cached > i && typeof p.provider == "string" && typeof p.data == "object" && typeof p.data.prefix == "string" && // Valid item: run callback
        n(p, l))
          return !0;
      } catch {
      }
      Gn(r, f);
    }
  };
  let a = un(r);
  for (let l = a - 1; l >= 0; l--)
    o(l) || (l === a - 1 ? (a--, ln(r, a)) : Sr[e].add(l));
}
function kr() {
  if (!xn) {
    di(!0);
    for (const e in Ve)
      Nr(e, (n) => {
        const r = n.data, t = n.provider, i = r.prefix, o = ye(t, i);
        if (!wn(o, r).length)
          return !1;
        const a = r.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, a) : a, !0;
      });
  }
}
function pi(e, n) {
  const r = e.lastModifiedCached;
  if (
    // Matches or newer
    r && r >= n
  )
    return r === n;
  if (e.lastModifiedCached = n, r)
    for (const t in Ve)
      Nr(t, (i) => {
        const o = i.data;
        return i.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === n;
      });
  return !0;
}
function hi(e, n) {
  xn || kr();
  function r(t) {
    let i;
    if (!Ve[t] || !(i = Rr(t)))
      return;
    const o = Sr[t];
    let a;
    if (o.size)
      o.delete(a = Array.from(o).shift());
    else if (a = un(i), !ln(i, a + 1))
      return;
    const l = {
      cached: Math.floor(Date.now() / xr),
      provider: e.provider,
      data: n
    };
    return En(i, Ie + a.toString(), JSON.stringify(l));
  }
  n.lastModified && !pi(e, n.lastModified) || Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), r("local") || r("session"));
}
function Kn() {
}
function mi(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, ti(e);
  }));
}
function vi(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const {
      provider: r,
      prefix: t
    } = e, i = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!i || !(o = an(r)))
      return;
    o.prepare(r, t, i).forEach((l) => {
      ui(r, l, (f) => {
        if (typeof f != "object")
          l.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = wn(e, f);
            if (!u.length)
              return;
            const p = e.pendingIcons;
            p && u.forEach((m) => {
              p.delete(m);
            }), hi(e, f);
          } catch (u) {
            console.error(u);
          }
        mi(e);
      });
    });
  }));
}
const gi = (e, n) => {
  const r = si(e, !0, br()), t = ri(r);
  if (!t.pending.length) {
    let f = !0;
    return n && setTimeout(() => {
      f && n(t.loaded, t.missing, t.pending, Kn);
    }), () => {
      f = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), o = [];
  let a, l;
  return t.pending.forEach((f) => {
    const {
      provider: u,
      prefix: p
    } = f;
    if (p === l && u === a)
      return;
    a = u, l = p, o.push(ye(u, p));
    const m = i[u] || (i[u] = /* @__PURE__ */ Object.create(null));
    m[p] || (m[p] = []);
  }), t.pending.forEach((f) => {
    const {
      provider: u,
      prefix: p,
      name: m
    } = f, g = ye(u, p), C = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    C.has(m) || (C.add(m), i[u][p].push(m));
  }), o.forEach((f) => {
    const {
      provider: u,
      prefix: p
    } = f;
    i[u][p].length && vi(f, i[u][p]);
  }), n ? oi(n, t, o) : Kn;
};
function yi(e, n) {
  const r = {
    ...e
  };
  for (const t in n) {
    const i = n[t], o = typeof i;
    t in wr ? (i === null || i && (o === "string" || o === "number")) && (r[t] = i) : o === typeof r[t] && (r[t] = t === "rotate" ? i % 4 : i);
  }
  return r;
}
const bi = /[\s,]+/;
function wi(e, n) {
  n.split(bi).forEach((r) => {
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
function _i(e, n = 0) {
  const r = e.replace(/^-?[0-9.]*/, "");
  function t(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (r === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : t(i);
  } else if (r !== e) {
    let i = 0;
    switch (r) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - r.length));
      return isNaN(o) ? 0 : (o = o / i, o % 1 === 0 ? t(o) : 0);
    }
  }
  return n;
}
function Ci(e, n) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const t in n)
    r += " " + t + '="' + n[t] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Ti(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ei(e) {
  return "data:image/svg+xml," + Ti(e);
}
function xi(e) {
  return 'url("' + Ei(e) + '")';
}
let Oe;
function Si() {
  try {
    Oe = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (e) => e
    });
  } catch {
    Oe = null;
  }
}
function Ri(e) {
  return Oe === void 0 && Si(), Oe ? Oe.createHTML(e) : e;
}
const Pr = {
  ..._r,
  inline: !1
}, Ni = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, ki = {
  display: "inline-block"
}, fn = {
  backgroundColor: "currentColor"
}, Or = {
  backgroundColor: "transparent"
}, Qn = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Jn = {
  WebkitMask: fn,
  mask: fn,
  background: Or
};
for (const e in Jn) {
  const n = Jn[e];
  for (const r in Qn)
    n[e + r] = Qn[r];
}
const Pi = {
  ...Pr,
  inline: !0
};
function Xn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Oi = (e, n, r, t) => {
  const i = r ? Pi : Pr, o = yi(i, n), a = n.mode || "svg", l = {}, f = n.style || {}, u = {
    ...a === "svg" ? Ni : {},
    ref: t
  };
  for (let O in n) {
    const E = n[O];
    if (E !== void 0)
      switch (O) {
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
          o[O] = E === !0 || E === "true" || E === 1;
          break;
        case "flip":
          typeof E == "string" && wi(o, E);
          break;
        case "color":
          l.color = E;
          break;
        case "rotate":
          typeof E == "string" ? o[O] = _i(E) : typeof E == "number" && (o[O] = E);
          break;
        case "ariaHidden":
        case "aria-hidden":
          E !== !0 && E !== "true" && delete u["aria-hidden"];
          break;
        default:
          i[O] === void 0 && (u[O] = E);
      }
  }
  const p = Vt(e, o), m = p.attributes;
  if (o.inline && (l.verticalAlign = "-0.125em"), a === "svg") {
    u.style = {
      ...l,
      ...f
    }, Object.assign(u, m);
    let O = 0, E = n.id;
    return typeof E == "string" && (E = E.replace(/-/g, "_")), u.dangerouslySetInnerHTML = {
      __html: Ri(Ut(p.body, E ? () => E + "ID" + O++ : "iconifyReact"))
    }, /* @__PURE__ */ s("svg", {
      ...u
    });
  }
  const {
    body: g,
    width: C,
    height: R
  } = e, x = a === "mask" || (a === "bg" ? !1 : g.indexOf("currentColor") !== -1), F = Ci(g, {
    ...m,
    width: C + "",
    height: R + ""
  });
  return u.style = {
    ...l,
    "--svg": xi(F),
    width: Xn(m.width),
    height: Xn(m.height),
    ...ki,
    ...x ? fn : Or,
    ...f
  }, /* @__PURE__ */ s("span", {
    ...u
  });
};
br(!0);
Zt("", ni);
if (typeof document < "u" && typeof window < "u") {
  kr();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, r = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((t) => {
      try {
        // Check if item is an object and not null/array
        (typeof t != "object" || t === null || t instanceof Array || // Check for 'icons' and 'prefix'
        typeof t.icons != "object" || typeof t.prefix != "string" || // Add icon set
        !Ft(t)) && console.error(r);
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
          const i = n[r];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          zt(r, i) || console.error(t);
        } catch {
          console.error(t);
        }
      }
  }
}
class $r extends pe.Component {
  constructor(n) {
    super(n), this.state = {
      // Render placeholder before component is mounted
      icon: null
    };
  }
  /**
   * Abort loading icon
   */
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  /**
   * Update state
   */
  _setData(n) {
    this.state.icon !== n && this.setState({
      icon: n
    });
  }
  /**
   * Check if icon should be loaded
   */
  _checkIcon(n) {
    const r = this.state, t = this.props.icon;
    if (typeof t == "object" && t !== null && typeof t.body == "string") {
      this._icon = "", this._abortLoading(), (n || r.icon === null) && this._setData({
        data: t
      });
      return;
    }
    let i;
    if (typeof t != "string" || (i = qe(t, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const o = At(i);
    if (!o) {
      (!this._loading || this._loading.name !== t) && (this._abortLoading(), this._icon = "", this._setData(null), o !== null && (this._loading = {
        name: t,
        abort: gi([i], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== t || r.icon === null) {
      this._abortLoading(), this._icon = t;
      const a = ["iconify"];
      i.prefix !== "" && a.push("iconify--" + i.prefix), i.provider !== "" && a.push("iconify--" + i.provider), this._setData({
        data: o,
        classes: a
      }), this.props.onLoad && this.props.onLoad(t);
    }
  }
  /**
   * Component mounted
   */
  componentDidMount() {
    this._checkIcon(!1);
  }
  /**
   * Component updated
   */
  componentDidUpdate(n) {
    n.icon !== this.props.icon && this._checkIcon(!0);
  }
  /**
   * Abort loading
   */
  componentWillUnmount() {
    this._abortLoading();
  }
  /**
   * Render
   */
  render() {
    const n = this.props, r = this.state.icon;
    if (r === null)
      return n.children ? n.children : /* @__PURE__ */ s("span", {});
    let t = n;
    return r.classes && (t = {
      ...n,
      className: (typeof n.className == "string" ? n.className + " " : "") + r.classes.join(" ")
    }), Oi({
      ...bn,
      ...r.data
    }, t, n._inline, n._ref);
  }
}
const $i = pe.forwardRef(function(n, r) {
  const t = {
    ...n,
    _ref: r,
    _inline: !1
  };
  return /* @__PURE__ */ s($r, {
    ...t
  });
});
pe.forwardRef(function(n, r) {
  const t = {
    ...n,
    _ref: r,
    _inline: !0
  };
  return /* @__PURE__ */ s($r, {
    ...t
  });
});
function jr(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (n = 0; n < e.length; n++) e[n] && (r = jr(e[n])) && (t && (t += " "), t += r);
  else for (n in e) e[n] && (t && (t += " "), t += n);
  return t;
}
function Ir() {
  for (var e, n, r = 0, t = ""; r < arguments.length; ) (e = arguments[r++]) && (n = jr(e)) && (t && (t += " "), t += n);
  return t;
}
function K(e) {
  const {
    icon: n,
    className: r,
    width: t = 24,
    height: i = 24,
    ...o
  } = e;
  return /* @__PURE__ */ s($i, {
    ...o,
    className: Ir("nsw-material-icons", r),
    icon: n,
    width: t,
    height: i
  });
}
const jo = (e) => {
  const {
    header: n,
    body: r,
    closed: t = !0,
    className: i = "",
    ...o
  } = e, [a, l] = pr(!t), f = hr("accordion");
  return ge(() => {
    l(!t);
  }, [t]), /* @__PURE__ */ y(vn, {
    children: [/* @__PURE__ */ s("div", {
      className: "nsw-accordion__title",
      children: /* @__PURE__ */ y("button", {
        type: "button",
        "aria-expanded": a,
        "aria-controls": f,
        className: `nsw-accordion__button ${a ? "is-open" : ""}`,
        onClick: () => l((u) => !u),
        children: [n, /* @__PURE__ */ s(K, {
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
}, Io = ({
  className: e,
  children: n,
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-accordion ready ${e || ""}`,
  ...r,
  children: n
}), Lo = ({
  label: e,
  items: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("nav", {
  className: `nsw-breadcrumbs ${r}`,
  "aria-label": e,
  ...t,
  children: /* @__PURE__ */ s(Ii, {
    inline: !0,
    items: n
  })
}), ji = ({
  text: e,
  link: n,
  linkComponent: r = "a",
  children: t,
  onClick: i,
  ...o
}) => {
  const a = r;
  return typeof i == "function" && (o.onClick = i, n || (n = "#")), a === "a" ? o.href = n : typeof a == "function" && (o.to = n), n ? /* @__PURE__ */ y("li", {
    children: [/* @__PURE__ */ s(a, {
      ...o,
      children: e
    }), t]
  }) : /* @__PURE__ */ y("li", {
    children: [e, t]
  });
}, Ii = ({
  inline: e,
  items: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("ol", {
  className: `nsw-breadcrumb__list ${r}${e ? " nsw-breadcrumb__list--inline" : ""}`,
  ...t,
  children: n.map((i) => /* @__PURE__ */ s(ji, {
    ...i
  }, i.text))
}), Ao = Ct(({
  linkComponent: e = "button",
  link: n,
  children: r,
  style: t = "dark",
  type: i = "button",
  block: o,
  className: a = "",
  ...l
}, f) => {
  if (n) {
    const u = e;
    return u === "a" ? l.href = n || l.href : typeof u == "function" && (l.to = n), /* @__PURE__ */ s(u, {
      ref: f,
      className: `nsw-button ${a} nsw-button--${t}${o ? " nsw-button--block" : ""}`,
      ...l,
      children: r
    });
  }
  return /* @__PURE__ */ s("button", {
    ref: f,
    type: i,
    className: `nsw-button ${a} nsw-button--${t}${o ? " nsw-button--block" : ""}`,
    ...l,
    children: r
  });
});
var dn = { exports: {} }, Me = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Li() {
  if (er) return B;
  er = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function q(b) {
    if (typeof b == "object" && b !== null) {
      var M = b.$$typeof;
      switch (M) {
        case n:
          switch (b = b.type, b) {
            case f:
            case u:
            case t:
            case o:
            case i:
            case m:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case p:
                case R:
                case C:
                case a:
                  return b;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function Z(b) {
    return q(b) === u;
  }
  return B.AsyncMode = f, B.ConcurrentMode = u, B.ContextConsumer = l, B.ContextProvider = a, B.Element = n, B.ForwardRef = p, B.Fragment = t, B.Lazy = R, B.Memo = C, B.Portal = r, B.Profiler = o, B.StrictMode = i, B.Suspense = m, B.isAsyncMode = function(b) {
    return Z(b) || q(b) === f;
  }, B.isConcurrentMode = Z, B.isContextConsumer = function(b) {
    return q(b) === l;
  }, B.isContextProvider = function(b) {
    return q(b) === a;
  }, B.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }, B.isForwardRef = function(b) {
    return q(b) === p;
  }, B.isFragment = function(b) {
    return q(b) === t;
  }, B.isLazy = function(b) {
    return q(b) === R;
  }, B.isMemo = function(b) {
    return q(b) === C;
  }, B.isPortal = function(b) {
    return q(b) === r;
  }, B.isProfiler = function(b) {
    return q(b) === o;
  }, B.isStrictMode = function(b) {
    return q(b) === i;
  }, B.isSuspense = function(b) {
    return q(b) === m;
  }, B.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === t || b === u || b === o || b === i || b === m || b === g || typeof b == "object" && b !== null && (b.$$typeof === R || b.$$typeof === C || b.$$typeof === a || b.$$typeof === l || b.$$typeof === p || b.$$typeof === F || b.$$typeof === O || b.$$typeof === E || b.$$typeof === x);
  }, B.typeOf = q, B;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Ai() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function q(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === t || w === u || w === o || w === i || w === m || w === g || typeof w == "object" && w !== null && (w.$$typeof === R || w.$$typeof === C || w.$$typeof === a || w.$$typeof === l || w.$$typeof === p || w.$$typeof === F || w.$$typeof === O || w.$$typeof === E || w.$$typeof === x);
    }
    function Z(w) {
      if (typeof w == "object" && w !== null) {
        var oe = w.$$typeof;
        switch (oe) {
          case n:
            var Ce = w.type;
            switch (Ce) {
              case f:
              case u:
              case t:
              case o:
              case i:
              case m:
                return Ce;
              default:
                var me = Ce && Ce.$$typeof;
                switch (me) {
                  case l:
                  case p:
                  case R:
                  case C:
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
    var b = f, M = u, Q = l, ae = a, ce = n, te = p, be = t, we = R, ee = C, ne = r, fe = o, ie = i, ue = m, he = !1;
    function _e(w) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(w) || Z(w) === f;
    }
    function v(w) {
      return Z(w) === u;
    }
    function T(w) {
      return Z(w) === l;
    }
    function j(w) {
      return Z(w) === a;
    }
    function $(w) {
      return typeof w == "object" && w !== null && w.$$typeof === n;
    }
    function N(w) {
      return Z(w) === p;
    }
    function D(w) {
      return Z(w) === t;
    }
    function k(w) {
      return Z(w) === R;
    }
    function P(w) {
      return Z(w) === C;
    }
    function I(w) {
      return Z(w) === r;
    }
    function V(w) {
      return Z(w) === o;
    }
    function L(w) {
      return Z(w) === i;
    }
    function J(w) {
      return Z(w) === m;
    }
    Y.AsyncMode = b, Y.ConcurrentMode = M, Y.ContextConsumer = Q, Y.ContextProvider = ae, Y.Element = ce, Y.ForwardRef = te, Y.Fragment = be, Y.Lazy = we, Y.Memo = ee, Y.Portal = ne, Y.Profiler = fe, Y.StrictMode = ie, Y.Suspense = ue, Y.isAsyncMode = _e, Y.isConcurrentMode = v, Y.isContextConsumer = T, Y.isContextProvider = j, Y.isElement = $, Y.isForwardRef = N, Y.isFragment = D, Y.isLazy = k, Y.isMemo = P, Y.isPortal = I, Y.isProfiler = V, Y.isStrictMode = L, Y.isSuspense = J, Y.isValidElementType = q, Y.typeOf = Z;
  }()), Y;
}
var rr;
function Lr() {
  return rr || (rr = 1, process.env.NODE_ENV === "production" ? Me.exports = Li() : Me.exports = Ai()), Me.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Qe, tr;
function Mi() {
  if (tr) return Qe;
  tr = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
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
  return Qe = i() ? Object.assign : function(o, a) {
    for (var l, f = t(o), u, p = 1; p < arguments.length; p++) {
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
  }, Qe;
}
var Je, ir;
function Sn() {
  if (ir) return Je;
  ir = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Je = e, Je;
}
var Xe, or;
function Ar() {
  return or || (or = 1, Xe = Function.call.bind(Object.prototype.hasOwnProperty)), Xe;
}
var en, sr;
function Fi() {
  if (sr) return en;
  sr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Sn(), r = {}, t = Ar();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, l, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in o)
        if (t(o, p)) {
          var m;
          try {
            if (typeof o[p] != "function") {
              var g = Error(
                (f || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = o[p](a, p, f, l, null, n);
          } catch (R) {
            m = R;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var C = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (C ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, en = i, en;
}
var nn, ar;
function Di() {
  if (ar) return nn;
  ar = 1;
  var e = Lr(), n = Mi(), r = Sn(), t = Ar(), i = Fi(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
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
  return nn = function(l, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(v) {
      var T = v && (u && v[u] || v[p]);
      if (typeof T == "function")
        return T;
    }
    var g = "<<anonymous>>", C = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: E(),
      arrayOf: q,
      element: Z(),
      elementType: b(),
      instanceOf: M,
      node: te(),
      objectOf: ae,
      oneOf: Q,
      oneOfType: ce,
      shape: we,
      exact: ee
    };
    function R(v, T) {
      return v === T ? v !== 0 || 1 / v === 1 / T : v !== v && T !== T;
    }
    function x(v, T) {
      this.message = v, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function F(v) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, j = 0;
      function $(D, k, P, I, V, L, J) {
        if (I = I || g, L = L || P, J !== r) {
          if (f) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = I + ":" + P;
            !T[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[oe] = !0, j++);
          }
        }
        return k[P] == null ? D ? k[P] === null ? new x("The " + V + " `" + L + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new x("The " + V + " `" + L + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : v(k, P, I, V, L);
      }
      var N = $.bind(null, !1);
      return N.isRequired = $.bind(null, !0), N;
    }
    function O(v) {
      function T(j, $, N, D, k, P) {
        var I = j[$], V = ie(I);
        if (V !== v) {
          var L = ue(I);
          return new x(
            "Invalid " + D + " `" + k + "` of type " + ("`" + L + "` supplied to `" + N + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return F(T);
    }
    function E() {
      return F(a);
    }
    function q(v) {
      function T(j, $, N, D, k) {
        if (typeof v != "function")
          return new x("Property `" + k + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var P = j[$];
        if (!Array.isArray(P)) {
          var I = ie(P);
          return new x("Invalid " + D + " `" + k + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected an array."));
        }
        for (var V = 0; V < P.length; V++) {
          var L = v(P, V, N, D, k + "[" + V + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return F(T);
    }
    function Z() {
      function v(T, j, $, N, D) {
        var k = T[j];
        if (!l(k)) {
          var P = ie(k);
          return new x("Invalid " + N + " `" + D + "` of type " + ("`" + P + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return F(v);
    }
    function b() {
      function v(T, j, $, N, D) {
        var k = T[j];
        if (!e.isValidElementType(k)) {
          var P = ie(k);
          return new x("Invalid " + N + " `" + D + "` of type " + ("`" + P + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return F(v);
    }
    function M(v) {
      function T(j, $, N, D, k) {
        if (!(j[$] instanceof v)) {
          var P = v.name || g, I = _e(j[$]);
          return new x("Invalid " + D + " `" + k + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return F(T);
    }
    function Q(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function T(j, $, N, D, k) {
        for (var P = j[$], I = 0; I < v.length; I++)
          if (R(P, v[I]))
            return null;
        var V = JSON.stringify(v, function(J, w) {
          var oe = ue(w);
          return oe === "symbol" ? String(w) : w;
        });
        return new x("Invalid " + D + " `" + k + "` of value `" + String(P) + "` " + ("supplied to `" + N + "`, expected one of " + V + "."));
      }
      return F(T);
    }
    function ae(v) {
      function T(j, $, N, D, k) {
        if (typeof v != "function")
          return new x("Property `" + k + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var P = j[$], I = ie(P);
        if (I !== "object")
          return new x("Invalid " + D + " `" + k + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected an object."));
        for (var V in P)
          if (t(P, V)) {
            var L = v(P, V, N, D, k + "." + V, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return F(T);
    }
    function ce(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var T = 0; T < v.length; T++) {
        var j = v[T];
        if (typeof j != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(j) + " at index " + T + "."
          ), a;
      }
      function $(N, D, k, P, I) {
        for (var V = [], L = 0; L < v.length; L++) {
          var J = v[L], w = J(N, D, k, P, I, r);
          if (w == null)
            return null;
          w.data && t(w.data, "expectedType") && V.push(w.data.expectedType);
        }
        var oe = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new x("Invalid " + P + " `" + I + "` supplied to " + ("`" + k + "`" + oe + "."));
      }
      return F($);
    }
    function te() {
      function v(T, j, $, N, D) {
        return ne(T[j]) ? null : new x("Invalid " + N + " `" + D + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return F(v);
    }
    function be(v, T, j, $, N) {
      return new x(
        (v || "React class") + ": " + T + " type `" + j + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function we(v) {
      function T(j, $, N, D, k) {
        var P = j[$], I = ie(P);
        if (I !== "object")
          return new x("Invalid " + D + " `" + k + "` of type `" + I + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var V in v) {
          var L = v[V];
          if (typeof L != "function")
            return be(N, D, k, V, ue(L));
          var J = L(P, V, N, D, k + "." + V, r);
          if (J)
            return J;
        }
        return null;
      }
      return F(T);
    }
    function ee(v) {
      function T(j, $, N, D, k) {
        var P = j[$], I = ie(P);
        if (I !== "object")
          return new x("Invalid " + D + " `" + k + "` of type `" + I + "` " + ("supplied to `" + N + "`, expected `object`."));
        var V = n({}, j[$], v);
        for (var L in V) {
          var J = v[L];
          if (t(v, L) && typeof J != "function")
            return be(N, D, k, L, ue(J));
          if (!J)
            return new x(
              "Invalid " + D + " `" + k + "` key `" + L + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(j[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var w = J(P, L, N, D, k + "." + L, r);
          if (w)
            return w;
        }
        return null;
      }
      return F(T);
    }
    function ne(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(ne);
          if (v === null || l(v))
            return !0;
          var T = m(v);
          if (T) {
            var j = T.call(v), $;
            if (T !== v.entries) {
              for (; !($ = j.next()).done; )
                if (!ne($.value))
                  return !1;
            } else
              for (; !($ = j.next()).done; ) {
                var N = $.value;
                if (N && !ne(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(v, T) {
      return v === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ie(v) {
      var T = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : fe(T, v) ? "symbol" : T;
    }
    function ue(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var T = ie(v);
      if (T === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function he(v) {
      var T = ue(v);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function _e(v) {
      return !v.constructor || !v.constructor.name ? g : v.constructor.name;
    }
    return C.checkPropTypes = i, C.resetWarningCache = i.resetWarningCache, C.PropTypes = C, C;
  }, nn;
}
var rn, cr;
function Hi() {
  if (cr) return rn;
  cr = 1;
  var e = Sn();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, rn = function() {
    function t(a, l, f, u, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var o = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: i,
      element: t,
      elementType: t,
      instanceOf: i,
      node: t,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, rn;
}
if (process.env.NODE_ENV !== "production") {
  var qi = Lr(), Vi = !0;
  dn.exports = Di()(qi.isElement, Vi);
} else
  dn.exports = Hi()();
var Wi = dn.exports;
const d = /* @__PURE__ */ mr(Wi), Bi = ({
  title: e,
  level: n = 4,
  children: r,
  className: t = "",
  ...i
}) => {
  const o = `h${n}`;
  return /* @__PURE__ */ s("div", {
    className: `nsw-callout ${t}`,
    ...i,
    children: /* @__PURE__ */ y("div", {
      className: "nsw-callout__content",
      children: [/* @__PURE__ */ s(o, {
        className: "nsw-callout__title",
        children: e
      }), r]
    })
  });
};
Bi.propTypes = {
  title: d.string.isRequired,
  level: d.number,
  children: d.node.isRequired,
  className: d.string
};
const Mo = ({
  link: e,
  linkTarget: n,
  style: r = "white",
  headline: t,
  highlight: i,
  tag: o,
  date: a,
  image: l,
  imageAlt: f,
  className: u = "",
  children: p,
  linkComponent: m = "a",
  ...g
}) => {
  const {
    href: C,
    target: R,
    ...x
  } = g;
  let F = "div";
  e !== void 0 && (F = "div");
  const O = () => {
    if (!l)
      return "";
    if (typeof l == "string")
      return /* @__PURE__ */ s(lr, {
        src: l,
        alt: f || ""
      });
    if (typeof l == "function")
      return /* @__PURE__ */ s(lr, {
        alt: f || "",
        children: l
      });
  };
  return /* @__PURE__ */ y(F, {
    className: Ir(u, `nsw-card nsw-card--${r}`, {
      "nsw-card--highlight": i,
      "nsw-card--headline": t && !p
    }),
    ...x,
    children: [O(), /* @__PURE__ */ y(Yi, {
      children: [o ? /* @__PURE__ */ s(Zi, {
        children: o
      }) : "", a ? /* @__PURE__ */ s(zi, {
        date: a
      }) : "", t ? /* @__PURE__ */ s(Ui, {
        link: e,
        linkTarget: n,
        linkComponent: m,
        children: t
      }) : "", p]
    })]
  });
}, Yi = ({
  className: e,
  children: n,
  ...r
}) => /* @__PURE__ */ y("div", {
  className: `nsw-card__content ${e}`,
  ...r,
  children: [n, /* @__PURE__ */ s(K, {
    icon: "ic:baseline-east",
    className: "nsw-card__icon"
  })]
}), Ui = ({
  className: e = "",
  link: n,
  linkComponent: r = "a",
  linkTarget: t,
  children: i
}) => {
  const o = "div";
  return n !== void 0 ? /* @__PURE__ */ s(o, {
    className: `nsw-card__title ${e}`,
    children: /* @__PURE__ */ s(r, {
      href: n,
      target: t,
      className: "nsw-card__link",
      children: i
    })
  }) : /* @__PURE__ */ s(o, {
    className: "nsw-card__title",
    children: i
  });
}, lr = ({
  src: e,
  className: n = "",
  alt: r = "",
  children: t,
  ...i
}) => /* @__PURE__ */ s("div", {
  className: "nsw-card__image",
  children: t || /* @__PURE__ */ s("img", {
    className: n,
    src: e,
    alt: r,
    ...i
  })
}), Fo = ({
  src: e,
  children: n,
  className: r = "",
  ...t
}) => /* @__PURE__ */ s("div", {
  className: `nsw-card__copy ${r}`,
  ...t,
  children: n
}), Zi = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("p", {
  className: `nsw-card__tag ${n}`,
  ...r,
  children: e
}), zi = ({
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
}), Gi = ({
  links: e,
  mainLink: n,
  headline: r,
  copy: t,
  image: i,
  imageAlt: o,
  icon: a,
  className: l = ""
}) => /* @__PURE__ */ y("div", {
  className: `nsw-content-block ${l}`,
  children: [i ? /* @__PURE__ */ s(Mr, {
    src: i,
    imageAlt: o || ""
  }) : "", a ? /* @__PURE__ */ s(Fr, {
    children: a
  }) : "", /* @__PURE__ */ y("div", {
    className: "nsw-content-block__content",
    children: [r ? /* @__PURE__ */ s(Hr, {
      children: r
    }) : "", t ? /* @__PURE__ */ s(Dr, {
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
Gi.propTypes = {
  image: d.string,
  imageAlt: d.string,
  headline: d.string.isRequired,
  icon: d.node,
  copy: d.string,
  links: d.arrayOf(d.shape({
    url: d.string,
    text: d.string
  })),
  mainLink: d.shape({
    url: d.string.isRequired,
    text: d.string.isRequired
  }),
  className: d.string
};
const Mr = ({
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
Mr.propTypes = {
  src: d.string.isRequired,
  imageAlt: d.string,
  className: d.string
};
const Fr = ({
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
Fr.propTypes = {
  className: d.string,
  children: d.node
};
const Dr = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("p", {
  className: `nsw-content-block__copy ${n}`,
  ...r,
  children: e
});
Dr.propTypes = {
  className: d.string,
  children: d.node
};
const Hr = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("h2", {
  className: "nsw-content-block__title",
  ...r,
  children: e
});
Hr.propTypes = {
  className: d.string,
  children: d.node
};
const Do = ({
  footerLinks: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("ul", {
  className: n,
  ...r,
  children: e.map(({
    url: t,
    text: i,
    target: o,
    linkComponent: a = "a",
    ...l
  }, f) => /* @__PURE__ */ s("li", {
    children: /* @__PURE__ */ s(a, {
      ...l,
      href: t,
      target: o,
      children: i
    })
  }, t + i + f))
}), Ho = ({
  heading: e,
  sectionLinks: n,
  className: r = "",
  ...t
}) => {
  const i = e.linkComponent ? e.linkComponent : "a";
  return /* @__PURE__ */ y("div", {
    className: `nsw-footer__group ${r}`,
    ...t,
    children: [/* @__PURE__ */ s("h3", {
      className: "nsw-footer__heading",
      children: /* @__PURE__ */ s(i, {
        href: e.url,
        target: e.target,
        children: e.text
      })
    }), /* @__PURE__ */ s("ul", {
      className: "nsw-footer__list",
      children: n.map(({
        url: o,
        text: a,
        target: l,
        linkComponent: f = "a",
        ...u
      }, p) => /* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ s(f, {
          ...u,
          href: o,
          target: l,
          children: a
        })
      }, o + a + p))
    })]
  });
}, qo = ({
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
}), Vo = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-footer__lower ${n}`,
  ...r,
  children: e
}), Wo = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("footer", {
  className: `nsw-footer ${n}`,
  ...r,
  role: "contentinfo",
  children: e
});
var qr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = pe;
  function r(g) {
    return g && typeof g == "object" && "default" in g ? g : { default: g };
  }
  var t = /* @__PURE__ */ r(n), i = "id", o = 0;
  function a(g) {
    return o++, "".concat(g || i).concat(o);
  }
  var l = function() {
    o = 0;
  }, f = function(C) {
    i = C;
  }, u = function(C, R) {
    for (var x = [], F = 0; F < C; F++)
      x.push(a(R));
    return x;
  };
  function p(g) {
    var C = t.default.useRef();
    return t.default.useEffect(function() {
      C.current = g;
    }), C.current;
  }
  function m() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, C = arguments.length > 1 ? arguments[1] : void 0, R = t.default.useRef([]), x = p(g), F = p(C);
    return (g !== x || F !== C) && (R.current = u(g, C)), R.current;
  }
  e.default = a, e.resetId = l, e.setPrefix = f, e.useId = m;
})(qr);
const le = /* @__PURE__ */ mr(qr), Ki = le(), Qi = {
  invalid: "ic:baseline-cancel",
  valid: "ic:baseline-check-circle"
}, de = ({
  htmlId: e = Ki,
  children: n,
  className: r,
  status: t,
  ...i
}) => /* @__PURE__ */ y("span", {
  id: `${t === "invalid" ? "error" : "helper"}${e}`,
  className: `nsw-form__helper ${t === "invalid" ? " nsw-form__helper--error" : ""} ${t === "valid" ? " nsw-form__helper--valid" : ""} ${r}`,
  ...i,
  children: [(t === "invalid" || t === "valid") && /* @__PURE__ */ s(K, {
    icon: Qi[t]
  }), n]
});
de.propTypes = {
  htmlId: d.string,
  children: d.node,
  className: d.string,
  error: d.bool
};
const Ji = ({
  htmlFor: e,
  text: n,
  dark: r,
  inline: t,
  className: i = "",
  isSrOnly: o = !1,
  ...a
}) => /* @__PURE__ */ s("label", {
  htmlFor: e,
  className: o ? "sr-only" : `nsw-form__label ${i}`,
  ...a,
  children: n
}), Vr = ({
  htmlId: e = le(),
  status: n = "default",
  children: r,
  label: t,
  helper: i,
  statusText: o,
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
    children: /* @__PURE__ */ y("div", {
      className: `${u ? "nsw-form__input-group" : ""} ${p ? "nsw-form__input-group nsw-form__input-group--icon" : ""}`,
      children: [/* @__PURE__ */ s(Ji, {
        htmlFor: e,
        text: t,
        isSrOnly: f
      }), i ? /* @__PURE__ */ s(de, {
        htmlId: e,
        children: i
      }) : "", (g = pe.Children.map(r, (C) => C ? pe.cloneElement(C, {
        error: a
      }) : null)) == null ? void 0 : g.filter((C) => !!C), n ? /* @__PURE__ */ s(de, {
        htmlId: e,
        status: n,
        children: o
      }) : ""]
    })
  });
}, Xi = ({
  as: e = "input",
  status: n,
  block: r,
  number: t,
  htmlId: i = "0",
  type: o = "text",
  className: a = "",
  ...l
}) => e === "textarea" ? /* @__PURE__ */ s("textarea", {
  className: `nsw-form__input ${a}${r ? " nsw-form__input--block" : ""}${t ? " nsw-form__input--number" : ""}`,
  "aria-invalid": n === "invalid" ? "true" : "false",
  "aria-describedby": n === "invalid" ? `helper${i} error${i}` : `helper${i}`,
  id: i,
  ...l
}) : /* @__PURE__ */ s("input", {
  className: `nsw-form__input ${a}${r ? " nsw-form__input--block" : ""}${t ? " nsw-form__input--number" : ""}`,
  "aria-invalid": n === "invalid" ? "true" : "false",
  "aria-describedby": n === "invalid" ? `helper${i} error${i}` : `helper${i}`,
  type: o,
  ...l,
  id: i
}), Bo = ({
  status: e = "default",
  className: n = "",
  inputType: r,
  statusText: t,
  label: i,
  helper: o,
  htmlId: a = le(),
  as: l,
  children: f,
  isInputGroup: u = !1,
  isInputGroupIcon: p = !1,
  hideLabel: m,
  ...g
}) => /* @__PURE__ */ y(Vr, {
  className: n,
  status: e,
  statusText: t,
  label: i,
  helper: o,
  htmlId: a,
  isInputGroup: u,
  isInputGroupIcon: p,
  hideLabel: m,
  children: [/* @__PURE__ */ s(Xi, {
    ...g,
    as: l,
    status: e,
    htmlId: a,
    type: r
  }), f]
}), eo = le(), Wr = ({
  text: e,
  value: n
}) => /* @__PURE__ */ s("option", {
  value: n,
  children: e
});
Wr.propTypes = {
  text: d.string.isRequired,
  value: d.string.isRequired
};
const Br = ({
  htmlId: e,
  selected: n,
  options: r,
  block: t,
  status: i = "default",
  className: o = "",
  placeholder: a,
  ...l
}) => /* @__PURE__ */ y("select", {
  className: `nsw-form__select ${o}`,
  "aria-invalid": i === "invalid" ? "true" : void 0,
  "aria-describedby": i === "invalid" ? `helper${e} error${e}` : `helper${e}`,
  id: e,
  defaultValue: n,
  ...l,
  children: [!!a && /* @__PURE__ */ s("option", {
    value: "",
    children: a
  }), r.map((f) => /* @__PURE__ */ s(Wr, {
    ...f
  }, f.value))]
});
Br.propTypes = {
  options: d.arrayOf(d.shape({
    value: d.string.isRequired,
    text: d.string.isRequired
  })).isRequired,
  block: d.bool,
  htmlId: d.string,
  status: d.oneOf(["valid", "invalid", "default"]),
  selected: d.string,
  className: d.string
};
const no = ({
  status: e = "default",
  selected: n,
  statusText: r,
  label: t,
  helper: i,
  options: o,
  htmlId: a = eo,
  placeholder: l = "Please select",
  hideLabel: f,
  ...u
}) => /* @__PURE__ */ s(Vr, {
  status: e,
  statusText: r,
  label: t,
  helper: i,
  htmlId: a,
  hideLabel: f,
  children: /* @__PURE__ */ s(Br, {
    ...u,
    htmlId: a,
    options: o,
    selected: n,
    placeholder: l,
    status: e
  })
});
no.propTypes = {
  status: d.oneOf(["valid", "invalid", "default"]),
  statusText: d.string,
  label: d.string,
  helper: d.string,
  selected: d.string,
  options: d.arrayOf(d.shape({
    value: d.string.isRequired,
    text: d.string.isRequired
  })).isRequired,
  htmlId: d.string
};
const Yr = ({
  text: e,
  htmlId: n,
  value: r,
  status: t,
  as: i,
  uniqueID: o = le(),
  onChange: a,
  checked: l = !1,
  ...f
}) => /* @__PURE__ */ y(vn, {
  children: [/* @__PURE__ */ s("input", {
    className: "nsw-form__checkbox-input",
    type: "checkbox",
    name: n,
    "aria-invalid": t === "invalid" && i !== "group" ? "true" : void 0,
    "aria-describedby": t === "invalid" ? `helper${n} error${n}` : `helper${n}`,
    id: o,
    value: r,
    checked: l,
    onChange: a,
    ...f
  }), /* @__PURE__ */ s("label", {
    className: "nsw-form__checkbox-label",
    htmlFor: o,
    children: e
  })]
});
Yr.propTypes = {
  text: d.string.isRequired,
  value: d.string.isRequired,
  className: d.string,
  htmlId: d.string,
  uniqueID: d.func,
  status: d.oneOf(["valid", "invalid", "default"]),
  as: d.string
};
const ro = ({
  className: e = "",
  as: n,
  status: r = "default",
  label: t,
  options: i,
  htmlId: o = le(),
  statusText: a,
  helper: l,
  onChange: f
}) => /* @__PURE__ */ s("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ y("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": r === "invalid" ? "true" : void 0,
    children: [n === "group" ? /* @__PURE__ */ y("legend", {
      children: [/* @__PURE__ */ s("span", {
        className: "nsw-form__legend",
        children: t
      }), l ? /* @__PURE__ */ s(de, {
        htmlId: o,
        children: l
      }) : "", r ? /* @__PURE__ */ s(de, {
        htmlId: o,
        status: r,
        children: a
      }) : ""]
    }) : "", /* @__PURE__ */ s("div", {
      children: i.map((u) => /* @__PURE__ */ s(Yr, {
        ...u,
        as: n,
        htmlId: o,
        status: r,
        checked: u.selected,
        onChange: f
      }, u.value))
    }), r && n !== "group" ? /* @__PURE__ */ s(de, {
      htmlId: o,
      status: r,
      children: a
    }) : ""]
  })
});
ro.propTypes = {
  status: d.oneOf(["valid", "invalid", "default"]),
  statusText: d.string,
  htmlId: d.string,
  label: d.string,
  as: d.oneOf(["group", !1]),
  helper: d.string,
  options: d.arrayOf(d.shape({
    value: d.string,
    text: d.string
  })).isRequired,
  className: d.string
};
const to = ({
  text: e,
  htmlId: n,
  value: r,
  status: t,
  uniqueID: i = le(),
  onChange: o,
  checked: a = !1,
  ...l
}) => /* @__PURE__ */ y(pe.Fragment, {
  children: [/* @__PURE__ */ s("input", {
    className: "nsw-form__radio-input",
    type: "radio",
    name: n,
    "aria-describedby": t === "invalid" ? `helper${n} error${n}` : `helper${n}`,
    id: i,
    value: r,
    checked: a,
    onChange: o,
    ...l
  }), /* @__PURE__ */ s("label", {
    className: "nsw-form__radio-label",
    htmlFor: i,
    children: e
  })]
}), Yo = ({
  className: e = "",
  as: n = "group",
  label: r,
  helper: t,
  status: i = "default",
  htmlId: o,
  statusText: a,
  options: l,
  onChange: f
}) => /* @__PURE__ */ s("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ y("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": i === "invalid" ? "true" : void 0,
    children: [n === "group" ? /* @__PURE__ */ y("legend", {
      children: [/* @__PURE__ */ s("span", {
        className: "nsw-form__legend",
        children: r
      }), t ? /* @__PURE__ */ s(de, {
        htmlId: o,
        children: t
      }) : "", i ? /* @__PURE__ */ s(de, {
        htmlId: o,
        status: i,
        children: a
      }) : ""]
    }) : "", /* @__PURE__ */ s("div", {
      children: l.map((u) => /* @__PURE__ */ s(to, {
        ...u,
        htmlId: o,
        status: i,
        checked: u.selected,
        onChange: f
      }, u.value))
    }), i && n !== "group" ? /* @__PURE__ */ s(de, {
      htmlId: o,
      status: i,
      children: a
    }) : ""]
  })
}), io = ({
  step: e,
  of: n,
  ...r
}) => /* @__PURE__ */ y("div", {
  className: "nsw-progress-indicator",
  ...r,
  children: [/* @__PURE__ */ y("div", {
    className: "nsw-progress-indicator__count",
    children: ["Step ", e, " of ", n]
  }), /* @__PURE__ */ s("div", {
    className: "nsw-progress-indicator__bar",
    children: (
      // eslint-disable-next-line react/no-array-index-key
      [...Array(n)].fill(void 0).map((t, i) => i + 1 <= e ? /* @__PURE__ */ s(pn, {
        active: !0
      }, i) : /* @__PURE__ */ s(pn, {}, i))
    )
  })]
});
io.propTypes = {
  step: d.number.isRequired,
  of: d.number.isRequired
};
const pn = ({
  active: e
}) => /* @__PURE__ */ s("div", {
  className: `${e ? "active" : ""}`
});
pn.propTypes = {
  active: d.bool
};
const oo = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
  default: ""
}, ur = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark"
}, Uo = (e) => {
  const {
    title: n,
    content: r,
    ctaText: t,
    ctaHref: i,
    as: o = "default",
    className: a = "",
    children: l,
    onClose: f,
    ...u
  } = e, p = $e(null);
  return ge(() => {
    (async () => {
      const {
        GlobalAlert: m
      } = await import("./main-Rke_2KZb.js");
      new m(p.current).init();
    })();
  }, []), /* @__PURE__ */ s("div", {
    ref: p,
    className: `nsw-global-alert ${a} ${oo[o]}`,
    ...u,
    children: /* @__PURE__ */ y("div", {
      className: "nsw-global-alert__wrapper",
      children: [/* @__PURE__ */ y("div", {
        className: "nsw-global-alert__content",
        children: [/* @__PURE__ */ s("div", {
          className: "nsw-global-alert__title",
          children: n
        }), typeof r == "string" ? /* @__PURE__ */ s("p", {
          children: r
        }) : r]
      }), /* @__PURE__ */ s("p", {
        children: t && i ? /* @__PURE__ */ s("a", {
          href: i,
          className: o ? ur[o] : ur.default,
          children: t
        }) : ""
      }), /* @__PURE__ */ y("button", {
        type: "button",
        className: "nsw-icon-button js-close-alert",
        onClick: f,
        children: [/* @__PURE__ */ s(K, {
          icon: "ic:baseline-close"
        }), /* @__PURE__ */ s("span", {
          className: "sr-only",
          children: "Close message"
        })]
      })]
    })
  });
}, Zo = (e) => {
  const {
    siteTitle: n,
    siteDescriptor: r,
    logo: t,
    headerUrl: i,
    linkComponent: o = "a",
    mobile: a = !0,
    search: l = !0,
    onSubmit: f,
    slotMainLogo: u,
    ...p
  } = e, m = $e(null), g = $e(null);
  return ge(() => {
    (async () => {
      const {
        SiteSearch: C
      } = await import("./main-Rke_2KZb.js");
      l && (new C(m.current).init(), new C(g.current).init());
    })();
  }, []), /* @__PURE__ */ s(vn, {
    children: /* @__PURE__ */ s("header", {
      className: "nsw-header",
      ...p,
      children: /* @__PURE__ */ y("div", {
        className: "nsw-header__container",
        children: [/* @__PURE__ */ y("div", {
          className: "nsw-header__inner",
          children: [/* @__PURE__ */ y("div", {
            className: "nsw-header__main",
            children: [/* @__PURE__ */ s("div", {
              className: "nsw-header__waratah",
              children: /* @__PURE__ */ y(o, {
                href: i,
                className: "nsw-header__logo-link",
                children: [u || /* @__PURE__ */ y("svg", {
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
            }), t ? /* @__PURE__ */ y("div", {
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
            }) : /* @__PURE__ */ y("div", {
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
            children: /* @__PURE__ */ y("button", {
              type: "button",
              className: "js-open-nav",
              "aria-expanded": "false",
              "aria-controls": "main-nav",
              children: [/* @__PURE__ */ s(K, {
                icon: "ic:baseline-menu"
              }), /* @__PURE__ */ y("span", {
                children: [/* @__PURE__ */ s("span", {
                  className: "sr-only",
                  children: "Open"
                }), " ", "Menu"]
              })]
            })
          }) : "", l ? /* @__PURE__ */ s("div", {
            className: "nsw-header__search",
            children: /* @__PURE__ */ y("button", {
              ref: m,
              type: "button",
              className: "js-open-search",
              "aria-expanded": "false",
              "aria-controls": "header-search",
              children: [/* @__PURE__ */ s(K, {
                icon: "ic:baseline-search"
              }), /* @__PURE__ */ y("span", {
                className: "nsw-header-btn__sub",
                children: [/* @__PURE__ */ s("span", {
                  className: "sr-only",
                  children: "Show"
                }), " ", "Search"]
              })]
            })
          }) : ""]
        }), l ? /* @__PURE__ */ y("div", {
          id: "header-search",
          className: "nsw-header__search-area js-search-area",
          hidden: !0,
          children: [/* @__PURE__ */ y("form", {
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
              children: /* @__PURE__ */ s(K, {
                icon: "ic:baseline-search"
              })
            })]
          }), /* @__PURE__ */ y("button", {
            ref: g,
            className: "nsw-icon-button js-close-search",
            "aria-expanded": "true",
            "aria-controls": "header-search",
            children: [/* @__PURE__ */ s(K, {
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
}, so = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white"
}, ao = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark"
}, co = (e) => e ? typeof e != "number" && typeof e != "string" && typeof e != "boolean" && "src" in e ? /* @__PURE__ */ s("img", {
  className: "nsw-hero-banner__image",
  src: e.src,
  alt: e.alt
}) : e : /* @__PURE__ */ s("div", {
  className: "nsw-hero-banner__bg"
}), zo = ({
  title: e = "Hero Banner",
  intro: n,
  cta: r,
  style: t = "white",
  wide: i,
  featured: o,
  image: a,
  children: l,
  className: f = "",
  ...u
}) => /* @__PURE__ */ s("div", {
  className: `nsw-hero-banner ${t ? so[t] : ""} ${i ? "nsw-hero-banner--wide" : ""} ${o ? " nsw-hero-banner--featured" : ""}  ${f}`,
  ...u,
  children: /* @__PURE__ */ s("div", {
    className: "nsw-hero-banner__container",
    children: /* @__PURE__ */ y("div", {
      className: "nsw-hero-banner__wrapper",
      children: [/* @__PURE__ */ y("div", {
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
            className: `nsw-button ${ao[t]}`,
            onClick: r.onClick,
            children: r.text
          })
        }) : ""]
      }), l, /* @__PURE__ */ s("div", {
        className: "nsw-hero-banner__box",
        role: "presentation",
        children: co(a)
      })]
    })
  })
}), lo = ({
  subtitle: e,
  children: n
}) => /* @__PURE__ */ s("div", {
  className: "nsw-hero-banner__links",
  children: /* @__PURE__ */ y("div", {
    className: "nsw-hero-banner__list",
    children: [/* @__PURE__ */ s("div", {
      className: "nsw-hero-banner__sub-title",
      children: e
    }), n]
  })
});
lo.propTypes = {
  subtitle: d.string.isRequired,
  children: d.node.isRequired
};
const Ur = ({
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
Ur.propTypes = {
  url: d.string,
  title: d.string
};
const Go = ({
  title: e,
  links: n,
  ariaLabel: r = dr(),
  className: t = "",
  ...i
}) => /* @__PURE__ */ y("nav", {
  className: `nsw-in-page-nav ${t}`,
  "aria-labelledby": r,
  ...i,
  children: [/* @__PURE__ */ s("div", {
    id: r,
    className: "nsw-in-page-nav__title",
    children: e
  }), /* @__PURE__ */ s("ul", {
    children: n ? n.map((o) => /* @__PURE__ */ Tt(Ur, {
      ...o,
      key: o.title
    })) : ""
  })]
}), uo = ({
  text: e,
  link: n,
  linkComponent: r = "a",
  children: t,
  onClick: i,
  ...o
}) => {
  const a = r;
  return typeof i == "function" && (o.onClick = i, n || (n = "#")), a === "a" ? (o.href = n, o.rel = (o == null ? void 0 : o.target) === "_blank" ? "nofollow noopener" : void 0) : typeof a == "function" && (o.to = n), n ? /* @__PURE__ */ y("li", {
    className: "nsw-link-list__item",
    children: [/* @__PURE__ */ y(a, {
      ...o,
      children: [/* @__PURE__ */ s("span", {
        children: e
      }), /* @__PURE__ */ s(K, {
        icon: "ic:baseline-east",
        className: "nsw-link-list__icon"
      })]
    }), t]
  }) : /* @__PURE__ */ y("li", {
    className: "nsw-link-list__item",
    children: [e, t]
  });
}, Ko = ({
  items: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: "nsw-link-list",
  children: /* @__PURE__ */ s("ul", {
    className: `nsw-link-list__list ${n}`,
    ...r,
    children: e.map((t, i) => /* @__PURE__ */ s(uo, {
      ...t
    }, t.href || "" + i))
  })
}), fo = (e) => {
  const n = Object.keys(e).sort((r, t) => e[t] - e[r]);
  return n.map((r, t) => {
    let i = "";
    const o = e[r], a = n[t - 1], l = a ? e[a] : null;
    return o >= 0 && (i = `(min-width: ${o}px)`), l !== null && (i && (i += " and "), i += `(max-width: ${l - 1}px)`), {
      breakpoint: r,
      maxWidth: l ? l - 1 : null,
      minWidth: o,
      query: i
    };
  });
}, po = typeof window > "u" ? ge : Et, ho = {
  breakpoint: void 0,
  minWidth: void 0,
  maxWidth: void 0
}, mo = (e, n, r = !0) => {
  const t = xt(() => fo(e), [e]), [i, o] = pr(() => {
    for (const { query: l, ...f } of t)
      if (typeof window < "u" && !r) {
        if (window.matchMedia(l).matches)
          return f;
      } else if (f.breakpoint === n)
        return f;
    return ho;
  }), a = St(({ matches: l }, f) => {
    l && o(f);
  }, []);
  return po(() => {
    const l = t.map(({ query: f, ...u }) => {
      const p = window.matchMedia(f);
      a(p, u);
      const m = (C) => {
        a(C, u);
      }, g = "addEventListener" in p && "removeEventListener" in p;
      return g ? p.addEventListener("change", m) : p.addListener(m), () => {
        g ? p.removeEventListener("change", m) : p.removeListener(m);
      };
    });
    return () => l.forEach((f) => f());
  }, [t, a]), Rt(i, (l) => typeof l.breakpoint == "string" ? `${l.breakpoint} (${l.minWidth} ≤ x${l.maxWidth ? ` < ${l.maxWidth + 1}` : ""})` : ""), i;
}, vo = {
  mobile: 0,
  tablet: 992
}, Qo = (e) => {
  const {
    navItems: n,
    megaMenu: r,
    className: t = "",
    isCloseWhenOutsideClick: i = !0,
    ...o
  } = e, {
    breakpoint: a
  } = mo(vo, "mobile"), l = $e(null), f = () => {
    var p;
    const u = (p = l.current) == null ? void 0 : p.querySelector("ul > li > a.active");
    return u && u.click(), u;
  };
  return ge(() => {
    let u;
    return (async () => {
      const {
        Navigation: p
      } = await import("./main-Rke_2KZb.js");
      u = new p(), u.init();
    })(), () => {
      console.log("🚀 ~ file: mainNav.tsx ~ line 73 ~ return ~ nav", u), u && (u.openSubNavElements = [], u = null);
    };
  }, []), ge(() => {
    if (i && a !== "mobile") {
      const u = (p) => {
        p.target.closest(".nsw-main-nav__list") || f();
      };
      return document.addEventListener("click", u), () => {
        document.removeEventListener("click", u);
      };
    }
  }, [i, a]), /* @__PURE__ */ y("nav", {
    id: "main-nav",
    className: `nsw-main-nav ${t} ${r ? "js-mega-menu" : ""}`,
    "aria-label": "Main Navigation",
    ...o,
    children: [/* @__PURE__ */ y("div", {
      className: "nsw-main-nav__header",
      children: [/* @__PURE__ */ s("div", {
        id: "nsw-main-nav__title",
        children: "Menu"
      }), /* @__PURE__ */ y("button", {
        type: "button",
        className: "nsw-icon-button js-close-nav",
        "aria-expanded": "true",
        children: [/* @__PURE__ */ s(K, {
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
        var g, C;
        const m = u.linkComponent || "a";
        return /* @__PURE__ */ s("li", {
          children: /* @__PURE__ */ y(yn, {
            children: [/* @__PURE__ */ y(m, {
              href: u.url,
              target: u.target,
              children: [/* @__PURE__ */ s("span", {
                children: u.text
              }), (g = u.subNav) != null && g.length ? /* @__PURE__ */ s(K, {
                icon: "ic:baseline-keyboard-arrow-right",
                className: "nsw-main-nav__link-icon"
              }) : ""]
            }), (C = u.subNav) != null && C.length ? /* @__PURE__ */ s(Zr, {
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
}, fr = ({
  url: e,
  text: n,
  description: r,
  id: t,
  target: i,
  linkComponent: o = "a"
}) => /* @__PURE__ */ y(yn, {
  children: [/* @__PURE__ */ y("div", {
    className: "nsw-main-nav__header",
    children: [/* @__PURE__ */ y("button", {
      type: "button",
      className: "nsw-icon-button nsw-icon-button--flex js-close-sub-nav",
      "aria-controls": `sub-nav-${t}`,
      "aria-expanded": "true",
      children: [/* @__PURE__ */ s(K, {
        icon: "ic:baseline-keyboard-arrow-left"
      }), /* @__PURE__ */ y("span", {
        children: ["Back", /* @__PURE__ */ s("span", {
          className: "sr-only",
          children: " to previous menu"
        })]
      })]
    }), /* @__PURE__ */ y("button", {
      type: "button",
      className: "nsw-icon-button js-close-nav",
      "aria-expanded": "true",
      children: [/* @__PURE__ */ s(K, {
        icon: "ic:baseline-close"
      }), /* @__PURE__ */ s("span", {
        className: "sr-only",
        children: "Close Menu"
      })]
    })]
  }), /* @__PURE__ */ s("div", {
    className: "nsw-main-nav__title",
    children: /* @__PURE__ */ y(o, {
      href: e,
      target: i,
      children: [/* @__PURE__ */ s("span", {
        children: n
      }), /* @__PURE__ */ s(K, {
        icon: "ic:baseline-east"
      })]
    })
  }), /* @__PURE__ */ s("div", {
    className: "nsw-main-nav__description",
    children: r
  })]
}), Zr = ({
  id: e = "",
  subNav: n,
  url: r,
  text: t,
  description: i,
  target: o,
  linkComponent: a = "a"
}) => {
  const l = e || hr();
  return n ? /* @__PURE__ */ y("div", {
    className: "nsw-main-nav__sub-nav",
    id: `sub-nav-${l}`,
    role: "region",
    "aria-label": t,
    children: [/* @__PURE__ */ s(fr, {
      url: r,
      text: t,
      description: i,
      id: l,
      target: o,
      linkComponent: a
    }), /* @__PURE__ */ s("ul", {
      className: "nsw-main-nav__sub-list",
      children: n.map((f, u) => {
        var g, C;
        const p = l + u, m = f.linkComponent || "a";
        return /* @__PURE__ */ s("li", {
          children: /* @__PURE__ */ y(yn, {
            children: [/* @__PURE__ */ y(m, {
              href: f.url,
              target: f.target,
              children: [/* @__PURE__ */ s("span", {
                children: f.text
              }), (g = f.subNav) != null && g.length ? /* @__PURE__ */ s(K, {
                icon: "ic:baseline-keyboard-arrow-right",
                className: "nsw-main-nav__link-icon"
              }) : ""]
            }), (C = f.subNav) != null && C.length ? /* @__PURE__ */ y("div", {
              className: "nsw-main-nav__sub-nav",
              id: `sub-nav-${p}`,
              role: "region",
              "aria-label": `${t} Submenu`,
              children: [/* @__PURE__ */ s(fr, {
                url: r,
                text: t,
                description: i,
                id: p,
                linkComponent: m
              }), /* @__PURE__ */ s("ul", {
                className: "nsw-main-nav__sub-list",
                children: f.subNav.map((R, x) => {
                  var O;
                  const F = R.linkComponent || "a";
                  return /* @__PURE__ */ s("li", {
                    children: /* @__PURE__ */ y(F, {
                      href: R.url,
                      target: R.target,
                      className: "nsw-subnavigation__link",
                      children: [/* @__PURE__ */ s("span", {
                        children: R.text
                      }), (O = R.subNav) != null && O.length ? /* @__PURE__ */ s(K, {
                        icon: "ic:baseline-keyboard-arrow-right",
                        className: "nsw-main-nav__link-icon"
                      }) : ""]
                    })
                  }, R.url + R.text + x);
                })
              })]
            }) : ""]
          })
        }, p);
      })
    })]
  }) : null;
};
Zr.propTypes = {
  subNav: d.arrayOf(d.shape({
    url: d.string,
    text: d.string,
    subNav: d.arrayOf
  })).isRequired,
  url: d.string,
  text: d.string,
  description: d.string,
  renderLink: d.func,
  target: d.string
};
const go = ({
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
go.propTypes = {
  text: d.string
};
const yo = ({
  nav: e,
  content: n
}) => /* @__PURE__ */ y("nav", {
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
yo.propTypes = {
  nav: d.string.isRequired,
  content: d.string.isRequired
};
const bo = {
  info: "nsw-in-page-alert--info",
  warning: "nsw-in-page-alert--warning",
  error: "nsw-in-page-alert--error",
  success: "nsw-in-page-alert--success"
}, wo = {
  info: "ic:baseline-info",
  warning: "ic:baseline-error",
  error: "ic:baseline-cancel",
  success: "ic:baseline-check-circle"
}, Jo = ({
  title: e = "",
  as: n,
  children: r,
  className: t = "",
  compact: i = !1,
  ...o
}) => /* @__PURE__ */ y("div", {
  className: `nsw-in-page-alert ${t} ${bo[n]} ${i ? "nsw-in-page-alert--compact" : ""}`.trim(),
  ...o,
  children: [/* @__PURE__ */ s(K, {
    icon: wo[n],
    className: "nsw-in-page-alert__icon"
  }), /* @__PURE__ */ y("div", {
    className: "nsw-in-page-alert__content",
    children: [!!e && /* @__PURE__ */ s("h5", {
      children: e
    }), r]
  })]
}), _o = ({
  backLink: e,
  active: n,
  nextLink: r,
  paginationItems: t,
  className: i,
  children: o,
  ...a
}) => /* @__PURE__ */ s("div", {
  className: `nsw-container ${i}`,
  ...a,
  children: /* @__PURE__ */ s("nav", {
    className: "nsw-pagination",
    "aria-label": "Pagination",
    children: /* @__PURE__ */ y("ul", {
      children: [/* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ y("a", {
          className: "nsw-icon-button",
          href: e,
          children: [/* @__PURE__ */ s(K, {
            icon: "ic:baseline-keyboard-arrow-left"
          }), /* @__PURE__ */ s("span", {
            className: "sr-only",
            children: "Back"
          })]
        })
      }), t ? t.map((l, f) => /* @__PURE__ */ s(zr, {
        url: l.url,
        page: f + 1,
        active: n
      }, `pagination-${f}`)) : "", o, /* @__PURE__ */ s("li", {
        children: /* @__PURE__ */ y("a", {
          href: r,
          className: "nsw-icon-button",
          children: [/* @__PURE__ */ s(K, {
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
_o.propTypes = {
  className: d.string,
  paginationItems: d.arrayOf(d.shape({
    url: d.string
  })),
  children: d.node,
  backLink: d.string,
  nextLink: d.string,
  active: d.number
};
const zr = ({
  url: e,
  page: n,
  active: r
}) => /* @__PURE__ */ s("li", {
  children: /* @__PURE__ */ s("a", {
    className: r === n ? "active" : "",
    href: e,
    children: /* @__PURE__ */ y("span", {
      children: [/* @__PURE__ */ s("span", {
        className: "sr-only",
        children: "Page "
      }), n]
    })
  })
});
zr.propTypes = {
  page: d.number,
  active: d.number,
  url: d.string
};
const Co = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding"
}, To = ({
  children: e,
  style: n = "white",
  container: r = !0,
  padding: t = "full",
  box: i = !1,
  className: o = "",
  ...a
}) => /* @__PURE__ */ s("div", {
  className: `nsw-section ${o} ${Co[t]} nsw-section--${n} ${i ? "nsw-section--box" : ""}`,
  ...a,
  children: /* @__PURE__ */ s("div", {
    className: r ? "nsw-container" : "",
    children: e
  })
});
To.propTypes = {
  padding: d.oneOf(["full", "half", "none"]),
  style: d.oneOf(["white", "brand-dark", "brand-light", "brand-supplementary", "black", "off-white", "grey-01", "grey-02", "grey-03", "grey-04"]),
  children: d.node.isRequired,
  container: d.bool,
  className: d.string,
  box: d.bool
};
const Eo = ({
  caption: e,
  headers: n,
  data: r,
  striped: t = !1,
  bordered: i,
  captionTop: o,
  className: a = "",
  firstCellIsHeader: l,
  ...f
}) => /* @__PURE__ */ y("table", {
  className: `nsw-table ${t ? "nsw-table--striped " : " "} ${i ? "nsw-table--bordered " : " "} ${o ? "nsw-table--caption-top " : " "} ${a}`,
  ...f,
  children: [e && /* @__PURE__ */ s(Jr, {
    tableCaption: e
  }), /* @__PURE__ */ s(Kr, {
    children: /* @__PURE__ */ s(mn, {
      children: n.map((u, p) => /* @__PURE__ */ s(hn, {
        title: u.title,
        width: u.width
      }, `tableHeader-${le()}`))
    })
  }), /* @__PURE__ */ s(Gr, {
    children: r.map((u, p) => /* @__PURE__ */ s(mn, {
      children: n.map((m, g) => g === 0 && l === !0 ? /* @__PURE__ */ s(hn, {
        scope: "row",
        title: u[m.key] ? u[m.key] : ""
      }, `tableHeader-${le()}`) : /* @__PURE__ */ s(Qr, {
        data: u[m.key] ? u[m.key] : ""
        // type={header?.type}
        // render={
        // 	header.render
        // 		? header.render(row[header.key], row)
        // 		: null
        // }
      }, `tableCell-${le()}`))
    }, `tableRow-${le()}`))
  })]
});
Eo.propTypes = {
  caption: d.string,
  headers: d.arrayOf(Object).isRequired,
  data: d.arrayOf(Object).isRequired,
  striped: d.bool,
  bordered: d.bool,
  captionTop: d.bool,
  className: d.string,
  firstCellIsHeader: d.bool
};
const Gr = ({
  className: e = "",
  ...n
}) => /* @__PURE__ */ s("tbody", {
  className: e,
  ...n
});
Gr.propTypes = {
  className: d.string
};
const Kr = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("thead", {
  className: n,
  ...r,
  children: e
});
Kr.propTypes = {
  children: d.node,
  className: d.string
};
const hn = ({
  title: e,
  width: n,
  scope: r = "col",
  className: t = "",
  ...i
}) => (i.width = n ? `${n}%` : void 0, /* @__PURE__ */ s("th", {
  ...i,
  className: t,
  scope: r,
  children: e
}));
hn.propTypes = {
  title: d.string.isRequired,
  width: d.number,
  className: d.string,
  scope: d.string
};
const Qr = ({
  data: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("td", {
  className: n,
  ...r,
  children: e
});
Qr.propTypes = {
  data: d.string,
  className: d.string
};
const mn = ({
  children: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("tr", {
  className: n,
  ...r,
  children: e
});
mn.propTypes = {
  children: d.node,
  className: d.string
};
const Jr = ({
  captionId: e,
  tableCaption: n,
  className: r = "",
  ...t
}) => n ? /* @__PURE__ */ s("caption", {
  className: r,
  ...t,
  children: n
}) : null;
Jr.propTypes = {
  tableCaption: d.string,
  captionId: d.string,
  className: d.string
};
const xo = ({
  children: e
}) => /* @__PURE__ */ s("div", {
  className: "nsw-table-responsive",
  role: "region",
  children: e
});
xo.propTypes = {
  children: d.node
};
const So = (e) => {
  const {
    className: n = "",
    children: r,
    ...t
  } = e, i = $e(null);
  return ge(() => {
    (async () => {
      const {
        Tabs: o
      } = await import("./main-Rke_2KZb.js");
      new o(i.current).init();
    })();
  }, []), /* @__PURE__ */ s("div", {
    ref: i,
    className: `nsw-tabs js-tabs ${n}`,
    ...t,
    children: r
  });
};
So.propTypes = {
  className: d.string,
  children: d.node
};
const Ro = ({
  children: e
}) => /* @__PURE__ */ s("ul", {
  className: "nsw-tabs__list",
  children: e
});
Ro.propTypes = {
  children: d.node.isRequired
};
const No = ({
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
No.propTypes = {
  urlHash: d.string.isRequired,
  title: d.string.isRequired
};
const ko = ({
  urlHash: e,
  children: n
}) => /* @__PURE__ */ s("section", {
  id: e,
  className: "nsw-tabs__content",
  children: n
});
ko.propTypes = {
  urlHash: d.string.isRequired,
  children: d.node.isRequired
};
const Xr = ({
  link: e,
  text: n,
  linkComponent: r = "a",
  className: t = "",
  ...i
}) => {
  const o = "span", a = r;
  return a === "a" ? i.href = e : typeof a == "function" && (i.to = e), e ? /* @__PURE__ */ s(a, {
    className: `nsw-tag ${t}`,
    ...i,
    children: n
  }) : /* @__PURE__ */ s(o, {
    ...i,
    className: `nsw-tag ${t}`,
    children: n
  });
};
Xr.propTypes = {
  className: d.string,
  link: d.string,
  text: d.string.isRequired,
  linkComponent: d.oneOfType([d.string, d.func])
};
const Xo = ({
  tags: e,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s("div", {
  className: `nsw-list nsw-list--8 ${n}`,
  ...r,
  children: e.map((t) => /* @__PURE__ */ s(Xr, {
    ...t,
    linkComponent: t.linkComponent,
    link: t.link,
    text: t.text
  }, t.text))
}), Po = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent"
}, Oo = ({
  image: e,
  video: n,
  title: r,
  caption: t,
  left: i,
  right: o,
  center: a,
  children: l,
  style: f = "default"
}) => /* @__PURE__ */ y("figure", {
  className: `nsw-media ${i === void 0 || i === "none" ? "" : ` nsw-media--left-${i}`}
		${Po[f]}
		${o === void 0 || o === "none" ? "" : ` nsw-media--right-${o}`}
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
Oo.propTypes = {
  style: d.oneOf(["default", "dark", "light", "transparent"]),
  video: d.string,
  image: d.string,
  caption: d.string,
  title: d.string,
  right: d.oneOf(["none", "30", "40", "50"]),
  left: d.oneOf(["none", "30", "40", "50"]),
  center: d.oneOf(["none", "60", "70", "80", "90"])
};
export {
  jo as Accordion,
  Io as AccordionGroup,
  Jo as Alert,
  Lo as Breadcrumbs,
  Ao as Button,
  Bi as Callout,
  Mo as Card,
  Fo as CardCopy,
  Gi as ContentBlock,
  Wo as Footer,
  Do as FooterLinks,
  Vo as FooterLower,
  Ho as FooterSectionGroup,
  qo as FooterUpper,
  Vr as FormGroup,
  ro as FormGroupCheckbox,
  Yo as FormGroupRadio,
  no as FormGroupSelect,
  Bo as FormGroupText,
  de as FormHelper,
  Ji as FormLabel,
  Uo as GlobalAlert,
  Zo as Header,
  zo as HeroBanner,
  lo as HeroBannerList,
  Go as InPageNavLinks,
  Ko as LinkList,
  Qo as MainNav,
  go as Masthead,
  Oo as Media,
  _o as Pagination,
  io as ProgressIndicator,
  To as Section,
  Br as Select,
  Wr as SelectItem,
  yo as SkipTo,
  No as TabItem,
  Ro as TabItemWrapper,
  ko as TabSection,
  Eo as Table,
  xo as TableResponsiveWrapper,
  So as Tabs,
  Xo as TagList,
  Xi as TextInput
};
