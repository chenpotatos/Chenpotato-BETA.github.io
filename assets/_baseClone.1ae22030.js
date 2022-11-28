import {
    k as t,
    g as e,
    s as r,
    b as o,
    a,
    n,
    c,
    i as s,
    S as b,
    d as i
} from "./_Uint8Array.82d4fc05.js";
import {
    i as u,
    c as j
} from "./index.0e1148e8.js";
import {
    c as f,
    k as y,
    g as l,
    a as p,
    b as A,
    d as v,
    e as d,
    i as m
} from "./_initCloneObject.91168f35.js";
import {
    a as g
} from "./_arrayPush.949d1e07.js";
import {
    S as w,
    b as O,
    a as S
} from "./isObject.a01dee34.js";
const x = Object.getOwnPropertySymbols ? function(t) {
    for (var r = []; t;) g(r, e(t)), t = l(t);
    return r
} : r;

function U(t) {
    return o(t, y, x)
}
var h = Object.prototype.hasOwnProperty;
var I = /\w*$/;
var F = w ? w.prototype : void 0,
    E = F ? F.valueOf : void 0;

function M(t, e, r) {
    var o, a, n, c = t.constructor;
    switch (e) {
        case "[object ArrayBuffer]":
            return p(t);
        case "[object Boolean]":
        case "[object Date]":
            return new c(+t);
        case "[object DataView]":
            return function(t, e) {
                var r = e ? p(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.byteLength)
            }(t, r);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
            return A(t, r);
        case "[object Map]":
        case "[object Set]":
            return new c;
        case "[object Number]":
        case "[object String]":
            return new c(t);
        case "[object RegExp]":
            return (n = new(a = t).constructor(a.source, I.exec(a))).lastIndex = a.lastIndex, n;
        case "[object Symbol]":
            return o = t, E ? Object(E.call(o)) : {}
    }
}
var B = n && n.isMap;
const D = B ? c(B) : function(t) {
    return O(t) && "[object Map]" == a(t)
};
var k = n && n.isSet;
const C = k ? c(k) : function(t) {
    return O(t) && "[object Set]" == a(t)
};
var P = {};

function _(r, o, n, c, l, p) {
    var A, g = 1 & o,
        w = 2 & o,
        O = 4 & o;
    if (n && (A = l ? n(r, c, l, p) : n(r)), void 0 !== A) return A;
    if (!S(r)) return r;
    var I = u(r);
    if (I) {
        if (A = function(t) {
                var e = t.length,
                    r = new t.constructor(e);
                return e && "string" == typeof t[0] && h.call(t, "index") && (r.index = t.index, r.input = t.input), r
            }(r), !g) return v(r, A)
    } else {
        var F = a(r),
            E = "[object Function]" == F || "[object GeneratorFunction]" == F;
        if (s(r)) return d(r, g);
        if ("[object Object]" == F || "[object Arguments]" == F || E && !l) {
            if (A = w || E ? {} : m(r), !g) return w ? function(t, e) {
                return f(t, x(t), e)
            }(r, function(t, e) {
                return t && f(e, y(e), t)
            }(A, r)) : function(t, r) {
                return f(t, e(t), r)
            }(r, function(e, r) {
                return e && f(r, t(r), e)
            }(A, r))
        } else {
            if (!P[F]) return l ? r : {};
            A = M(r, F, g)
        }
    }
    p || (p = new b);
    var B = p.get(r);
    if (B) return B;
    p.set(r, A), C(r) ? r.forEach((function(t) {
        A.add(_(t, o, n, t, r, p))
    })) : D(r) && r.forEach((function(t, e) {
        A.set(e, _(t, o, n, e, r, p))
    }));
    var k = I ? void 0 : (O ? w ? U : i : w ? y : t)(r);
    return function(t, e) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o && !1 !== e(t[r], r, t););
    }(k || r, (function(t, e) {
        k && (t = r[e = t]), j(A, e, _(t, o, n, e, r, p))
    })), A
}
P["[object Arguments]"] = P["[object Array]"] = P["[object ArrayBuffer]"] = P["[object DataView]"] = P["[object Boolean]"] = P["[object Date]"] = P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Map]"] = P["[object Number]"] = P["[object Object]"] = P["[object RegExp]"] = P["[object Set]"] = P["[object String]"] = P["[object Symbol]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P["[object Error]"] = P["[object Function]"] = P["[object WeakMap]"] = !1;
export {
    _ as b
};