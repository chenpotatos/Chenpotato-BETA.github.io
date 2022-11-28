import {
    o as r
} from "./index.0e1148e8.js";
import {
    i as a
} from "./identity.737b3aaf.js";

function n(r, a, n) {
    switch (n.length) {
        case 0:
            return r.call(a);
        case 1:
            return r.call(a, n[0]);
        case 2:
            return r.call(a, n[0], n[1]);
        case 3:
            return r.call(a, n[0], n[1], n[2])
    }
    return r.apply(a, n)
}
var t = Date.now;
var e = r ? function(a, n) {
    return r(a, "toString", {
        configurable: !0,
        enumerable: !1,
        value: (t = n, function() {
            return t
        }),
        writable: !0
    });
    var t
} : a;
var i, o, u;
const l = (i = e, o = 0, u = 0, function() {
    var r = t(),
        a = 16 - (r - u);
    if (u = r, a > 0) {
        if (++o >= 800) return arguments[0]
    } else o = 0;
    return i.apply(void 0, arguments)
});
var c = Math.max;

function s(r, a, t) {
    return a = c(void 0 === a ? r.length - 1 : a, 0),
        function() {
            for (var e = arguments, i = -1, o = c(e.length - a, 0), u = Array(o); ++i < o;) u[i] = e[a + i];
            i = -1;
            for (var l = Array(a + 1); ++i < a;) l[i] = e[i];
            return l[a] = t(u), n(r, this, l)
        }
}
export {
    s as o, l as s
};