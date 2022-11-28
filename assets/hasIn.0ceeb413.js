import {
    w as r,
    r as n,
    h as a,
    i as e
} from "./index.0e1148e8.js";
import {
    i as t,
    b as u
} from "./_arrayPush.949d1e07.js";

function i(r, n) {
    return null != r && n in Object(r)
}

function l(l, s) {
    return null != l && function(i, l, s) {
        for (var o = -1, f = (l = r(l, i)).length, h = !1; ++o < f;) {
            var c = n(l[o]);
            if (!(h = null != i && s(i, c))) break;
            i = i[c]
        }
        return h || ++o != f ? h : !!(f = null == i ? 0 : i.length) && t(f) && a(c, f) && (e(i) || u(i))
    }(l, s, i)
}
export {
    l as h
};