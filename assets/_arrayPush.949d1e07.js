import {
    b as e,
    c as r
} from "./isObject.a01dee34.js";

function t(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}

function n(t) {
    return e(t) && "[object Arguments]" == r(t)
}
var o = Object.prototype,
    a = o.hasOwnProperty,
    c = o.propertyIsEnumerable;
const u = n(function() {
    return arguments
}()) ? n : function(r) {
    return e(r) && a.call(r, "callee") && !c.call(r, "callee")
};

function l(e, r) {
    for (var t = -1, n = r.length, o = e.length; ++t < n;) e[o + t] = r[t];
    return e
}
export {
    l as a, u as b, t as i
};