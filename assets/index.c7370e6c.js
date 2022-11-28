import {
    O as e,
    o as s,
    b as a,
    i as r,
    e as t,
    U as d,
    C as o,
    x as l,
    j as n,
    h as i,
    n as c
} from "./el-select.e274bb48.js";
import {
    b as p,
    d as y,
    _ as h,
    w as u
} from "./index.176a125e.js";
import {
    u as m
} from "./index.0e1148e8.js";
const b = p({
        header: {
            type: String,
            default: ""
        },
        bodyStyle: {
            type: y([String, Object, Array]),
            default: ""
        },
        shadow: {
            type: String,
            values: ["always", "hover", "never"],
            default: "always"
        }
    }),
    f = e({
        name: "ElCard"
    });
const v = u(h(e({ ...f,
    props: b,
    setup(e) {
        const p = m("card");
        return (e, y) => (s(), a("div", {
            class: r([t(p).b(), t(p).is(`${e.shadow}-shadow`)])
        }, [e.$slots.header || e.header ? (s(), a("div", {
            key: 0,
            class: r(t(p).e("header"))
        }, [d(e.$slots, "header", {}, (() => [o(l(e.header), 1)]))], 2)) : n("v-if", !0), i("div", {
            class: r(t(p).e("body")),
            style: c(e.bodyStyle)
        }, [d(e.$slots, "default")], 6)], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]
]));
export {
    v as E
};