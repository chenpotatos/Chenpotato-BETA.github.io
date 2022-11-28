import {
    g as e,
    Q as t,
    w as s,
    O as a,
    o as l,
    b as n,
    t as o,
    e as r,
    j as i,
    i as u,
    ar as m,
    K as p,
    L as c,
    U as k,
    k as d,
    ao as f,
    b5 as v
} from "./el-select.e274bb48.js";
import {
    b as y,
    _ as g,
    w as b,
    a as w
} from "./index.176a125e.js";
import {
    B as h
} from "./index.4e5ff846.js";
import {
    u as x
} from "./index.0e1148e8.js";
const j = y({
        animated: {
            type: Boolean,
            default: !1
        },
        count: {
            type: Number,
            default: 1
        },
        rows: {
            type: Number,
            default: 3
        },
        loading: {
            type: Boolean,
            default: !0
        },
        throttle: {
            type: Number
        }
    }),
    _ = y({
        variant: {
            type: String,
            values: ["circle", "rect", "h1", "h3", "text", "caption", "p", "image", "button"],
            default: "text"
        }
    }),
    S = a({
        name: "ElSkeletonItem"
    });
var $ = g(a({ ...S,
    props: _,
    setup(e) {
        const t = x("skeleton");
        return (e, s) => (l(), n("div", {
            class: u([r(t).e("item"), r(t).e(e.variant)])
        }, ["image" === e.variant ? (l(), o(r(h), {
            key: 0
        })) : i("v-if", !0)], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]
]);
const B = a({
    name: "ElSkeleton"
});
const E = b(g(a({ ...B,
    props: j,
    setup(a, {
        expose: y
    }) {
        const g = a,
            b = x("skeleton"),
            w = ((a, l = 0) => {
                if (0 === l) return a;
                const n = e(!1);
                let o = 0;
                const r = () => {
                    o && clearTimeout(o), o = window.setTimeout((() => {
                        n.value = a.value
                    }), l)
                };
                return t(r), s((() => a.value), (e => {
                    e ? r() : n.value = e
                })), n
            })(m(g, "loading"), g.throttle);
        return y({
            uiLoading: w
        }), (e, t) => r(w) ? (l(), n("div", f({
            key: 0,
            class: [r(b).b(), r(b).is("animated", e.animated)]
        }, e.$attrs), [(l(!0), n(p, null, c(e.count, (t => (l(), n(p, {
            key: t
        }, [e.loading ? k(e.$slots, "template", {
            key: t
        }, (() => [d($, {
            class: u(r(b).is("first")),
            variant: "p"
        }, null, 8, ["class"]), (l(!0), n(p, null, c(e.rows, (t => (l(), o($, {
            key: t,
            class: u([r(b).e("paragraph"), r(b).is("last", t === e.rows && e.rows > 1)]),
            variant: "p"
        }, null, 8, ["class"])))), 128))])) : i("v-if", !0)], 64)))), 128))], 16)) : k(e.$slots, "default", v(f({
            key: 1
        }, e.$attrs)))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]
]), {
    SkeletonItem: $
});
w($);
export {
    E
};