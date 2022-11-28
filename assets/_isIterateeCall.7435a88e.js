import {
    h as r,
    l as e
} from "./index.0e1148e8.js";
import {
    f as t
} from "./_Uint8Array.82d4fc05.js";
import {
    a as i
} from "./isObject.a01dee34.js";

function n(n, s, a) {
    if (!i(a)) return !1;
    var o = typeof s;
    return !!("number" == o ? t(a) && r(s, a.length) : "string" == o && s in a) && e(a[s], n)
}
export {
    n as i
};