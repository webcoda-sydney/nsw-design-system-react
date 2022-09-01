import ye, { useId as fn, useState as xr, Fragment as Be, useRef as Ne, useEffect as ge, createElement as pn, useLayoutEffect as hn, useMemo as vn, useCallback as mn, useDebugValue as yn } from "react";
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r = { exports: {} }, Ae = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function bn() {
  if (or)
    return D;
  or = 1;
  var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, q = e ? Symbol.for("react.lazy") : 60116, I = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function G(b) {
    if (typeof b == "object" && b !== null) {
      var ae = b.$$typeof;
      switch (ae) {
        case a:
          switch (b = b.type, b) {
            case d:
            case p:
            case s:
            case c:
            case o:
            case w:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case m:
                case q:
                case R:
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
    return G(b) === p;
  }
  return D.AsyncMode = d, D.ConcurrentMode = p, D.ContextConsumer = l, D.ContextProvider = u, D.Element = a, D.ForwardRef = m, D.Fragment = s, D.Lazy = q, D.Memo = R, D.Portal = i, D.Profiler = c, D.StrictMode = o, D.Suspense = w, D.isAsyncMode = function(b) {
    return U(b) || G(b) === d;
  }, D.isConcurrentMode = U, D.isContextConsumer = function(b) {
    return G(b) === l;
  }, D.isContextProvider = function(b) {
    return G(b) === u;
  }, D.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === a;
  }, D.isForwardRef = function(b) {
    return G(b) === m;
  }, D.isFragment = function(b) {
    return G(b) === s;
  }, D.isLazy = function(b) {
    return G(b) === q;
  }, D.isMemo = function(b) {
    return G(b) === R;
  }, D.isPortal = function(b) {
    return G(b) === i;
  }, D.isProfiler = function(b) {
    return G(b) === c;
  }, D.isStrictMode = function(b) {
    return G(b) === o;
  }, D.isSuspense = function(b) {
    return G(b) === w;
  }, D.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === s || b === p || b === c || b === o || b === w || b === x || typeof b == "object" && b !== null && (b.$$typeof === q || b.$$typeof === R || b.$$typeof === u || b.$$typeof === l || b.$$typeof === m || b.$$typeof === Y || b.$$typeof === z || b.$$typeof === B || b.$$typeof === I);
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
var cr;
function _n() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, a = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, R = e ? Symbol.for("react.memo") : 60115, q = e ? Symbol.for("react.lazy") : 60116, I = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function G(y) {
      return typeof y == "string" || typeof y == "function" || y === s || y === p || y === c || y === o || y === w || y === x || typeof y == "object" && y !== null && (y.$$typeof === q || y.$$typeof === R || y.$$typeof === u || y.$$typeof === l || y.$$typeof === m || y.$$typeof === Y || y.$$typeof === z || y.$$typeof === B || y.$$typeof === I);
    }
    function U(y) {
      if (typeof y == "object" && y !== null) {
        var ee = y.$$typeof;
        switch (ee) {
          case a:
            var he = y.type;
            switch (he) {
              case d:
              case p:
              case s:
              case c:
              case o:
              case w:
                return he;
              default:
                var le = he && he.$$typeof;
                switch (le) {
                  case l:
                  case m:
                  case q:
                  case R:
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
    var b = d, ae = p, be = l, _e = u, ue = a, xe = m, de = s, fe = q, X = R, Q = i, se = c, Z = o, te = w, ce = !1;
    function pe(y) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(y) || U(y) === d;
    }
    function h(y) {
      return U(y) === p;
    }
    function _(y) {
      return U(y) === l;
    }
    function $(y) {
      return U(y) === u;
    }
    function k(y) {
      return typeof y == "object" && y !== null && y.$$typeof === a;
    }
    function N(y) {
      return U(y) === m;
    }
    function j(y) {
      return U(y) === s;
    }
    function E(y) {
      return U(y) === q;
    }
    function C(y) {
      return U(y) === R;
    }
    function O(y) {
      return U(y) === i;
    }
    function M(y) {
      return U(y) === c;
    }
    function S(y) {
      return U(y) === o;
    }
    function J(y) {
      return U(y) === w;
    }
    L.AsyncMode = b, L.ConcurrentMode = ae, L.ContextConsumer = be, L.ContextProvider = _e, L.Element = ue, L.ForwardRef = xe, L.Fragment = de, L.Lazy = fe, L.Memo = X, L.Portal = Q, L.Profiler = se, L.StrictMode = Z, L.Suspense = te, L.isAsyncMode = pe, L.isConcurrentMode = h, L.isContextConsumer = _, L.isContextProvider = $, L.isElement = k, L.isForwardRef = N, L.isFragment = j, L.isLazy = E, L.isMemo = C, L.isPortal = O, L.isProfiler = M, L.isStrictMode = S, L.isSuspense = J, L.isValidElementType = G, L.typeOf = U;
  }()), L;
}
var lr;
function wr() {
  return lr || (lr = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = bn() : e.exports = _n();
  }(Ae)), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, ur;
function xn() {
  if (ur)
    return Me;
  ur = 1;
  var e = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
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
      var d = Object.getOwnPropertyNames(u).map(function(m) {
        return u[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = o() ? Object.assign : function(c, u) {
    for (var l, d = s(c), p, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var w in l)
        a.call(l, w) && (d[w] = l[w]);
      if (e) {
        p = e(l);
        for (var x = 0; x < p.length; x++)
          i.call(l, p[x]) && (d[p[x]] = l[p[x]]);
      }
    }
    return d;
  }, Me;
}
var qe, dr;
function He() {
  if (dr)
    return qe;
  dr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = e, qe;
}
var Ie, fr;
function Tr() {
  return fr || (fr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var Fe, pr;
function wn() {
  if (pr)
    return Fe;
  pr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = He(), i = {}, s = Tr();
    e = function(c) {
      var u = "Warning: " + c;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function o(c, u, l, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in c)
        if (s(c, m)) {
          var w;
          try {
            if (typeof c[m] != "function") {
              var x = Error(
                (d || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            w = c[m](u, m, d, l, null, a);
          } catch (q) {
            w = q;
          }
          if (w && !(w instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof w + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), w instanceof Error && !(w.message in i)) {
            i[w.message] = !0;
            var R = p ? p() : "";
            e(
              "Failed " + l + " type: " + w.message + (R != null ? R : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Fe = o, Fe;
}
var De, hr;
function Tn() {
  if (hr)
    return De;
  hr = 1;
  var e = wr(), a = xn(), i = He(), s = Tr(), o = wn(), c = function() {
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
    var p = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function w(h) {
      var _ = h && (p && h[p] || h[m]);
      if (typeof _ == "function")
        return _;
    }
    var x = "<<anonymous>>", R = {
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
      node: xe(),
      objectOf: _e,
      oneOf: be,
      oneOfType: ue,
      shape: fe,
      exact: X
    };
    function q(h, _) {
      return h === _ ? h !== 0 || 1 / h === 1 / _ : h !== h && _ !== _;
    }
    function I(h, _) {
      this.message = h, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    I.prototype = Error.prototype;
    function Y(h) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, $ = 0;
      function k(j, E, C, O, M, S, J) {
        if (O = O || x, S = S || C, J !== i) {
          if (d) {
            var y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw y.name = "Invariant Violation", y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = O + ":" + C;
            !_[ee] && $ < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ee] = !0, $++);
          }
        }
        return E[C] == null ? j ? E[C] === null ? new I("The " + M + " `" + S + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new I("The " + M + " `" + S + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : h(E, C, O, M, S);
      }
      var N = k.bind(null, !1);
      return N.isRequired = k.bind(null, !0), N;
    }
    function z(h) {
      function _($, k, N, j, E, C) {
        var O = $[k], M = Z(O);
        if (M !== h) {
          var S = te(O);
          return new I(
            "Invalid " + j + " `" + E + "` of type " + ("`" + S + "` supplied to `" + N + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return Y(_);
    }
    function B() {
      return Y(u);
    }
    function G(h) {
      function _($, k, N, j, E) {
        if (typeof h != "function")
          return new I("Property `" + E + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var C = $[k];
        if (!Array.isArray(C)) {
          var O = Z(C);
          return new I("Invalid " + j + " `" + E + "` of type " + ("`" + O + "` supplied to `" + N + "`, expected an array."));
        }
        for (var M = 0; M < C.length; M++) {
          var S = h(C, M, N, j, E + "[" + M + "]", i);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return Y(_);
    }
    function U() {
      function h(_, $, k, N, j) {
        var E = _[$];
        if (!l(E)) {
          var C = Z(E);
          return new I("Invalid " + N + " `" + j + "` of type " + ("`" + C + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(h);
    }
    function b() {
      function h(_, $, k, N, j) {
        var E = _[$];
        if (!e.isValidElementType(E)) {
          var C = Z(E);
          return new I("Invalid " + N + " `" + j + "` of type " + ("`" + C + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(h);
    }
    function ae(h) {
      function _($, k, N, j, E) {
        if (!($[k] instanceof h)) {
          var C = h.name || x, O = pe($[k]);
          return new I("Invalid " + j + " `" + E + "` of type " + ("`" + O + "` supplied to `" + N + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return Y(_);
    }
    function be(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), u;
      function _($, k, N, j, E) {
        for (var C = $[k], O = 0; O < h.length; O++)
          if (q(C, h[O]))
            return null;
        var M = JSON.stringify(h, function(J, y) {
          var ee = te(y);
          return ee === "symbol" ? String(y) : y;
        });
        return new I("Invalid " + j + " `" + E + "` of value `" + String(C) + "` " + ("supplied to `" + N + "`, expected one of " + M + "."));
      }
      return Y(_);
    }
    function _e(h) {
      function _($, k, N, j, E) {
        if (typeof h != "function")
          return new I("Property `" + E + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var C = $[k], O = Z(C);
        if (O !== "object")
          return new I("Invalid " + j + " `" + E + "` of type " + ("`" + O + "` supplied to `" + N + "`, expected an object."));
        for (var M in C)
          if (s(C, M)) {
            var S = h(C, M, N, j, E + "." + M, i);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return Y(_);
    }
    function ue(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var _ = 0; _ < h.length; _++) {
        var $ = h[_];
        if (typeof $ != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce($) + " at index " + _ + "."
          ), u;
      }
      function k(N, j, E, C, O) {
        for (var M = [], S = 0; S < h.length; S++) {
          var J = h[S], y = J(N, j, E, C, O, i);
          if (y == null)
            return null;
          y.data && s(y.data, "expectedType") && M.push(y.data.expectedType);
        }
        var ee = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new I("Invalid " + C + " `" + O + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return Y(k);
    }
    function xe() {
      function h(_, $, k, N, j) {
        return Q(_[$]) ? null : new I("Invalid " + N + " `" + j + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return Y(h);
    }
    function de(h, _, $, k, N) {
      return new I(
        (h || "React class") + ": " + _ + " type `" + $ + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function fe(h) {
      function _($, k, N, j, E) {
        var C = $[k], O = Z(C);
        if (O !== "object")
          return new I("Invalid " + j + " `" + E + "` of type `" + O + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var M in h) {
          var S = h[M];
          if (typeof S != "function")
            return de(N, j, E, M, te(S));
          var J = S(C, M, N, j, E + "." + M, i);
          if (J)
            return J;
        }
        return null;
      }
      return Y(_);
    }
    function X(h) {
      function _($, k, N, j, E) {
        var C = $[k], O = Z(C);
        if (O !== "object")
          return new I("Invalid " + j + " `" + E + "` of type `" + O + "` " + ("supplied to `" + N + "`, expected `object`."));
        var M = a({}, $[k], h);
        for (var S in M) {
          var J = h[S];
          if (s(h, S) && typeof J != "function")
            return de(N, j, E, S, te(J));
          if (!J)
            return new I(
              "Invalid " + j + " `" + E + "` key `" + S + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify($[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var y = J(C, S, N, j, E + "." + S, i);
          if (y)
            return y;
        }
        return null;
      }
      return Y(_);
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
          var _ = w(h);
          if (_) {
            var $ = _.call(h), k;
            if (_ !== h.entries) {
              for (; !(k = $.next()).done; )
                if (!Q(k.value))
                  return !1;
            } else
              for (; !(k = $.next()).done; ) {
                var N = k.value;
                if (N && !Q(N[1]))
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
      return !h.constructor || !h.constructor.name ? x : h.constructor.name;
    }
    return R.checkPropTypes = o, R.resetWarningCache = o.resetWarningCache, R.PropTypes = R, R;
  }, De;
}
var Le, vr;
function Rn() {
  if (vr)
    return Le;
  vr = 1;
  var e = He();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, Le = function() {
    function s(u, l, d, p, m, w) {
      if (w !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
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
      resetWarningCache: a
    };
    return c.PropTypes = c, c;
  }, Le;
}
if (process.env.NODE_ENV !== "production") {
  var Nn = wr(), En = !0;
  r.exports = Tn()(Nn.isElement, En);
} else
  r.exports = Rn()();
const Rr = (e = "", a = "-") => (e + fn()).replace(/\:/g, a);
var ke = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Cn() {
  if (mr)
    return Te;
  mr = 1;
  var e = ye, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, d, p) {
    var m, w = {}, x = null, R = null;
    p !== void 0 && (x = "" + p), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (R = d.ref);
    for (m in d)
      s.call(d, m) && !c.hasOwnProperty(m) && (w[m] = d[m]);
    if (l && l.defaultProps)
      for (m in d = l.defaultProps, d)
        w[m] === void 0 && (w[m] = d[m]);
    return { $$typeof: a, type: l, key: x, ref: R, props: w, _owner: o.current };
  }
  return Te.Fragment = i, Te.jsx = u, Te.jsxs = u, Te;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function kn() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), q = Symbol.iterator, I = "@@iterator";
    function Y(t) {
      if (t === null || typeof t != "object")
        return null;
      var f = q && t[q] || t[I];
      return typeof f == "function" ? f : null;
    }
    var z = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(t) {
      {
        for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), T = 1; T < f; T++)
          v[T - 1] = arguments[T];
        G("error", t, v);
      }
    }
    function G(t, f, v) {
      {
        var T = z.ReactDebugCurrentFrame, F = T.getStackAddendum();
        F !== "" && (f += "%s", v = v.concat([F]));
        var W = v.map(function(A) {
          return String(A);
        });
        W.unshift("Warning: " + f), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var U = !1, b = !1, ae = !1, be = !1, _e = !1, ue;
    ue = Symbol.for("react.module.reference");
    function xe(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === c || _e || t === o || t === p || t === m || be || t === R || U || b || ae || typeof t == "object" && t !== null && (t.$$typeof === x || t.$$typeof === w || t.$$typeof === u || t.$$typeof === l || t.$$typeof === d || t.$$typeof === ue || t.getModuleId !== void 0));
    }
    function de(t, f, v) {
      var T = t.displayName;
      if (T)
        return T;
      var F = f.displayName || f.name || "";
      return F !== "" ? v + "(" + F + ")" : v;
    }
    function fe(t) {
      return t.displayName || "Context";
    }
    function X(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var f = t;
            return fe(f) + ".Consumer";
          case u:
            var v = t;
            return fe(v._context) + ".Provider";
          case d:
            return de(t, t.render, "ForwardRef");
          case w:
            var T = t.displayName || null;
            return T !== null ? T : X(t.type) || "Memo";
          case x: {
            var F = t, W = F._payload, A = F._init;
            try {
              return X(A(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, se = 0, Z, te, ce, pe, h, _, $;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function N() {
      {
        if (se === 0) {
          Z = console.log, te = console.info, ce = console.warn, pe = console.error, h = console.group, _ = console.groupCollapsed, $ = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        se++;
      }
    }
    function j() {
      {
        if (se--, se === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, t, {
              value: Z
            }),
            info: Q({}, t, {
              value: te
            }),
            warn: Q({}, t, {
              value: ce
            }),
            error: Q({}, t, {
              value: pe
            }),
            group: Q({}, t, {
              value: h
            }),
            groupCollapsed: Q({}, t, {
              value: _
            }),
            groupEnd: Q({}, t, {
              value: $
            })
          });
        }
        se < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = z.ReactCurrentDispatcher, C;
    function O(t, f, v) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (F) {
            var T = F.stack.trim().match(/\n( *(at )?)/);
            C = T && T[1] || "";
          }
        return `
` + C + t;
      }
    }
    var M = !1, S;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      S = new J();
    }
    function y(t, f) {
      if (!t || M)
        return "";
      {
        var v = S.get(t);
        if (v !== void 0)
          return v;
      }
      var T;
      M = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = E.current, E.current = null, N();
      try {
        if (f) {
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
              T = ie;
            }
            Reflect.construct(t, [], A);
          } else {
            try {
              A.call();
            } catch (ie) {
              T = ie;
            }
            t.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            T = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && T && typeof ie.stack == "string") {
          for (var P = ie.stack.split(`
`), K = T.stack.split(`
`), H = P.length - 1, V = K.length - 1; H >= 1 && V >= 0 && P[H] !== K[V]; )
            V--;
          for (; H >= 1 && V >= 0; H--, V--)
            if (P[H] !== K[V]) {
              if (H !== 1 || V !== 1)
                do
                  if (H--, V--, V < 0 || P[H] !== K[V]) {
                    var re = `
` + P[H].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && S.set(t, re), re;
                  }
                while (H >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        M = !1, E.current = W, j(), Error.prepareStackTrace = F;
      }
      var me = t ? t.displayName || t.name : "", ir = me ? O(me) : "";
      return typeof t == "function" && S.set(t, ir), ir;
    }
    function ee(t, f, v) {
      return y(t, !1);
    }
    function he(t) {
      var f = t.prototype;
      return !!(f && f.isReactComponent);
    }
    function le(t, f, v) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return y(t, he(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case p:
          return O("Suspense");
        case m:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return ee(t.render);
          case w:
            return le(t.type, f, v);
          case x: {
            var T = t, F = T._payload, W = T._init;
            try {
              return le(W(F), f, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Ge = {}, Je = z.ReactDebugCurrentFrame;
    function Ce(t) {
      if (t) {
        var f = t._owner, v = le(t.type, t._source, f ? f.type : null);
        Je.setExtraStackFrame(v);
      } else
        Je.setExtraStackFrame(null);
    }
    function Hr(t, f, v, T, F) {
      {
        var W = Function.call.bind(Ee);
        for (var A in t)
          if (W(t, A)) {
            var P = void 0;
            try {
              if (typeof t[A] != "function") {
                var K = Error((T || "React class") + ": " + v + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              P = t[A](f, A, T, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              P = H;
            }
            P && !(P instanceof Error) && (Ce(F), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", v, A, typeof P), Ce(null)), P instanceof Error && !(P.message in Ge) && (Ge[P.message] = !0, Ce(F), B("Failed %s type: %s", v, P.message), Ce(null));
          }
      }
    }
    var Ur = Array.isArray;
    function $e(t) {
      return Ur(t);
    }
    function Vr(t) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return v;
      }
    }
    function Gr(t) {
      try {
        return Ke(t), !1;
      } catch {
        return !0;
      }
    }
    function Ke(t) {
      return "" + t;
    }
    function Qe(t) {
      if (Gr(t))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vr(t)), Ke(t);
    }
    var we = z.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, Ze, Oe;
    Oe = {};
    function Kr(t) {
      if (Ee.call(t, "ref")) {
        var f = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Qr(t) {
      if (Ee.call(t, "key")) {
        var f = Object.getOwnPropertyDescriptor(t, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Xr(t, f) {
      if (typeof t.ref == "string" && we.current && f && we.current.stateNode !== f) {
        var v = X(we.current.type);
        Oe[v] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(we.current.type), t.ref), Oe[v] = !0);
      }
    }
    function Zr(t, f) {
      {
        var v = function() {
          Xe || (Xe = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function en(t, f) {
      {
        var v = function() {
          Ze || (Ze = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var rn = function(t, f, v, T, F, W, A) {
      var P = {
        $$typeof: a,
        type: t,
        key: f,
        ref: v,
        props: A,
        _owner: W
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
        value: T
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function nn(t, f, v, T, F) {
      {
        var W, A = {}, P = null, K = null;
        v !== void 0 && (Qe(v), P = "" + v), Qr(f) && (Qe(f.key), P = "" + f.key), Kr(f) && (K = f.ref, Xr(f, F));
        for (W in f)
          Ee.call(f, W) && !Jr.hasOwnProperty(W) && (A[W] = f[W]);
        if (t && t.defaultProps) {
          var H = t.defaultProps;
          for (W in H)
            A[W] === void 0 && (A[W] = H[W]);
        }
        if (P || K) {
          var V = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Zr(A, V), K && en(A, V);
        }
        return rn(t, P, K, F, T, we.current, A);
      }
    }
    var Se = z.ReactCurrentOwner, er = z.ReactDebugCurrentFrame;
    function ve(t) {
      if (t) {
        var f = t._owner, v = le(t.type, t._source, f ? f.type : null);
        er.setExtraStackFrame(v);
      } else
        er.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function rr() {
      {
        if (Se.current) {
          var t = X(Se.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function tn(t) {
      {
        if (t !== void 0) {
          var f = t.fileName.replace(/^.*[\\\/]/, ""), v = t.lineNumber;
          return `

Check your code at ` + f + ":" + v + ".";
        }
        return "";
      }
    }
    var nr = {};
    function an(t) {
      {
        var f = rr();
        if (!f) {
          var v = typeof t == "string" ? t : t.displayName || t.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
    }
    function tr(t, f) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var v = an(f);
        if (nr[v])
          return;
        nr[v] = !0;
        var T = "";
        t && t._owner && t._owner !== Se.current && (T = " It was passed a child from " + X(t._owner.type) + "."), ve(t), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, T), ve(null);
      }
    }
    function ar(t, f) {
      {
        if (typeof t != "object")
          return;
        if ($e(t))
          for (var v = 0; v < t.length; v++) {
            var T = t[v];
            je(T) && tr(T, f);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var F = Y(t);
          if (typeof F == "function" && F !== t.entries)
            for (var W = F.call(t), A; !(A = W.next()).done; )
              je(A.value) && tr(A.value, f);
        }
      }
    }
    function sn(t) {
      {
        var f = t.type;
        if (f == null || typeof f == "string")
          return;
        var v;
        if (typeof f == "function")
          v = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === d || f.$$typeof === w))
          v = f.propTypes;
        else
          return;
        if (v) {
          var T = X(f);
          Hr(v, t.props, "prop", T, t);
        } else if (f.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var F = X(f);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function on(t) {
      {
        for (var f = Object.keys(t.props), v = 0; v < f.length; v++) {
          var T = f[v];
          if (T !== "children" && T !== "key") {
            ve(t), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ve(null);
            break;
          }
        }
        t.ref !== null && (ve(t), B("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function sr(t, f, v, T, F, W) {
      {
        var A = xe(t);
        if (!A) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = tn(F);
          K ? P += K : P += rr();
          var H;
          t === null ? H = "null" : $e(t) ? H = "array" : t !== void 0 && t.$$typeof === a ? (H = "<" + (X(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : H = typeof t, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, P);
        }
        var V = nn(t, f, v, F, W);
        if (V == null)
          return V;
        if (A) {
          var re = f.children;
          if (re !== void 0)
            if (T)
              if ($e(re)) {
                for (var me = 0; me < re.length; me++)
                  ar(re[me], t);
                Object.freeze && Object.freeze(re);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(re, t);
        }
        return t === s ? on(V) : sn(V), V;
      }
    }
    function cn(t, f, v) {
      return sr(t, f, v, !0);
    }
    function ln(t, f, v) {
      return sr(t, f, v, !1);
    }
    var un = ln, dn = cn;
    Re.Fragment = s, Re.jsx = un, Re.jsxs = dn;
  }()), Re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Cn() : e.exports = kn();
})(ke);
const Ue = ke.exports.Fragment, n = ke.exports.jsx, g = ke.exports.jsxs, $n = (e) => {
  const [a, i] = xr(!1), s = Rr("accordion"), {
    header: o,
    body: c,
    closed: u,
    className: l = "",
    ...d
  } = e;
  return /* @__PURE__ */ g(Be, {
    children: [/* @__PURE__ */ n("div", {
      className: "nsw-accordion__title",
      children: /* @__PURE__ */ g("button", {
        type: "button",
        "aria-expanded": a,
        "aria-controls": s,
        className: `nsw-accordion__button ${a ? "is-open" : ""}`,
        onClick: () => i((p) => !p),
        children: [o, /* @__PURE__ */ n("i", {
          className: "material-icons nsw-material-icons nsw-accordion__icon",
          "aria-hidden": "true",
          children: "keyboard_arrow_down"
        })]
      })
    }), /* @__PURE__ */ n("div", {
      className: "nsw-accordion__content",
      id: s,
      hidden: !a,
      children: /* @__PURE__ */ n("div", {
        className: "nsw-wysiwyg-content",
        children: c
      })
    })]
  });
};
$n.propTypes = {
  header: r.exports.string.isRequired,
  body: r.exports.node.isRequired,
  className: r.exports.string
};
const On = ({
  className: e,
  children: a,
  ...i
}) => /* @__PURE__ */ n("div", {
  className: `nsw-accordion ready ${e || ""}`,
  ...i,
  children: a
});
On.propTypes = {
  className: r.exports.string,
  children: r.exports.node
};
const Sn = ({
  label: e,
  items: a,
  linkComponent: i = "a",
  className: s = "",
  ...o
}) => /* @__PURE__ */ n("nav", {
  className: `nsw-breadcrumbs ${s}`,
  "aria-label": e,
  ...o,
  children: /* @__PURE__ */ n(Pn, {
    inline: !0,
    linkComponent: i,
    items: a
  })
});
Sn.propTypes = {
  label: r.exports.string,
  items: r.exports.arrayOf(r.exports.shape({
    link: r.exports.string,
    text: r.exports.string.isRequired
  })).isRequired,
  linkComponent: r.exports.oneOfType([r.exports.string, r.exports.func]),
  className: r.exports.string
};
const Nr = ({
  text: e,
  link: a,
  linkComponent: i = "a",
  children: s,
  onClick: o,
  ...c
}) => {
  const u = i;
  return typeof o == "function" && (c.onClick = o, a || (a = "#")), u === "a" ? c.href = a : typeof u == "function" && (c.to = a), a ? /* @__PURE__ */ g("li", {
    children: [/* @__PURE__ */ n(u, {
      ...c,
      children: e
    }), s]
  }) : /* @__PURE__ */ g("li", {
    children: [e, s]
  });
};
Nr.propTypes = {
  text: r.exports.node.isRequired,
  link: r.exports.string,
  onClick: r.exports.func,
  children: r.exports.node,
  linkComponent: r.exports.oneOfType([r.exports.string, r.exports.func])
};
const Pn = ({
  inline: e,
  items: a,
  className: i = "",
  ...s
}) => /* @__PURE__ */ n("ol", {
  className: `nsw-breadcrumb__list ${i}${e ? " nsw-breadcrumb__list--inline" : ""}`,
  ...s,
  children: a.map((o) => /* @__PURE__ */ n(Nr, {
    ...o
  }, o.text))
}), jn = ({
  linkComponent: e = "a",
  link: a,
  children: i,
  style: s = "dark",
  type: o = "button",
  block: c,
  className: u = "",
  ...l
}) => {
  if (a) {
    const d = e;
    return d === "a" ? l.href = a : typeof d == "function" && (l.to = a), /* @__PURE__ */ n(d, {
      className: `nsw-button ${u} nsw-button--${s}${c ? " nsw-button--block" : ""}`,
      ...l,
      children: i
    });
  }
  return /* @__PURE__ */ n("button", {
    type: o,
    className: `nsw-button ${u} nsw-button--${s}${c ? " nsw-button--block" : ""}`,
    ...l,
    children: i
  });
};
jn.propTypes = {
  link: r.exports.string,
  children: r.exports.node.isRequired,
  style: r.exports.oneOf(["dark", "dark-outline", "dark-outline-solid", "light", "light-outline", "white", "danger"]),
  type: r.exports.string,
  block: r.exports.bool,
  linkComponent: r.exports.oneOfType([r.exports.string, r.exports.func]),
  className: r.exports.string
};
const An = ({
  title: e,
  level: a = 4,
  children: i,
  className: s = "",
  ...o
}) => {
  const c = `h${a}`;
  return /* @__PURE__ */ n("div", {
    className: `nsw-callout ${s}`,
    ...o,
    children: /* @__PURE__ */ g("div", {
      className: "nsw-callout__content",
      children: [/* @__PURE__ */ n(c, {
        className: "nsw-callout__title",
        children: e
      }), i]
    })
  });
};
An.propTypes = {
  title: r.exports.string.isRequired,
  level: r.exports.number,
  children: r.exports.node.isRequired,
  className: r.exports.string
};
const Nt = ({
  link: e,
  linkTarget: a,
  style: i = "white",
  headline: s,
  highlight: o,
  tag: c,
  date: u,
  image: l,
  imageAlt: d,
  className: p = "",
  children: m,
  linkComponent: w = "a",
  ...x
}) => {
  let R = "div";
  e !== void 0 && (R = "div");
  const q = () => {
    if (!l)
      return "";
    if (typeof l == "string")
      return /* @__PURE__ */ n(gr, {
        src: l,
        alt: d || ""
      });
    if (typeof l == "function")
      return /* @__PURE__ */ n(gr, {
        alt: d || "",
        children: l
      });
  };
  return /* @__PURE__ */ g(R, {
    className: `nsw-card nsw-card--${i} ${p}${s && !m ? "nsw-card--headline" : ""} ${o ? "nsw-card--highlight" : ""} `,
    ...x,
    children: [q(), /* @__PURE__ */ g(Mn, {
      children: [c ? /* @__PURE__ */ n(In, {
        children: c
      }) : "", u ? /* @__PURE__ */ n(Fn, {
        date: u
      }) : "", s ? /* @__PURE__ */ n(qn, {
        link: e,
        linkTarget: a,
        linkComponent: w,
        children: s
      }) : "", m]
    })]
  });
}, Mn = ({
  className: e,
  children: a,
  ...i
}) => /* @__PURE__ */ g("div", {
  className: `nsw-card__content ${e}`,
  ...i,
  children: [a, /* @__PURE__ */ n("span", {
    className: "material-icons nsw-material-icons nsw-card__icon",
    "aria-hidden": "true",
    children: "east"
  })]
}), qn = ({
  className: e = "",
  link: a,
  linkComponent: i = "a",
  linkTarget: s,
  children: o
}) => {
  const c = "div";
  return a !== void 0 ? /* @__PURE__ */ n(c, {
    className: `nsw-card__title ${e}`,
    children: /* @__PURE__ */ n(i, {
      href: a,
      target: s,
      className: "nsw-card__link",
      children: o
    })
  }) : /* @__PURE__ */ n(c, {
    className: "nsw-card__title",
    children: o
  });
}, gr = ({
  src: e,
  className: a = "",
  alt: i = "",
  children: s,
  ...o
}) => /* @__PURE__ */ n("div", {
  className: "nsw-card__image",
  children: s || /* @__PURE__ */ n("img", {
    className: a,
    src: e,
    alt: i,
    ...o
  })
}), Et = ({
  src: e,
  children: a,
  className: i = "",
  ...s
}) => /* @__PURE__ */ n("div", {
  className: `nsw-card__copy ${i}`,
  ...s,
  children: a
}), In = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("p", {
  className: `nsw-card__tag ${a}`,
  ...i,
  children: e
}), Fn = ({
  className: e = "",
  date: a,
  ...i
}) => /* @__PURE__ */ n("p", {
  className: `nsw-card__date ${e}`,
  ...i,
  children: /* @__PURE__ */ n("time", {
    dateTime: a,
    children: a
  })
}), Dn = ({
  links: e,
  mainLink: a,
  headline: i,
  copy: s,
  image: o,
  imageAlt: c,
  icon: u,
  className: l = ""
}) => /* @__PURE__ */ g("div", {
  className: `nsw-content-block ${l}`,
  children: [o ? /* @__PURE__ */ n(Er, {
    src: o,
    imageAlt: c || ""
  }) : "", u ? /* @__PURE__ */ n(Cr, {
    children: u
  }) : "", /* @__PURE__ */ g("div", {
    className: "nsw-content-block__content",
    children: [i ? /* @__PURE__ */ n($r, {
      children: i
    }) : "", s ? /* @__PURE__ */ n(kr, {
      children: s
    }) : "", /* @__PURE__ */ n("ul", {
      className: "nsw-content-block__list",
      children: e ? e.map((p) => /* @__PURE__ */ n("li", {
        children: /* @__PURE__ */ n("a", {
          href: p.url,
          children: p.text
        })
      }, p.text)) : ""
    }), a ? /* @__PURE__ */ n("div", {
      className: "nsw-content-block__link",
      children: /* @__PURE__ */ n("a", {
        href: a.url,
        children: a.text
      })
    }) : ""]
  })]
});
Dn.propTypes = {
  image: r.exports.string,
  imageAlt: r.exports.string,
  headline: r.exports.string.isRequired,
  icon: r.exports.node,
  copy: r.exports.string,
  links: r.exports.arrayOf(r.exports.shape({
    url: r.exports.string,
    text: r.exports.string
  })),
  mainLink: r.exports.shape({
    url: r.exports.string.isRequired,
    text: r.exports.string.isRequired
  }),
  className: r.exports.string
};
const Er = ({
  src: e,
  className: a = "",
  imageAlt: i,
  ...s
}) => /* @__PURE__ */ n("div", {
  className: "nsw-content-block__image",
  children: /* @__PURE__ */ n("img", {
    src: e,
    alt: i,
    className: "nsw-content-block__image",
    ...s
  })
});
Er.propTypes = {
  src: r.exports.string.isRequired,
  imageAlt: r.exports.string,
  className: r.exports.string
};
const Cr = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("div", {
  className: "nsw-content-block__image",
  ...i,
  children: /* @__PURE__ */ n("div", {
    className: "nsw-content-block__icon",
    children: e
  })
});
Cr.propTypes = {
  className: r.exports.string,
  children: r.exports.node
};
const kr = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("p", {
  className: `nsw-content-block__copy ${a}`,
  ...i,
  children: e
});
kr.propTypes = {
  className: r.exports.string,
  children: r.exports.node
};
const $r = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("h2", {
  className: "nsw-content-block__title",
  ...i,
  children: e
});
$r.propTypes = {
  className: r.exports.string,
  children: r.exports.node
};
const Ct = ({
  footerLinks: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("ul", {
  className: a,
  ...i,
  children: e.map(({
    url: s,
    text: o,
    target: c,
    linkComponent: u = "a",
    ...l
  }, d) => /* @__PURE__ */ n("li", {
    children: /* @__PURE__ */ n(u, {
      ...l,
      href: s,
      target: c,
      children: o
    })
  }, s + o + d))
}), kt = ({
  heading: e,
  sectionLinks: a,
  className: i = "",
  ...s
}) => /* @__PURE__ */ g("div", {
  className: `nsw-footer__group ${i}`,
  ...s,
  children: [/* @__PURE__ */ n("h3", {
    className: "nsw-footer__heading",
    children: /* @__PURE__ */ n("a", {
      href: e.url,
      children: e.text
    })
  }), /* @__PURE__ */ n("ul", {
    className: "nsw-footer__list",
    children: a.map(({
      url: o,
      text: c,
      target: u,
      linkComponent: l = "a",
      ...d
    }, p) => /* @__PURE__ */ n("li", {
      children: /* @__PURE__ */ n(l, {
        ...d,
        href: o,
        target: u,
        children: c
      })
    }, o + c + p))
  })]
}), $t = ({
  children: e,
  className: a = "",
  ariaLabel: i = "footer",
  ...s
}) => /* @__PURE__ */ n("nav", {
  className: `nsw-footer__upper ${a}`,
  "aria-label": i,
  ...s,
  children: /* @__PURE__ */ n("div", {
    className: "nsw-container",
    children: e
  })
}), Ot = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("div", {
  className: `nsw-footer__lower ${a}`,
  ...i,
  children: e
}), St = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("footer", {
  className: `nsw-footer ${a}`,
  ...i,
  role: "contentinfo",
  children: e
});
var Or = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = ye;
  function i(x) {
    return x && typeof x == "object" && "default" in x ? x : { default: x };
  }
  var s = /* @__PURE__ */ i(a), o = "id", c = 0;
  function u(x) {
    return c++, "".concat(x || o).concat(c);
  }
  var l = function() {
    c = 0;
  }, d = function(R) {
    o = R;
  }, p = function(R, q) {
    for (var I = [], Y = 0; Y < R; Y++)
      I.push(u(q));
    return I;
  };
  function m(x) {
    var R = s.default.useRef();
    return s.default.useEffect(function() {
      R.current = x;
    }), R.current;
  }
  function w() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, R = arguments.length > 1 ? arguments[1] : void 0, q = s.default.useRef([]), I = m(x), Y = m(R);
    return (x !== I || Y !== R) && (q.current = p(x, R)), q.current;
  }
  e.default = u, e.resetId = l, e.setPrefix = d, e.useId = w;
})(Or);
const ne = /* @__PURE__ */ gn(Or), Ln = ne(), oe = ({
  htmlId: e = Ln,
  children: a,
  className: i,
  status: s,
  ...o
}) => /* @__PURE__ */ g("span", {
  id: `${s === "invalid" ? "error" : "helper"}${e}`,
  className: `nsw-form__helper ${s === "invalid" ? " nsw-form__helper--error" : ""} ${s === "valid" ? " nsw-form__helper--valid" : ""} ${i}`,
  ...o,
  children: [/* @__PURE__ */ g("span", {
    className: "material-icons nsw-material-icons",
    "aria-hidden": "true",
    children: [s === "invalid" ? "cancel" : "", s === "valid" ? "check_circle" : ""]
  }), a]
});
oe.propTypes = {
  htmlId: r.exports.string,
  children: r.exports.node,
  className: r.exports.string,
  error: r.exports.bool
};
const Sr = ({
  htmlFor: e,
  text: a,
  dark: i,
  inline: s,
  className: o = "",
  ...c
}) => /* @__PURE__ */ n("label", {
  htmlFor: e,
  className: `nsw-form__label ${o}`,
  ...c,
  children: a
});
Sr.propTypes = {
  text: r.exports.string.isRequired,
  dark: r.exports.bool,
  inline: r.exports.bool,
  className: r.exports.string,
  htmlFor: r.exports.string
};
const Ve = ({
  htmlId: e = ne(),
  status: a = "default",
  children: i,
  label: s,
  helper: o,
  statusText: c,
  error: u,
  className: l = "",
  ...d
}) => /* @__PURE__ */ g("div", {
  className: `nsw-form__group ${l}`,
  ...d,
  children: [/* @__PURE__ */ n(Sr, {
    htmlFor: e,
    text: s
  }), o ? /* @__PURE__ */ n(oe, {
    htmlId: e,
    children: o
  }) : "", ye.Children.map(i, (p) => ye.cloneElement(p, {
    error: u
  })), a ? /* @__PURE__ */ n(oe, {
    htmlId: e,
    status: a,
    children: c
  }) : ""]
});
Ve.propTypes = {
  status: r.exports.oneOf(["invalid", "valid", "default"]),
  error: r.exports.bool,
  className: r.exports.string,
  htmlId: r.exports.string,
  label: r.exports.string,
  children: r.exports.node,
  helper: r.exports.string,
  statusText: r.exports.string,
  uniqueID: r.exports.func
};
const Pr = ({
  as: e = "input",
  status: a,
  block: i,
  number: s,
  htmlId: o = "0",
  type: c = "text",
  className: u = "",
  ...l
}) => e === "textarea" ? /* @__PURE__ */ n("textarea", {
  className: `nsw-form__input ${u}${i ? " nsw-form__input--block" : ""}${s ? " nsw-form__input--number" : ""}`,
  "aria-invalid": a === "invalid" ? "true" : "false",
  "aria-describedby": a === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  id: o,
  ...l
}) : /* @__PURE__ */ n("input", {
  className: `nsw-form__input ${u}${i ? " nsw-form__input--block" : ""}${s ? " nsw-form__input--number" : ""}`,
  "aria-invalid": a === "invalid" ? "true" : "false",
  "aria-describedby": a === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  type: c,
  ...l,
  id: o
});
Pr.propTypes = {
  as: r.exports.oneOf(["input", "text", "textarea"]),
  block: r.exports.bool,
  number: r.exports.bool,
  className: r.exports.string,
  htmlId: r.exports.string,
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  type: r.exports.string
};
const Wn = ({
  status: e = "default",
  className: a = "",
  inputType: i,
  statusText: s,
  label: o,
  helper: c,
  htmlId: u = ne(),
  as: l,
  ...d
}) => /* @__PURE__ */ n(Ve, {
  status: e,
  statusText: s,
  label: o,
  helper: c,
  htmlId: u,
  children: /* @__PURE__ */ n(Pr, {
    ...d,
    as: l,
    status: e,
    htmlId: u,
    type: i
  })
});
Wn.propTypes = {
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  className: r.exports.string,
  as: r.exports.oneOf(["input", "textarea"]),
  statusText: r.exports.string,
  label: r.exports.string,
  helper: r.exports.string,
  htmlId: r.exports.string,
  inputType: r.exports.string
};
const Yn = ne(), jr = ({
  text: e,
  value: a
}) => /* @__PURE__ */ n("option", {
  value: a,
  children: e
});
jr.propTypes = {
  text: r.exports.string.isRequired,
  value: r.exports.string.isRequired
};
const Ar = ({
  htmlId: e,
  selected: a,
  options: i,
  block: s,
  status: o = "default",
  className: c = "",
  ...u
}) => /* @__PURE__ */ n("select", {
  className: `nsw-form__select ${c}`,
  "aria-invalid": o === "invalid" ? "true" : void 0,
  "aria-describedby": o === "invalid" ? `helper${e} error${e}` : `helper${e}`,
  id: e,
  defaultValue: a,
  ...u,
  children: i.map((l) => /* @__PURE__ */ n(jr, {
    ...l
  }, l.value))
});
Ar.propTypes = {
  options: r.exports.arrayOf(r.exports.shape({
    value: r.exports.string.isRequired,
    text: r.exports.string.isRequired
  })).isRequired,
  block: r.exports.bool,
  htmlId: r.exports.string,
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  selected: r.exports.string,
  className: r.exports.string
};
const zn = ({
  status: e = "default",
  selected: a,
  statusText: i,
  label: s,
  helper: o,
  options: c,
  htmlId: u = Yn
}) => /* @__PURE__ */ n(Ve, {
  status: e,
  statusText: i,
  label: s,
  helper: o,
  htmlId: u,
  children: /* @__PURE__ */ n(Ar, {
    options: c,
    selected: a
  })
});
zn.propTypes = {
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  statusText: r.exports.string,
  label: r.exports.string,
  helper: r.exports.string,
  selected: r.exports.string,
  options: r.exports.arrayOf(r.exports.shape({
    value: r.exports.string.isRequired,
    text: r.exports.string.isRequired
  })).isRequired,
  htmlId: r.exports.string
};
const Mr = ({
  text: e,
  htmlId: a,
  value: i,
  status: s,
  as: o,
  uniqueID: c = ne(),
  ...u
}) => /* @__PURE__ */ g(Be, {
  children: [/* @__PURE__ */ n("input", {
    className: "nsw-form__checkbox-input",
    type: "checkbox",
    name: a,
    "aria-invalid": s === "invalid" && o !== "group" ? "true" : void 0,
    "aria-describedby": s === "invalid" ? `helper${a} error${a}` : `helper${a}`,
    id: c,
    ...u
  }), /* @__PURE__ */ n("label", {
    className: "nsw-form__checkbox-label",
    htmlFor: c,
    children: e
  })]
});
Mr.propTypes = {
  text: r.exports.string.isRequired,
  value: r.exports.string.isRequired,
  className: r.exports.string,
  htmlId: r.exports.string,
  uniqueID: r.exports.func,
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  as: r.exports.string
};
const Bn = ({
  className: e = "",
  as: a,
  status: i = "default",
  label: s,
  options: o,
  htmlId: c = ne(),
  statusText: u,
  helper: l
}) => /* @__PURE__ */ n("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ g("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": i === "invalid" ? "true" : void 0,
    children: [a === "group" ? /* @__PURE__ */ g("legend", {
      children: [/* @__PURE__ */ n("span", {
        className: "nsw-form__legend",
        children: s
      }), l ? /* @__PURE__ */ n(oe, {
        htmlId: c,
        children: l
      }) : "", i ? /* @__PURE__ */ n(oe, {
        htmlId: c,
        status: i,
        children: u
      }) : ""]
    }) : "", /* @__PURE__ */ n("div", {
      children: o.map((d) => /* @__PURE__ */ n(Mr, {
        ...d,
        as: a,
        htmlId: c,
        status: i
      }, d.value))
    }), i && a !== "group" ? /* @__PURE__ */ n(oe, {
      htmlId: c,
      status: i,
      children: u
    }) : ""]
  })
});
Bn.propTypes = {
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  statusText: r.exports.string,
  htmlId: r.exports.string,
  label: r.exports.string,
  as: r.exports.oneOf(["group", !1]),
  helper: r.exports.string,
  options: r.exports.arrayOf(r.exports.shape({
    value: r.exports.string,
    text: r.exports.string
  })).isRequired,
  className: r.exports.string
};
const qr = ({
  text: e,
  htmlId: a,
  value: i,
  status: s,
  uniqueID: o = ne(),
  ...c
}) => /* @__PURE__ */ g(ye.Fragment, {
  children: [/* @__PURE__ */ n("input", {
    className: "nsw-form__radio-input",
    type: "radio",
    name: a,
    "aria-describedby": s === "invalid" ? `helper${a} error${a}` : `helper${a}`,
    id: o,
    ...c
  }), /* @__PURE__ */ n("label", {
    className: "nsw-form__radio-label",
    htmlFor: o,
    children: e
  })]
});
qr.propTypes = {
  text: r.exports.string.isRequired,
  value: r.exports.string.isRequired,
  className: r.exports.string,
  htmlId: r.exports.string,
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  as: r.exports.string,
  uniqueID: r.exports.func
};
const Hn = ({
  className: e = "",
  as: a = "group",
  label: i,
  helper: s,
  status: o = "default",
  htmlId: c,
  statusText: u,
  options: l
}) => /* @__PURE__ */ n("div", {
  className: `nsw-form__group ${e}`,
  children: /* @__PURE__ */ g("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": o === "invalid" ? "true" : void 0,
    children: [a === "group" ? /* @__PURE__ */ g("legend", {
      children: [/* @__PURE__ */ n("span", {
        className: "nsw-form__legend",
        children: i
      }), s ? /* @__PURE__ */ n(oe, {
        htmlId: c,
        children: s
      }) : "", o ? /* @__PURE__ */ n(oe, {
        htmlId: c,
        status: o,
        children: u
      }) : ""]
    }) : "", /* @__PURE__ */ n("div", {
      children: l.map((d) => /* @__PURE__ */ n(qr, {
        ...d,
        htmlId: c,
        status: o
      }, d.value))
    }), o && a !== "group" ? /* @__PURE__ */ n(oe, {
      htmlId: c,
      status: o,
      children: u
    }) : ""]
  })
});
Hn.propTypes = {
  status: r.exports.oneOf(["valid", "invalid", "default"]),
  statusText: r.exports.string,
  htmlId: r.exports.string,
  label: r.exports.string,
  as: r.exports.oneOf(["group", !1]),
  helper: r.exports.string,
  options: r.exports.arrayOf(r.exports.shape({
    value: r.exports.string,
    text: r.exports.string
  })).isRequired,
  className: r.exports.string
};
const Un = ({
  step: e,
  of: a,
  ...i
}) => /* @__PURE__ */ g("div", {
  className: "nsw-progress-indicator",
  ...i,
  children: [/* @__PURE__ */ g("div", {
    className: "nsw-progress-indicator__count",
    children: ["Step ", e, " of ", a]
  }), /* @__PURE__ */ n("div", {
    className: "nsw-progress-indicator__bar",
    children: [...Array(a)].fill(void 0).map((s, o) => o + 1 <= e ? /* @__PURE__ */ n(We, {
      active: !0
    }, o) : /* @__PURE__ */ n(We, {}, o))
  })]
});
Un.propTypes = {
  step: r.exports.number.isRequired,
  of: r.exports.number.isRequired
};
const We = ({
  active: e
}) => /* @__PURE__ */ n("div", {
  className: `${e ? "active" : ""}`
});
We.propTypes = {
  active: r.exports.bool
};
const Vn = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
  default: ""
}, br = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark"
}, Gn = (e) => {
  const {
    title: a,
    content: i,
    ctaText: s,
    ctaHref: o,
    as: c = "default",
    className: u = "",
    children: l,
    ...d
  } = e, p = Ne(null);
  return ge(() => {
    (async () => {
      const {
        GlobalAlert: m
      } = await import("./main.ca35e5ee.js");
      new m(p.current).init();
    })();
  }, []), /* @__PURE__ */ n("div", {
    ref: p,
    className: `nsw-global-alert ${u} ${Vn[c]}`,
    ...d,
    children: /* @__PURE__ */ g("div", {
      className: "nsw-global-alert__wrapper",
      children: [/* @__PURE__ */ g("div", {
        className: "nsw-global-alert__content",
        children: [/* @__PURE__ */ n("div", {
          className: "nsw-global-alert__title",
          children: a
        }), /* @__PURE__ */ n("p", {
          children: i
        })]
      }), /* @__PURE__ */ n("p", {
        children: s && o ? /* @__PURE__ */ n("a", {
          href: o,
          className: c ? br[c] : br.default,
          children: s
        }) : ""
      }), /* @__PURE__ */ g("button", {
        type: "button",
        className: "nsw-icon-button js-close-alert",
        children: [/* @__PURE__ */ n("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ n("span", {
          className: "sr-only",
          children: "Close message"
        })]
      })]
    })
  });
};
Gn.propTypes = {
  title: r.exports.string.isRequired,
  content: r.exports.string.isRequired,
  children: r.exports.node,
  ctaText: r.exports.string,
  ctaHref: r.exports.string,
  className: r.exports.string,
  as: r.exports.oneOf(["critical", "light", "default"])
};
const Pt = (e) => {
  const {
    siteTitle: a,
    siteDescriptor: i,
    logo: s,
    headerUrl: o,
    linkComponent: c = "a",
    mobile: u = !0,
    search: l = !0,
    onSubmit: d,
    ...p
  } = e, m = Ne(null), w = Ne(null);
  return ge(() => {
    (async () => {
      const {
        SiteSearch: x
      } = await import("./main.ca35e5ee.js");
      l && (new x(m.current).init(), new x(w.current).init());
    })();
  }, []), /* @__PURE__ */ n(Be, {
    children: /* @__PURE__ */ n("header", {
      className: "nsw-header",
      ...p,
      children: /* @__PURE__ */ g("div", {
        className: "nsw-header__container",
        children: [/* @__PURE__ */ g("div", {
          className: "nsw-header__inner",
          children: [/* @__PURE__ */ g("div", {
            className: "nsw-header__main",
            children: [/* @__PURE__ */ n("div", {
              className: "nsw-header__waratah",
              children: /* @__PURE__ */ g(c, {
                href: o,
                className: "nsw-header__logo-link",
                children: [/* @__PURE__ */ g("svg", {
                  viewBox: "0 0 295 311",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ n("path", {
                    d: "M79.625 241.435l-45.77-53.754H14.46v84.124h18.893V218.18l45.64 53.625h19.514v-84.124H79.625v53.754zm181.333-53.734l-12.538 53.834-13.149-53.854h-18.093l-13.379 53.254-12.148-53.244h-19.773l21.885 84.054h19.463l12.838-53.205 13.009 53.205h19.113l.19-.721 22.015-83.383-19.433.06zM12.447 297.571a13.258 13.258 0 0113.4-13.498 14.067 14.067 0 0110.005 3.492l-2.901 3.462a10.208 10.208 0 00-7.295-2.792c-4.793 0-8.445 4.203-8.445 9.186v.15c0 5.354 3.532 9.296 8.855 9.296a10.588 10.588 0 006.284-2.001v-4.873h-6.624v-4.003h11.127v10.937a16.607 16.607 0 01-10.867 4.063c-8.145 0-13.498-5.804-13.498-13.389M39.578 297.571a13.62 13.62 0 0113.575-13.291 13.617 13.617 0 0113.653 13.211v.08a13.616 13.616 0 01-13.58 13.287 13.617 13.617 0 01-13.648-13.217v-.07zm22.434.07v-.07c0-5.063-3.682-9.266-8.855-9.266s-8.776 4.123-8.776 9.186v.08c0 5.064 3.683 9.256 8.846 9.256s8.786-4.132 8.786-9.186M66.477 284.513h5.063l7.845 20.013 7.815-20.013h4.943L81.316 310.74h-4.013l-10.826-26.227zM95.223 284.513h19.312v4.093h-14.73v6.774h13.059v4.083H99.806v6.994h14.919v4.093H95.223v-26.037zM119.161 284.563h11.597a10.503 10.503 0 017.515 2.602 7.841 7.841 0 012.151 5.613v.08c0 4.273-2.561 6.845-6.204 7.885l7.005 9.857h-5.394l-6.394-9.076h-5.723v9.056h-4.573l.02-26.017zm11.267 12.908c3.272 0 5.353-1.711 5.353-4.352v-.07c0-2.792-2.001-4.313-5.393-4.313h-6.654v8.745l6.694-.01zM144.477 284.513h4.222l13.959 17.992v-17.992h4.503v26.037h-3.842l-14.35-18.532v18.532h-4.492v-26.037zM171.805 284.513h4.873l7.915 12.308 7.925-12.308h4.873v26.037h-4.573v-18.672l-8.225 12.268h-.15l-8.135-12.198v18.602h-4.503v-26.037zM201.758 284.513h19.302v4.093h-14.729v6.774h13.058v4.083h-13.058v6.994h14.919v4.093h-19.492v-26.037zM225.754 284.513h4.243l13.949 17.992v-17.992h4.502v26.037h-3.832l-14.359-18.532v18.532h-4.503v-26.037zM260.326 288.756h-8.256v-4.243h21.124v4.243h-8.255v21.794h-4.613v-21.794zM103.699 260.097l11.108-13.308c7.695 6.344 15.75 10.376 25.517 10.376 7.695 0 12.338-3.052 12.338-8.055v-.25c0-4.763-2.932-7.205-17.221-10.867-17.212-4.393-28.319-9.156-28.319-26.127v-.24c0-15.5 12.458-25.756 29.92-25.756a49.51 49.51 0 0131.741 10.867l-9.766 14.159c-7.575-5.254-15.01-8.426-22.235-8.426s-11.008 3.292-11.008 7.445v.24c0 5.614 3.653 7.445 18.433 11.227 17.341 4.513 27.108 10.747 27.108 25.637v.24c0 17.011-12.939 26.497-31.381 26.497a54.394 54.394 0 01-36.235-13.659z",
                    fill: "#002664"
                  }), /* @__PURE__ */ n("path", {
                    d: "M295.031 128.903c-.07-3.883-3.062-6.474-4.773-7.915-1.711-1.441-9.687-7.225-24.627-15.9 1.151-1.501 1.651-2.302 2.742-3.843 5.394-7.605 10.327-15.47 12.709-24.576.6-2.291 1.661-7.204.75-9.726a9.513 9.513 0 00-6.564-5.744c-6.385-1.73-29.38-.32-31.242-.15.198-9.92-.691-19.832-2.651-29.559-.631-2.571-1.732-6.514-4.553-7.685-4.924-1.94-10.337.74-14.69 2.742-5.934 2.732-10.327 4.913-16.672 8.195-2.912-10.296-6.004-20.012-7.004-22.444-.781-1.791-1.932-5.003-5.374-5.714-3.442-.71-5.434.73-7.165 1.791-3.002 1.862-16.221 11.198-20.604 14.83-3.002-4.923-4.783-8.405-7.615-12.878-1.091-1.721-3.923-6.384-6.004-8.446a5.449 5.449 0 00-4.133-1.895 5.45 5.45 0 00-4.133 1.895c-2.051 2.072-4.883 6.725-6.004 8.446-2.822 4.473-4.643 7.945-7.615 12.878-4.383-3.632-17.572-13.008-20.604-14.83-1.731-1.06-3.662-2.461-7.165-1.79-3.502.67-4.593 3.922-5.374 5.713-1.07 2.451-4.142 12.148-7.004 22.444-6.345-3.282-10.758-5.473-16.692-8.205-4.352-2.001-9.746-4.673-14.67-2.732-2.821 1.171-3.922 5.114-4.552 7.685a135.921 135.921 0 00-2.652 29.56c-1.852-.17-24.847-1.582-31.241.15a9.515 9.515 0 00-6.565 5.743c-.92 2.512.14 7.425.75 9.726 2.382 9.106 7.316 17.011 12.71 24.576 1.1 1.551 1.59 2.342 2.741 3.843-14.95 8.675-22.916 14.469-24.627 15.9-1.71 1.431-4.703 4.002-4.773 7.915a7.773 7.773 0 001.721 5.343c2.862 4.003 18.723 19.263 54.267 24.706-6.094 4.443-4.873 10.007-4.003 12.188.71 1.751 2.432 3.773 5.904 5.674 5.574 3.062 12.489 3.772 18.363 3.882 8.425.16 17.291-1.611 25.527-3.282 7.865-1.601 16.081-4.833 24.116-5.213a113.44 113.44 0 0114.09.25c1.651.13 3.783.39 7.525.39 3.322 0 5.794-.27 7.425-.4a113.44 113.44 0 0114.09-.25c8.005.38 16.261 3.612 24.116 5.213 8.236 1.671 17.102 3.442 25.527 3.282 5.874-.11 12.789-.82 18.363-3.882 3.472-1.901 5.193-3.933 5.904-5.674.9-2.221 2.121-7.745-4.003-12.188 35.544-5.443 51.415-20.683 54.267-24.706a7.772 7.772 0 001.741-5.333z",
                    fill: "#fff"
                  }), /* @__PURE__ */ n("path", {
                    d: "M201.896 52.704a224.13 224.13 0 014.513 43.028c0 14.769-1.802 27.878-5.334 38.975a48.033 48.033 0 01-16.731 23.735c15.2-.49 28.829-9.936 38.476-26.727 12.568-22.014 15.25-49.602 15.65-69.795.451-23.015-1.27-28.418-1.941-30.64-.67-2.221-1.591-3.132-3.572-3.092-3.873.07-20.224 7.365-35.514 18.292 2.201 1.12 3.702 3.092 4.453 6.224z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ n("path", {
                    d: "M160.308 161.484c10.867-.23 28.799-9.006 35.023-28.709 3.323-10.326 4.473-20.613 5.004-37.114a184.739 184.739 0 00-3.613-39.935c-.31-1.461-.85-3.733-2.682-4.103-1.831-.37-3.402 1.541-4.463 2.442-1.06.9-27.638 24.155-39.236 52.894-2.122 5.954-5.834 12.078-5.954 30.469 0 6.625.61 14.009 3.922 18.192a14.067 14.067 0 0011.999 5.864zM200.405 37.264c-3.002-13.729-5.834-23.085-5.864-23.135-.631-1.67-1.521-2.952-2.832-3.172-1.481-.25-2.382.15-3.833 1.21-1.881 1.372-15.1 11.818-19.423 15.39 4.433 8.216 8.006 18.433 10.898 26.568 6.534-5.143 10.457-9.716 21.054-16.861zM276.927 71.626a7.264 7.264 0 00-.631-4.213c-.85-1.24-1.931-1.82-4.613-2.161-5.373-.67-27.679 1.43-27.679 1.43a196.129 196.129 0 01-2.371 26.758c6.454 2.462 12.498 5.003 19.223 8.305 13.159-16.53 15.801-27.127 16.071-30.119zM289.075 128.993c-.1-2.181-1.101-4.003-4.663-6.364a220.104 220.104 0 00-43.87-23.015c-2.682 13.509-6.885 25.336-12.489 35.133-5.774 10.146-13.239 18.111-21.744 23.235 25.687-1.742 47.262-5.724 62.802-13.219 17.742-8.605 20.094-12.918 19.964-15.77zM232.389 162.074c-4.263.12-7.565.821-14.66 2.002a75.693 75.693 0 01-15.43 1.11c-3.093-.08-10.007-.15-10.007-.15-3.232-.07-6.905-.16-10.577-.16-7.646 0-17.532.31-26.218 2.732-.46.14-1.001.29-.951.82.05.531.731.431 1.401.441.671.01 7.065-.441 10.207-.441 11.368 0 19.133 2.002 26.638 3.863 7.055 1.781 13.729 3.472 23.016 3.472 9.776 0 18.242-1.251 21.394-4.743a6.086 6.086 0 001.561-5.333c-.77-2.522-2.531-3.703-6.374-3.613zM72.178 131.685c9.646 16.78 23.276 26.226 38.476 26.727a48.032 48.032 0 01-16.761-23.745c-3.533-11.098-5.334-24.206-5.334-38.975a224.05 224.05 0 014.513-43.028c.74-3.132 2.251-5.103 4.443-6.254-15.46-11.447-31.641-18.182-35.474-18.252-2.001 0-2.902.85-3.572 3.092-.67 2.242-2.392 7.655-1.942 30.64.39 20.193 3.082 47.801 15.65 69.795z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ n("path", {
                    d: "M105.422 54.115c-1.071-.9-2.762-2.782-4.463-2.442-1.701.34-2.372 2.632-2.682 4.103a184.763 184.763 0 00-3.612 39.936c.53 16.49 1.68 26.787 5.003 37.113 6.224 19.723 24.356 28.589 35.254 28.589a17.753 17.753 0 006.094-1.091 14.002 14.002 0 002.712-1.471 22.314 22.314 0 01-2.162-3.642c-2.121-4.413-3.202-9.776-3.252-16.401a83.598 83.598 0 016.454-32.561c-11.577-28.758-38.285-51.233-39.346-52.133zM147.501 97.633c7.685-15.91 19.013-29.019 27.439-37.474-5.284-19.453-20.474-47.15-25.237-53.915-.691-1-1.241-1.641-2.232-1.641-.991 0-1.481.65-2.171 1.641-4.764 6.764-19.954 34.452-25.238 53.915 8.456 8.455 19.754 21.563 27.439 37.474zM126.545 27.558c-4.323-3.583-17.541-14.01-19.423-15.39-1.451-1.06-2.351-1.451-3.832-1.211-1.301.22-2.192 1.491-2.832 3.172 0 .06-2.872 9.406-5.864 23.135 10.597 7.164 14.52 11.727 21.014 16.87 2.952-8.145 6.504-18.371 10.937-26.576zM34.132 101.745c6.724-3.302 12.729-5.843 19.223-8.305a196.24 196.24 0 01-2.372-26.757s-22.305-2.101-27.678-1.431c-2.682.33-3.763.92-4.614 2.161a7.264 7.264 0 00-.63 4.213c.28 2.992 2.972 13.589 16.07 30.119zM66.944 134.707c-5.604-9.807-9.796-21.624-12.488-35.133a220.083 220.083 0 00-43.87 23.015c-3.562 2.381-4.573 4.173-4.663 6.364-.13 2.852 2.221 7.165 20.013 15.72 15.531 7.495 37.116 11.477 62.803 13.219-8.546-5.074-16.02-13.039-21.795-23.185zM139.524 167.608c-8.696-2.422-18.572-2.732-26.217-2.732-3.673 0-7.335.08-10.578.16 0 0-6.924.07-10.006.15a75.693 75.693 0 01-15.43-1.11c-7.096-1.181-10.398-1.882-14.66-2.002-3.843-.09-5.635 1.091-6.345 3.593A6.093 6.093 0 0057.849 171c3.152 3.492 11.618 4.743 21.395 4.743 9.266 0 15.94-1.681 23.015-3.472 7.505-1.901 15.27-3.863 26.638-3.863 3.142 0 9.527.451 10.207.441.68-.01 1.351 0 1.401-.441.05-.44-.52-.66-.981-.8z",
                    fill: "#D7153A"
                  })]
                }), /* @__PURE__ */ n("span", {
                  className: "sr-only",
                  children: "NSW Government"
                })]
              })
            }), s ? /* @__PURE__ */ g("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ n("img", {
                src: s,
                alt: a + "logo"
              }), /* @__PURE__ */ n("span", {
                className: "sr-only",
                children: a
              }), /* @__PURE__ */ n("span", {
                className: "sr-only",
                children: i
              })]
            }) : /* @__PURE__ */ g("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ n("div", {
                className: "nsw-header__title",
                children: a
              }), /* @__PURE__ */ n("div", {
                className: "nsw-header__description",
                children: i
              })]
            })]
          }), u ? /* @__PURE__ */ n("div", {
            className: "nsw-header__menu",
            children: /* @__PURE__ */ g("button", {
              type: "button",
              className: "js-open-nav",
              "aria-expanded": "false",
              "aria-controls": "main-nav",
              children: [/* @__PURE__ */ n("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "menu"
              }), /* @__PURE__ */ g("span", {
                children: [/* @__PURE__ */ n("span", {
                  className: "sr-only",
                  children: "Open"
                }), " ", "Menu"]
              })]
            })
          }) : "", l ? /* @__PURE__ */ n("div", {
            className: "nsw-header__search",
            children: /* @__PURE__ */ g("button", {
              ref: m,
              type: "button",
              className: "js-open-search",
              "aria-expanded": "false",
              "aria-controls": "header-search",
              children: [/* @__PURE__ */ n("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              }), /* @__PURE__ */ g("span", {
                className: "nsw-header-btn__sub",
                children: [/* @__PURE__ */ n("span", {
                  className: "sr-only",
                  children: "Show"
                }), " ", "Search"]
              })]
            })
          }) : ""]
        }), l ? /* @__PURE__ */ g("div", {
          id: "header-search",
          className: "nsw-header__search-area js-search-area",
          hidden: !0,
          children: [/* @__PURE__ */ g("form", {
            role: "search",
            onSubmit: d,
            children: [/* @__PURE__ */ n("label", {
              htmlFor: "nsw-header-input",
              className: "sr-only",
              children: "Search site for:"
            }), /* @__PURE__ */ n("input", {
              autoComplete: "off",
              className: "nsw-header__input js-search-input",
              id: "nsw-header-input",
              name: "searchInput",
              type: "text"
            }), /* @__PURE__ */ n("button", {
              className: "nsw-icon-button nsw-icon-button--flex",
              type: "submit",
              "aria-label": "search",
              children: /* @__PURE__ */ n("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              })
            })]
          }), /* @__PURE__ */ g("button", {
            ref: w,
            className: "nsw-icon-button js-close-search",
            "aria-expanded": "true",
            "aria-controls": "header-search",
            children: [/* @__PURE__ */ n("span", {
              className: "material-icons nsw-material-icons nsw-search__close-icon",
              "aria-hidden": "true",
              children: "close"
            }), /* @__PURE__ */ n("span", {
              className: "sr-only",
              children: "Close search"
            })]
          })]
        }) : ""]
      })
    })
  });
}, Jn = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white"
}, Kn = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark"
}, Qn = (e) => e ? typeof e != "number" && typeof e != "string" && typeof e != "boolean" && "src" in e ? /* @__PURE__ */ n("img", {
  className: "nsw-hero-banner__image",
  src: e.src,
  alt: e.alt
}) : e : /* @__PURE__ */ n("div", {
  className: "nsw-hero-banner__bg"
}), jt = ({
  title: e = "Hero Banner",
  intro: a,
  cta: i,
  style: s = "white",
  wide: o,
  featured: c,
  image: u,
  children: l,
  className: d = "",
  ...p
}) => /* @__PURE__ */ n("div", {
  className: `nsw-hero-banner ${s ? Jn[s] : ""} ${o ? "nsw-hero-banner--wide" : ""} ${c ? " nsw-hero-banner--featured" : ""}  ${d}`,
  ...p,
  children: /* @__PURE__ */ n("div", {
    className: "nsw-hero-banner__container",
    children: /* @__PURE__ */ g("div", {
      className: "nsw-hero-banner__wrapper",
      children: [/* @__PURE__ */ g("div", {
        className: "nsw-hero-banner__content nsw-wysiwyg-content",
        children: [/* @__PURE__ */ n("h1", {
          children: e
        }), /* @__PURE__ */ n("div", {
          className: "nsw-intro",
          children: a
        }), i ? /* @__PURE__ */ n("div", {
          className: "nsw-hero-banner__button",
          children: /* @__PURE__ */ n("a", {
            href: i.url,
            className: `nsw-button ${Kn[s]}`,
            onClick: i.onClick,
            children: i.text
          })
        }) : ""]
      }), l, /* @__PURE__ */ n("div", {
        className: "nsw-hero-banner__box",
        role: "presentation",
        children: Qn(u)
      })]
    })
  })
}), Xn = ({
  subtitle: e,
  children: a
}) => /* @__PURE__ */ n("div", {
  className: "nsw-hero-banner__links",
  children: /* @__PURE__ */ g("div", {
    className: "nsw-hero-banner__list",
    children: [/* @__PURE__ */ n("div", {
      className: "nsw-hero-banner__sub-title",
      children: e
    }), a]
  })
});
Xn.propTypes = {
  subtitle: r.exports.string.isRequired,
  children: r.exports.node.isRequired
};
const Ir = ({
  url: e,
  title: a,
  ...i
}) => /* @__PURE__ */ n("li", {
  children: /* @__PURE__ */ n("a", {
    href: `${e}`,
    ...i,
    children: a
  })
});
Ir.propTypes = {
  url: r.exports.string,
  title: r.exports.string
};
const At = ({
  title: e,
  links: a,
  ariaLabel: i = "in page navigation",
  className: s = "",
  ...o
}) => /* @__PURE__ */ g("nav", {
  className: `nsw-in-page-nav ${s}`,
  "aria-labelledby": i,
  ...o,
  children: [/* @__PURE__ */ n("div", {
    id: i,
    className: "nsw-in-page-nav__title",
    children: e
  }), /* @__PURE__ */ n("ul", {
    children: a ? a.map((c) => /* @__PURE__ */ pn(Ir, {
      ...c,
      key: c.title
    })) : ""
  })]
}), Zn = ({
  text: e,
  link: a,
  linkComponent: i = "a",
  children: s,
  onClick: o,
  ...c
}) => {
  const u = i;
  return typeof o == "function" && (c.onClick = o, a || (a = "#")), u === "a" ? (c.href = a, c.rel = (c == null ? void 0 : c.target) === "_blank" ? "nofollow noopener" : void 0) : typeof u == "function" && (c.to = a), a ? /* @__PURE__ */ g("li", {
    className: "nsw-link-list__item",
    children: [/* @__PURE__ */ g(u, {
      ...c,
      children: [/* @__PURE__ */ n("span", {
        children: e
      }), /* @__PURE__ */ n("span", {
        className: "material-icons nsw-material-icons nsw-link-list__icon",
        "aria-hidden": "true",
        children: "east"
      })]
    }), s]
  }) : /* @__PURE__ */ g("li", {
    className: "nsw-link-list__item",
    children: [e, s]
  });
}, Mt = ({
  items: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("div", {
  className: "nsw-link-list",
  children: /* @__PURE__ */ n("ul", {
    className: `nsw-link-list__list ${a}`,
    ...i,
    children: e.map((s, o) => /* @__PURE__ */ n(Zn, {
      ...s
    }, s.href || "" + o))
  })
}), et = (e) => {
  const a = Object.keys(e).sort((i, s) => e[s] - e[i]);
  return a.map((i, s) => {
    let o = "";
    const c = e[i], u = a[s - 1], l = u ? e[u] : null;
    return c >= 0 && (o = `(min-width: ${c}px)`), l !== null && (o && (o += " and "), o += `(max-width: ${l - 1}px)`), {
      breakpoint: i,
      maxWidth: l ? l - 1 : null,
      minWidth: c,
      query: o
    };
  });
}, rt = et, nt = typeof window > "u" ? ge : hn, tt = nt, at = {
  breakpoint: void 0,
  minWidth: void 0,
  maxWidth: void 0
}, st = (e, a, i = !0) => {
  const s = vn(() => rt(e), [e]), [o, c] = xr(() => {
    for (const { query: l, ...d } of s)
      if (typeof window < "u" && !(a && i)) {
        if (window.matchMedia(l).matches)
          return d;
      } else if (d.breakpoint === a)
        return d;
    return at;
  }), u = mn(({ matches: l }, d) => {
    l && c(d);
  }, []);
  return tt(() => {
    const l = s.map(({ query: d, ...p }) => {
      const m = window.matchMedia(d);
      u(m, p);
      const w = (x) => {
        u(x, p);
      };
      return m.addListener(w), () => m.removeListener(w);
    });
    return () => l.forEach((d) => d());
  }, [s, u]), yn(o, (l) => typeof l.breakpoint == "string" ? `${l.breakpoint} (${l.minWidth} \u2264 x${l.maxWidth ? ` < ${l.maxWidth + 1}` : ""})` : ""), o;
}, it = st, ot = {
  mobile: 0,
  tablet: 992
}, qt = (e) => {
  const {
    navItems: a,
    megaMenu: i,
    className: s = "",
    isCloseWhenOutsideClick: o = !0,
    ...c
  } = e, {
    breakpoint: u
  } = it(ot, "mobile"), l = Ne(null), d = () => {
    var m;
    const p = (m = l.current) == null ? void 0 : m.querySelector("ul > li > a.active");
    return p && p.click(), p;
  };
  return ge(() => {
    (async () => {
      const {
        Navigation: p
      } = await import("./main.ca35e5ee.js");
      new p().init();
    })();
  }, []), ge(() => {
    if (o && u !== "mobile") {
      const p = (m) => {
        m.target.closest(".nsw-main-nav__list") || d();
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
  }, [o, u]), /* @__PURE__ */ g("nav", {
    id: "main-nav",
    className: `nsw-main-nav ${s} ${i ? "js-mega-menu" : ""}`,
    "aria-label": "Main Navigation",
    ...c,
    children: [/* @__PURE__ */ g("div", {
      className: "nsw-main-nav__header",
      children: [/* @__PURE__ */ n("div", {
        id: "nsw-main-nav__title",
        children: "Menu"
      }), /* @__PURE__ */ g("button", {
        type: "button",
        className: "nsw-icon-button js-close-nav",
        "aria-expanded": "true",
        children: [/* @__PURE__ */ n("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ n("span", {
          className: "sr-only",
          children: "Close Menu"
        })]
      })]
    }), /* @__PURE__ */ n("ul", {
      ref: l,
      className: "nsw-main-nav__list",
      children: a.map((p, m) => {
        var x, R;
        const w = p.linkComponent || "a";
        return /* @__PURE__ */ n("li", {
          children: /* @__PURE__ */ g(Ue, {
            children: [/* @__PURE__ */ g(w, {
              href: p.url,
              target: p.target,
              children: [/* @__PURE__ */ n("span", {
                children: p.text
              }), (x = p.subNav) != null && x.length ? /* @__PURE__ */ n("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (R = p.subNav) != null && R.length ? /* @__PURE__ */ n(Fr, {
              subNav: p.subNav,
              url: p.url,
              text: p.text,
              target: p.target,
              description: p.description,
              id: p.id,
              linkComponent: w
            }) : ""]
          })
        }, p.id ? `navItem-${p.id}` : p.url + p.text + m);
      })
    })]
  });
}, _r = ({
  url: e,
  text: a,
  description: i,
  id: s,
  target: o,
  linkComponent: c = "a"
}) => /* @__PURE__ */ g(Ue, {
  children: [/* @__PURE__ */ g("div", {
    className: "nsw-main-nav__header",
    children: [/* @__PURE__ */ g("button", {
      type: "button",
      className: "nsw-icon-button nsw-icon-button--flex js-close-sub-nav",
      "aria-controls": `sub-nav-${s}`,
      "aria-expanded": "true",
      children: [/* @__PURE__ */ n("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "keyboard_arrow_left"
      }), /* @__PURE__ */ g("span", {
        children: ["Back", /* @__PURE__ */ n("span", {
          className: "sr-only",
          children: " to previous menu"
        })]
      })]
    }), /* @__PURE__ */ g("button", {
      type: "button",
      className: "nsw-icon-button js-close-nav",
      "aria-expanded": "true",
      children: [/* @__PURE__ */ n("i", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "close"
      }), /* @__PURE__ */ n("span", {
        className: "sr-only",
        children: "Close Menu"
      })]
    })]
  }), /* @__PURE__ */ n("div", {
    className: "nsw-main-nav__title",
    children: /* @__PURE__ */ g(c, {
      href: e,
      target: o,
      children: [/* @__PURE__ */ n("span", {
        children: a
      }), /* @__PURE__ */ n("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "east"
      })]
    })
  }), /* @__PURE__ */ n("div", {
    className: "nsw-main-nav__description",
    children: i
  })]
}), Fr = ({
  id: e = "",
  subNav: a,
  url: i,
  text: s,
  description: o,
  target: c,
  linkComponent: u = "a"
}) => {
  const l = e || Rr();
  return a ? /* @__PURE__ */ g("div", {
    className: "nsw-main-nav__sub-nav",
    id: `sub-nav-${l}`,
    role: "region",
    "aria-label": s,
    children: [/* @__PURE__ */ n(_r, {
      url: i,
      text: s,
      description: o,
      id: l,
      target: c,
      linkComponent: u
    }), /* @__PURE__ */ n("ul", {
      className: "nsw-main-nav__sub-list",
      children: a.map((d, p) => {
        var x, R;
        const m = l + p, w = d.linkComponent || "a";
        return /* @__PURE__ */ n("li", {
          children: /* @__PURE__ */ g(Ue, {
            children: [/* @__PURE__ */ g(w, {
              href: d.url,
              target: d.target,
              children: [/* @__PURE__ */ n("span", {
                children: d.text
              }), (x = d.subNav) != null && x.length ? /* @__PURE__ */ n("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (R = d.subNav) != null && R.length ? /* @__PURE__ */ g("div", {
              className: "nsw-main-nav__sub-nav",
              id: `sub-nav-${m}`,
              role: "region",
              "aria-label": `${s} Submenu`,
              children: [/* @__PURE__ */ n(_r, {
                url: i,
                text: s,
                description: o,
                id: m,
                linkComponent: w
              }), /* @__PURE__ */ n("ul", {
                className: "nsw-main-nav__sub-list",
                children: d.subNav.map((q, I) => {
                  var z;
                  const Y = q.linkComponent || "a";
                  return /* @__PURE__ */ n("li", {
                    children: /* @__PURE__ */ g(Y, {
                      href: q.url,
                      target: q.target,
                      className: "nsw-subnavigation__link",
                      children: [/* @__PURE__ */ n("span", {
                        children: q.text
                      }), (z = q.subNav) != null && z.length ? /* @__PURE__ */ n("span", {
                        className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                        "aria-hidden": "true",
                        children: "keyboard_arrow_right"
                      }) : ""]
                    })
                  }, q.url + q.text + I);
                })
              })]
            }) : ""]
          })
        }, m);
      })
    })]
  }) : null;
};
Fr.propTypes = {
  subNav: r.exports.arrayOf(r.exports.shape({
    url: r.exports.string,
    text: r.exports.string,
    subNav: r.exports.arrayOf
  })).isRequired,
  url: r.exports.string,
  text: r.exports.string,
  description: r.exports.string,
  renderLink: r.exports.func,
  target: r.exports.string
};
const ct = ({
  text: e = "A NSW Government website"
}) => /* @__PURE__ */ n("div", {
  className: "nsw-masthead",
  children: /* @__PURE__ */ n("div", {
    className: "nsw-container",
    children: /* @__PURE__ */ n("p", {
      children: e
    })
  })
});
ct.propTypes = {
  text: r.exports.string
};
const lt = ({
  nav: e,
  content: a
}) => /* @__PURE__ */ g("nav", {
  className: "nsw-skip",
  "aria-label": "Skip to links",
  children: [/* @__PURE__ */ n("a", {
    href: e,
    children: /* @__PURE__ */ n("span", {
      children: "Skip to navigation"
    })
  }), /* @__PURE__ */ n("a", {
    href: a,
    children: /* @__PURE__ */ n("span", {
      children: "Skip to content"
    })
  })]
});
lt.propTypes = {
  nav: r.exports.string.isRequired,
  content: r.exports.string.isRequired
};
const ut = {
  info: "nsw-in-page-alert--info",
  warning: "nsw-in-page-alert--warning",
  error: "nsw-in-page-alert--error",
  success: "nsw-in-page-alert--success"
}, dt = {
  info: "info",
  warning: "cancel",
  error: "error",
  success: "check_circle"
}, ft = ({
  title: e = "",
  as: a,
  children: i,
  className: s = "",
  ...o
}) => /* @__PURE__ */ g("div", {
  className: `nsw-in-page-alert ${s} ${ut[a]}`,
  ...o,
  children: [/* @__PURE__ */ n("span", {
    className: "material-icons nsw-material-icons nsw-in-page-alert__icon",
    children: dt[a]
  }), /* @__PURE__ */ g("div", {
    className: "nsw-in-page-alert__content",
    children: [/* @__PURE__ */ n("h4", {
      children: e
    }), i]
  })]
});
ft.propTypes = {
  as: r.exports.oneOf(["info", "warning", "error", "success"]).isRequired,
  children: r.exports.node.isRequired,
  className: r.exports.string,
  title: r.exports.string
};
const pt = ({
  backLink: e,
  active: a,
  nextLink: i,
  paginationItems: s,
  className: o,
  children: c,
  ...u
}) => /* @__PURE__ */ n("div", {
  className: `nsw-container ${o}`,
  ...u,
  children: /* @__PURE__ */ n("nav", {
    className: "nsw-pagination",
    "aria-label": "Pagination",
    children: /* @__PURE__ */ g("ul", {
      children: [/* @__PURE__ */ n("li", {
        children: /* @__PURE__ */ g("a", {
          className: "nsw-icon-button",
          href: e,
          children: [/* @__PURE__ */ n("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_left"
          }), /* @__PURE__ */ n("span", {
            className: "sr-only",
            children: "Back"
          })]
        })
      }), s ? s.map((l, d) => /* @__PURE__ */ n(Dr, {
        url: l.url,
        page: d + 1,
        active: a
      }, `pagination-${d}`)) : "", c, /* @__PURE__ */ n("li", {
        children: /* @__PURE__ */ g("a", {
          href: i,
          className: "nsw-icon-button",
          children: [/* @__PURE__ */ n("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_right"
          }), /* @__PURE__ */ n("span", {
            className: "sr-only",
            children: "Next"
          })]
        })
      })]
    })
  })
});
pt.propTypes = {
  className: r.exports.string,
  paginationItems: r.exports.arrayOf(r.exports.shape({
    url: r.exports.string
  })),
  children: r.exports.node,
  backLink: r.exports.string,
  nextLink: r.exports.string,
  active: r.exports.number
};
const Dr = ({
  url: e,
  page: a,
  active: i
}) => /* @__PURE__ */ n("li", {
  children: /* @__PURE__ */ n("a", {
    className: i === a ? "active" : "",
    href: e,
    children: /* @__PURE__ */ g("span", {
      children: [/* @__PURE__ */ n("span", {
        className: "sr-only",
        children: "Page "
      }), a]
    })
  })
});
Dr.propTypes = {
  page: r.exports.number,
  active: r.exports.number,
  url: r.exports.string
};
const ht = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding"
}, vt = ({
  children: e,
  style: a = "white",
  container: i = !0,
  padding: s = "full",
  box: o = !1,
  className: c = "",
  ...u
}) => /* @__PURE__ */ n("div", {
  className: `nsw-section ${c} ${ht[s]} nsw-section--${a} ${o ? "nsw-section--box" : ""}`,
  ...u,
  children: /* @__PURE__ */ n("div", {
    className: i ? "nsw-container" : "",
    children: e
  })
});
vt.propTypes = {
  padding: r.exports.oneOf(["full", "half", "none"]),
  style: r.exports.oneOf(["white", "brand-dark", "brand-light", "brand-supplementary", "black", "off-white", "grey-01", "grey-02", "grey-03", "grey-04"]),
  children: r.exports.node.isRequired,
  container: r.exports.bool,
  className: r.exports.string,
  box: r.exports.bool
};
const mt = ({
  caption: e,
  headers: a,
  data: i,
  striped: s = !1,
  bordered: o,
  captionTop: c,
  className: u = "",
  firstCellIsHeader: l,
  ...d
}) => /* @__PURE__ */ g("table", {
  className: `nsw-table ${s ? "nsw-table--striped " : " "} ${o ? "nsw-table--bordered " : " "} ${c ? "nsw-table--caption-top " : " "} ${u}`,
  ...d,
  children: [e && /* @__PURE__ */ n(zr, {
    tableCaption: e
  }), /* @__PURE__ */ n(Wr, {
    children: /* @__PURE__ */ n(ze, {
      children: a.map((p, m) => /* @__PURE__ */ n(Ye, {
        title: p.title,
        width: p.width
      }, `tableHeader-${ne()}`))
    })
  }), /* @__PURE__ */ n(Lr, {
    children: i.map((p, m) => /* @__PURE__ */ n(ze, {
      children: a.map((w, x) => x === 0 && l === !0 ? /* @__PURE__ */ n(Ye, {
        scope: "row",
        title: p[w.key] ? p[w.key] : ""
      }, `tableHeader-${ne()}`) : /* @__PURE__ */ n(Yr, {
        data: p[w.key] ? p[w.key] : ""
      }, `tableCell-${ne()}`))
    }, `tableRow-${ne()}`))
  })]
});
mt.propTypes = {
  caption: r.exports.string,
  headers: r.exports.arrayOf(Object).isRequired,
  data: r.exports.arrayOf(Object).isRequired,
  striped: r.exports.bool,
  bordered: r.exports.bool,
  captionTop: r.exports.bool,
  className: r.exports.string,
  firstCellIsHeader: r.exports.bool
};
const Lr = ({
  className: e = "",
  ...a
}) => /* @__PURE__ */ n("tbody", {
  className: e,
  ...a
});
Lr.propTypes = {
  className: r.exports.string
};
const Wr = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("thead", {
  className: a,
  ...i,
  children: e
});
Wr.propTypes = {
  children: r.exports.node,
  className: r.exports.string
};
const Ye = ({
  title: e,
  width: a,
  scope: i = "col",
  className: s = "",
  ...o
}) => (o.width = a ? `${a}%` : void 0, /* @__PURE__ */ n("th", {
  ...o,
  className: s,
  scope: i,
  children: e
}));
Ye.propTypes = {
  title: r.exports.string.isRequired,
  width: r.exports.number,
  className: r.exports.string,
  scope: r.exports.string
};
const Yr = ({
  data: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("td", {
  className: a,
  ...i,
  children: e
});
Yr.propTypes = {
  data: r.exports.string,
  className: r.exports.string
};
const ze = ({
  children: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("tr", {
  className: a,
  ...i,
  children: e
});
ze.propTypes = {
  children: r.exports.node,
  className: r.exports.string
};
const zr = ({
  captionId: e,
  tableCaption: a,
  className: i = "",
  ...s
}) => a ? /* @__PURE__ */ n("caption", {
  className: i,
  ...s,
  children: a
}) : null;
zr.propTypes = {
  tableCaption: r.exports.string,
  captionId: r.exports.string,
  className: r.exports.string
};
const yt = ({
  children: e
}) => /* @__PURE__ */ n("div", {
  className: "nsw-table-responsive",
  role: "region",
  children: e
});
yt.propTypes = {
  children: r.exports.node
};
const gt = (e) => {
  const {
    className: a = "",
    children: i,
    ...s
  } = e, o = Ne(null);
  return ge(() => {
    (async () => {
      const {
        Tabs: c
      } = await import("./main.ca35e5ee.js");
      new c(o.current).init();
    })();
  }, []), /* @__PURE__ */ n("div", {
    ref: o,
    className: `nsw-tabs js-tabs ${a}`,
    ...s,
    children: i
  });
};
gt.propTypes = {
  className: r.exports.string,
  children: r.exports.node
};
const bt = ({
  children: e
}) => /* @__PURE__ */ n("ul", {
  className: "nsw-tabs__list",
  children: e
});
bt.propTypes = {
  children: r.exports.node.isRequired
};
const _t = ({
  urlHash: e,
  title: a
}) => /* @__PURE__ */ n("li", {
  className: "nsw-tabs__list-item",
  children: /* @__PURE__ */ n("a", {
    href: `#${e}`,
    className: "nsw-tabs__link",
    children: a
  })
});
_t.propTypes = {
  urlHash: r.exports.string.isRequired,
  title: r.exports.string.isRequired
};
const xt = ({
  urlHash: e,
  children: a
}) => /* @__PURE__ */ n("section", {
  id: e,
  className: "nsw-tabs__content",
  children: a
});
xt.propTypes = {
  urlHash: r.exports.string.isRequired,
  children: r.exports.node.isRequired
};
const Br = ({
  link: e,
  text: a,
  linkComponent: i = "a",
  className: s = "",
  ...o
}) => {
  const c = "span", u = i;
  return u === "a" ? o.href = e : typeof u == "function" && (o.to = e), e ? /* @__PURE__ */ n(u, {
    className: `nsw-tag ${s}`,
    ...o,
    children: a
  }) : /* @__PURE__ */ n(c, {
    ...o,
    className: `nsw-tag ${s}`,
    children: a
  });
};
Br.propTypes = {
  className: r.exports.string,
  link: r.exports.string,
  text: r.exports.string.isRequired,
  linkComponent: r.exports.oneOfType([r.exports.string, r.exports.func])
};
const It = ({
  tags: e,
  className: a = "",
  ...i
}) => /* @__PURE__ */ n("div", {
  className: `nsw-list nsw-list--8 ${a}`,
  ...i,
  children: e.map((s) => /* @__PURE__ */ n(Br, {
    ...s,
    linkComponent: s.linkComponent,
    link: s.link,
    text: s.text
  }, s.text))
}), wt = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent"
}, Tt = ({
  image: e,
  video: a,
  title: i,
  caption: s,
  left: o,
  right: c,
  center: u,
  children: l,
  style: d = "default"
}) => /* @__PURE__ */ g("figure", {
  className: `nsw-media${o === void 0 || o === "none" ? "" : ` nsw-media--left-${o}`}
		${wt[d]}
		${c === void 0 || c === "none" ? "" : ` nsw-media--right-${c}`}
		${u === void 0 || u === "none" ? "" : ` nsw-media--${u}`}`,
  children: [a ? /* @__PURE__ */ n("div", {
    className: "nsw-media__video",
    children: /* @__PURE__ */ n("iframe", {
      src: a,
      title: i,
      frameBorder: "0",
      allowFullScreen: !0
    })
  }) : "", e ? /* @__PURE__ */ n("img", {
    src: e,
    alt: i
  }) : "", l, !!s && /* @__PURE__ */ n("figcaption", {
    children: s
  })]
});
Tt.propTypes = {
  style: r.exports.oneOf(["default", "dark", "light", "transparent"]),
  video: r.exports.string,
  image: r.exports.string,
  caption: r.exports.string,
  title: r.exports.string,
  right: r.exports.oneOf(["none", "30", "40", "50"]),
  left: r.exports.oneOf(["none", "30", "40", "50"]),
  center: r.exports.oneOf(["none", "60", "70", "80", "90"])
};
export {
  $n as Accordion,
  On as AccordionGroup,
  ft as Alert,
  Sn as Breadcrumbs,
  jn as Button,
  An as Callout,
  Nt as Card,
  Et as CardCopy,
  Dn as ContentBlock,
  St as Footer,
  Ct as FooterLinks,
  Ot as FooterLower,
  kt as FooterSectionGroup,
  $t as FooterUpper,
  Ve as FormGroup,
  Bn as FormGroupCheckbox,
  Hn as FormGroupRadio,
  zn as FormGroupSelect,
  Wn as FormGroupText,
  oe as FormHelper,
  Sr as FormLabel,
  Gn as GlobalAlert,
  Pt as Header,
  jt as HeroBanner,
  Xn as HeroBannerList,
  At as InPageNavLinks,
  Mt as LinkList,
  qt as MainNav,
  ct as Masthead,
  Tt as Media,
  pt as Pagination,
  Un as ProgressIndicator,
  vt as Section,
  Ar as Select,
  jr as SelectItem,
  lt as SkipTo,
  _t as TabItem,
  bt as TabItemWrapper,
  xt as TabSection,
  mt as Table,
  yt as TableResponsiveWrapper,
  gt as Tabs,
  It as TagList,
  Pr as TextInput
};
