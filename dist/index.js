import ge, { useId as gn, useState as br, Fragment as He, useRef as Ne, useEffect as xe, createElement as xn, useLayoutEffect as yn, useMemo as bn, useCallback as _n, useDebugValue as wn } from "react";
function Tn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var e = { exports: {} }, Ae = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Rn() {
  if (cr)
    return F;
  cr = 1;
  var r = typeof Symbol == "function" && Symbol.for, s = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, l = r ? Symbol.for("react.provider") : 60109, u = r ? Symbol.for("react.context") : 60110, p = r ? Symbol.for("react.async_mode") : 60111, x = r ? Symbol.for("react.concurrent_mode") : 60111, f = r ? Symbol.for("react.forward_ref") : 60112, _ = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, R = r ? Symbol.for("react.memo") : 60115, W = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, Y = r ? Symbol.for("react.fundamental") : 60117, V = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
  function G(y) {
    if (typeof y == "object" && y !== null) {
      var se = y.$$typeof;
      switch (se) {
        case s:
          switch (y = y.type, y) {
            case p:
            case x:
            case a:
            case c:
            case o:
            case _:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case u:
                case f:
                case W:
                case R:
                case l:
                  return y;
                default:
                  return se;
              }
          }
        case i:
          return se;
      }
    }
  }
  function H(y) {
    return G(y) === x;
  }
  return F.AsyncMode = p, F.ConcurrentMode = x, F.ContextConsumer = u, F.ContextProvider = l, F.Element = s, F.ForwardRef = f, F.Fragment = a, F.Lazy = W, F.Memo = R, F.Portal = i, F.Profiler = c, F.StrictMode = o, F.Suspense = _, F.isAsyncMode = function(y) {
    return H(y) || G(y) === p;
  }, F.isConcurrentMode = H, F.isContextConsumer = function(y) {
    return G(y) === u;
  }, F.isContextProvider = function(y) {
    return G(y) === l;
  }, F.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === s;
  }, F.isForwardRef = function(y) {
    return G(y) === f;
  }, F.isFragment = function(y) {
    return G(y) === a;
  }, F.isLazy = function(y) {
    return G(y) === W;
  }, F.isMemo = function(y) {
    return G(y) === R;
  }, F.isPortal = function(y) {
    return G(y) === i;
  }, F.isProfiler = function(y) {
    return G(y) === c;
  }, F.isStrictMode = function(y) {
    return G(y) === o;
  }, F.isSuspense = function(y) {
    return G(y) === _;
  }, F.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === a || y === x || y === c || y === o || y === _ || y === w || typeof y == "object" && y !== null && (y.$$typeof === W || y.$$typeof === R || y.$$typeof === l || y.$$typeof === u || y.$$typeof === f || y.$$typeof === Y || y.$$typeof === V || y.$$typeof === z || y.$$typeof === M);
  }, F.typeOf = G, F;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Nn() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, s = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, l = r ? Symbol.for("react.provider") : 60109, u = r ? Symbol.for("react.context") : 60110, p = r ? Symbol.for("react.async_mode") : 60111, x = r ? Symbol.for("react.concurrent_mode") : 60111, f = r ? Symbol.for("react.forward_ref") : 60112, _ = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, R = r ? Symbol.for("react.memo") : 60115, W = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, Y = r ? Symbol.for("react.fundamental") : 60117, V = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
    function G(m) {
      return typeof m == "string" || typeof m == "function" || m === a || m === x || m === c || m === o || m === _ || m === w || typeof m == "object" && m !== null && (m.$$typeof === W || m.$$typeof === R || m.$$typeof === l || m.$$typeof === u || m.$$typeof === f || m.$$typeof === Y || m.$$typeof === V || m.$$typeof === z || m.$$typeof === M);
    }
    function H(m) {
      if (typeof m == "object" && m !== null) {
        var ee = m.$$typeof;
        switch (ee) {
          case s:
            var he = m.type;
            switch (he) {
              case p:
              case x:
              case a:
              case c:
              case o:
              case _:
                return he;
              default:
                var le = he && he.$$typeof;
                switch (le) {
                  case u:
                  case f:
                  case W:
                  case R:
                  case l:
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
    var y = p, se = x, ye = u, be = l, ue = s, _e = f, de = a, pe = W, X = R, Q = i, ae = c, Z = o, te = _, ce = !1;
    function fe(m) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(m) || H(m) === p;
    }
    function h(m) {
      return H(m) === x;
    }
    function b(m) {
      return H(m) === u;
    }
    function $(m) {
      return H(m) === l;
    }
    function C(m) {
      return typeof m == "object" && m !== null && m.$$typeof === s;
    }
    function N(m) {
      return H(m) === f;
    }
    function j(m) {
      return H(m) === a;
    }
    function E(m) {
      return H(m) === W;
    }
    function O(m) {
      return H(m) === R;
    }
    function k(m) {
      return H(m) === i;
    }
    function q(m) {
      return H(m) === c;
    }
    function S(m) {
      return H(m) === o;
    }
    function J(m) {
      return H(m) === _;
    }
    D.AsyncMode = y, D.ConcurrentMode = se, D.ContextConsumer = ye, D.ContextProvider = be, D.Element = ue, D.ForwardRef = _e, D.Fragment = de, D.Lazy = pe, D.Memo = X, D.Portal = Q, D.Profiler = ae, D.StrictMode = Z, D.Suspense = te, D.isAsyncMode = fe, D.isConcurrentMode = h, D.isContextConsumer = b, D.isContextProvider = $, D.isElement = C, D.isForwardRef = N, D.isFragment = j, D.isLazy = E, D.isMemo = O, D.isPortal = k, D.isProfiler = q, D.isStrictMode = S, D.isSuspense = J, D.isValidElementType = G, D.typeOf = H;
  }()), D;
}
var ur;
function _r() {
  return ur || (ur = 1, function(r) {
    process.env.NODE_ENV === "production" ? r.exports = Rn() : r.exports = Nn();
  }(Ae)), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qe, dr;
function En() {
  if (dr)
    return qe;
  dr = 1;
  var r = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function a(c) {
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
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var p = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        x[f] = f;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qe = o() ? Object.assign : function(c, l) {
    for (var u, p = a(c), x, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var _ in u)
        s.call(u, _) && (p[_] = u[_]);
      if (r) {
        x = r(u);
        for (var w = 0; w < x.length; w++)
          i.call(u, x[w]) && (p[x[w]] = u[x[w]]);
      }
    }
    return p;
  }, qe;
}
var Me, pr;
function Ue() {
  if (pr)
    return Me;
  pr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = r, Me;
}
var Ie, fr;
function wr() {
  return fr || (fr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var Fe, hr;
function On() {
  if (hr)
    return Fe;
  hr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = Ue(), i = {}, a = wr();
    r = function(c) {
      var l = "Warning: " + c;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function o(c, l, u, p, x) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in c)
        if (a(c, f)) {
          var _;
          try {
            if (typeof c[f] != "function") {
              var w = Error(
                (p || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            _ = c[f](l, f, p, u, null, s);
          } catch (W) {
            _ = W;
          }
          if (_ && !(_ instanceof Error) && r(
            (p || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in i)) {
            i[_.message] = !0;
            var R = x ? x() : "";
            r(
              "Failed " + u + " type: " + _.message + (R != null ? R : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, Fe = o, Fe;
}
var De, vr;
function Cn() {
  if (vr)
    return De;
  vr = 1;
  var r = _r(), s = En(), i = Ue(), a = wr(), o = On(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(u) {
    var p = "Warning: " + u;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return De = function(u, p) {
    var x = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function _(h) {
      var b = h && (x && h[x] || h[f]);
      if (typeof b == "function")
        return b;
    }
    var w = "<<anonymous>>", R = {
      array: V("array"),
      bigint: V("bigint"),
      bool: V("boolean"),
      func: V("function"),
      number: V("number"),
      object: V("object"),
      string: V("string"),
      symbol: V("symbol"),
      any: z(),
      arrayOf: G,
      element: H(),
      elementType: y(),
      instanceOf: se,
      node: _e(),
      objectOf: be,
      oneOf: ye,
      oneOfType: ue,
      shape: pe,
      exact: X
    };
    function W(h, b) {
      return h === b ? h !== 0 || 1 / h === 1 / b : h !== h && b !== b;
    }
    function M(h, b) {
      this.message = h, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function Y(h) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, $ = 0;
      function C(j, E, O, k, q, S, J) {
        if (k = k || w, S = S || O, J !== i) {
          if (p) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = k + ":" + O;
            !b[ee] && $ < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ee] = !0, $++);
          }
        }
        return E[O] == null ? j ? E[O] === null ? new M("The " + q + " `" + S + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new M("The " + q + " `" + S + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : h(E, O, k, q, S);
      }
      var N = C.bind(null, !1);
      return N.isRequired = C.bind(null, !0), N;
    }
    function V(h) {
      function b($, C, N, j, E, O) {
        var k = $[C], q = Z(k);
        if (q !== h) {
          var S = te(k);
          return new M(
            "Invalid " + j + " `" + E + "` of type " + ("`" + S + "` supplied to `" + N + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return Y(b);
    }
    function z() {
      return Y(l);
    }
    function G(h) {
      function b($, C, N, j, E) {
        if (typeof h != "function")
          return new M("Property `" + E + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var O = $[C];
        if (!Array.isArray(O)) {
          var k = Z(O);
          return new M("Invalid " + j + " `" + E + "` of type " + ("`" + k + "` supplied to `" + N + "`, expected an array."));
        }
        for (var q = 0; q < O.length; q++) {
          var S = h(O, q, N, j, E + "[" + q + "]", i);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return Y(b);
    }
    function H() {
      function h(b, $, C, N, j) {
        var E = b[$];
        if (!u(E)) {
          var O = Z(E);
          return new M("Invalid " + N + " `" + j + "` of type " + ("`" + O + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(h);
    }
    function y() {
      function h(b, $, C, N, j) {
        var E = b[$];
        if (!r.isValidElementType(E)) {
          var O = Z(E);
          return new M("Invalid " + N + " `" + j + "` of type " + ("`" + O + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(h);
    }
    function se(h) {
      function b($, C, N, j, E) {
        if (!($[C] instanceof h)) {
          var O = h.name || w, k = fe($[C]);
          return new M("Invalid " + j + " `" + E + "` of type " + ("`" + k + "` supplied to `" + N + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return Y(b);
    }
    function ye(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), l;
      function b($, C, N, j, E) {
        for (var O = $[C], k = 0; k < h.length; k++)
          if (W(O, h[k]))
            return null;
        var q = JSON.stringify(h, function(J, m) {
          var ee = te(m);
          return ee === "symbol" ? String(m) : m;
        });
        return new M("Invalid " + j + " `" + E + "` of value `" + String(O) + "` " + ("supplied to `" + N + "`, expected one of " + q + "."));
      }
      return Y(b);
    }
    function be(h) {
      function b($, C, N, j, E) {
        if (typeof h != "function")
          return new M("Property `" + E + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var O = $[C], k = Z(O);
        if (k !== "object")
          return new M("Invalid " + j + " `" + E + "` of type " + ("`" + k + "` supplied to `" + N + "`, expected an object."));
        for (var q in O)
          if (a(O, q)) {
            var S = h(O, q, N, j, E + "." + q, i);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return Y(b);
    }
    function ue(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var b = 0; b < h.length; b++) {
        var $ = h[b];
        if (typeof $ != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce($) + " at index " + b + "."
          ), l;
      }
      function C(N, j, E, O, k) {
        for (var q = [], S = 0; S < h.length; S++) {
          var J = h[S], m = J(N, j, E, O, k, i);
          if (m == null)
            return null;
          m.data && a(m.data, "expectedType") && q.push(m.data.expectedType);
        }
        var ee = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new M("Invalid " + O + " `" + k + "` supplied to " + ("`" + E + "`" + ee + "."));
      }
      return Y(C);
    }
    function _e() {
      function h(b, $, C, N, j) {
        return Q(b[$]) ? null : new M("Invalid " + N + " `" + j + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return Y(h);
    }
    function de(h, b, $, C, N) {
      return new M(
        (h || "React class") + ": " + b + " type `" + $ + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function pe(h) {
      function b($, C, N, j, E) {
        var O = $[C], k = Z(O);
        if (k !== "object")
          return new M("Invalid " + j + " `" + E + "` of type `" + k + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var q in h) {
          var S = h[q];
          if (typeof S != "function")
            return de(N, j, E, q, te(S));
          var J = S(O, q, N, j, E + "." + q, i);
          if (J)
            return J;
        }
        return null;
      }
      return Y(b);
    }
    function X(h) {
      function b($, C, N, j, E) {
        var O = $[C], k = Z(O);
        if (k !== "object")
          return new M("Invalid " + j + " `" + E + "` of type `" + k + "` " + ("supplied to `" + N + "`, expected `object`."));
        var q = s({}, $[C], h);
        for (var S in q) {
          var J = h[S];
          if (a(h, S) && typeof J != "function")
            return de(N, j, E, S, te(J));
          if (!J)
            return new M(
              "Invalid " + j + " `" + E + "` key `" + S + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify($[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var m = J(O, S, N, j, E + "." + S, i);
          if (m)
            return m;
        }
        return null;
      }
      return Y(b);
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
          if (h === null || u(h))
            return !0;
          var b = _(h);
          if (b) {
            var $ = b.call(h), C;
            if (b !== h.entries) {
              for (; !(C = $.next()).done; )
                if (!Q(C.value))
                  return !1;
            } else
              for (; !(C = $.next()).done; ) {
                var N = C.value;
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
    function ae(h, b) {
      return h === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function Z(h) {
      var b = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : ae(b, h) ? "symbol" : b;
    }
    function te(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var b = Z(h);
      if (b === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function ce(h) {
      var b = te(h);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function fe(h) {
      return !h.constructor || !h.constructor.name ? w : h.constructor.name;
    }
    return R.checkPropTypes = o, R.resetWarningCache = o.resetWarningCache, R.PropTypes = R, R;
  }, De;
}
var Le, mr;
function $n() {
  if (mr)
    return Le;
  mr = 1;
  var r = Ue();
  function s() {
  }
  function i() {
  }
  return i.resetWarningCache = s, Le = function() {
    function a(l, u, p, x, f, _) {
      if (_ !== r) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    a.isRequired = a;
    function o() {
      return a;
    }
    var c = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: o,
      element: a,
      elementType: a,
      instanceOf: o,
      node: a,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: i,
      resetWarningCache: s
    };
    return c.PropTypes = c, c;
  }, Le;
}
if (process.env.NODE_ENV !== "production") {
  var kn = _r(), Sn = !0;
  e.exports = Cn()(kn.isElement, Sn);
} else
  e.exports = $n()();
const Tr = (r = "", s = "-") => (r + gn()).replace(/\:/g, s);
var Ce = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Pn() {
  if (gr)
    return Te;
  gr = 1;
  var r = ge, s = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, p, x) {
    var f, _ = {}, w = null, R = null;
    x !== void 0 && (w = "" + x), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (R = p.ref);
    for (f in p)
      a.call(p, f) && !c.hasOwnProperty(f) && (_[f] = p[f]);
    if (u && u.defaultProps)
      for (f in p = u.defaultProps, p)
        _[f] === void 0 && (_[f] = p[f]);
    return { $$typeof: s, type: u, key: w, ref: R, props: _, _owner: o.current };
  }
  return Te.Fragment = i, Te.jsx = l, Te.jsxs = l, Te;
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
var xr;
function jn() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ge, s = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), W = Symbol.iterator, M = "@@iterator";
    function Y(n) {
      if (n === null || typeof n != "object")
        return null;
      var d = W && n[W] || n[M];
      return typeof d == "function" ? d : null;
    }
    var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function z(n) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), T = 1; T < d; T++)
          v[T - 1] = arguments[T];
        G("error", n, v);
      }
    }
    function G(n, d, v) {
      {
        var T = V.ReactDebugCurrentFrame, I = T.getStackAddendum();
        I !== "" && (d += "%s", v = v.concat([I]));
        var L = v.map(function(A) {
          return String(A);
        });
        L.unshift("Warning: " + d), Function.prototype.apply.call(console[n], console, L);
      }
    }
    var H = !1, y = !1, se = !1, ye = !1, be = !1, ue;
    ue = Symbol.for("react.module.reference");
    function _e(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === c || be || n === o || n === x || n === f || ye || n === R || H || y || se || typeof n == "object" && n !== null && (n.$$typeof === w || n.$$typeof === _ || n.$$typeof === l || n.$$typeof === u || n.$$typeof === p || n.$$typeof === ue || n.getModuleId !== void 0));
    }
    function de(n, d, v) {
      var T = n.displayName;
      if (T)
        return T;
      var I = d.displayName || d.name || "";
      return I !== "" ? v + "(" + I + ")" : v;
    }
    function pe(n) {
      return n.displayName || "Context";
    }
    function X(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case x:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            var d = n;
            return pe(d) + ".Consumer";
          case l:
            var v = n;
            return pe(v._context) + ".Provider";
          case p:
            return de(n, n.render, "ForwardRef");
          case _:
            var T = n.displayName || null;
            return T !== null ? T : X(n.type) || "Memo";
          case w: {
            var I = n, L = I._payload, A = I._init;
            try {
              return X(A(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ae = 0, Z, te, ce, fe, h, b, $;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function N() {
      {
        if (ae === 0) {
          Z = console.log, te = console.info, ce = console.warn, fe = console.error, h = console.group, b = console.groupCollapsed, $ = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: C,
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
        ae++;
      }
    }
    function j() {
      {
        if (ae--, ae === 0) {
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
              value: fe
            }),
            group: Q({}, n, {
              value: h
            }),
            groupCollapsed: Q({}, n, {
              value: b
            }),
            groupEnd: Q({}, n, {
              value: $
            })
          });
        }
        ae < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = V.ReactCurrentDispatcher, O;
    function k(n, d, v) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (I) {
            var T = I.stack.trim().match(/\n( *(at )?)/);
            O = T && T[1] || "";
          }
        return `
` + O + n;
      }
    }
    var q = !1, S;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      S = new J();
    }
    function m(n, d) {
      if (!n || q)
        return "";
      {
        var v = S.get(n);
        if (v !== void 0)
          return v;
      }
      var T;
      q = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = E.current, E.current = null, N();
      try {
        if (d) {
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
            Reflect.construct(n, [], A);
          } else {
            try {
              A.call();
            } catch (ie) {
              T = ie;
            }
            n.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            T = ie;
          }
          n();
        }
      } catch (ie) {
        if (ie && T && typeof ie.stack == "string") {
          for (var P = ie.stack.split(`
`), K = T.stack.split(`
`), B = P.length - 1, U = K.length - 1; B >= 1 && U >= 0 && P[B] !== K[U]; )
            U--;
          for (; B >= 1 && U >= 0; B--, U--)
            if (P[B] !== K[U]) {
              if (B !== 1 || U !== 1)
                do
                  if (B--, U--, U < 0 || P[B] !== K[U]) {
                    var re = `
` + P[B].replace(" at new ", " at ");
                    return n.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", n.displayName)), typeof n == "function" && S.set(n, re), re;
                  }
                while (B >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        q = !1, E.current = L, j(), Error.prepareStackTrace = I;
      }
      var me = n ? n.displayName || n.name : "", or = me ? k(me) : "";
      return typeof n == "function" && S.set(n, or), or;
    }
    function ee(n, d, v) {
      return m(n, !1);
    }
    function he(n) {
      var d = n.prototype;
      return !!(d && d.isReactComponent);
    }
    function le(n, d, v) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return m(n, he(n));
      if (typeof n == "string")
        return k(n);
      switch (n) {
        case x:
          return k("Suspense");
        case f:
          return k("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case p:
            return ee(n.render);
          case _:
            return le(n.type, d, v);
          case w: {
            var T = n, I = T._payload, L = T._init;
            try {
              return le(L(I), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Je = {}, Ke = V.ReactDebugCurrentFrame;
    function Oe(n) {
      if (n) {
        var d = n._owner, v = le(n.type, n._source, d ? d.type : null);
        Ke.setExtraStackFrame(v);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Kr(n, d, v, T, I) {
      {
        var L = Function.call.bind(Ee);
        for (var A in n)
          if (L(n, A)) {
            var P = void 0;
            try {
              if (typeof n[A] != "function") {
                var K = Error((T || "React class") + ": " + v + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              P = n[A](d, A, T, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              P = B;
            }
            P && !(P instanceof Error) && (Oe(I), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", v, A, typeof P), Oe(null)), P instanceof Error && !(P.message in Je) && (Je[P.message] = !0, Oe(I), z("Failed %s type: %s", v, P.message), Oe(null));
          }
      }
    }
    var Qr = Array.isArray;
    function $e(n) {
      return Qr(n);
    }
    function Xr(n) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return v;
      }
    }
    function Zr(n) {
      try {
        return Qe(n), !1;
      } catch {
        return !0;
      }
    }
    function Qe(n) {
      return "" + n;
    }
    function Xe(n) {
      if (Zr(n))
        return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xr(n)), Qe(n);
    }
    var we = V.ReactCurrentOwner, en = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, er, ke;
    ke = {};
    function rn(n) {
      if (Ee.call(n, "ref")) {
        var d = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function nn(n) {
      if (Ee.call(n, "key")) {
        var d = Object.getOwnPropertyDescriptor(n, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function tn(n, d) {
      if (typeof n.ref == "string" && we.current && d && we.current.stateNode !== d) {
        var v = X(we.current.type);
        ke[v] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(we.current.type), n.ref), ke[v] = !0);
      }
    }
    function sn(n, d) {
      {
        var v = function() {
          Ze || (Ze = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function an(n, d) {
      {
        var v = function() {
          er || (er = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var on = function(n, d, v, T, I, L, A) {
      var P = {
        $$typeof: s,
        type: n,
        key: d,
        ref: v,
        props: A,
        _owner: L
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
        value: I
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function cn(n, d, v, T, I) {
      {
        var L, A = {}, P = null, K = null;
        v !== void 0 && (Xe(v), P = "" + v), nn(d) && (Xe(d.key), P = "" + d.key), rn(d) && (K = d.ref, tn(d, I));
        for (L in d)
          Ee.call(d, L) && !en.hasOwnProperty(L) && (A[L] = d[L]);
        if (n && n.defaultProps) {
          var B = n.defaultProps;
          for (L in B)
            A[L] === void 0 && (A[L] = B[L]);
        }
        if (P || K) {
          var U = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          P && sn(A, U), K && an(A, U);
        }
        return on(n, P, K, I, T, we.current, A);
      }
    }
    var Se = V.ReactCurrentOwner, rr = V.ReactDebugCurrentFrame;
    function ve(n) {
      if (n) {
        var d = n._owner, v = le(n.type, n._source, d ? d.type : null);
        rr.setExtraStackFrame(v);
      } else
        rr.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function je(n) {
      return typeof n == "object" && n !== null && n.$$typeof === s;
    }
    function nr() {
      {
        if (Se.current) {
          var n = X(Se.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function ln(n) {
      {
        if (n !== void 0) {
          var d = n.fileName.replace(/^.*[\\\/]/, ""), v = n.lineNumber;
          return `

Check your code at ` + d + ":" + v + ".";
        }
        return "";
      }
    }
    var tr = {};
    function un(n) {
      {
        var d = nr();
        if (!d) {
          var v = typeof n == "string" ? n : n.displayName || n.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function sr(n, d) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var v = un(d);
        if (tr[v])
          return;
        tr[v] = !0;
        var T = "";
        n && n._owner && n._owner !== Se.current && (T = " It was passed a child from " + X(n._owner.type) + "."), ve(n), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, T), ve(null);
      }
    }
    function ar(n, d) {
      {
        if (typeof n != "object")
          return;
        if ($e(n))
          for (var v = 0; v < n.length; v++) {
            var T = n[v];
            je(T) && sr(T, d);
          }
        else if (je(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var I = Y(n);
          if (typeof I == "function" && I !== n.entries)
            for (var L = I.call(n), A; !(A = L.next()).done; )
              je(A.value) && sr(A.value, d);
        }
      }
    }
    function dn(n) {
      {
        var d = n.type;
        if (d == null || typeof d == "string")
          return;
        var v;
        if (typeof d == "function")
          v = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === p || d.$$typeof === _))
          v = d.propTypes;
        else
          return;
        if (v) {
          var T = X(d);
          Kr(v, n.props, "prop", T, n);
        } else if (d.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var I = X(d);
          z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pn(n) {
      {
        for (var d = Object.keys(n.props), v = 0; v < d.length; v++) {
          var T = d[v];
          if (T !== "children" && T !== "key") {
            ve(n), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ve(null);
            break;
          }
        }
        n.ref !== null && (ve(n), z("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function ir(n, d, v, T, I, L) {
      {
        var A = _e(n);
        if (!A) {
          var P = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = ln(I);
          K ? P += K : P += nr();
          var B;
          n === null ? B = "null" : $e(n) ? B = "array" : n !== void 0 && n.$$typeof === s ? (B = "<" + (X(n.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : B = typeof n, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, P);
        }
        var U = cn(n, d, v, I, L);
        if (U == null)
          return U;
        if (A) {
          var re = d.children;
          if (re !== void 0)
            if (T)
              if ($e(re)) {
                for (var me = 0; me < re.length; me++)
                  ar(re[me], n);
                Object.freeze && Object.freeze(re);
              } else
                z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(re, n);
        }
        return n === a ? pn(U) : dn(U), U;
      }
    }
    function fn(n, d, v) {
      return ir(n, d, v, !0);
    }
    function hn(n, d, v) {
      return ir(n, d, v, !1);
    }
    var vn = hn, mn = fn;
    Re.Fragment = a, Re.jsx = vn, Re.jsxs = mn;
  }()), Re;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Pn() : r.exports = jn();
})(Ce);
const Ve = Ce.exports.Fragment, t = Ce.exports.jsx, g = Ce.exports.jsxs, An = (r) => {
  const [s, i] = br(!1), a = Tr("accordion"), {
    header: o,
    body: c,
    closed: l,
    className: u = "",
    ...p
  } = r;
  return /* @__PURE__ */ g(He, {
    children: [/* @__PURE__ */ t("div", {
      className: "nsw-accordion__title",
      children: /* @__PURE__ */ g("button", {
        type: "button",
        "aria-expanded": s,
        "aria-controls": a,
        className: `nsw-accordion__button ${s ? "is-open" : ""}`,
        onClick: () => i((x) => !x),
        children: [o, /* @__PURE__ */ t("i", {
          className: "material-icons nsw-material-icons nsw-accordion__icon",
          "aria-hidden": "true",
          children: "keyboard_arrow_right"
        })]
      })
    }), /* @__PURE__ */ t("div", {
      className: "nsw-accordion__content",
      id: a,
      hidden: !s,
      children: /* @__PURE__ */ t("div", {
        className: "nsw-wysiwyg-content",
        children: c
      })
    })]
  });
};
An.propTypes = {
  header: e.exports.string.isRequired,
  body: e.exports.node.isRequired,
  className: e.exports.string
};
const qn = ({
  className: r,
  children: s,
  ...i
}) => /* @__PURE__ */ t("div", {
  className: `nsw-accordion ready ${r || ""}`,
  ...i,
  children: s
});
qn.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const Mn = ({
  label: r,
  items: s,
  linkComponent: i = "a",
  className: a = "",
  ...o
}) => /* @__PURE__ */ t("nav", {
  className: `nsw-breadcrumbs ${a}`,
  "aria-label": r,
  ...o,
  children: /* @__PURE__ */ t(In, {
    inline: !0,
    linkComponent: i,
    items: s
  })
});
Mn.propTypes = {
  label: e.exports.string,
  items: e.exports.arrayOf(e.exports.shape({
    link: e.exports.string,
    text: e.exports.string.isRequired
  })).isRequired,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func]),
  className: e.exports.string
};
const Rr = ({
  text: r,
  link: s,
  linkComponent: i = "a",
  children: a,
  onClick: o,
  ...c
}) => {
  const l = i;
  return typeof o == "function" && (c.onClick = o, s || (s = "#")), l === "a" ? c.href = s : typeof l == "function" && (c.to = s), s ? /* @__PURE__ */ g("li", {
    children: [/* @__PURE__ */ t(l, {
      ...c,
      children: r
    }), a]
  }) : /* @__PURE__ */ g("li", {
    children: [r, a]
  });
};
Rr.propTypes = {
  text: e.exports.node.isRequired,
  link: e.exports.string,
  onClick: e.exports.func,
  children: e.exports.node,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func])
};
const In = ({
  inline: r,
  items: s,
  linkComponent: i = "a",
  className: a = "",
  ...o
}) => /* @__PURE__ */ t("ol", {
  className: `nsw-breadcrumb__list ${a}${r ? " nsw-breadcrumb__list--inline" : ""}`,
  ...o,
  children: s.map((c) => /* @__PURE__ */ t(Rr, {
    ...c
  }, c.text))
}), Fn = ({
  linkComponent: r = "a",
  link: s,
  children: i,
  style: a = "dark",
  type: o = "button",
  block: c,
  className: l = "",
  ...u
}) => {
  if (s) {
    const p = r;
    return p === "a" ? u.href = s : typeof p == "function" && (u.to = s), /* @__PURE__ */ t(p, {
      className: `nsw-button ${l} nsw-button--${a}${c ? " nsw-button--block" : ""}`,
      ...u,
      children: i
    });
  }
  return /* @__PURE__ */ t("button", {
    type: o,
    className: `nsw-button ${l} nsw-button--${a}${c ? " nsw-button--block" : ""}`,
    ...u,
    children: i
  });
};
Fn.propTypes = {
  link: e.exports.string,
  children: e.exports.node.isRequired,
  style: e.exports.oneOf(["dark", "dark-outline", "dark-outline-solid", "light", "light-outline", "white", "danger"]),
  type: e.exports.string,
  block: e.exports.bool,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func]),
  className: e.exports.string
};
const Dn = ({
  title: r,
  level: s = 4,
  children: i,
  className: a = "",
  ...o
}) => {
  const c = `h${s}`;
  return /* @__PURE__ */ t("div", {
    className: `nsw-callout ${a}`,
    ...o,
    children: /* @__PURE__ */ g("div", {
      className: "nsw-callout__content",
      children: [/* @__PURE__ */ t(c, {
        className: "nsw-callout__title",
        children: r
      }), i]
    })
  });
};
Dn.propTypes = {
  title: e.exports.string.isRequired,
  level: e.exports.number,
  children: e.exports.node.isRequired,
  className: e.exports.string
};
const Ln = ({
  link: r,
  linkTarget: s,
  style: i = "white",
  headline: a,
  highlight: o,
  tag: c,
  date: l,
  image: u,
  imageAlt: p,
  className: x = "",
  children: f,
  ..._
}) => {
  let w = "div";
  return r !== void 0 && (w = "div"), /* @__PURE__ */ g(w, {
    className: `nsw-card nsw-card--${i} ${x}${a ? "nsw-card--headline" : ""} ${o ? "nsw-card--highlight" : ""} `,
    ..._,
    children: [u ? /* @__PURE__ */ t(Or, {
      src: u,
      alt: p || ""
    }) : "", /* @__PURE__ */ g(Nr, {
      children: [c ? /* @__PURE__ */ t(Cr, {
        children: c
      }) : "", l ? /* @__PURE__ */ t($r, {
        date: l
      }) : "", a ? /* @__PURE__ */ t(Er, {
        link: r,
        linkTarget: s,
        children: a
      }) : "", f]
    })]
  });
};
Ln.propTypes = {
  link: e.exports.string,
  style: e.exports.oneOf(["dark", "light", "white"]),
  tag: e.exports.string,
  date: e.exports.string,
  image: e.exports.string,
  imageAlt: e.exports.string,
  headline: e.exports.string.isRequired,
  highlight: e.exports.bool,
  className: e.exports.string,
  children: e.exports.node
};
const Nr = ({
  className: r,
  children: s,
  ...i
}) => /* @__PURE__ */ g("div", {
  className: `nsw-card__content ${r}`,
  ...i,
  children: [s, /* @__PURE__ */ t("span", {
    className: "material-icons nsw-material-icons nsw-card__icon",
    "aria-hidden": "true",
    children: "east"
  })]
});
Nr.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const Er = ({
  className: r = "",
  link: s,
  linkTarget: i,
  children: a
}) => {
  const o = "div";
  return s !== void 0 ? /* @__PURE__ */ t(o, {
    className: `nsw-card__title ${r}`,
    children: /* @__PURE__ */ t("a", {
      href: s,
      target: i,
      className: "nsw-card__link",
      children: a
    })
  }) : /* @__PURE__ */ t(o, {
    className: "nsw-card__title",
    children: a
  });
};
Er.propTypes = {
  className: e.exports.string,
  link: e.exports.string,
  children: e.exports.node
};
const Or = ({
  src: r,
  className: s = "",
  alt: i = "",
  ...a
}) => /* @__PURE__ */ t("div", {
  className: "nsw-card__image",
  children: /* @__PURE__ */ t("img", {
    className: s,
    src: r,
    alt: i,
    ...a
  })
});
Or.propTypes = {
  src: e.exports.string.isRequired,
  className: e.exports.string,
  alt: e.exports.string
};
const Wn = ({
  src: r,
  children: s,
  className: i = "",
  ...a
}) => /* @__PURE__ */ t("p", {
  className: `nsw-card__copy ${i}`,
  ...a,
  children: s
});
Wn.propTypes = {
  className: e.exports.string,
  src: e.exports.string,
  children: e.exports.node
};
const Cr = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("p", {
  className: `nsw-card__tag ${s}`,
  ...i,
  children: r
});
Cr.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const $r = ({
  className: r = "",
  date: s,
  ...i
}) => /* @__PURE__ */ t("p", {
  className: `nsw-card__date ${r}`,
  ...i,
  children: /* @__PURE__ */ t("time", {
    dateTime: s,
    children: s
  })
});
$r.propTypes = {
  className: e.exports.string,
  date: e.exports.string.isRequired
};
e.exports.string;
e.exports.string.isRequired, e.exports.string.isRequired, e.exports.string;
e.exports.string, e.exports.bool, e.exports.bool, e.exports.node;
e.exports.string, e.exports.node;
const Yn = ({
  links: r,
  mainLink: s,
  headline: i,
  copy: a,
  image: o,
  imageAlt: c,
  icon: l,
  className: u = ""
}) => /* @__PURE__ */ g("div", {
  className: `nsw-content-block ${u}`,
  children: [o ? /* @__PURE__ */ t(kr, {
    src: o,
    imageAlt: c || ""
  }) : "", l ? /* @__PURE__ */ t(Sr, {
    children: l
  }) : "", /* @__PURE__ */ g("div", {
    className: "nsw-content-block__content",
    children: [i ? /* @__PURE__ */ t(jr, {
      children: i
    }) : "", a ? /* @__PURE__ */ t(Pr, {
      children: a
    }) : "", /* @__PURE__ */ t("ul", {
      className: "nsw-content-block__list",
      children: r ? r.map((x) => /* @__PURE__ */ t("li", {
        children: /* @__PURE__ */ t("a", {
          href: x.url,
          children: x.text
        })
      }, x.text)) : ""
    }), s ? /* @__PURE__ */ t("div", {
      className: "nsw-content-block__link",
      children: /* @__PURE__ */ t("a", {
        href: s.url,
        children: s.text
      })
    }) : ""]
  })]
});
Yn.propTypes = {
  image: e.exports.string,
  imageAlt: e.exports.string,
  headline: e.exports.string.isRequired,
  icon: e.exports.node,
  copy: e.exports.string,
  links: e.exports.arrayOf(e.exports.shape({
    url: e.exports.string,
    text: e.exports.string
  })),
  mainLink: e.exports.shape({
    url: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  }),
  className: e.exports.string
};
const kr = ({
  src: r,
  className: s = "",
  imageAlt: i,
  ...a
}) => /* @__PURE__ */ t("div", {
  className: "nsw-content-block__image",
  children: /* @__PURE__ */ t("img", {
    src: r,
    alt: i,
    className: "nsw-content-block__image",
    ...a
  })
});
kr.propTypes = {
  src: e.exports.string.isRequired,
  imageAlt: e.exports.string,
  className: e.exports.string
};
const Sr = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("div", {
  className: "nsw-content-block__image",
  ...i,
  children: /* @__PURE__ */ t("div", {
    className: "nsw-content-block__icon",
    children: r
  })
});
Sr.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const Pr = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("p", {
  className: `nsw-content-block__copy ${s}`,
  ...i,
  children: r
});
Pr.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const jr = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("h2", {
  className: "nsw-content-block__title",
  ...i,
  children: r
});
jr.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const zn = ({
  footerLinks: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("ul", {
  className: s,
  ...i,
  children: r.map(({
    url: a,
    text: o
  }, c) => /* @__PURE__ */ t("li", {
    children: /* @__PURE__ */ t("a", {
      href: a,
      children: o
    })
  }, a + o + c))
});
zn.propTypes = {
  footerLinks: e.exports.arrayOf(e.exports.shape({
    url: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  })),
  className: e.exports.string
};
const Bn = ({
  heading: r,
  sectionLinks: s,
  className: i = "",
  ...a
}) => /* @__PURE__ */ g("div", {
  className: `nsw-footer__group ${i}`,
  ...a,
  children: [/* @__PURE__ */ t("h3", {
    className: "nsw-footer__heading",
    children: /* @__PURE__ */ t("a", {
      href: r.url,
      children: r.text
    })
  }), /* @__PURE__ */ t("ul", {
    className: "nsw-footer__list",
    children: s.map(({
      url: o,
      text: c
    }, l) => /* @__PURE__ */ t("li", {
      children: /* @__PURE__ */ t("a", {
        href: o,
        children: c
      })
    }, o + c + l))
  })]
});
Bn.propTypes = {
  heading: e.exports.shape({
    url: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  }),
  sectionLinks: e.exports.arrayOf(e.exports.shape({
    url: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  })),
  className: e.exports.string
};
const Hn = ({
  children: r,
  className: s = "",
  ariaLabel: i = "footer",
  ...a
}) => /* @__PURE__ */ t("nav", {
  className: `nsw-footer__upper ${s}`,
  "aria-label": i,
  ...a,
  children: /* @__PURE__ */ t("div", {
    className: "nsw-container",
    children: r
  })
});
Hn.propTypes = {
  children: e.exports.node.isRequired,
  className: e.exports.string,
  ariaLabel: e.exports.string
};
const Un = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("div", {
  className: `nsw-footer__lower ${s}`,
  ...i,
  children: r
});
Un.propTypes = {
  children: e.exports.node.isRequired,
  className: e.exports.string
};
const Vn = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("footer", {
  className: `nsw-footer ${s}`,
  ...i,
  role: "contentinfo",
  children: r
});
Vn.propTypes = {
  children: e.exports.node.isRequired,
  className: e.exports.string
};
var Ar = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var s = ge;
  function i(w) {
    return w && typeof w == "object" && "default" in w ? w : { default: w };
  }
  var a = /* @__PURE__ */ i(s), o = "id", c = 0;
  function l(w) {
    return c++, "".concat(w || o).concat(c);
  }
  var u = function() {
    c = 0;
  }, p = function(R) {
    o = R;
  }, x = function(R, W) {
    for (var M = [], Y = 0; Y < R; Y++)
      M.push(l(W));
    return M;
  };
  function f(w) {
    var R = a.default.useRef();
    return a.default.useEffect(function() {
      R.current = w;
    }), R.current;
  }
  function _() {
    var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, R = arguments.length > 1 ? arguments[1] : void 0, W = a.default.useRef([]), M = f(w), Y = f(R);
    return (w !== M || Y !== R) && (W.current = x(w, R)), W.current;
  }
  r.default = l, r.resetId = u, r.setPrefix = p, r.useId = _;
})(Ar);
const ne = /* @__PURE__ */ Tn(Ar), Gn = ne(), oe = ({
  htmlId: r = Gn,
  children: s,
  className: i,
  status: a,
  ...o
}) => /* @__PURE__ */ g("span", {
  id: `${a === "invalid" ? "error" : "helper"}${r}`,
  className: `nsw-form__helper ${a === "invalid" ? " nsw-form__helper--error" : ""} ${a === "valid" ? " nsw-form__helper--valid" : ""} ${i}`,
  ...o,
  children: [/* @__PURE__ */ g("span", {
    className: "material-icons nsw-material-icons",
    "aria-hidden": "true",
    children: [a === "invalid" ? "cancel" : "", a === "valid" ? "check_circle" : ""]
  }), s]
});
oe.propTypes = {
  htmlId: e.exports.string,
  children: e.exports.node,
  className: e.exports.string,
  error: e.exports.bool
};
const qr = ({
  htmlFor: r,
  text: s,
  dark: i,
  inline: a,
  className: o = "",
  ...c
}) => /* @__PURE__ */ t("label", {
  htmlFor: r,
  className: `nsw-form__label ${o}`,
  ...c,
  children: s
});
qr.propTypes = {
  text: e.exports.string.isRequired,
  dark: e.exports.bool,
  inline: e.exports.bool,
  className: e.exports.string,
  htmlFor: e.exports.string
};
const Ge = ({
  htmlId: r = ne(),
  status: s = "default",
  children: i,
  label: a,
  helper: o,
  statusText: c,
  error: l,
  className: u = "",
  ...p
}) => /* @__PURE__ */ g("div", {
  className: `nsw-form__group ${u}`,
  ...p,
  children: [/* @__PURE__ */ t(qr, {
    htmlFor: r,
    text: a
  }), o ? /* @__PURE__ */ t(oe, {
    htmlId: r,
    children: o
  }) : "", ge.Children.map(i, (x) => ge.cloneElement(x, {
    error: l
  })), s ? /* @__PURE__ */ t(oe, {
    htmlId: r,
    status: s,
    children: c
  }) : ""]
});
Ge.propTypes = {
  status: e.exports.oneOf(["invalid", "valid", "default"]),
  error: e.exports.bool,
  className: e.exports.string,
  htmlId: e.exports.string,
  label: e.exports.string,
  children: e.exports.node,
  helper: e.exports.string,
  statusText: e.exports.string,
  uniqueID: e.exports.func
};
const Mr = ({
  as: r = "input",
  status: s,
  block: i,
  number: a,
  htmlId: o = "0",
  type: c = "text",
  className: l = "",
  ...u
}) => r === "textarea" ? /* @__PURE__ */ t("textarea", {
  className: `nsw-form__input ${l}${i ? " nsw-form__input--block" : ""}${a ? " nsw-form__input--number" : ""}`,
  "aria-invalid": s === "invalid" ? "true" : "false",
  "aria-describedby": s === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  id: o,
  ...u
}) : /* @__PURE__ */ t("input", {
  className: `nsw-form__input ${l}${i ? " nsw-form__input--block" : ""}${a ? " nsw-form__input--number" : ""}`,
  "aria-invalid": s === "invalid" ? "true" : "false",
  "aria-describedby": s === "invalid" ? `helper${o} error${o}` : `helper${o}`,
  type: c,
  ...u,
  id: o
});
Mr.propTypes = {
  as: e.exports.oneOf(["input", "text", "textarea"]),
  block: e.exports.bool,
  number: e.exports.bool,
  className: e.exports.string,
  htmlId: e.exports.string,
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  type: e.exports.string
};
const Jn = ({
  status: r = "default",
  className: s = "",
  inputType: i,
  statusText: a,
  label: o,
  helper: c,
  htmlId: l = ne(),
  as: u,
  ...p
}) => /* @__PURE__ */ t(Ge, {
  status: r,
  statusText: a,
  label: o,
  helper: c,
  htmlId: l,
  children: /* @__PURE__ */ t(Mr, {
    ...p,
    as: u,
    status: r,
    htmlId: l,
    type: i
  })
});
Jn.propTypes = {
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  className: e.exports.string,
  as: e.exports.oneOf(["input", "textarea"]),
  statusText: e.exports.string,
  label: e.exports.string,
  helper: e.exports.string,
  htmlId: e.exports.string,
  inputType: e.exports.string
};
const Kn = ne(), Ir = ({
  text: r,
  value: s
}) => /* @__PURE__ */ t("option", {
  value: s,
  children: r
});
Ir.propTypes = {
  text: e.exports.string.isRequired,
  value: e.exports.string.isRequired
};
const Fr = ({
  htmlId: r,
  selected: s,
  options: i,
  block: a,
  status: o = "default",
  className: c = "",
  ...l
}) => /* @__PURE__ */ t("select", {
  className: `nsw-form__select ${c}`,
  "aria-invalid": o === "invalid" ? "true" : void 0,
  "aria-describedby": o === "invalid" ? `helper${r} error${r}` : `helper${r}`,
  id: r,
  defaultValue: s,
  ...l,
  children: i.map((u) => /* @__PURE__ */ t(Ir, {
    ...u
  }, u.value))
});
Fr.propTypes = {
  options: e.exports.arrayOf(e.exports.shape({
    value: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  })).isRequired,
  block: e.exports.bool,
  htmlId: e.exports.string,
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  selected: e.exports.string,
  className: e.exports.string
};
const Qn = ({
  status: r = "default",
  selected: s,
  statusText: i,
  label: a,
  helper: o,
  options: c,
  htmlId: l = Kn
}) => /* @__PURE__ */ t(Ge, {
  status: r,
  statusText: i,
  label: a,
  helper: o,
  htmlId: l,
  children: /* @__PURE__ */ t(Fr, {
    options: c,
    selected: s
  })
});
Qn.propTypes = {
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  statusText: e.exports.string,
  label: e.exports.string,
  helper: e.exports.string,
  selected: e.exports.string,
  options: e.exports.arrayOf(e.exports.shape({
    value: e.exports.string.isRequired,
    text: e.exports.string.isRequired
  })).isRequired,
  htmlId: e.exports.string
};
const Dr = ({
  text: r,
  htmlId: s,
  value: i,
  status: a,
  as: o,
  uniqueID: c = ne(),
  ...l
}) => /* @__PURE__ */ g(He, {
  children: [/* @__PURE__ */ t("input", {
    className: "nsw-form__checkbox-input",
    type: "checkbox",
    name: s,
    "aria-invalid": a === "invalid" && o !== "group" ? "true" : void 0,
    "aria-describedby": a === "invalid" ? `helper${s} error${s}` : `helper${s}`,
    id: c,
    ...l
  }), /* @__PURE__ */ t("label", {
    className: "nsw-form__checkbox-label",
    htmlFor: c,
    children: r
  })]
});
Dr.propTypes = {
  text: e.exports.string.isRequired,
  value: e.exports.string.isRequired,
  className: e.exports.string,
  htmlId: e.exports.string,
  uniqueID: e.exports.func,
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  as: e.exports.string
};
const Xn = ({
  className: r = "",
  as: s,
  status: i = "default",
  label: a,
  options: o,
  htmlId: c = ne(),
  statusText: l,
  helper: u
}) => /* @__PURE__ */ t("div", {
  className: `nsw-form__group ${r}`,
  children: /* @__PURE__ */ g("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": i === "invalid" ? "true" : void 0,
    children: [s === "group" ? /* @__PURE__ */ g("legend", {
      children: [/* @__PURE__ */ t("span", {
        className: "nsw-form__legend",
        children: a
      }), u ? /* @__PURE__ */ t(oe, {
        htmlId: c,
        children: u
      }) : "", i ? /* @__PURE__ */ t(oe, {
        htmlId: c,
        status: i,
        children: l
      }) : ""]
    }) : "", /* @__PURE__ */ t("div", {
      children: o.map((p) => /* @__PURE__ */ t(Dr, {
        ...p,
        as: s,
        htmlId: c,
        status: i
      }, p.value))
    }), i && s !== "group" ? /* @__PURE__ */ t(oe, {
      htmlId: c,
      status: i,
      children: l
    }) : ""]
  })
});
Xn.propTypes = {
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  statusText: e.exports.string,
  htmlId: e.exports.string,
  label: e.exports.string,
  as: e.exports.oneOf(["group", !1]),
  helper: e.exports.string,
  options: e.exports.arrayOf(e.exports.shape({
    value: e.exports.string,
    text: e.exports.string
  })).isRequired,
  className: e.exports.string
};
const Lr = ({
  text: r,
  htmlId: s,
  value: i,
  status: a,
  uniqueID: o = ne(),
  ...c
}) => /* @__PURE__ */ g(ge.Fragment, {
  children: [/* @__PURE__ */ t("input", {
    className: "nsw-form__radio-input",
    type: "radio",
    name: s,
    "aria-describedby": a === "invalid" ? `helper${s} error${s}` : `helper${s}`,
    id: o,
    ...c
  }), /* @__PURE__ */ t("label", {
    className: "nsw-form__radio-label",
    htmlFor: o,
    children: r
  })]
});
Lr.propTypes = {
  text: e.exports.string.isRequired,
  value: e.exports.string.isRequired,
  className: e.exports.string,
  htmlId: e.exports.string,
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  as: e.exports.string,
  uniqueID: e.exports.func
};
const Zn = ({
  className: r = "",
  as: s = "group",
  label: i,
  helper: a,
  status: o = "default",
  htmlId: c,
  statusText: l,
  options: u
}) => /* @__PURE__ */ t("div", {
  className: `nsw-form__group ${r}`,
  children: /* @__PURE__ */ g("fieldset", {
    className: "nsw-form__fieldset",
    "aria-invalid": o === "invalid" ? "true" : void 0,
    children: [s === "group" ? /* @__PURE__ */ g("legend", {
      children: [/* @__PURE__ */ t("span", {
        className: "nsw-form__legend",
        children: i
      }), a ? /* @__PURE__ */ t(oe, {
        htmlId: c,
        children: a
      }) : "", o ? /* @__PURE__ */ t(oe, {
        htmlId: c,
        status: o,
        children: l
      }) : ""]
    }) : "", /* @__PURE__ */ t("div", {
      children: u.map((p) => /* @__PURE__ */ t(Lr, {
        ...p,
        htmlId: c,
        status: o
      }, p.value))
    }), o && s !== "group" ? /* @__PURE__ */ t(oe, {
      htmlId: c,
      status: o,
      children: l
    }) : ""]
  })
});
Zn.propTypes = {
  status: e.exports.oneOf(["valid", "invalid", "default"]),
  statusText: e.exports.string,
  htmlId: e.exports.string,
  label: e.exports.string,
  as: e.exports.oneOf(["group", !1]),
  helper: e.exports.string,
  options: e.exports.arrayOf(e.exports.shape({
    value: e.exports.string,
    text: e.exports.string
  })).isRequired,
  className: e.exports.string
};
const et = ({
  step: r,
  of: s,
  ...i
}) => /* @__PURE__ */ g("div", {
  className: "nsw-progress-indicator",
  ...i,
  children: [/* @__PURE__ */ g("div", {
    className: "nsw-progress-indicator__count",
    children: ["Step ", r, " of ", s]
  }), /* @__PURE__ */ t("div", {
    className: "nsw-progress-indicator__bar",
    children: [...Array(s)].fill(void 0).map((a, o) => o + 1 <= r ? /* @__PURE__ */ t(We, {
      active: !0
    }, o) : /* @__PURE__ */ t(We, {}, o))
  })]
});
et.propTypes = {
  step: e.exports.number.isRequired,
  of: e.exports.number.isRequired
};
const We = ({
  active: r
}) => /* @__PURE__ */ t("div", {
  className: `${r ? "active" : ""}`
});
We.propTypes = {
  active: e.exports.bool
};
const rt = {
  critical: "nsw-global-alert--critical",
  light: "nsw-global-alert--light",
  default: ""
}, yr = {
  default: "nsw-button nsw-button--white",
  critical: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark"
}, nt = (r) => {
  const {
    title: s,
    content: i,
    ctaText: a,
    ctaHref: o,
    as: c = "default",
    className: l = "",
    children: u,
    ...p
  } = r, x = Ne(null);
  return xe(() => {
    (async () => {
      const {
        GlobalAlert: f
      } = await import("./main.ca35e5ee.js");
      new f(x.current).init();
    })();
  }, []), /* @__PURE__ */ t("div", {
    ref: x,
    className: `nsw-global-alert ${l} ${rt[c]}`,
    ...p,
    children: /* @__PURE__ */ g("div", {
      className: "nsw-global-alert__wrapper",
      children: [/* @__PURE__ */ g("div", {
        className: "nsw-global-alert__content",
        children: [/* @__PURE__ */ t("div", {
          className: "nsw-global-alert__title",
          children: s
        }), /* @__PURE__ */ t("p", {
          children: i
        })]
      }), /* @__PURE__ */ t("p", {
        children: a && o ? /* @__PURE__ */ t("a", {
          href: o,
          className: c ? yr[c] : yr.default,
          children: a
        }) : ""
      }), /* @__PURE__ */ g("button", {
        type: "button",
        className: "nsw-icon-button js-close-alert",
        children: [/* @__PURE__ */ t("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ t("span", {
          className: "sr-only",
          children: "Close message"
        })]
      })]
    })
  });
};
nt.propTypes = {
  title: e.exports.string.isRequired,
  content: e.exports.string.isRequired,
  children: e.exports.node,
  ctaText: e.exports.string,
  ctaHref: e.exports.string,
  className: e.exports.string,
  as: e.exports.oneOf(["critical", "light", "default"])
};
const tt = (r) => {
  const {
    siteTitle: s,
    siteDescriptor: i,
    logo: a,
    headerUrl: o,
    mobile: c = !0,
    search: l = !0,
    onSubmit: u,
    ...p
  } = r, x = Ne(null), f = Ne(null);
  return xe(() => {
    (async () => {
      const {
        SiteSearch: _
      } = await import("./main.ca35e5ee.js");
      l && (new _(x.current).init(), new _(f.current).init());
    })();
  }, []), /* @__PURE__ */ t(He, {
    children: /* @__PURE__ */ t("header", {
      className: "nsw-header",
      ...p,
      children: /* @__PURE__ */ g("div", {
        className: "nsw-header__container",
        children: [/* @__PURE__ */ g("div", {
          className: "nsw-header__inner",
          children: [/* @__PURE__ */ g("div", {
            className: "nsw-header__main",
            children: [/* @__PURE__ */ t("div", {
              className: "nsw-header__waratah",
              children: /* @__PURE__ */ g("a", {
                href: o,
                className: "nsw-header__logo-link",
                children: [/* @__PURE__ */ g("svg", {
                  viewBox: "0 0 295 311",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ t("path", {
                    d: "M79.625 241.435l-45.77-53.754H14.46v84.124h18.893V218.18l45.64 53.625h19.514v-84.124H79.625v53.754zm181.333-53.734l-12.538 53.834-13.149-53.854h-18.093l-13.379 53.254-12.148-53.244h-19.773l21.885 84.054h19.463l12.838-53.205 13.009 53.205h19.113l.19-.721 22.015-83.383-19.433.06zM12.447 297.571a13.258 13.258 0 0113.4-13.498 14.067 14.067 0 0110.005 3.492l-2.901 3.462a10.208 10.208 0 00-7.295-2.792c-4.793 0-8.445 4.203-8.445 9.186v.15c0 5.354 3.532 9.296 8.855 9.296a10.588 10.588 0 006.284-2.001v-4.873h-6.624v-4.003h11.127v10.937a16.607 16.607 0 01-10.867 4.063c-8.145 0-13.498-5.804-13.498-13.389M39.578 297.571a13.62 13.62 0 0113.575-13.291 13.617 13.617 0 0113.653 13.211v.08a13.616 13.616 0 01-13.58 13.287 13.617 13.617 0 01-13.648-13.217v-.07zm22.434.07v-.07c0-5.063-3.682-9.266-8.855-9.266s-8.776 4.123-8.776 9.186v.08c0 5.064 3.683 9.256 8.846 9.256s8.786-4.132 8.786-9.186M66.477 284.513h5.063l7.845 20.013 7.815-20.013h4.943L81.316 310.74h-4.013l-10.826-26.227zM95.223 284.513h19.312v4.093h-14.73v6.774h13.059v4.083H99.806v6.994h14.919v4.093H95.223v-26.037zM119.161 284.563h11.597a10.503 10.503 0 017.515 2.602 7.841 7.841 0 012.151 5.613v.08c0 4.273-2.561 6.845-6.204 7.885l7.005 9.857h-5.394l-6.394-9.076h-5.723v9.056h-4.573l.02-26.017zm11.267 12.908c3.272 0 5.353-1.711 5.353-4.352v-.07c0-2.792-2.001-4.313-5.393-4.313h-6.654v8.745l6.694-.01zM144.477 284.513h4.222l13.959 17.992v-17.992h4.503v26.037h-3.842l-14.35-18.532v18.532h-4.492v-26.037zM171.805 284.513h4.873l7.915 12.308 7.925-12.308h4.873v26.037h-4.573v-18.672l-8.225 12.268h-.15l-8.135-12.198v18.602h-4.503v-26.037zM201.758 284.513h19.302v4.093h-14.729v6.774h13.058v4.083h-13.058v6.994h14.919v4.093h-19.492v-26.037zM225.754 284.513h4.243l13.949 17.992v-17.992h4.502v26.037h-3.832l-14.359-18.532v18.532h-4.503v-26.037zM260.326 288.756h-8.256v-4.243h21.124v4.243h-8.255v21.794h-4.613v-21.794zM103.699 260.097l11.108-13.308c7.695 6.344 15.75 10.376 25.517 10.376 7.695 0 12.338-3.052 12.338-8.055v-.25c0-4.763-2.932-7.205-17.221-10.867-17.212-4.393-28.319-9.156-28.319-26.127v-.24c0-15.5 12.458-25.756 29.92-25.756a49.51 49.51 0 0131.741 10.867l-9.766 14.159c-7.575-5.254-15.01-8.426-22.235-8.426s-11.008 3.292-11.008 7.445v.24c0 5.614 3.653 7.445 18.433 11.227 17.341 4.513 27.108 10.747 27.108 25.637v.24c0 17.011-12.939 26.497-31.381 26.497a54.394 54.394 0 01-36.235-13.659z",
                    fill: "#002664"
                  }), /* @__PURE__ */ t("path", {
                    d: "M295.031 128.903c-.07-3.883-3.062-6.474-4.773-7.915-1.711-1.441-9.687-7.225-24.627-15.9 1.151-1.501 1.651-2.302 2.742-3.843 5.394-7.605 10.327-15.47 12.709-24.576.6-2.291 1.661-7.204.75-9.726a9.513 9.513 0 00-6.564-5.744c-6.385-1.73-29.38-.32-31.242-.15.198-9.92-.691-19.832-2.651-29.559-.631-2.571-1.732-6.514-4.553-7.685-4.924-1.94-10.337.74-14.69 2.742-5.934 2.732-10.327 4.913-16.672 8.195-2.912-10.296-6.004-20.012-7.004-22.444-.781-1.791-1.932-5.003-5.374-5.714-3.442-.71-5.434.73-7.165 1.791-3.002 1.862-16.221 11.198-20.604 14.83-3.002-4.923-4.783-8.405-7.615-12.878-1.091-1.721-3.923-6.384-6.004-8.446a5.449 5.449 0 00-4.133-1.895 5.45 5.45 0 00-4.133 1.895c-2.051 2.072-4.883 6.725-6.004 8.446-2.822 4.473-4.643 7.945-7.615 12.878-4.383-3.632-17.572-13.008-20.604-14.83-1.731-1.06-3.662-2.461-7.165-1.79-3.502.67-4.593 3.922-5.374 5.713-1.07 2.451-4.142 12.148-7.004 22.444-6.345-3.282-10.758-5.473-16.692-8.205-4.352-2.001-9.746-4.673-14.67-2.732-2.821 1.171-3.922 5.114-4.552 7.685a135.921 135.921 0 00-2.652 29.56c-1.852-.17-24.847-1.582-31.241.15a9.515 9.515 0 00-6.565 5.743c-.92 2.512.14 7.425.75 9.726 2.382 9.106 7.316 17.011 12.71 24.576 1.1 1.551 1.59 2.342 2.741 3.843-14.95 8.675-22.916 14.469-24.627 15.9-1.71 1.431-4.703 4.002-4.773 7.915a7.773 7.773 0 001.721 5.343c2.862 4.003 18.723 19.263 54.267 24.706-6.094 4.443-4.873 10.007-4.003 12.188.71 1.751 2.432 3.773 5.904 5.674 5.574 3.062 12.489 3.772 18.363 3.882 8.425.16 17.291-1.611 25.527-3.282 7.865-1.601 16.081-4.833 24.116-5.213a113.44 113.44 0 0114.09.25c1.651.13 3.783.39 7.525.39 3.322 0 5.794-.27 7.425-.4a113.44 113.44 0 0114.09-.25c8.005.38 16.261 3.612 24.116 5.213 8.236 1.671 17.102 3.442 25.527 3.282 5.874-.11 12.789-.82 18.363-3.882 3.472-1.901 5.193-3.933 5.904-5.674.9-2.221 2.121-7.745-4.003-12.188 35.544-5.443 51.415-20.683 54.267-24.706a7.772 7.772 0 001.741-5.333z",
                    fill: "#fff"
                  }), /* @__PURE__ */ t("path", {
                    d: "M201.896 52.704a224.13 224.13 0 014.513 43.028c0 14.769-1.802 27.878-5.334 38.975a48.033 48.033 0 01-16.731 23.735c15.2-.49 28.829-9.936 38.476-26.727 12.568-22.014 15.25-49.602 15.65-69.795.451-23.015-1.27-28.418-1.941-30.64-.67-2.221-1.591-3.132-3.572-3.092-3.873.07-20.224 7.365-35.514 18.292 2.201 1.12 3.702 3.092 4.453 6.224z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ t("path", {
                    d: "M160.308 161.484c10.867-.23 28.799-9.006 35.023-28.709 3.323-10.326 4.473-20.613 5.004-37.114a184.739 184.739 0 00-3.613-39.935c-.31-1.461-.85-3.733-2.682-4.103-1.831-.37-3.402 1.541-4.463 2.442-1.06.9-27.638 24.155-39.236 52.894-2.122 5.954-5.834 12.078-5.954 30.469 0 6.625.61 14.009 3.922 18.192a14.067 14.067 0 0011.999 5.864zM200.405 37.264c-3.002-13.729-5.834-23.085-5.864-23.135-.631-1.67-1.521-2.952-2.832-3.172-1.481-.25-2.382.15-3.833 1.21-1.881 1.372-15.1 11.818-19.423 15.39 4.433 8.216 8.006 18.433 10.898 26.568 6.534-5.143 10.457-9.716 21.054-16.861zM276.927 71.626a7.264 7.264 0 00-.631-4.213c-.85-1.24-1.931-1.82-4.613-2.161-5.373-.67-27.679 1.43-27.679 1.43a196.129 196.129 0 01-2.371 26.758c6.454 2.462 12.498 5.003 19.223 8.305 13.159-16.53 15.801-27.127 16.071-30.119zM289.075 128.993c-.1-2.181-1.101-4.003-4.663-6.364a220.104 220.104 0 00-43.87-23.015c-2.682 13.509-6.885 25.336-12.489 35.133-5.774 10.146-13.239 18.111-21.744 23.235 25.687-1.742 47.262-5.724 62.802-13.219 17.742-8.605 20.094-12.918 19.964-15.77zM232.389 162.074c-4.263.12-7.565.821-14.66 2.002a75.693 75.693 0 01-15.43 1.11c-3.093-.08-10.007-.15-10.007-.15-3.232-.07-6.905-.16-10.577-.16-7.646 0-17.532.31-26.218 2.732-.46.14-1.001.29-.951.82.05.531.731.431 1.401.441.671.01 7.065-.441 10.207-.441 11.368 0 19.133 2.002 26.638 3.863 7.055 1.781 13.729 3.472 23.016 3.472 9.776 0 18.242-1.251 21.394-4.743a6.086 6.086 0 001.561-5.333c-.77-2.522-2.531-3.703-6.374-3.613zM72.178 131.685c9.646 16.78 23.276 26.226 38.476 26.727a48.032 48.032 0 01-16.761-23.745c-3.533-11.098-5.334-24.206-5.334-38.975a224.05 224.05 0 014.513-43.028c.74-3.132 2.251-5.103 4.443-6.254-15.46-11.447-31.641-18.182-35.474-18.252-2.001 0-2.902.85-3.572 3.092-.67 2.242-2.392 7.655-1.942 30.64.39 20.193 3.082 47.801 15.65 69.795z",
                    fill: "#D7153A"
                  }), /* @__PURE__ */ t("path", {
                    d: "M105.422 54.115c-1.071-.9-2.762-2.782-4.463-2.442-1.701.34-2.372 2.632-2.682 4.103a184.763 184.763 0 00-3.612 39.936c.53 16.49 1.68 26.787 5.003 37.113 6.224 19.723 24.356 28.589 35.254 28.589a17.753 17.753 0 006.094-1.091 14.002 14.002 0 002.712-1.471 22.314 22.314 0 01-2.162-3.642c-2.121-4.413-3.202-9.776-3.252-16.401a83.598 83.598 0 016.454-32.561c-11.577-28.758-38.285-51.233-39.346-52.133zM147.501 97.633c7.685-15.91 19.013-29.019 27.439-37.474-5.284-19.453-20.474-47.15-25.237-53.915-.691-1-1.241-1.641-2.232-1.641-.991 0-1.481.65-2.171 1.641-4.764 6.764-19.954 34.452-25.238 53.915 8.456 8.455 19.754 21.563 27.439 37.474zM126.545 27.558c-4.323-3.583-17.541-14.01-19.423-15.39-1.451-1.06-2.351-1.451-3.832-1.211-1.301.22-2.192 1.491-2.832 3.172 0 .06-2.872 9.406-5.864 23.135 10.597 7.164 14.52 11.727 21.014 16.87 2.952-8.145 6.504-18.371 10.937-26.576zM34.132 101.745c6.724-3.302 12.729-5.843 19.223-8.305a196.24 196.24 0 01-2.372-26.757s-22.305-2.101-27.678-1.431c-2.682.33-3.763.92-4.614 2.161a7.264 7.264 0 00-.63 4.213c.28 2.992 2.972 13.589 16.07 30.119zM66.944 134.707c-5.604-9.807-9.796-21.624-12.488-35.133a220.083 220.083 0 00-43.87 23.015c-3.562 2.381-4.573 4.173-4.663 6.364-.13 2.852 2.221 7.165 20.013 15.72 15.531 7.495 37.116 11.477 62.803 13.219-8.546-5.074-16.02-13.039-21.795-23.185zM139.524 167.608c-8.696-2.422-18.572-2.732-26.217-2.732-3.673 0-7.335.08-10.578.16 0 0-6.924.07-10.006.15a75.693 75.693 0 01-15.43-1.11c-7.096-1.181-10.398-1.882-14.66-2.002-3.843-.09-5.635 1.091-6.345 3.593A6.093 6.093 0 0057.849 171c3.152 3.492 11.618 4.743 21.395 4.743 9.266 0 15.94-1.681 23.015-3.472 7.505-1.901 15.27-3.863 26.638-3.863 3.142 0 9.527.451 10.207.441.68-.01 1.351 0 1.401-.441.05-.44-.52-.66-.981-.8z",
                    fill: "#D7153A"
                  })]
                }), /* @__PURE__ */ t("span", {
                  className: "sr-only",
                  children: "NSW Government"
                })]
              })
            }), a ? /* @__PURE__ */ g("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ t("img", {
                src: a,
                alt: s + "logo"
              }), /* @__PURE__ */ t("span", {
                className: "sr-only",
                children: s
              }), /* @__PURE__ */ t("span", {
                className: "sr-only",
                children: i
              })]
            }) : /* @__PURE__ */ g("div", {
              className: "nsw-header__name",
              children: [/* @__PURE__ */ t("div", {
                className: "nsw-header__title",
                children: s
              }), /* @__PURE__ */ t("div", {
                className: "nsw-header__description",
                children: i
              })]
            })]
          }), c ? /* @__PURE__ */ t("div", {
            className: "nsw-header__menu",
            children: /* @__PURE__ */ g("button", {
              type: "button",
              className: "js-open-nav",
              "aria-expanded": "false",
              "aria-controls": "main-nav",
              children: [/* @__PURE__ */ t("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "menu"
              }), /* @__PURE__ */ g("span", {
                children: [/* @__PURE__ */ t("span", {
                  className: "sr-only",
                  children: "Open"
                }), " ", "Menu"]
              })]
            })
          }) : "", l ? /* @__PURE__ */ t("div", {
            className: "nsw-header__search",
            children: /* @__PURE__ */ g("button", {
              ref: x,
              type: "button",
              className: "js-open-search",
              "aria-expanded": "false",
              "aria-controls": "header-search",
              children: [/* @__PURE__ */ t("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              }), /* @__PURE__ */ g("span", {
                className: "nsw-header-btn__sub",
                children: [/* @__PURE__ */ t("span", {
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
            onSubmit: u,
            children: [/* @__PURE__ */ t("label", {
              htmlFor: "nsw-header-input",
              className: "sr-only",
              children: "Search site for:"
            }), /* @__PURE__ */ t("input", {
              autoComplete: "off",
              className: "nsw-header__input js-search-input",
              id: "nsw-header-input",
              name: "searchInput",
              type: "text"
            }), /* @__PURE__ */ t("button", {
              className: "nsw-icon-button nsw-icon-button--flex",
              type: "submit",
              "aria-label": "search",
              children: /* @__PURE__ */ t("span", {
                className: "material-icons nsw-material-icons",
                "aria-hidden": "true",
                children: "search"
              })
            })]
          }), /* @__PURE__ */ g("button", {
            ref: f,
            className: "nsw-icon-button js-close-search",
            "aria-expanded": "true",
            "aria-controls": "header-search",
            children: [/* @__PURE__ */ t("span", {
              className: "material-icons nsw-material-icons nsw-search__close-icon",
              "aria-hidden": "true",
              children: "close"
            }), /* @__PURE__ */ t("span", {
              className: "sr-only",
              children: "Close search"
            })]
          })]
        }) : ""]
      })
    })
  });
};
tt.propTypes = {
  siteTitle: e.exports.string,
  siteDescriptor: e.exports.string,
  logo: e.exports.string,
  headerUrl: e.exports.string.isRequired,
  mobile: e.exports.bool,
  search: e.exports.bool,
  onSubmit: e.exports.func
};
const st = {
  dark: "nsw-hero-banner--dark",
  light: "nsw-hero-banner--light",
  white: "nsw-hero-banner--white"
}, at = {
  dark: "nsw-button nsw-button--white",
  light: "nsw-button nsw-button--dark",
  white: "nsw-button nsw-button--dark"
}, it = ({
  title: r = "Hero Banner",
  intro: s,
  cta: i,
  style: a = "white",
  wide: o,
  featured: c,
  image: l,
  children: u,
  className: p = "",
  ...x
}) => /* @__PURE__ */ t("div", {
  className: `nsw-hero-banner ${a ? st[a] : ""} ${o ? "nsw-hero-banner--wide" : ""} ${c ? " nsw-hero-banner--featured" : ""}  ${p}`,
  ...x,
  children: /* @__PURE__ */ t("div", {
    className: "nsw-hero-banner__container",
    children: /* @__PURE__ */ g("div", {
      className: "nsw-hero-banner__wrapper",
      children: [/* @__PURE__ */ g("div", {
        className: "nsw-hero-banner__content nsw-wysiwyg-content",
        children: [/* @__PURE__ */ t("h1", {
          children: r
        }), /* @__PURE__ */ t("p", {
          className: "nsw-intro",
          children: s
        }), i ? /* @__PURE__ */ t("div", {
          className: "nsw-hero-banner__button",
          children: /* @__PURE__ */ t("a", {
            href: i.url,
            className: `nsw-button ${at[a]}`,
            children: i.text
          })
        }) : ""]
      }), u, /* @__PURE__ */ t("div", {
        className: "nsw-hero-banner__box",
        role: "presentation",
        children: l ? /* @__PURE__ */ t("img", {
          className: "nsw-hero-banner__image",
          src: l.src,
          alt: l.alt
        }) : /* @__PURE__ */ t("div", {
          className: "nsw-hero-banner__bg"
        })
      })]
    })
  })
});
it.propTypes = {
  title: e.exports.string.isRequired,
  intro: e.exports.string.isRequired,
  style: e.exports.oneOf(["dark", "light", "white"]),
  wide: e.exports.bool,
  featured: e.exports.bool,
  children: e.exports.node,
  className: e.exports.string,
  cta: e.exports.shape({
    url: e.exports.string,
    text: e.exports.string
  }),
  image: e.exports.shape({
    src: e.exports.string,
    alt: e.exports.string
  })
};
const ot = ({
  subtitle: r,
  children: s
}) => /* @__PURE__ */ t("div", {
  className: "nsw-hero-banner__links",
  children: /* @__PURE__ */ g("div", {
    className: "nsw-hero-banner__list",
    children: [/* @__PURE__ */ t("div", {
      className: "nsw-hero-banner__sub-title",
      children: r
    }), s]
  })
});
ot.propTypes = {
  subtitle: e.exports.string.isRequired,
  children: e.exports.node.isRequired
};
const Wr = ({
  url: r,
  title: s,
  ...i
}) => /* @__PURE__ */ t("li", {
  children: /* @__PURE__ */ t("a", {
    href: `${r}`,
    ...i,
    children: s
  })
});
Wr.propTypes = {
  url: e.exports.string,
  title: e.exports.string
};
const At = ({
  title: r,
  links: s,
  ariaLabel: i = "in page navigation",
  className: a = "",
  ...o
}) => /* @__PURE__ */ g("nav", {
  className: `nsw-in-page-nav ${a}`,
  "aria-labelledby": i,
  ...o,
  children: [/* @__PURE__ */ t("div", {
    id: i,
    className: "nsw-in-page-nav__title",
    children: r
  }), /* @__PURE__ */ t("ul", {
    children: s ? s.map((c) => /* @__PURE__ */ xn(Wr, {
      ...c,
      key: c.title
    })) : ""
  })]
}), Yr = ({
  text: r,
  link: s,
  linkComponent: i = "a",
  children: a,
  onClick: o,
  ...c
}) => {
  const l = i;
  return typeof o == "function" && (c.onClick = o, s || (s = "#")), l === "a" ? c.href = s : typeof l == "function" && (c.to = s), s ? /* @__PURE__ */ g("li", {
    className: "nsw-link-list__item",
    children: [/* @__PURE__ */ g(l, {
      ...c,
      children: [/* @__PURE__ */ t("span", {
        children: r
      }), /* @__PURE__ */ t("span", {
        className: "material-icons nsw-material-icons nsw-link-list__icon",
        "aria-hidden": "true",
        children: "east"
      })]
    }), a]
  }) : /* @__PURE__ */ g("li", {
    className: "nsw-link-list__item",
    children: [r, a]
  });
};
Yr.propTypes = {
  text: e.exports.node.isRequired,
  link: e.exports.string,
  onClick: e.exports.func,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func]),
  children: e.exports.node
};
const ct = ({
  items: r,
  linkComponent: s = "a",
  className: i = "",
  ...a
}) => /* @__PURE__ */ t("div", {
  className: "nsw-link-list",
  children: /* @__PURE__ */ t("ul", {
    className: `nsw-link-list__list ${i}`,
    ...a,
    children: r.map((o, c) => /* @__PURE__ */ t(Yr, {
      ...o,
      linkComponent: s
    }, o.href || "" + c))
  })
});
ct.propTypes = {
  items: e.exports.arrayOf(e.exports.shape({
    link: e.exports.string,
    text: e.exports.node.isRequired
  })).isRequired,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func]),
  className: e.exports.string
};
const lt = (r) => {
  const s = Object.keys(r).sort((i, a) => r[a] - r[i]);
  return s.map((i, a) => {
    let o = "";
    const c = r[i], l = s[a - 1], u = l ? r[l] : null;
    return c >= 0 && (o = `(min-width: ${c}px)`), u !== null && (o && (o += " and "), o += `(max-width: ${u - 1}px)`), {
      breakpoint: i,
      maxWidth: u ? u - 1 : null,
      minWidth: c,
      query: o
    };
  });
}, ut = lt, dt = typeof window > "u" ? xe : yn, pt = dt, ft = {
  breakpoint: void 0,
  minWidth: void 0,
  maxWidth: void 0
}, ht = (r, s, i = !0) => {
  const a = bn(() => ut(r), [r]), [o, c] = br(() => {
    for (const { query: u, ...p } of a)
      if (typeof window < "u" && !(s && i)) {
        if (window.matchMedia(u).matches)
          return p;
      } else if (p.breakpoint === s)
        return p;
    return ft;
  }), l = _n(({ matches: u }, p) => {
    u && c(p);
  }, []);
  return pt(() => {
    const u = a.map(({ query: p, ...x }) => {
      const f = window.matchMedia(p);
      l(f, x);
      const _ = (w) => {
        l(w, x);
      };
      return f.addListener(_), () => f.removeListener(_);
    });
    return () => u.forEach((p) => p());
  }, [a, l]), wn(o, (u) => typeof u.breakpoint == "string" ? `${u.breakpoint} (${u.minWidth} \u2264 x${u.maxWidth ? ` < ${u.maxWidth + 1}` : ""})` : ""), o;
}, vt = ht, mt = {
  mobile: 0,
  tablet: 992
}, qt = (r) => {
  const {
    navItems: s,
    megaMenu: i,
    className: a = "",
    renderLink: o,
    isCloseWhenOutsideClick: c = !0,
    ...l
  } = r, {
    breakpoint: u
  } = vt(mt, "mobile"), p = Ne(null), x = () => {
    var _;
    const f = (_ = p.current) == null ? void 0 : _.querySelector("ul > li > a.active");
    return f && f.click(), f;
  };
  return xe(() => {
    (async () => {
      const {
        Navigation: f
      } = await import("./main.ca35e5ee.js");
      new f().init();
    })();
  }, []), xe(() => {
    if (c && u === "mobile") {
      const f = (_) => {
        _.target.closest(".nsw-main-nav__list") || x();
      };
      return document.addEventListener("click", f), () => {
        document.removeEventListener("click", f);
      };
    }
  }, [c, u]), /* @__PURE__ */ g("nav", {
    id: "main-nav",
    className: `nsw-main-nav ${a} ${i ? "js-mega-menu" : ""}`,
    "aria-label": "Main Navigation",
    ...l,
    children: [/* @__PURE__ */ g("div", {
      className: "nsw-main-nav__header",
      children: [/* @__PURE__ */ t("div", {
        id: "nsw-main-nav__title",
        children: "Menu"
      }), /* @__PURE__ */ g("button", {
        type: "button",
        className: "nsw-icon-button js-close-nav",
        "aria-expanded": "true",
        children: [/* @__PURE__ */ t("span", {
          className: "material-icons nsw-material-icons",
          "aria-hidden": "true",
          children: "close"
        }), /* @__PURE__ */ t("span", {
          className: "sr-only",
          children: "Close Menu"
        })]
      })]
    }), /* @__PURE__ */ t("ul", {
      ref: p,
      className: "nsw-main-nav__list",
      children: s.map((f, _) => {
        var w, R;
        return /* @__PURE__ */ t("li", {
          children: /* @__PURE__ */ g(Ve, {
            children: [o ? o(f) : /* @__PURE__ */ g("a", {
              href: f.url,
              target: f.target,
              children: [/* @__PURE__ */ t("span", {
                children: f.text
              }), (w = f.subNav) != null && w.length ? /* @__PURE__ */ t("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (R = f.subNav) != null && R.length ? /* @__PURE__ */ t(zr, {
              subNav: f.subNav,
              url: f.url,
              text: f.text,
              target: f.target,
              description: f.description,
              id: f.id,
              renderLink: o
            }) : ""]
          })
        }, f.id ? `navItem-${f.id}` : f.url + f.text + _);
      })
    })]
  });
}, Ye = ({
  url: r,
  text: s,
  description: i,
  id: a,
  target: o
}) => /* @__PURE__ */ g(Ve, {
  children: [/* @__PURE__ */ g("div", {
    className: "nsw-main-nav__header",
    children: [/* @__PURE__ */ g("button", {
      type: "button",
      className: "nsw-icon-button nsw-icon-button--flex js-close-sub-nav",
      "aria-controls": `sub-nav-${a}`,
      "aria-expanded": "true",
      children: [/* @__PURE__ */ t("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "keyboard_arrow_left"
      }), /* @__PURE__ */ g("span", {
        children: ["Back", /* @__PURE__ */ t("span", {
          className: "sr-only",
          children: " to previous menu"
        })]
      })]
    }), /* @__PURE__ */ g("button", {
      type: "button",
      className: "nsw-icon-button js-close-nav",
      "aria-expanded": "true",
      children: [/* @__PURE__ */ t("i", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "close"
      }), /* @__PURE__ */ t("span", {
        className: "sr-only",
        children: "Close Menu"
      })]
    })]
  }), /* @__PURE__ */ t("div", {
    className: "nsw-main-nav__title",
    children: /* @__PURE__ */ g("a", {
      href: r,
      target: o,
      children: [/* @__PURE__ */ t("span", {
        children: s
      }), /* @__PURE__ */ t("span", {
        className: "material-icons nsw-material-icons",
        "aria-hidden": "true",
        children: "east"
      })]
    })
  }), /* @__PURE__ */ t("div", {
    className: "nsw-main-nav__description",
    children: i
  })]
});
Ye.propTypes = {
  url: e.exports.string,
  text: e.exports.string,
  description: e.exports.string,
  id: e.exports.string,
  target: e.exports.string
};
const zr = ({
  id: r = "",
  subNav: s,
  url: i,
  text: a,
  description: o,
  target: c,
  renderLink: l
}) => {
  const u = r || Tr();
  return s ? /* @__PURE__ */ g("div", {
    className: "nsw-main-nav__sub-nav",
    id: `sub-nav-${u}`,
    role: "region",
    "aria-label": a,
    children: [/* @__PURE__ */ t(Ye, {
      url: i,
      text: a,
      description: o,
      id: u,
      target: c
    }), /* @__PURE__ */ t("ul", {
      className: "nsw-main-nav__sub-list",
      children: s.map((p, x) => {
        var _, w;
        const f = u + x;
        return /* @__PURE__ */ t("li", {
          children: /* @__PURE__ */ g(Ve, {
            children: [l ? l(p) : /* @__PURE__ */ g("a", {
              href: p.url,
              target: p.target,
              children: [/* @__PURE__ */ t("span", {
                children: p.text
              }), (_ = p.subNav) != null && _.length ? /* @__PURE__ */ t("span", {
                className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                "aria-hidden": "true",
                children: "keyboard_arrow_right"
              }) : ""]
            }), (w = p.subNav) != null && w.length ? /* @__PURE__ */ g("div", {
              className: "nsw-main-nav__sub-nav",
              id: `sub-nav-${f}`,
              role: "region",
              "aria-label": `${a} Submenu`,
              children: [/* @__PURE__ */ t(Ye, {
                url: i,
                text: a,
                description: o,
                id: f
              }), /* @__PURE__ */ t("ul", {
                className: "nsw-main-nav__sub-list",
                children: p.subNav.map((R, W) => {
                  var M;
                  return /* @__PURE__ */ t("li", {
                    children: l ? l(R) : /* @__PURE__ */ g("a", {
                      href: R.url,
                      target: R.target,
                      className: "nsw-subnavigation__link",
                      children: [/* @__PURE__ */ t("span", {
                        children: R.text
                      }), (M = R.subNav) != null && M.length ? /* @__PURE__ */ t("span", {
                        className: "material-icons nsw-material-icons nsw-main-nav__link-icon",
                        "aria-hidden": "true",
                        children: "keyboard_arrow_right"
                      }) : ""]
                    })
                  }, R.url + R.text + W);
                })
              })]
            }) : ""]
          })
        }, f);
      })
    })]
  }) : null;
};
zr.propTypes = {
  subNav: e.exports.arrayOf(e.exports.shape({
    url: e.exports.string,
    text: e.exports.string,
    subNav: e.exports.arrayOf
  })).isRequired,
  url: e.exports.string,
  text: e.exports.string,
  description: e.exports.string,
  renderLink: e.exports.func,
  target: e.exports.string
};
const gt = ({
  text: r = "A NSW Government website"
}) => /* @__PURE__ */ t("div", {
  className: "nsw-masthead",
  children: /* @__PURE__ */ t("div", {
    className: "nsw-container",
    children: /* @__PURE__ */ t("p", {
      children: r
    })
  })
});
gt.propTypes = {
  text: e.exports.string
};
const xt = ({
  nav: r,
  content: s
}) => /* @__PURE__ */ g("nav", {
  className: "nsw-skip",
  "aria-label": "Skip to links",
  children: [/* @__PURE__ */ t("a", {
    href: r,
    children: /* @__PURE__ */ t("span", {
      children: "Skip to navigation"
    })
  }), /* @__PURE__ */ t("a", {
    href: s,
    children: /* @__PURE__ */ t("span", {
      children: "Skip to content"
    })
  })]
});
xt.propTypes = {
  nav: e.exports.string.isRequired,
  content: e.exports.string.isRequired
};
const yt = {
  info: "nsw-in-page-alert--info",
  warning: "nsw-in-page-alert--warning",
  error: "nsw-in-page-alert--error",
  success: "nsw-in-page-alert--success"
}, bt = {
  info: "info",
  warning: "cancel",
  error: "error",
  success: "check_circle"
}, _t = ({
  title: r = "",
  as: s,
  children: i,
  className: a = "",
  ...o
}) => /* @__PURE__ */ g("div", {
  className: `nsw-in-page-alert ${a} ${yt[s]}`,
  ...o,
  children: [/* @__PURE__ */ t("span", {
    className: "material-icons nsw-material-icons nsw-in-page-alert__icon",
    children: bt[s]
  }), /* @__PURE__ */ g("div", {
    className: "nsw-in-page-alert__content",
    children: [/* @__PURE__ */ t("h4", {
      children: r
    }), i]
  })]
});
_t.propTypes = {
  as: e.exports.oneOf(["info", "warning", "error", "success"]).isRequired,
  children: e.exports.node.isRequired,
  className: e.exports.string,
  title: e.exports.string
};
const wt = ({
  backLink: r,
  active: s,
  nextLink: i,
  paginationItems: a,
  className: o,
  children: c,
  ...l
}) => /* @__PURE__ */ t("div", {
  className: `nsw-container ${o}`,
  ...l,
  children: /* @__PURE__ */ t("nav", {
    className: "nsw-pagination",
    "aria-label": "Pagination",
    children: /* @__PURE__ */ g("ul", {
      children: [/* @__PURE__ */ t("li", {
        children: /* @__PURE__ */ g("a", {
          className: "nsw-icon-button",
          href: r,
          children: [/* @__PURE__ */ t("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_left"
          }), /* @__PURE__ */ t("span", {
            className: "sr-only",
            children: "Back"
          })]
        })
      }), a ? a.map((u, p) => /* @__PURE__ */ t(Br, {
        url: u.url,
        page: p + 1,
        active: s
      }, `pagination-${p}`)) : "", c, /* @__PURE__ */ t("li", {
        children: /* @__PURE__ */ g("a", {
          href: i,
          className: "nsw-icon-button",
          children: [/* @__PURE__ */ t("span", {
            className: "material-icons nsw-material-icons",
            "aria-hidden": "true",
            children: "keyboard_arrow_right"
          }), /* @__PURE__ */ t("span", {
            className: "sr-only",
            children: "Next"
          })]
        })
      })]
    })
  })
});
wt.propTypes = {
  className: e.exports.string,
  paginationItems: e.exports.arrayOf(e.exports.shape({
    url: e.exports.string
  })),
  children: e.exports.node,
  backLink: e.exports.string,
  nextLink: e.exports.string,
  active: e.exports.number
};
const Br = ({
  url: r,
  page: s,
  active: i
}) => /* @__PURE__ */ t("li", {
  children: /* @__PURE__ */ t("a", {
    className: i === s ? "active" : "",
    href: r,
    children: /* @__PURE__ */ g("span", {
      children: [/* @__PURE__ */ t("span", {
        className: "sr-only",
        children: "Page "
      }), s]
    })
  })
});
Br.propTypes = {
  page: e.exports.number,
  active: e.exports.number,
  url: e.exports.string
};
const Tt = {
  full: "",
  half: "nsw-section--half-padding",
  none: "nsw-section--no-padding"
}, Rt = ({
  children: r,
  style: s = "white",
  container: i = !0,
  padding: a = "full",
  box: o = !1,
  className: c = "",
  ...l
}) => /* @__PURE__ */ t("div", {
  className: `nsw-section ${c} ${Tt[a]} nsw-section--${s} ${o ? "nsw-section--box" : ""}`,
  ...l,
  children: /* @__PURE__ */ t("div", {
    className: i ? "nsw-container" : "",
    children: r
  })
});
Rt.propTypes = {
  padding: e.exports.oneOf(["full", "half", "none"]),
  style: e.exports.oneOf(["white", "brand-dark", "brand-light", "brand-supplementary", "black", "off-white", "grey-01", "grey-02", "grey-03", "grey-04"]),
  children: e.exports.node.isRequired,
  container: e.exports.bool,
  className: e.exports.string,
  box: e.exports.bool
};
const Nt = ({
  caption: r,
  headers: s,
  data: i,
  striped: a = !1,
  bordered: o,
  captionTop: c,
  className: l = "",
  firstCellIsHeader: u,
  ...p
}) => /* @__PURE__ */ g("table", {
  className: `nsw-table ${a ? "nsw-table--striped " : " "} ${o ? "nsw-table--bordered " : " "} ${c ? "nsw-table--caption-top " : " "} ${l}`,
  ...p,
  children: [r && /* @__PURE__ */ t(Gr, {
    tableCaption: r
  }), /* @__PURE__ */ t(Ur, {
    children: /* @__PURE__ */ t(Be, {
      children: s.map((x, f) => /* @__PURE__ */ t(ze, {
        title: x.title,
        width: x.width
      }, `tableHeader-${ne()}`))
    })
  }), /* @__PURE__ */ t(Hr, {
    children: i.map((x, f) => /* @__PURE__ */ t(Be, {
      children: s.map((_, w) => w === 0 && u === !0 ? /* @__PURE__ */ t(ze, {
        scope: "row",
        title: x[_.key] ? x[_.key] : ""
      }, `tableHeader-${ne()}`) : /* @__PURE__ */ t(Vr, {
        data: x[_.key] ? x[_.key] : ""
      }, `tableCell-${ne()}`))
    }, `tableRow-${ne()}`))
  })]
});
Nt.propTypes = {
  caption: e.exports.string,
  headers: e.exports.arrayOf(Object).isRequired,
  data: e.exports.arrayOf(Object).isRequired,
  striped: e.exports.bool,
  bordered: e.exports.bool,
  captionTop: e.exports.bool,
  className: e.exports.string,
  firstCellIsHeader: e.exports.bool
};
const Hr = ({
  className: r = "",
  ...s
}) => /* @__PURE__ */ t("tbody", {
  className: r,
  ...s
});
Hr.propTypes = {
  className: e.exports.string
};
const Ur = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("thead", {
  className: s,
  ...i,
  children: r
});
Ur.propTypes = {
  children: e.exports.node,
  className: e.exports.string
};
const ze = ({
  title: r,
  width: s,
  scope: i = "col",
  className: a = "",
  ...o
}) => (o.width = s ? `${s}%` : void 0, /* @__PURE__ */ t("th", {
  ...o,
  className: a,
  scope: i,
  children: r
}));
ze.propTypes = {
  title: e.exports.string.isRequired,
  width: e.exports.number,
  className: e.exports.string,
  scope: e.exports.string
};
const Vr = ({
  data: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("td", {
  className: s,
  ...i,
  children: r
});
Vr.propTypes = {
  data: e.exports.string,
  className: e.exports.string
};
const Be = ({
  children: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("tr", {
  className: s,
  ...i,
  children: r
});
Be.propTypes = {
  children: e.exports.node,
  className: e.exports.string
};
const Gr = ({
  captionId: r,
  tableCaption: s,
  className: i = "",
  ...a
}) => s ? /* @__PURE__ */ t("caption", {
  className: i,
  ...a,
  children: s
}) : null;
Gr.propTypes = {
  tableCaption: e.exports.string,
  captionId: e.exports.string,
  className: e.exports.string
};
const Et = ({
  children: r
}) => /* @__PURE__ */ t("div", {
  className: "nsw-table-responsive",
  role: "region",
  children: r
});
Et.propTypes = {
  children: e.exports.node
};
const Ot = (r) => {
  const {
    className: s = "",
    children: i,
    ...a
  } = r, o = Ne(null);
  return xe(() => {
    (async () => {
      const {
        Tabs: c
      } = await import("./main.ca35e5ee.js");
      new c(o.current).init();
    })();
  }, []), /* @__PURE__ */ t("div", {
    ref: o,
    className: `nsw-tabs js-tabs ${s}`,
    ...a,
    children: i
  });
};
Ot.propTypes = {
  className: e.exports.string,
  children: e.exports.node
};
const Ct = ({
  children: r
}) => /* @__PURE__ */ t("ul", {
  className: "nsw-tabs__list",
  children: r
});
Ct.propTypes = {
  children: e.exports.node.isRequired
};
const $t = ({
  urlHash: r,
  title: s
}) => /* @__PURE__ */ t("li", {
  className: "nsw-tabs__list-item",
  children: /* @__PURE__ */ t("a", {
    href: `#${r}`,
    className: "nsw-tabs__link",
    children: s
  })
});
$t.propTypes = {
  urlHash: e.exports.string.isRequired,
  title: e.exports.string.isRequired
};
const kt = ({
  urlHash: r,
  children: s
}) => /* @__PURE__ */ t("section", {
  id: r,
  className: "nsw-tabs__content",
  children: s
});
kt.propTypes = {
  urlHash: e.exports.string.isRequired,
  children: e.exports.node.isRequired
};
const Jr = ({
  link: r,
  text: s,
  linkComponent: i = "a",
  className: a = "",
  ...o
}) => {
  const c = "span", l = i;
  return l === "a" ? o.href = r : typeof l == "function" && (o.to = r), r ? /* @__PURE__ */ t(l, {
    className: `nsw-tag ${a}`,
    ...o,
    children: s
  }) : /* @__PURE__ */ t(c, {
    ...o,
    className: `nsw-tag ${a}`,
    children: s
  });
};
Jr.propTypes = {
  className: e.exports.string,
  link: e.exports.string,
  text: e.exports.string.isRequired,
  linkComponent: e.exports.oneOfType([e.exports.string, e.exports.func])
};
const Mt = ({
  tags: r,
  className: s = "",
  ...i
}) => /* @__PURE__ */ t("div", {
  className: `nsw-list nsw-list--8 ${s}`,
  ...i,
  children: r.map((a) => /* @__PURE__ */ t(Jr, {
    ...a,
    linkComponent: a.linkComponent,
    link: a.link,
    text: a.text
  }, a.text))
}), St = {
  default: "",
  dark: "nsw-media--dark",
  light: "nsw-media--light",
  transparent: "nsw-media--transparent"
}, Pt = ({
  image: r,
  video: s,
  title: i,
  caption: a,
  left: o,
  right: c,
  center: l,
  children: u,
  style: p = "default"
}) => /* @__PURE__ */ g("figure", {
  className: `nsw-media${o === void 0 || o === "none" ? "" : ` nsw-media--left-${o}`}
		${St[p]}
		${c === void 0 || c === "none" ? "" : ` nsw-media--right-${c}`}
		${l === void 0 || l === "none" ? "" : ` nsw-media--${l}`}`,
  children: [s ? /* @__PURE__ */ t("div", {
    className: "nsw-media__video",
    children: /* @__PURE__ */ t("iframe", {
      src: s,
      title: i,
      frameBorder: "0",
      allowFullScreen: !0
    })
  }) : "", r ? /* @__PURE__ */ t("img", {
    src: r,
    alt: i
  }) : "", u, !!a && /* @__PURE__ */ t("figcaption", {
    children: a
  })]
});
Pt.propTypes = {
  style: e.exports.oneOf(["default", "dark", "light", "transparent"]),
  video: e.exports.string,
  image: e.exports.string,
  caption: e.exports.string,
  title: e.exports.string,
  right: e.exports.oneOf(["none", "30", "40", "50"]),
  left: e.exports.oneOf(["none", "30", "40", "50"]),
  center: e.exports.oneOf(["none", "60", "70", "80", "90"])
};
export {
  An as Accordion,
  qn as AccordionGroup,
  _t as Alert,
  Mn as Breadcrumbs,
  Fn as Button,
  Dn as Callout,
  Ln as Card,
  Wn as CardCopy,
  Yn as ContentBlock,
  Vn as Footer,
  zn as FooterLinks,
  Un as FooterLower,
  Bn as FooterSectionGroup,
  Hn as FooterUpper,
  Ge as FormGroup,
  Xn as FormGroupCheckbox,
  Zn as FormGroupRadio,
  Qn as FormGroupSelect,
  Jn as FormGroupText,
  oe as FormHelper,
  qr as FormLabel,
  nt as GlobalAlert,
  tt as Header,
  it as HeroBanner,
  ot as HeroBannerList,
  At as InPageNavLinks,
  ct as LinkList,
  qt as MainNav,
  gt as Masthead,
  Pt as Media,
  wt as Pagination,
  et as ProgressIndicator,
  Rt as Section,
  Fr as Select,
  Ir as SelectItem,
  xt as SkipTo,
  $t as TabItem,
  Ct as TabItemWrapper,
  kt as TabSection,
  Nt as Table,
  Et as TableResponsiveWrapper,
  Ot as Tabs,
  Mt as TagList,
  Mr as TextInput
};
