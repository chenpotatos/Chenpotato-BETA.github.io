import {
    U as e,
    d as r,
    a as t,
    i as n,
    S as a,
    j as o
} from "./_Uint8Array.82d4fc05.js";
import {
    j as i,
    l as s,
    i as c
} from "./index.0e1148e8.js";
import {
    S as f,
    b as u
} from "./isObject.a01dee34.js";

function l(e) {
    var r = -1,
        t = null == e ? 0 : e.length;
    for (this.__data__ = new i; ++r < t;) this.add(e[r])
}

function b(e, r) {
    for (var t = -1, n = null == e ? 0 : e.length; ++t < n;)
        if (r(e[t], t, e)) return !0;
    return !1
}

function v(e, r) {
    return e.has(r)
}
l.prototype.add = l.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, l.prototype.has = function(e) {
    return this.__data__.has(e)
};

function h(e, r, t, n, a, o) {
    var i = 1 & t,
        s = e.length,
        c = r.length;
    if (s != c && !(i && c > s)) return !1;
    var f = o.get(e),
        u = o.get(r);
    if (f && u) return f == r && u == e;
    var h = -1,
        p = !0,
        _ = 2 & t ? new l : void 0;
    for (o.set(e, r), o.set(r, e); ++h < s;) {
        var d = e[h],
            j = r[h];
        if (n) var y = i ? n(j, d, h, r, e, o) : n(d, j, h, e, r, o);
        if (void 0 !== y) {
            if (y) continue;
            p = !1;
            break
        }
        if (_) {
            if (!b(r, (function(e, r) {
                    if (!v(_, r) && (d === e || a(d, e, t, n, o))) return _.push(r)
                }))) {
                p = !1;
                break
            }
        } else if (d !== j && !a(d, j, t, n, o)) {
            p = !1;
            break
        }
    }
    return o.delete(e), o.delete(r), p
}

function p(e) {
    var r = -1,
        t = Array(e.size);
    return e.forEach((function(e, n) {
        t[++r] = [n, e]
    })), t
}

function _(e) {
    var r = -1,
        t = Array(e.size);
    return e.forEach((function(e) {
        t[++r] = e
    })), t
}
var d = f ? f.prototype : void 0,
    j = d ? d.valueOf : void 0;
var y = Object.prototype.hasOwnProperty;
var g = "[object Object]",
    m = Object.prototype.hasOwnProperty;

function w(i, f, u, l, b, v) {
    var d = c(i),
        w = c(f),
        O = d ? "[object Array]" : t(i),
        A = w ? "[object Array]" : t(f),
        S = (O = "[object Arguments]" == O ? g : O) == g,
        k = (A = "[object Arguments]" == A ? g : A) == g,
        z = O == A;
    if (z && n(i)) {
        if (!n(f)) return !1;
        d = !0, S = !1
    }
    if (z && !S) return v || (v = new a), d || o(i) ? h(i, f, u, l, b, v) : function(r, t, n, a, o, i, c) {
        switch (n) {
            case "[object DataView]":
                if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset) return !1;
                r = r.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
                return !(r.byteLength != t.byteLength || !i(new e(r), new e(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return s(+r, +t);
            case "[object Error]":
                return r.name == t.name && r.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return r == t + "";
            case "[object Map]":
                var f = p;
            case "[object Set]":
                var u = 1 & a;
                if (f || (f = _), r.size != t.size && !u) return !1;
                var l = c.get(r);
                if (l) return l == t;
                a |= 2, c.set(r, t);
                var b = h(f(r), f(t), a, o, i, c);
                return c.delete(r), b;
            case "[object Symbol]":
                if (j) return j.call(r) == j.call(t)
        }
        return !1
    }(i, f, O, u, l, b, v);
    if (!(1 & u)) {
        var E = S && m.call(i, "__wrapped__"),
            L = k && m.call(f, "__wrapped__");
        if (E || L) {
            var x = E ? i.value() : i,
                B = L ? f.value() : f;
            return v || (v = new a), b(x, B, u, l, v)
        }
    }
    return !!z && (v || (v = new a), function(e, t, n, a, o, i) {
        var s = 1 & n,
            c = r(e),
            f = c.length;
        if (f != r(t).length && !s) return !1;
        for (var u = f; u--;) {
            var l = c[u];
            if (!(s ? l in t : y.call(t, l))) return !1
        }
        var b = i.get(e),
            v = i.get(t);
        if (b && v) return b == t && v == e;
        var h = !0;
        i.set(e, t), i.set(t, e);
        for (var p = s; ++u < f;) {
            var _ = e[l = c[u]],
                d = t[l];
            if (a) var j = s ? a(d, _, l, t, e, i) : a(_, d, l, e, t, i);
            if (!(void 0 === j ? _ === d || o(_, d, n, a, i) : j)) {
                h = !1;
                break
            }
            p || (p = "constructor" == l)
        }
        if (h && !p) {
            var g = e.constructor,
                m = t.constructor;
            g == m || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof m && m instanceof m || (h = !1)
        }
        return i.delete(e), i.delete(t), h
    }(i, f, u, l, b, v))
}

function O(e, r, t, n, a) {
    return e === r || (null == e || null == r || !u(e) && !u(r) ? e != e && r != r : w(e, r, t, n, O, a))
}
export {
    l as S, O as b, v as c, _ as s
};