import {
    q as r,
    r as n,
    a as t,
    s as e,
    i,
    v as u
} from "./index.0e1148e8.js";
import {
    S as o,
    k as f,
    f as a,
    c
} from "./_Uint8Array.82d4fc05.js";
import {
    b as s
} from "./_baseIsEqual.cca7ad74.js";
import {
    a as v,
    i as l
} from "./isObject.a01dee34.js";
import {
    h as d
} from "./hasIn.0ceeb413.js";
import {
    i as m
} from "./identity.737b3aaf.js";
import {
    b
} from "./_baseFor.671df8ff.js";

function h(r) {
    return r == r && !v(r)
}

function j(r, n) {
    return function(t) {
        return null != t && (t[r] === n && (void 0 !== n || r in Object(t)))
    }
}

function g(r) {
    var n = function(r) {
        for (var n = f(r), t = n.length; t--;) {
            var e = n[t],
                i = r[e];
            n[t] = [e, i, h(i)]
        }
        return n
    }(r);
    return 1 == n.length && n[0][2] ? j(n[0][0], n[0][1]) : function(t) {
        return t === r || function(r, n, t, e) {
            var i = t.length,
                u = i,
                f = !e;
            if (null == r) return !u;
            for (r = Object(r); i--;) {
                var a = t[i];
                if (f && a[2] ? a[1] !== r[a[0]] : !(a[0] in r)) return !1
            }
            for (; ++i < u;) {
                var c = (a = t[i])[0],
                    v = r[c],
                    l = a[1];
                if (f && a[2]) {
                    if (void 0 === v && !(c in r)) return !1
                } else {
                    var d = new o;
                    if (e) var m = e(v, l, c, r, n, d);
                    if (!(void 0 === m ? s(l, v, 3, e, d) : m)) return !1
                }
            }
            return !0
        }(t, r, n)
    }
}
var p, x;

function y(t) {
    return r(t) ? (i = n(t), function(r) {
        return null == r ? void 0 : r[i]
    }) : function(r) {
        return function(n) {
            return e(n, r)
        }
    }(t);
    var i
}

function O(e) {
    return "function" == typeof e ? e : null == e ? m : "object" == typeof e ? i(e) ? (u = e[0], o = e[1], r(u) && h(o) ? j(n(u), o) : function(r) {
        var n = t(r, u);
        return void 0 === n && n === o ? d(r, u) : s(o, n, 3)
    }) : g(e) : y(e);
    var u, o
}
const _ = (p = function(r, n) {
    return r && b(r, n, f)
}, function(r, n) {
    if (null == r) return r;
    if (!a(r)) return p(r, n);
    for (var t = r.length, e = x ? t : -1, i = Object(r);
        (x ? e-- : ++e < t) && !1 !== n(i[e], e, i););
    return r
});

function q(r, n) {
    if (r !== n) {
        var t = void 0 !== r,
            e = null === r,
            i = r == r,
            u = l(r),
            o = void 0 !== n,
            f = null === n,
            a = n == n,
            c = l(n);
        if (!f && !c && !u && r > n || u && o && a && !f && !c || e && o && a || !t && a || !i) return 1;
        if (!e && !u && !c && r < n || c && t && i && !e && !u || f && t && i || !o && i || !a) return -1
    }
    return 0
}

function A(r, n, t) {
    n = n.length ? u(n, (function(r) {
        return i(r) ? function(n) {
            return e(n, 1 === r.length ? r[0] : r)
        } : r
    })) : [m];
    var o = -1;
    n = u(n, c(O));
    var f = function(r, n) {
        var t = -1,
            e = a(r) ? Array(r.length) : [];
        return _(r, (function(r, i, u) {
            e[++t] = n(r, i, u)
        })), e
    }(r, (function(r, t, e) {
        return {
            criteria: u(n, (function(n) {
                return n(r)
            })),
            index: ++o,
            value: r
        }
    }));
    return function(r, n) {
        var t = r.length;
        for (r.sort(n); t--;) r[t] = r[t].value;
        return r
    }(f, (function(r, n) {
        return function(r, n, t) {
            for (var e = -1, i = r.criteria, u = n.criteria, o = i.length, f = t.length; ++e < o;) {
                var a = q(i[e], u[e]);
                if (a) return e >= f ? a : a * ("desc" == t[e] ? -1 : 1)
            }
            return r.index - n.index
        }(r, n, t)
    }))
}
export {
    A as b
};