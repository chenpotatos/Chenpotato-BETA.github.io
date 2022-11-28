import {
    k as r,
    c as t
} from "./index.0e1148e8.js";
import {
    e,
    f as o,
    h as n,
    o as u,
    U as a
} from "./_Uint8Array.82d4fc05.js";
import {
    a as c,
    r as f
} from "./isObject.a01dee34.js";
var s = Object.create;
const i = function() {
    function r() {}
    return function(t) {
        if (!c(t)) return {};
        if (s) return s(t);
        r.prototype = t;
        var e = new r;
        return r.prototype = void 0, e
    }
}();

function p(r, t) {
    var e = -1,
        o = r.length;
    for (t || (t = Array(o)); ++e < o;) t[e] = r[e];
    return t
}

function v(e, o, n, u) {
    var a = !n;
    n || (n = {});
    for (var c = -1, f = o.length; ++c < f;) {
        var s = o[c],
            i = u ? u(n[s], e[s], s, n, e) : void 0;
        void 0 === i && (i = e[s]), a ? r(n, s, i) : t(n, s, i)
    }
    return n
}
var d = Object.prototype.hasOwnProperty;

function l(r) {
    if (!c(r)) return function(r) {
        var t = [];
        if (null != r)
            for (var e in Object(r)) t.push(e);
        return t
    }(r);
    var t = e(r),
        o = [];
    for (var n in r)("constructor" != n || !t && d.call(r, n)) && o.push(n);
    return o
}

function y(r) {
    return o(r) ? n(r, !0) : l(r)
}
const b = u(Object.getPrototypeOf, Object);
var j = "object" == typeof exports && exports && !exports.nodeType && exports,
    m = j && "object" == typeof module && module && !module.nodeType && module,
    h = m && m.exports === j ? f.Buffer : void 0,
    O = h ? h.allocUnsafe : void 0;

function g(r, t) {
    if (t) return r.slice();
    var e = r.length,
        o = O ? O(e) : new r.constructor(e);
    return r.copy(o), o
}

function w(r) {
    var t = new r.constructor(r.byteLength);
    return new a(t).set(new a(r)), t
}

function x(r, t) {
    var e = t ? w(r.buffer) : r.buffer;
    return new r.constructor(e, r.byteOffset, r.length)
}

function U(r) {
    return "function" != typeof r.constructor || e(r) ? {} : i(b(r))
}
export {
    w as a, x as b, v as c, p as d, g as e, b as g, U as i, y as k
};