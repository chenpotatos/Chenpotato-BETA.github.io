import {
    a9 as e,
    at as t,
    an as o,
    aB as s,
    as as n,
    O as a,
    c as r,
    o as l,
    b as i,
    U as c,
    ao as f,
    e as u
} from "./el-select.e274bb48.js";
import {
    u as p
} from "./index.0e1148e8.js";
import {
    a as d
} from "./style.d69d81d7.js";

function m(e) {
    for (var t = -1, o = null == e ? 0 : e.length, s = {}; ++t < o;) {
        var n = e[t];
        s[n[0]] = n[1]
    }
    return s
}
const v = e => void 0 === e,
    g = o => !o && 0 !== o || e(o) && 0 === o.length || t(o) && !Object.keys(o).length,
    y = e => "undefined" != typeof Element && e instanceof Element,
    _ = e => e,
    b = (e, n) => {
        if (!t(e) || t(a = e) && a.__epPropKey) return e;
        var a;
        const {
            values: r,
            required: l,
            default: i,
            type: c,
            validator: f
        } = e, u = r || f ? t => {
            let a = !1,
                l = [];
            if (r && (l = Array.from(r), o(e, "default") && l.push(i), a || (a = l.includes(t))), f && (a || (a = f(t))), !a && l.length > 0) {
                const e = [...new Set(l)].map((e => JSON.stringify(e))).join(", ");
                s(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${e}], got value ${JSON.stringify(t)}.`)
            }
            return a
        } : void 0, p = {
            type: c,
            required: !!l,
            validator: u,
            __epPropKey: !0
        };
        return o(e, "default") && (p.default = i), p
    },
    j = e => m(Object.entries(e).map((([e, t]) => [e, b(t, e)]))),
    O = (e, t) => {
        if (e.install = o => {
                for (const s of [e, ...Object.values(null != t ? t : {})]) o.component(s.name, s)
            }, t)
            for (const [o, s] of Object.entries(t)) e[o] = s;
        return e
    },
    h = (e, t) => (e.install = o => {
        e._context = o._context, o.config.globalProperties[t] = e
    }, e),
    S = (e, t) => (e.install = o => {
        o.directive(t, e)
    }, e),
    E = e => (e.install = n, e);
var $ = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [s, n] of t) o[s] = n;
    return o
};
const x = j({
        size: {
            type: [Number, String]
        },
        color: {
            type: String
        }
    }),
    P = a({
        name: "ElIcon",
        inheritAttrs: !1
    });
const k = O($(a({ ...P,
        props: x,
        setup(e) {
            const t = e,
                o = p("icon"),
                s = r((() => {
                    const {
                        size: e,
                        color: o
                    } = t;
                    return e || o ? {
                        fontSize: v(e) ? void 0 : d(e),
                        "--color": o
                    } : {}
                }));
            return (e, t) => (l(), i("i", f({
                class: u(o).b(),
                style: u(s)
            }, e.$attrs), [c(e.$slots, "default")], 16))
        }
    }), [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]
    ])),
    z = Object.freeze(Object.defineProperty({
        __proto__: null,
        ElIcon: k,
        default: k,
        iconProps: x
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    k as E, $ as _, E as a, j as b, b as c, _ as d, v as e, m as f, h as g, S as h, y as i, g as j, z as k, O as w
};