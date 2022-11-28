import {
    i as t,
    a as r,
    r as n
} from "./isObject.a01dee34.js";
var i = /\s/;
var e = /^\s+/;

function o(t) {
    return t ? t.slice(0, function(t) {
        for (var r = t.length; r-- && i.test(t.charAt(r)););
        return r
    }(t) + 1).replace(e, "") : t
}
var u = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    f = /^0o[0-7]+$/i,
    c = parseInt;

function v(n) {
    if ("number" == typeof n) return n;
    if (t(n)) return NaN;
    if (r(n)) {
        var i = "function" == typeof n.valueOf ? n.valueOf() : n;
        n = r(i) ? i + "" : i
    }
    if ("string" != typeof n) return 0 === n ? n : +n;
    n = o(n);
    var e = a.test(n);
    return e || f.test(n) ? c(n.slice(2), e ? 2 : 8) : u.test(n) ? NaN : +n
}
const s = function() {
    return n.Date.now()
};
var l = Math.max,
    d = Math.min;

function m(t, n, i) {
    var e, o, u, a, f, c, m = 0,
        p = !1,
        h = !1,
        T = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");

    function x(r) {
        var n = e,
            i = o;
        return e = o = void 0, m = r, a = t.apply(i, n)
    }

    function y(t) {
        return m = t, f = setTimeout(N, n), p ? x(t) : a
    }

    function g(t) {
        var r = t - c;
        return void 0 === c || r >= n || r < 0 || h && t - m >= u
    }

    function N() {
        var t = s();
        if (g(t)) return b(t);
        f = setTimeout(N, function(t) {
            var r = n - (t - c);
            return h ? d(r, u - (t - m)) : r
        }(t))
    }

    function b(t) {
        return f = void 0, T && e ? x(t) : (e = o = void 0, a)
    }

    function w() {
        var t = s(),
            r = g(t);
        if (e = arguments, o = this, c = t, r) {
            if (void 0 === f) return y(c);
            if (h) return clearTimeout(f), f = setTimeout(N, n), x(c)
        }
        return void 0 === f && (f = setTimeout(N, n)), a
    }
    return n = v(n) || 0, r(i) && (p = !!i.leading, u = (h = "maxWait" in i) ? l(v(i.maxWait) || 0, n) : u, T = "trailing" in i ? !!i.trailing : T), w.cancel = function() {
        void 0 !== f && clearTimeout(f), m = 0, e = c = o = f = void 0
    }, w.flush = function() {
        return void 0 === f ? a : b(s())
    }, w
}
export {
    m as d
};