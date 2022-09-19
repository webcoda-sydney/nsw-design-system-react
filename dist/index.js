import ye, { useId as ln, useState as _r, Fragment as Be, forwardRef as un, useRef as Re, useEffect as ge, createElement as dn, useLayoutEffect as fn, useMemo as pn, useCallback as hn, useDebugValue as vn } from "react";
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var a = { exports: {} }, Ae = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function yn() {
  if (ir)
    return D;
  ir = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function G(b) {
    if (typeof b == "object" && b !== null) {
      var ae = b.$$typeof;
      switch (ae) {
        case t:
          switch (b = b.type, b) {
            case d:
            case f:
            case s:
            case c:
            case o:
            case x:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case v:
                case F:
                case T:
                case u:
                  return b;
                default:
                  return ae;
              }
          }
        case i:
          return ae;
      }
    }
  }
  function U(b) {
    return G(b) === f;
  }
  return D.AsyncMode = d, D.ConcurrentMode = f, D.ContextConsumer = l, D.ContextProvider = u, D.Element = t, D.ForwardRef = v, D.Fragment = s, D.Lazy = F, D.Memo = T, D.Portal = i, D.Profiler = c, D.StrictMode = o, D.Suspense = x, D.isAsyncMode = function(b) {
    return U(b) || G(b) === d;
  }, D.isConcurrentMode = U, D.isContextConsumer = function(b) {
    return G(b) === l;
  }, D.isContextProvider = function(b) {
    return G(b) === u;
  }, D.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, D.isForwardRef = function(b) {
    return G(b) === v;
  }, D.isFragment = function(b) {
    return G(b) === s;
  }, D.isLazy = function(b) {
    return G(b) === F;
  }, D.isMemo = function(b) {
    return G(b) === T;
  }, D.isPortal = function(b) {
    return G(b) === i;
  }, D.isProfiler = function(b) {
    return G(b) === c;
  }, D.isStrictMode = function(b) {
    return G(b) === o;
  }, D.isSuspense = function(b) {
    return G(b) === x;
  }, D.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === s || b === f || b === c || b === o || b === x || b === w || typeof b == "object" && b !== null && (b.$$typeof === F || b.$$typeof === T || b.$$typeof === u || b.$$typeof === l || b.$$typeof === v || b.$$typeof === W || b.$$typeof === z || b.$$typeof === B || b.$$typeof === M);
  }, D.typeOf = G, D;
}
var L = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function gn() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, F = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function G(g) {
      return typeof g == "string" || typeof g == "function" || g === s || g === f || g === c || g === o || g === x || g === w || typeof g == "object" && g !== null && (g.$$typeof === F || g.$$typeof === T || g.$$typeof === u || g.$$typeof === l || g.$$typeof === v || g.$$typeof === W || g.$$typeof === z || g.$$typeof === B || g.$$typeof === M);
    }
    function U(g) {
      if (typeof g == "object" && g !== null) {
        var ee = g.$$typeof;
        switch (ee) {
          case t:
            var he = g.type;
            switch (he) {
              case d:
              case f:
              case s:
              case c:
              case o:
              case x:
                return he;
              default:
                var le = he && he.$$typeof;
                switch (le) {
                  case l:
                  case v:
                  case F:
                  case T:
                  case u:
                    return le;
                  default:
                    return ee;
                }
            }
          case i:
            return ee;
        }
      }
    }
    var b = d, ae = f, be = l, _e = u, ue = t, we = v, de = s, fe = F, X = T, Q = i, se = c, Z = o, te = x, ce = !1;
    function pe(g) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(g) || U(g) === d;
    }
    function h(g) {
      return U(g) === f;
    }
    function _(g) {
      return U(g) === l;
    }
    function S(g) {
      return U(g) === u;
    }
    function $(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function R(g) {
      return U(g) === v;
    }
    function j(g) {
      return U(g) === s;
    }
    function N(g) {
      return U(g) === F;
    }
    function C(g) {
      return U(g) === T;
    }
    function k(g) {
      return U(g) === i;
    }
    function q(g) {
      return U(g) === c;
    }
    function O(g) {
      return U(g) === o;
    }
    function J(g) {
      return U(g) === x;
    }
    L.AsyncMode = b, L.ConcurrentMode = ae, L.ContextConsumer = be, L.ContextProvider = _e, L.Element = ue, L.ForwardRef = we, L.Fragment = de, L.Lazy = fe, L.Memo = X, L.Portal = Q, L.Profiler = se, L.StrictMode = Z, L.Suspense = te, L.isAsyncMode = pe, L.isConcurrentMode = h, L.isContextConsumer = _, L.isContextProvider = S, L.isElement = $, L.isForwardRef = R, L.isFragment = j, L.isLazy = N, L.isMemo = C, L.isPortal = k, L.isProfiler = q, L.isStrictMode = O, L.isSuspense = J, L.isValidElementType = G, L.typeOf = U;
  }()), L;
}
var cr;
function wr() {
  return cr || (cr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = yn() : e.exports = gn();
  }(Ae)), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, lr;
function bn() {
  if (lr)
    return Me;
  lr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function s(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(u).map(function(v) {
        return u[v];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        f[v] = v;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = o() ? Object.assign : function(c, u) {
    for (var l, d = s(c), f, v = 1; v < arguments.length; v++) {
      l = Object(arguments[v]);
      for (var x in l)
        t.call(l, x) && (d[x] = l[x]);
      if (e) {
        f = e(l);
        for (var w = 0; w < f.length; w++)
          i.call(l, f[w]) && (d[f[w]] = l[f[w]]);
      }
    }
    return d;
  }, Me;
}
var qe, ur;
function He() {
  if (ur)
    return qe;
  ur = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = e, qe;
}
var Ie, dr;
function xr() {
  return dr || (dr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var Fe, fr;
function _n() {
  if (fr)
    return Fe;
  fr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = He(), i = {}, s = xr();
    e = function(c) {
      var u = "Warning: " + c;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function o(c, u, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in c)
        if (s(c, v)) {
          var x;
          try {
            if (typeof c[v] != "function") {
              var w = Error(
                (d || "React class") + ": " + l + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            x = c[v](u, v, d, l, null, t);
          } catch (F) {
            x = F;
          }
          if (x && !(x instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof x + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), x instanceof Error && !(x.message in i)) {
            i[x.message] = !0;
            var T = f ? f() : "";
            e(
              "Failed " + l + " type: " + x.message + (T != null ? T : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Fe = o, Fe;
}
var De, pr;
function wn() {
  if (pr)
    return De;
  pr = 1;
  var e = wr(), t = bn(), i = He(), s = xr(), o = _n(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return De = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function x(h) {
      var _ = h && (f && h[f] || h[v]);
      if (typeof _ == "function")
        return _;
    }
    var w = "<<anonymous>>", T = {
      array: z("array"),
      bigint: z("bigint"),
      bool: z("boolean"),
      func: z("function"),
      number: z("number"),
      object: z("object"),
      string: z("string"),
      symbol: z("symbol"),
      any: B(),
      arrayOf: G,
      element: U(),
      elementType: b(),
      instanceOf: ae,
      node: we(),
      objectOf: _e,
      oneOf: be,
      oneOfType: ue,
      shape: fe,
      exact: X
    };
    function F(h, _) {
      return h === _ ? h !== 0 || 1 / h === 1 / _ : h !== h && _ !== _;
    }
    function M(h, _) {
      this.message = h, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function W(h) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, S = 0;
      function $(j, N, C, k, q, O, J) {
        if (k = k || w, O = O || C, J !== i) {
          if (d) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = k + ":" + C;
            !_[ee] && S < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ee] = !0, S++);
          }
        }
        return N[C] == null ? j ? N[C] === null ? new M("The " + q + " `" + O + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new M("The " + q + " `" + O + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : h(N, C, k, q, O);
      }
      var R = $.bind(null, !1);
      return R.isRequired = $.bind(null, !0), R;
    }
    function z(h) {
      function _(S, $, R, j, N, C) {
        var k = S[$], q = Z(k);
        if (q !== h) {
          var O = te(k);
          return new M(
            "Invalid " + j + " `" + N + "` of type " + ("`" + O + "` supplied to `" + R + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return W(_);
    }
    function B() {
      return W(u);
    }
    function G(h) {
      function _(S, $, R, j, N) {
        if (typeof h != "function")
          return new M("Property `" + N + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var C = S[$];
        if (!Array.isArray(C)) {
          var k = Z(C);
          return new M("Invalid " + j + " `" + N + "` of type " + ("`" + k + "` supplied to `" + R + "`, expected an array."));
        }
        for (var q = 0; q < C.length; q++) {
          var O = h(C, q, R, j, N + "[" + q + "]", i);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(_);
    }
    function U() {
      function h(_, S, $, R, j) {
        var N = _[S];
        if (!l(N)) {
          var C = Z(N);
          return new M("Invalid " + R + " `" + j + "` of type " + ("`" + C + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(h);
    }
    function b() {
      function h(_, S, $, R, j) {
        var N = _[S];
        if (!e.isValidElementType(N)) {
          var C = Z(N);
          return new M("Invalid " + R + " `" + j + "` of type " + ("`" + C + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(h);
    }
    function ae(h) {
      function _(S, $, R, j, N) {
        if (!(S[$] instanceof h)) {
          var C = h.name || w, k = pe(S[$]);
          return new M("Invalid " + j + " `" + N + "` of type " + ("`" + k + "` supplied to `" + R + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return W(_);
    }
    function be(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), u;
      function _(S, $, R, j, N) {
        for (var C = S[$], k = 0; k < h.length; k++)
          if (F(C, h[k]))
            return null;
        var q = JSON.stringify(h, function(J, g) {
          var ee = te(g);
          return ee === "symbol" ? String(g) : g;
        });
        return new M("Invalid " + j + " `" + N + "` of value `" + String(C) + "` " + ("supplied to `" + R + "`, expected one of " + q + "."));
      }
      return W(_);
    }
    function _e(h) {
      function _(S, $, R, j, N) {
        if (typeof h != "function")
          return new M("Property `" + N + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var C = S[$], k = Z(C);
        if (k !== "object")
          return new M("Invalid " + j + " `" + N + "` of type " + ("`" + k + "` supplied to `" + R + "`, expected an object."));
        for (var q in C)
          if (s(C, q)) {
            var O = h(C, q, R, j, N + "." + q, i);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(_);
    }
    function ue(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var _ = 0; _ < h.length; _++) {
        var S = h[_];
        if (typeof S != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(S) + " at index " + _ + "."
          ), u;
      }
      function $(R, j, N, C, k) {
        for (var q = [], O = 0; O < h.length; O++) {
          var J = h[O], g = J(R, j, N, C, k, i);
          if (g == null)
            return null;
          g.data && s(g.data, "expectedType") && q.push(g.data.expectedType);
        }
        var ee = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new M("Invalid " + C + " `" + k + "` supplied to " + ("`" + N + "`" + ee + "."));
      }
      return W($);
    }
    function we() {
      function h(_, S, $, R, j) {
        return Q(_[S]) ? null : new M("Invalid " + R + " `" + j + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return W(h);
    }
    function de(h, _, S, $, R) {
      return new M(
        (h || "React class") + ": " + _ + " type `" + S + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function fe(h) {
      function _(S, $, R, j, N) {
        var C = S[$], k = Z(C);
        if (k !== "object")
          return new M("Invalid " + j + " `" + N + "` of type `" + k + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var q in h) {
          var O = h[q];
          if (typeof O != "function")
            return de(R, j, N, q, te(O));
          var J = O(C, q, R, j, N + "." + q, i);
          if (J)
            return J;
        }
        return null;
      }
      return W(_);
    }
    function X(h) {
      function _(S, $, R, j, N) {
        var C = S[$], k = Z(C);
        if (k !== "object")
          return new M("Invalid " + j + " `" + N + "` of type `" + k + "` " + ("supplied to `" + R + "`, expected `object`."));
        var q = t({}, S[$], h);
        for (var O in q) {
          var J = h[O];
          if (s(h, O) && typeof J != "function")
            return de(R, j, N, O, te(J));
          if (!J)
            return new M(
              "Invalid " + j + " `" + N + "` key `" + O + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(S[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var g = J(C, O, R, j, N + "." + O, i);
          if (g)
            return g;
        }
        return null;
      }
      return W(_);
    }
    function Q(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(Q);
          if (h === null || l(h))
            return !0;
          var _ = x(h);
          if (_) {
            var S = _.call(h), $;
            if (_ !== h.entries) {
              for (; !($ = S.next()).done; )
                if (!Q($.value))
                  return !1;
            } else
              for (; !($ = S.next()).done; ) {
                var R = $.value;
                if (R && !Q(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(h, _) {
      return h === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function Z(h) {
      var _ = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : se(_, h) ? "symbol" : _;
    }
    function te(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var _ = Z(h);
      if (_ === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ce(h) {
      var _ = te(h);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function pe(h) {
      return !h.constructor || !h.constructor.name ? w : h.constructor.name;
    }
    return T.checkPropTypes = o, T.resetWarningCache = o.resetWarningCache, T.PropTypes = T, T;
  }, De;
}
var Le, hr;
function xn() {
  if (hr)
    return Le;
  hr = 1;
  var e = He();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, Le = function() {
    function s(u, l, d, f, v, x) {
      if (x !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    s.isRequired = s;
    function o() {
      return s;
    }
    var c = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: o,
      element: s,
      elementType: s,
      instanceOf: o,
      node: s,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return c.PropTypes = c, c;
  }, Le;
}
if (process.env.NODE_ENV !== "production") {
  var Tn = wr(), En = !0;
  a.exports = wn()(Tn.isElement, En);
} else
  a.exports = xn()();
const Tr = (e = "", t = "-") => (e + ln()).replace(/\:/g, t);
var $e = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Rn() {
  if (vr)
    return Te;
  vr = 1;
  var e = ye, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, d, f) {
    var v, x = {}, w = null, T = null;
    f !== void 0 && (w = "" + f), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (T = d.ref);
    for (v in d)
      s.call(d, v) && !c.hasOwnProperty(v) && (x[v] = d[v]);
    if (l && l.defaultProps)
      for (v in d = l.defaultProps, d)
        x[v] === void 0 && (x[v] = d[v]);
    return { $$typeof: t, type: l, key: w, ref: T, props: x, _owner: o.current };
  }
  return Te.Fragment = i, Te.jsx = u, Te.jsxs = u, Te;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Nn() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), F = Symbol.iterator, M = "@@iterator";
    function W(n) {
      if (n === null || typeof n != "object")
        return null;
      var p = F && n[F] || n[M];
      return typeof p == "function" ? p : null;
    }
    var z = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(n) {
      {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), E = 1; E < p; E++)
          m[E - 1] = arguments[E];
        G("error", n, m);
      }
    }
    function G(n, p, m) {
      {
        var E = z.ReactDebugCurrentFrame, I = E.getStackAddendum();
        I !== "" && (p += "%s", m = m.concat([I]));
        var Y = m.map(function(A) {
          return String(A);
        });
        Y.unshift("Warning: " + p), Function.prototype.apply.call(console[n], console, Y);
      }
    }
    var U = !1, b = !1, ae = !1, be = !1, _e = !1, ue;
    ue = Symbol.for("react.module.reference");
    function we(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === c || _e || n === o || n === f || n === v || be || n === T || U || b || ae || typeof n == "object" && n !== null && (n.$$typeof === w || n.$$typeof === x || n.$$typeof === u || n.$$typeof === l || n.$$typeof === d || n.$$typeof === ue || n.getModuleId !== void 0));
    }
    function de(n, p, m) {
      var E = n.displayName;
      if (E)
        return E;
      var I = p.displayName || p.name || "";
      return I !== "" ? m + "(" + I + ")" : m;
    }
    function fe(n) {
      return n.displayName || "Context";
    }
    function X(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            var p = n;
            return fe(p) + ".Consumer";
          case u:
            var m = n;
            return fe(m._context) + ".Provider";
          case d:
            return de(n, n.render, "ForwardRef");
          case x:
            var E = n.displayName || null;
            return E !== null ? E : X(n.type) || "Memo";
          case w: {
            var I = n, Y = I._payload, A = I._init;
            try {
              return X(A(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, se = 0, Z, te, ce, pe, h, _, S;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function R() {
      {
        if (se === 0) {
          Z = console.log, te = console.info, ce = console.warn, pe = console.error, h = console.group, _ = console.groupCollapsed, S = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        se++;
      }
    }
    function j() {
      {
        if (se--, se === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Z
            }),
            info: Q({}, n, {
              value: te
            }),
            warn: Q({}, n, {
              value: ce
            }),
            error: Q({}, n, {
              value: pe
            }),
            group: Q({}, n, {
              value: h
            }),
            groupCollapsed: Q({}, n, {
              value: _
            }),
            groupEnd: Q({}, n, {
              value: S
            })
          });
        }
        se < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = z.ReactCurrentDispatcher, C;
    function k(n, p, m) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (I) {
            var E = I.stack.trim().match(/\n( *(at )?)/);
            C = E && E[1] || "";
          }
        return `
` + C + n;
      }
    }
    var q = !1, O;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      O = new J();
    }
    function g(n, p) {
      if (!n || q)
        return "";
      {
        var m = O.get(n);
        if (m !== void 0)
          return m;
      }
      var E;
      q = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = N.current, N.current = null, R();
      try {
        if (p) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (ie) {
              E = ie;
            }
            Reflect.construct(n, [], A);
          } else {
            try {
              A.call();
            } catch (ie) {
              E = ie;
            }
            n.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            E = ie;
          }
          n();
        }
      } catch (ie) {
        if (ie && E && typeof ie.stack == "string") {
          for (var P = ie.stack.split(`
`), K = E.stack.split(`
`), H = P.length - 1, V = K.length - 1; H >= 1 && V >= 0 && P[H] !== K[V]; )
            V--;
          for (; H >= 1 && V >= 0; H--, V--)
            if (P[H] !== K[V]) {
              if (H !== 1 || V !== 1)
                do
                  if (H--, V--, V < 0 || P[H] !== K[V]) {
                    var re = `
` + P[H].replace(" at new ", " at ");
                    return n.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", n.displayName)), typeof n == "function" && O.set(n, re), re;
                  }
                while (H >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = Y, j(), Error.prepareStackTrace = I;
      }
      var me = n ? n.displayName || n.name : "", sr = me ? k(me) : "";
      return typeof n == "function" && O.set(n, sr), sr;
    }
    function ee(n, p, m) {
      return g(n, !1);
    }
    function he(n) {
      var p = n.prototype;
      return !!(p && p.isReactComponent);
    }
    function le(n, p, m) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return g(n, he(n));
      if (typeof n == "string")
        return k(n);
      switch (n) {
        case f:
          return k("Suspense");
        case v:
          return k("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return ee(n.render);
          case x:
            return le(n.type, p, m);
          case w: {
            var E = n, I = E._payload, Y = E._init;
            try {
              return le(Y(I), p, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Ve = {}, Ge = z.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var p = n._owner, m = le(n.type, n._source, p ? p.type : null);
        Ge.setExtraStackFrame(m);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Yr(n, p, m, E, I) {
      {
        var Y = Function.call.bind(Ne);
        for (var A in n)
          if (Y(n, A)) {
            var P = void 0;
            try {
              if (typeof n[A] != "function") {
                var K = Error((E || "React class") + ": " + m + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              P = n[A](p, A, E, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              P = H;
            }
            P && !(P instanceof Error) && (Ce(I), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", m, A, typeof P), Ce(null)), P instanceof Error && !(P.message in Ve) && (Ve[P.message] = !0, Ce(I), B("Failed %s type: %s", m, P.message), Ce(null));
          }
      }
    }
    var zr = Array.isArray;
    function Se(n) {
      return zr(n);
    }
    function Br(n) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, m = p && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return m;
      }
    }
    function Hr(n) {
      try {
        return Je(n), !1;
      } catch {
        return !0;
      }
    }
    function Je(n) {
      return "" + n;
    }
    function Ke(n) {
      if (Hr(n))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(n)), Je(n);
    }
    var xe = z.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, Xe, ke;
    ke = {};
    function Vr(n) {
      if (Ne.call(n, "ref")) {
        var p = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Gr(n) {
      if (Ne.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Jr(n, p) {
      if (typeof n.ref == "string" && xe.current && p && xe.current.stateNode !== p) {
        var m = X(xe.current.type);
        ke[m] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(xe.current.type), n.ref), ke[m] = !0);
      }
    }
    function Kr(n, p) {
      {
        var m = function() {
          Qe || (Qe = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Qr(n, p) {
      {
        var m = function() {
          Xe || (Xe = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Xr = function(n, p, m, E, I, Y, A) {
      var P = {
        $$typeof: t,
        type: n,
        key: p,
        ref: m,
        props: A,
        _owner: Y
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Zr(n, p, m, E, I) {
      {
        var Y, A = {}, P = null, K = null;
        m !== void 0 && (Ke(m), P = "" + m), Gr(p) && (Ke(p.key), P = "" + p.key), Vr(p) && (K = p.ref, Jr(p, I));
        for (Y in p)
          Ne.call(p, Y) && !Ur.hasOwnProperty(Y) && (A[Y] = p[Y]);
        if (n && n.defaultProps) {
          var H = n.defaultProps;
          for (Y in H)
            A[Y] === void 0 && (A[Y] = H[Y]);
        }
        if (P || K) {
          var V = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          P && Kr(A, V), K && Qr(A, V);
        }
        return Xr(n, P, K, I, E, xe.current, A);
      }
    }
    var Oe = z.ReactCurrentOwner, Ze = z.ReactDebugCurrentFrame;
    function ve(n) {
      if (n) {
        var p = n._owner, m = le(n.type, n._source, p ? p.type : null);
        Ze.setExtraStackFrame(m);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function je(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function er() {
      {
        if (Oe.current) {
          var n = X(Oe.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function en(n) {
      {
        if (n !== void 0) {
          var p = n.fileName.replace(/^.*[\\\/]/, ""), m = n.lineNumber;
          return `

Check your code at ` + p + ":" + m + ".";
        }
        return "";
      }
    }
    var rr = {};
    function rn(n) {
      {
        var p = er();
        if (!p) {
          var m = typeof n == "string" ? n : n.displayName || n.name;
          m && (p = `

Check the top-level render call using <` + m + ">.");
        }
        return p;
      }
    }
    function nr(n, p) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var m = rn(p);
        if (rr[m])
          return;
        rr[m] = !0;
        var E = "";
        n && n._owner && n._owner !== Oe.current && (E = " It was passed a child from " + X(n._owner.type) + "."), ve(n), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, E), ve(null);
      }
    }
    function tr(n, p) {
      {
        if (typeof n != "object")
          return;
        if (Se(n))
          for (var m = 0; m < n.length; m++) {
            var E = n[m];
            je(E) && nr(E, p);
          }
        else if (je(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var I = W(n);
          if (typeof I == "function" && I !== n.entries)
            for (var Y = I.call(n), A; !(A = Y.next()).done; )
              je(A.value) && nr(A.value, p);
        }
      }
    }
    function nn(n) {
      {
        var p = n.type;
        if (p == null || typeof p == "string")
          return;
        var m;
        if (typeof p == "function")
          m = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === d || p.$$typeof === x))
          m = p.propTypes;
        else
          return;
        if (m) {
          var E = X(p);
          Yr(m, n.props, "prop", E, n);
        } else if (p.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var I = X(p);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(n) {
      {
        for (var p = Object.keys(n.props), m = 0; m < p.length; m++) {
          var E = p[m];
          if (E !== "children" && E !== "key") {
            ve(n), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), ve(null);
            break;
          }
        }
        n.ref !== null && (ve(n), B("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function ar(n, p, m, E, I, Y) {
      {
        var A = we(n);
        if (!A) {
          var P = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = en(I);
          K ? P += K : P += er();
          var H;
          n === null ? H = "null" : Se(n) ? H = "array" : n !== void 0 && n.$$typeof === t ? (H = "<" + (X(n.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : H = typeof n, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, P);
        }
        var V = Zr(n, p, m, I, Y);
        if (V == null)
          return V;
        if (A) {
          var re = p.children;
          if (re !== void 0)
            if (E)
              if (Se(re)) {
                for (var me = 0; me < re.length; me++)
                  tr(re[me], n);
                Object.freeze && Object.freeze(re);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(re, n);
        }
        return n === s ? tn(V) : nn(V), V;
      }
    }
    function an(n, p, m) {
      return ar(n, p, m, !0);
    }
    function sn(n, p, m) {
      return ar(n, p, m, !1);
    }
    var on = sn, cn = an;
    Ee.Fragment = s, Ee.jsx = on, Ee.jsxs = cn;
  }()), Ee;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Rn() : e.exports = Nn();
})($e);
const Ue = $e.exports.Fragment, r = $e.exports.jsx, y = $e.exports.jsxs, Cn = (e) => {
  const [t, i] = _r(!1), s = Tr("accordion"), {
    header: o,
    body: c,
    closed: u,
    className: l = "",
    ...d
  } = e;
  return /* @__PURE__ */ y(Be, {
    children: [/* @__PURE__ */ r("div", {
      className: "nsw-accordion__title",
      children: /* @__PURE__ */ y("button", {
        type: "button",
        "aria-expanded": t,
        "aria-controls": s,
        className: `nsw-accordion__button ${t ? "is-open" : ""}`,
        onClick: () => i((f) => !f),
        children: [o, /* @__PURE__ */ r("i", {
          className: "material-icons nsw-material-icons nsw-accordion__icon",
          "aria-hidden": "true",
          children: "keyboard_arrow_down"
        })]
      })
    }), /* @__PURE__ */ r("div", {
      className: "nsw-accordion__content",
      id: s,
      hidden: !t,
      children: /* @__PURE__ */ r("div", {
        className: "nsw-wysiwyg-content",
        children: c
      })
    })]
  });
};
Cn.propTypes = {
  header: a.exports.string.isRequired,
  body: a.exports.node.isRequired,
  className: a.exports.string
};
const $n = ({
  className: e,
  children: t,
  ...i
}) => /* @__PURE__ */ r("div", {
  className: `nsw-accordion ready ${e || ""}`,
  ...i,
  children: t
});
$n.propTypes = {
  className: a.exports.string,
  children: a.exports.node
};
const xt = ({
  label: e,
  items: t,
  className: i = "",
  ...s
}) => /* @__PURE__ */ r("nav", {
  className: `nsw-breadcrumbs ${i}`,
  "aria-label": e,
  ...s,
  children: /* @__PURE__ */ r(kn, {
    inline: !0,
    items: t
  })
}), Sn = ({
  text: e,
  link: t,
  linkComponent: i = "a",
  children: s,
  onClick: o,
  ...c
}) => {
  const u = i;
  return typeof o == "function" && (c.onClick = o, t || (t = "#")), u === "a" ? c.href = t : typeof u == "function" && (c.to = t), t ? /* @__PURE__ */ y("li", {
    children: [/* @__PURE__ */ r(u, {
      ...c,
      children: e
    }), s]
  }) : /* @__PURE__ */ y("li", {
    children: [e, s]
  });
}, kn = ({
  inline: e,
  items: t,
  className: i = "",
  ...s
}) => /* @__PURE__ */ r("ol", {
  className: `nsw-breadcrumb__list ${i}${e ? " nsw-breadcrumb__list--inline" : ""}`,
  ...s,
  children: t.map((o) => /* @__PURE__ */ r(Sn, {
    ...o
  }, o.text))
}), Tt = un(({
  linkComponent: e = "button",
  link: t,
  children: i,
  style: s = "dark",
  type: o = "button",
  block: c,
  className: u = "",
  ...l
}, d) => {
  if (t) {
    const f = e;
    return f === "a" ? l.href = t || l.href : typeof f == "function" && (l.to = t), /* @__PURE__ */ r(f, {
      ref: d,
      className: `nsw-button ${u} nsw-button--${s}${c ? " nsw-button--block" : ""}`,
      ...l,
      children: i
    });
  }
  return /* @__PURE__ */ r("button", {
    ref: d,
    type: o,
    className: `nsw-button ${u} nsw-button--${s}${c ? " nsw-button--block" : ""}`,
    ...l,
    children: i
  });
}), On = ({
  title: e,
  level: t = 4,
  children: i,
  className: s = "",
  ...o
}) => {
  const c = `h${t}`;
  return /* @__PURE__ */ r("div", {
    className: `nsw-callout ${s}`,
    ...o,
    children: /* @__PURE__ */ y("div", {
      className: "nsw-callout__content",
      children: [/* @__PURE__ */ r(c, {
        className: "nsw-callout__title",
        children: e
      }), i]
    })
  });
};
On.propTypes = {
  title: a.exports.string.isRequired,
  level: a.exports.number,
  children: a.exports.node.isRequired,
  className: a.exports.string
};
const Et = ({
  link: e,
  linkTarget: t,
  style: i = "white",
  headline: s,
  highlight: o,
  tag: c,
  date: u,
  image: l,
  imageAlt: d,
  className: f = "",
  children: v,
  linkComponent: x = "a",
  ...w
}) => {
  const {
    href: T,
    target: F,
    ...M
  } = w;
  let W = "div";
  e !== void 0 && (W = "div");
  const z = () => {
    if (!l)
      return "";
    if (typeof l == "string")
      return /* @__PURE__ */ r(yr, {
        src: l,
        alt: d || ""
      });
    if (typeof l == "function")
      return /* @__PURE__ */ r(yr, {
        alt: d || "",
        children: l
      });
  };
  return /* @__PURE__ */ y(W, {
    className: `nsw-card nsw-card--${i} ${f}${s && !v ? "nsw-card--headline" : ""} ${o ? "nsw-card--highlight" : ""} `,
    ...M,
    children: [z(), /* @__PURE__ */ y(Pn, {
      children: [c ? /* @__PURE__ */ r(An, {
        children: c
      }) : "", u ? /* @__PURE__ */ r(Mn, {
        date: u
      }) : "", s ? /* @__PURE__ */ r(jn, {
        link: e,
        linkTarget: t,
        linkComponent: x,
        children: s
      }) : "", v]
    })]
  });
}, Pn = ({
  className: e,
  children: t,
  ...i
}) => /* @__PURE__ */ y("div", {
  className: `nsw-card__content ${e}`,
  ...i,
  children: [t, /* @__PURE__ */ r("span", {
    className: "material-icons nsw-material-icons nsw-card__icon",
    "aria-hidden": "true",
    children: "east"
  })]
}), jn = ({
  className: e = "",
  link: t,
  linkComponent: i = "a",
  linkTarget: s,
  children: o
}) => {
  const c = "div";
  return t !== void 0 ? /* @__PURE__ */ r(c, {
    className: `nsw-card__title ${e}`,
    children: /* @__PURE__ */ r(i, {
      href: t,
      target: s,
      className: "nsw-card__link",
      children: o
    })
  }) : /* @__PURE__ */ r(c, {
    className: "nsw-card__title",
    children: o
  });
}, yr = ({
  src: e,
  className: t = "",
  alt: i = "",
  children: s,
  ...o
}) => /* @__PURE__ */ r("div", {
  className: "nsw-card__image",
  children: s || /* @__PURE__ */ r("img", {
    className: t,
    src: e,
    alt: i,
    ...o
  })
}), Rt = ({
  src: e,
  children: t,
  className: i = "",
  ...s
}) => /* @__PURE__ */ r("div", {
  className: `nsw-card__copy ${i}`,
  ...s,
  children: t
}), An = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("p", {
  className: `nsw-card__tag ${t}`,
  ...i,
  children: e
}), Mn = ({
  className: e = "",
  date: t,
  ...i
}) => /* @__PURE__ */ r("p", {
  className: `nsw-card__date ${e}`,
  ...i,
  children: /* @__PURE__ */ r("time", {
    dateTime: t,
    children: t
  })
}), qn = ({
  links: e,
  mainLink: t,
  headline: i,
  copy: s,
  image: o,
  imageAlt: c,
  icon: u,
  className: l = ""
}) => /* @__PURE__ */ y("div", {
  className: `nsw-content-block ${l}`,
  children: [o ? /* @__PURE__ */ r(Er, {
    src: o,
    imageAlt: c || ""
  }) : "", u ? /* @__PURE__ */ r(Rr, {
    children: u
  }) : "", /* @__PURE__ */ y("div", {
    className: "nsw-content-block__content",
    children: [i ? /* @__PURE__ */ r(Cr, {
      children: i
    }) : "", s ? /* @__PURE__ */ r(Nr, {
      children: s
    }) : "", /* @__PURE__ */ r("ul", {
      className: "nsw-content-block__list",
      children: e ? e.map((f) => /* @__PURE__ */ r("li", {
        children: /* @__PURE__ */ r("a", {
          href: f.url,
          children: f.text
        })
      }, f.text)) : ""
    }), t ? /* @__PURE__ */ r("div", {
      className: "nsw-content-block__link",
      children: /* @__PURE__ */ r("a", {
        href: t.url,
        children: t.text
      })
    }) : ""]
  })]
});
qn.propTypes = {
  image: a.exports.string,
  imageAlt: a.exports.string,
  headline: a.exports.string.isRequired,
  icon: a.exports.node,
  copy: a.exports.string,
  links: a.exports.arrayOf(a.exports.shape({
    url: a.exports.string,
    text: a.exports.string
  })),
  mainLink: a.exports.shape({
    url: a.exports.string.isRequired,
    text: a.exports.string.isRequired
  }),
  className: a.exports.string
};
const Er = ({
  src: e,
  className: t = "",
  imageAlt: i,
  ...s
}) => /* @__PURE__ */ r("div", {
  className: "nsw-content-block__image",
  children: /* @__PURE__ */ r("img", {
    src: e,
    alt: i,
    className: "nsw-content-block__image",
    ...s
  })
});
Er.propTypes = {
  src: a.exports.string.isRequired,
  imageAlt: a.exports.string,
  className: a.exports.string
};
const Rr = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("div", {
  className: "nsw-content-block__image",
  ...i,
  children: /* @__PURE__ */ r("div", {
    className: "nsw-content-block__icon",
    children: e
  })
});
Rr.propTypes = {
  className: a.exports.string,
  children: a.exports.node
};
const Nr = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("p", {
  className: `nsw-content-block__copy ${t}`,
  ...i,
  children: e
});
Nr.propTypes = {
  className: a.exports.string,
  children: a.exports.node
};
const Cr = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("h2", {
  className: "nsw-content-block__title",
  ...i,
  children: e
});
Cr.propTypes = {
  className: a.exports.string,
  children: a.exports.node
};
const Nt = ({
  footerLinks: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("ul", {
  className: t,
  ...i,
  children: e.map(({
    url: s,
    text: o,
    target: c,
    linkComponent: u = "a",
    ...l
  }, d) => /* @__PURE__ */ r("li", {
    children: /* @__PURE__ */ r(u, {
      ...l,
      href: s,
      target: c,
      children: o
    })
  }, s + o + d))
}), Ct = ({
  heading: e,
  sectionLinks: t,
  className: i = "",
  ...s
}) => /* @__PURE__ */ y("div", {
  className: `nsw-footer__group ${i}`,
  ...s,
  children: [/* @__PURE__ */ r("h3", {
    className: "nsw-footer__heading",
    children: /* @__PURE__ */ r("a", {
      href: e.url,
      children: e.text
    })
  }), /* @__PURE__ */ r("ul", {
    className: "nsw-footer__list",
    children: t.map(({
      url: o,
      text: c,
      target: u,
      linkComponent: l = "a",
      ...d
    }, f) => /* @__PURE__ */ r("li", {
      children: /* @__PURE__ */ r(l, {
        ...d,
        href: o,
        target: u,
        children: c
      })
    }, o + c + f))
  })]
}), $t = ({
  children: e,
  className: t = "",
  ariaLabel: i = "footer",
  ...s
}) => /* @__PURE__ */ r("nav", {
  className: `nsw-footer__upper ${t}`,
  "aria-label": i,
  ...s,
  children: /* @__PURE__ */ r("div", {
    className: "nsw-container",
    children: e
  })
}), St = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("div", {
  className: `nsw-footer__lower ${t}`,
  ...i,
  children: e
}), kt = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("footer", {
  className: `nsw-footer ${t}`,
  ...i,
  role: "contentinfo",
  children: e
});
var $r = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ye;
  function i(w) {
    return w && typeof w == "object" && "default" in w ? w : { default: w };
  }
  var s = /* @__PURE__ */ i(t), o = "id", c = 0;
  function u(w) {
    return c++, "".concat(w || o).concat(c);
  }
  var l = function() {
    c = 0;
  }, d = function(T) {
    o = T;
  }, f = function(T, F) {
    for (var M = [], W = 0; W < T; W++)
      M.push(u(F));
    return M;
  };
  function v(w) {
    var T = s.default.useRef();
    return s.default.useEffect(function() {
      T.current = w;
    }), T.current;
  }
  function x() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, T = arguments.length > 1 ? arguments[1] : void 0, F = s.default.useRef([]), M = v(w), W = v(T);
    return (w !== M || W !== T) && (F.current = f(w, T)), F.current;
  }
  e.default = u, e.resetId = l, e.setPrefix = d, e.useId = x;
})($r);
const ne = /* @__PURE__ */ mn($r), In = ne(), oe = ({
  htmlId: e = In,
  children: t,
  className: i,
  status: s,
  ...o
}) => /* @__PURE__ */ y("span", {
  id: `${s === "invalid" ? "error" : "helper"}${e}`,
  className: `nsw-form__helper ${s === "invalid" ? " nsw-form__helper--error" : ""} ${s === "valid" ? " nsw-form__helper--valid" : ""} ${i}`,
  ...o,
  children: [/* @__PURE__ */ y("span", {
    className: "material-icons nsw-material-icons",
    "aria-hidden": "true",
    children: [s === "invalid" ? "cancel" : "", s === "valid" ? "check_circle" : ""]
  }), t]
});
oe.propTypes = {
  htmlId: a.exports.string,
  children: a.exports.node,
  className: a.exports.string,
  error: a.exports.bool
};
const Fn = ({
  htmlFor: e,
  text: t,
  dark: i,
  inline: s,
  className: o = "",
  isSrOnly: c = !1,
  ...u
}) => /* @__PURE__ */ r("label", {
  htmlFor: e,
  className: c ? "sr-only" : `nsw-form__label ${o}`,
  ...u,
  children: t
}), Sr = ({
  htmlId: e = ne(),
  status: t = "default",
  children: i,
  label: s,
  helper: o,
  statusText: c,
  error: u,
  className: l = "",
  hideLabel: d = !1,
  isInputGroup: f = !1,
  isInputGroupIcon: v = !1,
  ...x
}) => {
  var w;
  return /* @__PURE__ */ r("div", {
    className: `nsw-form__group ${l}`,
    ...x,
    children: /* @__PURE__ */ y("div", {
      className: `${f ? "nsw-form__input-group" : ""} ${v ? "nsw-form__input-group nsw-form__input-group--icon" : ""}`,
      children: [/* @__PURE__ */ r(Fn, {
        htmlFor: e,
        text: s,
        isSrOnly: d
      }), o ? /* @__PURE__ */ r(oe, {
        htmlId: e,
        children: o
      }) : "", (w = ye.Children.map(i, (T) => T ? ye.cloneElement(T, {
        error: u
      }) : null)) == null ? void 0 : w.filter((T) => !!T), t ? /* @__PURE__ */ r(oe, {
        htmlId: e,
        status: t,
        children: c
      }) : ""]
    })
  });
}, Dn = ({
  as: e = "input",
  status: t,
  block: i,
  number: s,
  htmlId: o = "0",
  type: c = "text",
  className: u = "",
  ...l
}) => e === "textarea" ? /* @__PURE__ */ r("textarea", {
  className: `nsw-form__input ${u}${i ? " nsw-form__input--block" : ""}${s ? " nsw-form__input--number" : ""}`,
  "aria-invalid": t === "invalid" ? "true" : "false",
  "aria-describedby": t === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  id: o,
  ...l
}) : /* @__PURE__ */ r("input", {
  className: `nsw-form__input ${u}${i ? " nsw-form__input--block" : ""}${s ? " nsw-form__input--number" : ""}`,
  "aria-invalid": t === "invalid" ? "true" : "false",
  "aria-describedby": t === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  type: c,
  ...l,
  id: o
}), Ot = ({
  status: e = "default",
  className: t = "",
  inputType: i,
  statusText: s,
  label: o,
  helper: c,
  htmlId: u = ne(),
  as: l,
  children: d,
  isInputGroup: f = !1,
  isInputGroupIcon: v = !1,
  hideLabel: x,
  ...w
}) => /* @__PURE__ */ y(Sr, {
  className: t,
  status: e,
  statusText: s,
  label: o,
  helper: c,
  htmlId: u,
  isInputGroup: f,
  isInputGroupIcon: v,
  hideLabel: x,
  children: [/* @__PURE__ */ r(Dn, {
    ...w,
    as: l,
    status: e,
    htmlId: u,
    type: i
  }), d]
}), Ln = ne(), kr = ({
  text: e,
  value: t
}) => /* @__PURE__ */ r("option", {
  value: t,
  children: e
});
kr.propTypes = {
  text: a.exports.string.isRequired,
  value: a.exports.string.isRequired
};
const Or = ({
  htmlId: e,
  selected: t,
  options: i,
  block: s,
  status: o = "default",
  className: c = "",
  placeholder: u,
  ...l
}) => /* @__PURE__ */ y("select", {
  className: `nsw-form__select ${c}`,
  "aria-invalid": o === "invalid" ? "true" : void 0,
  "aria-describedby": o === "invalid" ? `helper${e} error${e}` : `helper${e}`,
  id: e,
  defaultValue: t,
  ...l,
  children: [!!u && /* @__PURE__ */ r("option", {
    value: "",
    children: u
  }), i.map((d) => /* @__PURE__ */ r(kr, {
    ...d
  }, d.value))]
});
Or.propTypes = {
  options: a.exports.arrayOf(a.exports.shape({
    value: a.exports.string.isRequired,
    text: a.exports.string.isRequired
  })).isRequired,
  block: a.exports.bool,
  htmlId: a.exports.string,
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  selected: a.exports.string,
  className: a.exports.string
};
const Wn = ({
  status: e = "default",
  selected: t,
  statusText: i,
  label: s,
  helper: o,
  options: c,
  htmlId: u = Ln,
  placeholder: l = "Please select",
  hideLabel: d,
  ...f
}) => /* @__PURE__ */ r(Sr, {
  status: e,
  statusText: i,
  label: s,
  helper: o,
  htmlId: u,
  hideLabel: d,
  children: /* @__PURE__ */ r(Or, {
    ...f,
    options: c,
    selected: t,
    placeholder: l
  })
});
Wn.propTypes = {
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  statusText: a.exports.string,
  label: a.exports.string,
  helper: a.exports.string,
  selected: a.exports.string,
  options: a.exports.arrayOf(a.exports.shape({
    value: a.exports.string.isRequired,
    text: a.exports.string.isRequired
  })).isRequired,
  htmlId: a.exports.string
};
const Pr = ({
  text: e,
  htmlId: t,
  value: i,
  status: s,
  as: o,
  uniqueID: c = ne(),
  ...u
}) => /* @__PURE__ */ y(Be, {
  children: [/* @__PURE__ */ r("input", {
    className: "nsw-form__checkbox-input",
    type: "checkbox",
    name: t,
    "aria-invalid": s === "invalid" && o !== "group" ? "true" : void 0,
    "aria-describedby": s === "invalid" ? `helper${t} error${t}` : `helper${t}`,
    id: c,
    ...u
  }), /* @__PURE__ */ r("label", {
    className: "nsw-form__checkbox-label",
    htmlFor: c,
    children: e
  })]
});
Pr.propTypes = {
  text: a.exports.string.isRequired,
  value: a.exports.string.isRequired,
  className: a.exports.string,
  htmlId: a.exports.string,
  uniqueID: a.exports.func,
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  as: a.exports.string
};
const Yn = ({
  className: e = "",
  as: t,
  status: i = "default",
  label: s,
  options: o,
  htmlId: c = ne(),
  statusText: u,
  helper: l
}) => /* @__PURE__ */ r("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ y("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": i === "invalid" ? "true" : void 0,
    children: [t === "group" ? /* @__PURE__ */ y("legend", {
      children: [/* @__PURE__ */ r("span", {
        className: "nsw-form__legend",
        children: s
      }), l ? /* @__PURE__ */ r(oe, {
        htmlId: c,
        children: l
      }) : "", i ? /* @__PURE__ */ r(oe, {
        htmlId: c,
        status: i,
        children: u
      }) : ""]
    }) : "", /* @__PURE__ */ r("div", {
      children: o.map((d) => /* @__PURE__ */ r(Pr, {
        ...d,
        as: t,
        htmlId: c,
        status: i
      }, d.value))
    }), i && t !== "group" ? /* @__PURE__ */ r(oe, {
      htmlId: c,
      status: i,
      children: u
    }) : ""]
  })
});
Yn.propTypes = {
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  statusText: a.exports.string,
  htmlId: a.exports.string,
  label: a.exports.string,
  as: a.exports.oneOf(["group", !1]),
  helper: a.exports.string,
  options: a.exports.arrayOf(a.exports.shape({
    value: a.exports.string,
    text: a.exports.string
  })).isRequired,
  className: a.exports.string
};
const jr = ({
  text: e,
  htmlId: t,
  value: i,
  status: s,
  uniqueID: o = ne(),
  ...c
}) => /* @__PURE__ */ y(ye.Fragment, {
  children: [/* @__PURE__ */ r("input", {
    className: "nsw-form__radio-input",
    type: "radio",
    name: t,
    "aria-describedby": s === "invalid" ? `helper${t} error${t}` : `helper${t}`,
    id: o,
    ...c
  }), /* @__PURE__ */ r("label", {
    className: "nsw-form__radio-label",
    htmlFor: o,
    children: e
  })]
});
jr.propTypes = {
  text: a.exports.string.isRequired,
  value: a.exports.string.isRequired,
  className: a.exports.string,
  htmlId: a.exports.string,
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  as: a.exports.string,
  uniqueID: a.exports.func
};
const zn = ({
  className: e = "",
  as: t = "group",
  label: i,
  helper: s,
  status: o = "default",
  htmlId: c,
  statusText: u,
  options: l
}) => /* @__PURE__ */ r("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ y("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": o === "invalid" ? "true" : void 0,
    children: [t === "group" ? /* @__PURE__ */ y("legend", {
      children: [/* @__PURE__ */ r("span", {
        className: "nsw-form__legend",
        children: i
      }), s ? /* @__PURE__ */ r(oe, {
        htmlId: c,
        children: s
      }) : "", o ? /* @__PURE__ */ r(oe, {
        htmlId: c,
        status: o,
        children: u
      }) : ""]
    }) : "", /* @__PURE__ */ r("div", {
      children: l.map((d) => /* @__PURE__ */ r(jr, {
        ...d,
        htmlId: c,
        status: o
      }, d.value))
    }), o && t !== "group" ? /* @__PURE__ */ r(oe, {
      htmlId: c,
      status: o,
      children: u
    }) : ""]
  })
});
zn.propTypes = {
  status: a.exports.oneOf(["valid", "invalid", "default"]),
  statusText: a.exports.string,
  htmlId: a.exports.string,
  label: a.exports.string,
  as: a.exports.oneOf(["group", !1]),
  helper: a.exports.string,
  options: a.exports.arrayOf(a.exports.shape({
    value: a.exports.string,
    text: a.exports.string
  })).isRequired,
  className: a.exports.string
};
const Bn = ({
  step: e,
  of: t,
  ...i
}) => /* @__PURE__ */ y("div", {
  className: "nsw-progress-indicator",
  ...i,
  children: [/* @__PURE__ */ y("div", {
    className: "nsw-progress-indicator__count",
    children: ["Step ", e, " of ", t]
  }), /* @__PURE__ */ r("div", {
    className: "nsw-progress-indicator__bar",
    children: [...Array(t)].fill(void 0).map((s, o) => o + 1 <= e ? /* @__PURE__ */ r(We, {
      active: !0
    }, o) : /* @__PURE__ */ r(We, {}, o))
  })]
});
Bn.propTypes = {
  step: a.exports.number.isRequired,
  of: a.exports.number.isRequired
};
const We = ({
  active: e
}) => /* @__PURE__ */ r("div", {
  className: `${e ? "active" : ""}`
});
We.propTypes = {
  active: a.exports.bool
};
const Hn = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
  default: ""
}, gr = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark"
}, Un = (e) => {
  const {
    title: t,
    content: i,
    ctaText: s,
    ctaHref: o,
    as: c = "default",
    className: u = "",
    children: l,
    ...d
  } = e, f = Re(null);
  return ge(() => {
    (async () => {
      const {
        GlobalAlert: v
      } = await import("./main.ca35e5ee.js");
      new v(f.current).init();
    })();
  }, []), /* @__PURE__ */ r("div", {
    ref: f,
    className: `nsw-global-alert ${u} ${Hn[c]}`,
    ...d,
    children: /* @__PURE__ */ y("div", {
      className: "nsw-global-alert__wrapper",
      children: [/* @__PURE__ */ y("div", {
        className: "nsw-global-alert__content",
        children: [/* @__PURE__ */ r("div", {
          className: "nsw-global-alert__title",
          children: t
        }), /* @__PURE__ */ r("p", {
          children: i
        })]
      }), /* @__PURE__ */ r("p", {
        children: s && o ? /* @__PURE__ */ r("a", {
          href: o,
          className: c ? gr[c] : gr.default,
          children: s
        }) : ""
      }), /* @__PURE__ */ y("button", {
        type: "button",
        className: "nsw-icon-button js-close-alert",
        children: [/* @__PURE__ */ r("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ r("span", {
          className: "sr-only",
          children: "Close message"
        })]
      })]
    })
  });
};
Un.propTypes = {
  title: a.exports.string.isRequired,
  content: a.exports.string.isRequired,
  children: a.exports.node,
  ctaText: a.exports.string,
  ctaHref: a.exports.string,
  className: a.exports.string,
  as: a.exports.oneOf(["critical", "light", "default"])
};
const Pt = (e) => {
  const {
    siteTitle: t,
    siteDescriptor: i,
    logo: s,
    headerUrl: o,
    linkComponent: c = "a",
    mobile: u = !0,
    search: l = !0,
    onSubmit: d,
    ...f
  } = e, v = Re(null), x = Re(null);
  return ge(() => {
    (async () => {
      const {
        SiteSearch: w
      } = await import("./main.ca35e5ee.js");
      l && (new w(v.current).init(), new w(x.current).init());
    })();
  }, []), /* @__PURE__ */ r(Be, {
    children: /* @__PURE__ */ r("header", {
      className: "nsw-header",
      ...f,
      children: /* @__PURE__ */ y("div", {
        className: "nsw-header__container",
        children: [/* @__PURE__ */ y("div", {
          className: "nsw-header__inner",
          children: [/* @__PURE__ */ y("div", {
            className: "nsw-header__main",
            children: [/* @__PURE__ */ r("div", {
              className: "nsw-header__waratah",
              children: /* @__PURE__ */ y(c, {
                href: o,
                className: "nsw-header__logo-link",
                children: [/* @__PURE__ */ y("svg", {
                  viewBox: "0 0 295 311",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ r("path", {
                    d: "M79.625 241.435l-45.77-53.754H14.46v84.124h18.893V218.18l45.64 53.625h19.514v-84.124H79.625v53.754zm181.333-53.734l-12.538 53.834-13.149-53.854h-18.093l-13.379 53.254-12.148-53.244h-19.773l21.885 84.054h19.463l12.838-53.205 13.009 53.205h19.113l.19-.721 22.015-83.383-19.433.06zM12.447 297.571a13.258 13.258 0 0113.4-13.498 14.067 14.067 0 0110.005 3.492l-2.901 3.462a10.208 10.208 0 00-7.295-2.792c-4.793 0-8.445 4.203-8.445 9.186v.15c0 5.354 3.532 9.296 8.855 9.296a10.588 10.588 0 006.284-2.001v-4.873h-6.624v-4.003h11.127v10.937a16.607 16.607 0 01-10.867 4.063c-8.145 0-13.498-5.804-13.498-13.389M39.578 297.571a13.62 13.62 0 0113.575-13.291 13.617 13.617 0 0113.653 13.211v.08a13.616 13.616 0 01-13.58 13.287 13.617 13.617 0 01-13.648-13.217v-.07zm22.434.07v-.07c0-5.063-3.682-9.266-8.855-9.266s-8.776 4.123-8.776 9.186v.08c0 5.064 3.683 9.256 8.846 9.256s8.786-4.132 8.786-9.186M66.477 284.513h5.063l7.845 20.013 7.815-20.013h4.943L81.316 310.74h-4.013l-10.826-26.227zM95.223 284.513h19.312v4.093h-14.73v6.774h13.059v4.083H99.806v6.994h14.919v4.093H95.223v-26.037zM119.161 284.563h11.597a10.503 10.503 0 017.515 2.602 7.841 7.841 0 012.151 5.613v.08c0 4.273-2.561 6.845-6.204 7.885l7.005 9.857h-5.394l-6.394-9.076h-5.723v9.056h-4.573l.02-26.017zm11.267 12.908c3.272 0 5.353-1.711 5.353-4.352v-.07c0-2.792-2.001-4.313-5.393-4.313h-6.654v8.745l6.694-.01zM144.477 284.513h4.222l13.959 17.992v-17.992h4.503v26.037h-3.842l-14.35-18.532v18.532h-4.492v-26.037zM171.805 284.513h4.873l7.915 12.308 7.925-12.308h4.873v26.037h-4.573v-18.672l-8.225 12.268h-.15l-8.135-12.198v18.602h-4.503v-26.037zM201.758 284.513h19.302v4.093h-14.729v6.774h13.058v4.083h-13.058v6.994h14.919v4.093h-19.492v-26.037zM225.754 284.513h4.243l13.949 17.992v-17.992h4.502v26.037h-3.832l-14.359-18.532v18.532h-4.503v-26.037zM260.326 288.756h-8.256v-4.243h21.124v4.243h-8.255v21.794h-4.613v-21.794zM103.699 260.097l11.108-13.308c7.695 6.344 15.75 10.376 25.517 10.376 7.695 0 12.338-3.052 12.338-8.055v-.25c0-4.763-2.932-7.205-17.221-10.867-17.212-4.393-28.319-9.156-28.319-26.127v-.24c0-15.5 12.458-25.756 29.92-25.756a49.51 49.51 0 0131.741 10.867l-9.766 14.159c-7.575-5.254-15.01-8.426-22.235-8.426s-11.008 3.292-11.008 7.445v.24c0 5.614 3.653 7.445 18.433 11.227 17.341 4.513 27.108 10.747 27.108 25.637v.24c0 17.011-12.939 26.497-31.381 26.497a54.394 54.394 0 01-36.235-13.659z",
                    fill: "#002664"
                  }), /* @__PURE__ */ r("path", {
                    d: "M295.031 128.903c-.07-3.883-3.062-6.474-4.773-7.915-1.711-1.441-9.687-7.225-24.627-15.9 1.151-1.501 1.651-2.302 2.742-3.843 5.394-7.605 10.327-15.47 12.709-24.576.6-2.291 1.661-7.204.75-9.726a9.513 9.513 0 00-6.564-5.744c-6.385-1.73-29.38-.32-31.242-.15.198-9.92-.691-19.832-2.651-29.559-.631-2.571-1.732-6.514-4.553-7.685-4.924-1.94-10.337.74-14.69 2.742-5.934 2.732-10.327 4.913-16.672 8.195-2.912-10.296-6.004-20.012-7.004-22.444-.781-1.791-1.932-5.003-5.374-5.714-3.442-.71-5.434.73-7.165 1.791-3.002 1.862-16.221 11.198-20.604 14.83-3.002-4.923-4.783-8.405-7.615-12.878-1.091-1.721-3.923-6.384-6.004-8.446a5.449 5.449 0 00-4.133-1.895 5.45 5.45 0 00-4.133 1.895c-2.051 2.072-4.883 6.725-6.004 8.446-2.822 4.473-4.643 7.945-7.615 12.878-4.383-3.632-17.572-13.008-20.604-14.83-1.731-1.06-3.662-2.461-7.165-1.79-3.502.67-4.593 3.922-5.374 5.713-1.07 2.451-4.142 12.148-7.004 22.444-6.345-3.282-10.758-5.473-16.692-8.205-4.352-2.001-9.746-4.673-14.67-2.732-2.821 1.171-3.922 5.114-4.552 7.685a135.921 135.921 0 00-2.652 29.56c-1.852-.17-24.847-1.582-31.241.15a9.515 9.515 0 00-6.565 5.743c-.92 2.512.14 7.425.75 9.726 2.382 9.106 7.316 17.011 12.71 24.576 1.1 1.551 1.59 2.342 2.741 3.843-14.95 8.675-22.916 14.469-24.627 15.9-1.71 1.431-4.703 4.002-4.773 7.915a7.773 7.773 0 001.721 5.343c2.862 4.003 18.723 19.263 54.267 24.706-6.094 4.443-4.873 10.007-4.003 12.188.71 1.751 2.432 3.773 5.904 5.674 5.574 3.062 12.489 3.772 18.363 3.882 8.425.16 17.291-1.611 25.527-3.282 7.865-1.601 16.081-4.833 24.116-5.213a113.44 113.44 0 0114.09.25c1.651.13 3.783.39 7.525.39 3.322 0 5.794-.27 7.425-.4a113.44 113.44 0 0114.09-.25c8.005.38 16.261 3.612 24.116 5.213 8.236 1.671 17.102 3.442 25.527 3.282 5.874-.11 12.789-.82 18.363-3.882 3.472-1.901 5.193-3.933 5.904-5.674.9-2.221 2.121-7.745-4.003-12.188 35.544-5.443 51.415-20.683 54.267-24.706a7.772 7.772 0 001.741-5.333z",
                    fill: "#fff"
                  }), /* @__PURE__ */ r("path", {
                    d: "M201.896 52.704a224.13 224.13 0 014.513 43.028c0 14.769-1.802 27.878-5.334 38.975a48.033 48.033 0 01-16.731 23.735c15.2-.49 28.829-9.936 38.476-26.727 12.568-22.014 15.25-49.602 15.65-69.795.451-23.015-1.27-28.418-1.941-30.64-.67-2.221-1.591-3.132-3.572-3.092-3.873.07-20.224 7.365-35.514 18.292 2.201 1.12 3.702 3.092 4.453 6.224z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ r("path", {
                    d: "M160.308 161.484c10.867-.23 28.799-9.006 35.023-28.709 3.323-10.326 4.473-20.613 5.004-37.114a184.739 184.739 0 00-3.613-39.935c-.31-1.461-.85-3.733-2.682-4.103-1.831-.37-3.402 1.541-4.463 2.442-1.06.9-27.638 24.155-39.236 52.894-2.122 5.954-5.834 12.078-5.954 30.469 0 6.625.61 14.009 3.922 18.192a14.067 14.067 0 0011.999 5.864zM200.405 37.264c-3.002-13.729-5.834-23.085-5.864-23.135-.631-1.67-1.521-2.952-2.832-3.172-1.481-.25-2.382.15-3.833 1.21-1.881 1.372-15.1 11.818-19.423 15.39 4.433 8.216 8.006 18.433 10.898 26.568 6.534-5.143 10.457-9.716 21.054-16.861zM276.927 71.626a7.264 7.264 0 00-.631-4.213c-.85-1.24-1.931-1.82-4.613-2.161-5.373-.67-27.679 1.43-27.679 1.43a196.129 196.129 0 01-2.371 26.758c6.454 2.462 12.498 5.003 19.223 8.305 13.159-16.53 15.801-27.127 16.071-30.119zM289.075 128.993c-.1-2.181-1.101-4.003-4.663-6.364a220.104 220.104 0 00-43.87-23.015c-2.682 13.509-6.885 25.336-12.489 35.133-5.774 10.146-13.239 18.111-21.744 23.235 25.687-1.742 47.262-5.724 62.802-13.219 17.742-8.605 20.094-12.918 19.964-15.77zM232.389 162.074c-4.263.12-7.565.821-14.66 2.002a75.693 75.693 0 01-15.43 1.11c-3.093-.08-10.007-.15-10.007-.15-3.232-.07-6.905-.16-10.577-.16-7.646 0-17.532.31-26.218 2.732-.46.14-1.001.29-.951.82.05.531.731.431 1.401.441.671.01 7.065-.441 10.207-.441 11.368 0 19.133 2.002 26.638 3.863 7.055 1.781 13.729 3.472 23.016 3.472 9.776 0 18.242-1.251 21.394-4.743a6.086 6.086 0 001.561-5.333c-.77-2.522-2.531-3.703-6.374-3.613zM72.178 131.685c9.646 16.78 23.276 26.226 38.476 26.727a48.032 48.032 0 01-16.761-23.745c-3.533-11.098-5.334-24.206-5.334-38.975a224.05 224.05 0 014.513-43.028c.74-3.132 2.251-5.103 4.443-6.254-15.46-11.447-31.641-18.182-35.474-18.252-2.001 0-2.902.85-3.572 3.092-.67 2.242-2.392 7.655-1.942 30.64.39 20.193 3.082 47.801 15.65 69.795z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ r("path", {
                    d: "M105.422 54.115c-1.071-.9-2.762-2.782-4.463-2.442-1.701.34-2.372 2.632-2.682 4.103a184.763 184.763 0 00-3.612 39.936c.53 16.49 1.68 26.787 5.003 37.113 6.224 19.723 24.356 28.589 35.254 28.589a17.753 17.753 0 006.094-1.091 14.002 14.002 0 002.712-1.471 22.314 22.314 0 01-2.162-3.642c-2.121-4.413-3.202-9.776-3.252-16.401a83.598 83.598 0 016.454-32.561c-11.577-28.758-38.285-51.233-39.346-52.133zM147.501 97.633c7.685-15.91 19.013-29.019 27.439-37.474-5.284-19.453-20.474-47.15-25.237-53.915-.691-1-1.241-1.641-2.232-1.641-.991 0-1.481.65-2.171 1.641-4.764 6.764-19.954 34.452-25.238 53.915 8.456 8.455 19.754 21.563 27.439 37.474zM126.545 27.558c-4.323-3.583-17.541-14.01-19.423-15.39-1.451-1.06-2.351-1.451-3.832-1.211-1.301.22-2.192 1.491-2.832 3.172 0 .06-2.872 9.406-5.864 23.135 10.597 7.164 14.52 11.727 21.014 16.87 2.952-8.145 6.504-18.371 10.937-26.576zM34.132 101.745c6.724-3.302 12.729-5.843 19.223-8.305a196.24 196.24 0 01-2.372-26.757s-22.305-2.101-27.678-1.431c-2.682.33-3.763.92-4.614 2.161a7.264 7.264 0 00-.63 4.213c.28 2.992 2.972 13.589 16.07 30.119zM66.944 134.707c-5.604-9.807-9.796-21.624-12.488-35.133a220.083 220.083 0 00-43.87 23.015c-3.562 2.381-4.573 4.173-4.663 6.364-.13 2.852 2.221 7.165 20.013 15.72 15.531 7.495 37.116 11.477 62.803 13.219-8.546-5.074-16.02-13.039-21.795-23.185zM139.524 167.608c-8.696-2.422-18.572-2.732-26.217-2.732-3.673 0-7.335.08-10.578.16 0 0-6.924.07-10.006.15a75.693 75.693 0 01-15.43-1.11c-7.096-1.181-10.398-1.882-14.66-2.002-3.843-.09-5.635 1.091-6.345 3.593A6.093 6.093 0 0057.849 171c3.152 3.492 11.618 4.743 21.395 4.743 9.266 0 15.94-1.681 23.015-3.472 7.505-1.901 15.27-3.863 26.638-3.863 3.142 0 9.527.451 10.207.441.68-.01 1.351 0 1.401-.441.05-.44-.52-.66-.981-.8z",
                    fill: "#D7153A"
                  })]
                }), /* @__PURE__ */ r("span", {
                  className: "sr-only",
                  children: "NSW Government"
                })]
              })
            }), s ? /* @__PURE__ */ y("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ r("img", {
                src: s,
                alt: t + "logo"
              }), /* @__PURE__ */ r("span", {
                className: "sr-only",
                children: t
              }), /* @__PURE__ */ r("span", {
                className: "sr-only",
                children: i
              })]
            }) : /* @__PURE__ */ y("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ r("div", {
                className: "nsw-header__title",
                children: t
              }), /* @__PURE__ */ r("div", {
                className: "nsw-header__description",
                children: i
              })]
            })]
          }), u ? /* @__PURE__ */ r("div", {
            className: "nsw-header__menu",
            children: /* @__PURE__ */ y("button", {
              type: "button",
              className: "js-open-nav",
              "aria-expanded": "false",
              "aria-controls": "main-nav",
              children: [/* @__PURE__ */ r("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "menu"
              }), /* @__PURE__ */ y("span", {
                children: [/* @__PURE__ */ r("span", {
                  className: "sr-only",
                  children: "Open"
                }), " ", "Menu"]
              })]
            })
          }) : "", l ? /* @__PURE__ */ r("div", {
            className: "nsw-header__search",
            children: /* @__PURE__ */ y("button", {
              ref: v,
              type: "button",
              className: "js-open-search",
              "aria-expanded": "false",
              "aria-controls": "header-search",
              children: [/* @__PURE__ */ r("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              }), /* @__PURE__ */ y("span", {
                className: "nsw-header-btn__sub",
                children: [/* @__PURE__ */ r("span", {
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
            onSubmit: d,
            children: [/* @__PURE__ */ r("label", {
              htmlFor: "nsw-header-input",
              className: "sr-only",
              children: "Search site for:"
            }), /* @__PURE__ */ r("input", {
              autoComplete: "off",
              className: "nsw-header__input js-search-input",
              id: "nsw-header-input",
              name: "searchInput",
              type: "text"
            }), /* @__PURE__ */ r("button", {
              className: "nsw-icon-button nsw-icon-button--flex",
              type: "submit",
              "aria-label": "search",
              children: /* @__PURE__ */ r("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              })
            })]
          }), /* @__PURE__ */ y("button", {
            ref: x,
            className: "nsw-icon-button js-close-search",
            "aria-expanded": "true",
            "aria-controls": "header-search",
            children: [/* @__PURE__ */ r("span", {
              className: "material-icons nsw-material-icons nsw-search__close-icon",
              "aria-hidden": "true",
              children: "close"
            }), /* @__PURE__ */ r("span", {
              className: "sr-only",
              children: "Close search"
            })]
          })]
        }) : ""]
      })
    })
  });
}, Vn = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white"
}, Gn = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark"
}, Jn = (e) => e ? typeof e != "number" && typeof e != "string" && typeof e != "boolean" && "src" in e ? /* @__PURE__ */ r("img", {
  className: "nsw-hero-banner__image",
  src: e.src,
  alt: e.alt
}) : e : /* @__PURE__ */ r("div", {
  className: "nsw-hero-banner__bg"
}), jt = ({
  title: e = "Hero Banner",
  intro: t,
  cta: i,
  style: s = "white",
  wide: o,
  featured: c,
  image: u,
  children: l,
  className: d = "",
  ...f
}) => /* @__PURE__ */ r("div", {
  className: `nsw-hero-banner ${s ? Vn[s] : ""} ${o ? "nsw-hero-banner--wide" : ""} ${c ? " nsw-hero-banner--featured" : ""}  ${d}`,
  ...f,
  children: /* @__PURE__ */ r("div", {
    className: "nsw-hero-banner__container",
    children: /* @__PURE__ */ y("div", {
      className: "nsw-hero-banner__wrapper",
      children: [/* @__PURE__ */ y("div", {
        className: "nsw-hero-banner__content nsw-wysiwyg-content",
        children: [/* @__PURE__ */ r("h1", {
          children: e
        }), /* @__PURE__ */ r("div", {
          className: "nsw-intro",
          children: t
        }), i ? /* @__PURE__ */ r("div", {
          className: "nsw-hero-banner__button",
          children: /* @__PURE__ */ r("a", {
            href: i.url,
            className: `nsw-button ${Gn[s]}`,
            onClick: i.onClick,
            children: i.text
          })
        }) : ""]
      }), l, /* @__PURE__ */ r("div", {
        className: "nsw-hero-banner__box",
        role: "presentation",
        children: Jn(u)
      })]
    })
  })
}), Kn = ({
  subtitle: e,
  children: t
}) => /* @__PURE__ */ r("div", {
  className: "nsw-hero-banner__links",
  children: /* @__PURE__ */ y("div", {
    className: "nsw-hero-banner__list",
    children: [/* @__PURE__ */ r("div", {
      className: "nsw-hero-banner__sub-title",
      children: e
    }), t]
  })
});
Kn.propTypes = {
  subtitle: a.exports.string.isRequired,
  children: a.exports.node.isRequired
};
const Ar = ({
  url: e,
  title: t,
  ...i
}) => /* @__PURE__ */ r("li", {
  children: /* @__PURE__ */ r("a", {
    href: `${e}`,
    ...i,
    children: t
  })
});
Ar.propTypes = {
  url: a.exports.string,
  title: a.exports.string
};
const At = ({
  title: e,
  links: t,
  ariaLabel: i = "in page navigation",
  className: s = "",
  ...o
}) => /* @__PURE__ */ y("nav", {
  className: `nsw-in-page-nav ${s}`,
  "aria-labelledby": i,
  ...o,
  children: [/* @__PURE__ */ r("div", {
    id: i,
    className: "nsw-in-page-nav__title",
    children: e
  }), /* @__PURE__ */ r("ul", {
    children: t ? t.map((c) => /* @__PURE__ */ dn(Ar, {
      ...c,
      key: c.title
    })) : ""
  })]
}), Qn = ({
  text: e,
  link: t,
  linkComponent: i = "a",
  children: s,
  onClick: o,
  ...c
}) => {
  const u = i;
  return typeof o == "function" && (c.onClick = o, t || (t = "#")), u === "a" ? (c.href = t, c.rel = (c == null ? void 0 : c.target) === "_blank" ? "nofollow noopener" : void 0) : typeof u == "function" && (c.to = t), t ? /* @__PURE__ */ y("li", {
    className: "nsw-link-list__item",
    children: [/* @__PURE__ */ y(u, {
      ...c,
      children: [/* @__PURE__ */ r("span", {
        children: e
      }), /* @__PURE__ */ r("span", {
        className: "material-icons nsw-material-icons nsw-link-list__icon",
        "aria-hidden": "true",
        children: "east"
      })]
    }), s]
  }) : /* @__PURE__ */ y("li", {
    className: "nsw-link-list__item",
    children: [e, s]
  });
}, Mt = ({
  items: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("div", {
  className: "nsw-link-list",
  children: /* @__PURE__ */ r("ul", {
    className: `nsw-link-list__list ${t}`,
    ...i,
    children: e.map((s, o) => /* @__PURE__ */ r(Qn, {
      ...s
    }, s.href || "" + o))
  })
}), Xn = (e) => {
  const t = Object.keys(e).sort((i, s) => e[s] - e[i]);
  return t.map((i, s) => {
    let o = "";
    const c = e[i], u = t[s - 1], l = u ? e[u] : null;
    return c >= 0 && (o = `(min-width: ${c}px)`), l !== null && (o && (o += " and "), o += `(max-width: ${l - 1}px)`), {
      breakpoint: i,
      maxWidth: l ? l - 1 : null,
      minWidth: c,
      query: o
    };
  });
}, Zn = Xn, et = typeof window > "u" ? ge : fn, rt = et, nt = {
  breakpoint: void 0,
  minWidth: void 0,
  maxWidth: void 0
}, tt = (e, t, i = !0) => {
  const s = pn(() => Zn(e), [e]), [o, c] = _r(() => {
    for (const { query: l, ...d } of s)
      if (typeof window < "u" && !(t && i)) {
        if (window.matchMedia(l).matches)
          return d;
      } else if (d.breakpoint === t)
        return d;
    return nt;
  }), u = hn(({ matches: l }, d) => {
    l && c(d);
  }, []);
  return rt(() => {
    const l = s.map(({ query: d, ...f }) => {
      const v = window.matchMedia(d);
      u(v, f);
      const x = (w) => {
        u(w, f);
      };
      return v.addListener(x), () => v.removeListener(x);
    });
    return () => l.forEach((d) => d());
  }, [s, u]), vn(o, (l) => typeof l.breakpoint == "string" ? `${l.breakpoint} (${l.minWidth} \u2264 x${l.maxWidth ? ` < ${l.maxWidth + 1}` : ""})` : ""), o;
}, at = tt, st = {
  mobile: 0,
  tablet: 992
}, qt = (e) => {
  const {
    navItems: t,
    megaMenu: i,
    className: s = "",
    isCloseWhenOutsideClick: o = !0,
    ...c
  } = e, {
    breakpoint: u
  } = at(st, "mobile"), l = Re(null), d = () => {
    var v;
    const f = (v = l.current) == null ? void 0 : v.querySelector("ul > li > a.active");
    return f && f.click(), f;
  };
  return ge(() => {
    (async () => {
      const {
        Navigation: f
      } = await import("./main.ca35e5ee.js");
      new f().init();
    })();
  }, []), ge(() => {
    if (o && u !== "mobile") {
      const f = (v) => {
        v.target.closest(".nsw-main-nav__list") || d();
      };
      return document.addEventListener("click", f), () => {
        document.removeEventListener("click", f);
      };
    }
  }, [o, u]), /* @__PURE__ */ y("nav", {
    id: "main-nav",
    className: `nsw-main-nav ${s} ${i ? "js-mega-menu" : ""}`,
    "aria-label": "Main Navigation",
    ...c,
    children: [/* @__PURE__ */ y("div", {
      className: "nsw-main-nav__header",
      children: [/* @__PURE__ */ r("div", {
        id: "nsw-main-nav__title",
        children: "Menu"
      }), /* @__PURE__ */ y("button", {
        type: "button",
        className: "nsw-icon-button js-close-nav",
        "aria-expanded": "true",
        children: [/* @__PURE__ */ r("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ r("span", {
          className: "sr-only",
          children: "Close Menu"
        })]
      })]
    }), /* @__PURE__ */ r("ul", {
      ref: l,
      className: "nsw-main-nav__list",
      children: t.map((f, v) => {
        var w, T;
        const x = f.linkComponent || "a";
        return /* @__PURE__ */ r("li", {
          children: /* @__PURE__ */ y(Ue, {
            children: [/* @__PURE__ */ y(x, {
              href: f.url,
              target: f.target,
              children: [/* @__PURE__ */ r("span", {
                children: f.text
              }), (w = f.subNav) != null && w.length ? /* @__PURE__ */ r("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (T = f.subNav) != null && T.length ? /* @__PURE__ */ r(Mr, {
              subNav: f.subNav,
              url: f.url,
              text: f.text,
              target: f.target,
              description: f.description,
              id: f.id,
              linkComponent: x
            }) : ""]
          })
        }, f.id ? `navItem-${f.id}` : f.url + f.text + v);
      })
    })]
  });
}, br = ({
  url: e,
  text: t,
  description: i,
  id: s,
  target: o,
  linkComponent: c = "a"
}) => /* @__PURE__ */ y(Ue, {
  children: [/* @__PURE__ */ y("div", {
    className: "nsw-main-nav__header",
    children: [/* @__PURE__ */ y("button", {
      type: "button",
      className: "nsw-icon-button nsw-icon-button--flex js-close-sub-nav",
      "aria-controls": `sub-nav-${s}`,
      "aria-expanded": "true",
      children: [/* @__PURE__ */ r("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "keyboard_arrow_left"
      }), /* @__PURE__ */ y("span", {
        children: ["Back", /* @__PURE__ */ r("span", {
          className: "sr-only",
          children: " to previous menu"
        })]
      })]
    }), /* @__PURE__ */ y("button", {
      type: "button",
      className: "nsw-icon-button js-close-nav",
      "aria-expanded": "true",
      children: [/* @__PURE__ */ r("i", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "close"
      }), /* @__PURE__ */ r("span", {
        className: "sr-only",
        children: "Close Menu"
      })]
    })]
  }), /* @__PURE__ */ r("div", {
    className: "nsw-main-nav__title",
    children: /* @__PURE__ */ y(c, {
      href: e,
      target: o,
      children: [/* @__PURE__ */ r("span", {
        children: t
      }), /* @__PURE__ */ r("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "east"
      })]
    })
  }), /* @__PURE__ */ r("div", {
    className: "nsw-main-nav__description",
    children: i
  })]
}), Mr = ({
  id: e = "",
  subNav: t,
  url: i,
  text: s,
  description: o,
  target: c,
  linkComponent: u = "a"
}) => {
  const l = e || Tr();
  return t ? /* @__PURE__ */ y("div", {
    className: "nsw-main-nav__sub-nav",
    id: `sub-nav-${l}`,
    role: "region",
    "aria-label": s,
    children: [/* @__PURE__ */ r(br, {
      url: i,
      text: s,
      description: o,
      id: l,
      target: c,
      linkComponent: u
    }), /* @__PURE__ */ r("ul", {
      className: "nsw-main-nav__sub-list",
      children: t.map((d, f) => {
        var w, T;
        const v = l + f, x = d.linkComponent || "a";
        return /* @__PURE__ */ r("li", {
          children: /* @__PURE__ */ y(Ue, {
            children: [/* @__PURE__ */ y(x, {
              href: d.url,
              target: d.target,
              children: [/* @__PURE__ */ r("span", {
                children: d.text
              }), (w = d.subNav) != null && w.length ? /* @__PURE__ */ r("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (T = d.subNav) != null && T.length ? /* @__PURE__ */ y("div", {
              className: "nsw-main-nav__sub-nav",
              id: `sub-nav-${v}`,
              role: "region",
              "aria-label": `${s} Submenu`,
              children: [/* @__PURE__ */ r(br, {
                url: i,
                text: s,
                description: o,
                id: v,
                linkComponent: x
              }), /* @__PURE__ */ r("ul", {
                className: "nsw-main-nav__sub-list",
                children: d.subNav.map((F, M) => {
                  var z;
                  const W = F.linkComponent || "a";
                  return /* @__PURE__ */ r("li", {
                    children: /* @__PURE__ */ y(W, {
                      href: F.url,
                      target: F.target,
                      className: "nsw-subnavigation__link",
                      children: [/* @__PURE__ */ r("span", {
                        children: F.text
                      }), (z = F.subNav) != null && z.length ? /* @__PURE__ */ r("span", {
                        className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                        "aria-hidden": "true",
                        children: "keyboard_arrow_right"
                      }) : ""]
                    })
                  }, F.url + F.text + M);
                })
              })]
            }) : ""]
          })
        }, v);
      })
    })]
  }) : null;
};
Mr.propTypes = {
  subNav: a.exports.arrayOf(a.exports.shape({
    url: a.exports.string,
    text: a.exports.string,
    subNav: a.exports.arrayOf
  })).isRequired,
  url: a.exports.string,
  text: a.exports.string,
  description: a.exports.string,
  renderLink: a.exports.func,
  target: a.exports.string
};
const it = ({
  text: e = "A NSW Government website"
}) => /* @__PURE__ */ r("div", {
  className: "nsw-masthead",
  children: /* @__PURE__ */ r("div", {
    className: "nsw-container",
    children: /* @__PURE__ */ r("p", {
      children: e
    })
  })
});
it.propTypes = {
  text: a.exports.string
};
const ot = ({
  nav: e,
  content: t
}) => /* @__PURE__ */ y("nav", {
  className: "nsw-skip",
  "aria-label": "Skip to links",
  children: [/* @__PURE__ */ r("a", {
    href: e,
    children: /* @__PURE__ */ r("span", {
      children: "Skip to navigation"
    })
  }), /* @__PURE__ */ r("a", {
    href: t,
    children: /* @__PURE__ */ r("span", {
      children: "Skip to content"
    })
  })]
});
ot.propTypes = {
  nav: a.exports.string.isRequired,
  content: a.exports.string.isRequired
};
const ct = {
  info: "nsw-in-page-alert--info",
  warning: "nsw-in-page-alert--warning",
  error: "nsw-in-page-alert--error",
  success: "nsw-in-page-alert--success"
}, lt = {
  info: "info",
  warning: "cancel",
  error: "error",
  success: "check_circle"
}, It = ({
  title: e = "",
  as: t,
  children: i,
  className: s = "",
  compact: o = !1,
  ...c
}) => /* @__PURE__ */ y("div", {
  className: `nsw-in-page-alert ${s} ${ct[t]} ${o ? "nsw-in-page-alert--compact" : ""}`.trim(),
  ...c,
  children: [/* @__PURE__ */ r("span", {
    className: "material-icons nsw-material-icons nsw-in-page-alert__icon",
    children: lt[t]
  }), /* @__PURE__ */ y("div", {
    className: "nsw-in-page-alert__content",
    children: [/* @__PURE__ */ r("h4", {
      children: e
    }), i]
  })]
}), ut = ({
  backLink: e,
  active: t,
  nextLink: i,
  paginationItems: s,
  className: o,
  children: c,
  ...u
}) => /* @__PURE__ */ r("div", {
  className: `nsw-container ${o}`,
  ...u,
  children: /* @__PURE__ */ r("nav", {
    className: "nsw-pagination",
    "aria-label": "Pagination",
    children: /* @__PURE__ */ y("ul", {
      children: [/* @__PURE__ */ r("li", {
        children: /* @__PURE__ */ y("a", {
          className: "nsw-icon-button",
          href: e,
          children: [/* @__PURE__ */ r("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_left"
          }), /* @__PURE__ */ r("span", {
            className: "sr-only",
            children: "Back"
          })]
        })
      }), s ? s.map((l, d) => /* @__PURE__ */ r(qr, {
        url: l.url,
        page: d + 1,
        active: t
      }, `pagination-${d}`)) : "", c, /* @__PURE__ */ r("li", {
        children: /* @__PURE__ */ y("a", {
          href: i,
          className: "nsw-icon-button",
          children: [/* @__PURE__ */ r("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_right"
          }), /* @__PURE__ */ r("span", {
            className: "sr-only",
            children: "Next"
          })]
        })
      })]
    })
  })
});
ut.propTypes = {
  className: a.exports.string,
  paginationItems: a.exports.arrayOf(a.exports.shape({
    url: a.exports.string
  })),
  children: a.exports.node,
  backLink: a.exports.string,
  nextLink: a.exports.string,
  active: a.exports.number
};
const qr = ({
  url: e,
  page: t,
  active: i
}) => /* @__PURE__ */ r("li", {
  children: /* @__PURE__ */ r("a", {
    className: i === t ? "active" : "",
    href: e,
    children: /* @__PURE__ */ y("span", {
      children: [/* @__PURE__ */ r("span", {
        className: "sr-only",
        children: "Page "
      }), t]
    })
  })
});
qr.propTypes = {
  page: a.exports.number,
  active: a.exports.number,
  url: a.exports.string
};
const dt = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding"
}, ft = ({
  children: e,
  style: t = "white",
  container: i = !0,
  padding: s = "full",
  box: o = !1,
  className: c = "",
  ...u
}) => /* @__PURE__ */ r("div", {
  className: `nsw-section ${c} ${dt[s]} nsw-section--${t} ${o ? "nsw-section--box" : ""}`,
  ...u,
  children: /* @__PURE__ */ r("div", {
    className: i ? "nsw-container" : "",
    children: e
  })
});
ft.propTypes = {
  padding: a.exports.oneOf(["full", "half", "none"]),
  style: a.exports.oneOf(["white", "brand-dark", "brand-light", "brand-supplementary", "black", "off-white", "grey-01", "grey-02", "grey-03", "grey-04"]),
  children: a.exports.node.isRequired,
  container: a.exports.bool,
  className: a.exports.string,
  box: a.exports.bool
};
const pt = ({
  caption: e,
  headers: t,
  data: i,
  striped: s = !1,
  bordered: o,
  captionTop: c,
  className: u = "",
  firstCellIsHeader: l,
  ...d
}) => /* @__PURE__ */ y("table", {
  className: `nsw-table ${s ? "nsw-table--striped " : " "} ${o ? "nsw-table--bordered " : " "} ${c ? "nsw-table--caption-top " : " "} ${u}`,
  ...d,
  children: [e && /* @__PURE__ */ r(Lr, {
    tableCaption: e
  }), /* @__PURE__ */ r(Fr, {
    children: /* @__PURE__ */ r(ze, {
      children: t.map((f, v) => /* @__PURE__ */ r(Ye, {
        title: f.title,
        width: f.width
      }, `tableHeader-${ne()}`))
    })
  }), /* @__PURE__ */ r(Ir, {
    children: i.map((f, v) => /* @__PURE__ */ r(ze, {
      children: t.map((x, w) => w === 0 && l === !0 ? /* @__PURE__ */ r(Ye, {
        scope: "row",
        title: f[x.key] ? f[x.key] : ""
      }, `tableHeader-${ne()}`) : /* @__PURE__ */ r(Dr, {
        data: f[x.key] ? f[x.key] : ""
      }, `tableCell-${ne()}`))
    }, `tableRow-${ne()}`))
  })]
});
pt.propTypes = {
  caption: a.exports.string,
  headers: a.exports.arrayOf(Object).isRequired,
  data: a.exports.arrayOf(Object).isRequired,
  striped: a.exports.bool,
  bordered: a.exports.bool,
  captionTop: a.exports.bool,
  className: a.exports.string,
  firstCellIsHeader: a.exports.bool
};
const Ir = ({
  className: e = "",
  ...t
}) => /* @__PURE__ */ r("tbody", {
  className: e,
  ...t
});
Ir.propTypes = {
  className: a.exports.string
};
const Fr = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("thead", {
  className: t,
  ...i,
  children: e
});
Fr.propTypes = {
  children: a.exports.node,
  className: a.exports.string
};
const Ye = ({
  title: e,
  width: t,
  scope: i = "col",
  className: s = "",
  ...o
}) => (o.width = t ? `${t}%` : void 0, /* @__PURE__ */ r("th", {
  ...o,
  className: s,
  scope: i,
  children: e
}));
Ye.propTypes = {
  title: a.exports.string.isRequired,
  width: a.exports.number,
  className: a.exports.string,
  scope: a.exports.string
};
const Dr = ({
  data: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("td", {
  className: t,
  ...i,
  children: e
});
Dr.propTypes = {
  data: a.exports.string,
  className: a.exports.string
};
const ze = ({
  children: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("tr", {
  className: t,
  ...i,
  children: e
});
ze.propTypes = {
  children: a.exports.node,
  className: a.exports.string
};
const Lr = ({
  captionId: e,
  tableCaption: t,
  className: i = "",
  ...s
}) => t ? /* @__PURE__ */ r("caption", {
  className: i,
  ...s,
  children: t
}) : null;
Lr.propTypes = {
  tableCaption: a.exports.string,
  captionId: a.exports.string,
  className: a.exports.string
};
const ht = ({
  children: e
}) => /* @__PURE__ */ r("div", {
  className: "nsw-table-responsive",
  role: "region",
  children: e
});
ht.propTypes = {
  children: a.exports.node
};
const vt = (e) => {
  const {
    className: t = "",
    children: i,
    ...s
  } = e, o = Re(null);
  return ge(() => {
    (async () => {
      const {
        Tabs: c
      } = await import("./main.ca35e5ee.js");
      new c(o.current).init();
    })();
  }, []), /* @__PURE__ */ r("div", {
    ref: o,
    className: `nsw-tabs js-tabs ${t}`,
    ...s,
    children: i
  });
};
vt.propTypes = {
  className: a.exports.string,
  children: a.exports.node
};
const mt = ({
  children: e
}) => /* @__PURE__ */ r("ul", {
  className: "nsw-tabs__list",
  children: e
});
mt.propTypes = {
  children: a.exports.node.isRequired
};
const yt = ({
  urlHash: e,
  title: t
}) => /* @__PURE__ */ r("li", {
  className: "nsw-tabs__list-item",
  children: /* @__PURE__ */ r("a", {
    href: `#${e}`,
    className: "nsw-tabs__link",
    children: t
  })
});
yt.propTypes = {
  urlHash: a.exports.string.isRequired,
  title: a.exports.string.isRequired
};
const gt = ({
  urlHash: e,
  children: t
}) => /* @__PURE__ */ r("section", {
  id: e,
  className: "nsw-tabs__content",
  children: t
});
gt.propTypes = {
  urlHash: a.exports.string.isRequired,
  children: a.exports.node.isRequired
};
const Wr = ({
  link: e,
  text: t,
  linkComponent: i = "a",
  className: s = "",
  ...o
}) => {
  const c = "span", u = i;
  return u === "a" ? o.href = e : typeof u == "function" && (o.to = e), e ? /* @__PURE__ */ r(u, {
    className: `nsw-tag ${s}`,
    ...o,
    children: t
  }) : /* @__PURE__ */ r(c, {
    ...o,
    className: `nsw-tag ${s}`,
    children: t
  });
};
Wr.propTypes = {
  className: a.exports.string,
  link: a.exports.string,
  text: a.exports.string.isRequired,
  linkComponent: a.exports.oneOfType([a.exports.string, a.exports.func])
};
const Ft = ({
  tags: e,
  className: t = "",
  ...i
}) => /* @__PURE__ */ r("div", {
  className: `nsw-list nsw-list--8 ${t}`,
  ...i,
  children: e.map((s) => /* @__PURE__ */ r(Wr, {
    ...s,
    linkComponent: s.linkComponent,
    link: s.link,
    text: s.text
  }, s.text))
}), bt = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent"
}, _t = ({
  image: e,
  video: t,
  title: i,
  caption: s,
  left: o,
  right: c,
  center: u,
  children: l,
  style: d = "default"
}) => /* @__PURE__ */ y("figure", {
  className: `nsw-media ${o === void 0 || o === "none" ? "" : ` nsw-media--left-${o}`}
		${bt[d]}
		${c === void 0 || c === "none" ? "" : ` nsw-media--right-${c}`}
		${u === void 0 || u === "none" ? "" : ` nsw-media--${u}`}`,
  children: [t ? /* @__PURE__ */ r("div", {
    className: "nsw-media__video",
    children: /* @__PURE__ */ r("iframe", {
      src: t,
      title: i,
      frameBorder: "0",
      allowFullScreen: !0
    })
  }) : "", e ? /* @__PURE__ */ r("img", {
    src: e,
    alt: i
  }) : "", l, !!s && /* @__PURE__ */ r("figcaption", {
    children: s
  })]
});
_t.propTypes = {
  style: a.exports.oneOf(["default", "dark", "light", "transparent"]),
  video: a.exports.string,
  image: a.exports.string,
  caption: a.exports.string,
  title: a.exports.string,
  right: a.exports.oneOf(["none", "30", "40", "50"]),
  left: a.exports.oneOf(["none", "30", "40", "50"]),
  center: a.exports.oneOf(["none", "60", "70", "80", "90"])
};
export {
  Cn as Accordion,
  $n as AccordionGroup,
  It as Alert,
  xt as Breadcrumbs,
  Tt as Button,
  On as Callout,
  Et as Card,
  Rt as CardCopy,
  qn as ContentBlock,
  kt as Footer,
  Nt as FooterLinks,
  St as FooterLower,
  Ct as FooterSectionGroup,
  $t as FooterUpper,
  Sr as FormGroup,
  Yn as FormGroupCheckbox,
  zn as FormGroupRadio,
  Wn as FormGroupSelect,
  Ot as FormGroupText,
  oe as FormHelper,
  Fn as FormLabel,
  Un as GlobalAlert,
  Pt as Header,
  jt as HeroBanner,
  Kn as HeroBannerList,
  At as InPageNavLinks,
  Mt as LinkList,
  qt as MainNav,
  it as Masthead,
  _t as Media,
  ut as Pagination,
  Bn as ProgressIndicator,
  ft as Section,
  Or as Select,
  kr as SelectItem,
  ot as SkipTo,
  yt as TabItem,
  mt as TabItemWrapper,
  gt as TabSection,
  pt as Table,
  ht as TableResponsiveWrapper,
  vt as Tabs,
  Ft as TagList,
  Dn as TextInput
};
