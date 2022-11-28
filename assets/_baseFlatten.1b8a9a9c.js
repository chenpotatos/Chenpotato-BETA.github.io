import {
    b as r,
    a
} from "./_arrayPush.949d1e07.js";
import {
    S as e
} from "./isObject.a01dee34.js";
import {
    i as o
} from "./index.0e1148e8.js";
var t = e ? e.isConcatSpreadable : void 0;

function s(a) {
    return o(a) || r(a) || !!(t && a && a[t])
}

function i(r, e, o, t, n) {
    var f = -1,
        m = r.length;
    for (o || (o = s), n || (n = []); ++f < m;) {
        var d = r[f];
        e > 0 && o(d) ? e > 1 ? i(d, e - 1, o, t, n) : a(n, d) : t || (n[n.length] = d)
    }
    return n
}
export {
    i as b
};